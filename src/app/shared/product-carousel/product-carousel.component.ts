
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject
} from '@angular/core';

import { CameraService } from '../../core/services/camera.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [ProductCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.scss'
})
export class ProductCarouselComponent
  implements AfterViewInit, OnDestroy {

  private readonly cameraService = inject(CameraService);

  cameras = this.cameraService.getCameras();

  @ViewChild('viewport')
  viewport!: ElementRef<HTMLDivElement>;

  currentIndex = 0;

  private timer?: ReturnType<typeof setInterval>;

  private readonly visibleCards = 4;
  private readonly gap = 24;
  private readonly interval = 3000;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.startAutoSlide();
    });
  }

  /**
   * Số lần tối đa có thể trượt sang phải.
   */
  private get maxIndex(): number {
    return Math.max(
      0,
      this.cameras.length - this.visibleCards
    );
  }

  /**
   * Bắt đầu tự động trượt.
   */
  startAutoSlide(): void {
    this.pause();

    this.timer = setInterval(() => {
      this.scroll('right');
    }, this.interval);
  }

  /**
   * Điều khiển nút trái/phải.
   */
  scroll(direction: 'left' | 'right'): void {
    if (this.cameras.length <= this.visibleCards) {
      return;
    }

    if (direction === 'right') {
      this.currentIndex++;

      if (this.currentIndex > this.maxIndex) {
        this.currentIndex = 0;
      }
    } else {
      this.currentIndex--;

      if (this.currentIndex < 0) {
        this.currentIndex = this.maxIndex;
      }
    }

    this.updatePosition();
  }

  /**
   * Cập nhật vị trí carousel.
   */
  private updatePosition(): void {
    const viewport = this.viewport.nativeElement;

    const card = viewport.querySelector(
      'app-product-card'
    ) as HTMLElement | null;

    if (!card) {
      return;
    }

    const cardWidth = card.offsetWidth;

    const offset =
      this.currentIndex * (cardWidth + this.gap);

    viewport.scrollTo({
      left: offset,
      behavior: 'smooth'
    });
  }

  /**
   * Dừng auto slide.
   */
  pause(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  /**
   * Chạy lại auto slide.
   */
  resume(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.pause();
  }
}

