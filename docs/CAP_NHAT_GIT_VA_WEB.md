# Cập nhật giao diện 1.1 lên GitHub và web demo

Bản này dùng khung NOTE WORK xanh dương: thanh menu và thanh trên #205b96, menu đang chọn nền trắng, nền trang #f4f7fb, bảng và biểu mẫu có viền xám xanh. Có biểu tượng menu, thẻ đơn vị, các bước và hướng dẫn khoanh nổi bật. CSS/JS có mã phiên bản trong đường dẫn để trình duyệt tải bản mới. Dữ liệu demo vẫn dùng khóa lưu trước đây nên không bị xóa khi cập nhật tại cùng địa chỉ web.

## 1. Chuẩn bị bản cập nhật

1. Tải file ZIP mới rồi giải nén vào một thư mục mới, ví dụ `NOTE_WORK_DEMO_V1_1`.
2. Mở thư mục đó: phải nhìn thấy `index.html`, 6 trang nghiệp vụ, `nghiep-vu.html`, thư mục `assets`, `docs`, `tests` và `README.md`.
3. Chưa cần đổi tên miền, tạo repository mới hoặc build code.
4. Không bấm “Làm lại từ đầu” trong demo nếu muốn giữ dữ liệu đã nhập.

Bộ file có 8 trang HTML. Các file thay đổi liên quan giao diện gồm 7 trang ứng dụng (đường dẫn CSS/JS phiên bản mới), `assets/style.css`, `assets/app.js`, `assets/favicon.svg`, `nghiep-vu.html` và tài liệu. Nên tải đầy đủ để các trang cùng phiên bản.

## 2. Cập nhật GitHub bằng trình duyệt

1. Mở GitHub và vào repository demo đang dùng. Theo ảnh trước, tài khoản là `zingg293`, repository là `NOTE_WORK_Danh-gia_to_chuc_HTML`. Nếu bạn đã đổi tên, dùng tên hiện tại.
2. Chọn tab **Code**.
3. Kiểm tra bộ chọn nhánh bên trái đang là **main** (hoặc đúng nhánh đang xuất bản tại Settings → Pages).
4. Đảm bảo bạn đang ở thư mục gốc, nơi đã có `index.html`; không mở bên trong `assets` hoặc `docs`.
5. Chọn **Add file → Upload files**.
6. Mở thư mục vừa giải nén trên máy, kéo **các file và thư mục bên trong** vào vùng tải lên. Không kéo file ZIP. Không kéo thư mục bao ngoài `NOTE_WORK_DEMO_V1_1`, vì sẽ tạo một cấp thư mục mới và web vẫn dùng code cũ ở gốc.
7. Kiểm tra danh sách đường dẫn trước khi lưu: phải là `index.html`, `cau-hinh.html`, `assets/style.css`, `assets/app.js`… Nếu thấy `NOTE_WORK_DEMO_V1_1/index.html`, hãy hủy và tải lại đúng cấp.
8. Nhập nội dung commit: `Update NOTE WORK blue interface v1.1`.
9. Với repository demo cá nhân không bảo vệ nhánh, chọn **Commit directly to the main branch** rồi **Commit changes**. Nếu GitHub chỉ cho tạo nhánh hoặc hiện **Propose changes**, tạo nhánh, mở Pull request rồi **Merge** vào nhánh xuất bản. Chỉ đẩy vào nhánh mới thì web main chưa đổi.
10. Quay về Code, kiểm tra commit mới và mở `assets/style.css`: cuối file phải có phần “Giao diện 1.1”. Mở `index.html`: đường dẫn CSS/JS có `v=20261013-blue1`.

Tải file trùng đường dẫn cập nhật file đang có. Không cần xóa repository, xóa toàn bộ file hoặc xóa file CNAME của tên miền thật đã cấu hình. Nếu không dùng tên miền riêng, ô Custom domain để trống. Không nhập tên miền minh họa.

## 3. Cập nhật web nếu dùng GitHub Pages

Nếu web đã hoạt động với GitHub Pages, chỉ cần commit vào đúng nhánh/thư mục xuất bản. GitHub sẽ chạy lại triển khai; không cần bấm Save ở Settings cho mỗi lần cập nhật.

