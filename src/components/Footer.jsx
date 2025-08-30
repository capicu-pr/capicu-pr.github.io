import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer b2b-footer">
      <div className="footer-content">
        <div className="footer-col brand-col">
          <div className="footer-logo">Capicú</div>
          <div className="footer-tagline">Making AI Fit Anywhere.</div>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Company</div>
          <Link to="https://research.capicupuertorico.com/">Research</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          {/* &copy; */}
          Capicú Technologies LLC, Est. {new Date().getFullYear()}. All rights reserved.
        </div>
        <div className="footer-legal">
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="footer-socials">
          <a href="https://instagram.com/capicu.pr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/company/capicu-pr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/capicu-pr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}