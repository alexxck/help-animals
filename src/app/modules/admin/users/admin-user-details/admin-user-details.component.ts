import {Component} from '@angular/core';
import {IAdminUserInfo} from '../models/i-admin-user-info';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments';
import {ActivatedRoute} from '@angular/router';
import {IUserAuthPermissions, UserDefaultAuthPermissions, UserAuthService} from '../../../shared/services/user-auth-service/user-auth.service';

const API_USER_BASE_URL = environment.apiUrl + '/users/';

class AdminUserInfo implements IAdminUserInfo {
  createDate = '';
  email = '';
  id = '';
  lastEditDate = '';
  login = '';
  name = '';
  permissions = new UserDefaultAuthPermissions();
  phone1 = '';
  phone2 = '';

}

@Component({
  selector: 'app-user-animal-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css']
})
export class AdminUserDetailsComponent {
  user = new AdminUserInfo();
  addPermission = this.userAuthService.getUser().permissions.canAddAndRemoveUsers;
  editPermission = this.userAuthService.getUser().permissions.canEditUsers;
  imagePreview = '';

  constructor(private httpClient: HttpClient,
              private activatedRouter: ActivatedRoute,
              public userAuthService: UserAuthService) {
    this.getUser(activatedRouter.snapshot.params.id);
  }

  public getUser(id?: number | string): void {
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
      this.getUser(this.user.id);
    }, (err) => this.submitErrorHandler(err));
  }

  submitAddUser(): void {
    const url = API_USER_BASE_URL;
    this.user.id = '';
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.httpClient.post(url, JSON.stringify(this.user), {headers}).subscribe(() => {
      this.getUser(this.user.id);
    }, (err) => this.submitErrorHandler(err));
  }

  submitErrorHandler(err: Error): void {
    alert('Сталася помилка при відправці форми: ' + err.message);
  }
}
