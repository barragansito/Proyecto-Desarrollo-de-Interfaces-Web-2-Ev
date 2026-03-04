import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { ProductListPageComponent } from './pages/product-list-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page.component';
import { CartPageComponent } from './pages/cart-page.component';
import { ContactPageComponent } from './pages/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'productos', component: ProductListPageComponent },
  { path: 'producto/:id', component: ProductDetailPageComponent },
  { path: 'carrito', component: CartPageComponent },
  { path: 'contacto', component: ContactPageComponent },
  { path: '**', redirectTo: '' }
];
