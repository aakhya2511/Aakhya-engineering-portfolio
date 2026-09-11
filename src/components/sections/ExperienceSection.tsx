import { ArchitectureDiagram } from "@/components/diagrams/ArchitectureDiagram";
import { experiences } from "@/data/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechList } from "@/components/ui/TechList";

const themes = [
  { number: "01", title: "Legacy modernization", text: "Re-engineered DB2 SQL, stored procedures, and Alteryx/file workflows for BigQuery and GCP while preserving business logic." },
  { number: "02", title: "Data validation", text: "Reconciled counts, aggregates, keys, duplicates, NULLs, schemas, values, and freshness—including live DB2 versus scheduled BigQuery timing." },
  { number: "03", title: "Pipeline engineering", text: "Built and troubleshot Python/SQL ingestion, transformation, orchestration, and validation across GCS, Dataflow, BigQuery, and Airflow." },
  { number: "04", title: "Production support", text: "Investigated reporting failures, shipped data fixes, and validated releases for Patient Financial Services workflows." },
];

export function ExperienceSection() {
  const [tenet, research, bhartiya] = experiences;
  return (
    <section className="section shell" id="experience">
      <SectionHeader number="02" title="Experience" eyebrow="Production systems & research" />
      <article className="experience-feature reveal">
        <header className="experience-header">
          <div><p className="eyebrow">{tenet.company}</p><h3>{tenet.role}</h3></div>
          <div className="experience-meta"><span>{tenet.location}</span><time>{tenet.dates}</time></div>
        </header>
        <p className="experience-intro">{tenet.summary}</p>
        <div className="theme-grid">
          {themes.map((theme) => (
            <div className="theme" key={theme.title}>
              <span>{theme.number}</span><h4>{theme.title}</h4><p>{theme.text}</p>
            </div>
          ))}
        </div>
        <div className="ingestion-callout">
          <div><span className="eyebrow">Owned end to end</span><h4>Python ingestion workflow</h4></div>
          <div className="inline-flow" aria-label="HTML file to target environment flow">
            <span>HTML file</span><b>→</b><span>GCS</span><b>→</b><span>Python processing</span><b>→</b><span>Target environment</span>
          </div>
        </div>
        <ArchitectureDiagram kind="tenet" />
        <div className="impact-strip" aria-label="Tenet impact">
          <div><strong>60+</strong><span>enterprise analytics workloads migrated</span></div>
          <div><strong>40+</strong><span>legacy stored procedures converted to BigQuery-compatible logic</span></div>
          <div><strong>500M+</strong><span>records processed / validated</span></div>
          <div><strong>Up to 70%</strong><span>query-performance improvement on selected migrated workloads</span></div>
        </div>
        <TechList items={tenet.technologies} />
      </article>
      <div className="experience-secondary">
        {[research, bhartiya].map((item, index) => (
          <article className={`experience-row experience-row--${index === 0 ? "research" : "internship"} reveal`} key={item.company}>
            <div className="experience-date"><span>0{index + 2}</span><time>{item.dates}</time></div>
            <div className="experience-row-content">
              <p className="eyebrow">{item.company}</p>
              <h3>{item.role}</h3>
              {item.location && <p className="location">{item.location}</p>}
              <p className="secondary-intro">{item.summary}</p>
              {item.areas && (
                <div className="secondary-theme-grid">
                  {item.areas.map((area) => <div className="secondary-theme" key={area.title}><h4>{area.title}</h4><p>{area.text}</p></div>)}
                </div>
              )}
              {item.impact && (
                <div className="secondary-impact" aria-label={`${item.company} impact`}>
                  {item.impact.map((impact) => <div key={impact.label}><strong>{impact.value}</strong><span>{impact.label}</span></div>)}
                </div>
              )}
              <TechList items={item.technologies} compact />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
