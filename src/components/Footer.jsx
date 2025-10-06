import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-col footer-brand">
            <div className="footer-logo">Capicú Technologies</div>
            <div className="footer-tagline">Making AI Fit Anywhere.</div>
            <div className="footer-location">
            <p>62 Calle Ernesto Ramos Antonini</p>
            <p>Mayagüez, Puerto Rico 00680</p>
            <p>info@capicupuertorico.com</p>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Company</div>
            <Link to="/privacy">Privacy Policy</Link>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Connect</div>
            <a href="https://linkedin.com/company/capicu-pr" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/capicu-pr" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://instagram.com/capicu.pr" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Capicú Technologies LLC. All rights reserved.
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
      </div>
    </footer>
  );
}