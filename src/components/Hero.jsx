import React, { useState, useEffect } from 'react';

// ഇമേജുകൾ
import banner1 from '../assets/images/banner/230A1943.JPG'; 
import banner2 from '../assets/images/banner/_Y7A7269.JPG'; 
import banner3 from '../assets/images/banner/230A1213.JPG';
import banner4 from '../assets/images/banner/_Y7A7025.JPG'; 
import banner5 from '../assets/images/banner/230A2993.JPG'; 
import banner6 from '../assets/images/banner/_Y7A7611.JPG'; 

const images = [banner1, banner2, banner3, banner4, banner5, banner6];

function CinematicHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#050505] overflow-hidden flex items-end justify-center pb-24 md:pb-32">
      
      {/* LAYER 1: BACK TEXT (BDS) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none opacity-5">
        <h1 className="text-[25vw] font-black text-white uppercase tracking-tighter leading-none">
          BDS
        </h1>
      </div>

      {/* LAYER 2: IMAGE SLIDER */}
      <div className="absolute inset-0 z-10">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${
              i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img 
              src={img} 
              className="w-full h-full object-cover brightness-[1.2] contrast-[1.05]" 
              alt={`Bharat Designer Show - ${i}`} 
            />
            
            {/* താഴെയുള്ള അക്ഷരങ്ങൾ തെളിയാൻ വേണ്ടിയുള്ള ഒരു ചെറിയ ഡാർക്ക് ഗ്രേഡിയന്റ് */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      <div className="relative z-20 flex flex-col items-center text-center w-full px-4 text-white">
        
        <h1 className="text-[12vw] md:text-[8vw] font-black leading-[0.9] tracking-tighter uppercase text-white/90 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
          BHARAT
        </h1>
        
        <h1 
          className="text-[12vw] md:text-[8vw] font-black leading-[0.9] tracking-tighter uppercase text-transparent"
          style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.7)' }}
        >
          DESIGNER
        </h1>
        
        <p className="mt-6 text-[#D4AF37] text-xl md:text-2xl font-light tracking-[0.5em] uppercase opacity-90 drop-shadow-lg">
            Coming Soon
        </p>
      </div>

    </section>
  );
}

export default CinematicHero;