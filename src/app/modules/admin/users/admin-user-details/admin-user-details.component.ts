import {Component} from '@angular/core';
import {IAdminUserInfo} from '../models/i-admin-user-info';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments';
import {ActivatedRoute, Router} from '@angular/router';
import {UserAuthPermissionsDefault, UserAuthService} from '../../../shared/services/user-auth-service/user-auth.service';

const API_USER_BASE_URL = environment.apiUrl + '/users/';
const ROUTER_URL = '/admin/users/';

/**
 * Using in form <input name="..."> to send data for backend
 */
enum UserAccessFieldNames {
  IS_ACTIVE = 'isActive',
  CAN_ADD_EDIT_AND_REMOVE_USERS = 'canAddEditAndRemoveUsers',
  CAN_ADD_AND_REMOVE_ANIMALS = 'canAddAndRemoveAnimals',
  CAN_EDIT_ANIMALS = 'canEditAnimals',
  CAN_CREATE_AND_CLOSE_ANIMAL_REQUESTS = 'canCreateAndCloseAnimalRequests',
  CAN_ADD_EDIT_AND_REMOVE_NEWS = 'canAddEditAndRemoveNews'
}

class AdminUserInfo implements IAdminUserInfo {
  id = '';
  login = '';
  password = '';
  passwordConfirm = '';
  name = '';
  phone1 = '';
  phone2 = '';
  email = '';
  createDate = '';
  lastEditDate = '';
  permissions = new UserAuthPermissionsDefault();
  editedBy = '';
}

@Component({
  selector: 'app-user-animal-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css']
})
export class AdminUserDetailsComponent {
  editedUser = new AdminUserInfo();
  currentUser = this.userAuthService.getUser();
  imagePreview = '';
  userAccessFieldNames = UserAccessFieldNames;

  constructor(private httpClient: HttpClient,
              private activatedRouter: ActivatedRoute,
              public userAuthService: UserAuthService,
              private router: Router) {
    this.getUser(activatedRouter.snapshot.params.id);
  }

  public getUser(id?: number | string): void {
    if (!id) {
      return;
    }

    this.httpClient.get<IAdminUserInfo>(API_USER_BASE_URL + id).subscribe((res) => {
      this.editedUser = res;
    });
  }

  formReadonlyFieldCheck(): boolean {
    return !this.currentUser.permissions.canAddEditAndRemoveUsers;
  }

  submitEditUser(): void {
    const url = API_USER_BASE_URL + this.editedUser.id;
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    this.httpClient.put(url, JSON.stringify(this.editedUser), {headers}).subscribe(() => {
      this.getUser(this.editedUser.id);
    }, (err) => this.submitErrorHandler(err));
  }

  submitAddUser(): void {
    const url = API_USER_BASE_URL;
    this.editedUser.id = '';
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.httpClient.post(url, JSON.stringify(this.editedUser), {headers}).subscribe(() => {
      this.router.navigate([ROUTER_URL]);
      // this.getUser(this.editedUser.id);
    }, (err) => this.submitErrorHandler(err));
  }

  submitErrorHandler(err: Error): void {
    alert('Сталася помилка при відправці форми: ' + err.message);
  }
}
