import {Routes} from '@angular/router';
import {AnimalListComponent} from './animal-list/animal-list.component';

export const AnimalsRouting: Routes = [
  {
    path: '',
    // resolve: { posts: AnimalsResolver }, // todo
    component: AnimalListComponent,
  }
];
