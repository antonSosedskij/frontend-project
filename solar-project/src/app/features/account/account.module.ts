import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';
import { SettingsModule } from './settings/settings.module';
import { ProfileModule } from './profile/profile.module';



@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SettingsModule,
    ProfileModule
  ]
})
export class AccountModule { }
