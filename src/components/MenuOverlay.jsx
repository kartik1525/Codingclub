import React, { useEffect, useRef } from 'react';
import { CLUB_INFO } from '../data/clubInfo.js';
import { MENU_OVERLAY_ITEMS } from '../data/navigation.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function MenuOverlay({ isOpen, onClose, onNavigate }) {
  const firstLinkRef = useRef(null);

  // Lock background scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        if (firstLinkRef.current) {
          firstLinkRef.current.focus();
        }
      }, 50);

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        clearTimeout(timer);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navItems = MENU_OVERLAY_ITEMS;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      className="fixed inset-0 bg-bbs-bg/95 backdrop-blur-xl z-50 flex flex-col justify-between p-6 sm:p-10 md:p-16 pt-24 overflow-y-auto"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Navigation Header Meta */}
        <div className="flex justify-between items-center border-b border-bbs-border pb-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-bbs-accent-light tracking-wider uppercase">
              SITE NAVIGATION INDEX
            </span>
            <ThemeToggle />
          </div>
          <button
            onClick={onClose}
            className="font-mono text-xs text-bbs-muted hover:text-bbs-text flex items-center gap-2 transition-colors cursor-pointer"
            aria-label="Close navigation"
          >
            <span>[ESC] CLOSE</span>
            <span className="text-bbs-text">✕</span>
          </button>
        </div>

        {/* Primary Links */}
        <nav aria-label="Main menu links">
          <ul className="list-none flex flex-col gap-3 sm:gap-4">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <a
                  ref={index === 0 ? firstLinkRef : null}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                  }}
                  className="group flex items-baseline gap-4 text-bbs-text hover:text-bbs-accent-light font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none no-underline transition-all hover:translate-x-3"
                >
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social / External Links Underneath */}
      <div className="max-w-5xl mx-auto w-full mt-10">
        <div className="border-t border-bbs-border pt-6 flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-6 flex-wrap">
            <a
              href={CLUB_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-bbs-muted hover:text-bbs-text transition-colors"
            >
              GITHUB ↗
            </a>
            <a
              href={CLUB_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-bbs-muted hover:text-bbs-text transition-colors"
            >
              LINKEDIN ↗
            </a>
            <a
              href={CLUB_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-bbs-muted hover:text-bbs-text transition-colors"
            >
              INSTAGRAM ↗
            </a>
            <a
              href={CLUB_INFO.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-bbs-muted hover:text-bbs-text transition-colors"
            >
              DISCORD ↗
            </a>
          </div>

          <span className="font-mono text-xs text-bbs-dim">
            {CLUB_INFO.coordinates} · {CLUB_INFO.location}
          </span>
        </div>
      </div>
    </div>
  );
}
