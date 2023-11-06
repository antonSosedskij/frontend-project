import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertsSearchRoutingModule } from './adverts-search-routing.module';
import { AdvertsSearchComponent } from './adverts-search.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { EmptyPageModule } from 'src/app/shared/components/empty-page/empty-page.module';
import { SkeletonModule } from 'primeng/skeleton';


@NgModule({
  declarations: [
    AdvertsSearchComponent
  ],
  imports: [
    CommonModule,
    AdvertsSearchRoutingModule,
    EmptyPageModule,
    CardModule,
    SkeletonModule
  ]
})
export class AdvertsSearchModule { }
