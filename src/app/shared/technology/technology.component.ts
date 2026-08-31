import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-technology',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
  stack = [
    { name: 'ESP32-S3', role: 'Vi điều khiển AI biên, xử lý ảnh trực tiếp trên camera' },
    { name: 'YOLOv8 / YOLO-Nano', role: 'Mô hình phát hiện đối tượng tốc độ cao, độ chính xác cao' },
    { name: 'TensorFlow Lite', role: 'Lượng tử hoá mô hình để chạy mượt trên phần cứng nhỏ gọn' },
    { name: 'MQTT / WebSocket', role: 'Truyền dữ liệu thời gian thực từ camera lên máy chủ' },
    { name: 'Node.js + PostgreSQL', role: 'Xử lý, lưu trữ và truy vấn dữ liệu phân tích' },
    { name: 'Angular Dashboard', role: 'Giao diện quản trị trực quan, cập nhật theo thời gian thực' }
  ];
}
