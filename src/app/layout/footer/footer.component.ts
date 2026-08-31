import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();

  columns = [
    {
      title: 'Sản phẩm',
      links: ['EdgeCam X1', 'VisionCam Pro', 'RetailEye Mini', 'GuardCam 360']
    },
    {
      title: 'Giải pháp',
      links: ['Quán cà phê', 'Bán lẻ', 'Nhà máy', 'Bãi đỗ xe']
    },
    {
      title: 'Công ty',
      links: ['Về chúng tôi', 'Dự án tiêu biểu', 'Tuyển dụng', 'Liên hệ']
    }
  ];
}
