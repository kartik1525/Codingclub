import React from 'react';
import { CLUB_INFO } from '../data/clubInfo.js';

export default function SiteFooter({ onOpenPrivacy, onOpenTerms, onOpen404Demo }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        backgroundColor: '#070707',
        borderTop: '1px solid var(--border)',
        paddingTop: '5rem',
        paddingBottom: '3.5rem'
      }}
    >
      <div className="container">
        {/* Brand Banner Top */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div 
                style={{
                  width: '28px',
                  height: '28px',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  color: 'var(--text)'
                }}
              >
                B
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                {CLUB_INFO.name.toUpperCase()}
              </span>
            </div>

            <p style={{ maxWidth: '42ch', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {CLUB_INFO.missionStatement}
            </p>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              AFFILIATED WITH {CLUB_INFO.institution.toUpperCase()}
            </div>
          </div>

          {/* Direct Social & Quick Links */}
          <div style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-light)', marginBottom: '1rem', letterSpacing: '0.08em' }}>
                // CHANNELS
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li>
                  <a href={CLUB_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: 0 }}>
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a href={CLUB_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: 0 }}>
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href={CLUB_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: 0 }}>
                    Instagram ↗
                  </a>
                </li>
                <li>
                  <a href={CLUB_INFO.socials.discord} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: 0 }}>
                    Discord ↗
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-light)', marginBottom: '1rem', letterSpacing: '0.08em' }}>
                // POLICIES & SPECS
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li>
                  <button onClick={onOpenPrivacy} className="btn-ghost" style={{ padding: 0, textAlign: 'left' }}>
                    Privacy Charter
                  </button>
                </li>
                <li>
                  <button onClick={onOpenTerms} className="btn-ghost" style={{ padding: 0, textAlign: 'left' }}>
                    Code of Conduct
                  </button>
                </li>
                <li>
                  <button onClick={onOpen404Demo} className="btn-ghost" style={{ padding: 0, textAlign: 'left' }}>
                    404 Page (Edge State)
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div 
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.25rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            © {currentYear} {CLUB_INFO.name}. CRAFTED FOR BUILDERS.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>GEO: {CLUB_INFO.coordinates}</span>
            <button 
              onClick={scrollToTop}
              style={{
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <span style={{ color: 'var(--accent-light)' }}>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
