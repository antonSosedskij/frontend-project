import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs';
import { AdvertsGetResponseDto } from 'src/app/data-access/dtos/api/advert/AdvertsGetResponseDto';
import { AdvertService } from 'src/app/data-access/services/advert/advert.service';
import { ImageService } from 'src/app/data-access/services/image/image.service';

@Component({
  selector: 'app-adverts-search',
  templateUrl: './adverts-search.component.html',
  styleUrls: ['./adverts-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvertsSearchComponent {
  
  advertsBySearch : AdvertsGetResponseDto[] = [];
  search: string = ''
  isEmpty!: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _advertService: AdvertService,
    private _imageService: ImageService,
    private _cdr: ChangeDetectorRef
  ) {
  
  }

  ngOnInit(){
    this._route.queryParams
      .pipe(
        tap(
          params => {
            this._advertService.searchAdverts({search: params['search'], showNoActive: false})
              .pipe(
                tap(
                response => {
                  if (response.length !== 0){
                    this.advertsBySearch = response
                    this.isEmpty = false
                    console.log(this.isEmpty);
                  } else this.isEmpty = true

                  this.search = params['search']
                }
                ),
                map((response: AdvertsGetResponseDto[]) => {
                  response.forEach(element => {
                      if (element.imagesIds.length){
                        this._imageService.getImageById(element.imagesIds[0])
                          .pipe(
                            tap(image => {
                              element.image = URL.createObjectURL(image);
                              this._cdr.detectChanges()
                            })
                          ).subscribe()
                      }
                  });
                }))
              .subscribe();
          }
        )
      )
      .subscribe(
        (params) => console.log('Params', params),
      );

  }

  // ngOnDestroy(){
  //   this.isEmpty = false;
  // }

}
