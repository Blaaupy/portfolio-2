import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./Footer.scss";

export default function Footer() {
  const { texts } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <p>© 2025 Blaaup - {texts.footer.AllRights}</p>
      <div className="links">
        <a href="https://github.com/tonprofil" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
