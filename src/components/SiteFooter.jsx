import React from 'react';
import { CLUB_INFO } from '../data/clubInfo.js';

export default function SiteFooter({ onOpenPrivacy, onOpenTerms, onOpen404Demo }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070707] border-t border-bbs-border pt-16 pb-10">
      <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
        {/* Brand Banner Top */}
        <div className="flex flex-wrap justify-between items-start gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 bg-bbs-surface border border-bbs-border-light rounded flex items-center justify-center font-mono font-bold text-xs text-bbs-text">
                B
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-bbs-text">
                {CLUB_INFO.name.toUpperCase()}
              </span>
            </div>

            <p className="max-w-md text-sm text-bbs-muted leading-relaxed mb-4">
              {CLUB_INFO.missionStatement}
            </p>

            <div className="font-mono text-xs text-bbs-dim">
              AFFILIATED WITH {CLUB_INFO.institution.toUpperCase()}
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
