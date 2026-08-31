import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

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
      number: '01',
      title: 'Thu thập dữ liệu',
      subtitle: 'Collect',
      text: 'Kết nối camera, cảm biến và thiết bị IoT để thu thập dữ liệu môi trường, hình ảnh và trạng thái thiết bị theo thời gian thực.'
    },

    {
      number: '02',
      title: 'Biến dữ liệu thành thông tin',
      subtitle: 'Intelligence',
      text: 'AI và Edge Computing phân tích dữ liệu ngay tại thiết bị, phát hiện đối tượng, bất thường và các thay đổi quan trọng.'
    },

    {
      number: '03',
      title: 'Tự động hóa quyết định',
      subtitle: 'Automation',
      text: 'Dữ liệu được truyền về nền tảng IoT để giám sát, cảnh báo và tự động điều khiển thiết bị theo những điều kiện được thiết lập.'
    }

  ];

}