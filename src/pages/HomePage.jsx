import React from 'react';
import Meta from '../components/Meta.jsx';
import Hero from '../components/Hero.jsx';
import OrganisedBy from '../components/OrganisedBy.jsx';
import SponsorCarousel from '../components/SponsorCarousel.jsx';
import SaveTheDate from '../components/SaveTheDate.jsx';
import dreamzLogo from '/src/assets/images/dreamz_logo.jpg';
import runwayImage from "/src/assets/images/season1/230A2395.JPG";
import detailImage from "/src/assets/images/season1/230A1335.JPG";
import eventGuestsImg from "/src/assets/images/season2/_Y7A7433 (1)-Bqr7O4fP.JPG";

const seasonsData = [
  {
    title: "Season 01",
    year: "2024",
    image: "/src/assets/images/season1/_Y7A7025.JPG", 
    location: "Kochi"
  },
  {
    title: "Season 02",
    year: "2025",
    image: "/src/assets/images/season2/IMG_5236.JPG", 
    location: "Dubai"
  },
  {
    title: "Season 03",
    year: "2026",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800",
    location: "Mumbai"
  }

  
];

const testimonialList = [
  {
    name: "Ananya Sharma",
    role: "Visionary Creator",
    quote: "Bharat Designer Show is not just a stage; it is a cultural movement. It’s where our heritage breathes through every thread of modern couture.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600"
  },
  {
    name: "Vikram Mehta",
    role: "Couture Specialist",
    quote: "The energy and the attention to detail at this show are unmatched. It provides the perfect bridge between tradition and global trends.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600"
  }
];


