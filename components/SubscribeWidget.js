"use client";

export default function SubscribeWidget() {
  // Đây chỉ là UI placeholder. Khi bạn kết nối dịch vụ email marketing
  // (Mailchimp, ConvertKit, Substack, v.v.), thay hàm này bằng lệnh gọi API thật.
  function handleSubmit(e) {
    e.preventDefault();
    alert("Chức năng đăng ký sẽ được kết nối sau.");
  }

  return (
    <div className="widget subscribe">
      <h3>SUBSCRIBE</h3>
      <p>Nhận thông báo khi mình có blog mới nhé!</p>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Your email address" required />
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}
