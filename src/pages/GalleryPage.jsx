import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Meta from '../components/Meta.jsx';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Keyboard } from 'swiper/modules';

// --- Import Videos ---
import g1 from '../assets/videos/g1.mp4';
import g2 from '../assets/videos/g2.mp4';
import g3 from '../assets/videos/g3.mp4';
import g4 from '../assets/videos/g4.mp4';
import g5 from '../assets/videos/g5.mp4';
import g6 from '../assets/videos/g6.mp4';
import g7 from '../assets/videos/g7.mp4';
import g8 from '../assets/videos/g8.mp4';
import g9 from '../assets/videos/g9.mp4';
// Season 1 Imports
import s1_img1 from '../assets/images/season1/_Y7A7025.JPG';
import s1_img2 from '../assets/images/season1/230A1210.JPG';
import s1_img3 from '../assets/images/season1/230A1263 (3).jpg';
import s1_img4 from '../assets/images/season1/_Y7A7015.JPG';
import s1_img5 from '../assets/images/season1/_Y7A7268.JPG';
import s1_img6 from '../assets/images/season1/_Y7A7363.JPG';
import s1_img7 from '../assets/images/season1/_Y7A7665.JPG';
import s1_img8 from '../assets/images/season1/_Y7A7597.JPG';
import s1_img9 from '../assets/images/season1/_Y7A7433 (1).JPG';
import s1_img10 from '../assets/images/season1/230A2372.JPG';
import s1_img11 from '../assets/images/season1/230A2588.JPG';
import s1_img12 from '../assets/images/season1/230A3021.jpg';
import s1_img13 from '../assets/images/season1/230A2449.JPG';
import s1_img14 from '../assets/images/season1/230A2503.JPG';
import s1_img15 from '../assets/images/season1/230A3034.JPG';
import s1_img16 from '../assets/images/season1/230A2305.JPG';



import ramp_img1 from "../assets/images/ramp/ramp1.jpg";
import ramp_img2 from "../assets/images/ramp/ramp2.jpg";
import ramp_img3 from "../assets/images/ramp/ramp3.jpg";
import ramp_img4 from "../assets/images/ramp/ramp4.jpg";
import ramp_img5 from "../assets/images/ramp/ramp5.jpg";
import ramp_img6 from "../assets/images/ramp/ram6.jpg";
import ramp_img7 from "../assets/images/ramp/ramp7.jpg";
import ramp_img8 from "../assets/images/ramp/ramp8.jpg";
import ramp_img9 from "../assets/images/ramp/ramp9.jpg";
import ramp_img10 from "../assets/images/ramp/ramp10.jpg";
import ramp_img11 from "../assets/images/ramp/ramp11.jpg";
import ramp_img12 from "../assets/images/ramp/ramp12.jpg";
import ramp_img13 from "../assets/images/ramp/ramp13.jpg";
import ramp_img14 from "../assets/images/ramp/ramp14.jpg";
import ramp_img15 from "../assets/images/ramp/ramp15.jpg";
import ramp_img16 from "../assets/images/ramp/ramp16.jpg";
import ramp_img17 from "../assets/images/ramp/ramp17.jpg";
import ramp_img18 from "../assets/images/ramp/ramp18.jpg";
import ramp_img19 from "../assets/images/ramp/ramp19.jpg";
import ramp_img20 from "../assets/images/ramp/ramp20.jpg";






// Season 2 Imports
import s2_img1 from '../assets/images/season2/IMG_5315 (1).JPG';
import s2_img2 from '../assets/images/season2/IMG_5236.JPG';
import s2_img3 from '../assets/images/season2/IMG_5330.JPG';
import s2_img4 from '../assets/images/season2/IMG_5229.JPG';
import s2_img5 from '../assets/images/season2/IMG_5316.JPG';
import s2_img6 from '../assets/images/season2/IMG_5145.JPG';






// import img1 from '../assets/images/img1.jpg';

const galleryVideos = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

const seasonOneImages = [
  { id: 1, src: s1_img1, span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: s1_img2, span: "md:col-span-1 md:row-span-1" },
  { id: 3, src: s1_img3, span: "md:col-span-1 md:row-span-2" },
  { id: 4, src: s1_img4, span: "md:col-span-1 md:row-span-1" },
  { id: 5, src: s1_img5 },
    { id: 6, src: s1_img6 },
{ id: 7, src: s1_img7 },
{ id: 8, src: s1_img8 },
{ id: 9, src: s1_img9 },
{ id: 10, src: s1_img10 },
{ id: 11, src: s1_img11 },
{ id: 12, src: s1_img12 },
{ id: 13, src: s1_img13 },
{ id: 14, src: s1_img14 },
{ id: 15, src: s1_img15 },
{ id: 16, src: s1_img16 },






];

