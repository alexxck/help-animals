import {IUserAuthPermissions} from '../../../../shared/services/user-auth-service/user-auth.service';

export interface IAdminUserListTableElement {
  id: string;
  name: string;
  phone1: string;
  phone2: string;
  email: string;
  lastEditDate: string;
  permissions: IUserAuthPermissions;
}
