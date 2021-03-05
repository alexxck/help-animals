import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnimalListComponent} from './animal-list/animal-list.component';
import {RouterModule} from '@angular/router';
import {AnimalsRouting} from './animals.routing';
import {AnimalCardComponent} from './animal-card/animal-card.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [AnimalListComponent, AnimalCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AnimalsRouting),
    SharedModule,
  ]
})
export class AnimalsModule {
}
