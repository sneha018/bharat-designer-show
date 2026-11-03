import React from "react";
import Meta from "../components/Meta.jsx";
import modelImg from '../assets/images/models/images (9).jpg'; 
const models = [
  { name: "Aditi Anand", category: "Runway Model", image: "/images/models/model-1.jpg" },
  { name: "Ananya Sharma", category: "Fashion Model", image: "/images/models/model-2.jpg" },
  { name: "Riya Kapoor", category: "Runway Model", image: "/images/models/model-3.jpg" },
  { name: "Meera Singh", category: "Editorial Model", image: "/images/models/model-4.jpg" },
  { name: "Kavya Mehta", category: "Fashion Model", image: "/images/models/model-5.jpg" },
  { name: "Ishita Rao", category: "Runway Model", image: "/images/models/model-6.jpg" },
  { name: "Tara Malhotra", category: "Editorial Model", image: "/images/models/model-7.jpg" },
  { name: "Nisha Verma", category: "Fashion Model", image: "/images/models/model-8.jpg" },
  { name: "Simran Kaur", category: "Runway Model", image: "/images/models/model-9.jpg" },
  { name: "Diya Nair", category: "Fashion Model", image: "/images/models/model-10.jpg" },
  { name: "Sana Khan", category: "Editorial Model", image: "/images/models/model-11.jpg" },
  { name: "Kiara Patel", category: "Runway Model", image: "/images/models/model-12.jpg" },
  { name: "Pooja Reddy", category: "Fashion Model", image: "/images/models/model-13.jpg" },
  { name: "Avni Joshi", category: "Editorial Model", image: "/images/models/model-14.jpg" },
  { name: "Maya Das", category: "Runway Model", image: "/images/models/model-15.jpg" },
];

export default function ModelsPage() {
  return (
    <>
      <Meta
        title="Models | Bharat Designer Show"
        description="Meet the models of Bharat Designer Show."
      />

      <main className="min-h-screen bg-black text-white">
          <section className="relative flex min-h-[75vh] items-end overflow-hidden px-6 pb-14 pt-32 md:min-h-[85vh] md:px-12 md:pb-20">
          <img src={modelImg} alt="Models" className="absolute inset-0 h-full w-full object-cover opacity-55" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.5em] text-[#D4AF37]">
              Bharat Designer Show / Talent
            </p>

            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <h1 className="text-6xl font-bold uppercase leading-[0.85] tracking-tighter sm:text-8xl md:text-[120px]">
                Meet the
                <br />
                <span
                  className="font-light italic text-transparent"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  models
                </span>
              </h1>

              <p className="max-w-sm text-sm leading-7 text-white/65">
                The talent, character, and confidence bringing every designer’s
                vision to life on the runway.
              </p>
            </div>
          </div>
        </section>
        {/* Page heading */}
        <section className="border-b border-white/10 px-6 pb-12 pt-28 md:px-12 md:pb-16 md:pt-36">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
              Bharat Designer Show
            </p>

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <h1 className="text-5xl font-bold uppercase tracking-tight sm:text-7xl">
                Our <span className="font-light italic text-[#D4AF37]">Models</span>
              </h1>

              <p className="max-w-sm text-sm leading-6 text-white/55">
                Meet the faces and talent bringing fashion to the runway.
              </p>
            </div>
          </div>
        </section>

        {/* Model grid */}
        <section className="px-6 py-12 md:px-12 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-7 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Model directory
              </p>
              <p className="text-xs text-[#D4AF37]">
                {String(models.length).padStart(2, "0")} Models
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
              {models.map((model, index) => (
                <article key={model.name} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
                    <img
                      src={model.image}
                      alt={model.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-3 top-3 bg-black/60 px-2 py-1 text-[10px] text-[#D4AF37]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="border-b border-white/15 py-3">
                    <h2 className="text-sm font-semibold uppercase tracking-wide sm:text-base">
                      {model.name}
                    </h2>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/45">
                      {model.category}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact link */}
        <section className="border-t border-white/10 px-6 py-12 text-center md:px-12">
          <p className="text-sm text-white/55">Interested in joining the runway?</p>
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
