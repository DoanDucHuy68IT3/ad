import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agriculture',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './agriculture.html',
  styleUrl: './agriculture.css'
})
export class Agriculture {

  stats = [
    {
      value: '99.2%',
      label: 'Độ chính xác cảm biến'
    },
    {
      value: '-40%',
      label: 'Tiết kiệm nước tưới'
    },
    {
      value: '24/7',
      label: 'Quan trắc thời gian thực'
    },
    {
      value: 'IP67',
      label: 'Chống chịu thời tiết'
    }
  ];

  features = [
    {
      number: '01',
      title: 'Đo độ ẩm & Dinh dưỡng đất',
      description:
        'Cảm biến chuyên dụng đo đa tầng độ ẩm, nhiệt độ, độ dẫn điện EC và hàm lượng khoáng chất NPK trong đất theo thời gian thực.'
    },
    {
      number: '02',
      title: 'Tưới tiêu tự động thông minh',
      description:
        'Hệ thống AI tự động kích hoạt van tưới dựa trên độ ẩm đất và dự báo thời tiết, loại bỏ lãng phí nước và chi phí nhân công.'
    },
    {
      number: '03',
      title: 'Trạm quan trắc vi khí hậu',
      description:
        'Theo dõi nhiệt độ, độ ẩm không khí, cường độ ánh sáng quang hợp (PAR) và tốc độ gió để tạo môi trường tối ưu cho cây trồng.'
    },
    {
      number: '04',
      title: 'AI nhận diện sâu bệnh sớm',
      description:
        'Camera AI kết hợp Vision model phát hiện sớm các đốm bệnh lá, sâu hại và tình trạng thiếu dinh dưỡng trước khi bùng phát diện rộng.'
    }
  ];

  specs = [
    { label: 'Cảm biến đất', value: 'Độ ẩm, EC, pH, NPK, Nhiệt độ' },
    { label: 'Kết nối mạng', value: 'LoRaWAN / 4G LTE / Wi-Fi' },
    { label: 'Năng lượng', value: 'Pin mặt trời tích hợp (Tự sạc)' },
    { label: 'Tiêu chuẩn vỏ', value: 'IP67 Chống nước, bụi, UV' },
    { label: 'Khoảng cách LoRa', value: 'Tới 5km không vật cản' },
    { label: 'Cảnh báo', value: 'SMS / Telegram / App thông báo' }
  ];

  applications = [
    {
      title: 'Nhà kính công nghệ cao',
      description:
        'Kiểm soát toàn diện vi khí hậu và dinh dưỡng cây trồng trong nhà màng đạt chuẩn xuất khẩu.',
      image: '/images/product/agriculture/1.jpeg'
    },
    {
      title: 'Trang trại cây ăn trái & Cà phê',
      description:
        'Mạng lưới cảm biến không dây diện rộng phủ khắp triền đồi với pin mặt trời tự cấp nguồn.',
      image: '/images/product/agriculture/2.jpg'
    },
    {
      title: 'Vùng canh tác lúa & Rau màu',
      description:
        'Tự động hóa quản lý mực nước và điều tiết phân bón chính xác giúp giảm khí phát thải.',
      image: '/images/product/agriculture/3.jpeg'
    }
  ];

}
