import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CLUB_INFO } from '../data/clubInfo.js';
import { HEADER_NAV_LINKS, HEADER_CTA } from '../data/navigation.js';
import ThemeToggle from './ThemeToggle.jsx';

/**
 * SiteHeader - State 1 Top Navbar
 * 
 * - Part of normal document flow (NOT permanently fixed across entire site).
 * - Visible at the top of the page.
 * - Naturally scrolls away as the user scrolls down past the hero/header.
 * - Hierarchy: [College Logo] [Coding Club Logo] BBS CODING CLUB
 */
export default function SiteHeader() {
  return (
    <header className="relative w-full z-30 py-4 sm:py-5 border-b border-bbs-border/40 transition-colors duration-300">
      <div className="max-w-container mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo / Identity: [College Logo] [Coding Club Logo] */}
        <Link 
          to="/" 
          className="flex items-center gap-3.5 sm:gap-4 no-underline group focus:outline-none focus:ring-2 focus:ring-bbs-accent rounded"
          aria-label="BBS Coding Club Home"
        >
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <img 
              src="/bbs-college-logo.png" 
              alt="BBS College of Engineering & Technology" 
              className="w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] object-contain group-hover:scale-105 transition-transform shrink-0"
              title="BBS College of Engineering & Technology"
            />
            <img 
              src="/bbs-logo.jpg" 
              alt="BBS Coding Club Logo" 
              className="w-10 h-10 sm:w-[50px] sm:h-[50px] object-contain rounded-full border border-bbs-border-light group-hover:border-bbs-accent transition-colors shadow-sm shrink-0"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-display font-bold text-sm sm:text-base tracking-tight text-bbs-text leading-tight">
              {CLUB_INFO.name.toUpperCase()}
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-bbs-muted tracking-wide">
              EST. {CLUB_INFO.estYear} — STUDENT COMMUNITY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-medium text-bbs-muted">
          {HEADER_NAV_LINKS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-bbs-text transition-colors py-1 ${
                  isActive ? 'text-bbs-accent font-semibold border-b-2 border-bbs-accent' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle + CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme Switcher */}
          <ThemeToggle />

          {/* Primary CTA */}
          <Link
            to={HEADER_CTA.path}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 border border-bbs-border-light bg-bbs-surface text-bbs-text rounded hover:border-bbs-accent hover:text-bbs-accent transition-all shrink-0 shadow-xs"
            id="desktop-join-btn"
          >
            {HEADER_CTA.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
