import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CLUB_INFO } from '../data/clubInfo.js';
import HeroHeadline from './HeroHeadline.jsx';

export default function Hero({ onJoinClick }) {
  const heroRef = useRef(null);

  // Coordinated Initial Page-Load Entrance Sequence
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // 1. Small status bar
      gsap.fromTo(
        '.hero-status-bar',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1, ease: 'power3.out' }
      );

      // 2. Dominant headline reveal
      gsap.fromTo(
        '.hero-main-title',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power4.out' }
      );

      // 3. Supporting paragraph
      gsap.fromTo(
        '.hero-description',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.45, ease: 'power3.out' }
      );

      // 4. CTA buttons
      gsap.fromTo(
        '.hero-ctas',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.6, ease: 'power3.out' }
      );

      // 5. College image frame
      gsap.fromTo(
        '.hero-college-frame',
        { opacity: 0, y: 25, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.85, delay: 0.35, ease: 'power4.out' }
      );

      // 6. Bottom technical coordinates
      gsap.fromTo(
        '.hero-bottom-meta',
        { opacity: 0 },
        { opacity: 1, duration: 0.7, delay: 0.75, ease: 'power2.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="subtle-grid min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-14 border-b border-bbs-border relative"
    >
      <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
        {/* Top Club Identity Bar */}
        <div className="hero-status-bar flex justify-between items-center flex-wrap gap-4 mb-8">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-bbs-surface border border-bbs-border rounded">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs font-semibold tracking-wider text-bbs-text">
              {CLUB_INFO.name.toUpperCase()} // STUDENT DEVELOPER COLLECTIVE
            </span>
          </div>

          <div className="font-mono text-xs text-bbs-dim">
            GEO: {CLUB_INFO.coordinates} — {CLUB_INFO.estYear}
          </div>
        </div>

        {/* Asymmetrical Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
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
            <div className="hero-ctas flex gap-4 flex-wrap mb-8">
              <button
                onClick={onJoinClick}
                className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-semibold tracking-wide px-6 py-3 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:-translate-y-0.5 shadow-lg shadow-bbs-accent/25"
                id="hero-join-btn"
              >
                JOIN THE CLUB ↗
              </button>
              
              <a
                href="#projects"
                className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-semibold tracking-wide px-6 py-3 rounded border border-bbs-border-light text-bbs-text bg-transparent hover:bg-bbs-surface hover:border-bbs-muted transition-all hover:-translate-y-0.5"
              >
                SEE OUR PROJECTS ↓
              </a>
            </div>

            {/* Micro status */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center font-mono text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/30">
                FALL 2026
              </span>
              <span className="font-mono text-xs text-bbs-dim">
                CORE NOMINATIONS & MEMBER SIGNUPS OPEN
              </span>
            </div>
          </div>

          {/* Right Column: Framed College Photograph */}
          <div className="lg:col-span-5 relative group hero-college-frame">
            {/* Editorial Metadata Above Photo */}
            <div className="flex justify-between items-baseline mb-2 font-mono text-xs">
              <span className="text-bbs-accent-light tracking-wider">
                01 / THE PLACE WE BUILD FROM
              </span>
              <span className="text-bbs-dim text-[11px]">
                EST. 2025 // BBS CAMPUS
              </span>
            </div>

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

                <div className="absolute top-3 right-3 bg-bbs-bg/85 backdrop-blur-sm border border-bbs-border rounded px-2.5 py-1 font-mono text-[11px] text-bbs-text">
                  CAMPUS HQ
                </div>
              </div>

              {/* Caption & Location Metadata Underneath Photo */}
              <div className="p-4 sm:p-5 bg-bbs-surface border-t border-bbs-border flex flex-col gap-1">
                <div className="font-display text-base font-bold tracking-tight text-bbs-text">
                  BBS COLLEGE OF ENGINEERING AND TECHNOLOGY
                </div>

                <div className="font-mono text-xs text-bbs-muted flex justify-between flex-wrap gap-2">
                  <span>CAMPUS LABS & HACKATHON ARENA</span>
                  <span className="text-bbs-accent-light">ACTIVE BASE // PRAYAGRAJ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Technical Coordinates Bar */}
        <div className="hero-bottom-meta flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-bbs-border font-mono text-xs text-bbs-dim">
          <div>
            <span>EST. {CLUB_INFO.estYear}</span>
            <span className="mx-2">—</span>
            <span>BBS COLLEGE OF ENGINEERING AND TECHNOLOGY</span>
          </div>

          <div>
            <span>CAMPUS LOCATION: PRAYAGRAJ, UTTAR PRADESH</span>
          </div>

          <div>
            <span>COMMUNITY PROTOCOL: IN-PERSON LABS + ASYNC BUILDS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
