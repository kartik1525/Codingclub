import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { CLUB_INFO } from '../data/clubInfo.js';
import HeroHeadline from './HeroHeadline.jsx';
import Section from './Section.jsx';

export default function Hero({ onJoinClick }) {
  const heroRef = useRef(null);

  // Coordinated Initial Page-Load Entrance Sequence
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // 1. Dominant headline reveal
      gsap.fromTo(
        '.hero-main-title',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.15, ease: 'power4.out' }
      );

      // 2. Supporting paragraph
      gsap.fromTo(
        '.hero-description',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.35, ease: 'power3.out' }
      );

      // 3. CTA buttons
      gsap.fromTo(
        '.hero-ctas',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: 'power3.out' }
      );

      // 4. College image frame
      gsap.fromTo(
        '.hero-college-frame',
        { opacity: 0, y: 25, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.85, delay: 0.25, ease: 'power4.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section 
      variant="grid"
      ref={heroRef}
      id="hero" 
      className="min-h-[85vh] sm:min-h-screen flex flex-col justify-center pt-16 sm:pt-24 pb-16 border-b border-bbs-border relative"
    >
      <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
        {/* Asymmetrical Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Dominant Headline & Narrative (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <div className="min-h-[8.5rem] sm:min-h-[12rem] md:min-h-[15rem] lg:min-h-[17rem] flex items-start">
              <HeroHeadline className="hero-main-title" />
            </div>

            {/* Supporting paragraph */}
            <p className="hero-description text-base sm:text-lg text-bbs-muted leading-relaxed max-w-xl mt-6 mb-8">
              We are a community of college students who love writing code, building software that people actually use, and staying up late debugging during hackathons. No corporate jargon—just genuine builders rooted at BBS.
            </p>

            {/* CTAs */}
            <div className="hero-ctas flex gap-4 flex-wrap">
              <Link
                to="/join"
                className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-semibold tracking-wide px-6 py-3 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:-translate-y-0.5 shadow-lg shadow-bbs-accent/25"
                id="hero-join-btn"
              >
                JOIN THE CLUB ↗
              </Link>
              
              <a
                href="#projects"
                className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-semibold tracking-wide px-6 py-3 rounded border border-bbs-border-light text-bbs-text bg-transparent hover:bg-bbs-surface hover:border-bbs-muted transition-all hover:-translate-y-0.5"
              >
                SEE OUR PROJECTS ↓
              </a>
            </div>
          </div>

          {/* Right Column: Framed College Photograph */}
          <div className="lg:col-span-5 relative group hero-college-frame">
            {/* Asymmetrical Framed Image Container */}
            <div className="relative bg-bbs-surface border border-bbs-border rounded overflow-hidden shadow-xl group-hover:border-bbs-border-focus group-hover:shadow-2xl transition-all duration-300">
              <div className="w-full aspect-[4/3] overflow-hidden relative bg-black">
                <img 
                  src="/assets/bbs-college.jpg" 
                  alt="BBS College of Engineering and Technology campus building"
                  className="w-full h-full object-cover object-[center_35%] block filter grayscale-[25%] contrast-105 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500 ease-out"
                  loading="eager"
                />

                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-bbs-bg/90 to-transparent pointer-events-none" />
              </div>

              {/* Caption Underneath Photo */}
              <div className="p-4 sm:p-5 bg-bbs-surface border-t border-bbs-border flex flex-col gap-1">
                <div className="font-display text-base font-bold tracking-tight text-bbs-text">
                  BBS COLLEGE OF ENGINEERING AND TECHNOLOGY
                </div>
                <div className="font-mono text-xs text-bbs-muted">
                  Prayagraj, Uttar Pradesh
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
