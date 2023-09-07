import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertRoutingModule } from './advert-routing.module';
import { AdvertRecComponent } from './advert-rec/advert-rec.component';
import { RouterModule } from '@angular/router';
import { AdvertComponent } from './advert.component';
import { AdvertRecModule } from './advert-rec/advert-rec.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { MyAdvertsModule } from './my-adverts/my-adverts.module';
import { OverviewModule } from './overview/overview.module';
import { CreateModule } from './create/create.module';


@NgModule({
  declarations: [
    AdvertComponent
  ],
  imports: [
    CommonModule,
    AdvertRoutingModule,
    RouterModule,
    AdvertRecModule,
    MyAdvertsModule,
    OverviewModule,
    CreateModule
  ]
})
export class AdvertModule { }
