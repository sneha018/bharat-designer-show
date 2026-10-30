import React, { useEffect, useRef } from 'react';
import Meta from '../components/Meta.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import s1Img from "../assets/images/season1/230A1210.JPG";

import s2Img from "../assets/images/season2/IMG_5330.JPG";

function SeasonPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      
      gsap.to(".marquee-text", {
        xPercent: -50,
        repeat: -1,
        duration: 10,
        ease: "linear"
      });

      gsap.utils.toArray(".tilt-card").forEach(card => {
        gsap.from(card, {
          rotate: 0,
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Meta title="Seasons | BDS" description="The Fashion Timeline" />
      
      <main ref={containerRef} className="bg-black text-white min-h-screen overflow-hidden">
        
        {/* --- 1. DYNAMIC HEADER --- */}
  <section className="relative h-screen min-h-[600px] overflow-hidden bg-black">
  <img
    src="/src/assets/images/season1/_Y7A7025.JPG"
    alt="Bharat Designer Show season"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

  <div className="absolute bottom-10 left-6 z-10 sm:bottom-16 sm:left-12">
    <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#D4AF37]">
      Bharat Designer Show
    </p>
    <h1 className="text-5xl font-black uppercase leading-none text-white sm:text-7xl md:text-9xl">
      <span className="italic text-transparent [-webkit-text-stroke:1px_#D4AF37]">
        Seasons
      </span>
    </h1>
  </div>
</section>


<section className="bg-black py-16 md:py-28">
  <div className="container mx-auto space-y-16 px-6 md:space-y-24">

    {/* Season 01 */}
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
      <div className="relative">
        <div className="absolute -bottom-3 -right-3 h-full w-full border border-[#D4AF37] md:-bottom-5 md:-right-5" />
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
          <img
            src="/src/assets/images/season1/s1.JPG"
            alt="Bharat Designer Show Season 1"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      <div className="relative">
        <span className="absolute -top-12 right-0 text-8xl font-black text-white/[0.06] md:-top-20 md:text-[12rem]">
          01
        </span>
        <div className="relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            The Origin
          </p>
          <h2 className="text-5xl font-black uppercase leading-[0.9] text-white md:text-7xl">
            Season <span className="text-[#D4AF37]">One</span>
          </h2>
          <div className="my-6 h-px w-16 bg-[#D4AF37]" />
          <p className="max-w-lg text-base leading-relaxed text-gray-400 md:text-lg">
            The inception of a legacy—celebrating fashion, craftsmanship, and
            bold creative vision.
          </p>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-white/70">
            Noida · The First Edition
          </p>
        </div>
      </div>
    </div>

    {/* Season 02 */}
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
      <div className="relative">
        <div className="absolute -bottom-3 -right-3 h-full w-full border border-[#D4AF37] md:-bottom-5 md:-right-5" />
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
          <img
            src="/src/assets/images/season2/IMG_5236.JPG"
            alt="Bharat Designer Show Season 2"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      <div className="relative">
        <span className="absolute -top-12 right-0 text-8xl font-black text-white/[0.06] md:-top-20 md:text-[12rem]">
          02
        </span>
        <div className="relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            The Evolution
          </p>
          <h2 className="text-5xl font-black uppercase leading-[0.9] text-white md:text-7xl">
            Season <span className="text-transparent [-webkit-text-stroke:1px_#D4AF37]">Two</span>
          </h2>
          <div className="my-6 h-px w-16 bg-[#D4AF37]" />
          <p className="max-w-lg text-base leading-relaxed text-gray-400 md:text-lg">
            Breaking familiar patterns and exploring a new direction in
            contemporary Indian fashion.
          </p>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-white/70">
            Mumbai 2026 · 25+ Labels
          </p>
        </div>
      </div>
    </div>

    {/* Season 03 */}
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
      <div className="relative">
        <div className="absolute -bottom-3 -right-3 h-full w-full border border-[#D4AF37] md:-bottom-5 md:-right-5" />
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
          <img
            src="/images/season-3.jpg"
            alt="Bharat Designer Show Season 3"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      <div className="relative">
        <span className="absolute -top-12 right-0 text-8xl font-black text-white/[0.06] md:-top-20 md:text-[12rem]">
          03
        </span>
        <div className="relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            The Next Chapter
          </p>
          <h2 className="text-5xl font-black uppercase leading-[0.9] text-white md:text-7xl">
            Season <span className="text-transparent [-webkit-text-stroke:1px_#D4AF37]">Three</span>
          </h2>
          <div className="my-6 h-px w-16 bg-[#D4AF37]" />
          <p className="max-w-lg text-base leading-relaxed text-gray-400 md:text-lg">
            A new chapter in Indian fashion, bringing fresh perspectives and
            creative ideas to the runway.
          </p>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            Upcoming Edition
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

      </main>
    </>
  );
}

export default SeasonPage;