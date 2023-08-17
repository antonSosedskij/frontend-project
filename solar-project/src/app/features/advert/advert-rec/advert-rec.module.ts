import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertRecRoutingModule } from './advert-rec-routing.module';
import { AdvertRecComponent } from './advert-rec.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdvertRecComponent,
  ],
  imports: [
    CommonModule,
    AdvertRecRoutingModule,
    RouterModule
  ]
})
export class AdvertRecModule { }
