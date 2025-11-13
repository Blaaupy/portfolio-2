import "./Projects.scss";
import ProjectCard from "../../components/ProjectsPage/ProjectCard";

// Exemple temporaire de données (on reliera aux vraies plus tard)
const projects = [
  {
    id: 1,
    title: "Booki",
    logo: "/src/assets/images/Logos/Booki.png",
    descriptionShort: "Intégration responsive d’un site d’hébergement.",
    descriptionLong:
      "Projet HTML/CSS uniquement, avec responsive design et validation W3C complète.",
  },
  {
    id: 2,
    title: "Sophie Bluel - Architecte",
    logo: "/src/assets/images/sophiebluel-logo.png",
    descriptionShort: "Site de portfolio interactif avec interface d’administration.",
    descriptionLong:
      "Développement complet du front-end en JavaScript et intégration d’un back-end Node/Express.",
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h1>Mes Projets</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}
