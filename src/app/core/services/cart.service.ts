import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { CartItem } from 'src/app/model/cart-item';
import { Hotel, Room } from 'src/app/model/hotel';
import { Reservation } from 'src/app/model/reservation';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router){}

    addToCart(hotel: Hotel | undefined, room: Room | undefined){
      if(hotel&&room){
        this.items = [...this.items,
          {
            hotel: hotel,
            room: room,
            creationDate: Date.now()
          }
        ];
      }

    };



  removeItem(cartItem: CartItem){
    this.items = this.items.filter(item => item.creationDate !== cartItem.creationDate)
  }
  proceed(hotel: CartItem[], user: string | undefined ){
    const params: Reservation = {
      hotel: hotel,
      user: user

    }

    console.log(params)
    this.http.post<Reservation>(`http://localhost:3000/reservations`, {params})
      .pipe(
        catchError((err)=> of(err))
      )
      .subscribe()
    this.items = []
      this.router.navigateByUrl('cart/success')
  }
}
