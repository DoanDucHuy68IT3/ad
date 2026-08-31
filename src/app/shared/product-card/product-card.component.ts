import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Camera } from '../../core/models/camera.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  camera = input.required<Camera>();
}
