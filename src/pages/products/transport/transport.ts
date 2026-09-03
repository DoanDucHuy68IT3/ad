import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transport',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './transport.html',
  styleUrl: './transport.css'
})
export class Transport {

  stats = [
    {
      value: '99.8%',
      label: 'Độ chính xác nhận diện biển số'
    },
    {
      value: '<0.1s',
      label: 'Phát hiện sự cố va chạm'
    },
    {
      value: '200 km/h',
      label: 'Tốc độ xe tối đa nhận diện'
    },
    {
      value: '24/7',
      label: 'Giám sát ngày đêm xuyên sương mù'
    }
  ];

  features = [
    {
      number: '01',
      title: 'Nhận diện biển số xe tự động (ANPR)',
      description:
        'Nhận diện tức thì biển số xe ô tô, xe máy mọi loại biển (trắng, xanh, đỏ, vàng) theo chuẩn Việt Nam với độ chính xác trên 99.8%.'
    },
    {
      number: '02',
      title: 'Phân tích lưu lượng & Đếm phương tiện',
      description:
        'Tự động phân loại xe máy, ô tô con, xe tải, xe buýt; tính toán mật độ lưu thông và tốc độ trung bình trên từng làn đường.'
    },
    {
      number: '03',
      title: 'Phát hiện sự cố & Vi phạm giao thông',
      description:
        'Cảnh báo xe chạy ngược chiều, dừng đỗ sai quy định, vượt đèn đỏ, lấn làn và phát hiện sớm các vụ tai nạn hoặc chết máy giữa đường.'
    },
    {
      number: '04',
      title: 'Điều phối đèn tín hiệu thông minh',
      description:
        'Tích hợp tủ điều khiển đèn tín hiệu NTCIP, tự động co giãn chu kỳ đèn xanh theo mật độ phương tiện thực tế giúp giảm ùn tắc đến 30%.'
    }
  ];

  specs = [
    { label: 'Cảm biến Camera', value: 'Global Shutter 60 FPS chống nhòe hình' },
    { label: 'Model AI tích hợp', value: 'Edge YOLO-Traffic + Vietnamese ANPR OCR' },
    { label: 'Vận tốc nhận diện', value: 'Chính xác ở tốc độ lên tới 200 km/h' },
    { label: 'Hệ thống trợ sáng', value: 'Đèn LED hồng ngoại xung Strobe đồng bộ' },
    { label: 'Giao thức kết nối', value: 'NTCIP, ONVIF Profile S/G/T, RTSP, REST API' },
    { label: 'Chuẩn vỏ bảo vệ', value: 'Hợp kim nhôm IP67, chống sét lan truyền 6kV' }
  ];

  applications = [
    {
      title: 'Hệ thống thu phí tự động không dừng (ETC) & Parking',
      description:
        'Kiểm soát phương tiện ra vào trạm thu phí, bãi đỗ thông minh không cần người soát vé.',
      image: '/images/projects/2.avif'
    },
    {
      title: 'Giám sát nút giao trọng điểm & Đô thị thông minh',
      description:
        'Điều tiết dòng phương tiện giờ cao điểm, giảm thiểu ùn ứ tại các ngã tư trung tâm.',
      image: '/images/projects/1.jpg'
    },
    {
      title: 'Tuyến đường cao tốc & Cầu đường huyết mạch',
      description:
        'Phát hiện phương tiện dừng đỗ khẩn cấp, sự cố rơi vãi chướng ngại vật trên đường.',
      image: '/images/projects/6.avif'
    }
  ];

}