function HomePage() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialList.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialList.length) % testimonialList.length);
  };

  const current = testimonialList[currentIndex];

  return (
    <>
      <Meta 
        title="Bharat Designer Show | The Pinnacle of Indian Fashion"
        description="Experience the fusion of heritage and avant-garde at the Bharat Designer Show."
      />
      
      <Hero />

<section
  className="relative border-y border-white/5 bg-[#020202] px-5 py-20 text-white md:px-8 md:py-28 overflow-hidden"
  aria-label="Official organiser"
>
  {/* ═══ BACKGROUND FASHION LAYERS ═══ */}
  <div className="pointer-events-none absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/6 blur-[140px] animate-[breathe_8s_ease-in-out_infinite]" />
  <div className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/4 blur-[120px] animate-[breathe_10s_ease-in-out_infinite_2s]" />

  {/* Faint watermark */}
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
    <span className="text-[18vw] font-serif italic text-white/[0.015] whitespace-nowrap animate-[watermarkShift_25s_ease-in-out_infinite]">
      Dreamz
    </span>
  </div>

  {/* Corner brackets */}
  <div className="pointer-events-none absolute top-6 left-6 w-8 h-8 border-l border-t border-[#D4AF37]/40" />
  <div className="pointer-events-none absolute top-6 right-6 w-8 h-8 border-r border-t border-[#D4AF37]/40" />
  <div className="pointer-events-none absolute bottom-6 left-6 w-8 h-8 border-l border-b border-[#D4AF37]/40" />
  <div className="pointer-events-none absolute bottom-6 right-6 w-8 h-8 border-r border-b border-[#D4AF37]/40" />

  <style>{`
    @keyframes dz-spin { to { transform: rotate(360deg); } }
    @keyframes spinReverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
    @keyframes breathe {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50%      { opacity: 1;   transform: scale(1.2); }
    }
    @keyframes watermarkShift {
      0%, 100% { transform: translateX(0); }
      50%      { transform: translateX(-20px); }
    }
    @keyframes logoFloat {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-5px); }
    }
    @keyframes sparkle {
      0%, 100% { opacity: 0.4; transform: scale(0.8) rotate(0); }
      50%      { opacity: 1;   transform: scale(1.3) rotate(180deg); }
    }
    @keyframes diamondPulse {
      0%, 100% { box-shadow: 0 0 8px rgba(212,175,55,0.6); }
      50%      { box-shadow: 0 0 18px rgba(212,175,55,1); }
    }
    @keyframes ping {
      0%, 100% { transform: scale(1); opacity: 1; }
      50%      { transform: scale(1.5); opacity: 0.5; }
    }
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes shineSweep {
      0%   { transform: translateX(-150%) skewX(-12deg); }
      50%  { transform: translateX(150%) skewX(-12deg); }
      100% { transform: translateX(150%) skewX(-12deg); }
    }
    .shimmer-gold {
      background: linear-gradient(100deg, #D4AF37 0%, #f4e4a1 40%, #D4AF37 60%, #f4e4a1 80%, #D4AF37 100%);
      background-size: 200% auto;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shimmer 5s linear infinite;
    }
    @media (prefers-reduced-motion: reduce) {
      * { animation: none !important; transition: none !important; }
    }
  `}</style>

  <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-14 md:flex-row md:justify-between md:gap-12">

    {/* ══════ ROTATING BADGE ══════ */}
    <div className="relative h-64 w-64 shrink-0 md:h-80 md:w-80 group">

      <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-3xl scale-110 animate-[breathe_5s_ease-in-out_infinite]" />
      <div className="absolute -inset-3 rounded-full border border-dashed border-[#D4AF37]/20 animate-[spinReverse_40s_linear_infinite]" />

      <svg
        viewBox="0 0 200 200"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        style={{ animation: 'dz-spin 24s linear infinite' }}
      >
        <defs>
          <path id="dz-circle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
        </defs>
        <text fill="#D4AF37" fontSize="13" fontWeight="700" textLength="500" lengthAdjust="spacing">
          <textPath href="#dz-circle">
            Official Organiser • Dreamz Production House • Established 2015 •
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-[16%] flex items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0b0905] overflow-hidden transition-all duration-700 group-hover:scale-105 group-hover:border-[#D4AF37]/80 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]">
        <div className="absolute inset-0 -translate-x-full animate-[shineSweep_6s_ease-in-out_infinite_2s] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
        <img
          src={dreamzLogo}
          alt="Dreamz Production House"
          className="relative h-auto w-2/3 object-contain animate-[logoFloat_5s_ease-in-out_infinite]"
        />
      </div>

      <span className="absolute -top-2 -right-2 text-[#D4AF37] text-lg animate-[sparkle_3s_ease-in-out_infinite]">✦</span>
      <span className="absolute -bottom-1 -left-2 text-[#D4AF37]/60 text-xs animate-[sparkle_4s_ease-in-out_infinite_1.5s]">✦</span>
      <span className="absolute top-1/2 -right-4 text-[#D4AF37]/40 text-xs animate-[sparkle_5s_ease-in-out_infinite_2s]">✦</span>

    </div>

    {/* ══════ TEXT ══════ */}
    <div className="text-center md:text-left flex-1 max-w-2xl">

      <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-[ping_2s_ease-in-out_infinite]" />
        <p className="text-sm md:text-base text-[#D4AF37] uppercase tracking-[0.3em] font-semibold">
          Official Organiser &amp; Production Partner
        </p>
      </div>

      <h3 className="text-4xl font-black uppercase leading-[0.92] tracking-tighter md:text-6xl">
        <span className="shimmer-gold">Dreamz</span>
        <br />
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.85)' }}
        >
          Production House
        </span>
      </h3>

      <div className="flex items-center justify-center md:justify-start gap-3 mt-5">
        <span className="h-[1px] w-10 bg-[#D4AF37]/60" />
        <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] animate-[diamondPulse_2.5s_ease-in-out_infinite]" />
        <span className="h-[1px] w-10 bg-[#D4AF37]/60" />
      </div>

      <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/65 md:mx-0">
        India's premier destination for high-fashion runway shows, national beauty pageants, celebrity management, and building stages for new talent since 2015.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2">
        {["Fashion Shows", "Beauty Pageants", "Celebrity Management"].map((tag) => (
          <span
            key={tag}
            className="group/chip relative rounded-md bg-white/5 px-3 py-1 text-xs tracking-wider uppercase text-[#D4AF37] border border-white/5 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 hover:text-white transition-all duration-300 cursor-default overflow-hidden"
          >
            <span className="absolute inset-0 -translate-x-full group-hover/chip:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
            <span className="relative">{tag}</span>
          </span>
        ))}
      </div>

      <a
        href="https://www.dreamzproductionhouse.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group/cta relative mt-8 inline-flex items-center gap-3 rounded-full border border-white/50 px-8 py-3 text-base transition-all duration-500 hover:border-[#D4AF37] hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] overflow-hidden"
      >
        <span className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />
        <span className="relative">Visit Dreamz</span>
        <svg
          className="relative w-4 h-4 transition-transform duration-500 group-hover/cta:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>

    </div>

  </div>
