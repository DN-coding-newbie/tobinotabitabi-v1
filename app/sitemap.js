import { getAllPosts } from "@/lib/posts";
import { categories } from "@/data/categories";
import { siteConfig } from "@/data/config";

export default function sitemap() {
  const base = `https://${siteConfig.domain}`;

  const staticRoutes = [
    { url: `${base}/`, lastModified: new Date() },
  ];

  const categoryRoutes = categories.map((c) => ({
    url: `${base}/category/${c.slug}`,
    lastModified: new Date(),
  }));

  const postRoutes = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
