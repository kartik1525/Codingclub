import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ViewportText - Word-by-word viewport reveal inspired by Thibaut G3
 * 
 * - Splits sentence into individual word elements with proper spacing.
 * - The parent heading/container layout remains completely stable (zero container movement).
 * - Each word animates independently with subtle upward reveal and opacity.
 * - Staggered entrance tied directly to ScrollTrigger scrub (synchronized with Lenis).
 * - Fully reversible: scrolling down reveals words; scrolling up reverses smoothly.
 * - Respects prefers-reduced-motion: reduce.
 */
export default function ViewportText({
  children,
  as: Component = 'h2',
  className = '',
  id,
  stagger = 0.08,
  start = 'top 90%',
  end = 'top 50%',
}) {
  const containerRef = useRef(null);
  const textContent = typeof children === 'string' ? children : '';

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Split into word tokens with explicit margin for reliable word spacing
  const wordTokens = useMemo(() => {
    if (prefersReducedMotion || !textContent) return null;

    const words = textContent.trim().split(/\s+/);
    return words.map((word, idx) => (
      <span
        key={idx}
        className="inline-block overflow-hidden align-top mr-[0.32em] last:mr-0"
      >
        <span className="inline-block vp-word will-change-transform will-change-opacity">
          {word}
        </span>
      </span>
    ));
  }, [textContent, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const el = containerRef.current;
    const wordElements = el.querySelectorAll('.vp-word');
    if (!wordElements.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordElements,
        {
          opacity: 0,
          yPercent: 100,
        },
        {
          opacity: 1,
          yPercent: 0,
          ease: 'power2.out',
          stagger: {
            each: stagger,
            from: 'start',
          },
          scrollTrigger: {
            trigger: el,
            start: start,
            end: end,
            scrub: 0.4, // Responsive sync with Lenis
            invalidateOnRefresh: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [stagger, start, end, prefersReducedMotion]);

  // Reduced motion fallback
  if (prefersReducedMotion) {
    return (
      <Component id={id} className={className}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      ref={containerRef}
      id={id}
      className={className}
    >
      {wordTokens || children}
    </Component>
  );
}
