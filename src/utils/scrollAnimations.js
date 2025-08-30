// Scroll-triggered animations using Intersection Observer
export function initScrollAnimations() {
  // Wait for DOM to be ready
  setTimeout(() => {
      const observerOptions = {
    threshold: 0.5, // Trigger when 50% of the element is visible
    rootMargin: '0px 0px -200px 0px' // Trigger when element is 200px from bottom of viewport
  };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Section in view:', entry.target.className); // Debug log
          
          // Add animation class to all text elements within the section
          const textElements = entry.target.querySelectorAll('h1, h2, p, .cta-buttons, .founder-card');
          console.log('Found text elements:', textElements.length); // Debug log
          
                  textElements.forEach((element) => {
          element.classList.add('animate-slide-up');
          console.log('Added animation to:', element.tagName); // Debug log
        });
          
          // Stop observing this section once animated
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe each section (excluding hero which should be visible by default)
    const sections = document.querySelectorAll('.cloudless-section, .demo-section, .navy-section, .contact-section');
    console.log('Found sections to observe:', sections.length); // Debug log
    
    sections.forEach(section => {
      observer.observe(section);
    });
  }, 100); // Small delay to ensure DOM is ready
}
