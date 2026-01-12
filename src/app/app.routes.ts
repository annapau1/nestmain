import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Aboutus } from './aboutus/aboutus';
import { ProductDetail } from './pages/product-details/product-details';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: Aboutus },
  { path: 'product/:id', component: ProductDetail }  // ← changed from recipe
];