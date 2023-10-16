import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ImageGetDto } from 'src/app/data-access/dtos/api/image/ImageGetDto';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {

  @Input() images : any[] = [];

  constructor(
    private _cdr: ChangeDetectorRef
  ){}

  ngDoCheck(){
    this._cdr.detectChanges();
  }
  // images = [
  //   {
  //     imageUrl: 'https://placehold.co/600x400',
  //     thumbnailImgUrl: 'https://placehold.co/600x400'
  //   },
  //   {
  //     imageUrl: 'https://placehold.co/900x600',
  //     thumbnailImgUrl: 'https://placehold.co/600x400'
  //   }
  // ]


}
