import Link from "next/link";
import { formatDate } from "@/lib/posts";

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <div className="post-thumb">{post.featuredImage || "[FEATURED IMAGE]"}</div>
      <div>
        <div className="post-meta">
          <span>{post.category}</span>
          <span>{formatDate(post.date)}</span>
        </div>
        <h2>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="post-excerpt">{post.excerpt}</p>
        <Link className="read-more" href={`/blog/${post.slug}`}>
          Đọc tiếp
        </Link>
      </div>
    </article>
  );
}
