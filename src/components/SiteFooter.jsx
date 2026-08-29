import React from 'react';
import { CLUB_INFO } from '../data/clubInfo.js';

export default function SiteFooter({ onOpenPrivacy, onOpenTerms, onOpen404Demo }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bbs-bg border-t border-bbs-border pt-16 pb-24 sm:pb-28 transition-colors duration-300">
      <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
        {/* Brand Banner Top */}
        <div className="flex flex-wrap justify-between items-start gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img 
                src="/bbs-logo.jpg" 
                alt="BBS Coding Club Logo" 
                className="w-8 h-8 rounded-full object-cover border border-bbs-border-light shadow-sm" 
              />
              <span className="font-display text-xl font-bold tracking-tight text-bbs-text">
                {CLUB_INFO.name.toUpperCase()}
              </span>
            </div>

            <p className="max-w-md text-sm text-bbs-muted leading-relaxed mb-4">
              {CLUB_INFO.missionStatement}
            </p>

            <div className="font-mono text-xs text-bbs-dim flex items-center gap-2">
              <img src="/bbs-college-logo.png" alt="BBS College Emblem" className="h-5 w-auto object-contain shrink-0" />
              <span>AFFILIATED WITH {CLUB_INFO.institution.toUpperCase()}</span>
            </div>
          </div>

          {/* Direct Social & Quick Links */}
          <div className="flex gap-12 sm:gap-16 flex-wrap">
            <div>
              <div className="font-mono text-xs text-bbs-accent-light mb-3 tracking-wider">
                // CHANNELS
              </div>
              <ul className="list-none flex flex-col gap-2 p-0 m-0">
                <li>
                  <a href={CLUB_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-bbs-muted hover:text-bbs-text transition-colors">
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a href={CLUB_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-bbs-muted hover:text-bbs-text transition-colors">
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href={CLUB_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-bbs-muted hover:text-bbs-text transition-colors">
                    Instagram ↗
                  </a>
                </li>
                <li>
                  <a href={CLUB_INFO.socials.discord} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-bbs-muted hover:text-bbs-text transition-colors">
                    Discord ↗
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-xs text-bbs-accent-light mb-3 tracking-wider">
                // POLICIES & SPECS
              </div>
              <ul className="list-none flex flex-col gap-2 p-0 m-0">
                <li>
                  <button onClick={onOpenPrivacy} className="font-mono text-xs text-bbs-muted hover:text-bbs-text transition-colors text-left p-0">
                    Privacy Charter
                  </button>
                </li>
                <li>
                  <button onClick={onOpenTerms} className="font-mono text-xs text-bbs-muted hover:text-bbs-text transition-colors text-left p-0">
                    Code of Conduct
                  </button>
                </li>
                <li>
                  <button onClick={onOpen404Demo} className="font-mono text-xs text-bbs-muted hover:text-bbs-text transition-colors text-left p-0">
                    404 Page (Edge State)
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-bbs-border pt-6 flex flex-wrap justify-between items-center gap-4 font-mono text-xs text-bbs-dim">
          <div>
            © {currentYear} {CLUB_INFO.name}. CRAFTED FOR BUILDERS.
          </div>

          <div className="flex items-center gap-5">
            <span>GEO: {CLUB_INFO.coordinates}</span>
            <button 
              onClick={scrollToTop}
              className="text-bbs-muted hover:text-bbs-text font-mono text-xs inline-flex items-center gap-1 transition-colors"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <span className="text-bbs-accent-light">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
