import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject, Subscription} from 'rxjs';
import {environment} from '../../../../../environments';
import {Router} from '@angular/router';

const AUTHENTICATION_URL = environment.apiUrl + '/authenticate/token';
const GET_CURRENT_USER_URL = environment.apiUrl + '/authenticate/user';
const STORAGE_TOKEN_NAME = 'authToken';


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

  private currentUser;
  public userUpdatedEvent = new Subject<IUser>();
  private token: string | null;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.currentUser = new User();
    this.token = UserAuthService.getTokenFromStorage();

    if (this.token) {
      this.loadUserFromServer();
    }
  }

  private static getTokenFromStorage(): string | null {
    return localStorage.getItem(STORAGE_TOKEN_NAME);
  }

  private static saveTokenToStorage(token: string): void {
    if (token) {
      localStorage.setItem(STORAGE_TOKEN_NAME, btoa(token));
    }
  }

  public isAuthorized(): boolean {
    return !!this.getUser().id.toString();
  }

  public getUser(): IUser {
    return this.currentUser;
  }

  private loadUserFromServer(): Subscription {
    // return this.httpClient.get<IUser>(GET_CURRENT_USER_URL).subscribe((res) => { // todo rework for ad backend
    return this.httpClient.get<any>(GET_CURRENT_USER_URL).subscribe((res) => {
      this.setUser(res.user);
    });
  }

  public setUser(user: IUser): void {
    this.currentUser = user;
    this.userUpdatedEvent.next(user);
  }

  public getToken(): string | null {
    return this.token;
  }

  public login(email: string, password: string): void {
    // this.httpClient.post(AUTHENTICATION_URL, {email, password}) // todo use for real server
    this.httpClient.get(AUTHENTICATION_URL)
      .subscribe((resp: any) => {
        this.token = resp.token;
        this.loadUserFromServer();
        UserAuthService.saveTokenToStorage(resp.token);
        this.router.navigate(['']);
      });
  }

  public logout(): void {
    localStorage.removeItem(STORAGE_TOKEN_NAME);
    this.setUser(new User());
    this.router.navigate(['']);
  }
}
