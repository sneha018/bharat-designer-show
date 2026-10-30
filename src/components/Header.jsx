import React, { useState } from 'react';
import logo from '../assets/images/bharat-logo png.png';

const menuLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Season',
    href: '#',
    isDropdown: true,
    subLinks: [
      { name: 'Season 1', href: '/season1' },
      { name: 'Season 2', href: '/season2' },
      { name: 'Season 3', href: '/season3' },
    ]
  },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Designers', href: '/designers' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Sponsors', href: '/sponsors' },
  { name: 'Contact', href: '/contact' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSeasonOpen, setIsSeasonOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">      
        <nav className="container mx-auto px-4 md:px-8 py-3 md:py-5 flex justify-between items-center">
            
          {/* LOGO */}
          <a href="/">
            <img src={logo} alt="logo" className="h-16 md:h-24 object-contain" />
          </a>

          {/* HAMBURGER */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col gap-1.5 md:gap-2 p-2 group"
            aria-label="Open Menu"
          >
            <span className="w-6 md:w-8 h-[2px] md:h-[3px] bg-white group-hover:bg-[#D4AF37] transition-colors"></span>
            <span className="w-6 md:w-8 h-[2px] md:h-[3px] bg-white group-hover:bg-[#D4AF37] transition-colors"></span>
            <span className="w-6 md:w-8 h-[2px] md:h-[3px] bg-white group-hover:bg-[#D4AF37] transition-colors"></span>
          </button>
        </nav>
      </header>

      {/* OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => {
          setIsMenuOpen(false);
          setIsSeasonOpen(false);
        }}
      ></div>

      {/* SIDE MENU */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-black text-white transform transition-transform duration-300 z-50 flex flex-col justify-between border-l border-white/10 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* CLOSE BUTTON */}
          <div className="flex justify-end p-5">
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                setIsSeasonOpen(false);
              }} 
              className="text-lg text-white/70 hover:text-[#D4AF37] transition"
              aria-label="Close Menu"
            >
              ✕
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col gap-3.5 px-6 overflow-y-auto max-h-[calc(100vh-160px)]">
            {menuLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.name} className="border-b border-white/10 pb-3">
                    {/* SEASON DROPDOWN TRIGGER BUTTON */}
                    <button
                      onClick={() => setIsSeasonOpen(!isSeasonOpen)}
                      className="w-full flex justify-between items-center text-sm uppercase tracking-[0.2em] text-white/90 hover:text-[#D4AF37] font-medium transition text-left"
                    >
                      <span>{link.name}</span>
                      <span className={`text-xs transition-transform duration-300 ${isSeasonOpen ? 'rotate-180 text-[#D4AF37]' : ''}`}>
                        ▼
                      </span>
                    </button>

                    {/* SEASON SUB-LINKS DROPDOWN */}
                    <div 
                      className={`flex flex-col gap-2 pl-3 transition-all duration-300 overflow-hidden ${
                        isSeasonOpen ? 'max-h-40 pt-3 opacity-100' : 'max-h-0 pt-0 opacity-0'
                      }`}
                    >
                      {link.subLinks.length > 0 && link.subLinks.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="text-xs uppercase tracking-widest text-white/70 hover:text-[#D4AF37] py-1 transition"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsSeasonOpen(false);
                          }}
                        >
                          ✦ {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.2em] border-b border-white/10 pb-3 text-white/90 hover:text-[#D4AF37] font-medium transition"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsSeasonOpen(false);
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* SOCIAL MEDIA ICONS AT BOTTOM OF SIDEBAR */}
        <div className="p-5 border-t border-white/10 bg-black/60 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-semibold">Follow Us</span>
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-[#E4405F] hover:border-[#E4405F] transition-all"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all"
              title="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.76.459 3.474 1.33 4.982l-1.413 5.161 5.283-1.386a9.948 9.948 0 004.789 1.228h.004c5.505 0 9.988-4.478 9.988-9.984 0-2.668-1.039-5.176-2.927-7.063a9.9 9.9 0 00-7.065-2.922zm5.666 14.195c-.24.674-1.398 1.285-1.936 1.341-.538.057-1.243.255-4.148-.912-3.486-1.401-5.719-4.945-5.892-5.176-.173-.231-1.412-1.88-1.412-3.585 0-1.705.892-2.544 1.21-2.891.317-.347.692-.433.923-.433.231 0 .462.002.663.012.212.01.498-.08.779.593.288.692.98 2.399 1.066 2.572.086.173.144.375.029.606-.115.231-.173.375-.346.577-.173.202-.365.423-.521.568-.173.161-.353.336-.152.682.202.346.897 1.48 1.926 2.397 1.322 1.179 2.438 1.545 2.784 1.718.346.173.548.144.75-.087.202-.231.865-1.01 1.096-1.357.231-.346.462-.288.779-.173.317.115 2.019.952 2.365 1.125.346.173.577.26.663.404.087.144.087.837-.153 1.511z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all"
              title="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </>
  );
}

export default Header;