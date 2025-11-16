import "./ProjectContent.scss";
import ProjectInternalNav from "../ProjectInternalNav/ProjectInternalNav";

export default function ProjectContent({ project, slideIndex, onChangeSlide }) {
  // --- On synchronise l'état interne SI le parent change ---
  const slides = project.slides || [];

  if (!slides.length) return null;

  const nextSlide = () => onChangeSlide((slideIndex + 1) % slides.length);
  const prevSlide = () =>
    onChangeSlide(slideIndex === 0 ? slides.length - 1 : slideIndex - 1);

  const slide = slides[slideIndex];

  return (
    <div className="project-content">
      <h3>Preview</h3>

      {/* --- Navigation interne --- */}
      <ProjectInternalNav
        slides={slides}
        current={slideIndex}
        onPrev={prevSlide}
        onNext={nextSlide}
        onChange={onChangeSlide}
      />

      {/* --- Contenu de la slide --- */}
      <div className="preview-container">
        {slide.type === "iframe" && (
          <iframe
            src={slide.url}
            title={project.titleFr}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        )}

        {slide.type === "links" && (
          <div className="links-slide">
            {slide.links.front && (
              <a href={slide.links.front} target="_blank" rel="noopener noreferrer">
                🔗 Code Front
              </a>
            )}
            {slide.links.back && (
              <a href={slide.links.back} target="_blank" rel="noopener noreferrer">
                ⚙️ Code Back
              </a>
            )}
          </div>
        )}

        {slide.type === "image" && (
          <img src={slide.src} alt={project.titleFr} />
        )}
      </div>
    </div>
  );
}
