import { Link } from "react-router-dom";
import TerminalDemo from "../components/TerminalDemo";
import logoSolo from "../assets/logo-solo.png";
import { FaBrain, FaCode, FaDatabase, FaTachometerAlt, FaRocket, FaLayerGroup, FaCloud, FaTools } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/Home.css";

export default function Home() {
  const [state, handleSubmit] = useForm("mnnddqko");

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content hero-row">
          <div className="hero-text">
            <h1>Making AI Fit Anywhere</h1>
            <p className="tagline">
              Capicú specializes in deploying ML models optimized for your target hardware, with a focus on biomedical and medical tech. <strong>Your data, your hardware, your needs.</strong>
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                Get Started
              </Link>
              <Link to="/about" className="cta-button secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-logo-container">
            <img src={logoSolo} alt="Capicú Logo" className="hero-logo large" loading="eager" />
          </div>
        </div>
        <div className="hero-partners">
          <strong>Supported by:</strong>
          <div className="program-logos-container">
            <a href="https://aws.amazon.com/startups/showcase/startup-details/8a827c00-6054-457a-bac5-8345c5da9ce6" target="_blank" rel="noopener noreferrer">
              <img src="https://www.espace-inc.org/wp-content/uploads/2022/08/copie-de-aws-activate.png" alt="AWS Activate" className="program-logo" />
            </a>
            <a href="https://www.nvidia.com/en-us/startups/" target="_blank" rel="noopener noreferrer">
              <img src="https://mohyilabs.com/wp-content/uploads/2016/03/nvidia-inception-logo.png" alt="NVIDIA Inception" className="program-logo" />
            </a>
            <a href="https://www.xras.org/public/requests/242649-ACCESS-CIS250603" target="_blank" rel="noopener noreferrer">
              <img src="https://esm.sh/@xras/ui@onramps_v1/dist/access_logo.png" alt="NSF ACCESS" className="program-logo" />
            </a>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="demo-section">
        <h2>See Our Compression Engine in Action</h2>
        <div className="demo-container">
          <TerminalDemo />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p className="section-description">Have a project or question? Reach out and we'll get back to you soon.</p>
        
        {state.succeeded ? (
          <div className="contact-success">
            <h2>Thank you!</h2>
            <p>Your message has been sent. We'll be in touch soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name
              <input id="name" type="text" name="name" required />
            </label>
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label htmlFor="email">
              Email
              <input id="email" type="email" name="email" required />
            </label>
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="message">
              Message
              <textarea id="message" name="message" rows="5" required />
            </label>
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" className="cta-button primary" disabled={state.submitting}>
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
} 