import React, { useState } from 'react';
import { PILLARS } from '../data/pillars.js';

export default function AboutSection() {
  const [activePillarId, setActivePillarId] = useState(PILLARS[0].id);
  const activePillar = PILLARS.find(p => p.id === activePillarId) || PILLARS[0];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Label */}
        <div className="section-meta">
          <span>01 / ABOUT US</span>
        </div>

        {/* Editorial Asymmetric Header */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'baseline',
            marginBottom: '4.5rem'
          }}
        >
          <div>
            <h2 className="section-heading-editorial" style={{ margin: 0 }}>
              WE ARE NOT JUST A CODING CLUB.
            </h2>
          </div>

          <div>
            <p style={{ fontSize: 'var(--text-body-l)', color: 'var(--text-muted)', lineHeight: 1.65 }}>
              Most clubs stop at weekly slideshows and basic syntax. BBS Coding Club is an incubator for hands-on software craft. We build deployable applications, dissect low-level system designs, challenge algorithms in live arenas, and nurture the next generation of full-stack engineers and researchers.
            </p>
          </div>
        </div>

        {/* Interactive 4 Pillars Showcase */}
        <div 
          style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--surface)',
            overflow: 'hidden'
          }}
        >
          {/* Pillar Selector Tabs */}
          <div 
            role="tablist"
            aria-label="Club Pillars"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              borderBottom: '1px solid var(--border)',
              backgroundColor: 'var(--bg)'
            }}
          >
            {PILLARS.map((pillar) => {
              const isActive = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`pillar-panel-${pillar.id}`}
                  id={`pillar-tab-${pillar.id}`}
                  onClick={() => setActivePillarId(pillar.id)}
                  style={{
                    padding: '1.25rem 1rem',
                    textAlign: 'left',
                    background: isActive ? 'var(--surface)' : 'transparent',
                    borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                    color: isActive ? 'var(--text)' : 'var(--text-muted)',
                    transition: 'all var(--duration-fast) var(--ease-standard)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: isActive ? 'var(--accent-light)' : 'var(--text-dim)', marginBottom: '0.25rem' }}>
                    {pillar.number} // PILLAR
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.01em' }}>
                    {pillar.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Details Panel */}
          <div 
            id={`pillar-panel-${activePillar.id}`}
            role="tabpanel"
            aria-labelledby={`pillar-tab-${activePillar.id}`}
            style={{ padding: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '3rem',
                alignItems: 'center'
              }}
            >
              <div>
                <span className="tag tag-accent" style={{ marginBottom: '1.25rem' }}>
                  CORE FOCUS: {activePillar.title}
                </span>

                <h3 
                  style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: 'var(--text-display-m)', 
                    fontWeight: 700, 
                    color: 'var(--text)',
                    lineHeight: 1.15,
                    marginBottom: '1.25rem' 
                  }}
                >
                  {activePillar.tagline}
                </h3>

                <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '55ch' }}>
                  {activePillar.description}
                </p>
              </div>

              {/* Pillar Execution Deliverables */}
              <div 
                style={{
                  backgroundColor: 'var(--surface-raised)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '2rem'
                }}
              >
                <div 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.75rem', 
                    color: 'var(--accent-light)', 
                    letterSpacing: '0.08em',
                    marginBottom: '1.5rem',
                    textTransform: 'uppercase'
                  }}
                >
                  // DELIVERABLES & OUTCOMES
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {activePillar.deliverables.map((item, i) => (
                    <li 
                      key={i} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '1rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.875rem',
                        color: 'var(--text)'
                      }}
                    >
                      <span style={{ color: 'var(--accent-light)', fontWeight: 600 }}>[0{i+1}]</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
