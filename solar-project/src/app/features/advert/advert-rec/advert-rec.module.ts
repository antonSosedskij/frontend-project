import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertRecRoutingModule } from './advert-rec-routing.module';
import { AdvertRecComponent } from './advert-rec.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ScrollTopModule } from 'primeng/scrolltop';



@NgModule({
  declarations: [
    AdvertRecComponent,
  ],
  imports: [
    CommonModule,
    AdvertRecRoutingModule,
    RouterModule,
    CardModule,
    ScrollTopModule
  ]
})
export class AdvertRecModule { }
