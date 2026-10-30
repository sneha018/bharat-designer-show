import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Meta from '../components/Meta.jsx';
import designersBanner from "../assets/images/Image-329.jpg";

// --- Component ---
function DesignersPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-title", { opacity: 0, y: 30, duration: 1, ease: 'power3.out', delay: 0.3 });
      gsap.from(".placeholder-text", { opacity: 0, y: 50, duration: 1, ease: 'power3.out', delay: 0.6 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Meta
        title="Our Visionaries | Bharat Designer Show"
        description="Meet the celebrated designers showcasing at the Bharat Designer Show."
      />

      <main ref={containerRef} className="min-h-screen bg-black text-white">

        {/* 🔥 HERO SECTION */}
       {/* 🔥 HERO SECTION - ഇമേജ് പാത്ത് അപ്ഡേറ്റ് ചെയ്തത് */}
<section className="hero-section relative h-[80vh] w-full overflow-hidden flex items-end pb-20">
  
  <div className="absolute inset-0 z-0">
    <img 
      /* ഇമേജ് പാത്ത് കൃത്യമായി താഴെ നൽകിയിരിക്കുന്നു */
      src="/src/assets/images/banner/stylish-young-couple-sharing-joy-fashion-modern-studio-setting.jpg" 
      alt="Designers Banner" 
      className="w-full h-full object-cover opacity-100" // ഓപ്പസിറ്റി 100% ആക്കി
    />
    
    {/* ടെക്സ്റ്റ് റീഡബിലിറ്റിക്ക് വേണ്ടി മാത്രം താഴെ ചെറിയൊരു ഷേഡ് */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
  </div>

  <div className="container mx-auto px-6 md:px-12 relative z-10">
    <div className="max-w-4xl">
      <h4 className="text-[#D4AF37] text-[10px] uppercase tracking-[0.8em] font-bold mb-4 opacity-90 drop-shadow-md">
        Creative Visionaries
      </h4>

      <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-4 drop-shadow-xl">
        OUR <br />
        <span className="text-transparent italic font-light" style={{ WebkitTextStroke: '1px white' }}>
          DESIGNERS
        </span>
      </h1>
    </div>
  </div>
</section>
       {/* --- 4. The Visionaries: Featured Designers --- */}
<section className="py-24 bg-black text-white border-t border-white/5">
  <div className="container mx-auto px-6 md:px-12">
    
    {/* Section Header */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div className="reveal-text">
        <h4 className="text-[#D4AF37] text-[10px] uppercase tracking-[0.6em] font-bold mb-4">
          Masterminds
        </h4>
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
          FEATURED <br />
          <span className="italic font-light text-transparent" style={{ WebkitTextStroke: '1px white' }}>DESIGNERS</span>
        </h2>
      </div>
      <p className="max-w-xs text-gray-500 text-[10px] uppercase tracking-widest leading-relaxed">
        Discover the creative souls who redefine the boundaries of Indian fashion through their visionary labels.
      </p>
    </div>

    {/* Designers Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
      
      {/* Designer Card 1 */}
      <div className="group cursor-pointer">
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-4">
          <img 
            src="/src/assets/images/designer-1.jpg" // നിന്റെ ഇമേജ് പാത്ത് നൽകുക
            alt="Designer Name" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
          {/* Overlay with Brand Name on Hover */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold border border-[#D4AF37] px-4 py-2">
               View Profile
             </span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-sm md:text-lg font-bold uppercase tracking-tight">Designer Name</h3>
          <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest mt-1">Couture Label</p>
        </div>
      </div>

      {/* Designer Card 2 */}
      <div className="group cursor-pointer">
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-4">
          <img 
            src="/src/assets/images/designer-2.jpg" 
            alt="Designer Name" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold border border-[#D4AF37] px-4 py-2">
               View Profile
             </span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-sm md:text-lg font-bold uppercase tracking-tight">Label Name</h3>
          <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest mt-1">Ethic Wear</p>
        </div>
      </div>

      {/* Designer Card 3 */}
      <div className="group cursor-pointer">
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-4">
          <img 
            src="/src/assets/images/designer-3.jpg" 
            alt="Designer Name" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold border border-[#D4AF37] px-4 py-2">
               View Profile
             </span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-sm md:text-lg font-bold uppercase tracking-tight">Designer Name</h3>
          <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest mt-1">Luxury Avant-Garde</p>
        </div>
      </div>

      {/* Designer Card 4 */}
      <div className="group cursor-pointer">
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-4">
          <img 
            src="/src/assets/images/designer-4.jpg" 
            alt="Designer Name" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold border border-[#D4AF37] px-4 py-2">
               View Profile
             </span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-sm md:text-lg font-bold uppercase tracking-tight">Label Name</h3>
          <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest mt-1">Modern Traditional</p>
        </div>
      </div>
{/* Designer Card 5 */}
<div className="group cursor-pointer">
  <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-4">
    <img 
      src="/src/assets/images/designer-5.jpg" 
      alt="Designer Name" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
    />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
       <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold border border-[#D4AF37] px-4 py-2">
         View Profile
       </span>
    </div>
  </div>
  <div className="text-center">
    <h3 className="text-sm md:text-lg font-bold uppercase tracking-tight">Designer Name</h3>
    <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest mt-1">Contemporary Couture</p>
  </div>
</div>

{/* Designer Card 6 */}
<div className="group cursor-pointer">
  <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-4">
    <img 
      src="/src/assets/images/designer-6.jpg" 
      alt="Designer Name" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
    />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
       <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold border border-[#D4AF37] px-4 py-2">
         View Profile
       </span>
    </div>
  </div>
  <div className="text-center">
    <h3 className="text-sm md:text-lg font-bold uppercase tracking-tight">Label Name</h3>
    <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest mt-1">Luxury Fusion</p>
  </div>
</div>

{/* Designer Card 7 */}
<div className="group cursor-pointer">
  <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-4">
    <img 
      src="/src/assets/images/designer-7.jpg" 
      alt="Designer Name" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
    />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
       <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold border border-[#D4AF37] px-4 py-2">
         View Profile
       </span>
    </div>
  </div>
  <div className="text-center">
    <h3 className="text-sm md:text-lg font-bold uppercase tracking-tight">Designer Name</h3>
    <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest mt-1">Avant-Garde Studio</p>
  </div>
</div>

{/* Designer Card 8 */}
<div className="group cursor-pointer">
  <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-4">
    <img 
      src="/src/assets/images/designer-8.jpg" 
      alt="Designer Name" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
    />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
       <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold border border-[#D4AF37] px-4 py-2">
         View Profile
       </span>
    </div>
  </div>
  <div className="text-center">
    <h3 className="text-sm md:text-lg font-bold uppercase tracking-tight">Label Name</h3>
    <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest mt-1">Signature Line</p>
  </div>
</div>
    </div>

    {/* View All Button */}
    <div className="mt-20 text-center">
       <a href="/designers" className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-400 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-4 group">
          See All Masterminds 
          <span className="group-hover:translate-x-2 transition-transform">→</span>
       </a>
    </div>

  </div>
</section>

      </main>
    </>
  );
}

export default DesignersPage;