import { useState, useEffect, useRef } from 'react';
import anemicareDemo from '../assets/anemicare-demo.mov';
import automatedQA from '../assets/edgeai_manufacturing_example.png';
import remoteMonitoring from '../assets/edgeai_remotemonitoring_example.png';
import proteinAnimation from '../assets/appliedai_proteinsim_example.gif';
import '../styles/VerticalsCarousel.css';

const VerticalsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const timeoutRef = useRef(null);

  const slides = [
    {
      id: 'smart-health',
      bg: '#0a1a2f',
      cardBg: 'rgba(255, 255, 255, 0.95)',
      eyebrow: 'EDGE AI FOR',
      title: 'Smart Health',
      body: 'Anemicare is a pocket-size health record system with built-in screening. A tiny on-device model looks at the fingernail bed, outlines the nail in real time, and estimates hemoglobin in under 20 ms—no power source or internet required. Results save straight into the patient’s portable record so a nurse in a clinic—or a community worker in the field—can make a call on the spot. By shrinking the model to run on low-power hardware, we keep costs down and response fast while protecting privacy. The early proof-of-concept was accepted to the 2025 IEEE Global Humanitarian Technology Conference (GHTC) as an example of Edge AI helping expand access to care.',
      cta: {
        label: 'Learn more',
        href: 'https://arxiv.org/abs/2507.15146'
      },
      media: {
        type: 'video',
        src: anemicareDemo,
        poster: null
      },
      alt: 'Anemicare demo showing real-time hemoglobin analysis on mobile device'
    },
    {
      id: 'biomanufacturing',
      bg: '#0a1a2f',
      cardBg: 'rgba(255, 255, 255, 0.95)',
      eyebrow: 'EDGE AI FOR',
      title: 'Manufacturing Quality Control',
      body: 'On a GMP line, an embedded vision unit turns every pack into a data point. Inspecting at the belt, we can flag defects with a confidence score tuned to AQL, and steers flow while nudging actuators to correct drift before it becomes scrap. Decisions happen on-device, so latency is low and the line keeps running without the intermittent connection. Each call is logged with image, time, lot, and model version for EBR review and Part 11–ready audit trails. The effect? Fewer escapes and false rejects, steadier throughput, and faster, evidence-based batch release.',      cta: {
        label: 'Learn more',
        href: ''
      },
      media: {
        type: 'image',
        src: automatedQA,
        poster: null
      },
      alt: 'Automated QA demo showing real-time manufacturing quality control'
    },
    {
      id: 'remote-monitoring',
      bg: '#0a1a2f',
      cardBg: 'rgba(255, 255, 255, 0.95)',
      eyebrow: 'EDGE AI FOR',
      title: 'Remote Monitoring',
      body: 'Elder safety isn’t just about catching a hard fall—it’s about spotting the moments before it happens. This wearable watches for patterns like slow slumps, hesitation, or a hand reaching for support, and it learns the difference between a safe crouch and a real fall risk. The AI runs on the device itself, so it works even without Wi-Fi or a phone. When something looks risky, it sends a tiny LoRa signal to a nearby hub to alert caregivers. That means fewer false alarms, faster help when it matters, and privacy by keeping personal data close to home.',
      cta: {
        label: 'Learn more',
        href: ''
      },
      media: {
        type: 'image',
        src: remoteMonitoring,
        poster: null
      },
      alt: 'Remote monitoring demo showing real-time fall detection'
    },
    {
      id: 'biologics',
      bg: '#0a1a2f',
      cardBg: 'rgba(255, 255, 255, 0.95)',
      eyebrow: 'EDGE AI FOR',
      title: 'Internet-of-Bioinstrumentation',
      body: 'Think of each lab tool as online—not to the cloud, but to each other. Small edge boxes sit beside your readers and scopes, analyze data on the spot, and send compact results to a private hub. For biologics and small complexes, they pull out peaks and spots, score likely binding poses, and shortlist peptides or fragments with a simple confidence number. Experiments keep running; results sync to your ELN later with the image, time, and instrument ID for review. The effect: faster triage from signal to candidate, fewer reruns, and a clear trail from raw readout to bench-ready ideas—whether you’re a startup lab, a big-pharma group, or an academic core.',
      cta: {
        label: 'Learn more',
        href: ''
      },
      media: {
        type: 'image',
        src: proteinAnimation,
        poster: null
      },
      alt: 'Remote monitoring demo showing real-time fall detection'
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsTransitioning(false), 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning]);

  useEffect(() => {
    document.documentElement.style.setProperty('--vc-bg', slides[currentSlide].bg);
    document.documentElement.style.setProperty('--vc-card-bg', slides[currentSlide].cardBg);
  }, [currentSlide, slides]);

  const currentSlideData = slides[currentSlide];

  return (
    <section 
      className="verticals-carousel"
      aria-roledescription="carousel"
      aria-label="Edge AI Applications"
    >
      <div className="carousel-container">
        <div className="carousel-section-title">
          <h2>Add Value to <span className="highlight-red">Your</span> Data</h2>
        </div>
        <div className="carousel-main-card">
          <div className="carousel-content">
            <div className="carousel-text" key={currentSlide}>
              <div className="slide-eyebrow animate-fade-in">
                {currentSlideData.eyebrow}
              </div>
              <h2 className="slide-title animate-fade-in">
                {currentSlideData.title}
              </h2>
              <p className="slide-body animate-fade-in">
                {currentSlideData.body}
              </p>
            </div>
            
            <div className="carousel-media animate-fade-in" key={`media-${currentSlide}`}>
              {currentSlideData.media.type === 'video' ? (
                <video
                  src={currentSlideData.media.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="slide-media"
                  aria-label={currentSlideData.alt}
                  loading="lazy"
                />
              ) : (
                <img
                  src={currentSlideData.media.src}
                  alt={currentSlideData.alt}
                  className="slide-media"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          </div>
          
          {/* Left Learn More Button */}
          <div className="fixed-learn-more">
            <a 
              href={currentSlideData.cta.href}
              className="learn-more-button"
              target={currentSlideData.cta.href.startsWith('http') ? '_blank' : '_self'}
              rel={currentSlideData.cta.href.startsWith('http') ? 'noopener noreferrer' : ''}
              aria-label={`Learn more about ${currentSlideData.title}`}
            >
              {currentSlideData.cta.label}
            </a>
          </div>

          {/* Slide Indicator Bar */}
          <div className="fixed-slide-indicator">
            <div className="slide-indicator-bar">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Fixed Navigation */}
          <div className="fixed-navigation">
            <button
              className="nav-arrow nav-arrow-prev"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="nav-arrow nav-arrow-next"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalsCarousel;