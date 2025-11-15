import { useState } from "react";
import "./ProjectContent.scss";

export default function ProjectPreview({ project }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = project.slides || [];

  if (!slides.length) return null;

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const slide = slides[slideIndex];

  return (
    <div className="project-preview">
      <h3>Preview</h3>

      <div className="preview-container">
        {slide.type === "iframe" && (
          <iframe
            src={slide.url}
            title={project.title}
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
          <img src={slide.src} alt={project.title} />
        )}
      </div>
    </div>
  );
}
