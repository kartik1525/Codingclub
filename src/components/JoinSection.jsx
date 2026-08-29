import React, { useState } from 'react';
import { CLUB_INFO } from '../data/clubInfo.js';

export default function JoinSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    departmentYear: 'CS - 2nd Year',
    interests: 'Distributed Systems & Backend',
    portfolioUrl: '',
    honeypot: '' // Anti-bot honeypot field
  });

  const [formState, setFormState] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Anti-bot check: if honeypot filled, silently drop
    if (formData.honeypot) {
      setFormState('success');
      return;
    }

    // Validation
    if (!formData.fullName.trim()) {
      setFormState('error');
      setErrorMessage('Full name is required to register credentials.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormState('error');
      setErrorMessage('Please provide a valid university or personal email.');
      return;
    }

    setFormState('submitting');
    setErrorMessage('');

    // Simulate async submission
    setTimeout(() => {
      setFormState('success');
    }, 900);
  };

  return (
    <section id="join" className="section">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span>07 / MEMBERSHIP INITIATION</span>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'start'
          }}
        >
          {/* Left Editorial Narrative */}
          <div>
            <h2 className="section-heading-editorial" style={{ marginBottom: '1.5rem' }}>
              READY TO BUILD?
            </h2>

            <p style={{ fontSize: 'var(--text-body-l)', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Whether you are compiling your first C program or tuning distributed microservices in Go, BBS Coding Club welcomes students with hunger, curiosity, and consistency.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="tag tag-accent">WHAT WE EXPECT</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text)' }}>
                  Active attendance in project sprints & hackathons.
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="tag tag-accent">WHAT YOU GET</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text)' }}>
                  Production mentorship, team hackathon cohorts, internal lab access.
                </span>
              </div>
            </div>

            {/* Direct Channel Links */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.75rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>
                DIRECT COMMUNITY ENTRY
              </div>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <a
                  href={CLUB_INFO.socials.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '0.8125rem' }}
                >
                  JOIN DISCORD REALM ↗
                </a>
                <a
                  href={CLUB_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '0.8125rem' }}
                >
                  CLUB GITHUB ORG ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Application Form */}
          <div 
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              padding: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            {formState === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div 
                  style={{ 
                    width: '56px', 
                    height: '56px', 
                    backgroundColor: 'rgba(34, 197, 94, 0.1)', 
                    border: '1px solid #22C55E', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                    color: '#22C55E',
                    fontSize: '1.5rem'
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem' }}>
                  APPLICATION TRANSMITTED
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Your credentials have been indexed into the Fall 2026 applicant queue. Expect an onboarding email invitation to the club Discord and workspace within 48 hours.
                </p>
                <button
                  onClick={() => {
                    setFormState('idle');
                    setFormData({
                      fullName: '',
                      email: '',
                      departmentYear: 'CS - 2nd Year',
                      interests: 'Distributed Systems & Backend',
                      portfolioUrl: '',
                      honeypot: ''
                    });
                  }}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.75rem' }}
                >
                  SUBMIT ANOTHER APPLICATION
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--accent-light)', fontWeight: 600 }}>
                    // CANDIDATE APPLICATION FORM
                  </span>
                  <span className="tag">FALL 2026</span>
                </div>

                {/* Honeypot field (hidden from screen, trapped for spam bots) */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    tabIndex={-1}
                    value={formData.honeypot}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                {/* Full Name */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label 
                    htmlFor="fullName"
                    style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}
                  >
                    FULL NAME *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Alex Rivera"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'var(--surface-raised)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text)',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                {/* Email Address */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label 
                    htmlFor="email"
                    style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}
                  >
                    COLLEGE / PERSONAL EMAIL *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@bbs.edu.in"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'var(--surface-raised)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text)',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                {/* Branch / Year */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label 
                    htmlFor="departmentYear"
                    style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}
                  >
                    BRANCH & ACADEMIC YEAR
                  </label>
                  <select
                    id="departmentYear"
                    name="departmentYear"
                    value={formData.departmentYear}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'var(--surface-raised)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text)',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  >
                    <option value="CS - 1st Year">Computer Science — 1st Year</option>
                    <option value="CS - 2nd Year">Computer Science — 2nd Year</option>
                    <option value="CS - 3rd Year">Computer Science — 3rd Year</option>
                    <option value="CS - 4th Year">Computer Science — 4th Year</option>
                    <option value="IT / ECE">IT / ECE / Circuit Branches</option>
                    <option value="Other Engineering">Other Engineering Specialization</option>
                  </select>
                </div>

                {/* Technical Interests */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label 
                    htmlFor="interests"
                    style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}
                  >
                    PRIMARY TECHNICAL INTEREST
                  </label>
                  <select
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'var(--surface-raised)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text)',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  >
                    <option value="Distributed Systems & Backend">Distributed Systems & Backend</option>
                    <option value="Modern Frontend & UI Engineering">Modern Frontend & UI Engineering</option>
                    <option value="Competitive Programming & Algorithms">Competitive Programming & Algorithms</option>
                    <option value="Open Source & Developer Tooling">Open Source & Developer Tooling</option>
                    <option value="Applied Machine Learning & AI">Applied Machine Learning & AI</option>
                    <option value="Cloud, DevOps & Linux">Cloud, DevOps & Linux</option>
                  </select>
                </div>

                {/* GitHub / Portfolio */}
                <div style={{ marginBottom: '2rem' }}>
                  <label 
                    htmlFor="portfolioUrl"
                    style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}
                  >
                    GITHUB / PORTFOLIO (OPTIONAL)
                  </label>
                  <input
                    id="portfolioUrl"
                    name="portfolioUrl"
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={handleChange}
                    placeholder="https://github.com/your-username"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'var(--surface-raised)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text)',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                {/* Error Banner */}
                {formState === 'error' && (
                  <div 
                    role="alert"
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid #EF4444',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem 1rem',
                      color: '#EF4444',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      marginBottom: '1.5rem'
                    }}
                  >
                    ✕ ERROR: {errorMessage}
                  </div>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '1rem' }}
                >
                  {formState === 'submitting' ? 'VERIFYING CREDENTIALS...' : 'JOIN THE CLUB ↗'}
                </button>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: '1rem' }}>
                  DATA RESPECTED // PROTECTED UNDER OUR PRIVACY CHARTER
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
