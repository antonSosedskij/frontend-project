import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAdvertsRoutingModule } from './my-adverts-routing.module';
import { MyAdvertsComponent } from './my-adverts.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';



@NgModule({
  declarations: [
    MyAdvertsComponent
  ],
  imports: [
    CommonModule,
    MyAdvertsRoutingModule,
    RouterModule,
    CardModule,
    ButtonModule,
    SkeletonModule
  ]
})
export class MyAdvertsModule { }
