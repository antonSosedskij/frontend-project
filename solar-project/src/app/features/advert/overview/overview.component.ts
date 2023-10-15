import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, tap } from 'rxjs';
import { AdvertResponse } from 'src/app/data-access/dtos/advert-response';
import { AdvertGetByIdResponseDto } from 'src/app/data-access/dtos/api/AdvertGetByIdResponseDto';
import { ImageDto } from 'src/app/data-access/dtos/api/ImageDto';
import { ImageGetDto } from 'src/app/data-access/dtos/api/ImageGetDto';
import { AdvertService } from 'src/app/data-access/services/advert/advert.service';
import { ImageService } from 'src/app/data-access/services/image/image.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {

  advertId!: string;
  advert!: AdvertGetByIdResponseDto;
  images: string[] = [];

  constructor(
    private _advertService: AdvertService,
    private _imageService: ImageService,
    private _route: ActivatedRoute
  ){}

  ngOnInit():void{
    this.advertId = this._route.snapshot.params['id'];
    console.log(this.advertId);
    
    this._advertService.getAdvertById(this.advertId)
      .pipe(
        tap((response: AdvertGetByIdResponseDto) => {
          this.advert = response,
          response.imagesIds.forEach((element : string) => {
            this._imageService.getImageById(element)
              .pipe(
                tap((response) => {
                  this.images.push(URL.createObjectURL(response));
                  
                } )
              )
              .subscribe();
          });
          console.log(this.images);
          
        }
      ))
      .subscribe();
  }
}
