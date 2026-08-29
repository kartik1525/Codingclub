import React, { useState, useEffect } from 'react';
import { CLUB_INFO } from '../data/clubInfo.js';

export default function Hero({ onJoinClick }) {
  const statements = ["WE BUILD.", "WE EXPERIMENT.", "WE SHIP.", "WE LEARN."];
  const [statementIndex, setStatementIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatementIndex((prev) => (prev + 1) % statements.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [statements.length]);

  return (
    <section 
      id="hero" 
      className="subtle-grid"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        position: 'relative',
        borderBottom: '1px solid var(--border)'
      }}
    >
      <div className="container">
        {/* Top Sub-bar / Club Identity Badge */}
        <div 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.85rem',
            padding: '0.4rem 0.85rem',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '2rem'
          }}
        >
          <span className="status-dot pulse"></span>
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.75rem', 
            fontWeight: 600, 
            letterSpacing: '0.08em',
            color: 'var(--text)'
          }}>
            {CLUB_INFO.name.toUpperCase()} // OFFICIAL COMMUNITY
          </span>
        </div>

        {/* Hero Kinetic Statement */}
        <div style={{ minHeight: 'clamp(7rem, 20vw, 17rem)', display: 'flex', alignItems: 'flex-start' }}>
          <h1 
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-hero)',
              fontWeight: 800,
              lineHeight: 0.94,
              letterSpacing: '-0.04em',
              color: 'var(--text)',
              textTransform: 'uppercase'
            }}
          >
            {statements[statementIndex]}
          </h1>
        </div>

        {/* Narrative Split: Supporting Copy + Actions */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'flex-end',
            marginTop: '2rem',
            marginBottom: '3.5rem'
          }}
        >
          <div>
            <p 
              style={{
                fontSize: 'var(--text-body-l)',
                lineHeight: 1.6,
                color: 'var(--text-muted)',
                maxWidth: '48ch'
              }}
            >
              A student-led engineering collective where developers, designers, and systems architects turn technical curiosity into working software, competitive breakthroughs, and open-source systems.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={onJoinClick}
                className="btn btn-primary"
                id="hero-join-btn"
              >
                JOIN THE CLUB ↗
              </button>
              
              <a
                href="#projects"
                className="btn btn-secondary"
              >
                EXPLORE WHAT WE BUILD ↓
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="tag tag-accent">FALL 2026 COHORT</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                APPLICATIONS OPEN
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Technical Metadata Bar */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            <span>EST. {CLUB_INFO.estYear}</span>
            <span style={{ margin: '0 0.5rem' }}>—</span>
            <span>{CLUB_INFO.institution.toUpperCase()}</span>
          </div>

          <div>
            <span>GEO: {CLUB_INFO.coordinates}</span>
          </div>

          <div>
            <span>PROTOCOL: HYBRID // CAMPUS & ASYNC</span>
          </div>
        </div>
      </div>
    </section>
  );
}
