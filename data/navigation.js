import { categories } from "./categories";

// Menu điều hướng được sinh tự động từ danh sách categories,
// nên không cần khai báo lại danh sách chuyên mục ở đây.
export const navigation = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog", dropdown: categories.filter((c) => c.visible !== false) },
  { label: "About me", href: "/blog/bai-viet-1" },
];