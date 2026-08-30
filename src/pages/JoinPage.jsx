import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Terminal, Users, Sparkles } from 'lucide-react';
import Section from '../components/Section.jsx';
import { CLUB_INFO } from '../data/clubInfo.js';
import { DEPARTMENTS } from '../data/departments.js';
import { 
  JOIN_PAGE_HEADER, 
  WHY_JOIN_HIGHLIGHTS, 
  JOIN_STEPS, 
  BRANCH_YEAR_OPTIONS, 
  ALTERNATE_CHANNELS_CALLOUT 
} from '../data/join.js';

const HIGHLIGHT_ICONS = {
  terminal: Terminal,
  users: Users,
  sparkles: Sparkles
};

export default function JoinPage() {
  const [searchParams] = useSearchParams();
  const initialTrack = searchParams.get('track') || searchParams.get('dept') || DEPARTMENTS[0].id;

  const [selectedDeptId, setSelectedDeptId] = useState(initialTrack);
  const selectedDept = DEPARTMENTS.find(d => d.id === selectedDeptId) || DEPARTMENTS[0];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    departmentYear: BRANCH_YEAR_OPTIONS[0]?.value || 'B.Tech CSE - 1st Year',
    interests: selectedDept.name,
    portfolioUrl: '',
    experienceNote: '',
    honeypot: ''
  });

  const [formState, setFormState] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Update form interests when department changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      interests: selectedDept.name
    }));
  }, [selectedDept]);

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
      setErrorMessage('Please enter a valid student or personal email address.');
      return;
    }

    setFormState('submitting');
    setErrorMessage('');

    setTimeout(() => {
      setFormState('success');
    }, 800);
  };

  return (
    <div className="flex flex-col">
      {/* 1. Introduction & Why Join — Normal Solid Background */}
      <Section variant="solid" className="pt-14 sm:pt-20 pb-12 sm:pb-16">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="mb-14">
            <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
              <span>{JOIN_PAGE_HEADER.badge}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-bbs-text leading-tight mb-6 whitespace-pre-line">
              {JOIN_PAGE_HEADER.title}
            </h1>
            <p className="text-lg sm:text-xl text-bbs-muted max-w-3xl leading-relaxed">
              {JOIN_PAGE_HEADER.description}
            </p>
          </div>

          {/* Why Join Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_JOIN_HIGHLIGHTS.map((item) => {
              const IconComponent = HIGHLIGHT_ICONS[item.iconType] || Terminal;
              return (
                <div key={item.id} className="bg-bbs-surface border border-bbs-border rounded p-6">
                  <div className="w-9 h-9 rounded bg-bbs-accent-dim text-bbs-accent-light flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-bbs-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-bbs-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 2. Step 1: Department Selection — Checkered / Grid Background */}
      <Section variant="grid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-8">
            <div>
              <div className="font-mono text-xs text-bbs-accent-light mb-1 uppercase">
                {JOIN_STEPS.step1.badge}
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-bbs-text">
                {JOIN_STEPS.step1.title}
              </h2>
            </div>
            <span className="font-mono text-xs text-bbs-dim">
              {JOIN_STEPS.step1.hint}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEPARTMENTS.map((dept) => {
              const isSelected = dept.id === selectedDeptId;
              return (
                <button
                  key={dept.id}
                  onClick={() => handleDepartmentSelect(dept.id)}
                  className={`p-6 rounded text-left border transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-bbs-surface border-bbs-accent shadow-lg shadow-bbs-accent/15 ring-2 ring-bbs-accent/40'
                      : 'bg-bbs-surface/80 border-bbs-border hover:border-bbs-border-focus hover:bg-bbs-surface'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-bbs-raised border border-bbs-border text-bbs-accent-light">
                      {dept.code}
                    </span>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-bbs-accent text-white flex items-center justify-center text-xs">
                        ✓
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-bold text-bbs-text mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-bbs-muted leading-relaxed line-clamp-3">
                    {dept.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 3. Step 2: Track Details & Application Form — Normal Solid Background */}
      <Section variant="solid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Selected Department Overview */}
            <div className="lg:col-span-5 bg-bbs-surface border border-bbs-border rounded p-6 sm:p-8 shadow-sm">
              <div className="font-mono text-xs text-bbs-accent-light mb-2 uppercase">
                SELECTED TRACK DETAILS
              </div>
              <h3 className="font-display text-2xl font-bold text-bbs-text mb-2">
                {selectedDept.name}
              </h3>
              <div className="font-mono text-xs text-bbs-dim mb-4">
                TRACK LEAD: {selectedDept.leadName.toUpperCase()} ({selectedDept.leadYear})
              </div>
              <p className="text-sm text-bbs-muted leading-relaxed mb-6">
                {selectedDept.description}
              </p>

              <div className="p-4 bg-bbs-raised border border-bbs-border rounded mb-6 text-xs text-bbs-text leading-relaxed">
                <span className="font-mono text-[10px] text-bbs-dim block mb-1 uppercase">
                  CORE TRACK OBJECTIVE:
                </span>
                {selectedDept.purpose}
              </div>

              <div className="mb-6">
                <div className="font-mono text-xs text-bbs-dim mb-2 uppercase">
                  WHAT YOU'LL WORK ON:
                </div>
                <ul className="list-none p-0 m-0 space-y-2">
                  {selectedDept.responsibilities.slice(0, 3).map((r, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-bbs-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-bbs-accent shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-bbs-border pt-4">
                <div className="font-mono text-[11px] text-bbs-dim mb-2 uppercase">
                  CORE TOOLS:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDept.tools.map((t, idx) => (
                    <span key={idx} className="font-mono text-[11px] px-2 py-0.5 bg-bbs-raised border border-bbs-border rounded text-bbs-text">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="lg:col-span-7 bg-bbs-surface border border-bbs-border rounded p-6 sm:p-10 shadow-xl">
              <div className="font-mono text-xs text-bbs-accent-light mb-1 uppercase">
                {JOIN_STEPS.step2.badge}
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-bbs-text mb-2">
                {JOIN_STEPS.step2.title}
              </h2>
              <p className="text-sm text-bbs-muted mb-8">
                Applying for: <strong className="text-bbs-text">{selectedDept.name}</strong>
              </p>

              {formState === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 text-emerald-400 text-2xl">
                    ✓
                  </div>
                  <h3 className="font-display text-2xl font-bold text-bbs-text mb-3">
                    APPLICATION RECORDED
                  </h3>
                  <p className="text-bbs-muted text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>! Your application for <strong>{selectedDept.name}</strong> has been registered. You'll receive onboarding details and invitation to the private club channel before our next sprint.
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <a
                      href={CLUB_INFO.socials.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-colors"
                    >
                      <span>JOIN DISCORD COMMUNITY</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => {
                        setFormState('idle');
                        setFormData({
                          fullName: '',
                          email: '',
                          departmentYear: BRANCH_YEAR_OPTIONS[0]?.value || 'B.Tech CSE - 1st Year',
                          interests: selectedDept.name,
                          portfolioUrl: '',
                          experienceNote: '',
                          honeypot: ''
                        });
                      }}
                      className="font-mono text-xs font-semibold px-4 py-2 border border-bbs-border text-bbs-text rounded hover:bg-bbs-raised transition-colors"
                    >
                      SUBMIT ANOTHER RESPONSE
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {formState === 'error' && (
                    <div className="p-3 bg-red-500/10 border border-red-500/40 text-red-400 text-xs font-mono rounded">
                      {errorMessage}
                    </div>
                  )}

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block font-mono text-xs text-bbs-muted mb-2 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Verma"
                      required
                      className="w-full px-4 py-3 rounded bg-bbs-raised border border-bbs-border text-bbs-text placeholder-bbs-dim font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-bbs-muted mb-2 uppercase tracking-wider">
                      Email Address (Student or Personal) *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul.student@bbscet.ac.in"
                      required
                      className="w-full px-4 py-3 rounded bg-bbs-raised border border-bbs-border text-bbs-text placeholder-bbs-dim font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors"
                    />
                  </div>

                  {/* Academic Year & Branch */}
                  <div>
                    <label htmlFor="departmentYear" className="block font-mono text-xs text-bbs-muted mb-2 uppercase tracking-wider">
                      Academic Branch & Year *
                    </label>
                    <select
                      id="departmentYear"
                      name="departmentYear"
                      value={formData.departmentYear}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded bg-bbs-raised border border-bbs-border text-bbs-text font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors cursor-pointer"
                    >
                      {BRANCH_YEAR_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* GitHub or Portfolio (Optional) */}
                  <div>
                    <label htmlFor="portfolioUrl" className="block font-mono text-xs text-bbs-muted mb-2 uppercase tracking-wider">
                      GitHub Profile or Portfolio (Optional)
                    </label>
                    <input
                      type="url"
                      id="portfolioUrl"
                      name="portfolioUrl"
                      value={formData.portfolioUrl}
                      onChange={handleChange}
                      placeholder="https://github.com/username"
                      className="w-full px-4 py-3 rounded bg-bbs-raised border border-bbs-border text-bbs-text placeholder-bbs-dim font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors"
                    />
                  </div>

                  {/* What do you hope to build? */}
                  <div>
                    <label htmlFor="experienceNote" className="block font-mono text-xs text-bbs-muted mb-2 uppercase tracking-wider">
                      What excites you about code or hackathons? (Short Note)
                    </label>
                    <textarea
                      id="experienceNote"
                      name="experienceNote"
                      rows="3"
                      value={formData.experienceNote}
                      onChange={handleChange}
                      placeholder="Tell us what you'd like to learn, build, or solve during your time in the club..."
                      className="w-full px-4 py-3 rounded bg-bbs-raised border border-bbs-border text-bbs-text placeholder-bbs-dim font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full py-3.5 rounded bg-bbs-accent text-white font-mono text-sm font-semibold tracking-wider hover:bg-bbs-accent-hover transition-all hover:scale-101 shadow-lg shadow-bbs-accent/25 cursor-pointer disabled:opacity-50"
                  >
                    {formState === 'submitting' ? 'RECORDING APPLICATION...' : 'SUBMIT MEMBERSHIP APPLICATION →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Alternate Channels — Checkered / Grid Background */}
      <Section variant="grid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="bg-bbs-surface border border-bbs-border rounded p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-md">
            <div>
              <div className="font-mono text-xs text-bbs-accent-light mb-1 uppercase">
                {ALTERNATE_CHANNELS_CALLOUT.badge}
              </div>
              <h4 className="font-display text-lg font-bold text-bbs-text">
                {ALTERNATE_CHANNELS_CALLOUT.title}
              </h4>
              <p className="text-xs sm:text-sm text-bbs-muted mt-1 max-w-xl">
                {ALTERNATE_CHANNELS_CALLOUT.description}
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {ALTERNATE_CHANNELS_CALLOUT.channels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold px-4 py-2 border border-bbs-border text-bbs-text rounded hover:bg-bbs-raised hover:border-bbs-accent transition-colors"
                >
                  {ch.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
