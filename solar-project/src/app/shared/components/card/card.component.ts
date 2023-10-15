import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AdvertsGetResponseDto } from 'src/app/data-access/dtos/api/AdvertsGetResponseDto';

@Component({
  selector: 'app-advert-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input() advert!: AdvertsGetResponseDto;

  constructor() {

  }

  ngOnInit(){
    console.log('haha');
    
  }

}
