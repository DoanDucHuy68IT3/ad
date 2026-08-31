import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-architecture',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './architecture.component.html',
  styleUrl: './architecture.component.scss'
})
export class ArchitectureComponent {
  steps = [
    { title: 'Camera + ESP32-S3', desc: 'Thu hình ảnh 30 FPS, tiền xử lý ngay trên chip biên tiết kiệm băng thông.' },
    { title: 'AI Inference (YOLO)', desc: 'Mô hình thị giác máy tính lượng tử hoá chạy trực tiếp hoặc trên server AI trung tâm.' },
    { title: 'Server / Cloud', desc: 'Tổng hợp dữ liệu, lưu trữ, phân tích xu hướng theo thời gian.' },
    { title: 'Dashboard & Cảnh báo', desc: 'Hiển thị số liệu trực quan, gửi cảnh báo qua app, email, Zalo.' }
  ];
}
