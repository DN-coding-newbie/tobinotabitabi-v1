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
    title: "[TIÊU ĐỀ BÀI VIẾT 1]",
    slug: "bai-viet-1",
    date: "2026-09-05",
    category: "My20s",
    tags: ["20s", "Life"],
    excerpt:
      "[Đoạn trích ngắn 1–2 câu tóm tắt nội dung bài viết, đủ để người đọc muốn bấm vào xem tiếp...]",
    featuredImage: "[FEATURED IMAGE]",
    content:
      "[NỘI DUNG BÀI VIẾT — thay đoạn này bằng nội dung thật của bạn khi sẵn sàng. Có thể là nhiều đoạn văn, ảnh, hoặc bất cứ định dạng nào bạn muốn thêm sau này.]",
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
