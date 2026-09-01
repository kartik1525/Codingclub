import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ExternalLink, ArrowDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import Section from '../components/Section.jsx';
import { 
  JOIN_PAGE_HEADER, 
  WAYS_TO_JOIN_HEADER,
  JOIN_WAYS,
  ORGANIZING_SECTION,
  APPLICATION_SECTION,
  CONTRIBUTION_AREAS,
  ACTIVITY_OPTIONS,
  BRANCH_YEAR_OPTIONS
} from '../data/join.js';

/**
 * JoinHeroConsole - Reuses the exact terminal/console aesthetic from the Home page
 */
function JoinHeroConsole({ onApplyClick }) {
  return (
    <div className="w-full max-w-lg bg-[#0b0f17] border border-bbs-border rounded-xl overflow-hidden shadow-2xl transition-all select-none">
      {/* Terminal Titlebar */}
      <div className="px-4 py-3 bg-[#0f141f] border-b border-bbs-border/80 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ef4444] inline-block shadow-xs" />
          <span className="w-3 h-3 rounded-full bg-[#f59e0b] inline-block shadow-xs" />
          <span className="w-3 h-3 rounded-full bg-[#10b981] inline-block shadow-xs" />
          <span className="font-mono text-xs text-slate-400 font-medium ml-3">
            bbs-sh — join terminal
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
          <span className="font-mono text-[11px] font-bold text-emerald-400 tracking-wider uppercase">
            ONLINE
          </span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm text-slate-200 flex flex-col gap-4">
        {/* $ whoami */}
        <div>
          <div className="flex items-center gap-2 text-slate-100 font-semibold">
            <span className="text-bbs-accent font-bold">$</span>
            <span>whoami</span>
          </div>
          <div className="text-slate-400 pl-4 mt-1">
            bbs_coding_club
          </div>
        </div>

        {/* $ status */}
        <div>
          <div className="flex items-center gap-2 text-slate-100 font-semibold">
            <span className="text-bbs-accent font-bold">$</span>
            <span>status</span>
          </div>
          <div className="text-slate-300/90 pl-4 border-l-2 border-bbs-border/50 py-1 my-1 space-y-0.5 text-xs sm:text-[13px]">
            <div>community: <span className="text-emerald-400 font-medium">active</span></div>
            <div>hackathons: <span className="text-blue-400 font-medium">open</span></div>
            <div>builders: <span className="text-amber-400 font-medium">welcome</span></div>
          </div>
        </div>

        {/* $ ./join */}
        <div>
          <div className="flex items-center gap-2 text-slate-100 font-semibold">
            <span className="text-bbs-accent font-bold">$</span>
            <span>./join</span>
          </div>
          <button
            type="button"
            onClick={onApplyClick}
            className="text-left text-slate-200 pl-4 mt-1 flex items-center gap-1.5 font-medium hover:text-bbs-accent transition-colors cursor-pointer"
            title="Click to jump to application"
          >
            <span>ready to build.</span>
            <span className="inline-block w-2 h-4 bg-bbs-accent animate-pulse" />
          </button>
        </div>
      </div>

      {/* Bottom metadata footer */}
      <div className="px-4 py-2.5 bg-[#090d14] border-t border-bbs-border/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span>BBS C.E.T. · PRAYAGRAJ</span>
        <span className="text-bbs-accent font-semibold tracking-wide">STUDENT DEVELOPER NETWORK</span>
      </div>
    </div>
  );
}

