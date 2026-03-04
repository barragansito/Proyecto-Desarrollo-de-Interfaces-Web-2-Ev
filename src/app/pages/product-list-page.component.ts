import { Component } from '@angular/core';
import { ProductCardComponent, ProductCardData } from '../components/product-card/product-card.component';

@Component({
  selector: 'app-product-list-page',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list-page.component.html'
})
export class ProductListPageComponent {
  protected readonly products: ProductCardData[] = [
    { id: 1, name: 'Alpargatas Air Sprint 01', category: 'Zapatillas - Hombre', price: '129,99 EUR', image: 'images/zapatillas/payaso1.jpg' },
    { id: 2, name: 'Alpargatas Fly Pace', category: 'Zapatillas - Mujer', price: '119,99 EUR', image: 'images/zapatillas/payaso2.jpg' },
    { id: 3, name: 'Alpargatas Core Run', category: 'Zapatillas - Unisex', price: '109,99 EUR', image: 'images/zapatillas/payaso3.jpg' },
    { id: 4, name: 'Alpargatas Power Track', category: 'Zapatillas - Hombre', price: '124,99 EUR', image: 'images/zapatillas/payaso4.jpg' },
    { id: 5, name: 'Alpargatas Tempo Max', category: 'Zapatillas - Mujer', price: '139,99 EUR', image: 'images/zapatillas/payaso5.jpg' },
    { id: 6, name: 'Alpargatas Street Motion', category: 'Zapatillas - Unisex', price: '99,99 EUR', image: 'images/zapatillas/payaso6.jpg' }
  ];
}
