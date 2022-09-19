import { Component, Input } from '@angular/core';

@Component({
  selector: 'itk-no-results',
  template: `
   <div class="wrapper centered">
      <div class="card vh-centered center">
        <div class="title">No results</div>
        <div class="content">
          Nessun risultato è stato trovato con questa ricerca
        </div>
        <button type="submit" routerLink="../" >BACK</button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class NoResultsComponent  {
  @Input() text: string | undefined;

}
