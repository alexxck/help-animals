import {Component} from '@angular/core';
import {IAdminUserInfo} from '../models/i-admin-user-info';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments';
import {ActivatedRoute} from '@angular/router';
import {UserAuthPermission, UserAuthService} from '../../../shared/services/user-auth-service/user-auth.service';

const API_USER_BASE_URL = environment.apiUrl + '/animals/';

class AdminUserInfo implements IAdminUserInfo {
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
}

@Component({
  selector: 'app-user-animal-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css']
})
export class AdminUserDetailsComponent {
  user = new AdminUserInfo();
  addPermission = this.userAuthService.hasPermission(UserAuthPermission.CAN_ADD_AND_REMOVE_ANIMALS);
  editPermission = this.userAuthService.hasPermission(UserAuthPermission.CAN_EDIT_ANIMALS);
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

    this.httpClient.get<IAdminUserInfo>(API_USER_BASE_URL + id).subscribe((res) => {
      this.user = res;
    });
  }

  formReadonlyFieldCheck(): boolean {
    return !this.addPermission && !this.editPermission;
  }

  submitEditUser(): void {
    const url = API_USER_BASE_URL + this.user.id;
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.httpClient.put(url, JSON.stringify(this.user), {headers}).subscribe(() => {
      this.getAnimal(this.user.id);
    }, (err) => this.submitErrorHandler(err));
  }

  submitAddUser(): void {
    const url = API_USER_BASE_URL;
    this.user.id = '';
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.httpClient.post(url, JSON.stringify(this.user), {headers}).subscribe(() => {
      this.getAnimal(this.user.id);
    }, (err) => this.submitErrorHandler(err));
  }

  submitErrorHandler(err: Error): void {
    alert('Сталася помилка при відправці форми: ' + err.message);
  }
}
