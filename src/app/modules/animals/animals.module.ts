import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnimalsListComponent} from './animals-list/animals-list.component';
import {RouterModule} from '@angular/router';
import {AnimalsRouting} from './animals.routing';


@NgModule({
  declarations: [AnimalsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AnimalsRouting)
  ]
})
export class AnimalsModule {
}
