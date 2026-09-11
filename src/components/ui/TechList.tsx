export function TechList({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <ul className={compact ? "tech-list compact" : "tech-list"} aria-label="Technologies">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}
