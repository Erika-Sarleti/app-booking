import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';


@Component({
  selector: 'itk-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  {

  constructor(public cart: CartService,
    public auth: AuthService) { }
}
