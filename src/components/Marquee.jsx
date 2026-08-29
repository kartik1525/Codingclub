import React from 'react';

export default function Marquee() {
  const items = [
    "BUILD",
    "LEARN",
    "COMPETE",
    "CREATE",
    "COLLABORATE",
    "SHIP",
    "DEBUG",
    "DEPLOY"
  ];

  // Repeat for continuous seamless scroll
  const repeated = [...items, ...items, ...items];

  return (
    <aside 
      aria-label="Core values ticker" 
      style={{
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--surface)',
        overflow: 'hidden',
        padding: '1.1rem 0',
        userSelect: 'none'
      }}
    >
      <div className="animate-marquee">
        {repeated.map((item, idx) => (
          <div 
            key={idx} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '2.5rem',
              paddingRight: '2.5rem'
            }}
          >
            <span 
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: idx % 3 === 0 ? 'var(--text)' : 'var(--text-muted)'
              }}
            >
              {item}
            </span>
            <span 
              style={{
                color: 'var(--accent-light)',
                fontSize: '0.9rem',
                opacity: 0.6
              }}
            >
              •
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
