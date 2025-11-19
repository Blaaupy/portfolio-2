import "./ProjectContent.scss";
import ProjectInternalNav from "../ProjectInternalNav/ProjectInternalNav";
import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";

export default function ProjectContent({ project, slideIndex, onChangeSlide }) {
  const { language } = useContext(LanguageContext);
  const slides = project.slides || [];

  if (!slides.length) return null;

  const nextSlide = () => onChangeSlide((slideIndex + 1) % slides.length);
  const prevSlide = () =>
    onChangeSlide(slideIndex === 0 ? slides.length - 1 : slideIndex - 1);

  const slide = slides[slideIndex];

  return (
    <div className={`project-content project-${project.id}`}>
      <h3 className="slide-preview-text">
        {slide.previewTextFr && language === "fr"
          ? slide.previewTextFr
          : slide.previewTextEn}
      </h3>

      <ProjectInternalNav
        slides={slides}
        current={slideIndex}
        onPrev={prevSlide}
        onNext={nextSlide}
        onChange={onChangeSlide}
      />

      <div className="preview-container">
        {/* --- Intro Slide --- */}
        {slide.type === "intro" && (
          <div className="intro-slide">

            
            <h4>{slide.title}</h4>

            <div className="text-block">
              <p>{language === "fr" ? slide.contentFr : slide.contentEn}</p>
            </div>

            {slide.challengesFr && (
              <div className="challenges">
                <h5>{language === "fr" ? "Difficultés rencontrées" : "Challenges faced"}</h5>
                <p>{language === "fr" ? slide.challengesFr : slide.challengesEn}</p>
              </div>
            )}

            {/* TECHS : affichage sous forme de liste */}
            {project.technos?.length > 0 && (
              <ul className="intro-technos skills-list">
                {project.technos.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* --- Iframe Slide --- */}
        {slide.type === "iframe" && (
          <iframe
            src={slide.url}
            title={slide.title || project.titleFr}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        )}

        {/* --- Image Slide --- */}
        {slide.type === "image" && (
          <div className="image-slide">
            {/* Affiche la légende si elle existe */}
            { (language === "fr" ? slide.captionFr : slide.captionEn) && (
              <p className="image-caption">{language === "fr" ? slide.captionFr : slide.captionEn}</p>
            )}
            <img src={slide.src} alt={slide.title || project.titleFr} />
          </div>
        )}

        {/* --- Files Slide --- */}
        {slide.type === "files" && slide.files?.length > 0 && (
          <div className="files-slide">
            <div className="file-preview">
              {slide.files.map((file, index) => {
                const ext = file.url.split(".").pop().toLowerCase();
                if (ext === "pdf") {
                  return (
                    <iframe
                      key={index}
                      src={file.url}
                      title={file.name}
                      width="100%"
                      height="500px"
                    />
                  );
                }
                return null; // autres types ignorés
              })}
            </div>
          </div>
        )}

        {/* --- AllLinks Slide --- */}
        {slide.type === "allLinks" && slide.links?.length > 0 && (
          <div className="all-links-slide">
            <h4>{slide.title}</h4>
            <div className="link-cards">
              {slide.links.map((link, index) => {
                const linkText = link.type === "download" ? "Télécharger" : "Suivre le lien";
                return (
                  <div key={index} className="link-card">
                    <span className="file-name">{link.name}</span>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={link.type === "download"}
                      className="file-link"
                    >
                      {linkText}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
