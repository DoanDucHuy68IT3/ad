import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject
} from '@angular/core';

import { ProductService } from '../../core/services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.scss'
})
export class ProductCarouselComponent
  implements AfterViewInit, OnDestroy {

  private readonly productService = inject(ProductService);

  products = this.productService.getProducts();

  @ViewChild('viewport')
  viewport!: ElementRef<HTMLElement>;

  private timer?: ReturnType<typeof setInterval>;

  // Khoảng cách mỗi lần trượt
  private readonly scrollAmount = 380;

  // Tự động chạy mỗi 3 giây
  private readonly intervalTime = 3000;


  // =====================================================
  // INIT
  // =====================================================

  ngAfterViewInit(): void {
    this.startAutoSlide();
  }


  // =====================================================
  // AUTO SLIDE
  // =====================================================

  startAutoSlide(): void {

    this.stopAutoSlide();

    this.timer = setInterval(() => {
      this.scroll('right');
    }, this.intervalTime);

  }


  stopAutoSlide(): void {

    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }

  }


  // =====================================================
  // HOVER
  // =====================================================

  pause(): void {
    this.stopAutoSlide();
  }


  resume(): void {
    this.startAutoSlide();
  }


  // =====================================================
  // SCROLL
  // =====================================================

  scroll(direction: 'left' | 'right'): void {

    const element = this.viewport?.nativeElement;

    if (!element) {
      return;
    }

    const amount =
      direction === 'right'
        ? this.scrollAmount
        : -this.scrollAmount;

    const maxScroll =
      element.scrollWidth - element.clientWidth;


    // Nếu kéo sang phải và đã gần cuối
    if (
      direction === 'right' &&
      element.scrollLeft >= maxScroll - 10
    ) {

      element.scrollTo({
        left: 0,
        behavior: 'smooth'
      });

      return;
    }


    // Nếu kéo sang trái và đang ở đầu
    if (
      direction === 'left' &&
      element.scrollLeft <= 10
    ) {

      element.scrollTo({
        left: maxScroll,
        behavior: 'smooth'
      });

      return;
    }


    element.scrollBy({
      left: amount,
      behavior: 'smooth'
    });

  }


  // =====================================================
  // DESTROY
  // =====================================================

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

}