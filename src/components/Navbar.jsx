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
          {/* <NavLink to="/products" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Products</NavLink> */}
          <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>About</NavLink>
          <NavLink to="/blog" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Blog</NavLink>
          <NavLink to="https://research.capicupuertorico.com/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Research</NavLink>
          <NavLink to="https://github.com/capicu-pr" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>GitHub</NavLink>
          <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
} 