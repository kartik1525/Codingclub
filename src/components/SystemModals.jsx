import React, { useEffect } from 'react';
import { CLUB_INFO } from '../data/clubInfo.js';

export function PrivacyModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 'var(--z-modal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--gutter)'
      }}
    >
      <div 
        style={{
          maxWidth: '640px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-sm)',
          padding: '2.5rem'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-light)' }}>
            // LEGAL & DATA CHARTER
          </span>
          <button onClick={onClose} aria-label="Close modal" style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
            [ESC] ✕
          </button>
        </div>

        <h2 id="privacy-title" style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text)' }}>
          Privacy Policy & Data Handling
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6 }}>
          <p>
            BBS Coding Club respects the privacy and technical autonomy of every student and visitor. We do not run invasive behavioral trackers, sell student records, or monetize club data.
          </p>
          <h4 style={{ color: 'var(--text)', fontSize: '1rem', marginTop: '0.5rem' }}>1. Information Collected</h4>
          <p>
            When applying to join via our candidate form, we collect your name, email, department/year, and technical interests solely to organize cohorts, assign hackathon teams, and invite you to our Discord server.
          </p>
          <h4 style={{ color: 'var(--text)', fontSize: '1rem', marginTop: '0.5rem' }}>2. Data Retention & Access</h4>
          <p>
            Data is stored strictly in secure club administrative databases. Access is limited solely to verified club leads and faculty mentors. You may request record deletion at any time by contacting {CLUB_INFO.socials.email}.
          </p>
        </div>

        <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem', textAlign: 'right' }}>
          <button onClick={onClose} className="btn btn-secondary" style={{ fontSize: '0.75rem' }}>
            CLOSE CHARTER
          </button>
        </div>
      </div>
    </div>
  );
}

export function TermsModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-title"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 'var(--z-modal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--gutter)'
      }}
    >
      <div 
        style={{
          maxWidth: '640px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-sm)',
          padding: '2.5rem'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-light)' }}>
            // COMMUNITY PROTOCOL
          </span>
          <button onClick={onClose} aria-label="Close modal" style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
            [ESC] ✕
          </button>
        </div>

        <h2 id="terms-title" style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text)' }}>
          Code of Conduct & Club Terms
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6 }}>
          <p>
            BBS Coding Club is dedicated to providing a respectful, harassment-free, and high-trust environment for all engineers regardless of background, skill level, or identity.
          </p>
          <h4 style={{ color: 'var(--text)', fontSize: '1rem', marginTop: '0.5rem' }}>1. Technical Integrity</h4>
          <p>
            We uphold zero tolerance for plagiarism in competitive contests and hackathons. All open-source contributions must follow ethical attribution and open-source licenses.
          </p>
          <h4 style={{ color: 'var(--text)', fontSize: '1rem', marginTop: '0.5rem' }}>2. Collaborative Culture</h4>
          <p>
            Constructive code reviews, welcoming atmosphere for first-year builders, and active knowledge sharing are mandatory club standards.
          </p>
        </div>

        <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem', textAlign: 'right' }}>
          <button onClick={onClose} className="btn btn-secondary" style={{ fontSize: '0.75rem' }}>
            ACKNOWLEDGE & CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
