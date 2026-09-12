"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/config";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="brand-block">
        <div className="brand-avatar">[Avatar]</div>
        <h1>
          <Link href="/">{siteConfig.name}</Link>
        </h1>
        <p>{siteConfig.tagline}</p>
      </div>

      <button
        className="nav-toggle"
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-label">Menu</span>
      </button>

      <nav id="main-nav" className={`main-nav ${menuOpen ? "is-open" : ""}`}>
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
