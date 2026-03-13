'use client';
import { useEffect } from 'react';
import Contact from './Components/Layout/Contact';
import Hero from './Components/Layout/Hero';
import Projects from './Components/Layout/Projects';
import Footer from './Components/Layout/Footer';
import ScrollToTop from './Components/Layout/ScrollToTop';
import Work from './Components/Layout/Work';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1,
      effects: true,
      normalizeScroll: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <main className="flex flex-col justify-center items-center px-4">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Projects />
          <Work />
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </main>
  );
}
