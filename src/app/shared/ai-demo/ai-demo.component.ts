import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface DetectionBox {
  x: number; y: number; w: number; h: number; label: string; confidence: number;
}

@Component({
  selector: 'app-ai-demo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ai-demo.component.html',
  styleUrl: './ai-demo.component.scss'
})
export class AiDemoComponent {
  modes = ['Nhận diện khuôn mặt', 'Đếm người', 'Phát hiện vật thể'];
  activeMode = signal(0);

  boxesByMode: DetectionBox[][] = [
    [
      { x: 22, y: 18, w: 16, h: 20, label: 'Người #1', confidence: 98.4 },
      { x: 54, y: 30, w: 14, h: 18, label: 'Người #2', confidence: 96.1 }
    ],
    [
      { x: 10, y: 40, w: 12, h: 26, label: 'Khách 1', confidence: 97.2 },
      { x: 38, y: 22, w: 12, h: 26, label: 'Khách 2', confidence: 95.8 },
      { x: 64, y: 50, w: 12, h: 26, label: 'Khách 3', confidence: 94.3 }
    ],
    [
      { x: 15, y: 55, w: 20, h: 14, label: 'Xe máy', confidence: 99.1 },
      { x: 60, y: 25, w: 18, h: 24, label: 'Túi xách', confidence: 88.7 }
    ]
  ];

  setMode(i: number) {
    this.activeMode.set(i);
  }

  get boxes(): DetectionBox[] {
    return this.boxesByMode[this.activeMode()];
  }
}
