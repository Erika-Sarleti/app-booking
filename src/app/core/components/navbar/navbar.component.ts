import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  template: `
  <div class="nav-container" *ngIf="auth.isLogged()">
    <div class="logo">
      BOOKING
    </div>
    <div class="routes">
      <div class="nav-item">{{auth.data?.name}}</div>
      <div class="nav-item" routerLink="search"> Search</div>
      <div class="nav-item" routerLink="cart"> Carrello ({{cart.items.length}})</div>
      <div class="nav-item"(click)="auth.logout()">Logout</div>

    </div>

  </div>
`,
  selector: 'itk-navbar',

})
export class NavbarComponent implements OnInit {

  constructor(
    public cart: CartService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
