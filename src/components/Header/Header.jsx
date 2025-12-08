// src/components/Header/Header.jsx

import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react"; // 1. Importer useRef
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import LanguageSelector from "../LanguageSelector/LanguageSelector"; 
import { LanguageContext } from "../../context/LanguageContext";
import { Menu, X, Settings } from "lucide-react";
import "./Header.scss";

export default function Header() {
  const { texts } = useContext(LanguageContext);
  const location = useLocation();

  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 2. Créer une référence pour le panneau des paramètres
  const settingsPanelRef = useRef(null);

  const toggleSettingsMenu = () => {
    setIsSettingsMenuOpen(!isSettingsMenuOpen);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSettingsMenuOpen(false);
  }, [location]);

  // 4. useEffect pour gérer le clic à l'extérieur du panneau
  useEffect(() => {
    // La fonction qui sera appelée à chaque clic
    const handleClickOutside = (event) => {
      // On vérifie si le clic a eu lieu à l'extérieur du panneau des paramètres
      if (settingsPanelRef.current && !settingsPanelRef.current.contains(event.target)) {
        setIsSettingsMenuOpen(false);
      }
    };

    // On ajoute l'écouteur d'événements UNIQUEMENT si le menu est ouvert
    if (isSettingsMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Fonction de nettoyage : on retire l'écouteur quand le composant est démonté
    // ou quand `isSettingsMenuOpen` change (devient false)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSettingsMenuOpen]); // Le hook se ré-exécute si l'état du menu change

  // Fonction pour obtenir le nom de la page actuelle
  const getCurrentPageName = () => {
    const path = location.pathname;
    if (path === "/portfolio-2/" || path === "/portfolio-2") return texts.nav.home;
    if (path === "/portfolio-2/about") return texts.nav.about;
    if (path === "/portfolio-2/projects") return texts.nav.projects;
    if (path === "/portfolio-2/contact") return texts.nav.contact;
    return texts.nav.home;
  };

  return (
    <header>
      <div className="header-left">
        <Link to="/portfolio-2/">
          <p>Blaaup</p>
        </Link>
      </div>

      <div className="header-center">
        <nav className="nav-desktop">
          <NavLink to="/portfolio-2/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.home}
          </NavLink>
          <NavLink to="/portfolio-2/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.about}
          </NavLink>
          <NavLink to="/portfolio-2/projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.projects}
          </NavLink>
          <NavLink to="/portfolio-2/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.contact}
          </NavLink>
        </nav>

        <div className="mobile-nav-control">
          <span className="current-page">{getCurrentPageName()}</span>
          <button
            className="menu-toggle-btn"
            onClick={toggleMobileMenu}
            aria-label="Ouvrir le menu de navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- Les Contrôles --- */}
      <div className="header-right">
        <button
          className="settings-button"
          onClick={toggleSettingsMenu}
          aria-label="Ouvrir les paramètres"
        >
          <Settings size={23} />
        </button>

        {/* 3. Attacher la ref au panneau */}
        {isSettingsMenuOpen && (
          <div className="settings-panel" ref={settingsPanelRef}>
            <ThemeSwitch />
            <LanguageSelector />
          </div>
        )}
      </div>

      {/* --- Menu Mobile --- */}
      <div className={`mobile-nav-menu ${isMobileMenuOpen ? "mobile-nav-menu--open" : ""}`}>
        <nav className="mobile-nav">
          <NavLink to="/portfolio-2/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.home}
          </NavLink>
          <NavLink to="/portfolio-2/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.about}
          </NavLink>
          <NavLink to="/portfolio-2/projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.projects}
          </NavLink>
          <NavLink to="/portfolio-2/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.contact}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}