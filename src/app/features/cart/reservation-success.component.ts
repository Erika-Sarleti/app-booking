import { Component } from '@angular/core';

@Component({
  selector: 'itk-reservation-success',
  template: `
    <div class="wrapper centered">
      <div class="card vh-centered center">
        <div class="title"> Complimenti! </div>
        <div class="content">
          Hai effettuato con successo la tua prenotazione
        </div>
        <button type="submit" routerLink="search" >BACK</button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ReservationSuccessComponent  {

}
