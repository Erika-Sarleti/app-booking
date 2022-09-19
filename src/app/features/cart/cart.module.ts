import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { ReservationSuccessComponent } from './reservation-success.component';



@NgModule({
  declarations: [CartComponent, ReservationSuccessComponent],
  exports:[CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
