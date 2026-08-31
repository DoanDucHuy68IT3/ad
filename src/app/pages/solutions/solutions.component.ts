import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ApplicationsComponent } from '../../shared/applications/applications.component';
import { ArchitectureComponent } from '../../shared/architecture/architecture.component';
import { TechnologyComponent } from '../../shared/technology/technology.component';
import { FinalCtaComponent } from '../../shared/final-cta/final-cta.component';

@Component({
  selector: 'app-solutions',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ApplicationsComponent, ArchitectureComponent, TechnologyComponent, FinalCtaComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {}
