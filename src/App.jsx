import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
// 1. Import HelmetProvider to enable SEO meta tags
import { HelmetProvider } from 'react-helmet-async';

// --- Import Components ---
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Preloader from './components/Preloader.jsx';
// 2. Import the new Meta component
import Meta from './components/Meta.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

// --- Import Page Components ---
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import SeasonPage from './pages/SeasonPage';
import DesignersPage from './pages/DesignersPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import SchedulePage from './pages/SchedulePage.jsx';
import SponsorsPage from './pages/SponsorsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import TermsPage from './pages/TermsPage.jsx';
import Season1 from './pages/Season1.jsx';
import Season2 from './pages/Season2.jsx';


const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    gsap.set(contentRef.current, { autoAlpha: 0 });
  }, []);

  const handleLoadComplete = () => {
    setIsLoaded(true);
  };
  
  useEffect(() => {
    if (isLoaded) {
      gsap.to(contentRef.current, {
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });
    }
  }, [isLoaded]);

  // --- Routing Logic ---
  const location = window.location;
  let Component;
  switch (location.pathname) {
    case '/': Component = HomePage; break;
    case '/about': Component = AboutPage; break;
    case '/season': Component = SeasonPage; break;
    case '/designers': Component = DesignersPage; break;
    case '/gallery': Component = GalleryPage; break;
    case '/schedule': Component = SchedulePage; break;
    case '/sponsors': Component = SponsorsPage; break;
    case '/contact': Component = ContactPage; break;
    case '/news': Component = NewsPage; break;
    case '/privacy': Component = PrivacyPage; break;
    case '/terms': Component = TermsPage; break;
    case '/season1': Component = Season1; break; 
    case '/season2': Component = Season2; break;
    
    
    default: Component = HomePage;
  }

  const pageVariants = {
    initial: { opacity: 0, x: "-20%", scale: 0.95 },
    in: { opacity: 1, x: 0, scale: 1 },
    out: { opacity: 0, x: "20%", scale: 0.95 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.6,
  };

  // 3. Wrap the entire application in HelmetProvider
  return (
    <HelmetProvider>
      <div className="page-wrapper">
        {/* 4. Add default Meta tags for the whole site. These can be overridden by individual pages. */}
        <Meta />
        <CustomCursor />
<WhatsAppButton />
        {!isLoaded && <Preloader onComplete={handleLoadComplete} />}

        <div ref={contentRef} style={{ visibility: 'hidden' }}>
          <Header />
          <main>
            <div className="page-transition-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  className="page-transition-motion-div"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Component />
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default App;
