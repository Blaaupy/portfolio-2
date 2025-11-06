import projectsData from "../../data/projectsData.json";
import ProjectCard from "../../components/ProjectsPage/ProjectCard";
import "./Projects.scss";

export default function Projects() {
  return (
    <section className="projects-page page-container">
      <div className="projects-intro">
        <h1>Mes Projets</h1>
        <p>
          Voici une sélection de mes projets personnels et professionnels.
          Chacun d’eux m’a permis d’explorer de nouvelles technologies,  
          d’affiner mes compétences et de relever des défis uniques.
        </p>
      </div>

      <div className="projects-list">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isLeft={index % 2 === 0} // alterne gauche / droite
          />
        ))}
      </div>
    </section>
  );
}
