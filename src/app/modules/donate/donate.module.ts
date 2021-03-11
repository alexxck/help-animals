import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateComponent } from './donate/donate.component';
import {RouterModule} from '@angular/router';
import {DonateRouting} from './donate.routing';



@NgModule({
  declarations: [DonateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DonateRouting)
  ]
})
export class DonateModule { }
