import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { tap } from 'rxjs';
import { UserService } from 'src/app/data-access/services/user/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
  
  userId!: string;

  userUpdateForm = new FormGroup(
    {
      name: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(64)
      ]),
      login: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(64)
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50)
      ]),
    }
  );

  constructor(
    private _userService: UserService,
    private _messageService: MessageService,
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(){
    this._userService.userState$
      .pipe(
        tap(
          response => {
            if (response){
              this.userId = response.id
            }
          })
      )
      .subscribe();
      
  }

  onSubmit(){
    const request = new FormData();
    if(this.userUpdateForm.valid){
      request.append('name', this.userUpdateForm.value.name || '');
      request.append('login', this.userUpdateForm.value.login || '')
      request.append('password', this.userUpdateForm.value.password || '')
    }

    this._userService.updateUser(request, this.userId)
      .pipe(
        tap( (response) => {
          console.log(response),
          this._messageService.add({severity: 'success', summary: 'Успешно', detail: 'Ваши данные обновлены'});
        })
      )
      .subscribe();
  }


}
