import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';

export const AboutRouting: Routes = [
  {
    path: '',
    // resolve: { posts: AboutResolver }, //todo
    component: AboutComponent,
  }
];
