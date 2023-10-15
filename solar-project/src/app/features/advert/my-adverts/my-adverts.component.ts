import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { delay, filter, map, tap } from 'rxjs';
import { AdvertResponse } from 'src/app/data-access/dtos/advert-response';
import { AdvertsGetResponseDto } from 'src/app/data-access/dtos/api/AdvertsGetResponseDto';
import { AdvertService } from 'src/app/data-access/services/advert/advert.service';
import { UserService } from 'src/app/data-access/services/user/user.service';

@Component({
  selector: 'app-my-adverts',
  templateUrl: './my-adverts.component.html',
  styleUrls: ['./my-adverts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyAdvertsComponent implements OnInit {
  myAdverts! : AdvertsGetResponseDto[];
  

  constructor(
    private advertService : AdvertService,
    private _userService: UserService,
    private _cdr: ChangeDetectorRef
  ){}

  ngOnInit(){
    this._userService.userState$
      .pipe(
        tap( response => {
          this.myAdverts = response?.adverts || [];
          this._cdr.detectChanges();
        })
      ).subscribe();
  }
}
