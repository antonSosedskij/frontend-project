import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertComponent } from './advert.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'recomended'
  },
  {
    path: 'recomended',
    title: 'Рекомендации',
    component: AdvertComponent,
    loadChildren: () => 
      import('./advert-rec/advert-rec-routing.module').then(
        (m) => m.AdvertRecRoutingModule
      )
  },
  {
    path: 'mine',
    title: 'Мои объявления',
    component: AdvertComponent,
    loadChildren : () =>
      import('./my-adverts/my-adverts-routing.module').then(
        (m) => m.MyAdvertsRoutingModule
      )
  },
  {
    path: 'view',
    title: 'Просмотр',
    component: AdvertComponent,
    loadChildren : () =>
      import('./overview/overview-routing.module').then(
        (m) => m.OverviewRoutingModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertRoutingModule { }
