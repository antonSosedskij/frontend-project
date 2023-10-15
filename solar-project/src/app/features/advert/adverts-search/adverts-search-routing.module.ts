import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertsSearchComponent } from './adverts-search.component';

const routes: Routes = [
  {
    path: '',
    component: AdvertsSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertsSearchRoutingModule { }
