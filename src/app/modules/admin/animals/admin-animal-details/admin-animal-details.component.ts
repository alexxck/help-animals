import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments';
import {ActivatedRoute, Router} from '@angular/router';
import {UserAuthService} from '../../../shared/services/user-auth-service/user-auth.service';
import {FileReaderAsDataUrl} from '../../../shared/models/file-reader-as-data-url';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IAdminAnimalDetailsPostPatchRequest} from './models/i-admin-animal-details-post-patch-request';
import {AnimalDetailsConverters} from './models/animal-details-converters';
import {IAdminAnimalDetailsGetResponse} from './models/i-admin-animal-details-get-response';
import {convertTimestampToLocalDateTime} from '../../../shared/models/convert-timestamp-to-locale-date-time';
import {ADMIN_ANIMALS_URL, API_ADMIN_ANIMALS_URL} from '../models/urls';
import {IAdminAnimalDetailsRequestResponseBaseParams} from './models/i-admin-animal-details-request-response-base-params';


@Component({
  selector: 'app-admin-animal-details',
  templateUrl: './admin-animal-details.component.html',
  styleUrls: ['./admin-animal-details.component.css']
})
export class AdminAnimalDetailsComponent {
  animalsChangePermission = this.userAuthService.getUser().permissionForAddEditAndRemoveAnimals; // todo rework to subscription if need

  loadedPhotoFile?: File;
  imagePreview = '';
  imageUrl = '';
  createdAt = '';
  updatedAt = '';
  editedBy = '';

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
  }

  public getAnimal(id?: number | string): void {
    if (!id) {
      return;
    }

    this.httpClient.get<IAdminAnimalDetailsGetResponse>(`${API_ADMIN_ANIMALS_URL}/${id}`).subscribe((res) => {
      this.form.setValue({
        id: res.id,
        name: res.name,
        age: res.age,
        breed: res.breed,
        sex: res.sex,
        color: res.color,
        features: res.features,
        responsiblePerson: res.responsible_person,
        complexVaccination: res.complex_vaccination,
        rabiesVaccination: res.rabies_vaccination,
        sterilization: res.sterilization,
        animalHasFamily: res.animal_has_family,
        showInGallery: res.show_in_gallery,
      });

      this.imageUrl = res.image ? environment.serverHost + res.image.file.url : '';
      this.createdAt = convertTimestampToLocalDateTime(res.created_at);
      this.updatedAt = convertTimestampToLocalDateTime(res.updated_at);
      this.editedBy = res.edited_by;
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
}
