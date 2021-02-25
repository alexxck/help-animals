import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about'
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  // {
  //   path: 'news',
  //   loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule)
  // },
  // {
  //   path: 'help_us',
  //   loadChildren: () => import('./modules/help-us/help-us.module').then(m => m.HelpUsModule)
  // },
  // {
  //   path: 'animals',
  //   loadChildren: () => import('./modules/animals/animals.module').then(m => m.AnimalsModule)
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
