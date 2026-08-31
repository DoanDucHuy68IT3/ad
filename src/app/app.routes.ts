import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then((m) => m.ProductsComponent)
  },
  {
    path: 'solutions',
    loadComponent: () => import('./pages/solutions/solutions.component').then((m) => m.SolutionsComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then((m) => m.ProjectsComponent)
  },
  { path: '**', redirectTo: '' }
];
