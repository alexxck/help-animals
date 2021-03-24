import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from './components/pagination/pagination.component';
import {RouterModule} from '@angular/router';
import {sharedServices} from './services';
import { LoaderComponent } from './components/loader/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [PaginationComponent, LoaderComponent],
  exports: [
    PaginationComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [...sharedServices,
    {
      provide: HTTP_INTERCEPTORS, // Injection Token
      useClass: AuthInterceptor, // Interceptor class
      multi: true, // we added array
    }],
})
export class SharedModule {
}
