import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';
import { AiIntroductionComponent } from '../../shared/ai-introduction/ai-introduction.component';
import { ProductCarouselComponent } from '../../shared/product-carousel/product-carousel.component';
import { AiDemoComponent } from '../../shared/ai-demo/ai-demo.component';
import { FeatureComponent } from '../../shared/feature/feature.component';
import { ArchitectureComponent } from '../../shared/architecture/architecture.component';
import { ApplicationsComponent } from '../../shared/applications/applications.component';
import { TechnologyComponent } from '../../shared/technology/technology.component';
import { ProjectShowcaseComponent } from '../../shared/project-showcase/project-showcase.component';
import { FinalCtaComponent } from '../../shared/final-cta/final-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    AiIntroductionComponent,
    ProductCarouselComponent,
    AiDemoComponent,
    FeatureComponent,
    ArchitectureComponent,
    ApplicationsComponent,
    TechnologyComponent,
    ProjectShowcaseComponent,
    FinalCtaComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
