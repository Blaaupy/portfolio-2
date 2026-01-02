// src/components/Header/Header.jsx

import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import LanguageSelector from "../LanguageSelector/LanguageSelector"; 
import { LanguageContext } from "../../context/LanguageContext";
import { Menu, X, Settings, Mail, Phone } from "lucide-react";
import "./Header.scss";

export default function Header() {
  const { texts } = useContext(LanguageContext);
  const location = useLocation();

  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOverlayOpen, setIsContactOverlayOpen] = useState(false);

  const settingsPanelRef = useRef(null);
  const contactOverlayRef = useRef(null);

  const toggleSettingsMenu = () => {
    setIsSettingsMenuOpen(!isSettingsMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleContactOverlay = (e) => {
    e.preventDefault();
    setIsContactOverlayOpen(!isContactOverlayOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSettingsMenuOpen(false);
    setIsContactOverlayOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        settingsPanelRef.current &&
        !settingsPanelRef.current.contains(event.target) &&
        !event.target.closest('.settings-button')
      ) {
        setIsSettingsMenuOpen(false);
      }
    };

    if (isSettingsMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSettingsMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        contactOverlayRef.current &&
        !contactOverlayRef.current.contains(event.target) &&
        !event.target.closest('.logo-link')
      ) {
        setIsContactOverlayOpen(false);
      }
    };

    if (isContactOverlayOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isContactOverlayOpen]);

  const getCurrentPageName = () => {
    const pathSegment = location.pathname.split('/').pop();

    switch (pathSegment) {
      case '': return texts.nav.home;
      case 'about': return texts.nav.about;
      case 'projects': return texts.nav.projects;
      case 'contact': return texts.nav.contact;
      default: return texts.nav.home;
    }
  };

  return (
    <header>
      <div className="header-left">
          <button onClick={toggleContactOverlay} className="logo-link" aria-label="Ouvrir les informations de contact">
            <img src={`${import.meta.env.BASE_URL}images/Logo.png`} alt="Blaaup Logo" className="logo-img" />
          </button>
        </div>

      <div className="header-center">
        <nav className="nav-desktop">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.home}
          </NavLink>
          <NavLink to="about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.about}
          </NavLink>
          <NavLink to="projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.projects}
          </NavLink>
          <NavLink to="contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.contact}
          </NavLink>
        </nav>

        <button
          className="mobile-nav-control"
          onClick={toggleMobileMenu}
          aria-label="Ouvrir le menu de navigation"
        >
          <span className="current-page">{getCurrentPageName()}</span>
          {isMobileMenuOpen ? <X size={24} color="var(--color-text)"/> : <Menu size={24} color="var(--color-text)"/>}
        </button>
      </div>

      <div className="header-right">
        <button
          className="settings-button"
          onClick={toggleSettingsMenu}
          aria-label="Ouvrir les paramètres"
        >
          <Settings size={23} />
        </button>
      </div>
      
      {isSettingsMenuOpen && (
        <div className="settings-panel" ref={settingsPanelRef}>
          <ThemeSwitch />
          <LanguageSelector />
        </div>
      )}

      {/* --- MODIFICATION : Le panneau de contact est maintenant un "panel" comme les settings --- */}
      {isContactOverlayOpen && (
        <div className="contact-panel" ref={contactOverlayRef}>
          <h3>{texts.contact.overlay.title}</h3>
          <div className="contact-info">
            <p>
              <Mail size={16} />
              <span>laurent.baptiste0025@gmail.com</span>
            </p>
            <p>
              <Phone size={16} />
              <span>+33 6 07 69 05 95</span>
            </p>
            <p>
              <span>{texts.contact.overlay.relocationLabel}</span>
            </p>
          </div>
        </div>
      )}

      <div className={`mobile-nav-menu ${isMobileMenuOpen ? "mobile-nav-menu--open" : ""}`}>
        <nav className="mobile-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.home}
          </NavLink>
          <NavLink to="about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.about}
          </NavLink>
          <NavLink to="projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.projects}
          </NavLink>
          <NavLink to="contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {texts.nav.contact}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}