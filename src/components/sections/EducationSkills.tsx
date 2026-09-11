import { education, skillGroups } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function EducationSkills() {
  return (
    <>
      <section className="section shell" id="education">
        <SectionHeader number="04" title="Education" eyebrow="Computer science foundation" />
        <div className="education-list">
          {education.map((item, index) => (
            <article className={`education-entry reveal ${index > 0 ? "education-entry--quiet" : ""}`} key={item.school}>
              <div className="education-year">{item.dates}</div>
              <div>
                <p className="eyebrow">{item.location}</p>
                <h3>{item.school}</h3>
                <p className="degree">{item.degree}</p>
              </div>
              <div className="education-gpa"><span>GPA</span><strong>{item.gpa}</strong></div>
              {item.coursework.length > 0 && (
                <div className="coursework"><span>Selected coursework</span><p>{item.coursework.join(" · ")}</p></div>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="section shell skills" id="skills">
        <SectionHeader number="05" title="Technical Skills" eyebrow="Tools selected by the problem" />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group reveal" key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
