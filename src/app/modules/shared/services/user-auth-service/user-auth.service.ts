import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject, Subscription} from 'rxjs';
import {environment} from '../../../../../environments';
import {Router} from '@angular/router';

const AUTHENTICATION_URL = environment.apiUrl + '/authenticate/token';
const GET_CURRENT_USER_URL = environment.apiUrl + '/authenticate/user';
const STORAGE_TOKEN_NAME = 'authToken';
const STORAGE_USER_NAME = 'authUser';

export interface IUserAuthPermissions { //  todo maybe edit, if backend say
  isActive: boolean;
  permissionForAddEditAndRemoveUsers: boolean;
  permissionForAddAndRemoveAnimals: boolean;
  permissionForEditAnimals: boolean;
  permissionForCreateAndCloseAnimalRequests: boolean;
}

export class UserAuthPermissionsDefault implements IUserAuthPermissions {
  isActive = false;
  permissionForAddEditAndRemoveUsers = false;
  permissionForAddAndRemoveAnimals = false;
  permissionForEditAnimals = false;
  permissionForCreateAndCloseAnimalRequests = false;
}

interface IUser extends IUserAuthPermissions {
  id: string;
}

class User extends UserAuthPermissionsDefault implements IUser {
  id = '';
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private currentUser: IUser;
  public userUpdatedEvent = new Subject<IUser>();
  private token: string;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.currentUser = UserAuthService.getUserFromStorage() || new User();
    this.token = UserAuthService.getTokenFromStorage() || '';

    if (this.token && !this.isAuthorized()) {
      this.loadUserFromServer();
    }
  }

  private static getTokenFromStorage(): string | null {
    return localStorage.getItem(STORAGE_TOKEN_NAME);
  }

  private static saveTokenToStorage(token: string): void {
    if (token) {
      localStorage.setItem(STORAGE_TOKEN_NAME, token);
    }
  }

  private static getUserFromStorage(): IUser | null {
    const userStr = localStorage.getItem(STORAGE_USER_NAME);
    if (userStr) {
      return JSON.parse(atob(userStr));
    }

    return null;
  }

  private static saveUserToStorage(user: IUser): void {
    if (user) {
      localStorage.setItem(STORAGE_USER_NAME, btoa(JSON.stringify(user)));
    }
  }

  public isAuthorized(): boolean {
    return !!this.getUser().id.toString();
  }

  public getUser(): IUser {
    return this.currentUser;
  }

  public setUser(user: IUser): void {
    this.currentUser = user;
    UserAuthService.saveUserToStorage(user);
    this.userUpdatedEvent.next(user);
  }

  private loadUserFromServer(): Subscription {
    // return this.httpClient.get<IUser>(GET_CURRENT_USER_URL).subscribe((res) => { // todo rework for ad backend
    return this.httpClient.get<any>(GET_CURRENT_USER_URL).subscribe((res) => {
      this.setUser(res.user);
    });
  }

  public getToken(): string {
    return this.token;
  }

  public setToken(token: string): void {
    this.token = token;
    UserAuthService.saveTokenToStorage(token);
  }

  public login(email: string, password: string): void {
    // this.httpClient.post(AUTHENTICATION_URL, {email, password}) // todo use for real server
    this.httpClient.get(AUTHENTICATION_URL)
      .subscribe((resp: any) => {
        this.setToken(resp.token);
        this.loadUserFromServer();
        this.router.navigate(['']);
      });
  }

  public logout(): void {
    localStorage.removeItem(STORAGE_TOKEN_NAME);
    localStorage.removeItem(STORAGE_USER_NAME);
    this.setToken('');
    this.setUser(new User());
    this.router.navigate(['']);
  }
}
