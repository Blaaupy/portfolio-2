import "./AboutActions.scss";
import { useNavigate } from "react-router-dom";

export default function AboutActions({ downloadCV }) {
    const navigate = useNavigate();
  return (
    <div className="about-actions">
      <button className="btn" onClick={downloadCV}>Télécharger mon CV</button>
      <button className="btn" onClick={() => navigate("/contact")}>Contactez-moi</button>
    </div>
  );
}
