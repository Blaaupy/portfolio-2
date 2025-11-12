import "./Projects.scss";
import ProjectCard from "../../components/ProjectsPage/ProjectCard";
import projectsData from "../../data/projectsData.json";

export default function Projects() {
  return (
    <section className="projects-page page-container">
      <div className="projects-intro">
        <h1>Mes Projets</h1>
        <p>
          Découvrez une sélection de mes projets réalisés.  
          Chaque projet est un défi unique mêlant créativité et technique.
        </p>
      </div>

      <div className="projects-list">
        {projectsData.map((project, index) => (
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
