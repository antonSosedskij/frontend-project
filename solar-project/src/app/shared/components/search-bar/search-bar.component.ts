import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  items! : MenuItem[];


  ngOnInit(){
    this.items = [
      {
        label: 'Автомобили'
      },
      {
        label: 'Электроника'
      }
    ]
  }
}
