# Đánh giá tổ chức — nghiệp vụ và dữ liệu cần triển khai

Phân hệ biến kế hoạch và kết quả của một tổ chức thành hồ sơ đánh giá được kiểm tra, công nhận và thông báo. Có 6 màn hình: Tiêu chí và mẫu; Chỉ tiêu năm; Báo cáo kết quả; Tự đánh giá; Thẩm định và công nhận; Kết quả và in. Không có Tổng quan đơn vị, Dashboard hoặc các phân hệ khác.

Tài liệu này viết lại logic từ tài liệu Word đính kèm và đối chiếu mã giao diện demo đã cung cấp. Các tên A1–B8 được diễn giải bằng ngôn ngữ dễ hiểu. Nội dung đầy đủ của bộ tiêu chí chính thức vẫn phải được lưu trong bản triển khai; tên rút gọn chỉ dùng để hiển thị.

## 1. Luồng và người xử lý

| Bước | Người thực hiện | Dữ liệu tạo / sử dụng | Kết quả của bước |
|---|---|---|---|
| 1. Cấu hình | Người thiết lập → người duyệt cấu hình | Năm, bộ tiêu chí, mẫu đo/chấm, nguồn và người xác nhận | Bộ cấu hình đã duyệt, có phiên bản |
| 2. Kế hoạch | Đơn vị đăng ký hoặc cấp quản lý giao → cấp quản lý duyệt | Mẫu đã duyệt + mục tiêu, hạn, phạm vi + phân bổ điểm | Kế hoạch đã duyệt của đơn vị/năm |
| 3. Báo cáo | Đơn vị nhập → người được phân công xác nhận | Số thực tế, ngày, chất lượng và tài liệu | Kết quả đã xác nhận theo từng chỉ tiêu |
| 4. Tự đánh giá | Người lập → người đứng đầu xác nhận và trình | Kết quả đã xác nhận + điều kiện + nhận xét | Bản hồ sơ lưu cố định tại thời điểm trình |
| 5. Thẩm định / công nhận | Người thẩm định → người có quyền công nhận | Bản đã trình + dữ liệu thẩm định riêng + điều kiện / hạn mức | Quyết định chính thức, rồi thông báo |
| 6. Kết quả / in | Người xem trong phạm vi quyền | Bản đã trình, thẩm định và quyết định | Bảng xuất và phiếu in đúng phiên bản |

Vai trò cấu hình và duyệt có thể cùng người trong demo để dễ thử. Hệ thống thật phải kiểm quyền trên máy chủ và phạm vi đơn vị cho từng thao tác. Đơn vị không xác nhận thay người đứng đầu; người xác nhận số liệu phải là người đã được phân công.

## 2. Dữ liệu gốc và liên kết

| Dữ liệu | Ý nghĩa dễ hiểu | Lấy theo gì |
|---|---|---|
| Đơn vị, cấp quản lý | Tổ chức được đánh giá và cấp xử lý hồ sơ | Danh mục tổ chức có hiệu lực theo năm và phân quyền |
| Người đứng đầu / người ký | Người chịu trách nhiệm hồ sơ / quyết định | Hồ sơ nhân sự, thời gian đảm nhiệm và phân công |
| Kỳ đánh giá | Năm xếp loại cuối cùng | Người cấu hình nhập; tháng/quý chỉ dùng theo dõi |
| Bộ tiêu chí | Khung đánh giá chung và điểm tối đa | Cấu hình đã duyệt; có ngày hiệu lực và văn bản căn cứ |
| Mẫu chỉ tiêu | Quy tắc đo, chấm và nguồn kiểm chứng | Người cấu hình thiết lập, trình và duyệt |
| Chỉ tiêu năm | Mục tiêu cụ thể của đơn vị trong năm | Mẫu đã duyệt + mục tiêu/hạn/phạm vi riêng |
| Nhiệm vụ tổ chức | Việc được giao và nghiệm thu, dùng kiểm điều kiện | Liên kết hệ thống giao việc; mỗi mã nhiệm vụ đếm một lần |
| Báo cáo kết quả | Một lần báo số thực tế và tài liệu | Đơn vị nhập hoặc dữ liệu tích hợp; phải xác nhận |
| Hồ sơ đánh giá | Toàn bộ căn cứ, điểm và đề xuất | Chụp cố định các phiên bản nguồn khi người đứng đầu trình |
| Bản thẩm định | Kết quả kiểm chứng của người thẩm định | Lưu riêng; không sửa đè bản đơn vị đã trình |
| Quyết định | Mức cuối, người ký và văn bản công nhận | Người có quyền công nhận nhập/chọn, kèm tài liệu |

