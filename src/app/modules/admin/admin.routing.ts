import {Routes} from '@angular/router';
import {AboutComponent} from '../about/about/about.component';

export const AdminRouting: Routes = [
  {
    path: '',
    // resolve: { posts: AdminResolver }, // todo
    component: AboutComponent,
  }
];
