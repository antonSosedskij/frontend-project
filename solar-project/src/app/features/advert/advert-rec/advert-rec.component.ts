import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { delay, map, tap } from 'rxjs';
import { AdvertsGetResponseDto } from 'src/app/data-access/dtos/api/advert/AdvertsGetResponseDto';
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
  isLoading = true;

  constructor(
    private advertService: AdvertService,
    private imageService: ImageService,
    private _userService: UserService
  ){}

  ngOnInit(): void {
    this.advertService.searchAdverts({search: '', showNoActive: false})
      .pipe(
        delay(4000),
        tap( (response : AdvertsGetResponseDto[]) => {
          if (response){
            this.adverts = response;
            this.isLoading = false;
          }
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
