import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { MapComponent } from './components/map/map.component';
import { RatesComponent } from './components/rates/rates.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { StarsComponent } from './components/stars/stars.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoResultsComponent } from './no-results.component';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SuccessComponent } from './success.component';
import { HotelListModule } from './components/hotel-list/hotel-list.module';



@NgModule({
  declarations: [
    SearchComponent,
    HotelFormComponent,
    MapComponent,
    RatesComponent,
    ReservationComponent,
    ServicesComponent,
    GalleryComponent,
    StarsComponent,
    NoResultsComponent,
    ReviewsComponent,
    SuccessComponent
  ],
  exports: [
    SearchComponent,
    HotelFormComponent,
    MapComponent,
    RatesComponent,
    ReservationComponent,
    ServicesComponent,
    GalleryComponent,
    StarsComponent,
    NoResultsComponent,
    ReviewsComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SearchRoutingModule,
    HotelListModule
  ]
})
export class SearchModule { }
