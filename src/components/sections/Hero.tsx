import Link from "next/link";
import { profileLinks } from "@/data/profile";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Software · Backend · Data · AI</p>
        <h1 id="hero-title">Aakhya<br />Chaudhary</h1>
        <p className="hero-statement">I build reliable data systems and <span>intelligent software.</span></p>
        <p className="hero-support">Computer Science engineer with experience building enterprise data pipelines, backend systems, distributed systems, and applied AI applications.</p>
        <div className="hero-actions">
          <Link className="button button--primary" href="#projects">View my work <ArrowIcon /></Link>
          {profileLinks.resume && <a className="button" href={profileLinks.resume}>Resume <ArrowIcon external /></a>}
          {profileLinks.github && <a className="text-link" href={profileLinks.github}>GitHub <ArrowIcon external /></a>}
          {profileLinks.linkedin && <a className="text-link" href={profileLinks.linkedin}>LinkedIn <ArrowIcon external /></a>}
        </div>
      </div>
      <div className="hero-meta">
        <span>Core stack</span>
        <code>Python · SQL · C++ · BigQuery · GCP · Distributed Systems · LLMs</code>
      </div>
      <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
    </section>
  );
}
