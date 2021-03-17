import {Routes} from '@angular/router';
import { SecurityGuard } from './guards/security.guard';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


export const PasswordRecoveryRouting: Routes = [
  {
    path: '',
    component: PasswordRecoveryComponent
  },
  { path: 'resetpassword',
    component: ResetPasswordComponent,
    canActivate: [SecurityGuard],
    canLoad: [SecurityGuard]
  }
];
