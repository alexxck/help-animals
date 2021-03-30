import {AfterViewInit, Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments';
import {ActivatedRoute, Router} from '@angular/router';
import {UserAuthService} from '../../../shared/services/user-auth-service/user-auth.service';
import {FormBuilder, FormControl} from '@angular/forms';
import {IAdminUserDetailsGetResponse} from '../models/admin-user-details/i-admin-user-details-get-response';
import {IAdminUserDetails} from '../models/admin-user-details/i-admin-user-details';

const API_USER_BASE_URL = environment.fakeApiUrl + '/users/';
const ROUTER_URL = '/admin/users/';


@Component({
  selector: 'app-user-animal-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css']
})
export class AdminUserDetailsComponent implements AfterViewInit {
  currentUser = this.userAuthService.getUser();

  form = this.formBuilder.group({
    id: new FormControl(),
    login: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    phone1: new FormControl(''),
    phone2: new FormControl(''),
    email: new FormControl(''),

    isActive: new FormControl(false),
    permissionForAddEditAndRemoveUsers: new FormControl(false),
    permissionForAddAndRemoveAnimals: new FormControl(false),
    permissionForEditAnimals: new FormControl(false),
    permissionForCreateAndCloseAnimalRequests: new FormControl(false),
  });

  createdDate = '';
  lastEditDate = '';
  editedBy = '';

  constructor(private httpClient: HttpClient,
              private activatedRouter: ActivatedRoute,
              public userAuthService: UserAuthService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngAfterViewInit(): void {
    this.getUser(this.activatedRouter.snapshot.params.id);
  }

  public getUser(id?: number | string): void {
    if (!id) {
      return;
    }

    this.httpClient.get<IAdminUserDetailsGetResponse>(API_USER_BASE_URL + id).subscribe((res) => {
      this.form.setValue({
        id: res.id.toString(),
        login: res.login,
        password: '',
        name: res.name,
        phone1: res.phone1,
        phone2: res.phone2,
        email: res.email,

        isActive: res.isActive,
        permissionForAddEditAndRemoveUsers: res.permissionForAddEditAndRemoveUsers,
        permissionForAddAndRemoveAnimals: res.permissionForAddAndRemoveAnimals,
        permissionForEditAnimals: res.permissionForEditAnimals,
        permissionForCreateAndCloseAnimalRequests: res.permissionForCreateAndCloseAnimalRequests,
      });

      this.createdDate = res.createDate;
      this.lastEditDate = res.lastEditDate;
      this.editedBy = res.editedBy;
    });
  }

  formReadonlyFieldCheck(): boolean {
    return !this.currentUser.permissionForAddEditAndRemoveUsers;
  }

  submitEditUser(): void {
    const url = API_USER_BASE_URL + this.form.value.id;
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    const req: IAdminUserDetails = this.form.value;

    this.httpClient.put(url, JSON.stringify(req), {headers}).subscribe(() => {
      this.getUser(this.form.value.id);
    }, (err) => this.submitErrorHandler(err));
  }

  submitAddUser(): void {
    const url = API_USER_BASE_URL;
    const req: IAdminUserDetails = this.form.value;

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.httpClient.post(url, JSON.stringify(req), {headers}).subscribe(() => {
      this.router.navigate([ROUTER_URL]);
      // this.getUser(this.editedUser.id);
    }, (err) => this.submitErrorHandler(err));
  }

  submitErrorHandler(err: Error): void {
    alert('Сталася помилка при відправці форми: ' + err.message);
  }
}
