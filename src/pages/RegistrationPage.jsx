import React, { useState } from "react";
import Meta from "../components/Meta.jsx";

const productTypes = [
  "Men’s wear",
  "Women’s wear",
  "Ethnic wear",
  "Street wear",
  "Bridal",
  "Ready to wear",
  "Sustainable clothing",
  "Swim wear",
  "Accessories",
  "Other",
];

const seasons = ["Season 1", "Season 2", "Season 3"];

export default function DesignerRegistrationPage() {
  const [profileError, setProfileError] = useState("");
  const [collectionError, setCollectionError] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const validateProfileImage = (event) => {
    const file = event.target.files?.[0];
    setProfileError("");

    if (file && file.size > 2 * 1024 * 1024) {
      setProfileError("Profile/logo image must be 2 MB or smaller.");
      event.target.value = "";
    }
  };

  const validateCollectionImages = (event) => {
    const files = Array.from(event.target.files || []);
    setCollectionError("");

    if (files.length > 5) {
      setCollectionError("Please upload no more than 5 collection images.");
      event.target.value = "";
      return;
    }

    if (files.some((file) => file.size > 2 * 1024 * 1024)) {
      setCollectionError("Each collection image must be 2 MB or smaller.");
      event.target.value = "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitMessage(
      "Your form is ready to connect to the designer registration API."
    );
  };

  const inputClass =
    "mt-2 w-full border border-[#222]/15 bg-white px-4 py-3 text-sm text-[#171714] outline-none transition placeholder:text-black/35 focus:border-[#8a6c17]";

  const labelClass =
    "text-[11px] font-medium uppercase tracking-[0.16em] text-[#39372f]";

  return (
    <>
      <Meta
        title="Designer Registration | Bharat Designer Show"
        description="Register your fashion brand and collection for Bharat Designer Show."
      />

      <main className="min-h-screen bg-[#e9e6de] text-[#171714]">
        <div className="grid min-h-screen lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="flex flex-col justify-between bg-[#171714] px-7 py-9 text-[#e9e6de] sm:px-12 sm:py-12 lg:sticky lg:top-0 lg:h-screen lg:px-14 lg:py-14">
            <a
              href="/"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]"
            >
              Bharat Designer Show
            </a>

            <div className="my-14">
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
                Applications / 2026
              </p>

              <h1 className="max-w-xl text-5xl font-light leading-[1.05] sm:text-6xl">
                Your work.
                <br />
                Your story.
                <br />
                <span className="font-serif italic text-[#D4AF37]">
                  Your runway.
                </span>
              </h1>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/60">
                Introduce your brand and collection to Bharat Designer Show.
                Complete the application to share your work with our team.
              </p>
            </div>

            <p className="text-xs tracking-wide text-white/40">
              A platform for original ideas and emerging design.
            </p>
          </aside>

          <section className="px-5 py-10 sm:px-9 sm:py-12 lg:px-14 lg:py-14">
            <div className="mx-auto max-w-3xl">
              <header className="mb-9 border-b border-black/15 pb-7">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a6c17]">
                  Designer registration
                </p>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                  Tell us about your brand
                </h2>
                <p className="mt-3 text-sm leading-6 text-black/55">
                  Fields marked with * are required.
                </p>
              </header>

              <form onSubmit={handleSubmit} className="space-y-8">
                <section className="border border-black/10 bg-white/45 p-5 sm:p-7">
                  <h3 className="mb-5 border-b border-black/10 pb-3 text-[10px] uppercase tracking-[0.22em] text-[#8a6c17]">
                    Designer & brand details
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className={labelClass}>
                      Designer Name *
                      <input
                        className={inputClass}
                        name="designerName"
                        type="text"
                        placeholder="Your full name"
                        required
                      />
                    </label>

                    <label className={labelClass}>
                      Brand Name *
                      <input
                        className={inputClass}
                        name="brandName"
                        type="text"
                        placeholder="Your brand name"
                        required
                      />
                    </label>

                    <label className={labelClass}>
                      Collection Name
                      <input
                        className={inputClass}
                        name="collectionName"
                        type="text"
                        placeholder="Collection name"
                      />
                    </label>

                    <label className={labelClass}>
                      Age of Brand *
                      <input
                        className={inputClass}
                        name="brandAge"
                        type="text"
                        placeholder="e.g. 3 years"
                        required
                      />
                    </label>

                    <label className={labelClass}>
                      Country *
                      <input
                        className={inputClass}
                        name="country"
                        type="text"
                        placeholder="Country"
                        required
                      />
                    </label>

                    <label className={labelClass}>
                      City *
                      <input
                        className={inputClass}
                        name="city"
                        type="text"
                        placeholder="City"
                        required
                      />
                    </label>

                    <label className={labelClass}>
                      Mobile *
                      <input
                        className={inputClass}
                        name="mobile"
                        type="tel"
                        placeholder="Phone number with country code"
                        required
                      />
                    </label>

                    <label className={labelClass}>
                      Email *
                      <input
                        className={inputClass}
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </label>

                    <label className={`${labelClass} sm:col-span-2`}>
                      Social Media / Website Links *
                      <textarea
                        className={`${inputClass} min-h-24 resize-y`}
                        name="links"
                        placeholder="Instagram, website, etc."
                        required
                      />
                    </label>
                  </div>
                </section>

                <section className="border border-black/10 bg-white/45 p-5 sm:p-7">
                  <h3 className="mb-5 border-b border-black/10 pb-3 text-[10px] uppercase tracking-[0.22em] text-[#8a6c17]">
                    Collection details
                  </h3>

                  <fieldset>
                    <legend className={labelClass}>Product Type *</legend>
                    <p className="mt-2 text-xs text-black/50">
                      Select at least one product type.
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                      {productTypes.map((type) => (
                        <label
                          key={type}
                          className="flex cursor-pointer items-center gap-2 border border-black/10 bg-[#f8f7f3] px-3 py-3 text-xs text-black/70 transition hover:border-[#8a6c17]"
                        >
                          <input
                            className="accent-[#8a6c17]"
                            type="checkbox"
                            name="productTypes"
                            value={type}
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <label className={`${labelClass} mt-6 block`}>
                    About / Description
                    <textarea
                      className={`${inputClass} min-h-32 resize-y`}
                      name="description"
                      placeholder="Tell us about your brand and collection"
                    />
                  </label>

                  <label className={`${labelClass} mt-6 block sm:max-w-sm`}>
                    Select Season *
                    <select
                      className={inputClass}
                      name="season"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Choose a season
                      </option>
                      {seasons.map((season) => (
                        <option key={season} value={season}>
                          {season}
                        </option>
                      ))}
                    </select>
                  </label>
                </section>

                <section className="border border-black/10 bg-white/45 p-5 sm:p-7">
                  <h3 className="mb-5 border-b border-black/10 pb-3 text-[10px] uppercase tracking-[0.22em] text-[#8a6c17]">
                    Images
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className={labelClass}>
                      Profile / Logo Image *
                      <input
                        className={`${inputClass} file:mr-3 file:border-0 file:bg-[#171714] file:px-3 file:py-2 file:text-xs file:font-semibold file:uppercase file:text-[#D4AF37]`}
                        type="file"
                        name="profileImage"
                        accept="image/jpeg,image/png"
                        onChange={validateProfileImage}
                        required
                      />
                      <span className="mt-2 block text-xs normal-case tracking-normal text-black/45">
                        JPG/PNG, max 2 MB
                      </span>
                      {profileError && (
                        <span className="mt-2 block text-xs text-red-700">
                          {profileError}
                        </span>
                      )}
                    </label>

                    <label className={labelClass}>
                      Collection Image(s)
                      <input
                        className={`${inputClass} file:mr-3 file:border-0 file:bg-[#171714] file:px-3 file:py-2 file:text-xs file:font-semibold file:uppercase file:text-[#D4AF37]`}
                        type="file"
                        name="collectionImages"
                        accept="image/jpeg,image/png"
                        multiple
                        onChange={validateCollectionImages}
                      />
                      <span className="mt-2 block text-xs normal-case tracking-normal text-black/45">
                        Upload up to 5 collection photos (JPG/PNG, max 2 MB
                        each)
                      </span>
                      {collectionError && (
                        <span className="mt-2 block text-xs text-red-700">
                          {collectionError}
                        </span>
                      )}
                    </label>
                  </div>
                </section>

                <div className="border-t border-black/15 pt-6">
                  <button
                    type="submit"
                    className="bg-[#171714] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition hover:bg-[#302d24]"
                  >
                    Submit application <span aria-hidden="true">↗</span>
                  </button>

                  {submitMessage && (
                    <p className="mt-4 text-sm text-[#705814]" role="status">
                      {submitMessage}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
