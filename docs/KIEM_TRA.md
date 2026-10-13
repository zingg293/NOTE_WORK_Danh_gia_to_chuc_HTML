# Kết quả kiểm tra bộ demo

Kiểm tra tự động hoàn tất ngày 13/10/2026.

| Nhóm | Kết quả | Phạm vi |
|---|---|---|
| Công thức và điều kiện | 16 kiểm tra đạt | 480/500; chặn trần; mục tiêu 0; tỷ lệ mẫu số 0; khoảng trùng/hở; mức mô tả; đủ điểm; chỉ kết quả xác nhận; nhiệm vụ trùng mã; 25% chưa đạt 30%; số chưa làm tròn; hạn mức bỏ phần lẻ |
| Luồng ứng dụng | 9 kiểm tra đạt | Tạo nội dung 7 trang; chặn đơn vị duyệt; trình/duyệt kế hoạch; báo cáo/xác nhận; B2 lấy 12/12; hồ sơ cố định; thẩm định riêng; quyết định bắt buộc; khóa hồ sơ |
| Cú pháp | Đạt | `node --check assets/app.js` và `node --check assets/logic.js` |
| Cấu trúc | Đạt | 8 trang HTML, liên kết tương đối tồn tại, ngôn ngữ vi, không ID trùng trong file trang tĩnh |
| Tài nguyên | Đạt | Không có gọi mạng trong code; không chứa domain dịch vụ tạo demo; CSS/JS/icon nội bộ |

Kiểm tra luồng ứng dụng dùng fixture DOM tối thiểu trong Node; đây không phải kiểm tra thao tác trên trình duyệt thật. Môi trường hiện tại không có công cụ trình duyệt được hỗ trợ để kiểm trực tiếp, nên chưa xác minh vị trí khoanh hướng dẫn, bố cục desktop/mobile, hộp in và thao tác tải tệp trên Chrome/Edge.

Các thao tác khuyến nghị kiểm tra trước buổi demo khách: mở index trên GitHub Pages; thử hướng dẫn và Esc; nhập kết quả 480/500 và tỷ lệ 1.980/2.000; chuyển vai trò; thử trả bổ sung; mở phiếu in trên A4; thử màn hình điện thoại. Tệp lưu tên trong demo, không có nội dung tải lên máy chủ.

## Chạy lại

Từ thư mục gốc bộ demo:

```bash
node tests/business.test.js
node tests/ui-state.test.js
python tests/structure.py
```

Đây là kiểm tra nghiệp vụ và trạng thái; không cần cài thư viện. Việc công bố thật, đăng nhập, lưu dữ liệu chung, quyền máy chủ, ký số, .xlsx và hạn mức đồng thời cần được kiểm tra ở phiên bản triển khai.

## Bản giao diện 1.1

Đối chiếu mã màu và khung từ CSS của demo tham chiếu: menu/thanh trên #205b96, nền #f4f7fb, chữ #253447, viền #dce4ed, mục menu chọn nền trắng. Cập nhật menu biểu tượng, thẻ đơn vị, khung bảng/form và hướng dẫn. Giữ khóa localStorage. Đã chạy lại kiểm tra trạng thái và cấu trúc/đường dẫn có tham số phiên bản. Chưa kiểm trực tiếp hình ảnh bằng trình duyệt thật.
