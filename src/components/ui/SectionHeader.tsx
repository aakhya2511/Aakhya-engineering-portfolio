export function SectionHeader({ number, title, eyebrow }: { number: string; title: string; eyebrow?: string }) {
  return (
    <div className="section-heading reveal">
      <div className="section-index">{number}</div>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
    </div>
  );
}
