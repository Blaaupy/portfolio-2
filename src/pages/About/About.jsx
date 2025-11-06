import AboutIntro from "../../components/AboutPage/AboutIntro";
import AboutJourney from "../../components/AboutPage/Parcours";
import AboutSkills from "../../components/AboutPage/AboutSkills";
import AboutActions from "../../components/AboutPage/AboutActions";

export default function About() {

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv_baptiste.pdf";
    link.download = "CV_Baptiste.pdf";
    link.click();
  };

  return (
    <section className="about-page page-container">
      <AboutIntro />
      <AboutJourney />
      <AboutSkills />
      <AboutActions downloadCV={downloadCV} />
    </section>
  );
}
