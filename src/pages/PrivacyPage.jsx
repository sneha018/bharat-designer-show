import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Meta from '../components/Meta.jsx';

function PrivacyPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".privacy-content", {
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
        title="Privacy Policy | Bharat Designer Show" 
        description="Learn how we protect and manage your data at Bharat Designer Show." 
      />
      
      <main ref={containerRef} className="min-h-screen bg-black text-white pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          
          <header className="privacy-content mb-16">
            <h4 className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] mb-4 font-bold">Legal</h4>
            <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Privacy Policy</h1>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Last Updated: March 2026</p>
          </header>

          <div className="privacy-content space-y-12 text-gray-300 leading-relaxed font-light">
            
            <section>
              <h2 className="text-xl text-white uppercase tracking-widest mb-4 border-b border-white/10 pb-2 inline-block">Introduction</h2>
              <p>
                At Bharat Designer Show, we respect your privacy and are committed to protecting the personal information you share with us. This policy outlines how we collect, use, and safeguard your data when you interact with our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white uppercase tracking-widest mb-4 border-b border-white/10 pb-2 inline-block">Data Collection</h2>
              <p>
                We collect information that you voluntarily provide through our contact forms, such as your name, email address, and professional details. This helps us communicate with you effectively regarding show registrations and partnerships.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white uppercase tracking-widest mb-4 border-b border-white/10 pb-2 inline-block">How We Use Your Data</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To respond to your inquiries through the contact form.</li>
                <li>To send updates regarding event schedules and designer registrations.</li>
                <li>To improve our website's performance and user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-white uppercase tracking-widest mb-4 border-b border-white/10 pb-2 inline-block">Security</h2>
              <p>
                We implement industry-standard security measures to prevent unauthorized access or disclosure of your information. Your data is handled with the highest level of confidentiality.
              </p>
            </section>

            <section className="pt-10 border-t border-white/5">
              <p className="italic text-sm">
                If you have any questions about our privacy practices, please contact us at <span className="text-[#D4AF37]">hello@bharatdesignershow.com</span>
              </p>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}

export default PrivacyPage;