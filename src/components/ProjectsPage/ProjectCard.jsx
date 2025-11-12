import { useState } from "react";
import "./ProjectCard.scss";
import ArrowLeft from "../../assets/images/ArrowLeft.png";
import ArrowRight from "../../assets/images/ArrowRight.png";

export default function ProjectCard({ project, isLeft }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const arrowImg = isLeft ? ArrowLeft : ArrowRight;

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`project-card-container ${isLeft ? "left" : "right"} ${
        isExpanded ? "expanded" : ""
      }`}
    >
      {/* Logo */}
      <div className="project-logo">
        <img src={project.logo} alt={`Logo de ${project.title}`} />
      </div>

      {/* Texte */}
      <div className="project-info">
        <h2>{project.title}</h2>
        <p>{project.descriptionShort}</p>

        {/* Contenu caché qui s’affiche quand la card est ouverte */}
        {isExpanded && (
          <div className="project-details">
            <p>{project.descriptionLong || "Description complète du projet..."}</p>
            <button>Voir plus</button>
          </div>
        )}
      </div>

      {/* Flèche */}
      <div
        className="project-arrow"
        role="button"
        tabIndex={0}
        onClick={handleToggleExpand}
      >
        <img
          src={arrowImg}
          alt="Voir le projet"
          className={isExpanded ? "rotated" : ""}
        />
      </div>
    </div>
  );
}