Một mẫu có nhiều phiên bản. Một chỉ tiêu năm trỏ đúng **mã mẫu + phiên bản mẫu**, không chỉ mã mẫu. Báo cáo trỏ đúng chỉ tiêu và phiên bản kế hoạch. Hồ sơ, thẩm định, quyết định và lịch sử đều có đơn vị/năm/phạm vi quyền.

## 3. Màn hình cấu hình

### Kỳ và khung điểm

| Nhãn nên hiển thị | Ý nghĩa / nguồn | Quy tắc |
|---|---|---|
| Năm đánh giá (ví dụ: 2026) | Người cấu hình nhập | Kỳ xếp loại theo năm |
| Hạn chốt hồ sơ (ngày cuối được nộp) | Người cấu hình nhập theo văn bản | Lưu căn cứ thời hạn và ngoại lệ; không chỉ giữ ngày |
| Ngày áp dụng (bắt đầu hiệu lực) | Người cấu hình nhập | Gắn với phiên bản bộ tiêu chí |
| Căn cứ áp dụng (tên/số văn bản) | Người cấu hình nhập + đính kèm | Bản chính thức phải có tài liệu hợp lệ |
| Điểm tối đa (điểm) | Lấy khung đã duyệt | Nhóm A = 30; B = 70; tổng = 100; không gọi là ngân sách |
| Phiên bản / trạng thái | Hệ thống ghi | Không cho người dùng tự sửa số phiên bản |

Khung có 11 tiêu chí: A1 Tuân thủ và lập kế hoạch; A2 Quản lý đội ngũ và phối hợp; A3 Cải tiến cách làm việc; B1 Xây dựng kế hoạch và hướng dẫn; B2 Hoàn thành nhiệm vụ được giao; B3 Điều hành và giải quyết vướng mắc; B4 Phối hợp giữa các đơn vị; B5 Số hóa và đơn giản hóa quy trình; B6 Đổi mới có hiệu quả; B7 Giải quyết hồ sơ; B8 Xử lý phản ánh và kiến nghị.

**Phân bổ mẫu trong demo:** A: 10/10/10; B: 10/10/10/10/10/10/5/5. Tài liệu nguồn quy định tổng A/B nhưng không cho số điểm từng tiêu chí trong phần văn bản; các số này là dữ liệu minh họa, không khẳng định là cấu hình chính thức.

### Mẫu chỉ tiêu chuẩn

