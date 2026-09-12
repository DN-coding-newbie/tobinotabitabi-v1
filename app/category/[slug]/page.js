import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";
import { categories } from "@/data/categories";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return {};
  return {
    title: category.name,
    description: `Các bài viết trong chuyên mục ${category.name}.`,
  };
}

export default function CategoryPage({ params }) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return notFound();

  const posts = getPostsByCategory(category.name);

  return (
    <>
      <Header />
      <div className="page">
        <main>
          <h1 className="category-title">{category.name}</h1>
          {posts.length === 0 && (
            <p className="empty-state">Chưa có bài viết nào trong chuyên mục này.</p>
          )}
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </main>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}
