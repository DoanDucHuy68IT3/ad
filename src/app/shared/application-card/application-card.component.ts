import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface ApplicationItem {
  icon: string;
  title: string;
  description: string;
  metrics: string[];
  image: string;
}

@Component({
  selector: 'app-application-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './application-card.component.html',
  styleUrl: './application-card.component.scss'
})
export class ApplicationCardComponent {
  item = input.required<ApplicationItem>();
}
