import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Meta from '../components/Meta.jsx'; // 1. Import Meta for SEO

gsap.registerPlugin(ScrollTrigger);

// --- News Data ---
const newsArticles = [
  {
    source: 'Vogue India',
    title: 'The New Wave of Sustainable Couture',
    description: 'Discover how designers at BDS are pioneering eco-friendly practices without compromising on high fashion.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop',
    link: '#'
  },
  {
    source: 'GQ Magazine',
    title: 'Street Style Redefined on Day 3',
    description: 'The most striking looks from outside the shows, where the attendees become the spectacle.',
    image: 'https://images.unsplash.com/photo-1550963248-80c48f2441e3?q=80&w=1887&auto=format&fit=crop',
    link: '#'
  },
  {
    source: "Harper's Bazaar",
    title: 'A Look Inside the Grand Finale',
    description: 'An exclusive behind-the-scenes glimpse into the breathtaking closing show.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto=format&fit=crop',
    link: '#'
  }
];

// --- Component ---
function NewsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(".page-title-news", { opacity: 0, y: 30, duration: 1, ease: 'power3.out', delay: 0.2 });

      // Animate each news card as it scrolls into view
      gsap.utils.toArray('.news-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* 2. Add page-specific SEO meta tags */}
      <Meta
        title="In The Press | Bharat Designer Show News"
        description="Stay updated with the latest news and press coverage of the Bharat Designer Show. Read articles from top fashion magazines like Vogue, GQ, and Harper's Bazaar."
      />
      {/* 3. Add styles for the stretched link accessibility pattern */}
      <style>{`
        .stretched-link::after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          content: "";
        }
      `}</style>
      <main ref={containerRef} className="pt-32 min-h-screen">
        <section className="container mx-auto px-6 py-12">
          <h1 className="page-title-news text-6xl md:text-8xl font-serif mb-16 text-center">In The Press</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {newsArticles.map((article, index) => (
              // 4. Use <article> for better semantics and add relative positioning
              <article key={index} className="news-card bg-gray-900 rounded-lg overflow-hidden relative">
                <div className="news-card-image-wrapper">
                  {/* 5. Lazy load images for performance and add descriptive alt text */}
                  <img 
                    src={article.image} 
                    alt={`Visual for the article: ${article.title}`} 
                    className="w-full h-64 object-cover news-card-image"
                    loading="lazy" 
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-yellow-400 mb-2">{article.source}</p>
                  <h3 className="text-2xl font-serif mb-3">
                    {/* 6. The title is now the main link for the card */}
                    <a href={article.link} className="text-white hover:text-yellow-400 transition-colors stretched-link">
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-gray-400">{article.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default NewsPage;
