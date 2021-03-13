import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

const COOKIES_USER_NAME = 'authServiceInfo';


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

  private currentUser;
  public userUpdatedEvent = new Subject<IUser>();

  constructor(private httpClient: HttpClient) {
    this.currentUser = this.getUserFromStorage();
  }

  public isAuthorized(): boolean {
    return !!this.getUser().id.toString();
  }

  public getUser(): IUser {
    return this.currentUser;
  }

  private saveUserToStorage(): void {
    localStorage.setItem(COOKIES_USER_NAME, btoa(JSON.stringify(this.currentUser)));
  }

  private getUserFromStorage(): IUser {
    try {
      const encUser = localStorage.getItem(COOKIES_USER_NAME);
      if (!encUser) {
        return new User();
      }
      const userAsString = atob(encUser);
      return JSON.parse(userAsString);
    } catch (e) {
      return new User();
    }
  }

  public setUser(user: IUser): void {
    this.currentUser = user;
    this.saveUserToStorage();
    this.userUpdatedEvent.next(user);
  }

  public clearUser(): void {
    localStorage.removeItem(COOKIES_USER_NAME);
    this.setUser(new User());
  }

  /**
   * @In_dev
   */
  public setToken(): void {
    return;
  }

  /**
   * @In_dev
   */
  public getToken(login: string, password: string): void {
    return;
  }
}
