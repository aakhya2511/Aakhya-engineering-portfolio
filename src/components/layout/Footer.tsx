import Link from "next/link";
import { profileLinks } from "@/data/profile";

export function Footer() {
  const links = [
    ["GitHub", profileLinks.github],
    ["LinkedIn", profileLinks.linkedin],
    ["Email", profileLinks.email],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return (
    <footer className="site-footer shell">
      <p>© 2026 Aakhya Chaudhary</p>
      {links.length > 0 && <div>{links.map(([label, href]) => {
        const external = label !== "Email";
        return <Link key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} aria-label={external ? `${label} (opens in a new tab)` : label}>{label}</Link>;
      })}</div>}
    </footer>
  );
}
