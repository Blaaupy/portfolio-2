import { useContext, useState } from "react";
import "./ProjectCard.scss";
import ArrowLeft from "../../../assets/images/ArrowLeft.png";
import ArrowRight from "../../../assets/images/ArrowRight.png";
import ArrowUp from "../../../assets/images/ArrowUp.png";
import ProjectPreview from "../ProjectContent/ProjectContent";
import { LanguageContext } from "../../../context/LanguageContext";

export default function ProjectCard({ project, isLeft }) {
  const { language } = useContext(LanguageContext);
  const title = language === "fr" ? project.titleFr : project.titleEn;
  const shortDesc = language === "fr" ? project.shortFr : project.shortEn;
  const longDesc = language === "fr" ? project.longFr : project.longEn;
  const logo = project.logo;

  const [isExpanded, setIsExpanded] = useState(false); // étend la card
  const [showPreview, setShowPreview] = useState(false); // affiche la preview

  const arrowImg = isLeft ? ArrowLeft : ArrowRight;

  const handleExpandToggle = () => {
    if (isExpanded && showPreview) {
      // ⚙️ Si on ferme pendant que la preview est visible
      setShowPreview(false);
      setTimeout(() => setIsExpanded(false), 400); // délai pour laisser l’anim se jouer
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={`project-card-container ${isLeft ? "left" : "right"} ${
        isExpanded ? "expanded" : ""
      }`}
    >
      {/* --- Partie principale --- */}
      <div className="project-main">
        <div className="project-logo">
          <img src={logo} alt={`Logo de ${title}`} />
        </div>

        <div className="project-info">
          <h2>{title}</h2>
          <p>{shortDesc}</p>

          {isExpanded && (
            <div className="project-details">
              <p>{longDesc}</p>
            </div>
          )}
        </div>

        <div
          className="project-arrow"
          role="button"
          tabIndex={0}
          onClick={handleExpandToggle}
        >
          <img
            src={arrowImg}
            alt="Étendre le projet"
            className={isExpanded ? "rotated" : ""}
          />
        </div>
      </div>

      {/* --- Voir plus --- */}
      {isExpanded && (
        <div
          className="project-toggle"
          role="button"
          tabIndex={0}
          onClick={() => setShowPreview(!showPreview)}
        >
          <span>{showPreview ? "Voir moins" : "Voir plus"}</span>
          <img
            src={ArrowUp}
            alt="Voir plus"
            className={showPreview ? "rotated" : ""}
          />
        </div>
      )}

      {/* --- Aperçu du projet --- */}
      {showPreview && (
        <div className="project-preview-container">
          <ProjectPreview project={project} />
        </div>
      )}
    </div>
  );
}
