import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'itk-hotel-form',
  template: `
    <form  [formGroup]="form">
      <input type="text" placeholder="City (Rome or Milan)" formControlName="text" name="text">
      <button (click)="searchHotels.emit(form.value.text.toLowerCase())" type="submit">SEARCH</button>
    </form>
  `,
  styles: [
  ]
})
export class HotelFormComponent  {

  @Input() form!: FormGroup;
  @Output() searchHotels: EventEmitter<string> = new EventEmitter<string>



}
