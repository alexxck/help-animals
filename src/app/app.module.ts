import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRouting} from './app-routing';
import {AppComponent} from './app.component';
import {NavMenuComponent} from './core/components/nav-menu/nav-menu.component';
import {HeaderComponent} from './core/components/header/header.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NavMenuNewComponent} from './core/components/nav-menu-new/nav-menu-new.component';
import {FullSizeHeaderComponent} from './core/components/full-size-header/full-size-header.component';
import {NavMenuMobileComponent} from './core/components/nav-menu-mobile/nav-menu-mobile.component';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HeaderComponent,
    NavMenuNewComponent,
    FullSizeHeaderComponent,
    NavMenuMobileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
  ],
  providers : [{
    provide: HTTP_INTERCEPTORS, // Injection Token
    useClass: AuthInterceptor, // Interceptor class
    multi: true, // we added array
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
