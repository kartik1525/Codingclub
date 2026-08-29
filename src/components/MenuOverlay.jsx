import React, { useEffect, useRef } from 'react';
import { CLUB_INFO } from '../data/clubInfo.js';

export default function MenuOverlay({ isOpen, onClose, onNavigate }) {
  const overlayRef = useRef(null);
  const firstLinkRef = useRef(null);

  // Lock background scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus first link on open
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

  const navItems = [
    { num: "01", label: "ABOUT", id: "about" },
    { num: "02", label: "ACTIVITY UNIVERSE", id: "universe" },
    { num: "03", label: "SELECTED BUILDS", id: "projects" },
    { num: "04", label: "EVENTS", id: "events" },
    { num: "05", label: "COMMUNITY & IMPACT", id: "stats" },
    { num: "06", label: "TEAM", id: "team" },
    { num: "07", label: "JOIN THE CLUB", id: "join" },
  ];

  return (
    <div
      ref={overlayRef}
      id="main-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(10, 10, 10, 0.97)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 'var(--z-overlay)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'var(--gutter)',
        paddingTop: '6rem',
        overflowY: 'auto'
      }}
    >
      <div className="container" style={{ maxWidth: '1100px', width: '100%' }}>
        {/* Navigation Header Meta */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          borderBottom: '1px solid var(--border)',
          paddingBottom: '1.25rem',
          marginBottom: '2.5rem'
        }}>
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.8125rem', 
            color: 'var(--accent-light)',
            letterSpacing: '0.08em'
          }}>
            // SITE NAVIGATION INDEX
          </span>
          <button
            onClick={onClose}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            aria-label="Close navigation"
          >
            <span>[ESC] CLOSE</span>
            <span style={{ color: 'var(--text)' }}>✕</span>
          </button>
        </div>

        {/* Primary Links */}
        <nav aria-label="Main menu links">
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navItems.map((item, index) => (
              <li key={item.id}>
                <a
                  ref={index === 0 ? firstLinkRef : null}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '1.25rem',
                    color: 'var(--text)',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 5.5vw, 3.5rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    textDecoration: 'none',
                    transition: 'color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent-light)';
                    e.currentTarget.style.transform = 'translateX(12px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: 'clamp(0.9rem, 2vw, 1.25rem)', 
                    color: 'var(--accent-light)', 
                    fontWeight: 500 
                  }}>
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social / External Links Underneath */}
      <div className="container" style={{ maxWidth: '1100px', width: '100%', marginTop: '3rem' }}>
        <div style={{ 
          borderTop: '1px solid var(--border)', 
          paddingTop: '1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a
              href={CLUB_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}
            >
              GITHUB ↗
            </a>
            <a
              href={CLUB_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}
            >
              LINKEDIN ↗
            </a>
            <a
              href={CLUB_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}
            >
              INSTAGRAM ↗
            </a>
            <a
              href={CLUB_INFO.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}
            >
              DISCORD ↗
            </a>
          </div>

          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.75rem', 
            color: 'var(--text-muted)' 
          }}>
            {CLUB_INFO.coordinates} // {CLUB_INFO.location}
          </span>
        </div>
      </div>
    </div>
  );
}
