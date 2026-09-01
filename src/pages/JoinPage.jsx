import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Terminal, Users, Sparkles } from 'lucide-react';
import Section from '../components/Section.jsx';
import { CLUB_INFO } from '../data/clubInfo.js';
import { AREAS } from '../data/areas.js';
import { 
  JOIN_PAGE_HEADER, 
  WHY_JOIN_HIGHLIGHTS, 
  JOIN_STEPS, 
  BRANCH_YEAR_OPTIONS, 
  INTEREST_OPTIONS,
  ALTERNATE_CHANNELS_CALLOUT 
} from '../data/join.js';

const HIGHLIGHT_ICONS = {
  terminal: Terminal,
  users: Users,
  sparkles: Sparkles
};

export default function JoinPage() {
  const [searchParams] = useSearchParams();
  const initialArea = searchParams.get('area') || searchParams.get('track') || searchParams.get('dept') || AREAS[0].id;

  const [selectedAreaId, setSelectedAreaId] = useState(initialArea);
  const activeArea = AREAS.find(a => a.id === selectedAreaId) || AREAS[0];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    departmentYear: BRANCH_YEAR_OPTIONS[0]?.value || 'CS - 1st Year',
    interests: activeArea.title,
    portfolioUrl: '',
    experienceNote: '',
    honeypot: ''
  });

  const [formState, setFormState] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Update form interests when area changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      interests: activeArea.title
    }));
  }, [activeArea]);

  useEffect(() => {
    const queryArea = searchParams.get('area') || searchParams.get('track') || searchParams.get('dept');
    if (queryArea && AREAS.some(a => a.id === queryArea)) {
      setSelectedAreaId(queryArea);
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAreaSelect = (id) => {
    setSelectedAreaId(id);
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
            <div className="flex items-center gap-2.5 text-xs font-bold text-bbs-accent tracking-wide uppercase mb-4">
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

      {/* 2. Step 1: Choose Areas of Interest — Checkered / Grid Background */}
      <Section variant="grid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-8">
            <div>
              <div className="text-xs font-bold text-bbs-accent mb-1 uppercase tracking-wide">
                {JOIN_STEPS.step1.badge}
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-bbs-text">
                {JOIN_STEPS.step1.title}
              </h2>
            </div>
            <span className="text-xs font-medium text-bbs-dim">
              {JOIN_STEPS.step1.hint}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {AREAS.map((area) => {
              const isSelected = area.id === selectedAreaId;
              return (
                <button
                  key={area.id}
                  onClick={() => handleAreaSelect(area.id)}
                  className={`p-6 rounded text-left border transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-bbs-surface border-bbs-accent shadow-lg shadow-bbs-accent/15 ring-2 ring-bbs-accent/40'
                      : 'bg-bbs-surface/80 border-bbs-border hover:border-bbs-border-focus hover:bg-bbs-surface'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-bbs-raised border border-bbs-border text-bbs-accent uppercase tracking-wide">
                      {area.shortTitle.toUpperCase()}
                    </span>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-bbs-accent text-white flex items-center justify-center text-xs">
                        ✓
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-bold text-bbs-text mb-2">
                    {area.title}
                  </h3>
                  <p className="text-xs text-bbs-muted leading-relaxed line-clamp-3">
                    {area.tagline}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 3. Step 2: Area Details & Application Form — Normal Solid Background */}
      <Section variant="solid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Selected Area Overview */}
            <div className="lg:col-span-5 bg-bbs-surface border border-bbs-border rounded p-6 sm:p-8 shadow-sm">
              <div className="text-xs font-bold text-bbs-accent mb-2 uppercase tracking-wide">
                SELECTED AREA OVERVIEW
              </div>
              <h3 className="font-display text-2xl font-bold text-bbs-text mb-2">
                {activeArea.title}
              </h3>
              <div className="text-xs font-medium text-bbs-dim mb-4 uppercase tracking-wide">
                COMMUNITY INTEREST FOCUS
              </div>
              <p className="text-sm text-bbs-muted leading-relaxed mb-6">
                {activeArea.overview}
              </p>

              <div className="mb-6">
                <div className="text-xs font-bold text-bbs-dim mb-2 uppercase tracking-wide">
                  WHAT WE EXPLORE & LEARN:
                </div>
                <ul className="list-none p-0 m-0 space-y-2">
                  {activeArea.topics.slice(0, 3).map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-bbs-muted font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-bbs-accent shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-bbs-raised border border-bbs-border rounded mb-6 text-xs text-bbs-text leading-relaxed">
                <span className="text-xs font-bold text-bbs-dim block mb-1 uppercase tracking-wide">
                  TYPICAL ACTIVITIES:
                </span>
                {activeArea.activities.join(' · ')}
              </div>

              <div className="border-t border-bbs-border pt-4">
                <div className="text-xs font-bold text-bbs-dim mb-2 uppercase tracking-wide">
                  CORE TOOLS & TECHNOLOGIES:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeArea.technologies.map((t, idx) => (
                    <span key={idx} className="text-xs font-medium px-2 py-0.5 bg-bbs-raised border border-bbs-border rounded text-bbs-text">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="lg:col-span-7 bg-bbs-surface border border-bbs-border rounded p-6 sm:p-10 shadow-xl">
              <div className="text-xs font-bold text-bbs-accent mb-1 uppercase tracking-wide">
                {JOIN_STEPS.step2.badge}
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-bbs-text mb-2">
                {JOIN_STEPS.step2.title}
              </h2>
              <p className="text-sm text-bbs-muted mb-8">
                Selected Focus Area: <strong className="text-bbs-text">{activeArea.title}</strong>
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
                    Thank you, <strong>{formData.fullName}</strong>! Your interest in <strong>{activeArea.title}</strong> has been registered. You'll receive onboarding details and an invitation to join our student community network.
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <a
                      href={CLUB_INFO.socials.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-colors"
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
                          departmentYear: BRANCH_YEAR_OPTIONS[0]?.value || 'CS - 1st Year',
                          interests: activeArea.title,
                          portfolioUrl: '',
                          experienceNote: '',
                          honeypot: ''
                        });
                      }}
                      className="text-xs font-semibold px-4 py-2 border border-bbs-border text-bbs-text rounded hover:bg-bbs-raised transition-colors cursor-pointer"
                    >
                      SUBMIT ANOTHER RESPONSE
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {formState === 'error' && (
                    <div className="p-3 bg-red-500/10 border border-red-500/40 text-red-400 text-xs font-medium rounded">
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
                    <label htmlFor="fullName" className="block text-xs font-bold text-bbs-text mb-2 uppercase tracking-wide">
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
                    <label htmlFor="email" className="block text-xs font-bold text-bbs-text mb-2 uppercase tracking-wide">
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
                    <label htmlFor="departmentYear" className="block text-xs font-bold text-bbs-text mb-2 uppercase tracking-wide">
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

                  {/* Primary Area of Interest */}
                  <div>
                    <label htmlFor="interests" className="block text-xs font-bold text-bbs-text mb-2 uppercase tracking-wide">
                      Primary Area of Interest
                    </label>
                    <select
                      id="interests"
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded bg-bbs-raised border border-bbs-border text-bbs-text font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors cursor-pointer"
                    >
                      {INTEREST_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* GitHub or Portfolio (Optional) */}
                  <div>
                    <label htmlFor="portfolioUrl" className="block text-xs font-bold text-bbs-text mb-2 uppercase tracking-wide">
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
                    <label htmlFor="experienceNote" className="block text-xs font-bold text-bbs-text mb-2 uppercase tracking-wide">
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
                    className="w-full py-3.5 rounded bg-bbs-accent text-white text-sm font-semibold tracking-wide hover:bg-bbs-accent-hover transition-all hover:scale-101 shadow-lg shadow-bbs-accent/25 cursor-pointer disabled:opacity-50"
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
              <div className="text-xs font-bold text-bbs-accent mb-1 uppercase tracking-wide">
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
                  className="text-xs font-semibold px-4 py-2 border border-bbs-border text-bbs-text rounded hover:bg-bbs-raised hover:border-bbs-accent transition-colors"
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
