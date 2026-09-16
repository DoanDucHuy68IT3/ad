import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-industrial',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './industrial.html',
  styleUrl: './industrial.css'
})
export class Industrial {

  stats = [
    {
      value: '99.9%',
      label: 'Độ tin cậy vận hành'
    },
    {
      value: '-35%',
      label: 'Thời gian dừng máy sự cố'
    },
    {
      value: '<10ms',
      label: 'Độ trễ xử lý Edge'
    },
    {
      value: '100+',
      label: 'Giao thức công nghiệp'
    }
  ];

  features = [
    {
      number: '01',
      title: 'Gateway kết nối đa giao thức máy móc',
      description:
        'Hỗ trợ toàn diện Modbus RTU/TCP, OPC-UA, MQTT, Profinet giúp kết nối nhanh chóng mọi dòng PLC Siemens, Mitsubishi, Omron, Schneider.'
    },
    {
      number: '02',
      title: 'Vision AI kiểm tra lỗi bề mặt & Bao bì',
      description:
        'Hệ thống thị giác máy tốc độ cao tự động phát hiện trầy xước, khuyết tật hàn, sai lệch kích thước và tem nhãn trên dây chuyền sản xuất.'
    },
    {
      number: '03',
      title: 'Bảo trì dự đoán (Predictive Maintenance)',
      description:
        'Phân tích rung chấn và biến thiên nhiệt độ ổ bi động cơ bằng thuật toán học máy, cảnh báo trước nguy cơ hỏng hóc từ 7 - 14 ngày.'
    },
    {
      number: '04',
      title: 'Số hóa dây chuyền & Đo lường OEE thời gian thực',
      description:
        'Tự động thu thập sản lượng, đếm phế phẩm và phân tích nguyên nhân dừng máy, cung cấp chỉ số OEE chính xác cho ban giám đốc.'
    }
  ];

  specs = [
    { label: 'Bộ vi xử lý', value: 'Industrial Quad-Core ARM + Edge NPU' },
    { label: 'Cổng giao diện', value: '2x RS485/232, 2x GbE, Digital I/O' },
    { label: 'Giao thức PLC', value: 'Modbus, OPC UA, MQTT, Profinet' },
    { label: 'Nhiệt độ vận hành', value: '-40°C đến +85°C (Không quạt tản nhiệt)' },
    { label: 'Kiểu lắp đặt', value: 'Chuẩn gắn thanh DIN-Rail tủ điện' },
    { label: 'Bảo mật dữ liệu', value: 'Mã hóa TLS 1.3, TPM 2.0 Hardware' }
  ];

  applications = [
    {
      title: 'Nhà máy linh kiện điện tử & Bán dẫn',
      description:
        'Kiểm tra lỗi mối hàn bo mạch SMT và giám sát tĩnh điện trong phòng sạch tiêu chuẩn quốc tế.',
      image: '/images/solutions/factory.webp'
    },
    {
      title: 'Dây chuyền thực phẩm & Đóng gói F&B',
      description:
        'Đếm sản phẩm tự động tốc độ cao, kiểm tra niêm phong nắp chai và mã in hạn sử dụng bằng Vision AI.',
      image: '/images/product/industrial/1.jpeg'
    },
    {
      title: 'Nhà máy cơ khí chế tạo & Luyện kim',
      description:
        'Giám sát tải trọng động cơ máy CNC, máy cán thép và tối ưu hóa điện năng tiêu thụ.',
      image: '/images/product/industrial/2.jpeg'
    }
  ];

}
