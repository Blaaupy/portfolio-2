import "./ProjectInternalNav.scss";
import ArrowLeft from "../../../assets/images/ArrowLeft.png";
import ArrowRight from "../../../assets/images/ArrowRight.png";

export default function ProjectInternalNav({
  slides,
  current,
  onPrev,
  onNext,
  onChange
}) {
  return (
    <div className="project-internal-nav">

      {/* Flèche précédente */}
      <button className="nav-arrow" onClick={onPrev} aria-label="Précédent">
        <img src={ArrowRight} alt="Précédent" />
      </button>

      {/* Boutons numérotés */}
      <div className="nav-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === current ? "active" : ""}
            onClick={() => onChange(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Flèche suivante */}
      <button className="nav-arrow" onClick={onNext} aria-label="Suivant">
        <img src={ArrowLeft} alt="Suivant" />
      </button>

    </div>
  );
}
