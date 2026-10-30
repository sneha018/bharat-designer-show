import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function SaveTheDate() {
  const main = useRef();

  useEffect(() => {
    // gsap.context() is the modern way to set up and clean up animations.
    const ctx = gsap.context(() => {
      // Target elements by their class name within the component
      gsap.from(".save-date-title", {
        y: 50,
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: main.current, // Use the section as the trigger
          start: "top 80%",
        },
      });

      gsap.from(".save-date-text", {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: main.current, // Use the section as the trigger
          start: "top 75%",
        },
      });
    }, main); // <-- scope the context to the component's main element

    // Cleanup function
    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={main} className="py-24 bg-black text-center">
      {/* 1. Changed font to font-serif for a more elegant look */}
      <h2 className="save-date-title text-6xl md:text-8xl font-serif text-yellow-400 mb-4">
        Save the Date
      </h2>
      <p className="save-date-text text-3xl md:text-4xl font-serif text-white">
        3 - 5 October, 2025
      </p>
      <p className="save-date-text text-xl md:text-2xl text-gray-400 mt-2">
        Noida, Delhi NCR
      </p>
    </section>
  );
}

export default SaveTheDate;
