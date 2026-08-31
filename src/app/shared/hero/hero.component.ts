import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  stats = [
    { value: '99.2%', label: 'Độ chính xác nhận diện' },
    { value: '< 80ms', label: 'Độ trễ xử lý AI' },
    { value: '500+', label: 'Camera đang vận hành' }
  ];
}
