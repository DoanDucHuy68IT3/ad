import { Injectable } from '@angular/core';

import {
  Product,
  ProductField
} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [

    // =====================================================
    // 1. CAMERA AI
    // =====================================================

    {
      id: 'CAM-001',
      name: 'EdgeCam X1',
      field: 'camera',
      category: 'Camera AI',

      description:
        'Camera AI xử lý trực tiếp trên thiết bị, hỗ trợ nhận diện khuôn mặt, đếm người và phát hiện vật thể.',

      image: '/images/product/cameras/camera-01.jpeg',

      features: [
        'Nhận diện khuôn mặt',
        'Đếm người',
        'Phát hiện vật thể',
        'Edge AI'
      ],

      price: 'Liên hệ báo giá',

      link: '/products/ai-camera'
    },


    // =====================================================
    // 2. HEALTHCARE IoT
    // =====================================================

    {
      id: 'HEALTH-001',
      name: 'HealthMonitor Pro',
      field: 'healthcare',
      category: 'Healthcare IoT',

      description:
        'Hệ thống IoT hỗ trợ theo dõi các chỉ số sức khỏe và truyền dữ liệu theo thời gian thực.',

      image: '/images/product/healthcare/11.jpeg',

      features: [
        'Heart Rate',
        'SpO2',
        'Temperature',
        'Real-time Monitoring'
      ],

      price: 'Liên hệ báo giá',

      link: '/products/healthcare'
    },


    // =====================================================
    // 3. AGRICULTURE IoT
    // =====================================================

    {
      id: 'AGRI-001',
      name: 'Smart Farm Node',
      field: 'agriculture',
      category: 'Agriculture IoT',

      description:
        'Node IoT giám sát môi trường đất và hỗ trợ tự động hóa hệ thống nông nghiệp thông minh.',

      image: '/images/product/agriculture/1.jpeg',

      features: [
        'Soil Moisture',
        'Temperature',
        'Humidity',
        'Light Monitoring'
      ],

      price: 'Liên hệ báo giá',

      link: '/products/agriculture'
    },


    // =====================================================
    // 4. CONSTRUCTION IoT
    // =====================================================

    {
      id: 'CONST-001',
      name: 'Smart Site Monitor',
      field: 'construction',
      category: 'Construction IoT',

      description:
        'Giải pháp IoT và AI giám sát an toàn, môi trường và thiết bị tại công trường xây dựng.',

      image: '/images/product/construction/11.jpg',

      features: [
        'Worker Detection',
        'Safety Monitoring',
        'Equipment Tracking',
        'Environment Monitoring'
      ],

      price: 'Liên hệ báo giá',

      link: '/products/construction'
    },


    // =====================================================
    // 5. INDUSTRIAL IoT
    // =====================================================

    {
      id: 'IND-001',
      name: 'Industrial IoT Gateway',
      field: 'industrial',
      category: 'Industrial IoT',

      description:
        'Gateway kết nối máy móc và thiết bị công nghiệp với nền tảng IoT.',

      image: '/images/product/healthcare/1-2.avif',

      features: [
        'MQTT',
        'Modbus RTU',
        'Modbus TCP',
        'OPC UA'
      ],

      price: 'Liên hệ báo giá',

      link: '/products/industrial'
    },


    // =====================================================
    // 6. SMART HOME
    // =====================================================

    {
      id: 'HOME-001',
      name: 'Smart Home Hub',
      field: 'smart-home',
      category: 'Smart Home',

      description:
        'Trung tâm điều khiển các thiết bị IoT trong nhà, hỗ trợ tự động hóa và điều khiển từ xa.',

      image: '/images/product/cameras/camera-01.jpeg',

      features: [
        'Smart Sensors',
        'Automation',
        'Remote Control',
        'Device Management'
      ],

      price: 'Liên hệ báo giá',

      link: '/products/smart-home'
    },


    // =====================================================
    // 7. ENVIRONMENT IoT
    // =====================================================

    {
      id: 'ENV-001',
      name: 'Air Quality Monitor',
      field: 'environment',
      category: 'Environment IoT',

      description:
        'Thiết bị IoT giám sát chất lượng không khí và các thông số môi trường theo thời gian thực.',

      image: '/images/product/cameras/camera-01.jpeg',

      features: [
        'PM2.5',
        'CO2',
        'Temperature',
        'Humidity'
      ],

      price: 'Liên hệ báo giá',

      link: '/products/environment'
    },


    // =====================================================
    // 8. SMART ENERGY
    // =====================================================

    {
      id: 'ENERGY-001',
      name: 'Smart Energy Monitor',
      field: 'energy',
      category: 'Smart Energy',

      description:
        'Hệ thống IoT giám sát mức tiêu thụ điện năng và hỗ trợ tối ưu hóa sử dụng năng lượng.',

      image: '/images/product/energy/11.jpeg',

      features: [
        'Power Monitoring',
        'Energy Analytics',
        'Real-time Data',
        'Energy Optimization'
      ],

      price: 'Liên hệ báo giá',

      link: '/products/energy'
    }

  ];


  // =====================================================
  // GET ALL PRODUCTS
  // =====================================================

  getProducts(): Product[] {
    return this.products;
  }


  // =====================================================
  // GET PRODUCT BY ID
  // =====================================================

  getProductById(id: string): Product | undefined {
    return this.products.find(
      product => product.id === id
    );
  }


  // =====================================================
  // GET PRODUCT BY LINK
  // =====================================================

  getProductByLink(link: string): Product | undefined {
    return this.products.find(
      product => product.link === link
    );
  }


  // =====================================================
  // GET PRODUCTS BY FIELD
  // =====================================================

  getProductsByField(field: ProductField): Product[] {
    return this.products.filter(
      product => product.field === field
    );
  }


  // =====================================================
  // GET CAMERA
  // =====================================================

  getCameras(): Product[] {
    return this.getProductsByField('camera');
  }


  // =====================================================
  // GET HEALTHCARE
  // =====================================================

  getHealthcare(): Product[] {
    return this.getProductsByField('healthcare');
  }


  // =====================================================
  // GET AGRICULTURE
  // =====================================================

  getAgriculture(): Product[] {
    return this.getProductsByField('agriculture');
  }


  // =====================================================
  // GET CONSTRUCTION
  // =====================================================

  getConstruction(): Product[] {
    return this.getProductsByField('construction');
  }


  // =====================================================
  // GET INDUSTRIAL
  // =====================================================

  getIndustrial(): Product[] {
    return this.getProductsByField('industrial');
  }


  // =====================================================
  // GET SMART HOME
  // =====================================================

  getSmartHome(): Product[] {
    return this.getProductsByField('smart-home');
  }


  // =====================================================
  // GET ENVIRONMENT
  // =====================================================

  getEnvironment(): Product[] {
    return this.getProductsByField('environment');
  }


  // =====================================================
  // GET SMART ENERGY
  // =====================================================

  getSmartEnergy(): Product[] {
    return this.getProductsByField('energy');
  }

}