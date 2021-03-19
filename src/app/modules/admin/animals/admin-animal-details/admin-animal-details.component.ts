import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments';
import {ActivatedRoute} from '@angular/router';
import {UserAuthService} from '../../../shared/services/user-auth-service/user-auth.service';
import {FileReaderAsDataUrl} from '../../../shared/models/file-reader-as-data-url';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IAdminAnimalDetailsGetResponse} from '../models/admin-animal-details/i-admin-animal-details-get-response';
import {IAdminAnimalDetailsPostPatchRequest} from '../models/admin-animal-details/i-admin-animal-details-post-patch-request';

const API_ANIMAL_BASE_URL = environment.apiUrl + '/animals/';

@Component({
  selector: 'app-admin-animal-details',
  templateUrl: './admin-animal-details.component.html',
  styleUrls: ['./admin-animal-details.component.css']
})
export class AdminAnimalDetailsComponent {
  addPermission = this.userAuthService.getUser().permissions.canAddAndRemoveAnimals; // todo rework to subscription if need
  editPermission = this.userAuthService.getUser().permissions.canEditAnimals; // todo rework to subscription if need

  loadedPhotoFile = '';
  imagePreview = '';
  imgUrl = '';
  dateAdded = '';
  dateLastEdit = '';
  editedBy = '';

  form: FormGroup = this.formBuilder.group({ // todo add validators
      id: new FormControl(''),
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
              private userAuthService: UserAuthService,
              private formBuilder: FormBuilder) {
    this.getAnimal(activatedRouter.snapshot.params.id);
  }

  public getAnimal(id?: number | string): void {
    if (!id) {
      return;
    }

    this.httpClient.get<IAdminAnimalDetailsGetResponse>(API_ANIMAL_BASE_URL + id).subscribe((res) => {
      this.form.setValue({
        id: res.id,
        age: res.age,
        breed: res.breed,
        sex: res.sex,
        color: res.color,
        features: res.features,
        responsiblePerson: res.responsiblePerson,
        complexVaccination: res.complexVaccination,
        rabiesVaccination: res.rabiesVaccination,
        sterilization: res.sterilization,
        animalHasFamily: res.animalHasFamily,
        showInGallery: res.showInGallery,
      });

      this.imgUrl = res.imgUrl;
      this.dateAdded = res.dateAdded;
      this.dateLastEdit = res.dateLastEdit;
      this.editedBy = res.editedBy;
    });
  }

  formReadonlyFieldCheck(): boolean {
    return !this.addPermission && !this.editPermission;
  }

  addPhoto(event: Event): void {
    const elem: HTMLInputElement = (event.target as HTMLInputElement);
    if (!elem.files) {
      return;
    }

    FileReaderAsDataUrl.readAsDataURL(elem.files[0]).subscribe(res => {
      this.imagePreview = res.fileContent;
      this.loadedPhotoFile = res.fileContent;
    }, error => {
      alert('Невдалося завантажити файл: ' + error);
    });
  }

  submitEditAnimal(): void {
    if (this.form.invalid) {
      alert('У формі є помилки');
      return;
    }

    const url = API_ANIMAL_BASE_URL + this.form.value.id;

    const req: IAdminAnimalDetailsPostPatchRequest = {
      ...this.form.value,
      imgUrl: this.imgUrl,
      dateAdded: this.dateAdded,
      dateLastEdit: this.dateLastEdit,
      editedBy: this.editedBy,
    };

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    this.httpClient.put(url, JSON.stringify(req), {headers}).subscribe(() => {
      this.getAnimal(this.form.value.id);
    }, (err) => this.submitErrorHandler(err));
  }

  submitAddAnimal(): void {
    if (this.form.invalid) {
      alert('У формі є помилки');
      return;
    }

    const url = API_ANIMAL_BASE_URL;

    const req: IAdminAnimalDetailsPostPatchRequest = {
      ...this.form.value,
      imgUrl: this.imgUrl,
      dateAdded: this.dateAdded,
      dateLastEdit: this.dateLastEdit,
      editedBy: this.editedBy,
    };

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.httpClient.post(url, JSON.stringify(req), {headers}).subscribe(() => {
      this.getAnimal(1); // todo get id from response
    }, (err) => this.submitErrorHandler(err));
  }

  submitErrorHandler(err: Error): void {
    alert('Сталася помилка при відправці форми: ' + err.message);
  }
}
