import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ai-introduction',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ai-introduction.component.html',
  styleUrl: './ai-introduction.component.scss'
})
export class AiIntroductionComponent {
  pillars = [
    {
      title: 'Nhìn (See)',
      text: 'Cảm biến hình ảnh độ nét cao kết hợp hồng ngoại thu thập dữ liệu liên tục, mọi điều kiện ánh sáng.'
    },
    {
      title: 'Hiểu (Understand)',
      text: 'Mô hình YOLO chạy trên chip AI biên phân tích khung hình, nhận diện đối tượng theo thời gian thực.'
    },
    {
      title: 'Hành động (Act)',
      text: 'Kết quả phân tích được đẩy tức thì tới dashboard, gửi cảnh báo hoặc kích hoạt tự động hoá.'
    }
  ];
}
