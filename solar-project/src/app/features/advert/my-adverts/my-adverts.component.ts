import { Component, OnInit } from '@angular/core';
import { delay, filter, map, tap } from 'rxjs';
import { AdvertResponse } from 'src/app/data-access/dtos/advert-response';
import { AdvertService } from 'src/app/data-access/services/advert/advert.service';

@Component({
  selector: 'app-my-adverts',
  templateUrl: './my-adverts.component.html',
  styleUrls: ['./my-adverts.component.scss']
})
export class MyAdvertsComponent implements OnInit {
  adverts! : AdvertResponse[];

  myId = 'bcec3685-6bb3-4537-9e1a-6f36ac9aac82'

  constructor(
    private advertService : AdvertService
  ){}

  ngOnInit(){
    this.advertService.getAllAdverts()
      .pipe(
        map(response => 
          response.filter((r : AdvertResponse) => r.id === this.myId)
        ),
        delay(2000),
        tap(
          (response : AdvertResponse[]) => {
            this.adverts = response;
          } 
        )
      ).subscribe();
  }
}
