import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'itk-card',
  template: `
    <div>
      <div *ngIf="title" class="title">{{title}}</div>
      <div [ngClass]="{
        'content': cardPadding,
        'center': isCentered
      }">
        <ng-content></ng-content>
      </div>
    </div>

  `,
  styles: [
  ]
})
export class CardComponent  {
  @Input() title: string | undefined;
  @Input() isScrollable: boolean | undefined;
  @Input() isCentered: boolean | undefined;
  @Input() customClass: string | undefined;
  @Input() cardPadding= true;
  @HostBinding('className') get className(){
    let defaultClass = 'card';
    defaultClass += this.isScrollable ? ' scrollable' : '';
    defaultClass += this.customClass ? ` ${this.customClass}` : '';
    return defaultClass
  }



}
