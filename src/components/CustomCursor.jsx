import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Only run this logic on devices that support a mouse (non-touch)
    if (window.matchMedia("(pointer: fine)").matches) {
      const cursor = cursorRef.current;
      cursor.classList.add('cursor-visible'); // Make the cursor visible

      const onMouseMove = (e) => {
        gsap.to(cursor, { duration: 0.3, x: e.clientX, y: e.clientY });
      };

      const onMouseEnter = () => cursor.classList.add('cursor-grow');
      const onMouseLeave = () => cursor.classList.remove('cursor-grow');

      window.addEventListener('mousemove', onMouseMove);

      // Find all interactive elements and add hover listeners
      const interactiveElements = document.querySelectorAll(
        'a, button, [data-cursor-hover], .sponsor-logo, .news-card, .gallery-card, .tab-button'
      );
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });

      // Cleanup function to remove event listeners
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', onMouseEnter);
          el.removeEventListener('mouseleave', onMouseLeave);
        });
      };
    }
  }, []); // Empty dependency array means this runs only once on mount

  return <div ref={cursorRef} className="cursor"></div>;
}

export default CustomCursor;
