import {Component} from '@angular/core';
import {IAdminAnimalInfo} from '../models/i-admin-animal-info';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments';
import {ActivatedRoute} from '@angular/router';
import { UserAuthService} from '../../../shared/services/user-auth-service/user-auth.service';
import {FileReaderAsDataUrl} from '../../../shared/models/file-reader-as-data-url';

const API_ANIMAL_BASE_URL = environment.apiUrl + '/animals/';

interface LoadedPhotoFile {
  loadedPhotoFile?: string;
}

class AdminAnimalInfo implements IAdminAnimalInfo, LoadedPhotoFile {
  age = '';
  animalHasFamily = false;
  breed = '';
  color = '';
  complexVaccination = false;
  dateAdded = '';
  dateLastEdit = '';
  features = '';
  id = '';
  imgUrl = '';
  rabiesVaccination = false;
  responsiblePerson = '';
  state = '';
  sterilization = false;
  showInGallery = false;
  loadedPhotoFile?: string;
  editedBy = '';
}

@Component({
  selector: 'app-admin-animal-details',
  templateUrl: './admin-animal-details.component.html',
  styleUrls: ['./admin-animal-details.component.css']
})
export class AdminAnimalDetailsComponent {
  animal = new AdminAnimalInfo();
  addPermission = this.userAuthService.getUser().permissions.canAddAndRemoveAnimals;
  editPermission = this.userAuthService.getUser().permissions.canEditAnimals;
  imagePreview = '';

  constructor(private httpClient: HttpClient,
              private activatedRouter: ActivatedRoute,
              private userAuthService: UserAuthService) {
    this.getAnimal(activatedRouter.snapshot.params.id);
  }

  public getAnimal(id?: number | string): void {
    if (!id) {
      return;
    }

    this.httpClient.get<IAdminAnimalInfo>(API_ANIMAL_BASE_URL + id).subscribe((res) => {
      this.animal = res;
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
      this.animal.loadedPhotoFile = res.fileContent;
    }, error => {
      alert('Невдалося завантажити файл: ' + error);
    });
  }

  submitEditAnimal(): void {
    const url = API_ANIMAL_BASE_URL + this.animal.id;
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.httpClient.put(url, JSON.stringify(this.animal), {headers}).subscribe(() => {
      this.getAnimal(this.animal.id);
    }, (err) => this.submitErrorHandler(err));
  }

  submitAddAnimal(): void {
    const url = API_ANIMAL_BASE_URL;
    this.animal.id = '';
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.httpClient.post(url, JSON.stringify(this.animal), {headers}).subscribe(() => {
      this.getAnimal(this.animal.id);
    }, (err) => this.submitErrorHandler(err));
  }

  submitErrorHandler(err: Error): void{
    alert('Сталася помилка при відправці форми: ' + err.message);
  }
}
