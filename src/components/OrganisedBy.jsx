import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import the logo image from your assets folder
import dreamzLogo from '../assets/images/dreamz_logo.jpg';

gsap.registerPlugin(ScrollTrigger);

function OrganisedBy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      // Animate the section content as it scrolls into view
      gsap.from(section.children, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      });

      // Continuous breathing/pulsing animation for the logo
      gsap.to(".breathing-logo", {
        scale: 1.05,
        duration: 2,
        repeat: -1, // Loop indefinitely
        yoyo: true, // Animate back and forth
        ease: 'power1.inOut'
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    // 1. Reduced top padding to decrease space above the component
    <section ref={sectionRef} className="pt-10 pb-20 bg-black text-center">
      <h2 className="text-2xl md:text-3xl font-serif text-gray-400 mb-8">
        Organised By
      </h2>
      <a 
        href="https://www.dreamzproductionhouse.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit Dreamz Production House website (opens in a new tab)"
        className="inline-block"
      >
        <img 
          src={dreamzLogo} 
          alt="Dreamz Production House Logo" 
          className="breathing-logo h-32 w-auto mx-auto rounded-md"
          loading="lazy" // Lazy load for performance
        />
      </a>
    </section>
  );
}

export default OrganisedBy;
