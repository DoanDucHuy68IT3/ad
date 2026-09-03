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
          description: 'Thị giác máy tính & Edge AI',
          iconType: 'camera',
          badgeColor: 'blue',
          badgeText: 'HOT'
        },

        {
          path: '/products/healthcare',
          label: 'Healthcare IoT',
          description: 'Giải pháp IoT & Vision y tế',
          iconType: 'health',
          badgeColor: 'rose'
        },

        {
          path: '/products/agriculture',
          label: 'Agriculture IoT',
          description: 'Nông nghiệp thông minh',
          iconType: 'agri',
          badgeColor: 'emerald'
        },

        {
          path: '/products/construction',
          label: 'Construction IoT',
          description: 'Giám sát an toàn công trường',
          iconType: 'construction',
          badgeColor: 'amber'
        },

        {
          path: '/products/industrial',
          label: 'Industrial IoT',
          description: 'Kết nối máy móc & Gateway',
          iconType: 'industrial',
          badgeColor: 'violet'
        },

        {
          path: '/products/smart-home',
          label: 'Smart Home',
          description: 'Nhà thông minh & An ninh',
          iconType: 'home',
          badgeColor: 'sky'
        },

        {
          path: '/products/transport',
          label: 'Traffic AI',
          description: 'Nhận diện biển số & Lưu lượng',
          iconType: 'traffic',
          badgeColor: 'teal',
          badgeText: 'MỚI'
        },

        {
          path: '/products',
          label: 'Tất cả sản phẩm',
          description: 'Xem toàn bộ 8+ dòng thiết bị',
          iconType: 'grid',
          badgeColor: 'slate'
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
      label: 'Vị trí'
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


  onDropdownHover(open: boolean): void {

    if (typeof window !== 'undefined' && window.innerWidth > 800) {
      this.productsOpen.set(open);
    }

  }


  closeMenu(): void {

    this.menuOpen.set(false);

    this.productsOpen.set(false);

  }

}