import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoResultsComponent } from './no-results.component';
import { SearchComponent } from './search.component';
import { SuccessComponent } from './success.component';



@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild([
      {path:'', component: SearchComponent},
      {path:'no-results', component: NoResultsComponent},
      {path: 'success', component:SuccessComponent}
    ])
  ]
})
export class SearchRoutingModule { }
