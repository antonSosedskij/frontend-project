import { Component, OnInit } from '@angular/core';
import { debounceTime, delay, filter, map, take, tap } from 'rxjs';
import { AdvertResponse } from 'src/app/data-access/dtos/advert-response';
import { AdvertService } from 'src/app/data-access/services/advert/advert.service';

@Component({
  selector: 'app-advert-rec',
  templateUrl: './advert-rec.component.html',
  styleUrls: ['./advert-rec.component.scss']
})
export class AdvertRecComponent implements OnInit {

  adverts! : AdvertResponse[];

  constructor(
    private advertService: AdvertService
  ){}

  ngOnInit(): void {
    this.advertService.getAllAdverts()
      .pipe(
        delay(4000),
        tap( (response : AdvertResponse[]) => {
          this.adverts = response;
          console.log(this.adverts);
        }),
      ).subscribe();
  }
}
