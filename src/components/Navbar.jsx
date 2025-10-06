import { NavLink } from "react-router-dom";
import logoHorz from "../assets/logo-horz.png";
import "../styles/Navbar.css";

export default function Navbar({ onOpenProjectModal }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" aria-label="Home">
          <img src={logoHorz} alt="Capicú Logo" className="navbar-horizontal-logo" />
        </NavLink>
        
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
          <NavLink to="https://github.com/capicu-pr" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>GitHub</NavLink>
        </div>
        
        <div className="navbar-cta-buttons">
          <a href="mailto:info@capicupuertorico.com?cc=lluna@capicupuertorico.com,mmercado@capicupuertorico.com,scruzromero@capicupuertorico.com" className="cta-button primary">
            Get Started
          </a>
          <button onClick={onOpenProjectModal} className="cta-button secondary">
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  );
} 