import logoHorz from "../assets/logo-horz.png";
import "../styles/MobileOnly.css";

export default function MobileOnly() {
  return (
    <div className="mobile-only-container">
      <div className="mobile-only-content">
        <div className="mobile-only-logo">
          <img src={logoHorz} alt="Capicú Logo" />
        </div>
        <h1>Capicú Technologies</h1>
        <div className="mobile-only-message">
          <h2>🚧 Under Construction 🚨</h2>
          <p>We’re crafting a better mobile site. In the meantime, open this page on a desktop for the full experience.</p>
        </div>
        <div className="mobile-only-contact">
          <p>Need to reach us?</p>
          <a href="mailto:info@capicupuertorico.com?cc=lluna@capicupuertorico.com,mmercado@capicupuertorico.com">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
