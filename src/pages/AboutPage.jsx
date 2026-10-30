import React, { useEffect, useRef } from 'react';
import Meta from '../components/Meta.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WavyText from '../components/WavyText.jsx';
import sharadPhoto from "../assets/images/members/sarth.jpg";

import aboutBanner from '../assets/images/members/dreamzproductio.jpg';




function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      
      gsap.fromTo(".hero-image", 
        { scale: 1.2 }, 
        { 
          scale: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            scrub: true,
            start: "top top",
            end: "bottom top"
          }
      });

      gsap.from(".reveal-text", {
        opacity: 0,
        y: 80,
        duration: 1.5,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".content-section",
          start: "top 80%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Meta title="About | Bharat Designer Show" description="The Vision of Bharat Fashion" />
      
      <main ref={containerRef} className="bg-black text-white">
        
{/* --- Cinematic Banner --- */}
<section className="hero-section relative flex h-[70vh] w-full items-end overflow-hidden pb-20">
  <div className="absolute inset-0 z-0">
    <img
      src={aboutBanner}
      alt="Bharat Designer Show"
      className="hero-image h-full w-full object-cover opacity-70"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
  </div>

  <div className="container relative z-10 mx-auto px-6 md:px-12">
    <div className="max-w-4xl">
      <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.8em] text-[#D4AF37] opacity-80">
        The Heritage Project
      </h4>

      <h1 className="mb-6 text-6xl font-bold uppercase leading-none tracking-tighter md:text-9xl">
        ABOUT <br />
        <span
          className="italic text-transparent"
          style={{ WebkitTextStroke: "1px white" }}
        >
          BHARAT
        </span>
      </h1>
    </div>
  </div>
</section>

{/* --- Founder: Sharad Chaudhary --- */}
<section className="relative overflow-hidden border-t border-white/10 bg-[#000] px-6 py-20 text-white md:px-12 md:py-28">
  <div className="container mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
    {/* Founder photo: second on mobile, first on desktop */}
    <div className="reveal-text order-2 relative mx-auto w-full max-w-md md:order-none">
      <div className="absolute -inset-3 border border-[#D4AF37]/40" />
      <img
        src={sharadPhoto}
        alt="Sharad Chaudhary, Founder of Bharat Designer Show"
        className="relative aspect-[4/5] w-full object-cover"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-6 pb-6 pt-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37]">
          Founder
        </p>
        <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight">
          Sharad Chaudhary
        </h3>
      </div>
    </div>

    {/* Story: first on mobile, second on desktop */}
    <div className="reveal-text order-1 md:order-none">
      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.5em] text-[#D4AF37]">
        Our Story
      </p>

      <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tighter md:text-6xl">
        A vision brought
        <br />
        <span className="font-light italic text-[#D4AF37]">to the runway.</span>
      </h2>

      <div className="my-7 h-px w-16 bg-[#D4AF37]" />

      <div className="space-y-5 text-sm font-light leading-7 text-white/60 md:text-base">
        <p>
          Bharat Designer Show began with a vision to bring Indian fashion and
          creativity together on one stage. Founded by Sharad Chaudhary, the
          show provides a platform for designers to present their collections
          and creative ideas.
        </p>

        <p>
          Inspired by India’s rich design heritage and evolving style, Bharat
          Designer Show celebrates the craftsmanship, people, and stories
          behind fashion. It brings traditional influences and contemporary
          expression together through its showcases.
        </p>

        <p>
          That vision continues today: to celebrate Indian designers and the
          creativity shaping the future of Indian fashion.
        </p>
      </div>
    </div>
  </div>
</section>





  {/* --- 3. The Visionaries: Leadership Section --- */}
<section className="py-24 bg-black text-white overflow-hidden">
  <div className="container mx-auto px-6 md:px-12">
    
    {/* Section Header */}
    <div className="mb-16 md:mb-24">
      <h4 className="text-[#D4AF37] text-[10px] uppercase tracking-[0.6em] font-bold mb-4">
        Behind the Lens
      </h4>
      <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
        THE <span className="italic font-light text-transparent" style={{ WebkitTextStroke: '1px white' }}>DIRECTORS</span>
      </h2>
    </div>

    {/* Directors Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
      
      {/* Director 1 */}
      <div className="group reveal-text">
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5 mb-6">
          <img 
            src="/src/assets/images/members/shard.jpg" 
            alt="Director Name" 
            className="w-full h-full object-cover  group-hover:scale-105 transition-all duration-700 ease-out"
          />
          {/* Subtle Golden Overlay on Hover */}
          <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        
        <div className="space-y-1">
          <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold">Founder</p>
          <h3 className="text-2xl font-bold uppercase tracking-tight">SHARAD CHAUDHARY</h3>
        </div>
      </div>

      {/* Director 2 */}
      <div className="group reveal-text md:translate-y-12">
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5 mb-6">
          <img 
            src="/src/assets/images/members/anubala.jpg" 
            alt="Director Name" 
            className="w-full h-full object-cover  group-hover:scale-105 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        
        <div className="space-y-1">
          <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold">Creative Director</p>
          <h3 className="text-2xl font-bold uppercase tracking-tight">ANUBHA VASHISHT CHAUDHARY</h3>
        </div>
      </div>

      {/* Director 3 (Optional) */}
      <div className="group reveal-text">
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5 mb-6">
          <img 
            src="/src/assets/images/members/ajay (2).jpg" 
            alt="Director Name" 
            className="w-full h-full object-cover  group-hover:scale-105 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        
        <div className="space-y-1">
          <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold"> Director</p>
          <h3 className="text-2xl font-bold uppercase tracking-tight">AJAY CHAUDHARY</h3>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="bg-[#090909] px-6 py-20 text-white md:px-12 md:py-28">
  <div className="container mx-auto max-w-7xl">
    {/* Heading */}
    <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
      <div>
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37]">
          The world of Bharat Designer Show
        </p>

        <h2 className="font-serif text-4xl uppercase leading-tight tracking-tight md:text-6xl">
          Fashion,{" "}
          <span className="font-light italic text-[#D4AF37]">in motion.</span>
        </h2>
      </div>

      <p className="max-w-sm text-sm leading-6 text-white/55">
        Discover the experiences bringing Indian fashion to life.
      </p>
    </div>

    {/* Services */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          number: "01",
          title: "Fashion Shows",
          tag: "The Runway",
          image:
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
        },
        {
          number: "02",
          title: "Designer Showcase",
          tag: "The Designers",
          image:
            "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=1000&q=85",
        },
        {
          number: "03",
          title: "Fashion Events",
          tag: "The Experience",
          image:
            "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85",
        },
        {
          number: "04",
          title: "Model Opportunities",
          tag: "The Faces",
          image:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85",
        },
        {
          number: "05",
          title: "Brand Collaborations",
          tag: "The Partners",
          image:
            "https://images.unsplash.com/photo-1523726491678-bf852e717f6b?auto=format&fit=crop&w=1000&q=85",
        },
        {
          number: "06",
          title: "Fashion Promotion",
          tag: "The Spotlight",
          image:
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85",
        },
      ].map((service) => (
        <article
          key={service.number}
          className="group relative min-h-[320px] overflow-hidden border border-white/10 bg-[#151515] md:min-h-[380px]"
        >
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-75"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="relative flex min-h-[320px] flex-col justify-between p-6 md:min-h-[380px] md:p-7">
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-[0.2em] text-[#D4AF37]">
                {service.number}
              </span>
              <span className="text-lg text-white/70 transition group-hover:text-[#D4AF37]">
                ↗
              </span>
            </div>

            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                {service.tag}
              </p>
              <h3 className="font-serif text-2xl uppercase leading-tight md:text-3xl">
                {service.title}
              </h3>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      </main>
    </>
  );
}

export default AboutPage;