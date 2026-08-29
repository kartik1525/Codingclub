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
          className="flex items-center gap-3.5 no-underline group focus:outline-none focus:ring-2 focus:ring-bbs-accent rounded"
          aria-label="BBS Coding Club Home"
        >
          <div className="w-8 h-8 bg-bbs-surface border border-bbs-border-light rounded flex items-center justify-center font-mono font-bold text-sm text-bbs-text group-hover:border-bbs-accent transition-colors">
            B
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-bbs-text leading-tight">
              {CLUB_INFO.name.toUpperCase()}
            </span>
            <span className="font-mono text-[11px] text-bbs-muted tracking-wider">
              EST. {CLUB_INFO.estYear} — STUDENT COMMUNITY
            </span>
          </div>
        </a>

        {/* Right Actions: Status + Theme Toggle + CTA */}
        <div className="flex items-center gap-3.5 sm:gap-5">
          {/* Status Indicator (Desktop only) */}
          <div className="hidden md:inline-flex items-center gap-2 font-mono text-xs text-bbs-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{CLUB_INFO.status}</span>
          </div>

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
