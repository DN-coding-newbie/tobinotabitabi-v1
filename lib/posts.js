import { posts } from "@/data/posts";
import { categories } from "@/data/categories";

// Số bài viết hiển thị trên mỗi trang ở trang chủ.
// Hiện tại có 3 bài mẫu nên chỉ có 1 trang, nhưng logic đã sẵn sàng
// cho khi bạn có nhiều bài hơn.
export const POSTS_PER_PAGE = 6;

// Trả về toàn bộ bài viết, sắp xếp mới nhất trước.
export function getAllPosts() {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Trả về bài viết theo slug.
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}

// Trả về bài viết theo chuyên mục (dùng name, không phải slug).
export function getPostsByCategory(categoryName) {
  return getAllPosts().filter((p) => p.category === categoryName);
}

// Danh sách chuyên mục kèm số lượng bài viết — tính tự động,
// không cần hard-code số lượng ở đâu cả.
export function getCategoriesWithCount() {
  const counts = {};
  posts.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return categories
    .filter((c) => c.visible !== false)
    .map((c) => ({
      name: c.name,
      slug: c.slug,
      count: counts[c.name] || 0,
    }));
}

// Danh sách tag duy nhất, lấy từ tag thật của các bài viết.
// Muốn đổi tag hiển thị ở sidebar — sửa mảng "tags" trong data/posts.js.
export function getAllTags() {
  const set = new Set();
  posts.forEach((p) => (p.tags || []).forEach((t) => set.add(t)));
  return Array.from(set);
}

// Lưu trữ theo tháng/năm — tính tự động từ ngày đăng của bài viết.
export function getArchives() {
  const map = {};
  posts.forEach((p) => {
    const d = new Date(p.date);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    map[key] = (map[key] || 0) + 1;
  });

  const monthNames = [
    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
    "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12",
  ];

  return Object.entries(map)
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([key, count]) => {
      const [year, month] = key.split("-");
      return { label: `${monthNames[parseInt(month, 10) - 1]}/${year}`, count };
    });
}

// Trả về một trang bài viết cho trang chủ (và sau này có thể dùng lại
// cho trang chuyên mục nếu số bài viết trong 1 category tăng lên).
// page bắt đầu từ 1.
export function getPaginatedPosts(page = 1) {
  const all = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(all.length / POSTS_PER_PAGE));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * POSTS_PER_PAGE;
  return {
    posts: all.slice(start, start + POSTS_PER_PAGE),
    currentPage: safePage,
    totalPages,
  };
}

export function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
