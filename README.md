# NOTE WORK · Demo Đánh giá tổ chức · Giao diện 1.1

Bộ HTML nhiều trang, tiếng Việt, chạy độc lập; không cần cài thư viện, không dùng API hoặc tài nguyên từ dịch vụ bên ngoài.

## Bản cập nhật giao diện

Bản 1.1 dùng khung xanh dương NOTE WORK, mục menu được chọn nền trắng, bảng/biểu mẫu viền xám xanh. Hướng dẫn thay code GitHub và cập nhật web từng bước nằm trong `docs/CAP_NHAT_GIT_VA_WEB.md`.

## Chạy ngay trên máy

1. Giải nén bộ file.
2. Mở `index.html` bằng Chrome hoặc Edge; giữ nguyên thư mục `assets` cùng các file HTML.
3. Chọn “Bắt đầu từ bước 1” hoặc “Nạp hồ sơ ví dụ đã xác nhận”.
4. Mỗi trang bấm “Bắt đầu hướng dẫn”; nút/trường được khoanh nổi bật, có Trước / Tiếp / Hoàn tất. Nhấn Esc để đóng.
5. Muốn dữ liệu liên tục ổn định giữa các trang, nên chạy cùng một địa chỉ web. Nếu mở file trực tiếp và trình duyệt không chia sẻ dữ liệu giữa các trang, dùng máy chủ tĩnh: `python -m http.server 8080`, rồi mở `http://localhost:8080`.

Dữ liệu lưu ở trình duyệt đang dùng. Nạp ví dụ hoặc Làm lại có hỏi xác nhận trước khi thay dữ liệu. Người khác truy cập sẽ có bộ dữ liệu riêng; demo không đồng bộ nhiều máy.

## Kịch bản chạy từ đầu

| Bước | Trang / vai trò | Thao tác |
|---|---|---|
| 1 | Tiêu chí và mẫu / Người cấu hình | Khung và mẫu ví dụ đã duyệt. Có thể tạo mẫu mới, chọn cách đo/chấm, thử tính, lưu nháp, trình rồi duyệt |
| 2 | Chỉ tiêu năm / Người lập | Áp dụng bộ mẫu; mở Chi tiết để sửa mục tiêu/hạn; trình bảng |
| 2 tiếp | Chỉ tiêu năm / Người cấu hình | Kiểm phân bổ rồi Duyệt bảng chỉ tiêu |
| 3 | Báo cáo / Người lập | Điền báo cáo ví dụ hoặc nhập từng dòng; Gửi tất cả bản nháp |
| 3 tiếp | Báo cáo / Người xác nhận | Xác nhận các báo cáo đang chờ, hoặc kiểm/trả từng dòng |
| 4 | Tự đánh giá / Người lập | Ghi ưu điểm/hạn chế, chọn mức; bổ sung Thông tin phiếu in ở trang Kết quả trước khi khóa; Chuyển người đứng đầu |
| 4 tiếp | Tự đánh giá / Người đứng đầu | Xác nhận và trình; hệ thống lưu bản cố định |
| 5 | Thẩm định / Người thẩm định | Khởi tạo bản thẩm định; mở từng tiêu chí để sửa số gốc nếu cần; nhập ý kiến; Hoàn tất thẩm định |
| 5 tiếp | Thẩm định / Người công nhận | Công nhận: chọn mức, nhập quyết định/căn cứ/tài liệu; Thông báo kết quả |
| 6 | Kết quả và in | Xem kết quả chính thức, xuất CSV bằng Excel; Xem trước phiếu in → In/Lưu PDF |

Bộ ví dụ cho tổng 83,60 điểm, 12/12 nhiệm vụ hoàn thành đúng hạn/chất lượng/hiệu quả, 3/12 vượt; phù hợp để thử mức Hoàn thành tốt. Điểm từng tiêu chí là cấu hình minh họa.

## Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub, ví dụ `note-work-org-demo` (public nếu dùng GitHub Pages miễn phí theo cấu hình tài khoản).
2. Chọn **Add file → Upload files**, kéo toàn bộ **nội dung** thư mục giải nén vào gốc repository, không chỉ tải file ZIP. Phải nhìn thấy `index.html` ở gốc, bên cạnh thư mục `assets`.
3. Commit thay đổi.
4. Mở **Settings → Pages → Build and deployment → Deploy from a branch**.
5. Chọn nhánh `main`, thư mục `/(root)`, bấm Save.
6. Khi GitHub triển khai xong, dùng địa chỉ Pages được hiển thị trong Settings → Pages để gửi khách. Địa chỉ thường có dạng `https://TEN-TAI-KHOAN.github.io/note-work-org-demo/`.
7. Nếu có tên miền riêng, cấu hình Custom domain trong GitHub Pages và DNS theo hướng dẫn GitHub để sử dụng tên miền thương hiệu.

Bộ code dùng đường dẫn tương đối nên chạy được ở thư mục con repository. Không chứa liên kết về dịch vụ tạo demo. Không cần build, package manager hoặc bước cấu hình môi trường.

Nếu dùng Git trên máy, chạy trong thư mục chứa `index.html`:

```bash
git init
git add .
git commit -m "Add organization assessment demo"
git branch -M main
git remote add origin https://github.com/TEN-TAI-KHOAN/note-work-org-demo.git
git push -u origin main
```

Thay tài khoản/tên repository bằng thông tin thật. Đăng nhập GitHub theo yêu cầu Git; không đưa mật khẩu/token vào mã nguồn.

## File trong bộ bàn giao

- `index.html`: trang bắt đầu.
- `cau-hinh.html`, `chi-tieu.html`, `bao-cao.html`, `tu-danh-gia.html`, `tham-dinh.html`, `ket-qua.html`: 6 bước.
- `nghiep-vu.html`: bản phân tích đọc trên web, có bản đọc nhanh và phần chi tiết.
- `assets/app.js`: giao diện, chuyển trạng thái và hướng dẫn khoanh nút/trường.
- `assets/logic.js`: công thức và kiểm tra nghiệp vụ thuần.
- `assets/style.css`: responsive, bảng, biểu mẫu, hướng dẫn và phiếu A4.
- `docs/QUY_TRINH_NGAN.md`: bản đọc nhanh cho khách và dev.
- `docs/NGHIEP_VU.md`: trường dữ liệu, nguồn, quyền, trạng thái và tích hợp.
- `docs/KIEM_TRA.md`: kết quả kiểm tra và giới hạn xác minh.
- `tests/`: các kiểm tra nghiệp vụ, chuyển trạng thái và cấu trúc trang; chạy `node tests/business.test.js` và `node tests/ui-state.test.js`.

## Giới hạn đã ghi rõ trong demo

Đây là mô phỏng trình diễn: vai trò có thể đổi, một đơn vị, số nhiệm vụ ví dụ. Không đăng nhập thật; không gửi thông báo ra ngoài; tệp chỉ lưu tên; CSV thay đọc trực tiếp .xlsx; in qua trình duyệt; không ký số; không xử lý nhiều người đồng thời. Máy chủ và các tích hợp cần triển khai theo tài liệu nghiệp vụ. Năm mới lưu kho demo riêng trong trình duyệt; không có màn hình quản lý kho năm cũ.
