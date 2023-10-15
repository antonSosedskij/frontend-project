import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CardComponent } from './card.component';
import { DateTimePipe } from '../../pipes/date-time/date-time.pipe';

import localeRu from '@angular/common/locales/ru';
import { ImagePipe } from '../../pipes/image/image.pipe';


// registerLocaleData(localeRu)


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    DateTimePipe,
    ImagePipe
  ],
  exports: [
    CardComponent
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'ru-RU' }
  ]
})
export class CardModule { }
