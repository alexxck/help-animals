import {Component, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments';
import {IPagination, Pagination} from '../../../shared/components/pagination/pagination.component';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {UserAuthService} from '../../../shared/services/user-auth-service/user-auth.service';
import {IAdminUserListGetResponse} from '../models/admin-user-list/i-admin-user-list-get-response';
import {IAdminUserListTableElement} from '../models/admin-user-list/i-admin-user-list-table-element';

const API_USERS_URL = environment.fakeApiUrl + '/users';
const ADMIN_USERS_URL = '/admin/users';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnDestroy {
  userList: IAdminUserListTableElement[] = [];
  pagination: IPagination;

  private querySubscription: Subscription;

  constructor(private httpClient: HttpClient, public userAuthService: UserAuthService, private activatedRoute: ActivatedRoute) {
    this.pagination = new Pagination();
    this.pagination.url = ADMIN_USERS_URL;

    this.querySubscription = this.activatedRoute.queryParams.subscribe(
      (queryParam: Params) => {
        this.pagination.page = queryParam.page;
        this.getUsers();
      }
    );
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

  public getUsers(): void {
    this.httpClient.get<IAdminUserListGetResponse>(API_USERS_URL).subscribe((res) => {
      this.userList = res as unknown as IAdminUserListTableElement[]; // todo remove after receive params from back
      this.pagination.totalPages = 10; // todo remove after receive params from back
      // this.userList = res.users; // todo set params from back
      // this.pagination.page = res.page; // todo set params from back
      // this.pagination.totalPages = res.totalPages; // todo set params from back
    });
  }

  public getRedirectToUserDetailsLink(id: number | string): string {
    return ADMIN_USERS_URL + '/' + id;
  }

  public getRedirectToUserAddLink(): string {
    return ADMIN_USERS_URL + '/add';
  }

}
