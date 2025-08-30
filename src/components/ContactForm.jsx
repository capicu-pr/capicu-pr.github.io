import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

export default function ContactForm({ className = "contact-form" }) {
  const [state, handleSubmit] = useForm("mnnddqko");
  const [selectedInquiry, setSelectedInquiry] = useState("");
  const [selectedHearAbout, setSelectedHearAbout] = useState("");

  const handleInquiryClick = (value) => {
    if (selectedInquiry === value) {
      setSelectedInquiry("");
      document.getElementById('inquiry-type').value = "";
    } else {
      setSelectedInquiry(value);
      document.getElementById('inquiry-type').value = value;
    }
  };

  const handleHearAboutClick = (value) => {
    if (selectedHearAbout === value) {
      setSelectedHearAbout("");
      document.getElementById('hear-about').value = "";
    } else {
      setSelectedHearAbout(value);
      document.getElementById('hear-about').value = value;
    }
  };

  if (state.succeeded) {
    return (
      <div className="contact-success">
        <h2>Thank you!</h2>
        <p>Your message has been sent. We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">
          Full Name *
          <input 
            id="name" 
            type="text" 
            name="name" 
            placeholder="Enter your full name"
            required 
          />
        </label>
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <label htmlFor="email">
          Email Address *
          <input 
            id="email" 
            type="email" 
            name="email" 
            placeholder="your.email@company.com"
            required 
          />
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <label htmlFor="company">
        Company/Organization
        <input 
          id="company" 
          type="text" 
          name="company" 
          placeholder="Your company or organization"
        />
      </label>

      <label>
        Inquiry Type *
        <div className="inquiry-buttons">
          <button 
            type="button" 
            className={`inquiry-btn ${selectedInquiry === 'partnership' ? 'active' : ''}`}
            onClick={() => handleInquiryClick('partnership')}
          >
            Partnership Opportunity
          </button>
          <button 
            type="button" 
            className={`inquiry-btn ${selectedInquiry === 'technical' ? 'active' : ''}`}
            onClick={() => handleInquiryClick('technical')}
          >
            Technical Consultation
          </button>
          <button 
            type="button" 
            className={`inquiry-btn ${selectedInquiry === 'project' ? 'active' : ''}`}
            onClick={() => handleInquiryClick('project')}
          >
            Project Discussion
          </button>
          <button 
            type="button" 
            className={`inquiry-btn ${selectedInquiry === 'general' ? 'active' : ''}`}
            onClick={() => handleInquiryClick('general')}
          >
            General Inquiry
          </button>
          <button 
            type="button" 
            className={`inquiry-btn ${selectedInquiry === 'career' ? 'active' : ''}`}
            onClick={() => handleInquiryClick('career')}
          >
            Career Opportunities
          </button>
        </div>
        <input type="hidden" id="inquiry-type" name="inquiry-type" required />
      </label>

      <label htmlFor="message">
        Tell us about your project *
        <textarea 
          id="message" 
          name="message" 
          rows="6" 
          placeholder="Describe your project, challenges, or what you'd like to discuss..."
          required 
        />
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <label>
        How did you hear about us?
        <div className="hear-about-buttons">
          <button 
            type="button" 
            className={`hear-about-btn ${selectedHearAbout === 'search' ? 'active' : ''}`}
            onClick={() => handleHearAboutClick('search')}
          >
            Search Engine
          </button>
          <button 
            type="button" 
            className={`hear-about-btn ${selectedHearAbout === 'social' ? 'active' : ''}`}
            onClick={() => handleHearAboutClick('social')}
          >
            Social Media
          </button>
          <button 
            type="button" 
            className={`hear-about-btn ${selectedHearAbout === 'referral' ? 'active' : ''}`}
            onClick={() => handleHearAboutClick('referral')}
          >
            Referral
          </button>
          <button 
            type="button" 
            className={`hear-about-btn ${selectedHearAbout === 'conference' ? 'active' : ''}`}
            onClick={() => handleHearAboutClick('conference')}
          >
            Conference/Event
          </button>
          <button 
            type="button" 
            className={`hear-about-btn ${selectedHearAbout === 'university' ? 'active' : ''}`}
            onClick={() => handleHearAboutClick('university')}
          >
            University
          </button>
          <button 
            type="button" 
            className={`hear-about-btn ${selectedHearAbout === 'other' ? 'active' : ''}`}
            onClick={() => handleHearAboutClick('other')}
          >
            Other
          </button>
        </div>
        <input type="hidden" id="hear-about" name="hear-about" />
      </label>

      <div className="form-actions">
        <button type="submit" className="cta-button primary" disabled={state.submitting}>
          {state.submitting ? (
            <>
              <i className="fas fa-spinner fa-spin"></i>
              Sending...
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane"></i>
              Send Message
            </>
          )}
        </button>
        <p className="form-note">* Required fields</p>
      </div>
    </form>
  );
}

