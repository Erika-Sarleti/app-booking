import { Component, Input } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'itk-stars',
  template: `
    <div>
        <i class="icon"
        *ngFor="let star of 5 | inToArray; let i = index"
        [ngClass]="{
          'ion-ios-star': i < this.active!.stars,
          'ion-ios-star-outline': i >= this.active!.stars
        }"></i>
      </div>
  `,
  styles: [
  ]
})
export class StarsComponent {
  @Input() active: Hotel | undefined
}
