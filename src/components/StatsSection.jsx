import React from 'react';
import { STATS } from '../data/stats.js';

export default function StatsSection() {
  return (
    <section id="stats" className="section">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span>05 / COMMUNITY & VERIFIED IMPACT</span>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <h2 className="section-heading-editorial" style={{ margin: 0 }}>
            SCALE MEASURED IN CODE AND PEOPLE.
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: 'var(--text-body-l)', color: 'var(--text-muted)' }}>
            Real verifiable metrics tracking our active campus reach and deployed initiatives.
          </p>
        </div>

        {/* High-Contrast Numerals Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {STATS.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: item.isConceptual ? 'var(--surface-raised)' : 'var(--surface)',
                border: item.isConceptual ? '1px solid var(--accent)' : '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                padding: 'clamp(2rem, 3.5vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color var(--duration-fast) var(--ease-standard)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-focus)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = item.isConceptual ? 'var(--accent)' : 'var(--border)'}
            >
              <div>
                {item.isConceptual && (
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-light)', marginBottom: '0.5rem' }}>
                    // CONCEPTUAL HORIZON
                  </div>
                )}
                <div 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    color: item.isConceptual ? 'var(--accent-light)' : 'var(--text)',
                    marginBottom: '1rem'
                  }}
                >
                  {item.number}
                </div>
              </div>

              <div>
                <div 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: 'var(--text)',
                    marginBottom: '0.5rem'
                  }}
                >
                  {item.label}
                </div>
                <div 
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5
                  }}
                >
                  {item.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
