import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertRoutingModule } from './advert-routing.module';
import { AdvertRecComponent } from './advert-rec/advert-rec.component';
import { RouterModule } from '@angular/router';
import { AdvertComponent } from './advert.component';
import { AdvertRecModule } from './advert-rec/advert-rec.module';


@NgModule({
  declarations: [
    AdvertComponent
  ],
  imports: [
    CommonModule,
    AdvertRoutingModule,
    RouterModule,
    AdvertRecModule
  ]
})
export class AdvertModule { }
