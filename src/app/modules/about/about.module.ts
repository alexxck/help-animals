import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about/about.component';
import {RouterModule} from '@angular/router';
import {AboutRouting} from './about.routing';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AboutRouting),
  ]
})
export class AboutModule {
}