1. Vào **Settings → Pages** để kiểm tra nguồn: **Deploy from a branch**, nhánh **main**, thư mục **/(root)** nếu bạn đang đặt index ở gốc.
2. Vào tab **Actions**, mở lần chạy mới nhất liên quan Pages, thường có tên **pages build and deployment**.
3. Chờ các bước hoàn tất và hiện dấu tích xanh. Nếu đang chạy, đợi thay vì sửa tiếp cấu hình.
4. Quay lại **Settings → Pages → Visit site**. Dùng link hiển thị ở đây là chắc chắn nhất, đặc biệt nếu tên repository khác ảnh trước.
5. Trên web nhấn **Ctrl + F5** (Windows/Chrome/Edge) để tải lại. Bản 1.1 sẽ có thanh menu và thanh trên màu xanh dương, menu được chọn nền trắng, biểu tượng menu và chữ “Giao diện 1.1” ở chân trang.
6. Kiểm tra trang Cấu hình và Báo cáo cũng đã đổi giao diện; bấm Hướng dẫn, thử Tiếp/Trước/Đóng.

Nếu repository vẫn Private và tài khoản chưa hỗ trợ Pages, việc upload code không tự giải quyết điều kiện bật Pages. Dùng cấu hình tài khoản phù hợp hoặc phương án Netlify. Link web hiện tại không đổi nếu tên repository, nguồn xuất bản và tên miền không đổi.

## 4. Cập nhật web nếu dùng Netlify

### Đã triển khai bằng kéo thả

Commit GitHub không tự cập nhật website Netlify đã tạo bằng kéo thả.

1. Đăng nhập Netlify, mở **đúng dự án demo đang có**.
2. Vào **Deploys**, tìm khu vực tải lên triển khai thủ công.
3. Kéo thư mục vừa giải nén, có `index.html` ngay bên trong, vào khu vực này.
4. Chờ bản mới hoàn tất và trở thành bản production đã công bố.
5. Mở lại link website hiện tại, nhấn Ctrl + F5. Kiểm tra dòng “Giao diện 1.1”.

Không mở Netlify Drop để tạo dự án mới mỗi lần cập nhật nếu muốn giữ nguyên link cũ.

### Đã liên kết Netlify với repository GitHub

Push/commit vào nhánh production đã liên kết sẽ kích hoạt triển khai tự động. Mở Deploys để theo dõi. Bản này không cần build; thư mục xuất bản là thư mục chứa index.html (gốc repository nếu bạn tải đúng hướng dẫn). Nếu commit lên nhánh khác thì kiểm tra nhánh production trong cấu hình dự án.

## 5. Nếu web vẫn có giao diện cũ

| Dấu hiệu | Kiểm tra / xử lý |
|---|---|
| Git có file mới nhưng web chưa đổi | Kiểm tra Actions/Deploys đã thành công chưa |
| Vẫn màu xanh lá | Nhấn Ctrl + F5; kiểm tra code ở đúng nhánh/thư mục, không bị lồng thư mục ZIP |
| Có trang đổi, có trang chưa đổi | Tải đủ 7 trang ứng dụng cùng thư mục assets, không chỉ style.css |
| Trang mất định dạng | Kiểm tra đường dẫn `assets/style.css`, tên thư mục chữ thường và upload đủ file |
| Web Netlify chưa đổi sau commit GitHub | Nếu dùng kéo thả, phải tải bản mới trong Deploys của dự án |
| Link không vào được | Dùng Visit site trong nhà cung cấp; tên Custom domain chỉ dùng khi sở hữu và đã cấu hình DNS |
| Dữ liệu demo khác trước | Kiểm tra có dùng đúng địa chỉ cũ không; localStorage tách theo tên miền/trình duyệt |

## 6. Cập nhật bằng Git trên máy nếu đã dùng Git

Trong thư mục clone repository, trước khi chép file mới:

```bash
git status
git pull --ff-only origin main
```

Nếu đang có thay đổi chưa commit hoặc lệnh pull thất bại, xử lý phần đó trước; không dùng force push. Sau đó chép nội dung thư mục giải nén vào thư mục clone, chọn Replace cho file trùng; giữ thư mục `.git` và CNAME thật nếu có.

```bash
git status
git add .
git commit -m "Update NOTE WORK blue interface v1.1"
git push origin main
```

Thay main bằng nhánh xuất bản nếu bạn đang dùng nhánh khác. Không chạy git init hoặc git remote add lại trong repository đã clone.

## Nguồn hướng dẫn nền tảng

- GitHub upload: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Netlify: https://docs.netlify.com/deploy/create-deploys/

Kiểm tra tự động nghiệp vụ và trạng thái vẫn đạt. Bản đổi giao diện chưa được kiểm thao tác/hiệu ứng/in trên trình duyệt thật trong môi trường hiện tại.