| Nhãn nên hiển thị | Ý nghĩa / nguồn | Kiểm tra khi duyệt |
|---|---|---|
| Tên chỉ tiêu (kết quả cần theo dõi) | Người cấu hình nhập | Không để trống |
| Thuộc tiêu chí (chọn trong khung) | Chọn A1–B8 của bộ áp dụng | Không chọn tiêu chí ngoài bộ |
| Đơn vị tính (%, hồ sơ, tỷ…) | Người cấu hình nhập | Phù hợp cách đo |
| Mục tiêu gợi ý (đơn vị có thể nhập lại) | Người cấu hình nhập | Chỉ là gợi ý; mục tiêu năm do người lập nhập |
| Phạm vi thống kê (đếm gì, không đếm gì) | Người cấu hình nhập | Đủ rõ để hai người tính cùng kết quả |
| Nguồn số liệu (báo cáo/hệ thống nào) | Người cấu hình nhập/chọn | Phải truy được số gốc |
| Người xác nhận (tài khoản/vai trò có quyền) | Chọn người đã phân công | Không dùng ô tên tự do khi triển khai thật |
| Cách đo (số trực tiếp / số đạt-tổng / mức) | Chọn danh sách | Chỉ mở trường nhập tương ứng |
| Cách chấm (hoàn thành / khoảng / mô tả) | Chọn danh sách | Phù hợp loại kết quả và mục tiêu |
| So sánh mục tiêu (ít nhất / không quá / bằng / khoảng / mức) | Chọn danh sách | Quy tắc kiểm đạt, tách quy tắc tính điểm |
| Gộp nhiều kỳ (cách tránh trùng số) | Chọn theo loại dữ liệu | Số phát sinh cộng không trùng; lũy kế lấy lần chốt cuối; tỷ lệ cộng số đạt/tổng rồi chia |
| Minh chứng bắt buộc (cần tài liệu kiểm chứng) | Người cấu hình chọn | Chặn gửi báo cáo khi thiếu |
| Chuẩn vượt yêu cầu (điều kiện được nghiệm thu vượt) | Người cấu hình nhập | Không suy từ giá trị cao hơn mục tiêu |
| Không phát sinh / không áp dụng (cách xử lý) | Mẫu đã duyệt | Phải xác nhận. Không mặc định đủ điểm, 0 điểm hoặc chia lại điểm |

Demo giữ “Không phát sinh/không áp dụng → Chưa xác định, chuyển xem xét”. Tài liệu không quy định một công thức chung cho trường hợp này; cần chốt cách xử lý từng mẫu trước khi triển khai. Màn hình nhập không phải nơi người dùng tự chọn công thức ngoại lệ.

### Các trường khoảng và mức

| Nhãn | Hiểu như thế nào | Ví dụ |
|---|---|---|
| Cận dưới (giá trị bắt đầu khoảng) | So với **kết quả đo**, không phải phần trăm hoàn thành | 95 |
| Cận trên (giá trị kết thúc khoảng) | Trống là không giới hạn | 100 |
| Lấy cận dưới / trên (có lấy giá trị đúng tại biên) | Có: ≥ / ≤; không: > / < | [95,100) lấy 95, không lấy 100 |
| Tỷ lệ điểm (% điểm tối đa, 0–100) | Phần điểm được nhận khi rơi vào khoảng | 80% của 10 điểm = 8 điểm |
| Tên mức (mô tả kết quả) | Người báo cáo chọn đúng mức đã duyệt | Đạt / Đạt một phần / Chưa đạt |
| Tỷ lệ điểm của mức (% điểm tối đa) | Điểm ứng với mô tả | 100 / 50 / 0 |

Khoảng được thêm/xóa tùy nhu cầu, không cố định 4 dòng. Không trùng/hở; mỗi kết quả hợp lệ thuộc đúng một khoảng. Demo dùng miền kết quả không âm, phủ từ 0 đến không giới hạn. Bản thật có thể cấu hình miền hợp lệ của từng mẫu, kể cả số âm khi nghiệp vụ cho phép; phải kiểm hai đầu miền. Mục tiêu bằng 0, giảm, bằng hoặc trong khoảng dùng bảng khoảng phù hợp, không chia cho mục tiêu 0.

Trạng thái mẫu: **Nháp → Chờ duyệt → Đã duyệt / Cần bổ sung**. Chỉnh mẫu đã dùng tạo phiên bản mới; không sửa hồ sơ cũ. Năm mới sao chép thành nháp, không sao chép kết quả.

## 4. Chỉ tiêu năm và điểm phân bổ

