import { Component } from '@angular/core';

@Component({
  selector: 'itk-success',
  template: `
    <div class="wrapper centered">
      <div class="card vh-centered center">
        <div class="title">Grazie!</div>
        <div class="content">
          La tua recensione è stata inviata correttamente
        </div>
        <button type="submit" routerLink="../" >BACK</button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class SuccessComponent {

}
