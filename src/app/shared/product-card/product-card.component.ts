import {
  ChangeDetectionStrategy,
  Component,
  input
} from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  product = input.required<Product>();

}