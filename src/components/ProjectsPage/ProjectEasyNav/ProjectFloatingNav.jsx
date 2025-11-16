import "./ProjectFloatingNav.scss";
import ProjectInternalNav from "../ProjectInternalNav/ProjectInternalNav";

export default function ProjectFloatingNav({
  projects,
  activeIndex,
  expandedIndex,
  previewIndex,
  onSelectProject,
  onToggleExpand,
  onTogglePreview,

  // Props pour InternalNav
  currentSlide,
  onPrev,
  onNext,
  onChangeSlide
}) {
  return (
    <div className="floating-nav">
      {projects.map((project, index) => (
        <div key={project.id} className="floating-nav-item">

          {/* Bouton principal */}
          <button
            className={`nav-btn ${activeIndex === index ? "active" : ""}`}
            onClick={() => onSelectProject(index)}
          >
            {project.titleFr}
          </button>

          {/* Section extra */}
          {activeIndex === index && (
            <div className="project-extra-container">

              {/* 1️⃣ Voir plus / Voir moins — visible uniquement si expanded */}
              {expandedIndex === index && (
                <button onClick={() => onTogglePreview(index)}>
                  {previewIndex === index ? "Voir moins" : "Voir plus"}
                </button>
              )}

              {/* 2️⃣ InternalNav — apparaît UNIQUEMENT si preview ouverte */}
              {previewIndex === index && (
                <ProjectInternalNav
                  slides={project.slides}
                  current={currentSlide}
                  onPrev={onPrev}
                  onNext={onNext}
                  onChange={onChangeSlide}
                />
              )}

              {/* 3️⃣ Fermer / Ouvrir — toujours visible dans un projet actif */}
              <button onClick={() => onToggleExpand(index)}>
                {expandedIndex === index ? "Fermer" : "Ouvrir"}
              </button>
            </div>
          )}

          {/* Ligne verticale */}
          {index < projects.length - 1 && <div className="connector-line"></div>}
        </div>
      ))}
    </div>
  );
}
