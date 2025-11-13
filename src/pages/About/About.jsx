import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import AboutIntro from "../../components/AboutPage/AboutIntro";
import AboutSkills from "../../components/AboutPage/AboutSkills";
import Parcours from "../../components/AboutPage/Parcours";
import AboutActions from "../../components/AboutPage/AboutActions";

export default function About() {
  const { texts } = useContext(LanguageContext);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv_blaaup.pdf";
    link.download = "CV_Blaaup.pdf";
    link.click();
  };

  return (
    <section className="about-page page-container">
      <AboutIntro texts={texts} />
      <Parcours texts={texts} />
      <AboutSkills texts={texts} />
      <AboutActions texts={texts} downloadCV={downloadCV} />
    </section>
  );
}
