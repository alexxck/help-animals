import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../../../environments';

const COOKIES_USER_NAME = 'user';
const GET_CURRENT_USER_URL = environment.apiUrl + '/current_user';

export interface IUserAuthPermissions { //  todo maybe edit, if backend say
  isActive: boolean;
  canAddEditAndRemoveUsers: boolean;
  canAddAndRemoveAnimals: boolean;
  canEditAnimals: boolean;
  canCreateAndCloseAnimalRequests: boolean;
}

export class UserAuthPermissionsDefault implements IUserAuthPermissions {
  isActive = false;
  canAddEditAndRemoveUsers = false;
  canAddAndRemoveAnimals = false;
  canEditAnimals = false;
  canCreateAndCloseAnimalRequests = false;
}

export interface IUser {
  id: string;
  login: string;
  email: string;
  permissions: IUserAuthPermissions;
}

class User implements IUser {
  id = '';
  login = '';
  email = '';
  permissions = new UserAuthPermissionsDefault();
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
    this.getUserFromServer().subscribe();
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

  public getUserFromServer(): Observable<IUser> {
    return this.httpClient.get<IUser>(GET_CURRENT_USER_URL).pipe(
      map((res) => {
        this.saveUser(res);
        return res;
      }));
  }
}
