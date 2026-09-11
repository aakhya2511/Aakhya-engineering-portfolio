import { metrics } from "@/data/profile";
export function AboutMetrics() {
  return (
    <>
      <section className="section shell about" id="about">
        <div className="about-layout">
          <div className="about-identity reveal">
            <span className="section-index">01</span>
            <p className="eyebrow">About</p>
            <h2>Built for<br />correctness.</h2>
            <dl className="about-facts">
              <div><dt>Education</dt><dd>M.S. Computer Science<br /><span>Southern Methodist University</span></dd></div>
              <div><dt>Graduate GPA</dt><dd>3.9 / 4.0</dd></div>
              <div><dt>Location</dt><dd>Dallas, Texas</dd></div>
              <div><dt>Focus</dt><dd>Backend · Data · AI</dd></div>
            </dl>
          </div>
          <div className="about-copy reveal">
            <p>I&apos;m a Computer Science graduate from Southern Methodist University with experience across enterprise data engineering, backend and distributed systems, and applied AI.</p>
            <p>At Tenet / Conifer, I modernized healthcare analytics workflows from DB2 and file-driven systems into BigQuery and GCP pipelines, spanning migration, validation, orchestration, troubleshooting, and production support.</p>
            <p>Outside enterprise data work, I build distributed storage systems, CDC platforms, backend infrastructure, and LLM evaluation pipelines with an emphasis on <em>correctness, reproducibility,</em> and clear system design.</p>
          </div>
        </div>
      </section>
      <section className="metrics shell" aria-label="Key metrics">
        {metrics.map((metric) => (
          <div className="metric reveal" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>
    </>
  );
}
