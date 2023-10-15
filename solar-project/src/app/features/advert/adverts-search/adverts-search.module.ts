import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertsSearchRoutingModule } from './adverts-search-routing.module';
import { AdvertsSearchComponent } from './adverts-search.component';
import { CardModule } from 'src/app/shared/components/card/card.module';


@NgModule({
  declarations: [
    AdvertsSearchComponent
  ],
  imports: [
    CommonModule,
    AdvertsSearchRoutingModule,
    CardModule
  ]
})
export class AdvertsSearchModule { }
