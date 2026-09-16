import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-construction',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './construction.html',
  styleUrl: './construction.css'
})
export class Construction {

  stats = [
    {
      value: '<0.2s',
      label: 'Thời gian phát hiện vi phạm'
    },
    {
      value: '99.5%',
      label: 'Độ chính xác nhận diện PPE'
    },
    {
      value: '24/7',
      label: 'Giám sát vùng nguy hiểm'
    },
    {
      value: '100%',
      label: 'Lưu trữ nhật ký sự kiện'
    }
  ];

  features = [
    {
      number: '01',
      title: 'Nhận diện trang bị bảo hộ (PPE)',
      description:
        'Hệ thống AI tự động phân tích luồng camera để kiểm tra công nhân có đeo mũ bảo hiểm, mặc áo phản quang, ủng bảo hộ và đeo dây an toàn hay không.'
    },
    {
      number: '02',
      title: 'Cảnh báo vùng nguy hiểm (Geofencing)',
      description:
        'Thiết lập hàng rào ảo bảo vệ quanh khu vực cẩu tải, hố đào sâu và hành lang di chuyển máy móc. Tự động hú còi cảnh báo khi có người vi phạm.'
    },
    {
      number: '03',
      title: 'Theo dõi máy móc & Phương tiện công trường',
      description:
        'Giám sát hành trình xe tải, máy xúc, xe bồn bê tông, phát hiện tình trạng quá tốc độ hoặc đỗ sai vị trí trong mặt bằng công trường.'
    },
    {
      number: '04',
      title: 'Quan trắc bụi mịn & Tiếng ồn môi trường',
      description:
        'Tích hợp cảm biến đo chỉ số PM2.5, PM10 và cường độ âm thanh dB theo thời gian thực, đảm bảo công trình tuân thủ nghiêm ngặt tiêu chuẩn môi trường.'
    }
  ];

  specs = [
    { label: 'Cảm biến Camera', value: 'Sony Starlight 4K Night Vision' },
    { label: 'Thuật toán AI', value: 'YOLOv8 Edge PPE Detection' },
    { label: 'Cảnh báo tức thì', value: 'Còi hú 110dB + Đèn chớp + Mobile App' },
    { label: 'Độ bền phần cứng', value: 'Chuẩn chống bụi nước IP66 & IK10' },
    { label: 'Kết nối mạng', value: '4G LTE Công nghiệp / Cáp quang' },
    { label: 'Nguồn điện hỗ trợ', value: 'PoE+ hoặc Trạm năng lượng mặt trời' }
  ];

  applications = [
    {
      title: 'Công trình xây dựng dân dụng & Cao tầng',
      description:
        'Kiểm soát an toàn lao động trên cao, an ninh cổng ra vào và quản lý quân số nhân công hàng ngày.',
      image: '/images/product/construction/11.jpg'
    },
    {
      title: 'Dự án hạ tầng giao thông & Cầu đường',
      description:
        'Giám sát thi công trên các cung đường dài với hệ thống camera di động kết nối 4G năng lượng mặt trời.',
      image: '/images/solutions/factory.webp'
    },
    {
      title: 'Khu khai thác khoáng sản & Bãi vật liệu',
      description:
        'Kiểm soát khối lượng phương tiện ra vào, đảm bảo an toàn tuyệt đối khu vực nổ mìn và bốc dỡ.',
      image: '/images/product/industrial/1.jpeg'
    }
  ];

}
