import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <>
      <Header />

      <div className="page">
        <main>
          <article className="post-full">
            <div className="post-meta">
              <span>{post.category}</span>
              <span>{formatDate(post.date)}</span>
            </div>

            <h1>{post.title}</h1>

            <div className="post-thumb post-thumb-large">
              {post.featuredImage || "[FEATURED IMAGE]"}
            </div>

            <div className="post-content">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {post.tags?.length > 0 && (
              <div className="tag-cloud post-tags">
                {post.tags.map((tag) => (
                  <a key={tag} href="#">
                    {tag}
                  </a>
                ))}
              </div>
            )}
          </article>
        </main>

        <Sidebar />
      </div>

      <Footer />
    </>
  );
}