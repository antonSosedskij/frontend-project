import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { AdvertsGetResponseDto } from 'src/app/data-access/dtos/api/AdvertsGetResponseDto';
import { AdvertService } from 'src/app/data-access/services/advert/advert.service';
import { ImageService } from 'src/app/data-access/services/image/image.service';
import { UserService } from 'src/app/data-access/services/user/user.service';

@Component({
  selector: 'app-advert-rec',
  templateUrl: './advert-rec.component.html',
  styleUrls: ['./advert-rec.component.scss'],
})
export class AdvertRecComponent implements OnInit {

  adverts! : AdvertsGetResponseDto[];

  constructor(
    private advertService: AdvertService,
    private imageService: ImageService,
    private _userService: UserService
  ){}

  ngOnInit(): void {
    this.advertService.searchAdverts({search: '', showNoActive: false})
      .pipe(
        tap( (response : AdvertsGetResponseDto[]) => {
          this.adverts = response;
          console.log(this.adverts);
        }),
        map((response: AdvertsGetResponseDto[]) => {
          response.forEach(element => {
              if (element.imagesIds.length){
                this.imageService.getImageById(element.imagesIds[0])
                  .pipe(
                    tap(response => {
                      element.image = URL.createObjectURL(response);
                    })
                  ).subscribe()
              }
          });
        })
      ).subscribe();
   
  }
}
