import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app-routing';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './core/components/nav-menu/nav-menu.component';
import {HeaderComponent} from './core/components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {coreServices} from './shared/services';
import {SharedModule} from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    SharedModule
  ],
  providers: [...coreServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
