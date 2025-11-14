import "./Projects.scss";
import ProjectCard from "../../components/ProjectsPage/ProjectCard";
import { useRef, useState } from "react";
import FloatingMenu from "../../components/ProjectsPage/ProjectFloatingMenu";

const projects = [
  {
    id: 1,
    title: "Booki",
    logo: "/portfolio-2/images/Booki.png",
    descriptionShort: "Intégration responsive d’un site d’hébergement.",
    descriptionLong:
      "Projet HTML/CSS uniquement, avec responsive design et validation W3C complète.",
    slides: [
      {
        type: "iframe",
        url: "https://blaaupy.github.io/booki-starter-code/",
      },
    ],
  },
  {
    id: 2,
    title: "Sophie Bluel - Architecte",
    logo: "/portfolio-2/images/SophieBluel.png",
    descriptionShort:
      "Site de portfolio interactif avec interface d’administration.",
    descriptionLong:
      "Développement complet du front-end en JavaScript et intégration d’un back-end Node/Express.",
    slides: [
      {
        type: "iframe",
        url: "https://blaaupy.github.io/Portfolio-architecte-sophie-bluel/",
      },
    ],
  },
];

export default function Projects() {

  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // scroll to card
  const handleSelect = (index) => {
    setActiveIndex(index);

    if (cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <FloatingMenu
        projects={projects}
        activeIndex={activeIndex}
        onSelect={handleSelect}
      />

      <section className="projects-section page-container">
        <h1>Mes Projets</h1>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <ProjectCard
                project={project}
                isLeft={index % 2 === 0}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
