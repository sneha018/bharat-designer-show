import React from "react";
import Meta from "../components/Meta.jsx";

const directors = [
  {
    name: "Sharad Chaudhary",
    role: "Founder",
    image: "/images/directors/sharad.jpg",
    description:
      "Leading the vision of Bharat Designer Show and creating a platform for Indian fashion.",
  },
  {
    name: "Anubha Vashisht Chaudhary",
    role: "Creative Director",
    image: "/images/directors/anubha.jpg",
    description:
      "Shaping the creative direction and bringing each show’s ideas to life.",
  },
  {
    name: "Ajay Chaudhary",
    role: "Director",
    image: "/images/directors/ajay.jpg",
    description:
      "Helping bring the people, planning, and production of the show together.",
  },
];

export default function ShowDirectorsPage() {
  return (
    <>
      <Meta
        title="Show Directors | Bharat Designer Show"
        description="Meet the team behind Bharat Designer Show."
      />

      <main className="min-h-screen bg-black text-white">
        {/* Banner */}
        <section className="relative flex min-h-[65vh] items-end overflow-hidden px-6 pb-12 pt-28 md:min-h-[75vh] md:px-12 md:pb-16">
          <img
            src="/images/directors/directors-banner.jpg"
            alt="Bharat Designer Show directors"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
              Bharat Designer Show / The Team
            </p>

            <h1 className="text-5xl font-bold uppercase leading-none tracking-tight sm:text-7xl md:text-8xl">
              Show
              <br />
              <span
                className="font-light italic text-transparent"
                style={{ WebkitTextStroke: "1px white" }}
              >
                Directors
              </span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/65">
              Meet the creative minds and leaders behind Bharat Designer Show.
            </p>
          </div>
        </section>

        {/* Directors */}
        <section className="px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between border-b border-white/15 pb-5">
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
                  The people behind the show
                </p>
                <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-5xl">
                  Our team
                </h2>
              </div>

              <span className="text-xs text-[#D4AF37]">
                {String(directors.length).padStart(2, "0")} Members
              </span>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {directors.map((director, index) => (
                <article key={director.name} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                    <img
                      src={director.image}
                      alt={director.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <span className="absolute left-4 top-4 bg-black/60 px-3 py-1 text-[10px] text-[#D4AF37]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="absolute bottom-0 p-5 sm:p-6">
                      <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
                        {director.role}
                      </p>
                      <h3 className="text-2xl font-bold uppercase leading-tight sm:text-3xl">
                        {director.name}
                      </h3>
                    </div>
                  </div>

                  <p className="border-b border-white/15 py-4 text-sm leading-6 text-white/55">
                    {director.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact link */}
        <section className="border-t border-white/10 px-6 py-12 text-center md:px-12">
          <p className="text-sm text-white/55">
            Interested in working with our team?
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] hover:text-white"
          >
            Contact us <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
    </>
  );
}
