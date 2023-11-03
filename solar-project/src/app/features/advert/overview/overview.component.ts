import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concat, concatMap, filter, map, tap } from 'rxjs';
import { AdvertResponse } from 'src/app/data-access/dtos/advert-response';
import { AdvertGetByIdResponseDto } from 'src/app/data-access/dtos/api/advert/AdvertGetByIdResponseDto';
import { ImageDto } from 'src/app/data-access/dtos/api/image/ImageDto';
import { ImageGetDto } from 'src/app/data-access/dtos/api/image/ImageGetDto';
import { AdvertService } from 'src/app/data-access/services/advert/advert.service';
import { DadataService } from 'src/app/data-access/services/dadata/dadata.service';
import { ImageService } from 'src/app/data-access/services/image/image.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {

  advertId!: string;
  advert!: AdvertGetByIdResponseDto;
  images: any[] = [];

  isPhoneHiding = true;

  geo_lat = 0;
  geo_lon = 0;



  constructor(
    private _advertService: AdvertService,
    private _imageService: ImageService,
    private _dadata: DadataService,
    private _route: ActivatedRoute
  ){}


  ngOnInit() :void {
    this.advertId = this._route.snapshot.params['id'];
    console.log(this.advertId);
    
    this._advertService
      .getAdvertById(this.advertId)
      .pipe(
        concatMap((response: AdvertGetByIdResponseDto) => {
          this.advert = response;
          this._dadata.getSuggestedAddresses({query: response.location})
            .pipe(
              tap(
                response => {
                  console.log(response);
                  this.geo_lat = Number(response.suggestions[0].data.geo_lat);
                  this.geo_lon = Number(response.suggestions[0].data.geo_lon);
                }
              )
            ) 
            .subscribe(); //вынести в метод
          const imageObservables = response.imagesIds.map((element: string) => {
            return this._imageService.getImageById(element).pipe(
              tap((image) => {
                console.log('Response', image);
                this.images.push({
                  imageSrc: URL.createObjectURL(image),
                  thumbnailImageSrc: URL.createObjectURL(image),
                });
              })
            );
          });
          return concat(...imageObservables);
        })
      )
      .subscribe(() => {
        console.log(this.advert); 
      });
  }

  showPhone(){
    this.isPhoneHiding = !this.isPhoneHiding;
  }

  checkPhoneState(){
    if(this.isPhoneHiding){
      return 'Показать телефон'
    }
    return this.advert.phone
  }

}
