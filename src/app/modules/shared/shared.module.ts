import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from './components/pagination/pagination.component';
import {RouterModule} from '@angular/router';
import {sharedServices} from './services';


@NgModule({
  declarations: [PaginationComponent],
  exports: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [...sharedServices],
})
export class SharedModule {
}
