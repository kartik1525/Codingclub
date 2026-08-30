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
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-5 sm:p-8"
    >
      <div className="max-w-xl w-full max-h-[85vh] overflow-y-auto bg-bbs-surface border border-bbs-border-light rounded p-6 sm:p-10 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <span className="font-mono text-xs text-bbs-accent-light tracking-wider">
            LEGAL & DATA CHARTER
          </span>
          <button 
            onClick={onClose} 
            aria-label="Close modal" 
            className="font-mono text-xs text-bbs-muted hover:text-bbs-text transition-colors"
          >
            [ESC] ✕
          </button>
        </div>

        <h2 id="privacy-title" className="font-display text-2xl font-bold text-bbs-text mb-4">
          Privacy Policy & Data Handling
        </h2>

        <div className="flex flex-col gap-4 text-bbs-muted text-sm leading-relaxed">
          <p>
            BBS Coding Club respects the privacy and technical autonomy of every student and visitor. We do not run invasive behavioral trackers, sell student records, or monetize club data.
          </p>
          <h4 className="text-bbs-text font-semibold text-base mt-2">1. Information Collected</h4>
          <p>
            When applying to join via our candidate form, we collect your name, email, department/year, and technical interests solely to organize cohorts, assign hackathon teams, and invite you to our Discord server.
          </p>
          <h4 className="text-bbs-text font-semibold text-base mt-2">2. Data Retention & Access</h4>
          <p>
            Data is stored strictly in secure club administrative databases. Access is limited solely to verified club leads and faculty mentors. You may request record deletion at any time by contacting {CLUB_INFO.socials.email}.
          </p>
        </div>

        <div className="mt-8 border-t border-bbs-border pt-4 text-right">
          <button 
            onClick={onClose} 
            className="font-mono text-xs font-semibold px-4 py-2 border border-bbs-border-light text-bbs-text rounded hover:bg-bbs-raised transition-colors"
          >
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
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-5 sm:p-8"
    >
      <div className="max-w-xl w-full max-h-[85vh] overflow-y-auto bg-bbs-surface border border-bbs-border-light rounded p-6 sm:p-10 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <span className="font-mono text-xs text-bbs-accent-light tracking-wider">
            COMMUNITY PROTOCOL
          </span>
          <button 
            onClick={onClose} 
            aria-label="Close modal" 
            className="font-mono text-xs text-bbs-muted hover:text-bbs-text transition-colors"
          >
            [ESC] ✕
          </button>
        </div>

        <h2 id="terms-title" className="font-display text-2xl font-bold text-bbs-text mb-4">
          Code of Conduct & Club Terms
        </h2>

        <div className="flex flex-col gap-4 text-bbs-muted text-sm leading-relaxed">
          <p>
            BBS Coding Club is dedicated to providing a respectful, harassment-free, and high-trust environment for all engineers regardless of background, skill level, or identity.
          </p>
          <h4 className="text-bbs-text font-semibold text-base mt-2">1. Technical Integrity</h4>
          <p>
            We uphold zero tolerance for plagiarism in competitive contests and hackathons. All open-source contributions must follow ethical attribution and open-source licenses.
          </p>
          <h4 className="text-bbs-text font-semibold text-base mt-2">2. Collaborative Culture</h4>
          <p>
            Constructive code reviews, welcoming atmosphere for first-year builders, and active knowledge sharing are mandatory club standards.
          </p>
        </div>

        <div className="mt-8 border-t border-bbs-border pt-4 text-right">
          <button 
            onClick={onClose} 
            className="font-mono text-xs font-semibold px-4 py-2 border border-bbs-border-light text-bbs-text rounded hover:bg-bbs-raised transition-colors"
          >
            ACKNOWLEDGE & CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
