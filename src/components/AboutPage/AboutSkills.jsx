import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import technoData from "../../data/techno.json";
import "./AboutSkills.scss";

export default function AboutSkills() {
  const navigate = useNavigate();

  return (
    <section className="about-skills">
      <h2>Mes compétences</h2>
      <p className="skills-intro">
        Voici un aperçu des technologies avec lesquelles je travaille le plus souvent.
      </p>

      <div className="skills-grid">
        {technoData.map((skill, i) => (
          <div
            key={i}
            className="skill-card"
            style={{ "--skill-color": skill.color }}
          >
            <div className="skill-circle">
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  pathColor: skill.color,
                  textColor: "var(--text)",
                  trailColor: "var(--background-alt)",
                })}
              />
            </div>
            <div className="skill-icon-div">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
            </div>
            <h3>{skill.name}</h3>
            <button
              className="skill-button"
              onClick={() => navigate(`/projects?tech=${skill.name}`)}
            >
              Voir projets
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
