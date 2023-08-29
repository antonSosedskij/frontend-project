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
        id: '7d65b74b-20dd-4fcf-94a4-698fa525ff9d',
        title: 'Продам гараж',
        price: 200000,
        address: 'г.Нигде, ул.Никакая',
        created_at: 'Севодня, 14,12',
        user_id: 'bcec3685-6bb3-4537-9e1a-6f36ac9aac82'
      },
      {
        id: '0f67a9d3-0c1f-4ff0-9a46-751c73fedbec',
        title: 'Daewoo MatiZ',
        price: 250000,
        address: 'г.Нигде, ул.Никакая',
        created_at: 'Севодня, 14:21',
        user_id: 'bcec3685-6bb3-4537-9e1a-6f36ac9aac82'
      },
      {
        id: 'bd552e9d-290e-474c-a3b5-e6c756756f3a',
        title: 'Opel Astra, 2013',
        price: 200000,
        address: 'г.Нигде, ул.Никакая',
        created_at: 'Вчера, 14:43',
        user_id: '55cb3820-bcc5-48be-9f4d-cbfc18173007'
      },
      {
        id: 'c50a2f7d-039a-4d48-bf89-5149a7190439',
        title: 'Продам гараж',
        price: 200000,
        address: 'г.Нигде, ул.Никакая',
        created_at: 'Севодня, 14,12',
        user_id: 'bcec3685-6bb3-4537-9e1a-6f36ac9aac82'
      },
      {
        id: 'e8433c1b-8b5c-4aee-a7a1-488a47cfe6cc',
        title: 'Opel Meriva, 2015',
        price: 550000,
        address: 'г.Нигде, ул.Никакая',
        created_at: 'Вчера, 14:43',
        user_id: '55cb3820-bcc5-48be-9f4d-cbfc18173007'
      },
      {
        id: '9de7fcf2-c62e-4bcc-b9bc-fdf88aa219bf',
        title: 'Opel Astra, 2013',
        price: 200000,
        address: 'г.Нигде, ул.Никакая',
        created_at: 'Вчера, 14:43',
        user_id: '55cb3820-bcc5-48be-9f4d-cbfc18173007'
      },
      {
        id: 'e8433c1b-8b5c-4aee-a7a1-488a47cfe6cc',
        title: 'Opel Astra, 2015',
        price: 450000,
        address: 'г.Нигде, ул.Никакая',
        created_at: 'Вчера, 14:32',
        user_id: '5454efb3-26fe-47ae-af49-eb51ef213603'
      },
      {
        id: '7a2d9528-b3bc-49dd-89e2-022286a91edf',
        title: 'iphone 15+ pro max xxl в розовом цвете',
        price: 500000,
        address: 'г.Севастополь, ул.Малая Речная, 23',
        created_at: 'Сегодня, 15:21',
        user_id: '55cb3820-bcc5-48be-9f4d-cbfc18173007'      }
    ]
  }
}
