import { Component, Input } from '@angular/core';

declare var ymaps: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @Input() geolocation!: number[];

  ngOnInit(){
    console.log(this.geolocation);
  }

}
