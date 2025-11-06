import "./ProjectCard.scss";

export default function ProjectCard({ project, isLeft }) {
  return (
    <div className={`project-card ${isLeft ? "left" : "right"}`}>
      <div
        className="project-bg"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>

      <div className="project-content">
        <h2>{project.title}</h2>
        <p>{project.descriptionShort}</p>
      </div>
    </div>
  );
}
