import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile'
  },
  {
    path: 'profile',
    title: 'Личный кабинет',
    component: AccountComponent,
    loadChildren: () => 
      import('./profile/profile-routing.module').then(
        (m) => m.ProfileRoutingModule
        )
  },
  {
    path: 'settings',
    title: 'Настройки аккаунта',
    component: AccountComponent,
    loadChildren: () => 
      import('./settings/settings-routing.module').then(
        (m) => m.SettingsRoutingModule
        )
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
