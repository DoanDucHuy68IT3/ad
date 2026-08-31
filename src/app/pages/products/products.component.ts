import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CameraService } from '../../core/services/camera.service';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { FinalCtaComponent } from '../../shared/final-cta/final-cta.component';

@Component({
  selector: 'app-products',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductCardComponent, FinalCtaComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private cameraService = inject(CameraService);
  cameras = this.cameraService.getCameras();
}
