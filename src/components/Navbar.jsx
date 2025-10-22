import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoHorz from "../assets/logo-horz.png";
import logoSolo from "../assets/logo-solo.png";
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
            <span className="nav-link">
              Products
            </span>
            {showProductsDropdown && (
              <div className="dropdown-menu three-pane-dropdown">
                <div className="dropdown-pane">
                  <div className="pane-header">TECHNOLOGY</div>
                  <div className="pane-content">
                    <NavLink to="" className="dropdown-item">
                      <img src={logoSolo} alt="Technology Products" className="product-logo" />
                      <span className="product-text">
                      <span className="product-text-navy"></span>
                      </span>
                    </NavLink>
                  </div>
                </div>
                
                <div className="dropdown-divider"></div>
                
                <div className="dropdown-pane">
                  <div className="pane-header">HEALTHCARE</div>
                  <div className="pane-content">
                    <NavLink to="/products/enmedio" className="dropdown-item">
                      <img src={healthcareProductsLogo} alt="Healthcare Products" className="product-logo" />
                      <span className="product-text">
                        <span className="product-text-navy">En</span><span className="product-text-red">Medio</span>
                      </span>
                    </NavLink>
                  </div>
                </div>
                
                <div className="dropdown-divider"></div>
                
                <div className="dropdown-pane">
                  <div className="pane-header">BIOLOGY</div>
                  <div className="pane-content">
                    {/* Biology products will go here */}
                    <NavLink to="" className="dropdown-item">
                      <img src={logoSolo} alt="Biology Products" className="product-logo" />
                      <span className="product-text">
                        <span className="product-text-navy"></span>
                      </span>
                    </NavLink>                  </div>
                </div>
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