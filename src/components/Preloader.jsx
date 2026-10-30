import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// 1. Import the logo locally from your assets folder
import logoUrl from '../assets/images/bharat-logo.png';

// 2. The old, broken URL has been removed.
// const logoUrl = 'https://kopinfotech.com/projects/BDS2/assests/images/bharat-logo.png';

/**
 * A preloader component with a more dynamic open/close animation.
 * @param {object} props - The component props.
 * @param {function} props.onComplete - A callback function to run when the animation finishes.
 */
function Preloader({ onComplete }) {
  // Refs for the elements we'll be animating
  const preloaderRef = useRef(null);
  const logoRef = useRef(null);
  const topPanelRef = useRef(null);
  const bottomPanelRef = useRef(null);

  useEffect(() => {
    // Ensure the onComplete function is a function before using it
    const onAnimationComplete = typeof onComplete === 'function' ? onComplete : () => {};

    // Set up the GSAP timeline for the animations
    const tl = gsap.timeline({
      onComplete: onAnimationComplete,
    });

    // --- Animation Sequence ---
    tl
      // 1. Panels slide away to reveal the logo
      .to([topPanelRef.current, bottomPanelRef.current], {
        height: 0,
        duration: 1.2,
        ease: 'power3.inOut',
      })
      // 2. Logo fades and scales in at the same time
      .fromTo(logoRef.current, 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' },
        "-=0.8" // Start this animation 0.8s before the previous one ends
      )
      // 3. Hold the logo for a moment
      .to(logoRef.current, {
        duration: 0.75,
      })
      // 4. Fade out the logo
      .to(logoRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      })
      // 5. Fade out the entire preloader to reveal the page
      .to(preloaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power3.inOut',
      })
      // 6. Hide the preloader completely after the animation
      .set(preloaderRef.current, {
        autoAlpha: 0,
      });

  }, [onComplete]);

  return (
    <>
      {/* Encapsulated styles for the new preloader structure */}
      <style>
        {`
          .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            background-color: transparent; /* Background is now on the panels */
          }

          .preloader-panel {
            position: absolute;
            left: 0;
            width: 100%;
            height: 50vh; /* Each panel takes half the screen */
            background-color: #000;
            z-index: 10001;
          }

          .preloader-panel.top {
            top: 0;
          }

          .preloader-panel.bottom {
            bottom: 0;
          }

          .preloader-logo {
            width: 180px;
            height: auto;
            z-index: 10002; /* Ensure logo is above panels during reveal */
            opacity: 0; /* Initially hidden */
          }

          @media (max-width: 768px) {
            .preloader-logo {
              width: 140px;
            }
          }
        `}
      </style>
      <div ref={preloaderRef} className="preloader">
        {/* The two sliding panels */}
        <div ref={topPanelRef} className="preloader-panel top"></div>
        <div ref={bottomPanelRef} className="preloader-panel bottom"></div>

        <img ref={logoRef} src={logoUrl} alt="Bharat Designer Show Logo" className="preloader-logo" />
      </div>
    </>
  );
}

export default Preloader;