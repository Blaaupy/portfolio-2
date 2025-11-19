import { useContext } from "react";
import "./ProjectCard.scss";
import ArrowLeft from "../../../assets/images/ArrowLeft.png";
import ArrowRight from "../../../assets/images/ArrowRight.png";
import ArrowUp from "../../../assets/images/ArrowUp.png";
import ProjectContent from "../ProjectContent/ProjectContent";
import { LanguageContext } from "../../../context/LanguageContext";

export default function ProjectCard({
  project,
  isLeft,
  expanded,
  showPreview,
  onToggleExpand,
  onTogglePreview,
  slideIndex,    
  onChangeSlide,
}) {
  const { language, texts } = useContext(LanguageContext);

  const title = language === "fr" ? project.titleFr : project.titleEn;
  const shortDesc = language === "fr" ? project.shortFr : project.shortEn;
  const longDesc = language === "fr" ? project.longFr : project.longEn;

  const arrowImg = isLeft ? ArrowLeft : ArrowRight;

  return (
    <div className={`project-card-container ${isLeft ? "left" : "right"} ${expanded ? "expanded" : ""}`}>
      <div className="project-main">
        <div className="project-logo">
          <img src={project.logo} alt={`Logo ${title}`} />
        </div>

        <div className="project-info">
          <h2>{title}</h2>
          <p>{shortDesc}</p>

          {expanded && (
            <div className="project-details">
              <p>{longDesc}</p>
            </div>
          )}
        </div>

        <div className="project-arrow" onClick={onToggleExpand}>
          <img src={arrowImg} className={expanded ? "rotated" : ""} />
        </div>
      </div>

      {expanded && (
        <div className="project-toggle" onClick={onTogglePreview}>
          <span>{showPreview ? texts.project.showLess : texts.project.showMore}</span>
          <img src={ArrowUp} className={showPreview ? "rotated" : ""} />
        </div>
      )}

      {showPreview && (
        <div className="project-preview-container">
          <ProjectContent
            project={project}
            slideIndex={slideIndex}
            onChangeSlide={onChangeSlide}
          />
        </div>
      )}
    </div>
  );
}
