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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertRoutingModule { }
