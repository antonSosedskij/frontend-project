import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpRequestDto } from '../../dtos/sign-up-request';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64)
    ]),
    login: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(50)
    ]),
  });

    constructor(
      private _authService: AuthService,
      private _router: Router,
      private _messageService: MessageService,
      public config: DynamicDialogConfig,
      public ref: DynamicDialogRef,
    ){}

    onSubmit(){
      if (this.signUpForm.valid) {
        const formData = this.signUpForm.value;
        const request: SignUpRequestDto = {
          name: formData.name || "",
          login: formData.login || "",
          password: formData.password || "",
        };
  
        this._authService.signUp(request).subscribe((response) => {
          this._router.navigate(["/"]);
          console.log(response);
          this.ref.close();
          this._messageService.add({severity: 'success' , summary: 'Успешно!', detail: 'Вы зарегистрировались'})
        });
      }
    }

}
