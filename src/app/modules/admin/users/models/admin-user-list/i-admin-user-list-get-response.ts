import {IAdminUserListTableElement} from './i-admin-user-list-table-element';

export interface IAdminUserListGetResponse {
  users: IAdminUserListTableElement[];
  page: number;
  totalPages: number;
}
