import React from "react";
import Meta from "../components/Meta.jsx";

const services = [
  {
    number: "01",
    title: "Runway Hair",
    description:
      "Hair styling created to complement each designer’s collection and runway look.",
    image: "/images/hair-makeup/runway-hair.jpg",
  },
  {
    number: "02",
    title: "Fashion Makeup",
    description:
      "Camera-ready makeup looks designed for the runway, backstage, and editorial shoots.",
    image: "/images/hair-makeup/fashion-makeup.jpg",
  },
  {
    number: "03",
    title: "Creative Styling",
    description:
      "Distinctive hair and makeup concepts developed to bring fashion stories to life.",
    image: "/images/hair-makeup/creative-styling.jpg",
  },
];

export default function HairAndMakeupPage() {
  return (
    <>
      <Meta
        title="Hair and Makeup | Bharat Designer Show"
        description="Explore hair and makeup artistry at Bharat Designer Show."
      />

      <main className="min-h-screen bg-black text-white">
        {/* Hero banner */}
        <section className="relative flex min-h-[65vh] items-end overflow-hidden px-6 pb-12 pt-28 sm:px-10 md:min-h-[75vh] md:px-16 md:pb-16">
          <img
            src="/images/hair-makeup/hair-makeup-banner.jpg"
            alt="Hair and makeup artistry at Bharat Designer Show"
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
              Bharat Designer Show / Artistry
            </p>

            <h1 className="text-5xl font-bold uppercase leading-none tracking-tight sm:text-7xl md:text-8xl">
              Hair
              <br />
              <span
                className="font-light italic text-transparent"
                style={{ WebkitTextStroke: "1px white" }}
              >
                &amp; Makeup
              </span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/65">
              The details, artistry, and creative vision behind every runway
              look.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="border-b border-white/10 px-6 py-12 sm:px-10 md:px-16 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
                The finishing touch
              </p>
              <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-5xl">
                Artistry in every look
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-white/55 md:justify-self-end">
              Hair and makeup help bring a designer’s vision together. From
              initial concept to runway-ready finish, every look is considered
              as part of the complete collection.
            </p>
          </div>
        </section>

        {/* Equal-size service cards: two columns */}
  <section className="px-6 py-14 sm:px-10 md:px-16 md:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-8 border-b border-white/15 pb-5">
      <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">
        Our craft
      </p>
      <h2 className="text-3xl font-semibold uppercase sm:text-5xl">
        Hair &amp; Makeup Artistry
      </h2>
    </div>

    <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
      {services.map((service) => (
        <article
          key={service.number}
          className="group relative aspect-[4/3] min-w-0 overflow-hidden bg-zinc-900"
        >
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />

          <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] text-xs text-[#D4AF37]">
            {service.number}
          </span>

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <h3 className="text-xl font-semibold uppercase sm:text-2xl">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/65">
              {service.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


        {/* Contact call-to-action */}
        <section className="border-t border-white/10 bg-[#0a0a0a] px-6 py-12 text-center sm:px-10 md:px-16">
          <p className="text-sm text-white/55">
            Want to collaborate with our team?
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] transition hover:text-white"
          >
            Contact us <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
    </>
  );
}