| Trường hiển thị | Nguồn và ai nhập |
|---|---|
| 1. Tên chỉ tiêu (lấy mẫu) | Chọn mẫu điền sẵn; đề xuất chưa có mẫu do người dùng nhập |
| 2. Thuộc tiêu chí (lấy mẫu) | Kế thừa A1–B8; chỉ đề xuất mới cần chọn |
| 3. Đơn vị thực hiện (theo phạm vi quyền) | Đăng ký lấy đơn vị tài khoản; giao chọn đơn vị thuộc quyền |
| 4. Đơn vị tính (lấy mẫu) | Kế thừa; không tự đổi trong kế hoạch |
| 5. Mục tiêu (số hoặc mức cần đạt) | Người lập nhập; so sánh lấy mẫu. Trong khoảng thêm cận trên |
| 6. Kỳ đánh giá (năm đang chọn) | Hệ thống điền; tháng/quý chỉ theo dõi |
| 7. Hạn hoàn thành (ngày cuối phải hoàn tất) | Người lập nhập; giữ hạn gốc và hạn điều chỉnh đã duyệt |
| 8. Mô tả yêu cầu (đầu ra, phạm vi, chất lượng) | Kế thừa mẫu, người lập bổ sung |
| Điểm tối đa chỉ tiêu (điểm) | Người có quyền phân bổ; đơn vị không tự đổi |
| Nguồn giao / trạng thái | Hệ thống ghi: giao, đăng ký, áp dụng mẫu, nhập bảng |

Giao và đăng ký dùng cùng cấu trúc dữ liệu, khác nguồn và người có quyền. Đề xuất không có mẫu chuyển **Chờ cấu hình**, chưa được duyệt chính thức. Áp dụng bộ mẫu tạo nhiều dòng; thêm chỉ tiêu không tự chia lại điểm cũ.

Tổng điểm chỉ tiêu con bằng điểm tiêu chí; tổng A/B đúng 30/70. Ví dụ tiêu chí 10 điểm có hai chỉ tiêu 6 và 4. Chặn trình/duyệt khi thiếu/vượt điểm, thiếu cách đo/chấm, mục tiêu/hạn/phạm vi hoặc yêu cầu tài liệu chưa rõ. Báo lỗi đúng dòng.

Kế hoạch: **Nháp → Chờ duyệt → Đã duyệt / Cần bổ sung**. Bản chờ duyệt không sửa. Đổi mục tiêu, hạn, phạm vi, cách chấm hoặc điểm sau duyệt phải tạo điều chỉnh có lý do/căn cứ, người duyệt và ngày hiệu lực. Bản cũ còn hiệu lực đến khi bản mới duyệt. Giữ cả kế hoạch và báo cáo cũ, không tự áp kết quả cũ theo công thức mới.

Demo chỉ có một đơn vị để tập trung luồng. Nhập bảng dùng CSV UTF-8 từ Excel, kiểm lỗi từng dòng và nhập các dòng hợp lệ; bản thật bổ sung đọc .xlsx và danh mục nhiều đơn vị theo quyền.

## 5. Báo cáo và công thức

| Trường hiển thị | Nguồn / quy tắc |
|---|---|
| Mục tiêu / cách đo / cách chấm / điểm tối đa | Chỉ đọc, lấy kế hoạch và mẫu đã duyệt |
| Giá trị thực tế (theo đơn vị tính) | Người báo cáo nhập khi đo trực tiếp |
| Số đạt (ví dụ: 1.980 hồ sơ) | Người báo cáo nhập số gốc; từ 0 đến tổng số |
| Tổng số (ví dụ: 2.000; phải > 0) | Người báo cáo nhập; bằng 0 là chưa xác định |
| Mức thực tế (chọn mô tả đã duyệt) | Người báo cáo chọn; không tạo mức mới tại báo cáo |
| Ngày số liệu (dữ liệu đến ngày này) / kỳ báo cáo | Người báo cáo nhập hoặc kiểm số tích hợp |
| Ngày hoàn thành thực tế | Người báo cáo nhập; không thay bằng ngày nhập báo cáo |
| Tài liệu kiểm chứng (tệp/link/mã hồ sơ) | Người báo cáo gắn đúng lần báo cáo |
| Giải trình / chất lượng / phạm vi | Người báo cáo nhập; người xác nhận kiểm chứng |
| Điểm xem trước / điểm chính thức | Hệ thống tính; chỉ chính thức sau xác nhận |
| Người / ngày xác nhận và ý kiến | Hệ thống ghi theo người xử lý; trả bổ sung phải có lý do |

