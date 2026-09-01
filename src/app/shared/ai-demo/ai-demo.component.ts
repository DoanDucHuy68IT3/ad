import {
  Component,
  ChangeDetectionStrategy,
  signal,
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-ai-demo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ai-demo.component.html',
  styleUrl: './ai-demo.component.scss'
})
export class AiDemoComponent implements OnInit, OnDestroy {

  images = [
    '/images/introduction/image-1.webp',
    '/images/introduction/image-2.webp',
    '/images/introduction/image-3.avif',
    '/images/introduction/image-4.avif'
  ];

  activeIndex = signal(0);

  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next(): void {
    this.activeIndex.update(index =>
      (index + 1) % this.images.length
    );
  }

  prev(): void {
    this.activeIndex.update(index =>
      (index - 1 + this.images.length) % this.images.length
    );
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
  }

  private startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 4000);
  }
}