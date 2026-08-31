import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';

import { ProductService } from '../../core/services/product.service';

import { ProductCardComponent } from '../../shared/product-card/product-card.component';

import { FinalCtaComponent } from '../../shared/final-cta/final-cta.component';

@Component({
  selector: 'app-products',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ProductCardComponent,
    FinalCtaComponent
  ],

  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  private readonly productService = inject(ProductService);

  products = this.productService.getProducts();

}