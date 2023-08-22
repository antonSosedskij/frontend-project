import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { AdvertResponse } from '../../dtos/advert-response';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor() { }


  getAllAdverts() : Observable<AdvertResponse[]> {
    return of(this.getAdverts())
  }

  private getAdverts(){
    return [
      {
        id: 'bcec3685-6bb3-4537-9e1a-6f36ac9aac82',
        title: 'Продам гараж',
        price: 200000,
        address: 'г.Нигде, ул.Никакая',
        created_at: 'Севодня, 14,12'
      },
      {
        id: '0f67a9d3-0c1f-4ff0-9a46-751c73fedbec',
        title: 'Daewoo MatiZ',
        price: 250000,
        address: 'г.Нигде, ул.Никакая',
        created_at: 'Севодня, 14:21'
      },
      {
        id: 'bd552e9d-290e-474c-a3b5-e6c756756f3a',
        title: 'Opel Astra, 2013',
        price: 200000,
        address: 'г.Нигде, ул.Никакая',
        created_at: 'Вчера, 14:43'
      },
      {
        id: 'c50a2f7d-039a-4d48-bf89-5149a7190439',
        title: 'Продам гараж',
        price: 200000,
        address: 'г.Нигде, ул.Никакая',
        created_at: 'Севодня, 14,12'
      },
      {
        id: 'e8433c1b-8b5c-4aee-a7a1-488a47cfe6cc',
        title: 'Opel Meriva, 2015',
        price: 550000,
        address: 'г.Нигде, ул.Никакая',
        created_at: 'Вчера, 14:43'
      },
      {
        id: 'bcec3685-6bb3-4537-9e1a-6f36ac9aac82',
        title: 'Opel Astra, 2013',
        price: 200000,
        address: 'г.Нигде, ул.Никакая',
        created_at: 'Вчера, 14:43'
      },
      {
        id: 'e8433c1b-8b5c-4aee-a7a1-488a47cfe6cc',
        title: 'Opel Astra, 2015',
        price: 450000,
        address: 'г.Нигде, ул.Никакая',
        created_at: 'Вчера, 14:32'
      },
      {
        id: 'bcec3685-6bb3-4537-9e1a-6f36ac9aac82',
        title: 'iphone 15+ pro max xxl в розовом цвете',
        price: 500000,
        address: 'г.Севастополь, ул.Малая Речная, 23',
        created_at: 'Сегодня, 15:21'
      }
    ]
  }
}
