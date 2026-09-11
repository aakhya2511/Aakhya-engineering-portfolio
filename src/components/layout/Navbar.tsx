"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const items = [
  ["About", "/#about"],
  ["Experience", "/#experience"],
  ["Projects", "/#projects"],
  ["Education", "/#education"],
  ["Contact", "/#contact"],
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const closeMobileMenu = () => mobileMenuRef.current?.removeAttribute("open");
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav-inner" aria-label="Primary navigation">
        <Link className="wordmark" href="/" aria-label="Aakhya Chaudhary, home">
          <span>AC</span>Aakhya Chaudhary
        </Link>
        <div className="nav-links">
          {items.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </div>
        <details className="mobile-menu" ref={mobileMenuRef}>
          <summary aria-label="Open navigation"><span /><span /></summary>
          <div>
            {items.map(([label, href]) => <Link key={label} href={href} onClick={closeMobileMenu}>{label}</Link>)}
          </div>
        </details>
      </nav>
    </header>
  );
}
