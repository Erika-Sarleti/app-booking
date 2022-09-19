import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { Hotel } from 'src/app/model/hotel';
import { CartService } from 'src/app/core/services/cart.service';
import { Router } from '@angular/router';
import { Review } from 'src/app/model/review';
import { catchError, of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'itk-search',
  templateUrl: './search.component.html',

})
export class SearchComponent{
  constructor(
    public cart: CartService,
    private fb:FormBuilder,
    private http: HttpClient,
    private router:Router,
    public auth: AuthService,

    ) {
      this.searchHotels(this.text);
   }

  activeImage: string | undefined;

  //  SearchBar

  text: string = 'roma';
  hotels: Hotel[] | undefined;
  active: Hotel | undefined;

  form: FormGroup = this.fb.group({
    text: ['Roma']
  })

  searchHotels(inputText: string){
    this.text = inputText;
    this.http.get<any[]>(`http://localhost:3000/hotels?city=${inputText}`)
        .subscribe(res => {
          if (!res.length){
            console.log('nessun risultato')
            this.router.navigateByUrl('search/no-results');
            return;
          }
          this.hotels = res;
        this.setActive(this.hotels[0]);
      });
  }
  setActive(hotel: Hotel){
    this.active = hotel;
    this.activeImage = hotel.images[0];
  }



  // Reviews

  rating: number = 0;
  hover:number = 0;
  stars: number[] = [1, 2, 3,4,5]

  review: FormGroup = this.fb.group({
    rating:['', Validators.required],
    msg: ['', Validators.required]
  })

  onHoverStar( i:number){
    this.hover =  this.stars[i - 1]
    }

  onStarLeave() {
    this.hover = 0
  }

  onSetRating(i:number){
    this.rating = this.stars[i - 1];
    this.review.controls['rating'].setValue(this.rating);
  }

  sendReview({msg}: { msg: string}): void{
    let params: Review = {
      stars: this.rating,
      review: msg,
      hotel: this.active?.name,
      user: this.auth.data?.name
    }
    console.log(this.review.getRawValue() )
    this.http.post<Review>('http://localhost:3000/reviews', params)
    .pipe(
      catchError((err)=> of(err))
    )
    .subscribe(
    );
    this.rating = 0;
    this.review.reset()
    this.router.navigateByUrl('search/success')
  }

  // PopUp



}




