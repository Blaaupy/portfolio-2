import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import AboutIntro from "../../components/AboutPage/AboutIntro/AboutIntro";
import AboutSkills from "../../components/AboutPage/AboutSkills/AboutSkills";
import Parcours from "../../components/AboutPage/AboutParcours/AboutParcours";
import AboutActions from "../../components/AboutPage/AboutActions/AboutActions";

export default function About() {
  const { texts } = useContext(LanguageContext);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "files/CV_LAURENT_Baptiste_15_12_2025.pdf";
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
