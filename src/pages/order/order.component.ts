import {
  ChangeDetectionStrategy,
  Component,
  signal
} from '@angular/core';
import { RouterLink } from '@angular/router';

interface OrderProductOption {
  id: string;
  name: string;
  category: string;
}

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  productOptions: OrderProductOption[] = [
    { id: 'CAM-001', name: 'EdgeCam X1 (AI Camera & Edge Vision)', category: 'Camera AI' },
    { id: 'HEALTH-001', name: 'HealthMonitor Pro (IoT Y tế & Bệnh viện)', category: 'Healthcare IoT' },
    { id: 'AGRI-001', name: 'Smart Farm Node (Nông nghiệp thông minh)', category: 'Agriculture IoT' },
    { id: 'CONST-001', name: 'Smart Site Monitor (Giám sát an toàn công trường)', category: 'Construction IoT' },
    { id: 'IND-001', name: 'Industrial IoT Gateway (Nhà máy & Công nghiệp)', category: 'Industrial IoT' },
    { id: 'HOME-001', name: 'Smart Home Hub (Nhà thông minh & An ninh)', category: 'Smart Home' },
    { id: 'CUSTOM', name: 'Giải pháp tùy chỉnh theo yêu cầu doanh nghiệp', category: 'Giải pháp riêng' }
  ];

  fullName = signal('');
  phone = signal('');
  email = signal('');
  company = signal('');
  address = signal('');
  selectedProduct = signal('CAM-001');
  quantity = signal(1);
  notes = signal('');

  submitted = signal(false);
  errorMessage = signal('');

  selectProduct(productId: string): void {
    this.selectedProduct.set(productId);
  }

  setQuantity(qty: number): void {
    if (qty >= 1) {
      this.quantity.set(qty);
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.fullName().trim() || !this.phone().trim()) {
      this.errorMessage.set('Vui lòng nhập đầy đủ Họ tên và Số điện thoại liên hệ.');
      return;
    }
    this.errorMessage.set('');
    this.submitted.set(true);
  }

  resetForm(): void {
    this.fullName.set('');
    this.phone.set('');
    this.email.set('');
    this.company.set('');
    this.address.set('');
    this.quantity.set(1);
    this.notes.set('');
    this.submitted.set(false);
    this.errorMessage.set('');
  }
}

