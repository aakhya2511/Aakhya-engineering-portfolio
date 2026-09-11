import { profileLinks } from "@/data/profile";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

export function ContactSection() {
  const links = [
    { label: "Email", value: "aakhyac@smu.edu", href: profileLinks.email, external: false },
    { label: "LinkedIn", value: "linkedin.com/in/aakhya-chaudhary", href: profileLinks.linkedin, external: true },
    { label: "GitHub", value: "github.com/aakhya2511", href: profileLinks.github, external: true },
  ].filter((item): item is typeof item & { href: string } => Boolean(item.href));

  return (
    <section className="contact shell" id="contact">
      <div className="contact-index">06 / CONTACT</div>
      <div className="contact-copy reveal">
        <h2>Let&apos;s build<br /><span>something useful.</span></h2>
        <p>I&apos;m interested in software engineering, backend, data engineering, and applied AI opportunities.</p>
        {links.length > 0 ? (
          <div className="contact-links">
            {links.map(({ label, value, href, external }) => (
              <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} aria-label={external ? `${label}: ${value} (opens in a new tab)` : `${label}: ${value}`}>
                <span>{label}</span><strong>{value}</strong><ArrowIcon external={external} />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
