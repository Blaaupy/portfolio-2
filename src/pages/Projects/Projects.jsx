import "./Projects.scss";
import ProjectCard from "../../components/ProjectsPage/ProjectCard/ProjectCard";
import { useRef, useState } from "react";
import ProjectsData from "../../data/projectsData.json";
export default function Projects() {
  const projects = ProjectsData.projects;

  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSelect = (index) => {
    if (index === null) {
      setActiveIndex(null);
      return;
    }
    if (activeIndex === index) {
      // toggle off
      setActiveIndex(null);
      return;
    }
    setActiveIndex(index);
    setCurrentSlide(0);
    // scroll into view
    if (cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handlePrev = () => {
    if (activeIndex === null) return;
    setCurrentSlide((s) => Math.max(0, s - 1));
  };

  const handleNext = () => {
    if (activeIndex === null) return;
    setCurrentSlide((s) => {
      const max = projects[activeIndex].slides.length - 1;
      return Math.min(max, s + 1);
    });
  };

  return (
    <>
      <section className="projects-section page-container">
        <h1>Mes Projets</h1>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={project.id} ref={(el) => (cardRefs.current[index] = el)}>
              <ProjectCard
                project={project}
                isLeft={index % 2 === 0}
                active={activeIndex === index}
                slideIndex={activeIndex === index ? currentSlide : 0}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
