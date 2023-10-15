import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datetime',
  standalone: true
})
export class DateTimePipe implements PipeTransform {

  transform(value: string) : unknown {
    return moment(value).fromNow();
  }

}
