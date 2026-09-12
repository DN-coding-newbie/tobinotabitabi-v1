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
      <h3>Đăng ký nhận bài</h3>
      <p>Want to hear from me when I publish something new?</p>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Your email address" required />
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}
