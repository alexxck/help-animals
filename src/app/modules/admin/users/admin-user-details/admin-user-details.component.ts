import {AfterViewInit, Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {UserAuthService} from '../../../shared/services/user-auth-service/user-auth.service';
import {IAdminUserDetailsGetResponse} from './models/i-admin-user-details-get-response';
import {IAdminUserDetails} from './models/i-admin-user-details';
import {API_ADMIN_USERS_URL} from '../models/urls';
import {convertTimestampToLocalDateTime} from '../../../shared/models/convert-timestamp-to-locale-date-time';

class AdminUserDetails implements IAdminUserDetails {
  email = '';
  id = '';
  isActive = false;
  login = '';
  name = '';
  password = '';
  permissionForAddEditAndRemoveAnimals = false;
  permissionForAddEditAndRemoveUsers = false;
  permissionForCreateAndCloseAnimalRequests = false;
  permissionForEditAnimals = false;
  phone1 = '';
  phone2 = '';
  createdAt = '';
  editedBy = '';
  updatedAt = '';
}

@Component({
  selector: 'app-user-animal-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css']
})
export class AdminUserDetailsComponent implements AfterViewInit {
  userDetails = new AdminUserDetails();

  constructor(private httpClient: HttpClient,
              private activatedRouter: ActivatedRoute,
              public userAuthService: UserAuthService) {
  }

  ngAfterViewInit(): void {
    this.getUser(this.activatedRouter.snapshot.params.id);
  }

  public getUser(id?: number | string): void {
    if (!id) {
      return;
    }

    this.httpClient.get<IAdminUserDetailsGetResponse>(`${API_ADMIN_USERS_URL}/${id}`).subscribe((res) => {
      this.userDetails.id = res.id.toString();
      this.userDetails.login = res.login;
      this.userDetails.name = res.name;
      this.userDetails.phone1 = res.phone1;
      this.userDetails.phone2 = res.phone2;
      this.userDetails.email = res.email;

      this.userDetails.isActive = res.is_active;
      this.userDetails.permissionForAddEditAndRemoveUsers = res.permission_for_add_edit_and_remove_users;
      this.userDetails.permissionForAddEditAndRemoveAnimals = res.permission_for_add_edit_and_remove_animals;
      this.userDetails.permissionForCreateAndCloseAnimalRequests = res.permission_for_create_and_close_animal_requests;

      this.userDetails.createdAt = convertTimestampToLocalDateTime(res.created_at);
      this.userDetails.updatedAt = convertTimestampToLocalDateTime(res.updated_at);
      this.userDetails.editedBy = res.edited_by;
    });
  }
}
