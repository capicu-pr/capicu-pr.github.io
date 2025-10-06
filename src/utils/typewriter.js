// Typewriter effect for hero section
export function initTypewriter() {
  const words1 = ['Smarter', 'Faster', 'Lighter'];
  const words2 = ['bigger', 'costly', 'hotter'];
  
  let wordIndex1 = 1; // Start from second word since "smarter" is already visible
  let wordIndex2 = 0;
  let charIndex1 = 0;
  let charIndex2 = 0;
  let isDeleting1 = false;
  let isDeleting2 = false;
  
  const typewriter1 = document.getElementById('typewriter1');
  const typewriter2 = document.getElementById('typewriter2');
  
  function typeWriter1() {
    const currentWord = words1[wordIndex1];
    
    if (isDeleting1) {
      typewriter1.textContent = currentWord.substring(0, charIndex1 - 1);
      charIndex1--;
    } else {
      typewriter1.textContent = currentWord.substring(0, charIndex1 + 1);
      charIndex1++;
    }
    
    let typeSpeed = isDeleting1 ? 50 : 100;
    
    if (!isDeleting1 && charIndex1 === currentWord.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting1 = true;
    } else if (isDeleting1 && charIndex1 === 0) {
      isDeleting1 = false;
      wordIndex1 = (wordIndex1 + 1) % words1.length;
      typeSpeed = 500; // Pause before next word
    }
    
    setTimeout(typeWriter1, typeSpeed);
  }
  
  function typeWriter2() {
    const currentWord = words2[wordIndex2];
    
    if (isDeleting2) {
      typewriter2.textContent = currentWord.substring(0, charIndex2 - 1);
      charIndex2--;
    } else {
      typewriter2.textContent = currentWord.substring(0, charIndex2 + 1);
      charIndex2++;
    }
    
    let typeSpeed = isDeleting2 ? 50 : 100;
    
    if (!isDeleting2 && charIndex2 === currentWord.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting2 = true;
    } else if (isDeleting2 && charIndex2 === 0) {
      isDeleting2 = false;
      wordIndex2 = (wordIndex2 + 1) % words2.length;
      typeSpeed = 500; // Pause before next word
    }
    
    setTimeout(typeWriter2, typeSpeed);
  }
  
  // Start the typewriter effects with a delay
  setTimeout(typeWriter1, 1000);
  setTimeout(typeWriter2, 2000);
}
