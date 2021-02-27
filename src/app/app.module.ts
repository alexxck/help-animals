import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app-routing';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './core/components/nav-menu/nav-menu.component';
import {coreServices} from './core/services';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [...coreServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
