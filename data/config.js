// Thông tin chung của blog.
// Muốn đổi tên blog, tagline, giới thiệu bản thân hay link mạng xã hội —
// chỉ cần sửa trong file này, không cần đụng vào component nào.

export const siteConfig = {
  name: "Tobinotabi",
  tagline: "Notes from a life still in progress.",
  domain: "tobinotabi.com",
  author: "Tấn Tịnh",
  authorShort: "Tobi",

  // Đoạn giới thiệu ngắn hiển thị ở đầu trang chủ.
  intro:
    "Chúc mọi người đọc blog vui vẻ, hẹn mọi người ở những bài viết tiếp theo nhé~",

  // Đoạn giới thiệu bản thân, hiển thị trong widget "Về mình".
  // Mỗi đoạn cách nhau một dòng trống sẽ tự động xuống dòng khi hiển thị.
  aboutText: `Chào mọi người, mình là Tấn Tịnh - Tobi là tên tiếng Nhật của mình (cũng là tên hay đặt cho cún:3)


Mình vẫn đang loay hoay với cuộc sống tuổi 20 - và nói thật thì, mình rất vui vì điều đó.


Mình có tính hay tò mò, hay thử những điều mới và từ đó tự nhìn lại bản thân sau mỗi trải nghiệm, mỗi bài học. Chính vì vậy, mình quyết định tạo blog này để ghi lại những nơi mình đã đi qua, những điều mình học được và cả những suy nghĩ linh tinh trong cuộc sống.


Mình không phải là người hay viết, nhưng hy vọng việc bắt đầu blog này sẽ cho mình thêm một lý do để quan sát nhiều hơn, trải nghiệm nhiều hơn và viết ra những điều mình nghĩ một cách hay ho, vì mình viết cho người khác đọc nữa nè.


Thông qua blog này, mình hy vọng có thể học được điều gì đó từ mọi người, và biết đâu, mọi người cũng có thể tìm thấy một chút hình ảnh của chính mình ở tuổi 20 qua hành trình của Tobi.


Cảm ơn mọi người đã ghé qua Blog của mình, Have a nice day~`,

  social: {
    facebook: "https://www.facebook.com/nguyen.tan.tinh.144526",
    instagram: "https://www.instagram.com/tinh.1611/",
    linkedin: "https://www.linkedin.com/in/tấn-tịnh-0a8b4b21a/",
    // Chưa có link YouTube thật -> để null thì icon sẽ tự ẩn.
    // Khi có link thật, chỉ cần thay null bằng URL.
    youtube: null,
  },
};
