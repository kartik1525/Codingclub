import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CLUB_INFO } from '../data/clubInfo.js';
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
  const navLinks = [
    { label: 'ABOUT', path: '/about' },
    { label: 'DEPARTMENTS', path: '/departments' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'EVENTS', path: '/events' },
    { label: 'TEAM', path: '/team' },
  ];

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
            <span className="font-mono text-[10px] sm:text-[11px] text-bbs-muted tracking-wider">
              EST. {CLUB_INFO.estYear} — STUDENT COMMUNITY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 font-mono text-sm">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors py-1 font-semibold tracking-wider ${
                  isActive 
                    ? 'text-bbs-accent-light font-bold border-b-2 border-bbs-accent' 
                    : 'text-bbs-text hover:text-bbs-accent-light'
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
            to="/join"
            className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold px-4 py-2 border border-bbs-border-light bg-bbs-surface text-bbs-text rounded hover:border-bbs-accent hover:text-bbs-accent transition-all shrink-0"
            id="desktop-join-btn"
          >
            JOIN ↗
          </Link>
        </div>
      </div>
    </header>
  );
}