- Tỷ lệ kết quả = số đạt ÷ tổng số × 100%. 1.980/2.000 = 99%. Gộp kỳ phải cộng số đạt/tổng số, không bình quân các tỷ lệ; cần phạm vi để không trùng mẫu số.
- Mức hoàn thành: điểm = min(điểm tối đa, max(0, kết quả ÷ mục tiêu × điểm tối đa)). Chỉ dùng mục tiêu > 0 và càng cao càng tốt. 480/500 × 10 = 9,60 điểm; chưa đạt mục tiêu 500. 550/500 vẫn 10 điểm.
- Khoảng kết quả: tra khoảng đã duyệt; điểm = điểm tối đa × tỷ lệ điểm / 100. Kết quả 98,5%, khoảng [98,99) nhận 80%, tối đa 10 → 8 điểm.
- Mức mô tả: tra mức đã duyệt; điểm = điểm tối đa × tỷ lệ điểm / 100. Đạt một phần 50%, tối đa 10 → 5 điểm.
- Cộng điểm con thành tiêu chí, rồi cộng 11 tiêu chí; không cộng thêm điểm cha. So sánh số chưa làm tròn, hiển thị 2 chữ số thập phân.
- Thiếu số hoặc mẫu số 0: **Chưa xác định**, để điểm “—”; không tự cho 0/100%. Thiếu báo cáo: **Chưa báo cáo**.

Báo cáo: **Nháp → Chờ xác nhận → Đã xác nhận / Cần bổ sung**. Bản nháp chỉ xem trước. Sửa kết quả đã xác nhận tạo báo cáo mới, xác nhận lại; bản cũ còn chính thức trước khi bản mới được xác nhận.

## 6. Tự đánh giá và điều kiện

Người lập đọc điểm và nguồn, chọn mức đề xuất, ghi ưu điểm/hạn chế/giải trình. Không nhập trực tiếp điểm tiêu chí. Thiếu cấu hình, phân bổ, kết quả xác nhận hoặc tài liệu bắt buộc: chặn chuyển/trình, chỉ rõ việc còn thiếu. Khi người đứng đầu xác nhận và trình, lưu cố định tiêu chí, mẫu, kế hoạch, kết quả, điểm, tài liệu, điều kiện và nhận xét.

| Điều kiện | Lấy theo gì |
|---|---|
| Tổng nhiệm vụ và số hoàn thành | Nhiệm vụ tổ chức trong năm, gồm kế hoạch + phát sinh, nghiệm thu; mỗi mã một lần |
| Đúng hạn, chất lượng và hiệu quả | Nhiệm vụ đã nghiệm thu đáp ứng **cả ba**; không dùng riêng số đúng hạn |
| Vượt yêu cầu | Xác nhận nghiệm thu theo chuẩn và tài liệu; không suy từ số cao hơn mục tiêu |
| Chậm tiến độ | Hạn gốc/hạn điều chỉnh có căn cứ + tiến độ/ nghiệm thu |
| Hoàn thành kế hoạch | Chỉ nhiệm vụ trong chương trình/kế hoạch, không gộp phát sinh |
| Cấp dưới trực tiếp | Cơ cấu có hiệu lực theo năm + kết quả đã công nhận; thiếu kết quả cần xử lý trước cấp trên |
| Khắc phục hạn chế | Hồ sơ năm trước / kết luận kiểm tra + kết quả xử lý đã xác nhận |
| Sai phạm / trường hợp đặc biệt | Hồ sơ xác minh và kết luận của người có thẩm quyền; phản ánh không phải kết luận |

Các tỷ lệ dùng tổng nhiệm vụ tương ứng; tổng 0 là chưa xác định. Điều kiện vượt: 3/12 = 25% (không đủ 30%). Hoàn thành kế hoạch dùng riêng mẫu số nhiệm vụ kế hoạch.

