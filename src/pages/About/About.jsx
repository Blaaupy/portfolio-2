import AboutIntro from "../../components/AboutPage/AboutIntro";
import AboutJourney from "../../components/AboutPage/Parcours";
import AboutSkills from "../../components/AboutPage/AboutSkills";
import AboutActions from "../../components/AboutPage/AboutActions";

export default function About() {

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv_blaaup.pdf";
    link.download = "CV_Blaaup.pdf";
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
