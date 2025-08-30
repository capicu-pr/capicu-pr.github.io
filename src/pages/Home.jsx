import { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import { initScrollAnimations } from "../utils/scrollAnimations";
import { initTypewriter } from "../utils/typewriter";
import logoSolo from "../assets/logo-solo.png";
import nsfAccessLogo from "../assets/nsf-access-logo.png";
import pgLogo from "../assets/pg-logo.png";
import prstrtLogo from "../assets/prstrt-logo.png";
import colmena66Logo from "../assets/colmena66-logo.png";
import anemicareDemo from "../assets/anemicare-demo.mov";
import sebastianImage from "../assets/sebastiancruz_headshot.png";
import luisImage from "../assets/luisluna_headshot.png";
import misaelImage from "../assets/misaelmercado_headshot.png";
import uprmLogo from "../assets/uprm-logo.png";
import cseUprmLogo from "../assets/cse-uprm-logo.png";
import engineeringUprmLogo from "../assets/engineering-uprm-logo.png";
import cawtLogo from "../assets/cawt-logo.png";
import prEpscorLogo from "../assets/pr-epscor-logo.png";
import "../styles/Home.css";

export default function Home() {
  const [showAdvisoryModal, setShowAdvisoryModal] = useState(false);

  useEffect(() => {
    initScrollAnimations();
    initTypewriter();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content hero-row">
          <div className="hero-text">
          <h1>Making AI Fit Anywhere. <br /><span className="typewriter" id="typewriter1">Smarter</span></h1>
          {/* <h1>not <span className="typewriter" id="typewriter2"></span></h1> */}
          <p className="tagline">By compressing AI into embedded systems, we deliver advanced analytics for where life sciences data is born.</p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-button primary">
                Get Started
              </a>
              <a href="https://research.capicupuertorico.com/" className="cta-button secondary">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-logo-container">
            <img src={logoSolo} alt="Capicú Logo" className="hero-logo large" loading="eager" />
          </div>
        </div>
        <div className="hero-partners">
          <strong>Supported by:</strong>
          <div className="program-logos-container">
            <a href="https://www.xras.org/public/requests/242649-ACCESS-CIS250603" target="_blank" rel="noopener noreferrer">
              <img src={nsfAccessLogo} alt="NSF ACCESS" className="program-logo" />
            </a>
            <img src={pgLogo} alt="Perspectivas Globales" className="program-logo" />
            <img src={prstrtLogo} alt="PR Science Trust" className="program-logo" />
            <img src={colmena66Logo} alt="Colmena66" className="program-logo" />
          </div>
        </div>
      </section>

      {/* Cloudless Edge Intelligence Section */}
      <section className="cloudless-section">
        <div className="cloudless-container">
          <div className="cloudless-content">
            <div className="cloudless-image">
              <img src="/src/assets/moving-ai-to-edge.png" alt="Compute Tradeoffs: Power vs. Proximity, Layers of Computing Infrastructure, and Model Fit for Edge AI" />
            </div>
            <div className="cloudless-text">
              <h2>Cloud<span className="highlight-red">less</span>, Edge Intelligence.</h2>
              <p>Traditional AI depends on central compute, which is slow and infrastructure-heavy. Moreover, devices (PCs, mobile, wearables) rely on upstream data aggregation, increasing latency and compute costs. Now, we have data in bulk quantities and intermittently processed.</p>
              <p>At Capicú, we're turning sensing equipment into <strong>intelligent instruments</strong>—reducing cloud costs and <em>time-to-insight</em>. We develop and test models, tools, and entire systems to enable <strong className="highlight-red">powerful analytics directly at the data source</strong> even with intermittent power, spotty connectivity, or no bandwidth for expensive compute.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="demo-section">
        <div className="demo-container">
          <div className="demo-content">
            <div className="demo-text">
              <h2>What started us towards <span className="highlight-red">Edge AI</span> in <span className="highlight-red">Healthcare</span>?</h2>
              <p><a href="https://tinyurl.com/anemicare" target="_blank" rel="noopener noreferrer"><strong>Anemicare</strong></a> was a senior design project from students at the <strong>University of Puerto Rico at Mayagüez</strong> that aimed to develop a portable electronic health record system with built-in modules for critical care screening. </p>
              <p>We used model compression methods to <strong className="highlight-red">reduce model size and inference latency</strong> <strong>to have fingernail bed segmentation and colorimetric estimation of hemoglobin with</strong> <strong className="highlight-red">sub-20 ms time-to-insight</strong><strong> in embedded hardware</strong>. Our preliminary design was accepted at <a href="https://ieeeghtc.org" target="_blank" rel="noopener noreferrer"><em>2025 IEEE Global Humanitarian Technology Conference (GHTC)</em></a> as a translational application of Edge AI to improve healthcare access in remote areas with limited resources.</p>
              <div className="demo-citation">
                <p>S. A. Cruz Romero, M. J. Mercado Hernández, S. Y. Ali Rivera, J. A. Santiago Fernandez, W. E. Lugo Beauchamp. "Design of an Edge-based Portable EHR System for Anemia Screening in Remote Health Applications," <em>IEEE Global Humanitarian Technology Conference, 2025.</em>
                <a href="https://arxiv.org/abs/2507.15146" target="_blank" rel="noopener noreferrer"> arXiv:2507.15146</a>
                </p>
              </div>
            </div>
            <div className="demo-video">
              <div className="video-wrapper">
                <video 
                  src={anemicareDemo} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="video-frame"
                />
              </div>
              <div className="demo-logos">
                <img src={uprmLogo} alt="UPRM Logo" className="demo-logo" />
                <img src={cseUprmLogo} alt="CSE UPRM Logo" className="demo-logo" />
                <img src={engineeringUprmLogo} alt="Engineering UPRM Logo" className="demo-logo" />
                <img src={prEpscorLogo} alt="PR EPSCoR Logo" className="demo-logo" />
                <img src={cawtLogo} alt="CAWT Logo" className="demo-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* About Team Section */}
      <section className="navy-section">
        <div className="navy-container">
          <div className="navy-content">
            <div className="team-layout">
              <div className="team-info">
                <h1>Our Builders & Leadership</h1>
                <p>We operate from Mayagüez, Puerto Rico, a hub of engineering talent and applied scientific research. Our work is deeply connected to the University of Puerto Rico at Mayagüez (UPRM) — one of the nation's leading Hispanic-Serving Institutions and a recognized leader in STEM. Our founding team has a breadth and depth of experience in Academic, Industry, and Federal projects in machine learning, software development, electronics, and cybersecurity, whilst being advised by leading professionals in high-risk tech and applied computational sciences.</p>
                <button className="advisory-btn" onClick={() => setShowAdvisoryModal(true)}>Capicú Advisory Committee</button>
              </div>
              
              <div className="founders-section">
                <div className="founder-cards">
                  <div className="founder-card">
                    <div className="founder-image">
                      <img src={sebastianImage} alt="Sebastián A. Cruz Romero" />
                    </div>
                    <div className="founder-info">
                      <h4>Sebastián A. Cruz Romero</h4>
                      <p className="founder-position">Co-Founder, CEO</p>
                      <p className="founder-degree">Computer Science & Engineering</p>
                    </div>
                    <div className="founder-contacts">
                      <a href="https://linkedin.com/in/romerocruzsa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://github.com/romerocruzsa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="mailto:scruzromero@capicupuertorico.com" aria-label="Email">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>

                  <div className="founder-card">
                    <div className="founder-image">
                      <img src={luisImage} alt="Luis G. Luna Betancourt" />
                    </div>
                    <div className="founder-info">
                      <h4>Luis G. Luna Betancourt</h4>
                      <p className="founder-position">Co-Founder, COO</p>
                      <p className="founder-degree">Computer Engineering</p>
                    </div>
                    <div className="founder-contacts">
                      <a href="https://linkedin.com/in/luis-luna787" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://github.com/lunal7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="mailto:lluna@capicupuertorico.com" aria-label="Email">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>

                  <div className="founder-card">
                    <div className="founder-image">
                      <img src={misaelImage} alt="Misael J. Mercado Hernández" />
                    </div>
                    <div className="founder-info">
                      <h4>Misael J. Mercado Hernández</h4>
                      <p className="founder-position">Co-Founder, CIO</p>
                      <p className="founder-degree">Software Engineering</p>
                    </div>
                    <div className="founder-contacts">
                      <a href="https://linkedin.com/in/misael-j-mercado" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://github.com/misaelmercado1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="mailto:mmercado@capicupuertorico.com" aria-label="Email">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-left">
            <h1>Reach out!</h1>
            <p>We'll be your strategic partner for your project needs.</p>
            
            <div className="company-info">
              <h2>Capicú Technologies</h2>
              <p>62 Calle Ernesto Ramos Antonini</p>
              <p>Mayagüez, PR 00682</p>
              <p><strong>T:</strong> +1 (787) 601-1026</p>
              <p><strong>E:</strong> info@capicupuertorico.com</p>
            </div>
            
            <div className="social-section">
              <h4>Follow us!</h4>
              <div className="social-links">
                <a href="https://linkedin.com/company/capicu-pr" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://instagram.com/capicu.pr" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/capicu-pr" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-right">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Advisory Committee Modal */}
      {showAdvisoryModal && (
        <div className="modal-overlay" onClick={() => setShowAdvisoryModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Capicú Advisory Committee</h2>
              <button className="modal-close" onClick={() => setShowAdvisoryModal(false)}>×</button>
            </div>
            <div className="advisory-cards">
              <div className="advisory-card-container">
                <div className="advisory-card">
                  <div className="card-inner">
                    <img src="https://www.uprm.edu/cse/wp-content/uploads/sites/153/2024/06/Wilfredo-Lugo-Picture-scaled-e1718307936332.jpg" alt="Dr. Wilfredo Lugo Beauchamp" />
                    <div className="card-back">
                      <p>Over 25 years of industry experience in research, development, and data science, with a career spanning Hewlett Packard Enterprise (HPE) and Johnson Controls Inc. (JCI). Distinguished Technologist in Data Science at HPE, specializing in industrial automation and developing compressed machine learning models for edge deployment. Currently Assistant Professor at UPRM and founder of the Edge Computing Group.</p>
                    </div>
                  </div>
                </div>
                <div className="card-info">
                  <h3>Dr. Wilfredo Lugo Beauchamp, PE, PhD</h3>
                  <p>Computational Science & Engineering</p>
                </div>
              </div>
              
              <div className="advisory-card-container">
                <div className="advisory-card">
                  <div className="card-inner">
                    <img src="https://admin.newmuseum.org/wp-content/uploads/2019/09/Ramphis-Castro-e1729031143560.jpeg?w=1920&q=75" alt="Ramphis J. Castro" />
                    <div className="card-back">
                      <p>AI Strategist & Venture Builder with $250M+ raised for startups. 20+ years working across every layer of the innovation stack: from engineering core systems to funding breakout startups, shaping public policy, and directing capital toward long-term economic mobility. Helped over 50 startups raise $250M+ and advised fund managers across four continents.</p>
                    </div>
                  </div>
                </div>
                <div className="card-info">
                  <h3>Ramphis J. Castro, PE, JD</h3>
                  <p>Business & Fundraising</p>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      )}
    </div>
  );
} 