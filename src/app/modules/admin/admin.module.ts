import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminRouting} from './admin.routing';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRouting),
  ]
})
export class AdminModule {
}