| Mức | Điểm và điều kiện cùng cần kiểm |
|---|---|
| Hoàn thành xuất sắc | ≥90; toàn bộ nhiệm vụ đúng hạn, đủ chất lượng/hiệu quả; ≥30% vượt; cấp dưới trực tiếp đều hoàn thành; khắc phục toàn bộ hạn chế; còn hạn mức |
| Hoàn thành tốt | ≥70 và <90; toàn bộ nhiệm vụ đúng hạn, đủ chất lượng/hiệu quả |
| Hoàn thành | ≥50 và <70; hoàn thành toàn bộ nhiệm vụ; chậm tiến độ ≤20% |
| Không hoàn thành | <50; hoặc có kết luận sai phạm thuộc điều kiện trong bộ áp dụng; hoặc hoàn thành <70% nhiệm vụ kế hoạch. Trường hợp đặc biệt chuyển người có thẩm quyền xem xét |

Điểm chưa phù hợp mức đề xuất hoặc thiếu căn cứ → báo “Cần xem xét”, không tự sửa điểm hoặc hạ sang mức khác. Bộ quy tắc này phản ánh tài liệu đầu vào, không thay việc kiểm tra văn bản áp dụng khi triển khai.

## 7. Thẩm định công nhận thông báo

Thẩm định giữ cột Tự đánh giá và Thẩm định riêng. Nhập số liệu/mức thẩm định theo mẫu rồi tính lại. Số liệu/điểm khác bản trình cần lý do và tài liệu. Lưu thẩm định chưa chuyển bước; Hoàn tất thẩm định mới chuyển người công nhận. Trả hồ sơ giữ bản trình/ý kiến cũ; đơn vị bổ sung rồi trình lại.

Hạn mức xuất sắc = floor(tỷ lệ × số tổ chức **Hoàn thành tốt** cùng năm/phạm vi). Không gồm xuất sắc trong mẫu số. Ví dụ 20 hoàn thành tốt: 20% → 4; có quyết định 25% → 5. 2 hoàn thành tốt: 20% → 0. Tỷ lệ trên 20% phải có căn cứ và không quá 25%. Kiểm trên máy chủ cho cả lô và các thao tác đồng thời, tránh hai người cùng dùng một suất.

| Trường quyết định | Nguồn / quy tắc |
|---|---|
| Cấp công nhận / phạm vi | Lấy phân cấp và loại đơn vị; không để đơn vị tự sửa |
| Mức cuối | Người có quyền chọn sau kiểm điểm, điều kiện và hạn mức |
| Số / ngày quyết định | Người công nhận nhập từ văn bản |
| Người ký | Chọn nhân sự được phân quyền đúng cấp |
| Căn cứ / tài liệu quyết định | Người công nhận nhập và đính kèm |
| Lý do xem xét riêng | Ghi rõ nếu điều kiện chưa phù hợp; phải có căn cứ theo thẩm quyền |
| Nơi nhận / người / ngày thông báo | Chọn đơn vị nhận; hệ thống lưu người/ngày/nơi nhận |

Công nhận khóa bản hồ sơ. Điều chỉnh/hủy/đánh giá lại phải đúng quyền, có lý do/căn cứ và giữ quyết định cũ. Kết quả cấp dưới trước cấp trên. Hạn áp dụng theo tài liệu: hoàn thành trước 15/12, ngoại lệ được cho phép trước 15/01 năm sau; màn hình ghi hạn cụ thể và căn cứ thay vì để người dùng tự suy.

Kết quả tổ chức có thể cung cấp giới hạn mức xếp loại của người đứng đầu đúng đối tượng/năm/thời gian đảm nhiệm; **không đổi điểm KPI cá nhân**. Khi thay kết quả tổ chức cần cảnh báo các hồ sơ liên quan. Liên kết này thuộc tích hợp bản thật, không dựng phân hệ khác trong demo.

## 8. Kết quả xuất và in

Bảng kết quả phân biệt tự chấm, thẩm định, công nhận; chưa công nhận không hiển thị thành kết quả cuối. Lọc theo đơn vị/năm/tiêu chí/trạng thái và xuất toàn bộ theo bộ lọc, không chỉ trang nhìn thấy. Kèm ngày số liệu, phiên bản và trạng thái. Demo có tìm tên trong một hồ sơ và xuất CSV UTF-8 mở bằng Excel; xuất .xlsx là phần tích hợp bản triển khai.

