import { categories } from "./categories";

// Menu điều hướng được sinh tự động từ danh sách categories,
// nên không cần khai báo lại danh sách chuyên mục ở đây.
export const navigation = categories.map((c) => ({
  label: c.name,
  href: `/category/${c.slug}`,
}));
