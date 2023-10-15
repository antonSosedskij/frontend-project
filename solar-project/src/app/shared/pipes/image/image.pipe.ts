import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
  standalone: true
})
export class ImagePipe implements PipeTransform {

  transform(value: string): string {
    if (value == null || value == ''){
      return 'https://placehold.co/600x400'
    }
    
    return value
  }

}