import { siteConfig } from "@/data/config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>
        © {year} {siteConfig.name}. All rights reserved.
      </p>
      <p>Built with Next.js &amp; Vercel.</p>
    </footer>
  );
}
