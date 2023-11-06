import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { tap } from 'rxjs';
import { SignInComponent } from 'src/app/core/auth/modals/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/core/auth/modals/sign-up/sign-up.component';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { UserDto } from 'src/app/data-access/dtos/api/user/UserDto';
import { UserService } from 'src/app/data-access/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  currentUserName = '';

  ref!: DynamicDialogRef;
  
  items : MenuItem[] = [
    {
      label: 'Настройки',
      routerLink: '/account/settings'
    },
    {
      label: 'Мои объявления',
      routerLink: '/adverts/mine'
    },
    {
      label: 'Выход',
      command: this.logout
    }
  ]

  constructor(
    private _dialogService: DialogService,
    public _authService: AuthService,
    private _userService: UserService,
    private _router: Router
  ) {}


  ngOnInit(){
    this._userService.userState$
      .pipe(
        tap(
          (response) => {
            if (response){
              this.currentUserName = response.name;
            }
            else this._userService.getCurrentUser().subscribe();
            console.log(response);
            
          }
        )
      )
      .subscribe();
  }

  showSignUp(){
    this.ref = this._dialogService.open(SignUpComponent, { 
      header: 'Регистрация',
      width: '30%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  showSignIn(){
    this.ref = this._dialogService.open(SignInComponent, { 
      header: 'Войти в аккаунт',
      width: '30%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  logout(){
    localStorage.clear();
    this._router.navigate(['']);
  }
  }



