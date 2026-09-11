import Link from "next/link";
import { ArchitectureDiagram } from "@/components/diagrams/ArchitectureDiagram";
import { projects } from "@/data/projects";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechList } from "@/components/ui/TechList";

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);
  return (
    <section className="section shell projects-section" id="projects">
      <SectionHeader number="03" title="Featured Engineering Projects" eyebrow="Selected systems" />
      <div className="project-features">
        {featured.map((project, index) => (
          <article className={`project-feature project-feature--${project.slug} reveal`} key={project.slug}>
            <div className="project-copy">
              <span className="project-number">PROJECT / 0{index + 1}</span>
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              {project.evidence.length > 0 && (
                <div className="project-evidence">
                  {project.evidence.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
                </div>
              )}
              <div className="focus-list">
                {project.focus.map((item) => <span key={item}>{item}</span>)}
              </div>
              <Link className="project-link" href={`/projects/${project.slug}`}>Explore the system <ArrowIcon /></Link>
            </div>
            <ArchitectureDiagram kind={project.diagram} />
          </article>
        ))}
      </div>
      <div className="more-work">
        <div className="more-work-heading"><p className="eyebrow">Additional systems</p><h3>More Engineering Work</h3></div>
        <div className="more-grid">
          {more.map((project) => (
            <article className="project-card reveal" key={project.slug}>
              <p className="eyebrow">{project.category}</p>
              <h4>{project.title}</h4>
              <p>{project.summary}</p>
              {project.diagram === "rag" && <ArchitectureDiagram kind="rag" compact />}
              <TechList items={project.technologies} compact />
              <div className="card-links">
                <Link href={`/projects/${project.slug}`}>View details <ArrowIcon /></Link>
                {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon external /></a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
