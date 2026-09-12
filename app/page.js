import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import PostCard from "@/components/PostCard";
import Pagination from "@/components/Pagination";
import { getPaginatedPosts } from "@/lib/posts";
import { siteConfig } from "@/data/config";

export default function HomePage({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const { posts, currentPage, totalPages } = getPaginatedPosts(page);

  return (
    <>
      <Header />
      <div className="page">
        <main>
          <p className="intro">{siteConfig.intro}</p>

          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}

          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}
