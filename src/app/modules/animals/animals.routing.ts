import {Routes} from '@angular/router';
import {AnimalsListComponent} from './animals-list/animals-list.component';

export const AnimalsRouting: Routes = [
  {
    path: '',
    // resolve: { posts: AnimalsResolver }, // todo
    component: AnimalsListComponent,
  }
];
