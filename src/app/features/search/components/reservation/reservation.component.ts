import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Hotel, Room } from 'src/app/model/hotel';

@Component({
  selector: 'itk-reservation',
  template: `
 <div class="horiz-grid separator" *ngFor="let room of active?.rooms">
        <div>{{room.label}}</div>
        <div>
          € {{room.price}}
          <i class="ion-ios-cart" (click)="addToCart.emit(room)"></i>
        </div>
      </div>
  `,
  styles: [
  ]
})
export class ReservationComponent  {
  @Input() active: Hotel | undefined;
  @Output() addToCart: EventEmitter<Room>= new EventEmitter
}
