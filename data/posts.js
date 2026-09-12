// Dữ liệu bài viết.
//
// ĐỂ THÊM BÀI VIẾT MỚI: copy một object bên dưới, dán vào cuối mảng,
// đổi nội dung + đảm bảo "slug" là duy nhất (không trùng bài khác).
// Không cần sửa bất kỳ component nào — trang chủ, trang chuyên mục,
// trang chi tiết bài viết, sidebar (Archives/Categories/Tags) sẽ tự cập nhật.
//
// "date" dùng định dạng "YYYY-MM-DD" để sắp xếp và tính Archives chính xác.
// "category" phải trùng với một "name" trong data/categories.js.
// "tags" là mảng string, có thể để trống [] hoặc thêm nhiều tag tuỳ ý.

export const posts = [
  {
    title: "ABOUT ME",
    slug: "bai-viet-1",
    date: "2026-09-12",
    category: "My20s",
    tags: ["20s", "Blog"],
    excerpt:
      "Thứ bảy, 12-09-2026, 18:00 Blog đầu tiên của mình",
    featuredImage:<img src="/images/blog-image/blog-1st.jfif" />,
    content:
      `**WHO'S TOBI?**

Xin chào mọi người, mình tên là Tấn Tịnh - còn Tobi là tên Nhật của mình (cũng là tên hay đặt cho mấy con cún bên Nhật :3)

Mình vẫn đang loay hoay với cuộc sống tuổi 20 - và nói thật thì, mình rất vui vì điều đó.

**WHY THIS BLOG?**

Mình có tính hay tò mò, hay thử những điều mới và từ đó tự nhìn lại bản thân sau mỗi trải nghiệm, mỗi bài học. Mà mình thường học được nhiều hơn hết là từ những người mình thần tượng, mà đặc biệt là anh Kira Nam Anh với The Hanoi Chamomile của ảnh.

Lần đầu mình tìm được Blog ấy của ảnh, mình đã hứa sẽ đọc hết tất cả Blog mà ảnh viết cũng như hi vọng một ngày sẽ tạo ra được một Blog như vậy cho riêng mình. Và bây giờ mình đã làm được một nửa của điều hứa ấy, mình quyết định tạo blog này để ghi lại những nơi mình đã đi qua, những điều mình học được và cả những suy nghĩ linh tinh trong cuộc sống của mình. (Còn gần hơn 300 cái Blogs từ từ em đọc nha anh Kira :<<)

Mình không phải là người hay viết, nhưng hy vọng việc bắt đầu blog này sẽ cho mình thêm một lý do để quan sát nhiều hơn, chiêm nghiệm nhiều hơn và viết ra những điều mình nghĩ một cách hay ho, vì đây là những điều mình muốn được mọi người biết về mình.

Thông qua blog này, mình hy vọng có thể học được điều gì đó từ mọi người, và biết đâu, mọi người cũng có thể tìm thấy một chút hình ảnh của chính mình ở tuổi 20 qua hành trình của Tobi.

Cảm ơn mọi người đã ghé qua Blog của mình.

Have a nice day~`,
  },
  {
    title: "[TIÊU ĐỀ BÀI VIẾT 2]",
    slug: "bai-viet-2",
    date: "2026-08-18",
    category: "Nhật Bản",
    tags: ["Japan", "Travel"],
    excerpt: "[Đoạn trích ngắn 1–2 câu tóm tắt nội dung bài viết...]",
    featuredImage: "[FEATURED IMAGE]",
    content:
      "[NỘI DUNG BÀI VIẾT — thay đoạn này bằng nội dung thật của bạn khi sẵn sàng.]",
  },
  {
    title: "[TIÊU ĐỀ BÀI VIẾT 3]",
    slug: "bai-viet-3",
    date: "2026-07-22",
    category: "Đại học",
    tags: ["University", "Thoughts"],
    excerpt: "[Đoạn trích ngắn 1–2 câu tóm tắt nội dung bài viết...]",
    featuredImage: "[FEATURED IMAGE]",
    content:
      "[NỘI DUNG BÀI VIẾT — thay đoạn này bằng nội dung thật của bạn khi sẵn sàng.]",
  },
];
