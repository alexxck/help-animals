import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminRouting} from './admin.routing';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(AdminRouting),
  ]
})
export class AdminModule {
}
