import { NavLink } from "react-router-dom";
import logoSolo from "../assets/logo-solo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" aria-label="Home">
          <img src={logoSolo} alt="Capicú Logo" />
        </NavLink>
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
          <NavLink to="https://research.capicupuertorico.com/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Research</NavLink>
          <NavLink to="https://github.com/capicu-pr" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>GitHub</NavLink>
        </div>
      </div>
    </nav>
  );
} 