import { profileLinks } from "@/data/profile";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

export function ContactSection() {
  const links = [
    ["Email", profileLinks.email ? `mailto:${profileLinks.email}` : null],
    ["LinkedIn", profileLinks.linkedin],
    ["GitHub", profileLinks.github],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return (
    <section className="contact shell" id="contact">
      <div className="contact-index">06 / CONTACT</div>
      <div className="contact-copy reveal">
        <h2>Let&apos;s build<br /><span>something useful.</span></h2>
        <p>I&apos;m interested in software engineering, backend, data engineering, and applied AI opportunities.</p>
        {links.length > 0 ? (
          <div className="contact-links">
            {links.map(([label, href]) => <a key={label} href={href}>{label}<ArrowIcon external /></a>)}
          </div>
        ) : null}
      </div>
    </section>
  );
}
