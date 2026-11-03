"use client";

import React from "react";

export default function StickyContact() {
  const phoneNumber = "919876543210"; // Replace with your WhatsApp and phone number
  const emailAddress = "info@bharatdesignershow.com"; // Replace with your email

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonClass =
    "group flex items-center justify-center rounded-xl p-2.5 shadow-lg transition-all duration-300 hover:scale-110 sm:p-3";

  return (
    <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-2 rounded-l-xl border-y border-l border-[#D4AF37]/40 bg-[#0a0a0a]/90 p-2 shadow-[0_0_30px_rgba(212,175,55,0.15)] backdrop-blur-xl sm:gap-3 sm:rounded-l-2xl sm:p-2.5">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Bharat%20Designer%20Show.`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClass} border border-[#25D366] bg-[#25D366] text-black`}
        title="WhatsApp"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.76.459 3.474 1.33 4.982l-1.413 5.161 5.283-1.386a9.948 9.948 0 004.789 1.228h.004c5.505 0 9.988-4.478 9.988-9.984 0-2.668-1.039-5.176-2.927-7.063a9.9 9.9 0 00-7.065-2.922zm5.666 14.195c-.24.674-1.398 1.285-1.936 1.341-.538.057-1.243.255-4.148-.912-3.486-1.401-5.719-4.945-5.892-5.176-.173-.231-1.412-1.88-1.412-3.585 0-1.705.892-2.544 1.21-2.891.317-.347.692-.433.923-.433.231 0 .462.002.663.012.212.01.498-.08.779.593.288.692.98 2.399 1.066 2.572.086.173.144.375.029.606-.115.231-.173.375-.346.577-.173.202-.365.423-.521.568-.173.161-.353.336-.152.682.202.346.897 1.48 1.926 2.397 1.322 1.179 2.438 1.545 2.784 1.718.346.173.548.144.75-.087.202-.231.865-1.01 1.096-1.357.231-.346.462-.288.779-.173.317.115 2.019.952 2.365 1.125.346.173.577.26.663.404.087.144.087.837-.153 1.511z" />
        </svg>
      </a>

      {/* Call */}
      <a
        href={`tel:+${phoneNumber}`}
        className={`${buttonClass} border border-[#D4AF37] bg-[#D4AF37] text-black`}
        title="Call us"
        aria-label="Call us"
      >
        <svg
          className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>

      {/* Email */}
      <a
        href={`mailto:${emailAddress}`}
        className={`${buttonClass} border border-white bg-white text-black`}
        title="Email us"
        aria-label="Email us"
      >
        <svg
          className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </a>

      {/* Scroll to top */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`${buttonClass} border border-[#D4AF37] bg-[#D4AF37] text-black`}
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <svg
          className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            d="M12 19V5m-7 7 7-7 7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
