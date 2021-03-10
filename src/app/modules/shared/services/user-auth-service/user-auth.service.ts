import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Subject} from 'rxjs';

const COOKIES_USER_NAME = 'authServiceInfo';


export interface IUserAuthPermissions { //  todo maybe edit, if backend say
  isActive: boolean;
  canAddEditAndRemoveUsers: boolean;
  canAddAndRemoveAnimals: boolean;
  canEditAnimals: boolean;
  canCreateAndCloseAnimalRequests: boolean;
  canAddEditAndRemoveNews: boolean;
}

export class UserAuthPermissionsDefault implements IUserAuthPermissions {
  isActive = false;
  canAddEditAndRemoveUsers = false;
  canAddAndRemoveAnimals = false;
  canEditAnimals = false;
  canCreateAndCloseAnimalRequests = false;
  canAddEditAndRemoveNews = false;
}

export interface IUser {
  id: string;
  permissions: IUserAuthPermissions;
}

class User implements IUser {
  id = '';
  permissions = new UserAuthPermissionsDefault();
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private currentUser = new User();
  public userUpdatedEvent = new Subject<IUser>();

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
    this.currentUser = this.getUserFromCookies();
  }


  public isAuthorized(): boolean {
    return !!this.getUser().id.toString();
  }

  public getUser(): IUser {
    return this.currentUser;
  }

  saveUserToCookies(): void {
    this.cookieService.set(COOKIES_USER_NAME, btoa(JSON.stringify(this.currentUser)));
  }

  getUserFromCookies(): IUser {
    try {
      const userAsString = atob(this.cookieService.get(COOKIES_USER_NAME));
      return JSON.parse(userAsString);
    } catch (e) {
      return new User();
    }
  }

  public setUser(user: IUser): void {
    this.currentUser = user;
    this.saveUserToCookies();
    this.userUpdatedEvent.next(user);
  }

  public clearUser(): void {
    this.cookieService.delete(COOKIES_USER_NAME);
    this.currentUser = new User();
    this.userUpdatedEvent.next(this.currentUser);
  }
}
