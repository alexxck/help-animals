import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {UserAuthService} from '../../../shared/services/user-auth-service/user-auth.service';
import {FileReaderAsDataUrl} from '../../../shared/models/file-reader-as-data-url';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IAdminAnimalDetailsPostPatchRequest} from './models/i-admin-animal-details-post-patch-request';
import {AnimalDetailsConverters} from './models/animal-details-converters';
import {IAdminAnimalDetailsGetResponse} from './models/i-admin-animal-details-get-response';
import {ADMIN_ANIMALS_URL, API_ADMIN_ANIMALS_URL} from '../models/urls';
import {IAdminAnimalDetailsRequestResponseBaseParams} from './models/i-admin-animal-details-request-response-base-params';
import {IAdminAnimalDetails} from './models/i-admin-animal-details';

class AdminAnimalDetails implements IAdminAnimalDetails {
  age = 0;
  animalHasFamily = false;
  breed = '';
  color = '';
  complexVaccination = false;
  createdAt = '';
  editedBy = '';
  features = '';
  id = '';
  imageUrl = '';
  name = '';
  rabiesVaccination = false;
  responsiblePerson = '';
  sex = '';
  showInGallery = false;
  sterilization = false;
  updatedAt = '';
}


@Component({
  selector: 'app-admin-animal-details',
  templateUrl: './admin-animal-details.component.html',
  styleUrls: ['./admin-animal-details.component.css']
})
export class AdminAnimalDetailsComponent {
  animalsChangePermission = this.userAuthService.getUser().permissionForAddEditAndRemoveAnimals; // todo rework to subscription if need

  adminAnimalDetails: IAdminAnimalDetails = new AdminAnimalDetails();
  formWasChanged = false;

  loadedPhotoFile?: File;
  imagePreview = '';

  form: FormGroup = this.formBuilder.group({ // todo add validators
      id: new FormControl(''),
      name: new FormControl(''),
      age: new FormControl(0),
      breed: new FormControl(''),
      sex: new FormControl(''),
      color: new FormControl(''),
      features: new FormControl(''),
      responsiblePerson: new FormControl(''),
      complexVaccination: new FormControl(false),
      rabiesVaccination: new FormControl(false),
      sterilization: new FormControl(false),
      animalHasFamily: new FormControl(false),
      showInGallery: new FormControl(false),
    }
  );

  constructor(private httpClient: HttpClient,
              private activatedRouter: ActivatedRoute,
              private router: Router,
              private userAuthService: UserAuthService,
              private formBuilder: FormBuilder) {
    this.getAnimal(activatedRouter.snapshot.params.id);
    this.form.valueChanges.subscribe(val => this.formWasChanged = true);
  }

  public getAnimal(id?: number | string): void {
    if (!id) {
      return;
    }

    this.httpClient.get<IAdminAnimalDetailsGetResponse>(`${API_ADMIN_ANIMALS_URL}/${id}`).subscribe((res) => {
      this.adminAnimalDetails = AnimalDetailsConverters.convertAnimalGetResponseToAdminAnimalDetails(res);
      this.form.setValue({
        id: this.adminAnimalDetails.id,
        name: this.adminAnimalDetails.name,
        age: this.adminAnimalDetails.age,
        breed: this.adminAnimalDetails.breed,
        sex: this.adminAnimalDetails.sex,
        color: this.adminAnimalDetails.color,
        features: this.adminAnimalDetails.features,
        responsiblePerson: this.adminAnimalDetails.responsiblePerson,
        complexVaccination: this.adminAnimalDetails.complexVaccination,
        rabiesVaccination: this.adminAnimalDetails.rabiesVaccination,
        sterilization: this.adminAnimalDetails.sterilization,
        animalHasFamily: this.adminAnimalDetails.animalHasFamily,
        showInGallery: this.adminAnimalDetails.showInGallery,
      });
      this.formWasChanged = false;
    });
  }

  formReadonlyFieldCheck(): boolean {
    return !this.animalsChangePermission;
  }

  addPhoto(event: Event): void {
    const elem: HTMLInputElement = (event.target as HTMLInputElement);
    if (!elem.files) {
      return;
    }

    const file = elem.files[0];
    FileReaderAsDataUrl.readAsDataURL(file).subscribe(res => {
      this.imagePreview = res.fileContent;
      this.loadedPhotoFile = file;
    }, error => {
      alert('Невдалося завантажити файл: ' + error);
    });
  }

  submitEditAnimal(): void {
    if (this.form.invalid) {
      alert('У формі є помилки');
      return;
    }

    const url = `${API_ADMIN_ANIMALS_URL}/${this.form.value.id}`;
    const req: IAdminAnimalDetailsPostPatchRequest = {
      ...this.form.value as IAdminAnimalDetailsRequestResponseBaseParams,
      'image_attributes[file]': this.loadedPhotoFile || null,
    };

    const reqForm = AnimalDetailsConverters.convertAnimalPostPatchRequestToFormData(req);

    this.httpClient.patch(url, reqForm).subscribe(() => {
      this.getAnimal(this.form.value.id);
    }, (err) => this.submitErrorHandler(err));
  }

  submitAddAnimal(): void {
    if (this.form.invalid) {
      alert('У формі є помилки');
      return;
    }

    const req: IAdminAnimalDetailsPostPatchRequest = {
      ...this.form.value as IAdminAnimalDetailsRequestResponseBaseParams,
      'image_attributes[file]': this.loadedPhotoFile || null,
    };

    const reqForm = AnimalDetailsConverters.convertAnimalPostPatchRequestToFormData(req);
    this.httpClient.post<{ id: string }>(API_ADMIN_ANIMALS_URL, reqForm).subscribe((res) => {
      this.router.navigateByUrl(`${ADMIN_ANIMALS_URL}/${res.id}`);
    }, (err) => this.submitErrorHandler(err));
  }

  submitErrorHandler(err: Error): void {
    alert('Сталася помилка при відправці форми: ' + err.message);
  }

  printAnimal(): void {
    AnimalDetailsConverters.convertToPdf(this.adminAnimalDetails);
  }
}
