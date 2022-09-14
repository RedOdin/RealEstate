/* eslint-disable sort-keys-fix/sort-keys-fix */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTE } from './app-routing.constants';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path: APP_ROUTE.DEFAULT,
    component: HomeComponent
  },
  {
    path: APP_ROUTE.DETAILS.name,
    component: DetailsComponent
  },
  {
    path: '**',
    redirectTo: APP_ROUTE.DEFAULT
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
