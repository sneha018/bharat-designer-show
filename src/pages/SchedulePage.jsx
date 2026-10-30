import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Meta from '../components/Meta.jsx';

// --- Schedule Data ---
const scheduleData = {
  'Day 1': [],
  'Day 2': [],
  'Day 3': [],
};

const scheduleDays = Object.keys(scheduleData);

// --- Component ---
function SchedulePage() {
  const [activeTab, setActiveTab] = useState(scheduleDays[0]);
  const containerRef = useRef(null);
  const itemsRef = useRef(null);

  // Animate the title and tabs on initial load
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-title-schedule", { opacity: 0, y: 30, duration: 1, ease: 'power3.out', delay: 0.2 });
      gsap.from(".tab-button", { opacity: 0, y: 30, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.5 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Animate the schedule items whenever the active tab changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".schedule-item", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out'
      });
    }, itemsRef);
    return () => ctx.revert();
  }, [activeTab]);

  // Accessibility: Handle keyboard navigation for tabs
  const handleKeyDown = (e) => {
    const currentIndex = scheduleDays.indexOf(activeTab);
    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % scheduleDays.length;
      setActiveTab(scheduleDays[nextIndex]);
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + scheduleDays.length) % scheduleDays.length;
      setActiveTab(scheduleDays[prevIndex]);
    }
  };

  const activeSchedule = scheduleData[activeTab];

  return (
    <>
      <Meta
        title="Event Schedule | Bharat Designer Show"
        description="View the complete day-by-day schedule for the Bharat Designer Show. Find timings for all runway shows, designer showcases, and special events."
      />
      <main ref={containerRef} className="pt-32 min-h-screen">
        <section className="container mx-auto px-6 py-12">
          <h1 className="page-title-schedule text-6xl md:text-8xl font-serif mb-12 text-center">The Schedule</h1>

          <div
            role="tablist"
            aria-label="Event Schedule Days"
            className="flex justify-center space-x-4 md:space-x-8 mb-12 border-b border-gray-700"
            onKeyDown={handleKeyDown}
          >
            {scheduleDays.map(day => (
              <button
                key={day}
                id={`tab-${day.replace(' ', '-')}`}
                role="tab"
                aria-selected={activeTab === day}
                aria-controls={`panel-${day.replace(' ', '-')}`}
                onClick={() => setActiveTab(day)}
                className={`tab-button text-lg py-2 px-4 border-b-2 border-transparent transition-colors duration-300 ${activeTab === day ? 'active' : ''}`}
              >
                {day}
              </button>
            ))}
          </div>

          <div
            ref={itemsRef}
            id={`panel-${activeTab.replace(' ', '-')}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab.replace(' ', '-')}`}
            className="max-w-4xl mx-auto"
          >
            {activeSchedule.length > 0 ? (
              activeSchedule.map((item, index) => (
                <div key={index} className="schedule-item border-b border-gray-800 py-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span className="text-xl font-semibold text-yellow-400 w-full sm:w-1/4">{item.time}</span>
                    <h3 className="text-2xl font-serif text-left sm:text-center flex-1">{item.event}</h3>
                    <span className="text-gray-400 w-full sm:w-1/4 text-left sm:text-right">{item.location}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="schedule-item text-center text-gray-400 py-10">
                The schedule for {activeTab} is currently being curated. Please check back soon for updates.
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default SchedulePage;