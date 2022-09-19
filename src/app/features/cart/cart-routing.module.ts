import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { ReservationSuccessComponent } from './reservation-success.component';



@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild([
    {path:'', component: CartComponent},
    { path:'success', component: ReservationSuccessComponent}
  ])

  ]
})
export class CartRoutingModule { }
