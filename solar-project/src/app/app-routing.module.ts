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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
