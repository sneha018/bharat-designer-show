import React from "react";
import Meta from "../components/Meta.jsx";

const backstageManagers = [
  {
    name: "Manager Name",
    role: "Show Flow",
    description:
      "Coordinating backstage timing and helping each runway segment stay on schedule.",
    image: "/images/backstage-managers/manager-1.jpg",
  },
  {
    name: "Manager Name",
    role: "Designer & Look Coordination",
    description:
      "Keeping collections, looks, and designer requirements organized backstage.",
    image: "/images/backstage-managers/manager-2.jpg",
  },
  {
    name: "Manager Name",
    role: "Dressing & Changeovers",
    description:
      "Supporting quick changes and smooth transitions between runway looks.",
    image: "/images/backstage-managers/manager-3.jpg",
  },
];

export default function BackstageManagersPage() {
  return (
    <>
      <Meta
        title="Backstage Managers | Bharat Designer Show"
        description="Meet the team coordinating show flow, designer collections, and backstage preparations at Bharat Designer Show."
      />

      <main className="min-h-screen bg-black text-white">
        <section className="relative flex min-h-[58vh] items-end overflow-hidden px-5 pb-12 pt-28 sm:px-10 md:min-h-[68vh] md:px-16 md:pb-16">
          <img
            src="/images/backstage-managers/backstage-banner.jpg"
            alt="Backstage preparations before a fashion show"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
              Bharat Designer Show / Team
            </p>
            <h1 className="text-5xl font-bold uppercase leading-[0.9] sm:text-7xl md:text-8xl">
              Behind
              <br />
              <span className="font-light italic text-[#D4AF37]">
                the scenes
              </span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/65">
              Meet the people keeping every backstage detail moving before the
              lights come up.
            </p>
          </div>
        </section>

        <section className="border-b border-white/10 px-5 py-12 sm:px-10 md:px-16 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
                Precision in motion
              </p>
              <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-5xl">
                Every moment, in sync
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-white/55 md:justify-self-end">
              From show flow to quick changes, our backstage team works with
              models and designers to help each collection make its runway
              entrance on time.
            </p>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-10 md:px-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between border-b border-white/15 pb-5">
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
                  The crew
                </p>
                <h2 className="text-3xl font-bold uppercase sm:text-5xl">
                  Backstage team
                </h2>
              </div>
              <span className="text-xs text-[#D4AF37]">
                {String(backstageManagers.length).padStart(2, "0")} Team members
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {backstageManagers.map((manager, index) => (
                <article
                  key={`${manager.role}-${index}`}
                  className="group border border-white/10 bg-[#0a0a0a]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                    <img
                      src={manager.image}
                      alt={`${manager.name}, ${manager.role}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                      {manager.role}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold uppercase">
                      {manager.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/55">
                      {manager.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#0a0a0a] px-5 py-14 text-center sm:px-10 md:px-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Show enquiries
          </p>
          <h2 className="mt-3 text-2xl font-semibold uppercase sm:text-3xl">
            Let’s bring the show together
          </h2>
          <a
            href="/contact"
            className="mt-6 inline-block border border-[#D4AF37] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            Contact us <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
    </>
  );
}
