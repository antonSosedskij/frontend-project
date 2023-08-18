import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isAuthorized: boolean = true;

  items : MenuItem[] = [
    {
      label: 'Личный кабинет',
      routerLink: '/account'
    },
    {
      label: 'Мои обьъявления',
      routerLink: '/adverts/mine'
    },
    {
      label: 'Выход'
    }
  ]

}


