import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertComponent } from './advert.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

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
      ),
  },
  {
    canActivate: [AuthGuard],
    path: 'mine',
    title: 'Мои объявления',
    component: AdvertComponent,
    loadChildren : () =>
      import('./my-adverts/my-adverts-routing.module').then(
        (m) => m.MyAdvertsRoutingModule
      ),
  },
  {
    path: 'view',
    title: 'Просмотр',
    component: AdvertComponent,
    loadChildren : () =>
      import('./overview/overview-routing.module').then(
        (m) => m.OverviewRoutingModule
      )
  },
  {
    canActivate: [AuthGuard],
    path: 'create',
    title: 'Создать объявление',
    component: AdvertComponent,
    loadChildren: () => 
      import ('./create/create-routing.module').then(
        (m) => m.CreateRoutingModule
      )
  },
  {
    path: 'search',
    title: 'Поиск объявлений',
    component: AdvertComponent,
    loadChildren : () =>
      import('./adverts-search/adverts-search-routing.module').then(
        (m) => m.AdvertsSearchRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertRoutingModule { }
