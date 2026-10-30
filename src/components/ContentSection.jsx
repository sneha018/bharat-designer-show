import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// This is a reusable component for sections with media and text.
function ContentSection({ title, image, video, direction = 'normal', children }) {
  const sectionRef = useRef(null);
  const isReversed = direction === 'reverse';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the media element (image/video)
      gsap.from(sectionRef.current.querySelector('.content-media'), {
        opacity: 0,
        x: isReversed ? -100 : 100,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      });

      // Animate the text content
      gsap.from(sectionRef.current.querySelector('.content-text'), {
        opacity: 0,
        x: isReversed ? 100 : -100,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [isReversed]);

  const mediaContent = image ? (
    <img src={image} className="w-full h-auto rounded-lg shadow-lg" alt="Section media" />
  ) : (
    <video className="w-10/12 mx-auto rounded-lg shadow-lg" autoPlay loop muted playsInline>
      <source src={video} type="video/mp4" />
    </video>
  );

  return (
    <section ref={sectionRef} className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          {/* FIXED: Render the title prop directly. */}
          {/* It already contains the WavyText component from the parent. */}
          {title}
        </div>
        <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-start md:space-x-12 ${isReversed && 'md:space-x-reverse'}`}>
          <div className="w-full md:w-1/2 mb-8 md:mb-0 content-media">
            {mediaContent}
          </div>
          <div className="w-full md:w-1/2 text-lg leading-relaxed content-text">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
