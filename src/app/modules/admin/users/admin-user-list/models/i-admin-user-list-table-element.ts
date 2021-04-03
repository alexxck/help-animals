import {IUserAuthPermissions} from '../../../../shared/services/user-auth-service/user-auth.service';

export interface IAdminUserListTableElement extends IUserAuthPermissions{
  id: string;
  name: string;
  phone1: string;
  phone2: string;
  email: string;
  updated_at: string;
}
