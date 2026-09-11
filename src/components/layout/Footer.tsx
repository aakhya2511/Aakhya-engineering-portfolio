import Link from "next/link";
import { profileLinks } from "@/data/profile";

export function Footer() {
  const links = [
    ["GitHub", profileLinks.github],
    ["LinkedIn", profileLinks.linkedin],
    ["Email", profileLinks.email ? `mailto:${profileLinks.email}` : null],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return (
    <footer className="site-footer shell">
      <p>© 2026 Aakhya Chaudhary</p>
      {links.length > 0 && <div>{links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</div>}
    </footer>
  );
}
