import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-project-showcase',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-showcase.component.html',
  styleUrl: './project-showcase.component.scss'
})
export class ProjectShowcaseComponent {
  private projectService = inject(ProjectService);
  projects = this.projectService.getProjects();
}
