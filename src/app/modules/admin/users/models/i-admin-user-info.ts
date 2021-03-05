import {IUserAuthPermissions} from '../../../shared/services/user-auth-service/user-auth.service';

export interface IAdminUserInfo {
  id: string;
  login: string;
  name: string;
  phone1: string;
  phone2: string;
  email: string;
  createDate: string;
  lastEditDate: string;
  permissions: IUserAuthPermissions;
}
