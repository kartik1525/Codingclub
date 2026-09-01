import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ArrowDown, Users, Calendar, Sparkles, ExternalLink } from 'lucide-react';
import Section from '../components/Section.jsx';
import { CLUB_INFO } from '../data/clubInfo.js';
import { 
  JOIN_PAGE_HEADER, 
  JOIN_PATHS,
  ORGANIZING_HERO,
  JOIN_STEPS, 
  CONTRIBUTION_AREAS,
  ACTIVITY_OPTIONS,
  BRANCH_YEAR_OPTIONS, 
  HACKATHON_OPPORTUNITY,
  STAY_CONNECTED_CALLOUT 
} from '../data/join.js';

export default function JoinPage() {
  const [searchParams] = useSearchParams();
  const applyRef = useRef(null);

  const initialArea = searchParams.get('area') || searchParams.get('track') || searchParams.get('dept') || CONTRIBUTION_AREAS[0].id;
  const [selectedAreaId, setSelectedAreaId] = useState(initialArea);
  const activeArea = CONTRIBUTION_AREAS.find(a => a.id === selectedAreaId) || CONTRIBUTION_AREAS[0];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    departmentYear: BRANCH_YEAR_OPTIONS[0]?.value || 'CS - 1st Year',
    interests: activeArea.title,
    selectedActivities: ['Hackathons', 'Coding Workshops'],
    portfolioUrl: '',
    motivation: '',
    experienceNote: '',
    honeypot: ''
  });

  const [formState, setFormState] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Keep form area synced when user clicks Step 1 cards
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      interests: activeArea.title
    }));
  }, [activeArea]);

  useEffect(() => {
    const queryArea = searchParams.get('area') || searchParams.get('track') || searchParams.get('dept');
    if (queryArea && CONTRIBUTION_AREAS.some(a => a.id === queryArea)) {
      setSelectedAreaId(queryArea);
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleActivity = (activity) => {
    setFormData(prev => {
      const exists = prev.selectedActivities.includes(activity);
      const updated = exists
        ? prev.selectedActivities.filter(a => a !== activity)
        : [...prev.selectedActivities, activity];
      return { ...prev, selectedActivities: updated };
    });
  };

  const scrollToApply = (e) => {
    e?.preventDefault();
    applyRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setFormState('submitting');
    setErrorMessage('');

    setTimeout(() => {
      setFormState('success');
    }, 700);
  };

  return (
    <div className="flex flex-col">
      {/* ─── 1. HERO SECTION & TWO MAIN INVOLVEMENT PATHS ─── */}
      <Section variant="solid" className="pt-14 sm:pt-20 pb-14 sm:pb-20 relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          
          {/* Hero Content: 2-Column Asymmetric Layout with Breathing Room */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
            
            {/* Left Column: Bold Typography & Human Supporting Copy */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 text-xs font-bold text-bbs-accent tracking-wide uppercase mb-4">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>{JOIN_PAGE_HEADER.badge}</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-bbs-text leading-[1.08] mb-6 whitespace-pre-line">
                {JOIN_PAGE_HEADER.title}
              </h1>
              <p className="text-lg sm:text-xl text-bbs-muted leading-relaxed max-w-xl">
                {JOIN_PAGE_HEADER.description}
              </p>
            </div>

            {/* Right Column: Compact Developer Activity Terminal Panel */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end">
              <JoinHeroConsole onJoinClick={scrollToApply} />
            </div>

          </div>

          {/* Two Primary Involvement Pathways */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {JOIN_PATHS.map((path) => (
              <div
                key={path.id}
                className={`bg-bbs-surface border rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm group ${
                  path.accent
                    ? 'border-bbs-accent/70 hover:border-bbs-accent shadow-bbs-accent/5 ring-1 ring-bbs-accent/20'
                    : 'border-bbs-border hover:border-bbs-border-focus'
                }`}
              >
                <div>
                  {/* Eyebrow / Category Row */}
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-bbs-border/70 mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider ${
                      path.accent ? 'text-bbs-accent' : 'text-bbs-accent'
                    }`}>
                      {path.badge}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-bbs-dim tracking-wider uppercase">
                      {path.secondaryText}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-bbs-text tracking-tight mb-3">
                    {path.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-bbs-text/90 font-medium leading-relaxed mb-3">
                    {path.description}
                  </p>

                  {/* Supporting Text */}
                  <p className="text-xs sm:text-sm text-bbs-muted leading-relaxed mb-6">
                    {path.supportingText}
                  </p>
                </div>

                {/* Consistently Aligned Bottom CTA */}
                <div className="mt-auto pt-5 border-t border-bbs-border/70">
                  {path.isExternal ? (
                    <a
                      href={path.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 rounded-lg border border-bbs-border bg-bbs-surface text-bbs-text hover:text-bbs-accent hover:border-bbs-accent text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center justify-between transition-all group/btn shadow-2xs"
                    >
                      <span>{path.cta.label}</span>
                      <ExternalLink className="w-4 h-4 text-bbs-dim group-hover/btn:text-bbs-accent group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={scrollToApply}
                      className="w-full py-3.5 px-5 rounded-lg border-2 border-bbs-accent bg-bbs-surface text-bbs-accent hover:bg-bbs-accent hover:text-white text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center justify-between transition-all group/btn shadow-2xs cursor-pointer"
                    >
                      <span>{path.cta.label}</span>
                      <ArrowDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </Section>

      {/* ─── 2. SMART INDIA HACKATHON & EVENT EXECUTION FEATURE ─── */}
      <Section variant="solid" className="py-12 sm:py-16 border-t border-bbs-border bg-bbs-raised/30">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="bg-bbs-surface border border-bbs-border rounded-xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 text-xs font-bold text-bbs-accent uppercase tracking-wide mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{HACKATHON_OPPORTUNITY.eyebrow}</span>
                  <span className="text-bbs-dim">·</span>
                  <span className="text-bbs-dim">{HACKATHON_OPPORTUNITY.badge}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-bbs-text tracking-tight mb-3">
                  {HACKATHON_OPPORTUNITY.title}
                </h3>
                <p className="text-sm sm:text-base text-bbs-muted leading-relaxed mb-4 max-w-2xl">
                  {HACKATHON_OPPORTUNITY.description}
                </p>
                <div className="text-xs sm:text-sm text-bbs-text/90 font-medium">
                  {HACKATHON_OPPORTUNITY.details}
                </div>
                <p className="text-xs text-bbs-dim mt-2">
                  * {HACKATHON_OPPORTUNITY.note}
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <button
                  type="button"
                  onClick={scrollToApply}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-3 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all shadow-md shadow-bbs-accent/20 cursor-pointer"
                >
                  <span>APPLY TO HELP RUN EVENTS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 3. ORGANIZING TEAM APPLICATION: STEP 1 (CHOOSE INTERESTS) ─── */}
      <div ref={applyRef} id="apply">
        <Section variant="grid" className="py-16 sm:py-24 border-t border-bbs-border relative">
          <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
            
            {/* Section Header */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center gap-2 text-xs font-bold text-bbs-accent tracking-wide uppercase mb-3">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>{ORGANIZING_HERO.eyebrow}</span>
                <span className="text-bbs-dim">·</span>
                <span className="text-bbs-dim">{ORGANIZING_HERO.badge}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-bbs-text leading-tight mb-4">
                {ORGANIZING_HERO.title}
              </h2>
              <p className="text-base sm:text-lg text-bbs-muted max-w-3xl leading-relaxed">
                {ORGANIZING_HERO.description}
              </p>
            </div>

            {/* Step 1 Header */}
            <div className="flex justify-between items-end flex-wrap gap-4 mb-8 pb-3 border-b border-bbs-border">
              <div>
                <div className="text-xs font-bold text-bbs-accent uppercase tracking-wider mb-1">
                  {JOIN_STEPS.step1.badge}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-bbs-text">
                  {JOIN_STEPS.step1.title}
                </h3>
                <p className="text-xs sm:text-sm text-bbs-muted mt-1">
                  {JOIN_STEPS.step1.description}
                </p>
              </div>
              <span className="text-xs font-semibold text-bbs-dim uppercase tracking-wider">
                {JOIN_STEPS.step1.hint}
              </span>
            </div>

            {/* 9 Contribution Area Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CONTRIBUTION_AREAS.map((area) => {
                const isSelected = area.id === selectedAreaId;
                return (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setSelectedAreaId(area.id)}
                    className={`p-6 rounded-xl text-left border transition-all cursor-pointer relative flex flex-col justify-between ${
                      isSelected
                        ? 'bg-bbs-surface border-bbs-accent shadow-md ring-2 ring-bbs-accent/30'
                        : 'bg-bbs-surface/90 border-bbs-border hover:border-bbs-border-focus hover:bg-bbs-surface'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-bbs-raised border border-bbs-border text-bbs-accent uppercase tracking-wide">
                          {area.shortTitle}
                        </span>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-bbs-accent text-white flex items-center justify-center text-xs font-bold shadow-xs">
                            ✓
                          </span>
                        )}
                      </div>

                      <h4 className="font-display text-lg font-bold text-bbs-text mb-2">
                        {area.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-bbs-muted leading-relaxed mb-4">
                        {area.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-bbs-border/70 text-[11px] text-bbs-dim">
                      <span className="font-semibold text-bbs-text">Focus: </span>
                      {area.activities.slice(0, 2).join(' · ')}
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </Section>
      </div>

      {/* ─── 4. STEP 2: DETAILS OVERVIEW & APPLICATION FORM ─── */}
      <Section variant="solid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left: Selected Area Overview & Role Expectations */}
            <div className="lg:col-span-5 bg-bbs-surface border border-bbs-border rounded-xl p-6 sm:p-8 shadow-sm">
              <div className="text-xs font-bold text-bbs-accent mb-2 uppercase tracking-wider">
                WHERE YOU'LL CONTRIBUTE
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-bbs-text mb-2">
                {activeArea.title}
              </h3>
              <div className="text-xs font-semibold text-bbs-dim mb-4 uppercase tracking-wide">
                VOLUNTEER RESPONSIBILITY FOCUS
              </div>
              <p className="text-sm text-bbs-muted leading-relaxed mb-6">
                {activeArea.description}
              </p>

              <div className="mb-6">
                <div className="text-xs font-bold text-bbs-dim mb-3 uppercase tracking-wide">
                  HOW VOLUNTEERS CONTRIBUTE:
                </div>
                <ul className="list-none p-0 m-0 space-y-2.5">
                  {activeArea.activities.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-bbs-text leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-bbs-accent shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-bbs-border pt-4">
                <div className="text-xs font-bold text-bbs-dim mb-2 uppercase tracking-wide">
                  CORE TOOLS & DOMAINS:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeArea.technologies.map((t, idx) => (
                    <span key={idx} className="text-xs font-medium px-2 py-0.5 bg-bbs-raised border border-bbs-border rounded text-bbs-dim">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Volunteer Application Form */}
            <div className="lg:col-span-7 bg-bbs-surface border border-bbs-border rounded-xl p-6 sm:p-10 shadow-lg">
              <div className="text-xs font-bold text-bbs-accent mb-1 uppercase tracking-wide">
                {JOIN_STEPS.step2.badge}
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-bbs-text mb-2">
                SUBMIT ORGANIZING TEAM APPLICATION
              </h2>
              <p className="text-sm text-bbs-muted mb-8">
                You're applying to become part of the student organizing team at BBS Coding Club. Selected area: <strong className="text-bbs-text">{activeArea.title}</strong>
              </p>

              {formState === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 text-emerald-500 text-2xl">
                    ✓
                  </div>
                  <h3 className="font-display text-2xl font-bold text-bbs-text mb-3">
                    APPLICATION RECORDED
                  </h3>
                  <p className="text-bbs-muted text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>! Your volunteer application to contribute to <strong>{activeArea.title}</strong> has been received. Our core team reviews applications regularly and will get in touch with you.
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <a
                      href={CLUB_INFO.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-colors shadow-sm"
                    >
                      <span>JOIN WHATSAPP COMMUNITY</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => {
                        setFormState('idle');
                        setFormData({
                          fullName: '',
                          email: '',
                          departmentYear: BRANCH_YEAR_OPTIONS[0]?.value || 'CS - 1st Year',
                          interests: activeArea.title,
                          selectedActivities: ['Hackathons', 'Coding Workshops'],
                          portfolioUrl: '',
                          motivation: '',
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

                  {/* Honeypot field */}
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

                  {/* Academic Branch & Year */}
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

                  {/* Primary Area of Contribution */}
                  <div>
                    <label htmlFor="interests" className="block text-xs font-bold text-bbs-text mb-2 uppercase tracking-wide">
                      Primary Area of Contribution
                    </label>
                    <select
                      id="interests"
                      name="interests"
                      value={formData.interests}
                      onChange={(e) => {
                        handleChange(e);
                        const matched = CONTRIBUTION_AREAS.find(a => a.title === e.target.value);
                        if (matched) setSelectedAreaId(matched.id);
                      }}
                      className="w-full px-4 py-3 rounded bg-bbs-raised border border-bbs-border text-bbs-text font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors cursor-pointer"
                    >
                      {CONTRIBUTION_AREAS.map((opt) => (
                        <option key={opt.id} value={opt.title}>{opt.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Which activities would you like to help with? */}
                  <div>
                    <label className="block text-xs font-bold text-bbs-text mb-2 uppercase tracking-wide">
                      Which types of activities would you like to help with?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {ACTIVITY_OPTIONS.map((act) => {
                        const isChosen = formData.selectedActivities.includes(act);
                        return (
                          <button
                            key={act}
                            type="button"
                            onClick={() => toggleActivity(act)}
                            className={`text-xs px-3 py-1.5 rounded border transition-colors cursor-pointer ${
                              isChosen
                                ? 'bg-bbs-accent text-white border-bbs-accent font-semibold'
                                : 'bg-bbs-raised text-bbs-muted border-bbs-border hover:border-bbs-border-focus'
                            }`}
                          >
                            {act} {isChosen ? '✓' : '+'}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* GitHub / Portfolio */}
                  <div>
                    <label htmlFor="portfolioUrl" className="block text-xs font-bold text-bbs-text mb-2 uppercase tracking-wide">
                      GitHub Profile, LinkedIn, or Portfolio (Optional)
                    </label>
                    <input
                      type="url"
                      id="portfolioUrl"
                      name="portfolioUrl"
                      value={formData.portfolioUrl}
                      onChange={handleChange}
                      placeholder="https://github.com/username or linkedin.com/in/username"
                      className="w-full px-4 py-3 rounded bg-bbs-raised border border-bbs-border text-bbs-text placeholder-bbs-dim font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors"
                    />
                  </div>

                  {/* Why do you want to join the organizing team? */}
                  <div>
                    <label htmlFor="motivation" className="block text-xs font-bold text-bbs-text mb-2 uppercase tracking-wide">
                      Why do you want to join the organizing team?
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      rows="3"
                      value={formData.motivation}
                      onChange={handleChange}
                      placeholder="Tell us what motivates you to organize coding sessions, workshops, or hackathons..."
                      className="w-full px-4 py-3 rounded bg-bbs-raised border border-bbs-border text-bbs-text placeholder-bbs-dim font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Prior Experience Note */}
                  <div>
                    <label htmlFor="experienceNote" className="block text-xs font-bold text-bbs-text mb-2 uppercase tracking-wide">
                      Do you have experience organizing events, coding projects, hackathons, or student activities? (Optional)
                    </label>
                    <textarea
                      id="experienceNote"
                      name="experienceNote"
                      rows="2"
                      value={formData.experienceNote}
                      onChange={handleChange}
                      placeholder="Briefly describe any past experience, or write 'Interested in learning'..."
                      className="w-full px-4 py-3 rounded bg-bbs-raised border border-bbs-border text-bbs-text placeholder-bbs-dim font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full py-3.5 rounded bg-bbs-accent text-white text-sm font-semibold tracking-wide hover:bg-bbs-accent-hover transition-all hover:scale-101 shadow-lg shadow-bbs-accent/25 cursor-pointer disabled:opacity-50"
                  >
                    {formState === 'submitting' ? 'RECORDING APPLICATION...' : 'SUBMIT ORGANIZING TEAM APPLICATION →'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </Section>

      {/* ─── 5. STAY CONNECTED DIRECTLY (WHATSAPP COMMUNITY) ─── */}
      <Section variant="grid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="bg-bbs-surface border border-bbs-border rounded-xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
            <div>
              <div className="text-xs font-bold text-bbs-accent mb-1 uppercase tracking-wide">
                {STAY_CONNECTED_CALLOUT.badge}
              </div>
              <h4 className="font-display text-xl font-bold text-bbs-text">
                {STAY_CONNECTED_CALLOUT.title}
              </h4>
              <p className="text-xs sm:text-sm text-bbs-muted mt-1 max-w-xl leading-relaxed">
                {STAY_CONNECTED_CALLOUT.description}
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {STAY_CONNECTED_CALLOUT.channels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs font-semibold px-4 py-2.5 rounded transition-all inline-flex items-center gap-1.5 ${
                    ch.isPrimary
                      ? 'bg-bbs-accent text-white hover:bg-bbs-accent-hover shadow-sm'
                      : 'border border-bbs-border text-bbs-text hover:bg-bbs-raised hover:border-bbs-accent'
                  }`}
                >
                  <span>{ch.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

/**
 * JoinHeroConsole - Minimal technical activity terminal for the hero
 */
function JoinHeroConsole({ onJoinClick }) {
  return (
    <div className="w-full max-w-sm lg:max-w-md bg-[#0c1017] border border-bbs-border rounded-xl overflow-hidden shadow-xl select-none group transition-all duration-300 hover:border-bbs-accent/60">
      {/* Terminal Titlebar */}
      <div className="px-4 py-2.5 bg-[#111622] border-b border-bbs-border/70 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/90 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/90 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/90 inline-block" />
          <span className="font-mono text-[11px] text-slate-400 font-medium ml-2">
            bbs-sh · session: active
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[10px] font-bold text-emerald-400 tracking-wider uppercase">
            ONLINE
          </span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-5 font-mono text-xs sm:text-[13px] text-slate-300 space-y-3.5">
        {/* Command 1: whoami */}
        <div>
          <div className="flex items-center gap-2 text-bbs-accent font-semibold">
            <span>$</span>
            <span className="text-slate-100">whoami</span>
          </div>
          <div className="text-slate-400 pl-4 mt-0.5">
            bbs_coding_club
          </div>
        </div>

        {/* Command 2: status */}
        <div>
          <div className="flex items-center gap-2 text-bbs-accent font-semibold">
            <span>$</span>
            <span className="text-slate-100">status</span>
          </div>
          <div className="text-slate-400 pl-4 mt-0.5 space-y-0.5">
            <div>community: <span className="text-emerald-400 font-medium">active</span></div>
            <div>hackathons: <span className="text-blue-400 font-medium">open</span></div>
            <div>builders: <span className="text-amber-400 font-medium">welcome</span></div>
          </div>
        </div>

        {/* Command 3: ./join */}
        <div className="pt-1">
          <div className="flex items-center gap-2 text-bbs-accent font-semibold">
            <span>$</span>
            <span className="text-slate-100">./join</span>
          </div>
          <button
            type="button"
            onClick={onJoinClick}
            className="text-left text-slate-200 pl-4 mt-0.5 flex items-center gap-1 hover:text-bbs-accent transition-colors cursor-pointer"
            title="Click to apply"
          >
            <span>ready to build.</span>
            <span className="inline-block w-1.5 h-3.5 bg-bbs-accent animate-pulse" />
          </button>
        </div>
      </div>

      {/* Bottom subtle status bar */}
      <div className="px-4 py-2 bg-[#090d14] border-t border-bbs-border/50 flex items-center justify-between text-[10px] font-mono text-slate-500">
        <span>BBS C.E.T. · PRAYAGRAJ</span>
        <span className="text-bbs-accent font-semibold tracking-wide">STUDENT DEVELOPER NETWORK</span>
      </div>
    </div>
  );
}
