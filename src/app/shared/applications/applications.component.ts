import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ApplicationCardComponent, ApplicationItem } from '../application-card/application-card.component';

@Component({
  selector: 'app-applications',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ApplicationCardComponent],
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.scss'
})
export class ApplicationsComponent {
  items: ApplicationItem[] = [
    {
      icon: '☕',
      title: 'Quán cà phê',
      description: 'Đếm khách theo khung giờ, đo thời gian chờ, tối ưu ca làm việc của nhân viên.',
      metrics: ['Giảm 30% thời gian chờ', 'Tối ưu lịch ca 20%'],
      image: 'assets/applications/coffee.jpg'
    },
    {
      icon: '🛍️',
      title: 'Bán lẻ',
      description: 'Phân tích luồng khách, khu vực hot, phát hiện kệ hàng trống để bổ sung kịp thời.',
      metrics: ['Tăng 15% doanh thu/khách', 'Cảnh báo kệ trống tức thì'],
      image: 'assets/applications/retail.jpg'
    },
    {
      icon: '🏭',
      title: 'Nhà máy',
      description: 'Giám sát an toàn lao động, phát hiện vi phạm đồ bảo hộ và khu vực nguy hiểm.',
      metrics: ['Giảm 40% sự cố an toàn', 'Cảnh báo tức thì < 1s'],
      image: 'assets/applications/factory.jpg'
    }
  ];
}
