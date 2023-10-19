import { NgModule, TemplateRef } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MapComponent } from './map.component';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { environment } from 'src/environment/environment';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    AngularYandexMapsModule.forRoot({
      apikey: environment.apiKeyYa
    }),
    NgIf
  ],
  exports: [MapComponent],

})
export class MapModule { }
