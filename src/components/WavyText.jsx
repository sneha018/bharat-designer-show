import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// A reusable component to apply a wavy animation to any text
function WavyText({ text, className }) {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    // Split the text into individual letters wrapped in spans
    el.innerHTML = text
      .split('')
      .map(letter => `<span class="wavy-letter">${letter === ' ' ? '\u00A0' : letter}</span>`)
      .join('');

    const letters = el.querySelectorAll('.wavy-letter');

    // Animate the letters in with a staggered, wavy effect
    gsap.from(letters, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.05, // This creates the wave
    });
  }, [text]); // Re-run the effect if the text prop changes

  return <h1 ref={textRef} className={className}></h1>;
}

export default WavyText;
