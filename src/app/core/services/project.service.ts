import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private projects: Project[] = [
    {
      id: 'prj-cafe-highland',
      name: 'Hệ thống đếm khách thông minh',
      client: 'Chuỗi cà phê nội địa',
      location: 'TP. Hồ Chí Minh',
      category: 'Quán cà phê',
      description: 'Triển khai 40 camera AI tại 12 chi nhánh để đếm lượt khách theo giờ, tối ưu nhân sự phục vụ.',
      image: 'assets/projects/cafe-highland.jpg',
      tags: ['Đếm người', 'Phân tích giờ cao điểm']
    },
    {
      id: 'prj-retail-mart',
      name: 'Phân tích hành vi mua sắm',
      client: 'Chuỗi siêu thị mini',
      location: 'Hà Nội',
      category: 'Bán lẻ',
      description: 'Camera AI phân tích luồng di chuyển khách hàng, phát hiện kệ hàng trống theo thời gian thực.',
      image: 'assets/projects/retail-mart.jpg',
      tags: ['Heatmap', 'Kệ hàng trống']
    },
    {
      id: 'prj-factory-quality',
      name: 'Kiểm soát an toàn dây chuyền sản xuất',
      client: 'Nhà máy điện tử',
      location: 'Bắc Ninh',
      category: 'Nhà máy',
      description: 'Giám sát khu vực nguy hiểm, cảnh báo khi công nhân không đội mũ bảo hộ hoặc vào vùng cấm.',
      image: 'assets/projects/factory-quality.jpg',
      tags: ['An toàn lao động', 'Cảnh báo thời gian thực']
    },
    {
      id: 'prj-parking-smart',
      name: 'Bãi giữ xe thông minh',
      client: 'Toà nhà văn phòng',
      location: 'Đà Nẵng',
      category: 'Bãi đỗ xe',
      description: 'Nhận diện biển số tự động ra vào, thống kê chỗ trống theo thời gian thực trên bảng điều khiển.',
      image: 'assets/projects/parking-smart.jpg',
      tags: ['Nhận diện biển số', 'Quản lý chỗ trống']
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
