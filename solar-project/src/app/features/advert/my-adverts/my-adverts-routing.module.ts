import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAdvertsComponent } from './my-adverts.component';

const routes: Routes = [
  {
    path: '',
    component: MyAdvertsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAdvertsRoutingModule { }
