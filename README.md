# Tobinotabitabi

Personal blog cá nhân, xây bằng Next.js (App Router), deploy trên Vercel.

Đây là bản dựng đầu tiên: đầy đủ structure + layout + responsive, dùng dữ liệu mẫu.
Màu sắc, font, ảnh và nội dung thật sẽ được chỉnh sau.

---

## 1. Cấu trúc folder/file

```
tobinotabitabi/
├── app/
│   ├── layout.js              # Layout gốc: load font, metadata mặc định
│   ├── page.js                # Trang chủ
│   ├── globals.css            # Toàn bộ CSS của site
│   ├── blog/[slug]/page.js    # Trang chi tiết 1 bài viết (route động)
│   └── category/[slug]/page.js# Trang danh sách bài viết theo chuyên mục
│
├── components/
│   ├── Header.js               # Logo + navigation
│   ├── Footer.js
│   ├── PostCard.js              # 1 bài viết dạng thẻ (dùng ở trang chủ & category)
│   ├── Sidebar.js               # Gộp tất cả widget sidebar
│   ├── AboutWidget.js
│   ├── ArchivesWidget.js
│   ├── CategoriesWidget.js
│   ├── TagsWidget.js
│   ├── SubscribeWidget.js
│   └── SocialWidget.js
│
├── data/
│   ├── config.js        # Tên blog, tagline, giới thiệu bản thân, link social
│   ├── categories.js    # Danh sách chuyên mục (nguồn duy nhất cho nav + sidebar)
│   ├── navigation.js    # Menu điều hướng — tự sinh từ categories.js
│   └── posts.js         # Toàn bộ bài viết (mảng object)
│
├── lib/
│   └── posts.js         # Hàm xử lý: sắp xếp bài viết, tính số lượng theo
│                         # category, gom tag, tính archives theo tháng/năm
│
├── package.json
├── next.config.js
└── jsconfig.json        # Cho phép import bằng "@/..." thay vì đường dẫn tương đối
```

Ngoài ra còn có `app/sitemap.js`, `app/robots.js` (tự sinh `/sitemap.xml` và
`/robots.txt`), và `app/icon.svg` (favicon placeholder) — đây là các quy ước
file đặc biệt của Next.js App Router, không cần cấu hình gì thêm.

Nguyên tắc: **component không chứa dữ liệu cứng** — mọi thứ (bài viết, chuyên
mục, tag, thông tin cá nhân, link mạng xã hội) đều nằm trong thư mục `data/`.
Số lượng bài viết theo từng category, danh sách tag, và mục Lưu trữ theo
tháng/năm đều được **tính tự động** từ `data/posts.js` trong `lib/posts.js` —
không cần tự đếm hay tự cập nhật tay.

---

## 2. Cách thêm một bài blog mới

Mở `data/posts.js`, thêm một object vào cuối mảng `posts`, ví dụ:

```js
{
  title: "Một ngày ở Đà Nẵng",
  slug: "mot-ngay-o-da-nang",       // phải là duy nhất, dùng cho URL /blog/...
  date: "2026-10-02",                // YYYY-MM-DD, dùng để sắp xếp & tính Archives
  category: "Đà Nẵng",               // phải trùng "name" trong data/categories.js
  tags: ["Travel", "Life"],
  excerpt: "Một câu tóm tắt ngắn gọn...",
  featuredImage: "[FEATURED IMAGE]", // hoặc URL ảnh khi có
  content: "Nội dung đầy đủ của bài viết...",
}
```

Không cần sửa bất kỳ component nào. Trang chủ, trang chuyên mục tương ứng,
trang chi tiết bài viết, cả 3 widget sidebar (Lưu trữ / Chuyên mục / Tags),
và `sitemap.xml` sẽ tự cập nhật.

Trang chủ hiển thị tối đa `POSTS_PER_PAGE` bài/trang (mặc định 6, chỉnh
trong `lib/posts.js`) — khi số bài vượt quá con số này, nút phân trang
"← Mới hơn / Cũ hơn →" ở cuối trang chủ sẽ tự động hoạt động
(`/?page=2`, `/?page=3`, ...).

---

## 3. Cách thay ảnh

Hiện tại mọi ảnh đều là placeholder dạng text (ví dụ `[FEATURED IMAGE]`,
`[Ảnh chân dung]`) để không bịa ảnh thật.

Khi có ảnh thật:

1. Đặt file ảnh vào thư mục `public/` (ví dụ `public/images/bai-viet-1.jpg`).
2. Trong `data/posts.js`, đổi `featuredImage: "[FEATURED IMAGE]"` thành
   `featuredImage: "/images/bai-viet-1.jpg"`.
3. Trong `components/PostCard.js` và `app/blog/[slug]/page.js`, đổi phần
   hiển thị `<div className="post-thumb">{post.featuredImage}</div>` thành
   dùng `next/image` (component `<Image>` của Next.js) để tối ưu tốc độ tải,
   ví dụ:

```jsx
import Image from "next/image";
// ...
<div className="post-thumb">
  <Image src={post.featuredImage} alt={post.title} fill />
</div>
```

Ảnh avatar (`brand-avatar`) và ảnh chân dung (`about-photo`) sửa tương tự,
trong `components/Header.js` và `components/AboutWidget.js`.

---

## 4. Cách thay Categories/Tags

**Categories**: chỉ cần sửa `data/categories.js` — đây là nguồn duy nhất cho
cả menu điều hướng và widget "Chuyên mục" ở sidebar.

```js
export const categories = [
  { name: "My20s", slug: "my20s" },
  // thêm/xoá/đổi tên ở đây
];
```

Sau khi sửa, nhớ cập nhật `category` trong các bài viết ở `data/posts.js`
cho khớp với `name` mới.

**Tags**: không có danh sách tag cố định riêng — tag hiển thị ở sidebar được
lấy tự động từ tag thật của các bài viết (`tags` trong `data/posts.js`).
Muốn đổi tag hiển thị, chỉ cần sửa mảng `tags` của từng bài viết.

---

## 5. Cách chạy local

Yêu cầu: đã cài [Node.js](https://nodejs.org/) (bản 18 trở lên).

```bash
cd tobinotabitabi
npm install
npm run dev
```

Mở trình duyệt ở `http://localhost:3000`.

---

## 6. Cách deploy lên Vercel

**Cách nhanh nhất (không cần Git):**

1. Cài Vercel CLI: `npm install -g vercel`
2. Trong thư mục dự án, chạy: `vercel`
3. Làm theo hướng dẫn trên terminal (đăng nhập, chọn project mới).
4. Khi muốn deploy bản chính thức: `vercel --prod`

**Cách khuyên dùng (qua GitHub, để tự động deploy mỗi lần push code):**

1. Đẩy code lên một repo GitHub mới.
2. Vào [vercel.com](https://vercel.com), đăng nhập, chọn "Add New Project".
3. Chọn repo vừa tạo, Vercel sẽ tự nhận diện đây là project Next.js.
4. Bấm Deploy — không cần cấu hình gì thêm.
5. Gắn domain riêng (`tobinotabitabi.com`) trong tab **Settings → Domains**
   của project trên Vercel.

Mỗi lần bạn thêm bài viết mới trong `data/posts.js` và push lên GitHub,
Vercel sẽ tự động build và deploy lại.

---

## 7. Những phần hiện tại chỉ là placeholder / cần kết nối thêm sau

- **Toàn bộ ảnh** (avatar, ảnh chân dung, featured image của bài viết) —
  đang là ô placeholder dạng text.
- **Nội dung 3 bài viết mẫu** — tiêu đề, excerpt, nội dung đều là placeholder,
  chưa có bài viết thật nào.
- **Form Subscribe** — mới chỉ có giao diện, bấm nút sẽ hiện thông báo tạm
  thời (`alert`). Chưa kết nối với dịch vụ email marketing nào (Mailchimp,
  ConvertKit, Substack...). Khi có dịch vụ, sửa hàm `handleSubmit` trong
  `components/SubscribeWidget.js` để gọi API thật.
- **YouTube** — chưa hiển thị vì chưa có link thật. Khi có, điền vào
  `social.youtube` trong `data/config.js`, icon sẽ tự hiện ra.
- **SEO nâng cao** — đã có Open Graph + Twitter card cơ bản, `sitemap.xml`,
  `robots.txt`, và favicon placeholder (`app/icon.svg`, chữ "T" trên nền màu
  accent — thay bằng logo thật khi có). Còn thiếu: ảnh Open Graph (OG image)
  riêng cho từng bài viết, và structured data (JSON-LD) — có thể thêm sau
  khi nội dung ổn định.
- **Đa ngôn ngữ (Nhật/Anh)** — chưa xây dựng, nhưng toàn bộ text đều là text
  HTML thường (không phải ảnh) nên tính năng Dịch của Chrome/trình duyệt vẫn
  dùng được ngay từ bây giờ.
