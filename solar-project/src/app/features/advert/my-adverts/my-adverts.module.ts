import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAdvertsRoutingModule } from './my-adverts-routing.module';
import { MyAdvertsComponent } from './my-adverts.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MyAdvertsComponent
  ],
  imports: [
    CommonModule,
    MyAdvertsRoutingModule,
    RouterModule
  ]
})
export class MyAdvertsModule { }
