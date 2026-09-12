import { siteConfig } from "@/data/config";

export default function robots() {
  const base = `https://${siteConfig.domain}`;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
