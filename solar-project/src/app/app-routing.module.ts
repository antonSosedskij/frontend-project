import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'adverts'
  },
  {
    path: 'adverts',
    title: 'Объявления',
    component: LayoutComponent,
    loadChildren: () =>
          import('./features/advert/advert-routing.module').then(
            (m) => m.AdvertRoutingModule
          ),
  },
  {
    path: 'account',
    title: 'Аккаунт',
    component: LayoutComponent,
    loadChildren: () =>
          import('./features/account/account-routing.module').then(
            (m) => m.AccountRoutingModule
          ),
  },
  {
    path: '**',
    title: 'Не найдено',
    component: LayoutComponent,
    loadChildren: () =>
          import('./features/not-found-page/not-found-page-routing.module').then(
            (m) => m.NotFoundPageRoutingModule
          ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
