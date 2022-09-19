import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HotelListComponent,
    ContactFormComponent
  ],
  exports:[
    HotelListComponent,
    ContactFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ]
})
export class HotelListModule { }
