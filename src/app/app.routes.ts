import { Routes } from '@angular/router';
import {CartPageComponent} from './pages/cart-page/cart-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  }
];
