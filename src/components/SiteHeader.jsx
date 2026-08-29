import React, { useState, useEffect } from 'react';
import { CLUB_INFO } from '../data/clubInfo.js';

export default function SiteHeader({ onOpenMenu, isMenuOpen, onJoinClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'var(--z-header)',
        transition: 'background-color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        padding: scrolled ? '0.85rem 0' : '1.5rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo / Identity */}
        <a 
          href="#hero" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.85rem', 
            textDecoration: 'none',
            outlineOffset: '4px'
          }}
          aria-label="BBS Coding Club Home"
        >
          <div 
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.85rem',
              color: 'var(--text)'
            }}
          >
            B
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 700, 
              fontSize: '1rem', 
              letterSpacing: '-0.02em', 
              color: 'var(--text)',
              lineHeight: 1.1
            }}>
              {CLUB_INFO.name.toUpperCase()}
            </span>
            <span style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.6875rem', 
              color: 'var(--text-muted)', 
              letterSpacing: '0.06em' 
            }}>
              EST. {CLUB_INFO.estYear} — DEV COLLECTIVE
            </span>
          </div>
        </a>

        {/* Right Actions: Status + CTA + Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          {/* Status Indicator (Desktop only) */}
          <div className="status-indicator" style={{ display: 'none' }}>
            <span className="status-dot pulse"></span>
            <span>{CLUB_INFO.status}</span>
          </div>

          <button
            onClick={onJoinClick}
            className="btn btn-secondary"
            style={{ 
              padding: '0.55rem 1rem', 
              fontSize: '0.75rem',
              display: 'none'
            }}
            id="desktop-join-btn"
          >
            JOIN ↗
          </button>

          {/* Minimal Menu Trigger per theme.md: BBS CODING CLUB ... MENU ↗ */}
          <button
            onClick={onOpenMenu}
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: 'var(--text)',
              padding: '0.6rem 1.1rem',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              background: isMenuOpen ? 'var(--surface-raised)' : 'var(--surface)',
              transition: 'all var(--duration-fast) var(--ease-standard)'
            }}
            id="nav-menu-btn"
          >
            <span>{isMenuOpen ? "CLOSE" : "MENU"}</span>
            <span style={{ color: 'var(--accent-light)' }}>{isMenuOpen ? "✕" : "↗"}</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .status-indicator {
            display: inline-flex !important;
          }
          #desktop-join-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
