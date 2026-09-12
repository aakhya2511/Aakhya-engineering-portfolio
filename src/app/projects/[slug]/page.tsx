import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "@/components/diagrams/ArchitectureDiagram";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { TechList } from "@/components/ui/TechList";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const path = `/projects/${project.slug}`;
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: path },
    openGraph: {
      title: `${project.title} — Aakhya Chaudhary`,
      description: project.summary,
      url: path,
      type: "article",
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Aakhya Chaudhary — Software Engineer" }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const detailEvidence = project.detailEvidence ?? project.evidence;
  return (
    <article className="project-page shell">
      <Link className="back-link" href="/#projects">← All projects</Link>
      <header className="project-hero">
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="focus-list">{project.focus.map((item) => <span key={item}>{item}</span>)}</div>
        {project.githubUrl && <a className="button" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository (opens in a new tab)`}>View GitHub repository <ArrowIcon external /></a>}
      </header>
      <section className="project-overview">
        <div><span className="detail-number">01</span><h2>Overview</h2></div>
        <p>{project.overview}</p>
      </section>
      {project.problem && <section className="project-detail-grid"><div><span className="detail-number">02</span><h2>The problem</h2></div><p>{project.problem}</p></section>}
      <section className="project-architecture-detail">
        <div className="detail-heading"><span className="detail-number">03</span><h2>Architecture</h2></div>
        <ArchitectureDiagram kind={project.diagram} />
      </section>
      <div className="project-columns">
        <section><span className="detail-number">04</span><h2>What I built</h2><ul>{project.built.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><span className="detail-number">05</span><h2>Engineering decisions</h2><ul>{project.decisions.map((item) => <li key={item}>{item}</li>)}</ul></section>
      </div>
      <section className="validation-section">
        <div><span className="detail-number">06</span><h2>Testing & validation</h2></div>
        <ul>{project.validation.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      {detailEvidence.length > 0 && <section className="detail-evidence"><span className="detail-number">07</span><h2>Evidence</h2><div>{detailEvidence.map((item) => <p key={item.label}><strong>{item.value}</strong><span>{item.label}</span></p>)}</div>{project.evidenceNote && <p className="detail-evidence-note">{project.evidenceNote}</p>}</section>}
      <section className="project-technologies"><span className="detail-number">{detailEvidence.length > 0 ? "08" : "07"}</span><h2>Technologies</h2><TechList items={project.technologies} /></section>
      <nav className="next-project" aria-label="Project navigation">
        {(() => { const next = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length]; return <Link href={`/projects/${next.slug}`}><span>Next project</span>{next.title}<ArrowIcon /></Link>; })()}
      </nav>
    </article>
  );
}
