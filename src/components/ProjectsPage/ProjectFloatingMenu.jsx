import "./ProjectFloatingMenu.scss";

export default function FloatingMenu({ projects, activeIndex, onSelect }) {
  return (
    <nav className="floating-menu">
      {projects.map((project, index) => (
        <button
          key={project.id || index}
          className={index === activeIndex ? "active" : ""}
          onClick={() => onSelect(index)}
        >
          {index + 1}
        </button>
      ))}
    </nav>
  );
}