export default function JoinPage() {
  const [searchParams] = useSearchParams();
  const applicationRef = useRef(null);

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

  // Sync primary area when selection changes
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

  const scrollToApplication = (e) => {
    e?.preventDefault();
    applicationRef.current?.scrollIntoView({ behavior: 'smooth' });
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
    }, 600);
  };

  return (
    <div className="flex flex-col">
      {/* ─── 1. HERO SECTION (SPLIT EDITORIAL HEADLINE + CONSOLE) ─── */}
      <Section variant="grid" className="pt-14 sm:pt-20 pb-12 sm:pb-16 relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Editorial Headline & Concise Copy */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 text-xs font-bold text-bbs-accent tracking-wide uppercase mb-4">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>{JOIN_PAGE_HEADER.eyebrow}</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-bbs-text leading-[1.08] mb-6 whitespace-pre-line">
                {JOIN_PAGE_HEADER.title}
              </h1>
              <p className="text-lg sm:text-xl text-bbs-muted leading-relaxed max-w-lg">
                {JOIN_PAGE_HEADER.description}
              </p>
            </div>

            {/* Right Column: Reused Home Page Console Component */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end items-center">
              <JoinHeroConsole onApplyClick={scrollToApplication} />
            </div>

          </div>
        </div>
      </Section>

      {/* ─── 2. WAYS TO JOIN (TWO EDITORIAL PANELS) ─── */}
      <Section variant="solid" className="py-14 sm:py-20 border-t border-bbs-border">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          
          {/* Section Heading & Eyebrow */}
          <div className="mb-10 sm:mb-12">
            <div className="text-xs font-bold text-bbs-accent tracking-wider uppercase mb-2">
              {WAYS_TO_JOIN_HEADER.eyebrow}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-bbs-text">
              {WAYS_TO_JOIN_HEADER.title}
            </h2>
          </div>

          {/* Two Horizontal / Editorial Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {JOIN_WAYS.map((way) => {
              const isCommunity = way.id === 'community';

              return (
                <div
                  key={way.id}
                  className="bg-bbs-surface border border-bbs-border rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-bbs-border-focus transition-colors shadow-2xs group"
                >
                  <div>
                    {/* Top Row: Index & Category Label */}
                    <div className="flex items-center justify-between gap-4 pb-4 border-b border-bbs-border/70 mb-6">
                      <span className="font-display text-3xl sm:text-4xl font-black text-bbs-accent/80 leading-none">
                        {way.number}
                      </span>
                      <span className="text-xs font-bold text-bbs-accent tracking-wider uppercase">
                        {way.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-bbs-text tracking-tight mb-3">
                      {way.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-bbs-muted leading-relaxed mb-6">
                      {way.description}
                    </p>
                  </div>

                  {/* Button Hierarchy: Solid Blue for Community, Outlined for Organizing */}
                  <div className="mt-auto pt-5 border-t border-bbs-border/70">
                    {isCommunity ? (
                      <a
                        href={way.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover font-semibold text-xs sm:text-sm tracking-wide inline-flex items-center justify-between transition-colors shadow-xs group/btn"
                      >
                        <span>{way.cta.label}</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={scrollToApplication}
                        className="w-full py-3.5 px-5 rounded bg-bbs-surface border border-bbs-border hover:border-bbs-accent hover:text-bbs-accent text-bbs-text font-semibold text-xs sm:text-sm tracking-wide inline-flex items-center justify-between transition-colors cursor-pointer group/btn"
                      >
                        <span>{way.cta.label}</span>
                        <ArrowDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Section>

      {/* ─── 3. ORGANIZING TEAM INFO (LEFT) & VOLUNTEER APPLICATION (RIGHT) ─── */}
      <div ref={applicationRef} id="application">
        <Section variant="grid" className="py-16 sm:py-24 border-t border-bbs-border relative">
          <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column: Organizing Team Context & Execution Areas */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="bg-bbs-surface border border-bbs-border rounded-lg p-6 sm:p-8 shadow-xs">
                  <div className="text-xs font-bold text-bbs-accent tracking-wider uppercase mb-2">
                    {ORGANIZING_SECTION.eyebrow}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-bbs-text mb-4">
                    {ORGANIZING_SECTION.title}
                  </h3>
                  <p className="text-sm sm:text-base text-bbs-muted leading-relaxed mb-6">
                    {ORGANIZING_SECTION.description}
                  </p>

                  {/* Execution Areas */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-bbs-dim uppercase tracking-wider mb-3">
                      EXECUTION AREAS:
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {ORGANIZING_SECTION.areas.map((area, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 bg-bbs-raised border border-bbs-border rounded text-center text-[11px] font-bold text-bbs-text tracking-wide uppercase"
                        >
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-xs text-bbs-dim font-mono leading-relaxed border-t border-bbs-border/70 pt-4">
                    {ORGANIZING_SECTION.disclaimer}
                  </p>
                </div>
              </div>

              {/* Right Column: Volunteer Application Form */}
              <div className="lg:col-span-7">
                <div className="bg-bbs-surface border border-bbs-border rounded-lg p-6 sm:p-10 shadow-xs">
                  
                  {/* Form Header */}
                  <div className="mb-8 pb-6 border-b border-bbs-border/70">
                    <div className="text-xs font-bold text-bbs-accent tracking-wider uppercase mb-2">
                      {APPLICATION_SECTION.eyebrow}
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-bbs-text mb-2">
                      {APPLICATION_SECTION.title}
                    </h2>
                    <p className="text-sm text-bbs-muted leading-relaxed">
                      {APPLICATION_SECTION.description}
                    </p>
                  </div>

                  {formState === 'success' ? (
                    <div className="text-center py-10">
                      <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500 text-xl font-bold">
                        ✓
                      </div>
                      <h3 className="font-display text-2xl font-bold text-bbs-text mb-3">
                        APPLICATION RECORDED
                      </h3>
                      <p className="text-bbs-muted text-sm leading-relaxed mb-6 max-w-md mx-auto">
                        Thank you, <strong>{formData.fullName}</strong>! Your application to volunteer with the BBS Coding Club organizing team has been received. Our leadership reviews responses regularly and will reach out via WhatsApp / email.
                      </p>
                      <div className="flex justify-center gap-3 flex-wrap">
                    <a
                      href="https://chat.whatsapp.com/Cx6r3BHaVbRBnDxaJxrFMi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-colors"
                    >
                      <span>JOIN WHATSAPP COMMUNITY ↗</span>
                    </a>
                    <button
                      type="button"
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
                      className="text-xs font-semibold px-4 py-2.5 border border-bbs-border text-bbs-text rounded hover:bg-bbs-raised transition-colors cursor-pointer"
                    >
                      SUBMIT ANOTHER APPLICATION
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {formState === 'error' && (
                    <div className="p-3 bg-red-500/10 border border-red-500/40 text-red-500 text-xs font-medium rounded">
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
                    <label htmlFor="fullName" className="block text-xs font-bold text-bbs-text mb-1.5 uppercase tracking-wider">
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
                      className="w-full px-3.5 py-2.5 rounded bg-bbs-raised border border-bbs-border text-bbs-text placeholder-bbs-dim font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-bbs-text mb-1.5 uppercase tracking-wider">
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
                      className="w-full px-3.5 py-2.5 rounded bg-bbs-raised border border-bbs-border text-bbs-text placeholder-bbs-dim font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors"
                    />
                  </div>

                  {/* Academic Branch & Year */}
                  <div>
                    <label htmlFor="departmentYear" className="block text-xs font-bold text-bbs-text mb-1.5 uppercase tracking-wider">
                      Academic Branch & Year *
                    </label>
                    <select
                      id="departmentYear"
                      name="departmentYear"
                      value={formData.departmentYear}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded bg-bbs-raised border border-bbs-border text-bbs-text font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors cursor-pointer"
                    >
                      {BRANCH_YEAR_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Primary Area of Contribution */}
                  <div>
                    <label htmlFor="interests" className="block text-xs font-bold text-bbs-text mb-1.5 uppercase tracking-wider">
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
                      className="w-full px-3.5 py-2.5 rounded bg-bbs-raised border border-bbs-border text-bbs-text font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors cursor-pointer"
                    >
                      {CONTRIBUTION_AREAS.map((opt) => (
                        <option key={opt.id} value={opt.title}>{opt.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Activities You'd Like to Help With */}
                  <div>
                    <label className="block text-xs font-bold text-bbs-text mb-2 uppercase tracking-wider">
                      Which activities would you like to help with?
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

                  {/* GitHub Profile or Portfolio */}
                  <div>
                    <label htmlFor="portfolioUrl" className="block text-xs font-bold text-bbs-text mb-1.5 uppercase tracking-wider">
                      GitHub Profile, LinkedIn, or Portfolio (Optional)
                    </label>
                    <input
                      type="url"
                      id="portfolioUrl"
                      name="portfolioUrl"
                      value={formData.portfolioUrl}
                      onChange={handleChange}
                      placeholder="https://github.com/username or linkedin.com/in/username"
                      className="w-full px-3.5 py-2.5 rounded bg-bbs-raised border border-bbs-border text-bbs-text placeholder-bbs-dim font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors"
                    />
                  </div>

                  {/* Motivation */}
                  <div>
                    <label htmlFor="motivation" className="block text-xs font-bold text-bbs-text mb-1.5 uppercase tracking-wider">
                      Why do you want to join the organizing team?
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      rows="3"
                      value={formData.motivation}
                      onChange={handleChange}
                      placeholder="Tell us what motivates you to organize coding sessions, workshops, or hackathons..."
                      className="w-full px-3.5 py-2.5 rounded bg-bbs-raised border border-bbs-border text-bbs-text placeholder-bbs-dim font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Prior Experience */}
                  <div>
                    <label htmlFor="experienceNote" className="block text-xs font-bold text-bbs-text mb-1.5 uppercase tracking-wider">
                      Do you have experience organizing events or student activities? (Optional)
                    </label>
                    <textarea
                      id="experienceNote"
                      name="experienceNote"
                      rows="2"
                      value={formData.experienceNote}
                      onChange={handleChange}
                      placeholder="Briefly describe any past experience, or write 'Interested in learning'..."
                      className="w-full px-3.5 py-2.5 rounded bg-bbs-raised border border-bbs-border text-bbs-text placeholder-bbs-dim font-sans text-sm focus:outline-none focus:border-bbs-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Single Final Submit Button (Solid Blue) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full py-3.5 px-6 rounded bg-bbs-accent text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-bbs-accent-hover transition-colors shadow-xs cursor-pointer disabled:opacity-50"
                    >
                      {formState === 'submitting' ? 'RECORDING APPLICATION...' : 'SUBMIT ORGANIZING TEAM APPLICATION →'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </Section>
  </div>
</div>
  );
}
