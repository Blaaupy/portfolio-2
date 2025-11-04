import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // Contexte multilingue
import heroImage from "../../assets/images/999f3d63475d1d16840805d182afb56b.png"; // Image à remplacer
import "./Home.scss";

export default function Home() {
  const navigate = useNavigate();
  const { texts } = useContext(LanguageContext);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv_baptiste.pdf"; // fichier dans /public
    link.download = "CV_Baptiste.pdf";
    link.click();
  };

  return (
    <div className="home-page">
      {/* Section principale */}
      <section className="home-hero">
        <div className="home-section-content">
          <h1>
            {texts.home.greeting} <span>Baptiste</span> 👋
          </h1>
          <p>{texts.home.intro}</p>
          <div className="home-section-buttons">
            <button className="btn" onClick={() => navigate("/projects")}>
              {texts.home.projectsBtn}
            </button>
            <button className="btn" onClick={downloadCV}>
              {texts.home.cvBtn}
            </button>
            <button className="btn" onClick={() => navigate("/contact")}>
              {texts.home.contactBtn}
            </button>
          </div>
        </div>
        <div className="home-hero-image">
          <img src={heroImage} alt="Baptiste" />
        </div>
      </section>

      {/* Mini section "À propos" */}
      <section className="home-about">
        <h2>{texts.home.aboutTitle}</h2>
        <p>{texts.home.aboutText}</p>
        <button className="btn" onClick={() => navigate("/about")}>
          {texts.home.aboutBtn}
        </button>
      </section>

      {/* Section compétences */}
      <section className="home-skills">
        <h2>{texts.home.skillsTitle}</h2>
        <ul className="skills-list">
          {texts.home.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
