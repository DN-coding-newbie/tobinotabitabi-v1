// Danh sách chuyên mục của blog.
// Đây là NGUỒN DUY NHẤT cho cả menu điều hướng (Header) và widget "Chuyên mục" ở sidebar.
// Muốn thêm/xoá/đổi tên chuyên mục — chỉ cần sửa mảng này.
//
// "slug" là phần dùng trong đường dẫn: /category/<slug>

export const categories = [
  { name: "My20s", slug: "my20s" },
  { name: "Nhật Bản", slug: "nhat-ban" },
  { name: "Đà Nẵng", slug: "da-nang", visible: false },
  { name: "Đại học", slug: "dai-hoc" },
  { name: "Nấu ăn", slug: "nau-an", visible: false},
  { name: "Mạng xã hội", slug: "mang-xa-hoi", visible: false },
  { name: "Tản mạn", slug: "tan-man" },
];
