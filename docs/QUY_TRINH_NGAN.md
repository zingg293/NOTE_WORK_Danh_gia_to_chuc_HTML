# Đánh giá tổ chức — bản đọc nhanh

**Luồng:** Cấu hình → Duyệt chỉ tiêu năm → Báo cáo và xác nhận → Tự đánh giá → Người đứng đầu trình → Thẩm định → Công nhận → Thông báo / In.

## Sáu màn hình cần code

| Màn hình | Người dùng làm gì | Dữ liệu lấy theo gì | Điều kiện qua bước |
|---|---|---|---|
| Tiêu chí và mẫu | Chọn cách đo/chấm, ngưỡng, nguồn và người xác nhận | Bộ tiêu chí theo năm; A=30, B=70 | Mẫu được duyệt, phiên bản rõ |
| Chỉ tiêu năm | Nhập mục tiêu, hạn, phạm vi; phân bổ điểm rồi trình | Mẫu đã duyệt + đơn vị/năm theo quyền | Điểm con đủ điểm tiêu chí; tổng 100; kế hoạch được duyệt |
| Báo cáo | Nhập số thực tế, ngày và tài liệu; gửi xác nhận | Chỉ tiêu năm đã duyệt | Số gốc hợp lệ, tài liệu đủ, người được giao quyền xác nhận |
| Tự đánh giá | Đọc điểm, kiểm điều kiện, ghi nhận xét và mức đề xuất | Kết quả đã xác nhận + nhiệm vụ đã nghiệm thu | Đủ cấu hình / điểm / kết quả / tài liệu; người đứng đầu xác nhận-trình |
| Thẩm định và công nhận | Kiểm chứng số liệu, ghi lý do chênh lệch, quyết định và thông báo | Bản đã trình; thẩm định lưu riêng; hạn mức cùng năm/phạm vi | Đúng quyền, đủ căn cứ, không vượt hạn mức |
| Kết quả và in | Xem bản chính thức, xuất bảng, in phiếu | Đúng phiên bản hồ sơ và quyết định | Chưa công nhận không coi là kết quả cuối; bước chưa làm để trống |

## Ghi chú cạnh tên trường

| Nhãn trên màn hình | Ý nghĩa / cách lấy |
|---|---|
| Mục tiêu (số hoặc mức cần đạt) | Người lập nhập; đơn vị tính và cách so sánh lấy mẫu |
| Điểm tối đa (điểm, không phải tiền) | Lấy phân bổ đã duyệt; người lập không tự sửa |
| Giá trị thực tế (theo đơn vị tính) | Số thực hiện do đơn vị báo cáo |
| Số đạt / Tổng số (ví dụ 1.980 / 2.000) | Nhập số gốc; hệ thống tính 99%; tổng bằng 0 là chưa xác định |
| Cận dưới (giá trị bắt đầu khoảng) | Ví dụ 95; tra theo kết quả đo |
| Cận trên (giá trị kết thúc khoảng) | Ví dụ 100; trống = không giới hạn |
| Lấy giá trị tại cận (có tính đúng điểm biên) | [95,100) gồm 95, không gồm 100 |
| Tỷ lệ điểm (% điểm tối đa, 0–100) | 80% của 10 điểm là 8 điểm, không phải kết quả 80% |
| Ngày số liệu (dữ liệu đến ngày này) | Khác ngày hoàn thành thực tế và ngày nhập |
| Minh chứng (tài liệu kiểm chứng số liệu) | Gắn đúng lần báo cáo, giữ theo phiên bản |
| Mức đề xuất (kiểm cả điểm và điều kiện) | Người dùng chọn; hệ thống báo đáp ứng/cần xem xét |
| Hạn mức xuất sắc (số hồ sơ tối đa) | floor(tỷ lệ × số hoàn thành tốt cùng năm/cấp), không gồm xuất sắc |

## Sáu quy tắc phải giữ

1. **Không nhập điểm tổng bằng tay.** Theo hoàn thành: kết quả/mục tiêu × điểm tối đa, chặn trần; chỉ dùng số, mục tiêu > 0, càng cao càng tốt. Giảm/bằng/khoảng/0 dùng bảng khoảng; định tính dùng mức mô tả.
2. **Điểm khác đạt mục tiêu.** 480/500, tối đa 10 → 9,60 điểm nhưng chưa đạt 500. Tổng chỉ tiêu không phải tổng nhiệm vụ; mỗi mã nhiệm vụ đếm một lần.
3. **Thiếu dữ liệu không cho 0 hoặc đủ điểm.** Chưa báo cáo, mẫu số 0 hoặc thiếu xác nhận thì chưa chốt.
4. **Điểm và điều kiện cùng cần phù hợp.** Xuất sắc: ≥90, toàn bộ nhiệm vụ đúng hạn/chất lượng/hiệu quả, ≥30% vượt, điều kiện cấp dưới/khắc phục và hạn mức. 3/12 vượt = 25%, chưa đủ.
5. **Bản đã duyệt/trình phải giữ lịch sử.** Điều chỉnh kế hoạch/mẫu/báo cáo tạo phiên bản; nguồn thay đổi không sửa ngầm hồ sơ đã trình. Thẩm định có số liệu riêng và lý do chênh lệch.
6. **Máy chủ kiểm quyền và hạn mức.** Chọn vai trò trong demo chỉ mô phỏng. Khi công nhận cần giao dịch chống dùng trùng suất, số/ngày quyết định, đúng người ký và tài liệu. Khóa bản đã công nhận.

Chi tiết trường dữ liệu, chuyển trạng thái, API và điểm cần chốt: `NGHIEP_VU.md`. Tổng A/B lấy tài liệu; điểm từng tiêu chí, 12 nhiệm vụ và các hồ sơ mẫu là số liệu minh họa của demo.
