import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Feature } from '../../core/models/feature.model';

@Component({
  selector: 'app-features',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  features: Feature[] = [
    {
      id: 'face',
      icon: '👤',
      title: 'Nhận diện khuôn mặt',
      description: 'Xác thực danh tính và phân loại khách quen/khách mới với độ chính xác trên 99%.'
    },
    {
      id: 'object',
      icon: '📦',
      title: 'Phát hiện vật thể',
      description: 'Nhận diện hàng chục loại vật thể theo thời gian thực, tuỳ biến theo ngành nghề.'
    },
    {
      id: 'counting',
      icon: '🔢',
      title: 'Đếm số lượng',
      description: 'Đếm người, phương tiện, sản phẩm đi qua khung hình chính xác đến từng đơn vị.'
    },
    {
      id: 'tracking',
      icon: '🎯',
      title: 'Theo dõi đối tượng',
      description: 'Bám sát chuyển động của một đối tượng xuyên suốt nhiều khung hình và nhiều camera.'
    }
  ];
}
