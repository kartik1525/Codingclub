import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollContext = createContext({
  lenis: null,
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

/**
 * SmoothScroll - Central Root Smooth Scroll System using Lenis + GSAP ScrollTrigger
 * 
 * 1. Initializes one global Lenis instance.
 * 2. Synchronizes Lenis scroll events directly with GSAP's ScrollTrigger.update().
 * 3. Drives Lenis's requestAnimationFrame cycle via GSAP's global ticker.
 * 4. Respects 'prefers-reduced-motion: reduce' by gracefully bypassing Lenis.
 * 5. Provides seamless anchor scrolling API (lenis.scrollTo).
 */
export default function SmoothScroll({ children }) {
  const [lenisInstance, setLenisInstance] = useState(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Accessibility check: disable smooth scroll if reduced motion is requested
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize one global Lenis instance with conservative, responsive parameters
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      autoResize: true,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis update through GSAP ticker for unified animation frames
    const handleTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(handleTicker);
    gsap.ticker.lagSmoothing(0);

    // Intercept in-page anchor clicks for smooth glide
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, {
          offset: -40,
          duration: 1.1,
        });
      }
    };

    document.addEventListener('click', handleAnchorClick, { passive: false });

    // Ensure ScrollTrigger updates its metrics when fonts or images settle
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(refreshTimer);
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(handleTicker);
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, []);

  const scrollTo = (target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: -40,
        duration: 1.1,
        ...options,
      });
    } else {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
