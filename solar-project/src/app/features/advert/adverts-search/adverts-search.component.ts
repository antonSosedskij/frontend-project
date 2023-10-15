import { Component, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { AdvertsGetResponseDto } from 'src/app/data-access/dtos/api/AdvertsGetResponseDto';
import { AdvertService } from 'src/app/data-access/services/advert/advert.service';

@Component({
  selector: 'app-adverts-search',
  templateUrl: './adverts-search.component.html',
  styleUrls: ['./adverts-search.component.scss']
})
export class AdvertsSearchComponent {
  
  advertsBySearch : AdvertsGetResponseDto[] = [];
  search: string = ''

  constructor(
    private _route: ActivatedRoute,
    private _advertService: AdvertService,
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
                  response => this.advertsBySearch = response,
                  this.search = params['search'],
                ))
              .subscribe();
          }
        )
      )
      .subscribe(
        (params) => console.log('Params', params)
      );

  }

}
