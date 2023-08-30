import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  images = [
    {
      imageUrl: 'https://placehold.co/600x400',
      thumbnailImgUrl: 'https://placehold.co/600x400'
    },
    {
      imageUrl: 'https://placehold.co/900x600',
      thumbnailImgUrl: 'https://placehold.co/600x400'
    }
  ]

}
