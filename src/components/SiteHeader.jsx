import React from 'react';
import { CLUB_INFO } from '../data/clubInfo.js';
import ThemeToggle from './ThemeToggle.jsx';

/**
 * SiteHeader - State 1 Top Navbar
 * 
 * - Part of the normal document flow at the top of the website (NOT permanently fixed/sticky).
 * - Visible while the user is in the hero section.
 * - Naturally scrolls away out of view as the user scrolls down past the hero.
 * - Restores into view when the user scrolls back to the top of the page.
 */
export default function SiteHeader({ onJoinClick }) {
  return (
    <header className="relative w-full z-30 py-5 sm:py-6 border-b border-bbs-border/40 transition-colors duration-300">
      <div className="max-w-container mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo / Identity */}
        <a 
          href="#hero" 
          className="flex items-center gap-4 sm:gap-5 no-underline group focus:outline-none focus:ring-2 focus:ring-bbs-accent rounded"
          aria-label="BBS Coding Club Home"
        >
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <img 
              src="/bbs-logo.jpg" 
              alt="BBS Coding Club Logo" 
              className="w-10 h-10 sm:w-[50px] sm:h-[50px] object-contain rounded-full border border-bbs-border-light group-hover:border-bbs-accent transition-colors shadow-sm shrink-0"
            />
            <img 
              src="/bbs-college-logo.png" 
              alt="BBS College of Engineering & Technology" 
              className="w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] object-contain group-hover:scale-105 transition-transform shrink-0"
              title="BBS College of Engineering & Technology"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-display font-bold text-base tracking-tight text-bbs-text leading-tight">
              {CLUB_INFO.name.toUpperCase()}
            </span>
            <span className="font-mono text-[11px] text-bbs-muted tracking-wider">
              EST. {CLUB_INFO.estYear} — STUDENT COMMUNITY
            </span>
          </div>
        </a>

        {/* Right Actions: Theme Toggle + CTA */}
        <div className="flex items-center gap-3.5 sm:gap-5">
          {/* Theme Switcher */}
          <ThemeToggle />

          {/* Primary CTA */}
          <button
            onClick={onJoinClick}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-3.5 py-2 border border-bbs-border-light bg-bbs-surface text-bbs-text rounded hover:border-bbs-accent transition-all"
            id="desktop-join-btn"
          >
            JOIN ↗
          </button>
        </div>
      </div>
    </header>
  );
}
