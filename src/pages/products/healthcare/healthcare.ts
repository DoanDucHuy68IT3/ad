import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-healthcare',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './healthcare.html',
  styleUrl: './healthcare.css'
})
export class Healthcare {

 applications = [
  {
    title: 'Tự động kiểm tra chất lượng',
    description: 'Phát hiện sớm các vấn đề về chất lượng trong sản xuất dược phẩm và thiết bị y tế. AI có thể phát hiện tạp chất, các khuyết tật vi mô và lỗi về bao bì.',
    image: 'images/product/cameras/camera-01.jpeg'
  },
  {
    title: 'Xác minh thuốc và đơn thuốc',
    description: 'Sử dụng AI Vision để đếm chính xác số lượng thuốc, kiểm tra đơn thuốc và tự động cập nhật tồn kho.',
    image: 'images/product/healthcare/1-2.avif'
  },
  {
    title: 'Tối ưu vận hành',
    description: 'Chuyển đổi tài liệu thành dữ liệu có cấu trúc và tự động hóa các công việc hành chính.',
    image: 'images/product/healthcare/1-3.avif'
  },
  {
    title: 'Hỗ trợ quy trình và đào tạo',
    description: 'Theo dõi các quy trình phức tạp và cung cấp hướng dẫn theo thời gian thực cho bác sĩ và nhân viên y tế.',
    image: 'images/product/healthcare/1-4.avif'
  },
  {
    title: 'Phân tích hình ảnh y tế',
    description: 'Tự động phát hiện các dấu hiệu bất thường trên hình ảnh X-quang, MRI và các dữ liệu hình ảnh y tế khác.',
    image: 'images/product/healthcare/1-5.avif'
  },
  {
    title: 'Chăm sóc và giám sát bệnh nhân',
    description: 'Tự động đọc các chỉ số từ thiết bị y tế, theo dõi việc sử dụng thuốc và phát hiện sớm các tình huống nguy hiểm.',
    image: 'images/product/healthcare/1-6.avif'
  }
];

  industries = [
    {
      title: 'Sản xuất thiết bị y tế',
      items: [
        'Kiểm tra chất lượng sản phẩm',
        'Phát hiện khuyết tật vi mô',
        'Xác minh độ chính xác khi lắp ráp'
      ]
    },
    {
      title: 'Sản xuất dược phẩm',
      items: [
        'Phát hiện tạp chất',
        'Kiểm tra tính toàn vẹn của bao bì',
        'Theo dõi mã lô sản xuất'
      ]
    },
    {
      title: 'Vận hành bệnh viện',
      items: [
        'Theo dõi luồng bệnh nhân',
        'Tối ưu phân bổ nhân sự',
        'Theo dõi việc sử dụng thiết bị'
      ]
    },
    {
      title: 'Quản lý nhà thuốc',
      items: [
        'Xác minh số lượng thuốc',
        'Theo dõi tồn kho',
        'Phát hiện lỗi cấp phát thuốc'
      ]
    },
    {
      title: 'Nghiên cứu lâm sàng',
      items: [
        'Phân tích hình ảnh y tế',
        'Ẩn dữ liệu bệnh nhân',
        'Theo dõi hành vi trong thử nghiệm'
      ]
    },
    {
      title: 'Chăm sóc bệnh nhân',
      items: [
        'Phát hiện bệnh nhân bị ngã',
        'Theo dõi việc sử dụng thuốc',
        'Đọc thông số trên thiết bị y tế'
      ]
    },
    {
      title: 'Đào tạo nhân viên',
      items: [
        'Đánh giá kỹ năng phẫu thuật',
        'Theo dõi việc sử dụng PPE',
        'Phân tích bài tập đào tạo'
      ]
    },
    {
      title: 'Vệ sinh và tiệt trùng',
      items: [
        'Kiểm tra độ sạch của dụng cụ',
        'Giám sát tuân thủ vệ sinh',
        'Theo dõi quy trình xử lý chất thải'
      ]
    }
  ];

  models = [
    'YOLOv8',
    'YOLO-World',
    'YOLOv9',
    'PaliGemma',
    'OpenAI CLIP',
    'YOLOv5',
    'DocTR',
    'YOLOv7'
  ];

  technologies = [
    'Python',
    'cURL',
    'JavaScript',
    'Swift',
    '.NET'
  ];

  deployments = [
    'ARM CPU',
    'x86 CPU',
    'Luxonis OAK',
    'NVIDIA GPU',
    'NVIDIA TensorRT',
    'NVIDIA Jetson',
    'Raspberry Pi'
  ];
}