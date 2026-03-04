import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ProductCardData = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
};

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  @Input({ required: true }) public product!: ProductCardData;
}
