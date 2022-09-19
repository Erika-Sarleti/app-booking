import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { InToArrayPipe } from './pipes/in-to-array.pipe';
import { SeparatorComponent } from './components/separator/separator.component';



@NgModule({
  declarations: [
    CardComponent,
    InToArrayPipe,
    SeparatorComponent,
  ],
  exports:[
    CardComponent,
    InToArrayPipe,
    SeparatorComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
