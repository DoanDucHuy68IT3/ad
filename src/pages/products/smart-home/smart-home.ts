import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-smart-home',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './smart-home.html',
  styleUrl: './smart-home.css'
})
export class SmartHome {

  stats = [
    {
      value: '<50ms',
      label: 'Phản hồi điều khiển cục bộ'
    },
    {
      value: '100%',
      label: 'Bảo mật dữ liệu riêng tư'
    },
    {
      value: '128+',
      label: 'Thiết bị kết nối đồng thời'
    },
    {
      value: 'Zigbee 3.0',
      label: 'Chuẩn kết nối thế hệ mới'
    }
  ];

  features = [
    {
      number: '01',
      title: 'Trung tâm điều khiển cục bộ (Local Hub)',
      description:
        'Hệ thống xử lý kịch bản và ra lệnh ngay tại nhà, đảm bảo nhà bạn luôn hoạt động trơn tru 100% ngay cả khi mất kết nối Internet.'
    },
    {
      number: '02',
      title: 'Camera AI nhận diện người thân & Cảnh báo',
      description:
        'Phân biệt chính xác giữa người nhà, người lạ, vật nuôi và phương tiện. Loại bỏ 99% báo động giả do lá cây hay bóng râm.'
    },
    {
      number: '03',
      title: 'Cảm biến hiện diện vi sóng mmWave',
      description:
        'Phát hiện sự hiện diện của con người ngay cả khi đang ngồi đọc sách bất động, tự động duy trì ánh sáng và nhiệt độ phòng dễ chịu.'
    },
    {
      number: '04',
      title: 'Kịch bản tự động hóa & Quản lý điện năng',
      description:
        'Tự động tắt điện, ngắt điều hòa khi ra khỏi nhà, theo dõi hóa đơn tiền điện và tối ưu chi phí sinh hoạt hàng tháng.'
    }
  ];

  specs = [
    { label: 'Giao thức hỗ trợ', value: 'Zigbee 3.0, Matter, Thread, Wi-Fi 6' },
    { label: 'Bộ xử lý trung tâm', value: 'Dual-Core 240MHz + AI NPU Edge' },
    { label: 'Tương thích hệ sinh thái', value: 'Apple HomeKit, Google Home, Home Assistant' },
    { label: 'Lưu trữ cục bộ', value: 'MicroSD tối đa 256GB / Lưu trữ NAS riêng' },
    { label: 'Bảo mật kết nối', value: 'Mã hóa AES-128 / Không chia sẻ Cloud' },
    { label: 'Cổng nguồn', value: 'USB Type-C 5V/2A Tiết kiệm điện' }
  ];

  applications = [
    {
      title: 'Căn hộ chung cư & Nhà phố cao cấp',
      description:
        'Giải pháp trọn gói chiếu sáng, rèm cửa, điều hòa nhiệt độ và an ninh gia đình tiện nghi.',
      image: '/images/product/cameras/camera-01.jpeg'
    },
    {
      title: 'Văn phòng hiện đại & Không gian Co-working',
      description:
        'Tự động hóa phòng họp, kiểm soát ra vào vân tay/khuôn mặt và tối ưu điện năng.',
      image: '/images/solutions/retail.webp'
    },
    {
      title: 'Khách sạn, Resort & Homestay thông minh',
      description:
        'Check-in tự động, kích hoạt kịch bản chào đón khách và quản lý từ xa dễ dàng.',
      image: '/images/solutions/coffee-shop.webp'
    }
  ];

}
