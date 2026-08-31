import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProjectShowcaseComponent } from '../../shared/project-showcase/project-showcase.component';
import { FinalCtaComponent } from '../../shared/final-cta/final-cta.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectShowcaseComponent, FinalCtaComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {}
