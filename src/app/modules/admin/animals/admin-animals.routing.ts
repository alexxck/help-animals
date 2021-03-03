import {Routes} from '@angular/router';
import {AdminAnimalListComponent} from './admin-animal-list/admin-animal-list.component';
import {AdminAnimalDetailsComponent} from './admin-animal-details/admin-animal-details.component';

export const AdminAnimalsRouting: Routes = [
  {
    path: '',
    // canActivate: [],
    component: AdminAnimalListComponent,
  },
  // {
  //   path: '/add',
  //   component: AdminAnimalAddComponent,
  // },
  {
    path: '/:id',
    component: AdminAnimalDetailsComponent,
  },
  // {
  //   path: '/:id/edit',
  //   component: AdminAnimalEditComponent,
  // }
];
