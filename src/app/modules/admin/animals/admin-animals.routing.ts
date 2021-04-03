import {Routes} from '@angular/router';
import {AdminAnimalListComponent} from './admin-animal-list/admin-animal-list.component';
import {AdminAnimalDetailsComponent} from './admin-animal-details/admin-animal-details.component';
import {AdminAnimalsFindRequestsComponent} from './admin-animals-find-requests/admin-animals-find-requests.component';

export const AdminAnimalsRouting: Routes = [
  {
    path: 'list',
    component: AdminAnimalListComponent,
  },
  {
    path: 'add',
    component: AdminAnimalDetailsComponent,
  },
  {
    path: 'find-requests',
    component: AdminAnimalsFindRequestsComponent,
  },
  {
    path: ':id',
    component: AdminAnimalDetailsComponent,
  },
  {
    path: '',
    // canActivate: [],
    redirectTo: 'list',
  },
];
