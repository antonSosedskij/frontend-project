import { Component } from '@angular/core';

@Component({
  selector: 'app-advert-rec',
  templateUrl: './advert-rec.component.html',
  styleUrls: ['./advert-rec.component.scss']
})
export class AdvertRecComponent {

  adverts = [
    {
      title: 'Продам гараж',
      price: 200000,
      address: 'г.Нигде, ул.Никакая',
      created_at: 'Севодня, 14,12'
    },
    {
      title: 'Daewoo MatiZ',
      price: 250000,
      address: 'г.Нигде, ул.Никакая',
      created_at: 'Севодня, 14:21'
    },
    {
      title: 'Opel Astra, 2013',
      price: 200000,
      address: 'г.Нигде, ул.Никакая',
      created_at: 'Вчера, 14:43'
    },
    {
      title: 'Продам гараж',
      price: 200000,
      address: 'г.Нигде, ул.Никакая',
      created_at: 'Севодня, 14,12'
    },

  ]

}
