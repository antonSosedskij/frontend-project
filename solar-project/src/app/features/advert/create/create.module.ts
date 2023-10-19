import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    InputNumberModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    AutoCompleteModule,
    ToastModule
  ]
})
export class CreateModule { }
