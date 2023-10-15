import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { SignInRequestDto } from '../../dtos/sign-in-request';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Message, MessageService } from 'primeng/api';
import { SignInResponseDto } from '../../dtos/sign-in-response';
import { UserService } from 'src/app/data-access/services/user/user.service';
import { UserDto } from 'src/app/data-access/dtos/api/UserDto';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  messages: Message[] | undefined

  signInForm = new FormGroup({
    login: new FormControl('',
    [ 
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64)
    ]
    ),
    password: new FormControl('',
    [ 
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(50)
    ])
  });

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _messageService: MessageService,
    private _userService: UserService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
  ){ }


  onSubmit() {
		if (this.signInForm.valid) {
			const formData = this.signInForm.value;
			const request: SignInRequestDto = {
				login: formData.login || "",
				password: formData.password || "",
			};

			this._authService
				.signIn(request)
				.pipe(
					tap((response) => {
            this.ref.close();
            // this._messageService.add({severity: 'success' , summary: 'Успешно!', detail: 'Вы вошли в систему'})
					})
				)
				.subscribe();
		}
	}
}
