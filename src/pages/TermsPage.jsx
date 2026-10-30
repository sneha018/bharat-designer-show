import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Meta from '../components/Meta.jsx';

function TermsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".terms-content", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Meta 
        title="Terms & Conditions | Bharat Designer Show" 
        description="Read the terms and conditions for participating in Bharat Designer Show." 
      />
      
      <main ref={containerRef} className="min-h-screen bg-black text-white pt-40 pb-20 px-6 font-light">
        <div className="container mx-auto max-w-4xl">
          
          <header className="terms-content mb-16">
            <h4 className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] mb-4 font-bold">Legal Framework</h4>
            <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Terms & <br />Conditions</h1>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Effective Date: March 2026</p>
          </header>

          <div className="terms-content space-y-12 text-gray-400 leading-relaxed italic-serif-style">
            
            <section>
              <h2 className="text-xl text-white uppercase tracking-widest mb-4 border-b border-white/10 pb-2 inline-block">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Bharat Designer Show website, you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white uppercase tracking-widest mb-4 border-b border-white/10 pb-2 inline-block">2. Intellectual Property</h2>
              <p>
                All content, including logos, designs, photographs, and text featured on this site, is the exclusive property of Bharat Designer Show and its partners. Unauthorized use or reproduction is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white uppercase tracking-widest mb-4 border-b border-white/10 pb-2 inline-block">3. User Conduct</h2>
              <p>
                Users are expected to provide accurate information when filling out registration or contact forms. Any attempt to disrupt the website's functionality or misrepresent identity will lead to immediate disqualification from show participation.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white uppercase tracking-widest mb-4 border-b border-white/10 pb-2 inline-block">4. Limitation of Liability</h2>
              <p>
                Bharat Designer Show will not be held liable for any indirect or consequential loss resulting from the use of our website or participation in our events, unless required by law.
              </p>
            </section>

            <section className="pt-10 border-t border-white/5 text-sm">
              <p>
                We reserve the right to update these terms at any time. For legal inquiries, please contact <span className="text-[#D4AF37]">legal@bharatdesignershow.com</span>
              </p>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}

export default TermsPage;