import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnimalListComponent} from './animal-list/animal-list.component';
import {RouterModule} from '@angular/router';
import {AnimalsRouting} from './animals.routing';
import {AnimalCardComponent} from './animal-card/animal-card.component';
import {PaginationComponent} from '../../shared/components/pagination/pagination.component';


@NgModule({
  declarations: [AnimalListComponent, AnimalCardComponent, PaginationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AnimalsRouting),
  ]
})
export class AnimalsModule {
}
