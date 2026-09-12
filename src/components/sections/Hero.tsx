import Link from "next/link";
import { profileLinks } from "@/data/profile";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-layout">
        <div className="hero-identity">
          <p className="eyebrow"><span className="status-dot" /> Software Engineering · Data Systems · Applied AI</p>
          <h1 id="hero-title">Aakhya<br />Chaudhary</h1>
        </div>
        <div className="hero-copy">
          <p className="hero-statement">I build reliable data systems and <span>intelligent software.</span></p>
          <p className="hero-support">Computer Science engineer with experience across enterprise data engineering, backend systems, distributed systems, and applied AI.</p>
          <div className="hero-actions">
            <Link className="button button--primary" href="#projects">View my work <ArrowIcon /></Link>
            {profileLinks.github && <a className="text-link" href={profileLinks.github} target="_blank" rel="noopener noreferrer" aria-label="Aakhya Chaudhary on GitHub (opens in a new tab)">GitHub <ArrowIcon external /></a>}
            {profileLinks.linkedin && <a className="text-link" href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Aakhya Chaudhary on LinkedIn (opens in a new tab)">LinkedIn <ArrowIcon external /></a>}
          </div>
          <div className="hero-meta">
            <span>Core stack</span>
            <code>Python · SQL · C++ · BigQuery · GCP · Distributed Systems · LLMs</code>
          </div>
        </div>
      </div>
    </section>
  );
}
