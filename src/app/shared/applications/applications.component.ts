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
    title: 'Quán cà phê & F&B',
    description: 'Ứng dụng AI Camera và IoT để phân tích lượng khách, thời gian chờ và công suất phục vụ, giúp tối ưu nhân sự và nâng cao trải nghiệm khách hàng.',
    metrics: [
      'Giảm thời gian chờ',
      'Tối ưu lịch làm việc',
      'Phân tích lượng khách theo giờ'
    ],
    image: 'assets/applications/coffee.jpg'
  },

  {
    icon: '🛍️',
    title: 'Bán lẻ & Siêu thị',
    description: 'Theo dõi hành vi và luồng di chuyển của khách hàng, phân tích khu vực có lượng truy cập cao và tự động phát hiện tình trạng kệ hàng để tối ưu vận hành.',
    metrics: [
      'Phân tích luồng khách hàng',
      'Phát hiện kệ hàng trống',
      'Tối ưu bố trí cửa hàng'
    ],
    image: 'assets/applications/retail.jpg'
  },

  {
    icon: '🏭',
    title: 'Nhà máy & Sản xuất',
    description: 'Kết hợp AI Vision và IoT để giám sát dây chuyền, phát hiện vi phạm an toàn, kiểm tra chất lượng và cảnh báo sự cố theo thời gian thực.',
    metrics: [
      'Giám sát an toàn 24/7',
      'Phát hiện lỗi tự động',
      'Cảnh báo sự cố tức thì'
    ],
    image: 'assets/applications/factory.jpg'
  },

  {
    icon: '🌾',
    title: 'Nông nghiệp thông minh',
    description: 'Giám sát môi trường và tình trạng cây trồng bằng cảm biến IoT kết hợp AI, giúp tự động hóa tưới tiêu và đưa ra quyết định dựa trên dữ liệu thực tế.',
    metrics: [
      'Tự động hóa tưới tiêu',
      'Theo dõi môi trường',
      'Tiết kiệm nước & chi phí'
    ],
    image: 'assets/applications/agriculture.jpg'
  },

  {
    icon: '🏥',
    title: 'Y tế & Chăm sóc sức khỏe',
    description: 'Ứng dụng AI Camera và hệ thống IoT để giám sát không gian, hỗ trợ phát hiện tình huống bất thường và quản lý môi trường trong cơ sở y tế.',
    metrics: [
      'Giám sát liên tục',
      'Phát hiện bất thường', 
      'Quản lý môi trường thông minh'
    ],
    image: 'assets/applications/healthcare.jpg'
  }

];
}