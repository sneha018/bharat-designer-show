import React, { useState } from 'react';
import Meta from '../components/Meta.jsx';

const contactDetails = [
  {
    label: 'Email Us',
    value: 'hello@bharatdesignershow.com',
    href: 'mailto:hello@bharatdesignershow.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'Call Us',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'Visit Us',
    value: 'Noida Film City, Uttar Pradesh, India',
    href: 'https://maps.google.com/?q=Noida+Film+City',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

const subjects = [
  'General Inquiry',
  'Register Interest — Season 03',
  'Apply as Designer',
  'Partnerships & Sponsorship',
  'Press & Media',
  'Model Application',
];

function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: subjects[0],
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Replace with your real endpoint (Formspree, /api/contact, etc.)
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', subject: subjects[0], message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Meta
        title="Contact | Bharat Designer Show"
        description="Get in touch with Bharat Designer Show — registrations, designer applications, partnerships and press."
      />

      <section className="relative overflow-hidden bg-[#020202] text-white">
        {/* ── Background decoration ── */}
        <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-[#e41779]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:px-12 md:py-28">

          {/* ── Hero heading ── */}
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              <span className="h-px w-8 bg-[#D4AF37]/60" />
              Get in touch
            </p>
            <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-7xl">
              Let&rsquo;s start a <br />
              <span className="italic text-[#D4AF37]">conversation.</span>
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/60 md:text-base">
              Whether you want to register for Season 03, apply as a designer,
              partner with us, or just say hello — we&rsquo;d love to hear from you.
            </p>
          </div>

          {/* ── Main grid: form + info ── */}
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            {/* ── LEFT: Contact info cards ── */}
            <div className="space-y-8 lg:col-span-5">
              <div className="space-y-4">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === 'Visit Us' ? '_blank' : undefined}
                    rel={item.label === 'Visit Us' ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/[0.04]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] transition-colors group-hover:bg-[#D4AF37]/10">
                      {item.icon}
                    </span>
                    <div>
                      <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                        {item.label}
                      </p>
                      <p className="text-sm text-white/85 transition-colors group-hover:text-white">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social block */}
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                <p className="mb-4 text-[9px] uppercase tracking-[0.28em] text-[#D4AF37]">
                  Follow the show
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: 'Instagram', href: 'https://www.instagram.com/bharat_designer_show/' },
                    { label: 'YouTube', href: 'https://www.youtube.com/@BharatDesignerShow' },
                    { label: 'Facebook', href: 'https://www.facebook.com/bharatdesignershow' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/70 transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
                    >
                      {s.label} ↗
                    </a>
                  ))}
                </div>
              </div>

              {/* Response promise */}
              <div className="flex items-start gap-3 rounded-xl border border-[#e41779]/20 bg-[#e41779]/[0.04] p-5">
                <span className="mt-0.5 text-[#e41779]">✦</span>
                <p className="text-xs leading-relaxed text-white/60">
                  We reply to every message within <span className="text-white">24–48 hours</span>.
                  For urgent press inquiries, please mark your subject accordingly.
                </p>
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:p-10"
              >
                <h2 className="font-serif text-2xl text-white sm:text-3xl">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-white/50">
                  Fill in the form and our team will get back to you.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/60">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[#D4AF37]/70 focus:bg-black/60"
                    />
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/60">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[#D4AF37]/70 focus:bg-black/60"
                    />
                  </div>

                  {/* Phone */}
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/60">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 ..."
                      className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[#D4AF37]/70 focus:bg-black/60"
                    />
                  </div>

                  {/* Subject */}
                  <div className="sm:col-span-1">
                    <label htmlFor="subject" className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/60">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-[#D4AF37]/70 focus:bg-black/60"
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s} className="bg-[#0a0a0a]">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/60">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a little about your inquiry..."
                      className="w-full resize-none rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[#D4AF37]/70 focus:bg-black/60"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent ✓' : 'Send Message'}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>

                  {status === 'sent' && (
                    <p className="text-xs text-[#D4AF37]">
                      Thank you — we&rsquo;ll be in touch shortly.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-xs text-[#e41779]">
                      Something went wrong. Please email us directly.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;