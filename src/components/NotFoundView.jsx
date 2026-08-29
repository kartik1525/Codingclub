import React from 'react';

export default function NotFoundView({ onReturnHome }) {
  return (
    <div 
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem var(--gutter)'
      }}
    >
      <div 
        style={{
          maxWidth: '680px',
          width: '100%',
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          padding: 'clamp(2rem, 5vw, 4rem)',
          textAlign: 'center'
        }}
      >
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--accent-light)', marginBottom: '1.25rem' }}>
          // HTTP 404 — ROUTE COMPILATION FAILURE
        </div>

        <h1 
          style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--text)',
            marginBottom: '1.25rem' 
          }}
        >
          THIS PAGE DIDN'T COMPILE.
        </h1>

        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: '0 auto 2.5rem auto' }}>
          The requested endpoint does not exist on the BBS server tree or has been refactored into another module.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={onReturnHome}
            className="btn btn-primary"
          >
            ← RETURN TO MAIN ROUTE
          </button>
          <a
            href="#projects"
            onClick={onReturnHome}
            className="btn btn-secondary"
          >
            EXPLORE SELECTED BUILDS
          </a>
        </div>
      </div>
    </div>
  );
}
