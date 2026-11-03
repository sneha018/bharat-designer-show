import React from "react";
import Meta from "../components/Meta.jsx";

const stylists = [
  {
    name: "Stylist Name",
    role: "Runway Styling",
    image: "/images/stylists/stylist-1.jpg",
  },
  {
    name: "Stylist Name",
    role: "Creative Direction",
    image: "/images/stylists/stylist-2.jpg",
  },
  {
    name: "Stylist Name",
    role: "Fashion & Accessories",
    image: "/images/stylists/stylist-3.jpg",
  },
  {
    name: "Stylist Name",
    role: "Editorial Styling",
    image: "/images/stylists/stylist-4.jpg",
  },
];

export default function StylistsPage() {
  return (
    <>
      <Meta
        title="Stylists | Bharat Designer Show"
        description="Meet the creative team styling collections for Bharat Designer Show."
      />

      <main className="min-h-screen bg-[#090909] text-white">
        <section className="px-5 pb-12 pt-28 sm:px-10 md:px-16 md:pb-16">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">
                Bharat Designer Show / Creative team
              </p>
              <h1 className="text-5xl font-semibold uppercase leading-[0.9] sm:text-7xl md:text-8xl">
                Style in
                <br />
                <span className="font-light italic text-[#D4AF37]">
                  every detail
                </span>
              </h1>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
                The creative team behind the looks, details, and visual stories
                that bring each collection to the runway.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
              <img
                src="/images/stylists/stylists-banner.jpg"
                alt="Styling details prepared for a fashion show"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.3em] text-white/80">
                Behind the look
              </span>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-10 md:px-16 md:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-7 flex items-end justify-between border-b border-white/15 pb-4">
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
                  The creative team
                </p>
                <h2 className="text-2xl font-semibold uppercase sm:text-4xl">
                  Meet the stylists
                </h2>
              </div>
              <span className="text-xs text-white/45">
                {String(stylists.length).padStart(2, "0")} profiles
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stylists.map((stylist, index) => (
                <article key={`${stylist.role}-${index}`} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                    <img
                      src={stylist.image}
                      alt={stylist.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.2em] text-[#D4AF37]">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3 border-b border-white/15 py-4">
                    <div>
                      <h3 className="text-base font-medium uppercase">
                        {stylist.name}
                      </h3>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/45">
                        {stylist.role}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="text-sm text-[#D4AF37] transition-transform group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-5 py-12 sm:px-10 md:px-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
                Work with us
              </p>
              <h2 className="mt-2 text-xl font-medium uppercase sm:text-2xl">
                Bring your creative vision to the runway
              </h2>
            </div>
            <a
              href="/contact"
              className="inline-flex w-fit border border-[#D4AF37] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              Contact the team <span className="ml-3" aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
