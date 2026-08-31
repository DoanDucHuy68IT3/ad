import { Injectable } from '@angular/core';

import { Camera } from '../models/camera.model';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  private cameras: Camera[] = [

    {
      id: 'cam-edge-x1',
      name: 'EdgeCam X1',
      category: 'Camera AI biên (Edge AI)',
      resolution: '4MP · 2560x1440',
      fps: 30,
      aiFeatures: [
        'Nhận diện khuôn mặt',
        'Đếm người',
        'Phát hiện vật thể'
      ],
      price: 'Liên hệ báo giá',
      image: 'images/cameras/camera-01.jpeg',
      description:
        'Camera AI xử lý biên trên chip ESP32-S3, chạy mô hình YOLO-Nano ngay trên thiết bị, không cần server rời.'
    },

    {
      id: 'cam-vision-pro',
      name: 'VisionCam Pro',
      category: 'Camera AI trung tâm',
      resolution: '8MP · 3840x2160',
      fps: 25,
      aiFeatures: [
        'Theo dõi đối tượng',
        'Bản đồ nhiệt (Heatmap)',
        'Cảnh báo bất thường'
      ],
      price: 'Liên hệ báo giá',
      image: 'images/cameras/camera-02.jpeg',
      description:
        'Camera độ phân giải cao cho nhà máy và kho vận, kết nối server AI trung tâm chạy YOLOv8 tốc độ cao.'
    },

    {
      id: 'cam-retail-eye',
      name: 'RetailEye Mini',
      category: 'Camera AI bán lẻ',
      resolution: '2MP · 1920x1080',
      fps: 30,
      aiFeatures: [
        'Đếm khách',
        'Phân tích hành vi',
        'Nhận diện kệ hàng trống'
      ],
      price: 'Liên hệ báo giá',
      image: 'images/cameras/camera-03.jpeg',
      description:
        'Thiết kế nhỏ gọn cho cửa hàng và quán cà phê, tối ưu chi phí, dễ lắp đặt trong 15 phút.'
    },

    {
      id: 'cam-guard-360',
      name: 'GuardCam 360',
      category: 'Camera AI an ninh',
      resolution: '5MP · 2592x1944',
      fps: 20,
      aiFeatures: [
        'Phát hiện xâm nhập',
        'Nhận diện biển số',
        'Theo dõi ban đêm'
      ],
      price: 'Liên hệ báo giá',
      image: 'images/cameras/camera-04.jpg',
      description:
        'Giải pháp an ninh toàn diện với hồng ngoại thế hệ mới và mô hình phát hiện chuyển động thông minh.'
    },

    {
      id: 'cam-face-ai-pro',
      name: 'FaceAI Pro',
      category: 'Camera nhận diện khuôn mặt',
      resolution: '4MP · 2560x1440',
      fps: 30,
      aiFeatures: [
        'Face Recognition',
        'Face Detection',
        'Phân tích khuôn mặt'
      ],
      price: 'Liên hệ báo giá',
      image: 'images/cameras/camera-05.jpg',
      description:
        'Camera chuyên dụng cho nhận diện khuôn mặt, phù hợp hệ thống kiểm soát ra vào và chấm công thông minh.'
    },

    {
      id: 'cam-people-count',
      name: 'PeopleCount AI',
      category: 'Camera đếm người',
      resolution: '4MP · 2560x1440',
      fps: 30,
      aiFeatures: [
        'Đếm người thời gian thực',
        'Line Crossing',
        'Thống kê lưu lượng'
      ],
      price: 'Liên hệ báo giá',
      image: 'images/cameras/camera-06.jpeg',
      description:
        'Giải pháp Computer Vision giúp doanh nghiệp theo dõi lượng khách và phân tích lưu lượng theo thời gian thực.'
    },

    {
      id: 'cam-ptz-ai',
      name: 'PTZ Vision 360',
      category: 'Camera PTZ AI',
      resolution: '8MP · 3840x2160',
      fps: 25,
      aiFeatures: [
        'AI Auto Tracking',
        'Zoom quang học',
        'Theo dõi đối tượng'
      ],
      price: 'Liên hệ báo giá',
      image: 'images/cameras/camera-07.jpeg',
      description:
        'Camera PTZ tích hợp AI Auto Tracking, cho phép tự động bám theo đối tượng trong khu vực giám sát.'
    },

    {
      id: 'cam-smart-factory',
      name: 'FactoryVision X',
      category: 'Camera AI công nghiệp',
      resolution: '8MP · 3840x2160',
      fps: 30,
      aiFeatures: [
        'Phát hiện lỗi',
        'Giám sát dây chuyền',
        'Phát hiện người'
      ],
      price: 'Liên hệ báo giá',
      image: 'images/cameras/camera-08.jpeg',
      description:
        'Camera AI dành cho nhà máy, hỗ trợ giám sát dây chuyền sản xuất và phát hiện bất thường tự động.'
    }

  ];

  getCameras(): Camera[] {
    return this.cameras;
  }

  getCameraById(id: string): Camera | undefined {
    return this.cameras.find((camera) => camera.id === id);
  }

}