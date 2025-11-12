import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import HomeHero from "../../components/HomePage/HomeHero";
import HomeAbout from "../../components/HomePage/HomeAbout";
import HomeSkills from "../../components/HomePage/HomeSkills";

export default function Home() {
  const { texts } = useContext(LanguageContext);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv_blaaup.pdf";
    link.download = "CV_Blaaup.pdf";
    link.click();
  };

  return (
    <div className="home-page page-container">
      <HomeHero texts={texts} downloadCV={downloadCV} />
      <HomeAbout texts={texts} />
      <HomeSkills texts={texts} />
    </div>
  );
}
