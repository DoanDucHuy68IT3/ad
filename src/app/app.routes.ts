import { Routes } from '@angular/router';
import { Location } from '../pages/location/location';
import { AboutUs} from '../pages/about/about-us/about-us';
import {Transport} from '../pages/products/transport/transport'

export const routes: Routes = [

  // =====================================================
  // HOME
  // =====================================================

  {
    path: '',

    loadComponent: () =>
      import('./pages/home/home.component')
        .then((m) => m.HomeComponent)
  },


  // =====================================================
  // PRODUCTS
  // =====================================================

  {
    path: 'products',

    loadComponent: () =>
      import('./pages/products/products.component')
        .then((m) => m.ProductsComponent)
  },

  {
    path: 'products/ai-camera',

    loadComponent: () =>
      import('../pages/products/ai-camera/ai-camera')
        .then((m) => m.AiCamera)
  },

  {
    path: 'products/healthcare',

    loadComponent: () =>
      import('../pages/products/healthcare/healthcare')
        .then((m) => m.Healthcare)
  },

  {
    path: 'products/agriculture',

    loadComponent: () =>
      import('../pages/products/agriculture/agriculture')
        .then((m) => m.Agriculture)
  },

  {
    path: 'products/construction',

    loadComponent: () =>
      import('../pages/products/construction/construction')
        .then((m) => m.Construction)
  },

  {
    path: 'products/industrial',

    loadComponent: () =>
      import('../pages/products/industrial/industrial')
        .then((m) => m.Industrial)
  },

  {
    path: 'products/smart-home',

    loadComponent: () =>
      import('../pages/products/smart-home/smart-home')
        .then((m) => m.SmartHome)
  },


  // =====================================================
  // SOLUTIONS
  // =====================================================

  {
    path: 'solutions',

    loadComponent: () =>
      import('./pages/solutions/solutions.component')
        .then((m) => m.SolutionsComponent)
  },
  {
    path: 'about',
    component: AboutUs
  }, 
  {
    path: 'office', 
    component: Location
  }, 
  {
    path: 'transport', 
    component: Location
  }, 
  


  // =====================================================
  // PROJECTS
  // =====================================================

  {
    path: 'projects',

    loadComponent: () =>
      import('./pages/projects/projects.component')
        .then((m) => m.ProjectsComponent)
  },



  // =====================================================
  // 404
  // =====================================================

  {
    path: '**',
    redirectTo: ''
  }

];