</section>


      {/* --- 1. About Section (Glassmorphism) --- */}

<section className="relative overflow-hidden bg-[#020202] px-5 py-16 text-white sm:px-8 sm:py-20 md:px-12 md:py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

    {/* Copy */}
    <div className="relative z-10">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#e41779]/40 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37] sm:text-[10px]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#e41779]" />
        Fashion. Friends. Celebration.
      </span>

      <h2 className="mt-7 text-5xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl">
        Come for
        <br />
        the <span className="font-serif font-normal italic text-[#e41779]">fashion.</span>
        <br />
        Stay for the feeling.
      </h2>

      <p className="mt-6 max-w-md text-sm leading-7 text-white/75 sm:mt-8 sm:text-base sm:leading-8">
        Big ideas, beautiful designs, and the joy of being together.
        Celebrate the colour and creativity of Indian fashion at Bharat
        Designer Show.
      </p>

      <a
        href="/bharat-designer-show-2025"
        className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#D4AF37] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#020202] transition hover:bg-white sm:mt-9 sm:px-7 sm:py-4"
      >
        Feel the excitement
        <span className="text-base transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>

      <p className="mt-7 text-xs text-white/55">
        A runway full of talent, stories, and happy moments.
      </p>
    </div>

    {/* Bright Photos */}
    <div className="relative mx-auto w-full max-w-lg pb-8 pl-4 sm:pl-8 lg:pl-0">
      <div className="absolute right-0 top-0 h-[88%] w-[82%] rounded-[2rem] border border-[#e41779]/60 sm:rounded-[3rem]" />

      <div className="relative z-10 mr-5 mt-5 overflow-hidden rounded-[2rem] bg-white sm:mr-8 sm:mt-8 sm:rounded-[3rem]">
        <img
          src={runwayImage}
          alt="A joyful moment on the Bharat Designer Show runway"
          className="aspect-[4/5] w-full object-cover brightness-125 contrast-105 saturate-125 transition duration-700 hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          Let the celebration begin
        </span>
      </div>

      {/* Bright Detail Image */}
      <div className="absolute bottom-0 left-0 z-20 w-28 -rotate-3 overflow-hidden rounded-2xl border-4 border-[#020202] shadow-xl sm:w-36 sm:border-[6px]">
        <img
          src={detailImage}
          alt="A vibrant designer look"
          className="aspect-square w-full object-cover brightness-125 contrast-105 saturate-125"
        />
      </div>

      <span className="absolute bottom-1 right-0 rounded-full border border-[#e41779]/60 bg-black/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D4AF37] sm:text-[10px]">
        Made to make you smile
      </span>
    </div>
  </div>
</section>



{/* --- 2. Explore Seasons Section --- */}
<section className="relative overflow-hidden bg-[#020202] py-20 text-white md:py-28">
  <div className="container mx-auto px-5 sm:px-6 md:px-12">
    {/* Heading */}
    <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
      <div>
        <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
          A look back
        </p>
        <h2 className="font-serif text-4xl leading-none sm:text-5xl md:text-6xl">
          The seasons
          <span className="text-[#D4AF37]">.</span>
        </h2>
      </div>

      <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/35 sm:block">
        Our story, in frames
      </span>
    </div>

    {/* Season feature cards */}
    <div className="grid gap-5 md:grid-cols-2 md:gap-7">
      {seasonsData.slice(0, 2).map((season, index) => (
        <a
          key={season.title ?? index}
          href="/gallery"
          className="group relative min-h-[420px] overflow-hidden rounded-2xl bg-[#111] sm:min-h-[500px]"
        >
          <img
            src={season.image}
            alt={season.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/30 px-4 py-2 text-[9px] uppercase tracking-[0.2em] backdrop-blur-sm sm:left-7 sm:top-7">
            Season {season.year}
          </span>

          <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-black/55 p-5 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                  {index === 0 ? "The beginning" : "A new chapter"}
                </p>

                <h3 className="font-serif text-3xl leading-tight sm:text-4xl">
                  {season.title}
                </h3>
              </div>

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/60 text-[#D4AF37] transition group-hover:bg-[#D4AF37] group-hover:text-black">
                ↗
              </span>
            </div>

            <div className="mt-5 h-px w-full bg-white/15">
              <div className="h-px w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

{/* --- 7. Partners & Organizers Section --- */}


    {/* --- 2. Seasons Section (Smaller Images) --- */}


{/* --- 3. Editorial Testimonial Section (Compact Image) --- */}

{/* --- 5. Social Feed: Cinema Grid Experience --- */}
<section
  className="relative overflow-hidden border-t border-white/5 bg-black py-16 text-white md:py-24"
  aria-label="The moments"
>
  <style>{`
    @keyframes mo-left {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    @keyframes mo-right {
      from { transform: translateX(-50%); }
      to { transform: translateX(0); }
    }

    .mo-row:hover .mo-track {
      animation-play-state: paused;
    }

    @media (prefers-reduced-motion: reduce) {
      .mo-row {
        overflow-x: auto !important;
      }

      .mo-track {
        animation: none !important;
      }
    }
  `}</style>

  {/* Header */}
  <div className="container mx-auto mb-10 flex flex-col gap-7 px-5 md:mb-14 md:flex-row md:items-end md:justify-between md:px-12">
   <div className="max-w-fit">
  <p className="mb-3 flex items-center gap-2.5 text-[9px] font-medium uppercase tracking-[0.22em] text-white/60 sm:mb-4 sm:text-[10px] md:text-xs">
    <span className="h-1.5 w-1.5 rounded-full bg-[#e41779]" />
    Runway moments, beautifully captured
  </p>

  <h2 className="font-serif text-4xl font-normal leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
    <span className="text-white">The </span>
    <span className="italic text-[#D4AF37]">Moments</span>
  </h2>

  <span className="mt-4 block h-px w-12 bg-[#e41779] sm:mt-5 sm:w-16" />
</div>


    <a
      href="https://www.instagram.com/bharat_designer_show/reels/"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
    >
      View full gallery
      <span className="text-[#e41779] transition-transform group-hover:translate-x-1">
        ↗
      </span>
    </a>
  </div>

  {/* Film-strip rows */}
  <div className="space-y-4">
    {[
      {
        dir: "mo-left",
        speed: "50s",
        reels: [
          { id: "DUguoa8kyyv", img: "/src/assets/images/Image-329.jpg" },
          { id: "DTZ98X-ETFy", img: "/src/assets/images/Image-752.jpg" },
          { id: "DSwwBTekbKe", img: "/src/assets/images/img000.jpg" },
          { id: "DRw_aFIjJlp", img: "/src/assets/images/Image-182.jpg" },
          { id: "DSP7N4eCRBS", img: "/src/assets/images/Image-183.jpg" },
        ],
      },
      {
        dir: "mo-right",
        speed: "60s",
        reels: [
          { id: "DP8qS-BEWbT", img: "/src/assets/images/Image-330.jpg" },
          { id: "DP8K3ExEbFZ", img: "/src/assets/images/Image-331.jpg" },
          { id: "DP8LsMgkYOQ", img: "/src/assets/images/Image-332.jpg" },
          { id: "DPLp64_EbJh", img: "/src/assets/images/Image-178.jpg" },
          { id: "DPywk1KD0wr", img: "/src/assets/images/Image-189.jpg" },
        ],
      },
    ].map((row, rowIndex) => (
      <div
        key={rowIndex}
        className="mo-row overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div
          className="mo-track relative flex w-max gap-3 bg-[#0a0a0a] py-6 md:gap-4 md:py-7"
          style={{ animation: `${row.dir} ${row.speed} linear infinite` }}
        >
          {/* Film-strip perforations */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1.5 h-2 opacity-40"
            style={{
              background:
                "repeating-linear-gradient(90deg, transparent 0 12px, #fff 12px 24px)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-1.5 h-2 opacity-40"
            style={{
              background:
                "repeating-linear-gradient(90deg, transparent 0 12px, #fff 12px 24px)",
            }}
          />

          {[0, 1, 2, 3].flatMap(() => row.reels).map((reel, index) => {
            const copyIndex = Math.floor(index / row.reels.length);

            return (
              <a
                key={`${reel.id}-${index}`}
                href={`https://www.instagram.com/reel/${reel.id}/`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch reel on Instagram"
                aria-hidden={copyIndex > 0}
                tabIndex={copyIndex > 0 ? -1 : undefined}
                className="group relative block aspect-[3/4] w-[46vw] shrink-0 overflow-hidden bg-neutral-900 sm:w-[32vw] md:w-[18vw]"
              >
                <img
                  src={reel.img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                {/* Reel icon */}
                <svg
                  className="absolute right-3 top-3 h-5 w-5 text-white/85"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>

                {/* Hover play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-black/60 backdrop-blur-md">
                    <div className="ml-1 h-0 w-0 border-b-[8px] border-l-[13px] border-t-[8px] border-b-transparent border-l-[#D4AF37] border-t-transparent" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    ))}
  </div>

  {/* View more */}
  <div className="mt-10 flex justify-center px-5 md:mt-12">
    <a
      href="https://www.instagram.com/bharat_designer_show/reels/"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-4 rounded-full bg-[#D4AF37] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-colors hover:bg-[#e6c55a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:px-8 md:py-4"
    >
      View more reels
      <span className="h-px w-6 bg-black transition-all group-hover:w-10" />
    </a>
  </div>
</section>

<section className="relative overflow-hidden bg-black px-6 py-20 text-white md:px-12 md:py-28">
  <div className="relative mx-auto max-w-7xl">
    <header className="mb-12 flex flex-col gap-4 border-b border-white/15 pb-7 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
          Voices of the evening
        </p>
        <h2 className="font-serif text-4xl font-normal leading-tight md:text-6xl">
          Moments that stay.
        </h2>
      </div>
      <p className="max-w-xs font-sans text-sm leading-6 text-white/55">
        A few words from the people who made the experience unforgettable.
      </p>
    </header>

    <div className="grid items-center gap-10 lg:grid-cols-4 lg:gap-14">
      <div className="mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none">
        <div className="group relative">
          <div className="absolute inset-0 translate-x-2 translate-y-2 border border-[#D4AF37]/50" />
          <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
            <img
              src={current.image}
              alt={current.name}
              className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>
        </div>

        <div className="mt-6 text-center lg:text-left">
          <h3 className="font-serif text-2xl">{current.name}</h3>
          <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
            {current.role}
          </p>
        </div>
      </div>

      <div className="lg:col-span-3">
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute -top-8 left-0 font-serif text-7xl leading-none text-[#e41779]/80 md:-left-2 md:-top-12 md:text-9xl"
          >
            “
          </span>

          <blockquote
            aria-live="polite"
            className="relative min-h-[180px] pt-8 font-serif text-3xl italic leading-snug text-white/90 md:min-h-[220px] md:text-5xl"
          >
            {current.quote}
          </blockquote>

          <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">
              Guest testimonial
            </span>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center border border-white/25 text-xl transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center border border-white/25 text-xl transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="register-editorial">
  <style>{`
    .register-editorial {
      position: relative;
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      min-height: 680px;
      overflow: hidden;
      background: #080808;
      color: #fff;
    }

   .register-editorial__image {
  min-height: 680px;
  background: url("/src/assets/images/season2/_Y7A7433%20(1)-Bqr7O4fP.JPG")
    center 42% / cover no-repeat;
  filter: brightness(1.1);
}


    .register-editorial__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 80px clamp(28px, 8vw, 120px);
    }

    .register-editorial__eyebrow {
      margin: 0 0 24px;
      color: #D4AF37;
      font: 600 11px/1.4 Arial, sans-serif;
      letter-spacing: 0.24em;
      text-transform: uppercase;
    }

    .register-editorial__title {
      max-width: 520px;
      margin: 0;
      font: 400 clamp(54px, 7vw, 96px)/0.9 "Cormorant Garamond", Georgia, serif;
      letter-spacing: -0.04em;
    }

    .register-editorial__title em {
      color: #e41779;
      font-weight: 400;
    }

    .register-editorial__copy {
      max-width: 360px;
      margin: 30px 0 38px;
      color: rgba(255, 255, 255, 0.68);
      font: 15px/1.8 Arial, sans-serif;
    }

    .register-editorial__link {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
      width: fit-content;
      min-width: 220px;
      padding: 17px 20px;
      border: 1px solid #D4AF37;
      color: #fff;
      font: 600 11px/1 Arial, sans-serif;
      letter-spacing: 0.16em;
      text-decoration: none;
      text-transform: uppercase;
      transition: background 180ms ease, color 180ms ease;
    }

    .register-editorial__link:hover {
      background: #D4AF37;
      color: #080808;
    }

    .register-editorial__arrow {
      color: #D4AF37;
      font-size: 20px;
      transition: transform 180ms ease;
    }

    .register-editorial__link:hover .register-editorial__arrow {
      color: #080808;
      transform: translateX(4px);
    }

    .register-editorial__note {
      margin-top: 52px;
      color: rgba(255, 255, 255, 0.38);
      font: 10px/1.5 Arial, sans-serif;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    @media (max-width: 760px) {
      .register-editorial {
        grid-template-columns: 1fr;
      }

      .register-editorial__image {
        min-height: 420px;
        background-position: center 38%;
      }

      .register-editorial__content {
        padding: 54px 26px 62px;
      }

      .register-editorial__title {
        font-size: clamp(58px, 16vw, 82px);
      }

      .register-editorial__copy {
        margin: 24px 0 30px;
      }

      .register-editorial__note {
        margin-top: 36px;
      }
    }
  `}</style>

  <div
    className="register-editorial__image"
    role="img"
    aria-label="A moment from the fashion event"
  />

  <div className="register-editorial__content">
    <p className="register-editorial__eyebrow">The next season awaits</p>
    <h2 className="register-editorial__title">
      Take your
      <br />
      place in
      <br />
      <em>the story.</em>
    </h2>
    <p className="register-editorial__copy">
      Join us for an evening of fashion, creativity, and unforgettable
      moments. Get in touch to register your interest.
    </p>
    <a className="register-editorial__link" href="/contact">
      Register via contact
      <span className="register-editorial__arrow" aria-hidden="true">→</span>
    </a>
    <p className="register-editorial__note">Limited places · By invitation</p>
  </div>
</section>




{/* --- 6. Minimalist CTA: The Future of Fashion --- */}


      {/* <OrganisedBy />  */}
      {/* <SponsorCarousel />
      <SaveTheDate /> */}
    </>
  );
}

export default HomePage;