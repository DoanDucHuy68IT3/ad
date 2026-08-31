import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-ai-camera',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ai-camera.html',
  styleUrl: './ai-camera.css'
})
export class AiCamera {

  stats = [
    {
      value: '30 FPS',
      label: 'Xử lý hình ảnh'
    },
    {
      value: 'AI Edge',
      label: 'Xử lý tại thiết bị'
    },
    {
      value: '24/7',
      label: 'Giám sát liên tục'
    },
    {
      value: '4K',
      label: 'Độ phân giải'
    }
  ];

  features = [
    {
      number: '01',
      title: 'Nhận diện đối tượng',
      description:
        'AI Camera sử dụng Computer Vision để phát hiện và phân loại người, phương tiện và các đối tượng trong khung hình.'
    },
    {
      number: '02',
      title: 'Đếm người thông minh',
      description:
        'Tự động đếm số người ra vào, hỗ trợ phân tích lưu lượng và tối ưu hoạt động của cửa hàng, văn phòng.'
    },
    {
      number: '03',
      title: 'Tracking thời gian thực',
      description:
        'Theo dõi chuyển động của đối tượng trong khu vực quan sát với khả năng xử lý hình ảnh theo thời gian thực.'
    },
    {
      number: '04',
      title: 'Phát hiện bất thường',
      description:
        'Phát hiện các sự kiện bất thường và gửi dữ liệu về hệ thống quản lý để đưa ra cảnh báo nhanh chóng.'
    }
  ];

  applications = [
    {
      title: 'Cửa hàng',
      description:
        'Theo dõi lượng khách, khu vực đông người và hành vi khách hàng.',
      image: '/images/solutions/coffee-shop.webp'
    },
    {
      title: 'Nhà máy',
      description:
        'Giám sát khu vực sản xuất, phát hiện người và các tình huống bất thường.',
      image: '/images/solutions/factory.webp'
    },
    {
      title: 'Văn phòng',
      description:
        'Quản lý không gian, kiểm soát ra vào và giám sát an ninh.',
      image: '/images/solutions/retail.webp'
    }
  ];

}