import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments';
import {CookieService} from 'ngx-cookie-service';
import {Subscription} from 'rxjs';

const COOKIES_USER_NAME = 'user';
const GET_CURRENT_USER_URL = environment.apiUrl + '/current_user';

export enum UserPermission {  //  todo maybe edit, if backend say
  CAN_ADD_USERS = 'CAN_ADD_USERS',
  CAN_EDIT_USERS = 'CAN_EDIT_USERS',
  CAN_ADD_ANIMALS = 'CAN_ADD_ANIMALS',
  CAN_EDIT_ANIMALS = 'CAN_EDIT_ANIMALS',
  CAN_CREATE_ANIMALS_REQUESTS = 'CAN_CREATE_ANIMALS_REQUESTS',
  CAN_CLOSE_ANIMALS_REQUESTS = 'CAN_CLOSE_ANIMALS_REQUESTS'
}

export interface IUser {
  id: string;
  login: string;
  name: string;
  phone1: string;
  phone2: string;
  email: string;
  permissions: string[];
}

class User implements IUser {
  id = '';
  login = '';
  name = '';
  phone1 = '';
  phone2 = '';
  email = '';
  permissions = new Array<string>();
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
    this.updateUserFromServer();
  }

  public getPermissions(): string[] {
    return this.getUser().permissions;
  }

  public hasPermission(permission: UserPermission): boolean {
    const user = this.getUser();
    return !!user.permissions.find((e) => e === permission);
  }

  public get isAuthorized(): boolean {
    return !!this.getUser().id;
  }

  public getUser(): IUser {
    const userStr = (this.cookieService.get(COOKIES_USER_NAME));
    if (userStr) {
      return JSON.parse(userStr);
    }

    const user = new User();
    this.saveUser(user);

    return user;
  }

  public saveUser(user: IUser): void {
    this.cookieService.set(COOKIES_USER_NAME, JSON.stringify(user));
  }

  public deleteUserFromCookies(): void {
    this.cookieService.delete(COOKIES_USER_NAME);
  }

  public updateUserFromServer(): Subscription {
    return this.httpClient.get<IUser>(GET_CURRENT_USER_URL).subscribe((res) => {
      this.saveUser(res);
      return res;
    });
  }
}
