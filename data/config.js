// Thông tin chung của blog.
// Muốn đổi tên blog, tagline, giới thiệu bản thân hay link mạng xã hội —
// chỉ cần sửa trong file này, không cần đụng vào component nào.

export const siteConfig = {
  name: "Tobinotabitabi",
  tagline: "Notes from a life still in progress.",
  domain: "tobinotabitabi.com",
  author: "Tấn Tịnh",
  authorShort: "Tobi",

  // Đoạn giới thiệu ngắn hiển thị ở đầu trang chủ.
  intro:
    "[Đoạn giới thiệu ngắn về blog — bạn viết gì ở đây, giọng văn ra sao, vì sao blog này tồn tại...]",

  // Đoạn giới thiệu bản thân, hiển thị trong widget "Về mình".
  // Mỗi đoạn cách nhau một dòng trống sẽ tự động xuống dòng khi hiển thị.
  aboutText: `Chào mọi người, mình là Tấn Tịnh.

Mình vẫn đang loay hoay với cuộc sống tuổi 20 của mình, và nói thật, mình khá thích điều đó. Có lẽ vì những điều mình chưa biết luôn khiến mình tò mò — về thế giới, về những người mình gặp, và cả về chính bản thân mình.

Mình nghĩ việc vẫn còn tò mò, vẫn còn muốn thử những điều mới và có thể thay đổi một chút sau mỗi trải nghiệm là một trong những điều may mắn nhất của tuổi trẻ.

Vì vậy, mình tạo blog này để ghi lại một vài câu chuyện, những điều mình học được, những nơi mình đã đi qua và cả những suy nghĩ rất linh tinh trong cuộc sống.

Hy vọng dù đang ở độ tuổi nào, mọi người vẫn luôn giữ được một chút tò mò với thế giới đang thay đổi từng ngày.

Và nếu có điều gì mình có thể học được từ bạn, mình sẽ rất vui.`,

  social: {
    facebook: "https://www.facebook.com/nguyen.tan.tinh.144526",
    instagram: "https://www.instagram.com/tinh.1611/",
    // Chưa có link YouTube thật -> để null thì icon sẽ tự ẩn.
    // Khi có link thật, chỉ cần thay null bằng URL.
    youtube: null,
  },
};
