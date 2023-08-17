import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertRecComponent } from './advert-rec.component';

const routes: Routes = [
  {
    path: '',
    component: AdvertRecComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertRecRoutingModule { }
