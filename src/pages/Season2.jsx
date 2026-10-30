import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import g1 from "../assets/videos/g1.mp4";

import s2_img1 from "/src/assets/images/season2/IMG_5236.JPG";
import s2_img2 from "../assets/images/season2/IMG_5236.JPG";
import s2_img3 from "../assets/images/season2/IMG_5330.JPG";
import s2_img4 from "../assets/images/season2/IMG_5229.JPG";
import s2_img5 from "../assets/images/season2/IMG_5316.JPG";
import s2_img6 from "../assets/images/season2/IMG_5145.JPG";
import s2_img7 from "../assets/images/season2/IMAGE_7.JPG";
import s2_img8 from "../assets/images/season2/IMAGE_8.JPG";
import s2_img9 from "../assets/images/season2/IMAGE_9.JPG";



gsap.registerPlugin(ScrollTrigger);

export default function Season2() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.utils.toArray(".season-row").forEach((section) => {
        gsap.from(section.querySelectorAll(".season-photo, .season-copy"), {
          y: 35,
          opacity: 0,
          duration: 0.8,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        });
      });

      gsap.from(".gallery-photo", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".season-two-gallery",
          start: "top 85%",
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#080808] text-white"
    >
      {/* Hero */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={g1}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Fashion show runway video"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/20 to-black/20" />

        <div className="hero-copy relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 lg:px-16">
          <p className="text-xs uppercase tracking-[0.45em] text-[#c7a45b]">
            Bharat Designer Show
          </p>

          <h1 className="mt-5 font-serif text-6xl uppercase italic leading-[0.95] text-transparent [-webkit-text-stroke:1px_#d6b86d] sm:text-8xl lg:text-[9rem]">
            Season 2
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
            A celebration of Indian fashion, emerging talent, and the stories
            brought to life on the runway.
          </p>

          <a
            href="#season-two"
            className="mt-8 inline-block border border-[#c7a45b] px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#e3c579] transition hover:bg-[#c7a45b] hover:text-black"
          >
            Explore Season 2
          </a>
        </div>

        <span className="absolute bottom-8 right-6 hidden text-xs uppercase tracking-[0.3em] text-white/60 md:block">
          Scroll to explore ↓
        </span>
      </section>

      {/* Season Two */}
      <section
        id="season-two"
        className="season-row mx-auto grid max-w-7xl items-center gap-12 border-b border-[#c7a45b]/25 px-6 py-20 sm:px-10 md:grid-cols-2 lg:px-16"
      >
        <div className="season-photo relative">
          <div className="absolute -bottom-4 -right-4 h-full w-full border border-[#c7a45b]" />
          <img
            src={s2_img1}
            alt="Season Two runway collection"
            className="relative aspect-[4/3] w-full object-cover"
          />
          <span className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#e3c579]">
            Season 02 — India
          </span>
        </div>

        <div className="season-copy relative">
          <span className="pointer-events-none absolute -top-20 right-0 font-serif text-[11rem] leading-none text-white/[0.04] sm:text-[14rem]">
            02
          </span>
          <p className="relative text-xs uppercase tracking-[0.4em] text-[#c7a45b]">
            The next chapter
          </p>
          <h2 className="relative mt-4 font-serif text-4xl uppercase sm:text-6xl">
            Season Two
          </h2>
          <p className="relative mt-6 max-w-xl leading-8 text-white/65">
            The next chapter brought designers and fashion lovers together
            to celebrate craft, culture, and individual expression. Explore
            the collection and relive the runway moments.
          </p>
          <p className="relative mt-6 font-serif text-xl italic text-[#c7a45b]">
            A new season. A new vision.
          </p>
        </div>
      </section>

    <section className="season-two-gallery mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
  <div className="mb-8 flex items-end justify-between gap-4">
    <div>
      <p className="text-xs uppercase tracking-[0.4em] text-[#c7a45b]">
        Runway archive
      </p>
      <h3 className="mt-3 font-serif text-3xl uppercase sm:text-4xl">
        Season Two Looks
      </h3>
    </div>
    <span className="hidden text-xs uppercase tracking-[0.2em] text-white/40 sm:block">
      The collection · 01—06
    </span>
  </div>

  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
    {/* <img src={s2_img1} alt="Season Two look 1" className="gallery-photo aspect-[3/4] w-full object-cover" loading="lazy" /> */}
    <img src={s2_img2} alt="Season Two look 2" className="gallery-photo aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={s2_img3} alt="Season Two look 3" className="gallery-photo aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={s2_img4} alt="Season Two look 4" className="gallery-photo aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={s2_img5} alt="Season Two look 5" className="gallery-photo aspect-[3/4] w-full object-cover" loading="lazy" />
    <img src={s2_img6} alt="Season Two look 6" className="gallery-photo aspect-[3/4] w-full object-cover" loading="lazy" />
<img src={s2_img7} alt="Season Two look 7" className="gallery-photo aspect-[3/4] w-full object-cover" loading="lazy" />
<img src={s2_img8} alt="Season Two look 8" className="gallery-photo aspect-[3/4] w-full object-cover" loading="lazy" />
<img src={s2_img9} alt="Season Two look 9" className="gallery-photo aspect-[3/4] w-full object-cover" loading="lazy" />

  </div>
</section>

    </main>
  );
}
