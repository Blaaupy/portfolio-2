import "./AboutIntro.scss";

export default function AboutIntro({ texts }) {
  return (
    <div className="about-intro">
      <h1>{texts.about.intro.title}</h1>
      <p>{texts.about.intro.text}</p>
    </div>
  );
}
