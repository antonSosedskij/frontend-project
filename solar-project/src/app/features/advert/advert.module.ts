import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertRoutingModule } from './advert-routing.module';
import { RouterModule } from '@angular/router';
import { AdvertComponent } from './advert.component';
import { AdvertRecModule } from './advert-rec/advert-rec.module';
import { MyAdvertsModule } from './my-adverts/my-adverts.module';
import { OverviewModule } from './overview/overview.module';
import { CreateModule } from './create/create.module';
import { GalleriaModule } from 'primeng/galleria';
import { AdvertsSearchModule } from './adverts-search/adverts-search.module';
import { ToastModule } from 'primeng/toast';
import { MapModule } from 'src/app/shared/components/map/map.module';


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
    AdvertsSearchModule,
    CreateModule,
    GalleriaModule,
    ToastModule,
    MapModule
  ]
})
export class AdvertModule { }
