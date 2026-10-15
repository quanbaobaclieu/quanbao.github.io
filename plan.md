# Kế hoạch website Quân Bảo

## Phạm vi
Xây dựng landing page giới thiệu dịch vụ in ấn và photocopy tại Việt Nam, dùng nhận diện thương hiệu **Quân Bảo**. Trang tập trung vào việc giúp khách hàng hiểu nhanh dịch vụ, quy trình, mức giá tham khảo và gửi yêu cầu báo giá.

## Cấu trúc dự án
- `index.html`: trang đơn duy nhất với header, hero, dịch vụ, quy trình, bảng giá tham khảo, form yêu cầu và footer.
- `styles.css`: hệ thống token màu, layout responsive, animation, trạng thái focus/hover và breakpoint mobile.
- `script.js`: menu mobile, cuộn mượt, số liệu đếm, form phản hồi và năm hiện tại.
- `public/manus-routes.json`: manifest route cho Preview.
- `logo.svg`: biểu trưng hình chữ Q kết hợp tờ giấy gập.
- `app.config.ts`: metadata logo cho project.

## Định hướng thiết kế
- **Design Movement:** editorial utility / modern Vietnamese print studio — cảm giác như một xưởng in đương đại kết hợp tạp chí kinh doanh.
- **Core Principles:** rõ ràng như bảng báo giá; có nhịp điệu thị giác của giấy, mực và đường cắt; thân thiện nhưng chuẩn xác; ưu tiên hành động nhanh trên mobile.
- **Color Philosophy:** xanh mực teal đậm tạo độ tin cậy và gợi mực in; nền kem giấy làm giao diện ấm, dễ đọc; cam san hô là màu nhấn sở hữu riêng cho CTA và các chi tiết “đóng dấu”.
- **Layout Paradigm:** bố cục lệch trục với hero chia đôi, các panel như tờ proof xếp chồng, đường kẻ và số thứ tự dẫn mắt thay cho các card đồng đều.
- **Signature Elements:** dấu tròn “QB” như con dấu kiểm duyệt; nét gạch cam mô phỏng đường xén giấy; nền hạt giấy nhẹ bằng CSS.
- **Interaction Philosophy:** mọi CTA đều ngắn, cụ thể, đưa người dùng tới gọi điện hoặc gửi yêu cầu; hover có chuyển động nhỏ như kéo tờ giấy ra khỏi chồng.
- **Animation:** entrance fade-up nhẹ theo thứ tự; số liệu đếm một lần khi vào viewport; hover dùng translate 4–6px và không dùng chuyển động gây nhiễu.
- **Typography System:** Be Vietnam Pro cho nội dung tiếng Việt; Space Grotesk cho số liệu, nhãn và tiêu đề lớn. Heading đậm, line-height 0.95–1.1; body 16–18px, line-height 1.6.
- **Brand Essence:** “Xưởng in nhanh gọn cho những việc cần làm cho ra việc” — tin cậy, gọn gàng, nhiệt tình.
- **Brand Voice:** trực tiếp, gần gũi, có nghề. Ví dụ: “Gửi file sáng — nhận hàng chiều.” và “Bạn cần in gì, Quân Bảo lo phần còn lại.”
- **Wordmark & Logo:** chữ Q cách điệu thành tờ giấy gập, chấm tròn như dấu kiểm duyệt; wordmark “QUÂN BẢO” viết hoa với tracking rộng.
- **Signature Brand Color:** `#F26B4F` — cam san hô “Dấu Quân Bảo”, dùng làm điểm nhận diện cho hành động và tem xác nhận.

## Triển khai
Website dùng HTML/CSS/JavaScript tĩnh, không cần database hay server API. Dev server lắng nghe trên port 3000 để Preview. Form báo giá là tương tác phía trình duyệt, hiển thị xác nhận và hướng khách hàng gọi hotline; không giả lập việc gửi dữ liệu lên hệ thống bên ngoài.
