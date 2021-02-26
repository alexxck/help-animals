import {Injectable} from '@angular/core';

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
  phones: string[];
  email: string;
  permissions: UserPermission[];
}

class User implements IUser {
  id = '';
  login = '';
  name = '';
  phones = [];
  email = '';
  permissions = [];
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private user: IUser = new User();

  constructor() {
  }

  public getUserPermissions(): UserPermission[] {
    return this.user.permissions;
  }

  public hasPermission(permission: UserPermission): boolean {
    return !!this.user.permissions.find((e) => e === permission);
  }

  public get isAuthorized(): boolean {
    return !!this.user.id;
  }

  public setUser(user: IUser): void {
    this.user = user;
  }
}
