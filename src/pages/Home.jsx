import { useEffect, useState } from "react";
import { initScrollAnimations } from "../utils/scrollAnimations";
import { initTypewriter } from "../utils/typewriter";
import VerticalsCarousel from "../components/VerticalsCarousel";
import { Compass, Database, Brain, Layout, Server, Headphones } from "lucide-react";
import logoSolo from "../assets/logo-solo.png";
import nsfAccessLogo from "../assets/nsf-access-logo.png";
import pgLogo from "../assets/pg-logo.png";
import prstrtLogo from "../assets/prstrt-logo.png";
import colmena66Logo from "../assets/colmena66-logo.png";
import anemicareDemo from "../assets/anemicare-demo.mov";
import movingAiToEdge from "../assets/moving-ai-to-edge.png";
import sebastianImage from "../assets/sebastiancruz_headshot.png";
import luisImage from "../assets/luisluna_headshot.png";
import misaelImage from "../assets/misaelmercado_headshot.png";
import uprmLogo from "../assets/uprm-logo.png";
import cseUprmLogo from "../assets/cse-uprm-logo.png";
import engineeringUprmLogo from "../assets/engineering-uprm-logo.png";
import cawtLogo from "../assets/cawt-logo.png";
import prEpscorLogo from "../assets/pr-epscor-logo.png";
import "../styles/Home.css";