Phiếu A4 dọc gồm STT, nội dung tiêu chí, điểm tối đa, đơn vị tự chấm, thẩm định, tài liệu kiểm chứng; đủ 11 tiêu chí, tổng A/B/100. Có điều kiện, đề xuất, nhận xét, thẩm định, quyết định và phần ký. Bước chưa xử lý để trống, không tự điền điểm, kết luận hoặc chữ ký. Bản thật dùng nội dung đầy đủ tiêu chí; lặp đầu bảng, không cắt dòng và đánh số trang. Demo dùng hộp in trình duyệt; bật đầu/chân trang để có số trang, lưu PDF bằng trình duyệt.

Thông tin in: tổ chức/người đứng đầu lấy dữ liệu chung; địa danh/ngày/nhận xét do vai trò tương ứng bổ sung; điểm và quyết định lấy đúng bản hồ sơ, không nhập lại. Họ tên người ký không thay ký số.

## 9. Hợp đồng kỹ thuật ngắn cho dev

Dữ liệu tối thiểu: `Period`, `CriteriaVersion`, `Criterion`, `IndicatorTemplateVersion`, `PlanVersion`, `AnnualIndicator`, `ReportVersion`, `Evidence`, `OrganizationTask`, `AssessmentSnapshot`, `Appraisal`, `RecognitionDecision`, `Notification`, `AuditEvent`. Các đối tượng có `org_id`, `year`, `version`, `status`, `created_by/at` phù hợp. Snapshot giữ danh sách phiên bản nguồn, số gốc và quy tắc đã dùng, không chỉ giữ tổng điểm.

API nghiệp vụ nên tách lệnh: lưu nháp; trình; duyệt/trả; tạo điều chỉnh; báo cáo; gửi/xác nhận/trả; chuyển người đứng đầu; xác nhận-trình; lưu/hoàn tất thẩm định; công nhận; thông báo. Không dùng một API sửa trạng thái bất kỳ. Mỗi lệnh kiểm trạng thái hiện tại, quyền/phạm vi, dữ liệu thiếu và phiên bản để tránh ghi đè khi hai người cùng sửa.

Máy chủ là nguồn quyết định cuối: tính lại điểm, kiểm số chưa làm tròn, nghiệm thu/đếm nhiệm vụ, đủ 100 điểm, hạn mức, tệp bắt buộc, người ký và trạng thái. Dùng giao dịch cho công nhận nhiều hồ sơ và khóa hạn mức. Ghi lịch sử cả trước/sau, người/ngày/lý do/căn cứ. Đơn vị không sửa hồ sơ cấp khác bằng thay ID trong yêu cầu.

### Cần chốt trước khi code bản thật

1. Điểm từng tiêu chí và các mẫu/thang khoảng chính thức; demo không thay quyết định cấu hình.
2. Phân công người xác nhận, thẩm định, công nhận và phạm vi đơn vị theo sơ đồ thực.
3. Chuẩn chất lượng/hiệu quả/vượt và nguồn nhiệm vụ B2; quy tắc không phát sinh/không áp dụng theo từng mẫu.
4. Ngày hiệu lực điều chỉnh, báo cáo nhiều kỳ và chống trùng số; nghiệp vụ trả hồ sơ sau khi nguồn thay đổi.
5. Cách xử lý khi điểm và điều kiện không phù hợp, văn bản căn cứ, hạn đặc biệt, cơ chế quyết định tỷ lệ xuất sắc trên 20%.

## 10. Ranh giới demo

Demo hoàn toàn tĩnh, không gọi dịch vụ bên ngoài; các thay đổi lưu trong trình duyệt. Chọn vai trò để mô phỏng, không phải xác thực/phân quyền thật. Không gửi thông báo thật, tải tệp lên máy chủ, ký số, đọc .xlsx, giao nhiều đơn vị hoặc kiểm hạn mức đồng thời. Các trường hợp đó được chỉ rõ tại màn hình và tài liệu. Khung, nhiệm vụ và 20 hồ sơ hoàn thành tốt là dữ liệu ví dụ. Nạp ví dụ giúp thử hồ sơ từ bước 4; làm lại bắt đầu với kế hoạch nháp.
