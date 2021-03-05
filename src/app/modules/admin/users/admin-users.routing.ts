import {Routes} from '@angular/router';
import {AdminUserListComponent} from './admin-user-list/admin-user-list.component';

export const AdminUsersRouting: Routes = [
  {
    path: '',
    // canActivate: [],
    component: AdminUserListComponent,
  },
  {
    path: 'add',
    component: AdminUserListComponent,
  },
  {
    path: ':id',
    component: AdminUserListComponent,
  },
];
