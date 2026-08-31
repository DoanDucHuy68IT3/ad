import {
  ChangeDetectionStrategy,
  Component,
  signal
} from '@angular/core';

import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,

  imports: [
    RouterLink,
    RouterLinkActive
  ],

  changeDetection: ChangeDetectionStrategy.OnPush,

  host: {
    '(window:scroll)': 'onScroll()'
  },

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  scrolled = signal(false);

  menuOpen = signal(false);

  productsOpen = signal(false);


  links = [

    {
      path: '/',
      label: 'Trang chủ'
    },


    {
      path: '/products',
      label: 'Sản phẩm',

      children: [

        {
          path: '/products/ai-camera',
          label: 'AI Camera',
          description: 'Camera AI & Computer Vision'
        },

        {
          path: '/products/healthcare',
          label: 'Healthcare IoT',
          description: 'Giải pháp IoT y tế'
        },

        {
          path: '/products/agriculture',
          label: 'Agriculture IoT',
          description: 'Nông nghiệp thông minh'
        },

        {
          path: '/products/construction',
          label: 'Construction IoT',
          description: 'Giám sát công trường'
        },

        {
          path: '/products/industrial',
          label: 'Industrial IoT',
          description: 'IoT công nghiệp'
        },

        {
          path: '/products/smart-home',
          label: 'Smart Home',
          description: 'Nhà thông minh'
        }

      ]
    },


    {
      path: '/solutions',
      label: 'Giải pháp'
    },


    {
      path: '/projects',
      label: 'Dự án'
    },


    {
      path: '/about',
      label: 'Về chúng tôi'
    },


    {
      path: '/office',
      label: 'Văn phòng'
    }

  ];


  onScroll(): void {

    this.scrolled.set(
      window.scrollY > 24
    );

  }


  toggleMenu(): void {

    this.menuOpen.update(
      value => !value
    );

  }


  toggleProducts(): void {

    this.productsOpen.update(
      value => !value
    );

  }


  closeMenu(): void {

    this.menuOpen.set(false);

    this.productsOpen.set(false);

  }

}