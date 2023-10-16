import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { GalleryModule } from 'src/app/shared/components/gallery/gallery.module';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    ButtonModule,
    GalleryModule,
    FormsModule,
    BreadcrumbModule,
    GalleriaModule
  ]
})
export class OverviewModule { }
