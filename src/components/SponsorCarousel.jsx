import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import sponsor1 from '../assets/sponsors/sponsor1.png';
import sponsor2 from '../assets/sponsors/sponsor2.png';

const logos = [sponsor1, sponsor2, sponsor1, sponsor2, sponsor1, sponsor2, sponsor1, sponsor2];

// The component now accepts a "size" prop, with "normal" as the default
function SponsorCarousel({ size = 'normal' }) {
  const trackRef = useRef(null);

  // Determine logo height based on the size prop
  const logoHeightClass = size === 'large' ? 'h-20' : 'h-16';

  useEffect(() => {
    const allLogos = [...logos, ...logos];
    const timeline = gsap.to(trackRef.current, {
      x: '-50%',
      ease: 'none',
      duration: 40,
      repeat: -1,
    });
    return () => timeline.kill();
  }, []);

  const allLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-black">
      <div className="sponsor-carousel">
        <div ref={trackRef} className="sponsor-track">
          {allLogos.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Sponsor Logo ${index + 1}`} 
              // The height class is now applied dynamically
              className={`sponsor-logo ${logoHeightClass}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsorCarousel;
