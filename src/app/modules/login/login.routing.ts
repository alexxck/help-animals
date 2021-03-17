import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const LoginRouting: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'passwordrecovery',
    loadChildren: () => import('../passwordRecovery/passwordrecovery.module').then(m => m.PasswordrecoveryModule),
  },
];
