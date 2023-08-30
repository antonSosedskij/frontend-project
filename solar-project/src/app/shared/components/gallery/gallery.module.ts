import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleriaModule } from 'primeng/galleria'



@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
