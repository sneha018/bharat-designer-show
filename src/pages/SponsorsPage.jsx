import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Meta from '../components/Meta.jsx';
import g1 from '../assets/videos/g1.mp4';

const partners = [
  { tier: "Title Partner", name: "TRINITY BUILDERS", type: "Luxury Real Estate" },
  { tier: "Powered By", name: "ZARA LUXE", type: "Apparel & Style" },
  { tier: "Media Partner", name: "VOGUE INDIA", type: "Fashion Media" },
  { tier: "Lifestyle Partner", name: "ROLEX", type: "Premium Watches" }
];

function SponsorsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Title Animation
      gsap.from(".main-title span", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out"
      });

      // Reveal partner cards on scroll
      const cards = gsap.utils.toArray(".partner-card");
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Meta title="Partners | Bharat Designer Show" description="Our Prestigious Partners" />
      
      <main ref={containerRef} className="bg-[#050505] text-white min-h-screen">
        
        {/* --- Hero Section --- */}
      <section className="relative h-[70vh] flex items-end pb-20 overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover opacity-40">
            <source src={g1} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          
          <div className="container mx-auto px-8 md:px-16 relative z-10">
            <h4 className="b-sub text-[#D4AF37] uppercase tracking-[0.6em] text-[10px] mb-6 font-bold">The Collaborators</h4>
            <div className="b-title">
              <h1 className="text-7xl md:text-[10rem] font-bold uppercase tracking-tighter leading-[0.8]">THE</h1>
              <h1 className="text-7xl md:text-[10rem] font-bold uppercase tracking-tighter leading-[0.8] text-transparent" 
                  style={{ WebkitTextStroke: '1px rgba(212, 175, 55, 0.5)' }}>PARTNERS</h1>
            </div>
          </div>
        </section>

        {/* --- Exclusive Partner Cards --- */}
        <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto space-y-24">
          {partners.map((item, index) => (
            <div key={index} className="partner-card group flex flex-col md:flex-row items-center gap-12 border-b border-white/5 pb-20 last:border-0">
              
              {/* Image Area */}
              <div className="w-full md:w-1/2 aspect-video bg-zinc-900 relative overflow-hidden group-hover:border-[#D4AF37]/30 border border-white/5 transition-all duration-700">
                <div className="absolute inset-0 flex items-center justify-center text-gray-700 uppercase tracking-widest text-xs italic">
                  {item.name} LOGO
                </div>
                <div className="absolute inset-0 bg-[#D4AF37]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
              </div>

              {/* Info Area */}
              <div className="w-full md:w-1/2 space-y-6">
                <p className="text-[#D4AF37] font-mono text-[10px] uppercase tracking-[0.4em]">{item.tier}</p>
                <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tight">{item.name}</h2>
                <p className="text-gray-500 tracking-widest text-xs uppercase">{item.type}</p>
                <div className="pt-6">
                   <button className="text-[10px] uppercase tracking-[0.3em] border-b border-[#D4AF37] pb-2 text-[#D4AF37] hover:text-white hover:border-white transition-all">
                     View Collaboration
                   </button>
                </div>
              </div>

            </div>
          ))}
        </section>

        {/* --- Bottom CTA --- */}
        <section className="py-32 text-center">
           <div className="inline-block relative">
              <h2 className="text-4xl md:text-6xl font-serif italic mb-10">Scale your brand with us.</h2>
              <button className="px-12 py-4 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-[0.5em] hover:invert transition-all">
                Join the Show
              </button>
           </div>
        </section>

      </main>
    </>
  );
}

export default SponsorsPage;