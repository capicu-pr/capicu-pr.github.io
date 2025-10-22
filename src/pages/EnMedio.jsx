import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { initScrollAnimations } from "../utils/scrollAnimations";
import { initTypewriter } from "../utils/typewriter";
import VerticalsCarousel from "../components/VerticalsCarousel";
import { Compass, Database, Brain, Layout, Server, Headphones, CheckCircle, XCircle, MessageSquare, FileText, Share2, Clock, Users, Shield, AlertCircle, HelpCircle } from "lucide-react";
import logoSolo from "../assets/logo-solo.png";
import enmedioLogoSolo from "../assets/enmedio-logo-solo.png";
import healthcareProductsLogo from "../assets/healthcare-products-logo.png";
import "../styles/Home.css";

export default function EnMedio({ showProjectModal, setShowProjectModal }) {
  const [state, handleSubmit] = useForm("mnnddqko"); // Using the same form ID as ContactForm

  useEffect(() => {
    initScrollAnimations();
    initTypewriter();
  }, []);


         // Handle modal open/close to hide/show navbar
         useEffect(() => {
           if (showProjectModal) {
             document.body.classList.add('modal-open');
           } else {
             document.body.classList.remove('modal-open');
           }
           
           // Cleanup on unmount
           return () => {
             document.body.classList.remove('modal-open');
           };
         }, [showProjectModal]);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content hero-row" style={{paddingTop: '8rem'}}>
          <div className="hero-text">
          <div className="hero-logo-container" style={{width: '90%', display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
            <img src={enmedioLogoSolo} alt="EnMedio Platform" className="hero-logo large" loading="eager" style={{width: '100%', maxWidth: '900px', height: 'auto'}} />
          </div>
          {/* <h1>EnMedio<br /></h1> */}
          <p className="tagline">EnMedio turns plain-language family updates into bilingual, clinician-ready summaries you can share with doctors and emergency teams.</p>
            <div className="cta-buttons">
              <button onClick={() => setShowProjectModal(true)} className="cta-button primary">
                Get a Demo
                     </button>
            </div>
          </div>
          <div className="hero-logo-container">
            <img src={healthcareProductsLogo} alt="EnMedio" className="hero-logo large" loading="eager" />
          </div>
        </div>
      </section>

      {/* The Caregiving Challenge Section */}
      <section className="cloudless-section">
        <div className="cloudless-container">
            <div className="cloudless-content caregiving-challenge-grid">
              <div className="cloudless-text">
                <h2 className="first-section-header">The <span className="highlight-red">Caregiving Challenge</span></h2>
                <p className="first-section-text">
                Taking care of loved ones at home often starts with confusion. Over 53 million Americans are family caregivers – roughly 1 in 4 adults over 45 
                – and vital health details are usually scattered across pill bottles, notebooks, and memory. Medical jargon only adds to the confusion, so when 
                an emergency strikes, families freeze up and clinicians get late, fragmented stories. We've lived this problem firsthand (ever try explaining why
                grandma collapsed to 911 as a panicked 12-year-old?). We knew there had to be a better way.

                </p>
                <p className="first-section-text">
                  The data shows the scale of this challenge: 53 million family caregivers in the U.S., with 89% caring for relatives. 
                  53% of relatives feel they had no choice in taking on this role, yet they're expected to navigate complex medical information 
                  and communicate effectively with healthcare providers during stressful moments.
                </p>
              </div>
              
              <div className="cloudless-image caregiving-challenge-images">
                <img 
                  src="/aarp-report-figure1.png" 
                  alt="Prevalence of Caregiving by Age of Care Recipient, 2020 Compared to 2015"
                  loading="lazy"
                  className="caregiving-challenge-image"
                />
                <img 
                  src="/aarp-report-figure3.png" 
                  alt="Estimates of Population Prevalence by Age of Recipient"
                  loading="lazy"
                  className="caregiving-challenge-image"
                />
              </div>
            </div>
        </div>
      </section>

      {/* What It Is / What It Isn't Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-content">
            <div className="section-header">
              <p className="section-subtitle">STARTING AT HOME</p>
              <h2 className="section-title">The <span className="highlight-red">communication gap</span> we're fixing.</h2>
              <p className="section-description">
                  Health information is fragmented and jargon-heavy, so caregivers freeze and clinicians get late, scattered stories. EnMedio guides quick entries—meds, symptoms, timing—and turns your words into a simple, shareable summary.              </p>
            </div>
            <div className="services-grid" style={{gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem'}}>
              <div className="service-card">
                <div className="service-icon">
                  <Users size={48} />
                </div>
                <h3>53M+ Family caregivers</h3>
                <p>A huge part of care happens at home—often without training. <a href="https://www.cdc.gov/homeandfamily/caregiver/index.html" target="_blank" rel="noopener noreferrer">[1]</a></p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <AlertCircle size={48} />
                </div>
                <h3>≈40% Struggle with health info</h3>
                <p>Jargon blocks clear communication in stressful moments. <a href="https://www.ahrq.gov/sites/default/files/wysiwyg/health-literacy/dhhs-2008-issue-brief.pdf" target="_blank" rel="noopener noreferrer">[2]</a>, <a href="https://www.hhs.gov/surgeongeneral/reports-and-publications/health-literacy/index.html" target="_blank" rel="noopener noreferrer">[3]</a></p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <Shield size={48} />
                </div>
                <h3>0 Clinician logins</h3>
                <p>No accounts needed—send secure link or PDF directly to any clinician.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <Clock size={48} />
                </div>
                <h3>Easy as 1-2-3</h3>
                <p>Capture, Organize, Share.<br/>All your care info, ready to go.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-content">
            <h2>Core <span className="highlight-red">Features</span></h2>
            <div className="services-grid core-features-grid">
              <div className="service-card">
                <div className="service-icon">
                  <MessageSquare size={48} />
                </div>
                <h3>Bilingual UI</h3>
                <p>English/Spanish interface with plain-language phrasing for easy family use.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <Clock size={48} />
                </div>
                <h3>Guided Entries</h3>
                <p>Structured prompts for meds, symptoms, onset/time, and recent changes.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FileText size={48} />
                </div>
                <h3>Summary Builder</h3>
                <p>SBAR-style sections, timeline, and attachments in clinician-ready format.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <Share2 size={48} />
                </div>
                <h3>Share Options</h3>
                <p>Secure link + downloadable PDF with consent banner and access controls.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <Users size={48} />
                </div>
                <h3>Role-Based Access</h3>
                <p>Owner, caregiver, and clinician roles with appropriate permissions.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <Shield size={48} />
                </div>
                <h3>Privacy & Security</h3>
                <p>Encryption in transit/at rest, audit logging, and HIPAA-aware architecture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EnMedio-ASR Pilot Section
      <section className="cloudless-section enmedio-asr-section">
        <div className="cloudless-container">
          <div className="cloudless-content">
            <div className="cloudless-text">
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                <h2 className="first-section-header">Coming via pilot: <span className="highlight-red">EnMedio-ASR</span></h2>
                <span className="pilot-badge">Pilot</span>
              </div>
              <p className="first-section-text" style={{fontSize: '1.2rem', marginBottom: '1rem'}}>
                We're piloting a small, privacy-first ASR model that transcribes and pre-organizes what families say—without sending audio to the cloud.
              </p>
              <div style={{marginBottom: '1.5rem'}}>
                <p style={{fontWeight: '600', marginBottom: '0.5rem'}}>Status: In R&D / pilot; not generally available.</p>
                <p style={{fontWeight: '600', marginBottom: '0.5rem'}}>Aims to: Speed capture in stressful moments via 'speak and it drafts'.</p>
                <p style={{fontWeight: '600'}}>Won't: Diagnose or recommend treatments.</p>
              </div>
              <button 
                onClick={() => setShowProjectModal(true)} 
                className="cta-button primary"
                style={{marginTop: '1rem'}}
              >
                Join the Voice-Capture Pilot
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Who It's For Section */}
      <section className="navy-section navy-section-with-bg">
        <div className="navy-section-overlay"></div>
        <div className="navy-container navy-section-content">
          <div className="navy-content">
            <h1>Who It's For</h1>
            <div className="services-grid who-its-for-grid">
              <div className="service-card">
                <div className="service-icon">
                  <Users size={48} />
                </div>
                <h3>Families & Caregivers</h3>
                <p>Make your story clear in emergencies. Get organized, share updates, and reduce stress in acute events.</p>
                <button 
                  onClick={() => setShowProjectModal(true)} 
                  className="cta-button primary"
                  style={{marginTop: '1rem', width: '100%'}}
                >
                  Get Early Access
                </button>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <Shield size={48} />
                    </div>
                <h3>Clinicians & EMS</h3>
                <p>Receive a structured pre-arrival picture. Get clear, organized patient information before they arrive.</p>
                <a 
                  href="#" 
                  className="cta-button secondary"
                  style={{marginTop: '1rem', width: '100%', display: 'inline-block', textAlign: 'center'}}
                >
                  See Sample Summary
                </a>
                  </div>

              <div className="service-card">
                <div className="service-icon">
                  <Database size={48} />
                    </div>
                <h3>Provider Orgs / Plans</h3>
                <p>Pilot to reduce avoidable friction at intake. Improve patient flow and communication efficiency.</p>
                <button 
                  onClick={() => setShowProjectModal(true)} 
                  className="cta-button primary"
                  style={{marginTop: '1rem', width: '100%'}}
                >
                  Book a 20-min Intro
                </button>
                    </div>
                    </div>
                  </div>
                    </div>
      </section>

      {/* FAQ Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-content">
            <h2>Frequently Asked Questions</h2>
            <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--ao-color-bg-navy)'}}>Does EnMedio diagnose or give advice?</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.5'}}>No—EnMedio is a communication tool only. We help you organize and share information, but we don't provide medical advice or diagnoses.</p>
                    </div>
              
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--ao-color-bg-navy)'}}>Is this a medical device?</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.5'}}>No, EnMedio is not a medical device. It's a communication and organization tool for families and healthcare providers.</p>
                    </div>
              
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--ao-color-bg-navy)'}}>How do I share a summary?</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.5'}}>You can send a secure link or PDF to healthcare providers, or show the summary directly on your phone during appointments.</p>
                  </div>
              
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--ao-color-bg-navy)'}}>Is voice included?</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.5'}}>Typed/tapped entries are available today; voice capture is in pilot phase and not generally available yet.</p>
                </div>
              
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--ao-color-bg-navy)'}}>Can I use it today?</h4>
                <p style={{fontSize: '1rem', lineHeight: '1.5'}}>We're currently in the process of getting our first pilot users. We'll let you know when you can start using it. If you're interested in being part of the pilot, please let us know.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Closing Band Section */}
      <section className="cloudless-section">
        <div className="cloudless-container">
          <div className="cloudless-content caregiving-challenge-grid">
            <div className="cloudless-text">
              <h2 className="first-section-header">Ready to make the home-to-hospital handoff clear?</h2>
              <div className="cta-buttons">
                <button onClick={() => setShowProjectModal(true)} className="cta-button primary">
                  Get a Demo
                </button>
                <button onClick={() => setShowProjectModal(true)} className="cta-button secondary">
                  Join the Pilot
                </button>
              </div>
            </div>
            <div className="cloudless-image">
              <img 
                src="/enmedio-banner.png" 
                alt="EnMedio Platform Banner"
                loading="lazy"
                style={{width: '100%', height: 'auto', borderRadius: '8px'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Discussion Modal */}
      {showProjectModal && (
        <div className="modal-overlay" onClick={() => setShowProjectModal(false)}>
          <div className="modal-content project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Get a Demo</h2>
              <button className="modal-close" onClick={() => setShowProjectModal(false)}>×</button>
            </div>
            
            <form onSubmit={handleSubmit} className="project-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First name*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                  />
                  <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last name*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                  />
                  <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Work email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="countryCode">Phone number</label>
                  <div className="phone-input-group">
                    <select
                      id="countryCode"
                      name="countryCode"
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
                  rows="4"
                  placeholder="Describe your project requirements, goals, and any specific needs..."
                  required
                />
                <ValidationError prefix="Project Description" field="projectDescription" errors={state.errors} />
              </div>

              <div className="privacy-notice">
                <p>
                  Capicú Technologies needs the contact information you provide to us to contact you about our products and services. 
                  You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our 
                  privacy practices and commitment to protecting your privacy, please review our{' '}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                </p>
              </div>

              <div className="form-actions">
                <button 
                  type="submit" 
                  className="submit-button" 
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
                {state.succeeded && (
                  <div className="contact-success" style={{ 
                    marginTop: '1rem', 
                    padding: '1rem',
                    backgroundColor: 'rgba(0, 128, 0, 0.1)',
                    borderRadius: '8px',
                    border: '1px solid green',
                    color: 'green'
                  }}>
                    <strong>Thank you!</strong> Your message has been sent. We'll be in touch soon.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      
    </div>
  );
}

