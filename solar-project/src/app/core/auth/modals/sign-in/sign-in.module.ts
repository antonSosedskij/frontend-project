import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    MessagesModule,
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [MessageService]
})
export class SignInModule { }
