import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.scss'
})
export class FinalCtaComponent {
  name = signal('');
  phone = signal('');
  submitted = signal(false);

  submit() {
    if (!this.name() || !this.phone()) return;
    this.submitted.set(true);
  }
}
