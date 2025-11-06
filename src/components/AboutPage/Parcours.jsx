import "./Parcours.scss";
import { GraduationCap, Code2, Briefcase } from "lucide-react";
import { useEffect } from "react";

export default function Parcours() {
  const parcours = [
    {
      title: "Formation Développeur Web (RNCP 37829)",
      subtitle: "OpenClassrooms — 2025",
      icon: <GraduationCap size={28} />,
      description: "Apprentissage complet du développement front-end et back-end via 8 projets professionnalisants.",
    },
    {
      title: "Projets personnels & Portfolio",
      subtitle: "2024 - 2025",
      icon: <Code2 size={28} />,
      description: "Conception et développement de plusieurs projets en React, Node.js et Sass pour perfectionner mes compétences.",
    },
    {
      title: "Expérience professionnelle",
      subtitle: "2023 - 2024",
      icon: <Briefcase size={28} />,
      description: "Expérience hors développement ayant renforcé mon autonomie, ma rigueur et ma capacité à travailler en équipe.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".timeline-item").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="parcours-section">
      <h2 className="section-title">Parcours & apprentissage</h2>
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
