import React, { useState } from 'react';
import { ACTIVITY_ZONES } from '../data/activityZones.js';

export default function ActivityUniverse() {
  const [selectedId, setSelectedId] = useState(ACTIVITY_ZONES[0].id);
  const activeZone = ACTIVITY_ZONES.find(z => z.id === selectedId) || ACTIVITY_ZONES[0];

  return (
    <section id="universe" className="section subtle-grid">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta">
          <span>02 / ACTIVITY UNIVERSE</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <h2 className="section-heading-editorial" style={{ margin: 0 }}>
              WHERE BUILDERS CONVERGE.
            </h2>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              SELECT AN ARENA TO INSPECT SPECIFICATIONS [TOUCH / CLICK]
            </span>
          </div>
        </div>

        {/* Signature Interactive Typographic Constellation */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Typographic Matrix (7 cols on desktop) */}
          <div 
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)'
            }}
            id="universe-matrix"
          >
            {ACTIVITY_ZONES.map((zone) => {
              const isSelected = zone.id === selectedId;
              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedId(zone.id)}
                  onMouseEnter={() => setSelectedId(zone.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    background: isSelected ? 'var(--surface-raised)' : 'transparent',
                    border: isSelected ? '1px solid var(--accent)' : '1px solid transparent',
                    color: isSelected ? '#ffffff' : 'var(--text-muted)',
                    transition: 'all var(--duration-fast) var(--ease-standard)',
                    textAlign: 'left',
                    width: '100%'
                  }}
                  aria-pressed={isSelected}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
                    <span style={{ 
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '0.8125rem', 
                      color: isSelected ? 'var(--accent-light)' : 'var(--text-dim)',
                      width: '24px'
                    }}>
                      //
                    </span>
                    <span style={{ 
                      fontFamily: 'var(--font-display)', 
                      fontSize: 'clamp(1.25rem, 3vw, 2rem)', 
                      fontWeight: 700, 
                      letterSpacing: '-0.02em',
                      color: isSelected ? '#ffffff' : 'inherit'
                    }}>
                      {zone.title}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span 
                      className="tag"
                      style={{ 
                        display: 'none',
                        borderColor: isSelected ? 'rgba(37, 99, 235, 0.4)' : 'var(--border)'
                      }}
                    >
                      {zone.role}
                    </span>
                    <span style={{ 
                      color: isSelected ? 'var(--accent-light)' : 'var(--text-dim)',
                      transform: isSelected ? 'translateX(4px)' : 'none',
                      transition: 'transform var(--duration-fast) var(--ease-standard)'
                    }}>
                      →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Inspector Panel (5 cols on desktop) */}
          <div 
            style={{
              gridColumn: 'span 12',
              backgroundColor: 'var(--surface-raised)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            id="universe-inspector"
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span className="tag tag-accent">{activeZone.role}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  CADENCE: {activeZone.frequency}
                </span>
              </div>

              <h3 
                style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: 'var(--text-heading-l)', 
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: 'var(--text)'
                }}
              >
                {activeZone.title}
              </h3>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '2rem' }}>
                {activeZone.description}
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>
                  KEY TRACKS & INITIATIVES
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {activeZone.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div 
              style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-dim)' }}>
                  VERIFIED STATISTIC
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-light)' }}>
                  {activeZone.stats}
                </div>
              </div>

              <a 
                href="#events" 
                className="btn btn-secondary"
                style={{ fontSize: '0.75rem', padding: '0.55rem 0.95rem' }}
              >
                VIEW ACTIVITIES ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          #universe-matrix {
            grid-column: span 7 !important;
          }
          #universe-inspector {
            grid-column: span 5 !important;
          }
          #universe-matrix .tag {
            display: inline-flex !important;
          }
        }
      `}</style>
    </section>
  );
}