export default function Home({ showProjectModal, setShowProjectModal }) {
  const [showAdvisoryModal, setShowAdvisoryModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+1',
    country: '',
    projectDescription: ''
  });

  useEffect(() => {
    initScrollAnimations();
    initTypewriter();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, countryCode, country, projectDescription } = formData;
    const fullPhone = `${countryCode} ${phone}`;
    
    const subject = `Project Discussion Request from ${firstName} ${lastName}`;
    const body = `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${fullPhone}
Country: ${country}

Project Description:
${projectDescription}`;

    const mailtoLink = `mailto:info@capicupuertorico.com?cc=lluna@capicupuertorico.com,mmercado@capicupuertorico.com,scruzromero@capicupuertorico.com,scruzromero@capicupuertorico.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    setShowProjectModal(false);
  };

         // Handle modal open/close to hide/show navbar
         useEffect(() => {
           if (showProjectModal || showAdvisoryModal) {
             document.body.classList.add('modal-open');
           } else {
             document.body.classList.remove('modal-open');
           }
           
           // Cleanup on unmount
           return () => {
             document.body.classList.remove('modal-open');
           };
         }, [showProjectModal, showAdvisoryModal]);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content hero-row">
          <div className="hero-text">
          <h1>Making AI Fit Anywhere. <br /><span className="typewriter" id="typewriter1">Smarter</span></h1>
          {/* <h1>not <span className="typewriter" id="typewriter2"></span></h1> */}
          <p className="tagline">Capicú is an Applied AI/ML studio that co‑designs advanced analytical systems to work directly
          where biological and medical data is collected.</p>
            <div className="cta-buttons">
              <a href="mailto:info@capicupuertorico.com?cc=lluna@capicupuertorico.com,mmercado@capicupuertorico.com,scruzromero@capicupuertorico.com" className="cta-button primary">
                Get Started
              </a>
                     <button onClick={() => setShowProjectModal(true)} className="cta-button secondary">
                       Book a Demo
                     </button>
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
            <div className="cloudless-text">
              <h2 className="first-section-header">Cloud<span className="highlight-red">less</span>, Edge Intelligence</h2>
              <p className="first-section-text">Traditional AI depends on central compute, which is slow and infrastructure-heavy. Moreover, devices (PCs, mobile, wearables) rely on upstream data aggregation, increasing latency and compute costs. Now, we have data in bulk quantities and intermittently processed.</p>
              <p className="first-section-text">At Capicú, we're turning sensing equipment into <br/>intelligent instruments—reducing cloud costs and <em>time-to-insight</em>. We develop and test models, tools, and entire systems to enable <strong className="highlight-red">powerful analytics directly at the data source</strong> even with intermittent power, spotty connectivity, or no bandwidth for expensive compute.</p>
            </div>


            <div className="cloudless-image">
              <img 
                src={movingAiToEdge} 
                alt="Moving AI to Edge - Cloudless Intelligence Architecture"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Verticals Carousel */}
      <VerticalsCarousel />

      {/* Tailored Services & Development Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-content">
                  <h2><span className="highlight-red">Tailored</span> Services & Development</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <Compass size={48} />
                </div>
                <h3 style={{textAlign: 'justify'}}>Strategy & Roadmapping</h3>
                <p style={{textAlign: 'justify'}}>Clarify goals, define success metrics, and prioritize a practical path from idea to pilot to scale.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <Database size={48} />
                </div>
                <h3 style={{textAlign: 'justify'}}>Data Foundations</h3>
                <p style={{textAlign: 'justify'}}>Set up simple, reliable ways to collect, clean, label, and track data—so analytics stay repeatable.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <Brain size={48} />
                </div>
                <h3 style={{textAlign: 'justify'}}>Model Development & Evaluation</h3>
                <p style={{textAlign: 'justify'}}>Build and test models (any modality) with clear performance criteria and lightweight explainability.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <Layout size={48} />
                </div>
                <h3 style={{textAlign: 'justify'}}>Product & Platform Build</h3>
                <p style={{textAlign: 'justify'}}>Turn analytics into usable software—APIs, dashboards, and basic workflows—ready for real users.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <Server size={48} />
                </div>
                <h3 style={{textAlign: 'justify'}}>Deployment & Operations</h3>
                <p style={{textAlign: 'justify'}}>Run solutions in the environments you need (cloud, on-prem, or edge), with monitoring and updates.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <Headphones size={48} />
                </div>
                <h3 style={{textAlign: 'justify'}}>Enablement & Support</h3>
                <p style={{textAlign: 'justify'}}>Train teams, document what matters, and provide ongoing help to improve, retrain, and iterate.</p>
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

      {/* Get Started Section */}
      <section className="cloudless-section">
        <div className="cloudless-container">
          <div className="cloudless-content">
            <div className="cloudless-text">
              <h2 className="first-section-header">Get started with Capicú</h2>
              <div className="cta-buttons">
                <a href="mailto:info@capicupuertorico.com?cc=lluna@capicupuertorico.com,mmercado@capicupuertorico.com,scruzromero@capicupuertorico.com" className="cta-button primary">
                  Get Started
                </a>
                <button onClick={() => setShowProjectModal(true)} className="cta-button secondary">
                  Discuss a Project
                </button>
              </div>
            </div>
            
            <div className="cloudless-videos">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/ITa_UHi1MLc?autoplay=1&mute=1"
                  title="Capicú Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Discussion Modal */}
      {showProjectModal && (
        <div className="modal-overlay" onClick={() => setShowProjectModal(false)}>
          <div className="modal-content project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Book a Demo</h2>
              <button className="modal-close" onClick={() => setShowProjectModal(false)}>×</button>
            </div>
            
            <form onSubmit={handleFormSubmit} className="project-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First name*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last name*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Work email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="countryCode">Phone number</label>
                  <div className="phone-input-group">
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleFormChange}
                      className="country-code-select"
                    >
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+1">🇵🇷 +1</option>
                      <option value="+52">🇲🇽 +52</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+86">🇨🇳 +86</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+55">🇧🇷 +55</option>
                      <option value="+54">🇦🇷 +54</option>
                      <option value="+56">🇨🇱 +56</option>
                      <option value="+57">🇨🇴 +57</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="Phone number"
                      className="phone-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country*</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleFormChange}
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="United States">United States</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Spain">Spain</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Japan">Japan</option>
                    <option value="China">China</option>
                    <option value="India">India</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="projectDescription">Tell us about your project needs!</label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleFormChange}
                  rows="4"
                  placeholder="Describe your project requirements, goals, and any specific needs..."
                />
              </div>

              <div className="privacy-notice">
                <p>
                  Capicú Technologies needs the contact information you provide to us to contact you about our products and services. 
                  You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our 
                  privacy practices and commitment to protecting your privacy, please review our{' '}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                </p>
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      
    </div>
  );
} 