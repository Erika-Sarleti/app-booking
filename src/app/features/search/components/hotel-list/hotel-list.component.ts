import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Hotel } from 'src/app/model/hotel';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'itk-hotel-list',
  template: `
    <div class="font-big"*ngIf="hotels">Hotel in {{text}} </div>

    <div class="horiz-grid separator"
    *ngFor="let hotel of hotels"
    (click)="setActive.emit(hotel)"
    [ngClass]="{'active': hotel.id === active?.id}">
      <div>{{ hotel.name }}</div>
      <div>da € {{hotel.rooms[0].price}} </div>
      <i class="small-icon ion-ios-mail" (click)="openDialog()"></i>
    </div>

    <div class="separator"></div>
    <div class="horiz-grid">
      <div></div>
      <em>{{hotels?.length}} results</em>
    </div>
  `,
  styles: [
  ]
})
export class HotelListComponent {
  @Input() hotels: Hotel[] | undefined;
  @Input() active: Hotel | undefined;
  @Input() text: string = '';
  @Output() setActive: EventEmitter<Hotel> = new EventEmitter<Hotel>();


  constructor(
    private dialogRef: MatDialog){}



    openDialog(){
      this.dialogRef.open(ContactFormComponent,
        {
          data: {
            hotelEmail: this.active?.email,

          }
        })
    }
}
