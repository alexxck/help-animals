import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminAnimalsRouting} from './admin-animals.routing';
import {AdminAnimalListComponent} from './admin-animal-list/admin-animal-list.component';
import {AdminAnimalDetailsComponent} from './admin-animal-details/admin-animal-details.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [AdminAnimalListComponent, AdminAnimalDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminAnimalsRouting),
    FormsModule,
  ]
})
export class AdminAnimalsModule {
}
