import React, { useState, useEffect } from 'react';
import { CLUB_INFO } from '../data/clubInfo.js';

export default function SiteHeader({ onOpenMenu, isMenuOpen, onJoinClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-bbs-bg/90 backdrop-blur-md border-b border-bbs-border py-3' 
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
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

        {/* Right Actions: Status + CTA + Menu Toggle */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Status Indicator (Desktop only) */}
          <div className="hidden md:inline-flex items-center gap-2 font-mono text-xs text-bbs-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{CLUB_INFO.status}</span>
          </div>

          <button
            onClick={onJoinClick}
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-3.5 py-2 border border-bbs-border-light bg-transparent text-bbs-text rounded hover:bg-bbs-surface hover:border-bbs-muted transition-all"
            id="desktop-join-btn"
          >
            JOIN ↗
          </button>

          {/* Minimal Menu Trigger */}
          <button
            onClick={onOpenMenu}
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className={`inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider px-4 py-2 border border-bbs-border-light rounded transition-all ${
              isMenuOpen ? 'bg-bbs-raised text-bbs-text' : 'bg-bbs-surface text-bbs-text hover:bg-bbs-hover'
            }`}
            id="nav-menu-btn"
          >
            <span>{isMenuOpen ? "CLOSE" : "MENU"}</span>
            <span className="text-bbs-accent-light">{isMenuOpen ? "✕" : "↗"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
