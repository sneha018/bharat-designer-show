import React from 'react';
import logo from '../assets/images/bharat-logo png.png';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/20 pt-20 pb-10 px-6 md:px-16">
      <div className="mx-auto max-w-7xl">
        
        {/* TOP BRAND STATEMENT */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-16 border-b border-white/20 gap-8">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold mb-2">
              India's Premier Couture Runway
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-wide text-white">
              Bharat Designer Show
            </h2>
          </div>
          
          <a
            href="/contact"
            className="inline-block border-2 border-[#D4AF37] bg-[#D4AF37] text-black font-bold font-sans text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-white hover:border-white transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          >
            Get In Touch
          </a>
        </div>

        {/* MIDDLE LINKS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/20">
          
          {/* Logo & Info */}
          <div className="space-y-4">
            <img src={logo} alt="Bharat Designer Show" className="h-20 object-contain mb-4" />
            <p className="text-white/80 text-xs tracking-wider leading-relaxed font-sans">
              Celebrating timeless Indian craftsmanship, avant-garde couture, and visionary fashion designers on a global stage.
            </p>
          </div>

          {/* Archives Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-bold">
              Archives
            </h3>
            <ul className="space-y-3 font-sans text-xs tracking-widest uppercase text-white font-medium">
              <li><a href="/season1" className="hover:text-[#D4AF37] transition-colors">Season 01</a></li>
              <li><a href="/season2" className="hover:text-[#D4AF37] transition-colors">Season 02</a></li>
              <li><a href="/season3" className="hover:text-[#D4AF37] transition-colors">Season 03</a></li>
              <li><a href="/gallery" className="hover:text-[#D4AF37] transition-colors">Visual Gallery</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-bold">
              Navigation
            </h3>
            <ul className="space-y-3 font-sans text-xs tracking-widest uppercase text-white font-medium">
              <li><a href="/about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="/schedule" className="hover:text-[#D4AF37] transition-colors">Schedule</a></li>
              <li><a href="/designers" className="hover:text-[#D4AF37] transition-colors">Designers</a></li>
              <li><a href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details & Social Icons */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-bold">
              Official Desk
            </h3>
            <div className="text-xs text-white space-y-2 font-sans tracking-wider leading-relaxed font-medium">
              <p className="text-white font-semibold">info@bharatdesignershow.com</p>
              <p className="text-white">+91 98765 43210</p>
            </div>

            {/* Social Media SVG Icons */}
            <div className="flex gap-3 pt-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white hover:bg-[#E4405F] hover:border-[#E4405F] hover:scale-110 transition-all duration-300"
                title="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white hover:bg-[#FF0000] hover:border-[#FF0000] hover:scale-110 transition-all duration-300"
                title="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] hover:scale-110 transition-all duration-300"
                title="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.76.459 3.474 1.33 4.982l-1.413 5.161 5.283-1.386a9.948 9.948 0 004.789 1.228h.004c5.505 0 9.988-4.478 9.988-9.984 0-2.668-1.039-5.176-2.927-7.063a9.9 9.9 0 00-7.065-2.922zm5.666 14.195c-.24.674-1.398 1.285-1.936 1.341-.538.057-1.243.255-4.148-.912-3.486-1.401-5.719-4.945-5.892-5.176-.173-.231-1.412-1.88-1.412-3.585 0-1.705.892-2.544 1.21-2.891.317-.347.692-.433.923-.433.231 0 .462.002.663.012.212.01.498-.08.779.593.288.692.98 2.399 1.066 2.572.086.173.144.375.029.606-.115.231-.173.375-.346.577-.173.202-.365.423-.521.568-.173.161-.353.336-.152.682.202.346.897 1.48 1.926 2.397 1.322 1.179 2.438 1.545 2.784 1.718.346.173.548.144.75-.087.202-.231.865-1.01 1.096-1.357.231-.346.462-.288.779-.173.317.115 2.019.952 2.365 1.125.346.173.577.26.663.404.087.144.087.837-.153 1.511z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-white/70 text-[11px] uppercase tracking-[0.25em] gap-4 font-semibold">
          <p>&copy; {new Date().getFullYear()} BHARAT DESIGNER SHOW. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}