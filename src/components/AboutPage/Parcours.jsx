import "./Parcours.scss";
import { GraduationCap, Code2, Briefcase } from "lucide-react";
import { useEffect } from "react";

export default function Parcours({ texts }) {
  // Hooks doivent être appelés en premier
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".timeline-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!texts?.about?.journey) return null; // early return après les hooks

  const parcours = texts.about.journey.items.map((item, index) => ({
    ...item,
    icon:
      index === 0 ? <GraduationCap size={28} /> :
      index === 1 ? <Code2 size={28} /> :
      <Briefcase size={28} />,
  }));

  return (
    <section className="parcours-section">
      <h2 className="section-title">{texts.about.journey.title}</h2>
      <div className="timeline">
        {parcours.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <span className="timeline-subtitle">{item.subtitle}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
