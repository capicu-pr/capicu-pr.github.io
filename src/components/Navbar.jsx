import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoHorz from "../assets/logo-horz.png";
import healthcareProductsLogo from "../assets/healthcare-products-logo.png";
import "../styles/Navbar.css";

export default function Navbar({ onOpenProjectModal }) {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" aria-label="Home">
          <img src={logoHorz} alt="Capicú Logo" className="navbar-horizontal-logo" />
        </NavLink>
        
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
          
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setShowProductsDropdown(true)}
            onMouseLeave={() => setShowProductsDropdown(false)}
          >
            <NavLink to="/products" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Products
            </NavLink>
            {showProductsDropdown && (
              <div className="dropdown-menu">
                <NavLink to="/products" className="dropdown-item">
                  <img src={healthcareProductsLogo} alt="Healthcare Products" className="product-logo" />
                  <span className="product-text">
                    <span className="product-text-navy">En</span><span className="product-text-red">Medio</span>
                  </span>
                </NavLink>
              </div>
            )}
          </div>
          
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