import React from "react";
import Meta from "../components/Meta.jsx";

const managers = [
  {
    number: "01",
    name: "Manager Name",
    role: "Model Relations",
    description:
      "Supporting models through casting, preparation, and show day.",
    image: "/images/model-managers/manager-1.jpg",
  },
  {
    number: "02",
    name: "Manager Name",
    role: "Casting Coordination",
    description:
      "Connecting models and designers while keeping casting organized.",
    image: "/images/model-managers/manager-2.jpg",
  },
  {
    number: "03",
    name: "Manager Name",
    role: "Backstage Management",
    description:
      "Coordinating backstage preparation and keeping the show on schedule.",
    image: "/images/model-managers/manager-3.jpg",
  },
];

export default function ModelManagerPage() {
  return (
    <>
      <Meta
        title="Model Managers | Bharat Designer Show"
        description="Meet the team coordinating models and backstage preparation at Bharat Designer Show."
      />

      <main className="min-h-screen bg-[#080808] text-white">
        <section className="px-5 pb-14 pt-28 sm:px-10 md:px-16 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <p className="mb-8 text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">
              Bharat Designer Show <span className="text-white/40">/</span> Our
              team
            </p>

            <div className="grid gap-8 border-b border-white/15 pb-10 md:grid-cols-[1.2fr_0.8fr] md:items-end md:pb-14">
              <h1 className="text-5xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
                The people
                <br />
                <span className="font-light italic text-[#D4AF37]">
                  behind the walk
                </span>
              </h1>
              <p className="max-w-sm text-sm leading-7 text-white/55 md:justify-self-end">
                Meet the team guiding models from the first fitting to the
                final moment on the runway.
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/45">
              <span>Model management</span>
              <span>01 — 03</span>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-10 md:px-16 md:pb-24">
          <div className="mx-auto max-w-7xl">
            {managers.map((manager) => (
              <article
                key={manager.number}
                className="group grid gap-5 border-b border-white/15 py-7 sm:grid-cols-[60px_1fr_1.1fr] sm:items-center sm:gap-8 sm:py-9"
              >
                <span className="text-xs tracking-[0.2em] text-[#D4AF37]">
                  {manager.number}
                </span>

                <div className="grid grid-cols-[100px_1fr] items-center gap-4 sm:grid-cols-1">
                  <div className="aspect-square overflow-hidden bg-zinc-900 sm:aspect-[4/3]">
                    <img
                      src={manager.image}
                      alt={manager.name}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>

                  <div className="sm:mt-5">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                      {manager.role}
                    </p>
                    <h2 className="mt-2 text-lg font-medium uppercase sm:text-2xl">
                      {manager.name}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-5 sm:pl-6">
                  <p className="max-w-sm text-sm leading-6 text-white/50">
                    {manager.description}
                  </p>
                  <span
                    aria-hidden="true"
                    className="hidden text-xl text-[#D4AF37] transition-transform group-hover:translate-x-1 sm:block"
                  >
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#0d0d0d] px-5 py-14 text-center sm:px-10 md:px-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
            Model enquiries
          </p>
          <h2 className="mt-3 text-2xl font-medium uppercase sm:text-3xl">
            Let’s make the next show happen
          </h2>
          <a
            href="/contact"
            className="mt-6 inline-flex border border-[#D4AF37] px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            Contact the team <span className="ml-3" aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
    </>
  );
}
