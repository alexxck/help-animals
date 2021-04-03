import {IAdminUserDetails} from './i-admin-user-details';

export interface IAdminUserDetailsGetResponse extends IAdminUserDetails {
  createDate: string;
  lastEditDate: string;
  editedBy: string;
}
