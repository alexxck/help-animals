import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {environment} from '../../../../../environments';
import {Router} from '@angular/router';

const AUTHENTICATION_URL = environment.apiUrl + '/login'; // BE api
const GET_CURRENT_USER_URL = environment.fakeApiUrl + '/authUser';

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

class UserGuest extends UserAuthPermissionsDefault implements IUser {
  id = '';
}

const userGuest = new UserGuest();

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private currentUser: IUser;
  public userUpdatedEvent = new Subject<IUser>();
  private token: string;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.token = UserAuthService.getTokenFromStorage() || '';
    this.currentUser = UserAuthService.getUserFromStorage() || userGuest;

    if (this.token && !this.isAuthorized()) {
      this.loadUserFromServer(); // todo Error: NG0200: Circular dependency in DI detected for UserAuthService.
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
      // return JSON.parse(atob(userStr));  // todo fix
      return JSON.parse(userStr); // todo fix
    }

    return null;
  }

  private saveUserToStorage(user: IUser): void {
    if (!this.isAuthorized()) {
      return;
    }
    // localStorage.setItem(STORAGE_USER_NAME, btoa(JSON.stringify(user))); // todo fix
    localStorage.setItem(STORAGE_USER_NAME, JSON.stringify(user)); // todo fix
  }

  public isAuthorized(): boolean {
    return !!this.getUser().id.toString();
  }

  public getUser(): IUser {
    return this.currentUser;
  }

  public setUser(user: IUser): void {
    this.currentUser = user;
    this.saveUserToStorage(user);
    this.userUpdatedEvent.next(user);
  }

  private loadUserFromServer(): void {
    this.httpClient.get<{ user: IUser }>(GET_CURRENT_USER_URL).subscribe((res) => {
        this.setUser(res.user);
      }, err => {
        console.log(err);
      }
    );
  }

  public getToken(): string {
    return this.token;
  }

  public setToken(token: string): void {
    this.token = token;
    UserAuthService.saveTokenToStorage(token);
  }

  public login(email: string, password: string): void {
    // const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    // this.httpClient.post<{token: string}>(AUTHENTICATION_URL, JSON.stringify({email, password}), {headers})  // todo use for real server
    this.httpClient.get<{ token: string }>(environment.fakeApiUrl + '/login')                        // todo use for fake API
      .subscribe((resp: any) => {
        this.setToken(resp.token);
        this.loadUserFromServer();
        this.router.navigate(['']);
      }, error => {
        console.log(error);
      });
  }

  public logout(): void {
    localStorage.removeItem(STORAGE_TOKEN_NAME);
    localStorage.removeItem(STORAGE_USER_NAME);
    this.setToken('');
    this.setUser(userGuest);
    this.router.navigate(['']);
  }
}
