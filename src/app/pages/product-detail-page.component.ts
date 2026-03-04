import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-detail-page.component.html'
})
export class ProductDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly productId = this.route.snapshot.paramMap.get('id') ?? '1';
}
