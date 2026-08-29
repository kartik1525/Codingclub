import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUp, Mail } from 'lucide-react';
import { CLUB_INFO } from '../data/clubInfo.js';

/* Technical Social Vector Icons */
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/**
 * SiteFooter - Custom Premium Editorial Footer for BBS Coding Club
 * 
 * Alternating Structure:
 * - Upper footer area: Normal solid background with subtle campus image
 * - Bottom footer area: Checkered / grid background (.section-grid)
 */
export default function SiteFooter({ onOpenPrivacy, onOpenTerms }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navExplore = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Events', path: '/events' },
  ];

  const navCommunity = [
    { label: 'Team', path: '/team' },
    { label: 'Join Us', path: '/join' },
    { label: 'Departments', path: '/departments' },
    { label: 'Workshops', path: '/events' },
  ];

  const navConnect = [
    { label: 'GitHub', href: CLUB_INFO.socials.github, icon: GithubIcon },
    { label: 'LinkedIn', href: CLUB_INFO.socials.linkedin, icon: LinkedinIcon },
    { label: 'Instagram', href: CLUB_INFO.socials.instagram, icon: InstagramIcon },
    { label: 'Email', href: `mailto:${CLUB_INFO.socials.email}`, icon: Mail },
  ];

  return (
    <footer className="bg-bbs-bg border-t border-bbs-border transition-colors duration-300 relative select-none">
      {/* ─────────────────────────────────────────────────────────────
          1. UPPER FOOTER AREA: Normal Solid Background
          ───────────────────────────────────────────────────────────── */}
      <div className="relative pt-20 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
        {/* Subtle Authentic BBS Campus Background Image Layer */}
        <div 
          className="absolute inset-0 pointer-events-none select-none overflow-hidden" 
          aria-hidden="true"
        >
          <img
            src="/assets/bbs-college.jpg"
            alt=""
            className="w-full h-full object-cover object-center filter grayscale contrast-125 opacity-[0.035] dark:opacity-[0.03] mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bbs-bg via-bbs-bg/90 to-bbs-bg" />
        </div>

        <div className="relative max-w-container mx-auto px-5 sm:px-8 w-full z-10">
          {/* Centered Brand Narrative */}
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            {/* Brand Emblem & Name */}
            <div className="inline-flex items-center gap-3 mb-4">
              <img
                src="/bbs-logo.jpg"
                alt="BBS Coding Club Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-bbs-border-light shadow-sm"
              />
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-bbs-text uppercase">
                {CLUB_INFO.name}
              </span>
            </div>

            {/* Primary Tagline */}
            <div className="font-mono text-xs sm:text-sm text-bbs-accent tracking-[0.25em] uppercase font-bold mb-3">
              BUILD. LEARN. SHIP.
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-bbs-muted leading-relaxed max-w-xl mx-auto mb-6">
              A student developer community at BBS, where we build projects, learn together, and experiment with technology.
            </p>

            {/* Affiliation Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-bbs-surface border border-bbs-border text-bbs-dim font-mono text-[11px] sm:text-xs">
              <img
                src="/bbs-college-logo.png"
                alt=""
                className="h-4 w-auto object-contain shrink-0"
                aria-hidden="true"
              />
              <span>AFFILIATED WITH {CLUB_INFO.institution.toUpperCase()}</span>
            </div>
          </div>

          {/* 3 Navigation Columns (Explore, Community, Connect) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 max-w-4xl mx-auto">
            {/* Column 1: EXPLORE */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="font-mono text-xs text-bbs-accent tracking-wider uppercase mb-5 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-bbs-accent inline-block" aria-hidden="true" />
                <span>EXPLORE</span>
              </div>
              <ul className="list-none flex flex-col gap-3 p-0 m-0">
                {navExplore.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="group inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm text-bbs-muted hover:text-bbs-text transition-colors duration-200"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: COMMUNITY */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="font-mono text-xs text-bbs-accent tracking-wider uppercase mb-5 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-bbs-accent inline-block" aria-hidden="true" />
                <span>COMMUNITY</span>
              </div>
              <ul className="list-none flex flex-col gap-3 p-0 m-0">
                {navCommunity.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="group inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm text-bbs-muted hover:text-bbs-text transition-colors duration-200"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.label}
                      </span>
                      {item.label === 'Join Us' && (
                        <ArrowUpRight className="w-3.5 h-3.5 text-bbs-accent opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: CONNECT */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="font-mono text-xs text-bbs-accent tracking-wider uppercase mb-5 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-bbs-accent inline-block" aria-hidden="true" />
                <span>CONNECT</span>
              </div>
              <ul className="list-none flex flex-col gap-3 p-0 m-0">
                {navConnect.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-bbs-muted hover:text-bbs-text transition-colors duration-200"
                      >
                        <Icon className="w-3.5 h-3.5 text-bbs-dim group-hover:text-bbs-accent transition-colors duration-200 shrink-0" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {item.label}
                        </span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-bbs-accent" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. BOTTOM FOOTER AREA: Checkered / Grid Background (.section-grid)
          ───────────────────────────────────────────────────────────── */}
      <div className="section-grid border-t border-bbs-border pt-12 sm:pt-16 pb-32 sm:pb-40 relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          {/* Layered Curved SVG Transition */}
          <div 
            className="relative w-full max-w-5xl mx-auto mb-10 sm:mb-14 overflow-hidden flex items-center justify-center opacity-85" 
            aria-hidden="true"
          >
            <svg 
              viewBox="0 0 1000 120" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto stroke-bbs-border select-none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Outer Technical Arc */}
              <path
                d="M 20,110 Q 500,10 980,110"
                strokeWidth="1"
                strokeDasharray="4 6"
                className="opacity-40"
              />
              {/* Mid Primary Arc */}
              <path
                d="M 60,110 Q 500,25 940,110"
                strokeWidth="1.2"
                className="opacity-70"
              />
              {/* Inner Accent Arc */}
              <path
                d="M 140,110 Q 500,45 860,110"
                strokeWidth="1.5"
                className="stroke-bbs-accent/40"
              />
              {/* Center Focal Crosshair Marker */}
              <circle cx="500" cy="25" r="3" className="fill-bbs-accent" />
              <line x1="490" y1="25" x2="510" y2="25" strokeWidth="1" className="stroke-bbs-accent" />
              <line x1="500" y1="15" x2="500" y2="35" strokeWidth="1" className="stroke-bbs-accent" />
            </svg>
          </div>

          {/* Large Brand Statement (Visual Climax of Footer) */}
          <div className="mb-14 sm:mb-18 text-center">
            <button
              onClick={scrollToTop}
              className="group inline-block w-full max-w-6xl mx-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-bbs-accent rounded-sm py-3 transition-transform"
              title="Back to Top — BBS Coding Club"
              aria-label="BBS Coding Club — Scroll to Top"
            >
              <div className="relative inline-block w-full">
                {/* Oversized Brand Typography */}
                <div className="font-display font-extrabold uppercase tracking-tighter leading-none text-bbs-text/85 group-hover:text-bbs-accent transition-all duration-400 ease-out flex items-center justify-center gap-3 sm:gap-6 text-[clamp(2.3rem,8.6vw,8.5rem)]">
                  <span className="group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-400 ease-out">
                    BBS CODING CLUB
                  </span>
                  <span className="inline-flex items-center justify-center text-bbs-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 ease-out shrink-0">
                    <ArrowUpRight className="w-[0.65em] h-[0.65em]" />
                  </span>
                </div>

                {/* Refined Technical Accent Line */}
                <div 
                  className="h-[2px] w-0 group-hover:w-3/4 sm:group-hover:w-1/2 mx-auto bg-bbs-accent transition-all duration-500 ease-out mt-3 sm:mt-4 rounded-full" 
                  aria-hidden="true"
                />
              </div>
            </button>
          </div>

          {/* Understated Bottom Metadata */}
          <div className="border-t border-bbs-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-bbs-dim">
            {/* Copyright & College Affiliation */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-center sm:text-left">
              <span>© 2025 BBS Coding Club</span>
              <span className="hidden sm:inline text-bbs-border" aria-hidden="true">|</span>
              <span>BBS College of Engineering & Technology</span>
              <span className="hidden sm:inline text-bbs-border" aria-hidden="true">|</span>
              <span>EST. 2025</span>
            </div>

            {/* Legal / Policy Modals & Back to Top Button */}
            <div className="flex items-center gap-5">
              {onOpenPrivacy && (
                <button
                  onClick={onOpenPrivacy}
                  className="text-bbs-dim hover:text-bbs-text transition-colors p-0 cursor-pointer"
                >
                  Privacy Charter
                </button>
              )}
              {onOpenTerms && (
                <button
                  onClick={onOpenTerms}
                  className="text-bbs-dim hover:text-bbs-text transition-colors p-0 cursor-pointer"
                >
                  Code of Conduct
                </button>
              )}
              <button
                onClick={scrollToTop}
                className="group inline-flex items-center gap-1.5 text-bbs-muted hover:text-bbs-text transition-colors cursor-pointer"
                aria-label="Scroll to top of page"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5 text-bbs-accent group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
