import {Routes} from '@angular/router';

export const AdminRouting: Routes = [
  {
    path: 'animals',
    // canActivate: ,
    loadChildren: () => import('./animals/admin-animals.module').then(m => m.AdminAnimalsModule)
  }
];
