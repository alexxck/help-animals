import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animals'
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./modules/donate/donate.module').then(m => m.DonateModule)
  },
  {
    path: 'animals',
    loadChildren: () => import('./modules/animals/animals.module').then(m => m.AnimalsModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'passwordrecovery',
    loadChildren: () => import('./modules/passwordRecovery/passwordrecovery.module').then(m => m.PasswordrecoveryModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
