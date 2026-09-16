import { Injectable } from '@angular/core';

import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [

    // =====================================================
    // 1. SMART CITY
    // =====================================================

    {
      id: 'prj-smart-city',
      name: 'Nền tảng giám sát đô thị thông minh',
      client: 'Cơ quan quản lý đô thị',
      location: 'Hà Nội',
      category: 'Đô thị thông minh',

      description:
        'Triển khai hệ thống camera AI và IoT quy mô lớn nhằm giám sát giao thông, mật độ phương tiện, phát hiện sự cố và cung cấp dữ liệu thời gian thực phục vụ công tác quản lý đô thị.',

      image: '/images/projects/1.jpg',
      video: '/videos/project-01.mp4',

      tags: [
        'AI Vision',
        'Smart City',
        'IoT Platform',
        'Real-time Monitoring'
      ]
    },


    // =====================================================
    // 2. SMART TRANSPORT
    // =====================================================

    {
      id: 'prj-smart-transport',
      name: 'Hệ thống giao thông thông minh',
      client: 'Cơ quan quản lý giao thông',
      location: 'TP. Hồ Chí Minh',
      category: 'Giao thông',

      description:
        'Xây dựng hệ thống AI phân tích hình ảnh giao thông, tự động phát hiện ùn tắc, tai nạn, phương tiện vi phạm và phân tích lưu lượng giao thông theo thời gian thực.',

      image: '/images/projects/2.avif',
      video: '/videos/project-01.mp4',

      tags: [
        'Traffic AI',
        'Nhận diện phương tiện',
        'Phát hiện vi phạm',
        'Phân tích giao thông'
      ]
    },


    // =====================================================
    // 3. PUBLIC SECURITY
    // =====================================================

    {
      id: 'prj-public-security',
      name: 'Hệ thống giám sát an ninh công cộng',
      client: 'Đơn vị quản lý an ninh',
      location: 'Đà Nẵng',
      category: 'An ninh công cộng',

      description:
        'Triển khai mạng lưới camera AI kết hợp nền tảng phân tích tập trung, hỗ trợ phát hiện tình huống bất thường, xâm nhập khu vực hạn chế và cảnh báo sự cố theo thời gian thực.',

      image: '/images/projects/3.avif',
      video: '/videos/project-01.mp4',

      tags: [
        'AI Camera',
        'Video Analytics',
        'Real-time Alert',
        'Security'
      ]
    },


    // =====================================================
    // 4. ENVIRONMENT
    // =====================================================

    {
      id: 'prj-environment-monitoring',
      name: 'Hệ thống quan trắc môi trường thông minh',
      client: 'Cơ quan quản lý tài nguyên và môi trường',
      location: 'Bắc Ninh',
      category: 'Môi trường',

      description:
        'Xây dựng mạng lưới cảm biến IoT thu thập dữ liệu môi trường theo thời gian thực, kết hợp nền tảng phân tích dữ liệu và cảnh báo sớm các chỉ số bất thường.',

      image: '/images/projects/4.avif',
      video: '/videos/project-01.mp4',

      tags: [
        'Environmental IoT',
        'Sensor Network',
        'Data Analytics',
        'Early Warning'
      ]
    },


    // =====================================================
    // 5. GOVERNMENT DIGITAL TRANSFORMATION
    // =====================================================

    {
      id: 'prj-digital-government',
      name: 'Nền tảng dữ liệu phục vụ chính quyền số',
      client: 'Cơ quan hành chính nhà nước',
      location: 'Hà Nội',
      category: 'Chính quyền số',

      description:
        'Xây dựng nền tảng tích hợp dữ liệu từ camera, cảm biến và các hệ thống IoT, cung cấp dashboard tập trung hỗ trợ lãnh đạo theo dõi tình hình và ra quyết định dựa trên dữ liệu.',

      image: '/images/projects/5.avif',
      video: '/videos/project-01.mp4',

      tags: [
        'Digital Government',
        'Data Platform',
        'Dashboard',
        'IoT Integration'
      ]
    },


    // =====================================================
    // 6. SMART INDUSTRIAL ZONE
    // =====================================================

    {
      id: 'prj-smart-industrial-zone',
      name: 'Khu công nghiệp thông minh',
      client: 'Ban quản lý khu công nghiệp',
      location: 'Hải Phòng',
      category: 'Khu công nghiệp',

      description:
        'Triển khai hệ thống AI và IoT giám sát hạ tầng, an toàn lao động, môi trường và hoạt động vận hành trong khu công nghiệp trên một nền tảng quản lý tập trung.',

      image: '/images/projects/6.avif',
      video: '/videos/project-01.mp4',

      tags: [
        'Industrial IoT',
        'AI Monitoring',
        'Safety',
        'Smart Infrastructure'
      ]
    }

  ];


  // =====================================================
  // GET ALL PROJECTS
  // =====================================================

  getProjects(): Project[] {
    return this.projects;
  }


  // =====================================================
  // GET PROJECT BY ID
  // =====================================================

  getProjectById(id: string): Project | undefined {
    return this.projects.find(
      project => project.id === id
    );
  }


  getProjectsByCategory(category: string): Project[] {
    return this.projects.filter(
      project => project.category === category
    );
  }

}