const seasonTwoImages = [
  { id: 1, src: s2_img1, span: "md:col-span-1 md:row-span-1" },
  { id: 2, src: s2_img2, span: "md:col-span-2 md:row-span-2" },
  { id: 3, src: s2_img3, span: "md:col-span-1 md:row-span-1" },
  { id: 4, src: s2_img4 },
    { id: 5, src: s2_img5 },
        { id: 6, src: s2_img6 },



  // Add more as needed based on your assets folder
];
// const galleryImages = [
//   { id: 1, src: "https://images.unsplash.com/photo-1539109132314-34a916552896?q=80&w=1000", span: "md:col-span-2 md:row-span-2" },
//   { id: 2, src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000", span: "md:col-span-1 md:row-span-1" },
//   { id: 3, src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000", span: "md:col-span-1 md:row-span-2" },
//   { id: 4, src: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1000", span: "md:col-span-1 md:row-span-1" },
//   { id: 5, src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000", span: "md:col-span-2 md:row-span-1" },
// ];

function GalleryPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Banner Content Animations
      const tl = gsap.timeline();
      tl.from(".b-sub", { opacity: 0, x: -20, duration: 0.8, ease: "power2.out" })
        .from(".b-title", { opacity: 0, y: 30, duration: 1, ease: "power3.out" }, "-=0.4")
        .from(".b-line", { scaleY: 0, transformOrigin: "top", duration: 0.8 }, "-=0.5");

      // Swiper Fade-in
      gsap.from(".swiper-section", {
        opacity: 0, y: 50, duration: 1, ease: 'power3.out', delay: 1
      });

      // Image Grid Scroll Animation
      gsap.from(".reveal-img", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".image-grid-section",
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Meta
        title="Event Gallery | Bharat Designer Show"
        description="Explore the official gallery of the Bharat Designer Show."
      />
      <main ref={containerRef} className="min-h-screen bg-black overflow-hidden text-white">
        
        {/* --- Dynamic Video Banner --- */}
        <section className="relative h-[70vh] md:h-[85vh] flex items-end pb-20 overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover opacity-60">
            <source src={g1} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>

          <div className="container mx-auto px-8 md:px-16 relative z-10">
            <h4 className="b-sub text-[#D4AF37] uppercase tracking-[0.6em] text-[10px] md:text-xs mb-4 font-bold">Creative Visionaries</h4>
            <div className="b-title">
              <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.85]">EVENT</h1>
              <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.85] text-transparent" 
                  style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>GALLERY</h1>
            </div>
            <div className="b-line h-16 w-[1px] bg-[#D4AF37] mt-8 ml-2"></div>
          </div>
        </section>

        {/* --- Swiper Section --- */}
        {/* <div className="container mx-auto px-8 md:px-16 mt-24 mb-12">
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight">
              Runway <span className="italic font-serif text-[#D4AF37]">Highlights</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mt-4"></div>
        </div>
        
        <div className="swiper-section gallery-coverflow-container pb-24 px-4">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
            pagination={{ clickable: true }}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            keyboard={{ enabled: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
            className="mySwiper"
          >
            {galleryVideos.map((videoSrc, index) => (
              <SwiperSlide key={index}>
                <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-sm">
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev" aria-label="Previous slide"></div>
            <div className="swiper-button-next" aria-label="Next slide"></div>
          </Swiper>
        </div> */}

<section className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-10 lg:px-16">
  <div className="mb-8">
    <p className="text-xs uppercase tracking-[0.4em] text-[#c7a45b]">
      Season Two · Behind the runway
    </p>

    <h3 className="mt-3 font-serif text-3xl uppercase sm:text-4xl">
      Head Ramp Photos
    </h3>
  </div>

  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
    <img src={ramp_img1} alt="Head ramp photo 1" className="aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={ramp_img2} alt="Head ramp photo 2" className="aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={ramp_img3} alt="Head ramp photo 3" className="aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={ramp_img4} alt="Head ramp photo 4" className="aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={ramp_img5} alt="Head ramp photo 5" className="aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={ramp_img6} alt="Head ramp photo 6" className="aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={ramp_img7} alt="Head ramp photo 7" className="aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={ramp_img8} alt="Head ramp photo 8" className="aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={ramp_img9} alt="Head ramp photo 9" className="aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={ramp_img10} alt="Head ramp photo 10" className="aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={ramp_img11} alt="Head ramp photo 11" className="aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={ramp_img12} alt="Head ramp photo 12" className="aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={ramp_img13} alt="Head ramp photo 13" className="aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={ramp_img14} alt="Head ramp photo 14" className="aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={ramp_img15} alt="Head ramp photo 15" className="aspect-[3/4] w-full object-cover" loading="lazy" />
<img src={ramp_img16} alt="Head ramp photo 16" className="aspect-[3/4] w-full object-cover" loading="lazy" />
<img src={ramp_img17} alt="Head ramp photo 17" className="aspect-[3/4] w-full object-cover" loading="lazy" />
<img src={ramp_img18} alt="Head ramp photo 18" className="aspect-[3/4] w-full object-cover" loading="lazy" />
<img src={ramp_img19} alt="Head ramp photo 19" className="aspect-[3/4] w-full object-cover" loading="lazy" />
<img src={ramp_img20} alt="Head ramp photo 20" className="aspect-[3/4] w-full object-cover" loading="lazy" />
  </div>
</section>





</main>
    </>
  );
}

export default GalleryPage;