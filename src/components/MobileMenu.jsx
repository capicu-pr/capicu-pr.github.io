import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoSolo from '../assets/logo-solo.png';
import '../styles/MobileMenu.css';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-menu">
      <div className="mobile-header">
        <NavLink to="/" className="mobile-logo" aria-label="Home">
          <img src={logoSolo} alt="Capicú Logo" />
        </NavLink>
        <button className="hamburger-button" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => "mobile-nav-link" + (isActive ? " active" : "")} onClick={toggleMenu}>
          Home
        </NavLink>
        <a href="https://research.capicupuertorico.com/" className="mobile-nav-link" onClick={toggleMenu}>
          Research
        </a>
        <a href="https://github.com/capicu-pr" className="mobile-nav-link" onClick={toggleMenu}>
          GitHub
        </a>
      </div>
    </div>
  );
} 