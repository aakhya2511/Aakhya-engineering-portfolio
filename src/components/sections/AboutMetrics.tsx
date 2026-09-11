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
            <p>At Tenet / Conifer, I modernized healthcare analytics workflows from DB2 and file-driven processes to BigQuery and GCP, building pipelines and validating production data at scale.</p>
            <p>Outside enterprise data work, I build consensus-driven storage, CDC platforms, backend infrastructure, and LLM evaluation systems—work where <em>correctness, recovery,</em> and clear system boundaries matter.</p>
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
