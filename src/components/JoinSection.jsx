import React, { useState } from 'react';
import { CLUB_INFO } from '../data/clubInfo.js';
import ViewportText from './ViewportText.jsx';

export default function JoinSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    departmentYear: 'CS - 1st Year',
    interests: 'Web Development & Apps',
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

    if (formData.honeypot) {
      setFormState('success');
      return;
    }

    if (!formData.fullName.trim()) {
      setFormState('error');
      setErrorMessage('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormState('error');
      setErrorMessage('Please enter a valid student or personal email.');
      return;
    }

    setFormState('submitting');
    setErrorMessage('');

    setTimeout(() => {
      setFormState('success');
    }, 800);
  };

  return (
    <section id="join" className="py-20 sm:py-28 border-t border-bbs-border relative">
      <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
        {/* Section Meta */}
        <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-6">
          <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block"></span>
          <span>07 / JOIN THE COMMUNITY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-6">
            <ViewportText
              as="h2"
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-bbs-text leading-tight m-0 mb-6"
            >
              READY TO BUILD?
            </ViewportText>

            <p className="text-base sm:text-lg text-bbs-muted leading-relaxed mb-8 max-w-xl">
              Whether you wrote your first lines of Python last semester or have already deployed side projects, BBS Coding Club welcomes any student who wants to learn, build, and ship real code.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/30">
                  WHAT WE VALUE
                </span>
                <span className="font-mono text-xs sm:text-sm text-bbs-text">
                  Curiosity, consistency, and a willingness to learn in public.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/30">
                  WHAT YOU GET
                </span>
                <span className="font-mono text-xs sm:text-sm text-bbs-text">
                  Teammates for hackathons, project reviews, and a real community.
                </span>
              </div>
            </div>

            {/* Direct Channel Links */}
            <div className="border-t border-bbs-border pt-6">
              <div className="font-mono text-xs text-bbs-dim mb-3 uppercase">
                DIRECT COMMUNITY CHANNELS
              </div>
              <div className="flex gap-4 flex-wrap">
                <a
                  href={CLUB_INFO.socials.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold px-4 py-2 border border-bbs-border-light text-bbs-text rounded hover:bg-bbs-surface hover:border-bbs-muted transition-colors"
                >
                  JOIN CLUB DISCORD ↗
                </a>
                <a
                  href={CLUB_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold px-4 py-2 border border-bbs-border-light text-bbs-text rounded hover:bg-bbs-surface hover:border-bbs-muted transition-colors"
                >
                  GITHUB ORGANISATION ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Application Form */}
          <div className="lg:col-span-6 bg-bbs-surface border border-bbs-border rounded p-6 sm:p-10">
            {formState === 'success' ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 text-emerald-400 text-2xl">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-bold text-bbs-text mb-3">
                  WELCOME TO THE SQUAD
                </h3>
                <p className="text-bbs-muted text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
                  Your submission has been recorded. Check your inbox for our next hackathon meet details and an invite to our Discord channels.
                </p>
                <button
                  onClick={() => {
                    setFormState('idle');
                    setFormData({
                      fullName: '',
                      email: '',
                      departmentYear: 'CS - 1st Year',
                      interests: 'Web Development & Apps',
                      portfolioUrl: '',
                      honeypot: ''
                    });
                  }}
                  className="font-mono text-xs font-semibold px-5 py-2.5 border border-bbs-border-light text-bbs-text rounded hover:bg-bbs-raised transition-colors"
                >
                  SUBMIT ANOTHER RESPONSE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-xs text-bbs-accent-light font-semibold">
                    // SIGNUP FOR 2026 COHORT
                  </span>
                  <span className="font-mono text-[11px] text-bbs-muted px-2 py-0.5 border border-bbs-border rounded">
                    FREE MEMBERSHIP
                  </span>
                </div>

                {/* Honeypot field */}
                <div className="hidden" aria-hidden="true">
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
                <div className="mb-5">
                  <label 
                    htmlFor="fullName"
                    className="block font-mono text-xs text-bbs-muted mb-2 uppercase"
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
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 bg-bbs-raised border border-bbs-border rounded text-bbs-text text-sm focus:outline-none focus:border-bbs-accent transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="mb-5">
                  <label 
                    htmlFor="email"
                    className="block font-mono text-xs text-bbs-muted mb-2 uppercase"
                  >
                    STUDENT / PERSONAL EMAIL *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. student@college.edu.in"
                    className="w-full px-4 py-3 bg-bbs-raised border border-bbs-border rounded text-bbs-text text-sm focus:outline-none focus:border-bbs-accent transition-colors"
                  />
                </div>

                {/* Branch / Year */}
                <div className="mb-5">
                  <label 
                    htmlFor="departmentYear"
                    className="block font-mono text-xs text-bbs-muted mb-2 uppercase"
                  >
                    BRANCH & YEAR
                  </label>
                  <select
                    id="departmentYear"
                    name="departmentYear"
                    value={formData.departmentYear}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bbs-raised border border-bbs-border rounded text-bbs-text text-sm focus:outline-none focus:border-bbs-accent transition-colors"
                  >
                    <option value="CS - 1st Year">CSE — 1st Year (Freshman)</option>
                    <option value="CS - 2nd Year">CSE — 2nd Year</option>
                    <option value="CS - 3rd Year">CSE — 3rd Year</option>
                    <option value="CS - 4th Year">CSE — Final Year</option>
                    <option value="IT / ECE">IT / ECE / Circuit Branches</option>
                    <option value="Other Engineering">Other Engineering Branch</option>
                  </select>
                </div>

                {/* Technical Interests */}
                <div className="mb-5">
                  <label 
                    htmlFor="interests"
                    className="block font-mono text-xs text-bbs-muted mb-2 uppercase"
                  >
                    WHAT ARE YOU EXCITED TO LEARN / BUILD?
                  </label>
                  <select
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bbs-raised border border-bbs-border rounded text-bbs-text text-sm focus:outline-none focus:border-bbs-accent transition-colors"
                  >
                    <option value="Web Development & Apps">Web Development & Full-Stack Apps</option>
                    <option value="Competitive Programming">Competitive Programming & Data Structures</option>
                    <option value="Open Source & Developer Tools">Open Source & Developer Tools</option>
                    <option value="Hackathon Squads">Hackathon Squads & Rapid Prototyping</option>
                    <option value="Machine Learning & AI">Machine Learning & Applied AI</option>
                    <option value="Systems & Linux">Systems, Backend & Linux</option>
                  </select>
                </div>

                {/* GitHub / Portfolio */}
                <div className="mb-6">
                  <label 
                    htmlFor="portfolioUrl"
                    className="block font-mono text-xs text-bbs-muted mb-2 uppercase"
                  >
                    GITHUB / PORTFOLIO (IF ANY — TOTALLY OPTIONAL)
                  </label>
                  <input
                    id="portfolioUrl"
                    name="portfolioUrl"
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={handleChange}
                    placeholder="https://github.com/username"
                    className="w-full px-4 py-3 bg-bbs-raised border border-bbs-border rounded text-bbs-text text-sm focus:outline-none focus:border-bbs-accent transition-colors"
                  />
                </div>

                {/* Error Banner */}
                {formState === 'error' && (
                  <div 
                    role="alert"
                    className="bg-red-500/10 border border-red-500 rounded p-3 text-red-400 font-mono text-xs mb-5"
                  >
                    ✕ {errorMessage}
                  </div>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full py-3.5 px-6 rounded bg-bbs-accent text-white font-mono text-sm font-semibold tracking-wide hover:bg-bbs-accent-hover transition-colors disabled:opacity-50"
                >
                  {formState === 'submitting' ? 'SENDING RESPONSE...' : 'JOIN BBS CODING CLUB ↗'}
                </button>

                <div className="font-mono text-[11px] text-bbs-dim text-center mt-3">
                  NO FEES // ALL STUDENTS WELCOME REGARDLESS OF EXPERIENCE
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
