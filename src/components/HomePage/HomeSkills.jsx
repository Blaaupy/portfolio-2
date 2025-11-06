import "./HomeSkills.scss";

export default function HomeSkills({ texts }) {
  return (
    <section className="home-skills">
      <h2>{texts.home.skillsTitle}</h2>
      <ul className="skills-list">
        {texts.home.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
