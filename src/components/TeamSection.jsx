import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, ArrowUpRight } from 'lucide-react';
import { TEAM_LEADERSHIP } from '../data/team.js';
import ViewportText from './ViewportText.jsx';

gsap.registerPlugin(ScrollTrigger);

function GithubIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/**
 * TeamSection - Editorial Student Leadership Roster
 * 
 * - Visually dominant Core President feature card with asymmetric image treatment.
 * - Asymmetric bento grid of specialized Track Leads.
 * - Real authentic member photographs with restrained grayscale-to-color hover shift.
 * - Thin technical borders, monospace track indicators, and student credentials.
 * - Staggered scroll entrance synchronized with Lenis smooth scrolling.
 * - Zero gradients, zero neon, zero glassmorphism; strict adherence to BBS visual language.
 */
export default function TeamSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.team-roster-item');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 78%',
              once: true,
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const { president, trackLeads } = TEAM_LEADERSHIP;

  return (
    <section 
      ref={sectionRef}
      id="team" 
      className="subtle-grid py-20 sm:py-28 border-t border-bbs-border relative"
    >
      <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
        {/* Section Meta Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-6">
          <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
          <span>CORE LEADERSHIP & ROSTER</span>
        </div>

        {/* Editorial Section Headline */}
        <div className="mb-14 sm:mb-16">
          <ViewportText
            as="h2"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-bbs-text leading-tight m-0"
          >
            RUN BY STUDENTS. BUILT FOR BUILDERS.
          </ViewportText>
          <p className="text-base sm:text-lg text-bbs-muted mt-3 max-w-2xl leading-relaxed">
            Every track at BBS Coding Club is led by undergraduate student engineers who volunteer their time to organize hackathons, run code reviews, and mentor first-years.
          </p>
        </div>

        {/* 1. Visually Dominant Core / President Member Card */}
        <article className="team-roster-item bg-bbs-surface border border-bbs-border rounded overflow-hidden mb-8 lg:mb-10 group hover:border-bbs-border-focus transition-colors duration-300 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Large Editorial Photographic Treatment */}
            <div className="lg:col-span-5 relative bg-bbs-raised overflow-hidden min-h-[320px] sm:min-h-[400px] lg:min-h-[460px]">
              <img
                src={president.image}
                alt={`${president.name} — ${president.role}`}
                className="w-full h-full object-cover object-[center_25%] block filter grayscale-[25%] contrast-105 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bbs-bg/80 via-transparent to-transparent lg:hidden pointer-events-none" />

              {/* Technical Monospace Overlays */}
              <div className="absolute top-4 left-4 font-mono text-[11px] px-2.5 py-1 bg-bbs-bg/90 border border-bbs-border rounded text-bbs-accent-light tracking-wider">
                PRESIDENTIAL MANDATE
              </div>

              <div className="absolute bottom-4 left-4 font-mono text-[10px] px-2.5 py-1 bg-bbs-bg/90 border border-bbs-border rounded text-bbs-text flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                <span>{president.status}</span>
              </div>
            </div>

            {/* Right: Technical Profile & Editorial Mandate */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-bbs-surface border-t lg:border-t-0 lg:border-l border-bbs-border">
              <div>
                {/* Header Meta */}
                <div className="flex justify-between items-center flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center font-mono text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/25">
                    {president.department}
                  </span>
                  <span className="font-mono text-xs text-bbs-dim tracking-wider">
                    {president.status}
                  </span>
                </div>

                {/* Name & Title */}
                <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-bbs-text leading-tight mb-2">
                  {president.name}
                </h3>
                <div className="font-mono text-xs sm:text-sm text-bbs-accent-light uppercase tracking-wider mb-6">
                  {president.role}
                </div>

                {/* Editorial Quote / Lead Focus */}
                <blockquote className="border-l-2 border-bbs-accent pl-4 mb-6 italic text-sm sm:text-base text-bbs-text leading-relaxed font-sans">
                  "{president.quote}"
                </blockquote>

                {/* Narrative Description */}
                <p className="text-sm sm:text-base text-bbs-muted leading-relaxed mb-6">
                  {president.description}
                </p>

                {/* Specialties Tag Cloud */}
                <div className="mb-8">
                  <div className="font-mono text-[11px] text-bbs-dim uppercase tracking-wider mb-2.5">
                    KEY INITIATIVES & DOMAINS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {president.specialties.map((tag, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-bbs-raised border border-bbs-border text-bbs-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Social Links & Action Row */}
              <div className="pt-6 border-t border-bbs-border flex items-center justify-between flex-wrap gap-4">
                <div className="font-mono text-xs text-bbs-dim">
                  DIRECT CHANNELS:
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={president.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs text-bbs-muted hover:text-bbs-text bg-bbs-raised border border-bbs-border hover:border-bbs-border-focus transition-all group/btn"
                    aria-label={`${president.name} GitHub`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GITHUB</span>
                    <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={president.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs text-bbs-muted hover:text-bbs-text bg-bbs-raised border border-bbs-border hover:border-bbs-border-focus transition-all group/btn"
                    aria-label={`${president.name} LinkedIn`}
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LINKEDIN</span>
                    <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={`mailto:${president.socials.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs text-bbs-muted hover:text-bbs-text bg-bbs-raised border border-bbs-border hover:border-bbs-border-focus transition-all group/btn"
                    aria-label={`Email ${president.name}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>EMAIL</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* 2. Asymmetric Bento Grid of Specialized Track Leads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {trackLeads.map((member) => (
            <article
              key={member.id}
              className="team-roster-item bg-bbs-surface border border-bbs-border rounded overflow-hidden flex flex-col justify-between group hover:border-bbs-border-focus transition-colors duration-300 shadow-lg"
            >
              <div>
                {/* Photo Framing */}
                <div className="w-full relative aspect-[16/10] bg-bbs-raised overflow-hidden border-b border-bbs-border">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    className="w-full h-full object-cover object-[center_30%] block filter grayscale-[25%] contrast-105 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Top-Right Technical Track Code */}
                  <div className="absolute top-3 right-3 font-mono text-[10px] px-2 py-0.5 bg-bbs-bg/90 border border-bbs-border rounded text-bbs-accent-light tracking-wider">
                    {member.trackCode}
                  </div>

                  {/* Bottom-Left Department Tag */}
                  <div className="absolute bottom-3 left-3 font-mono text-[10px] px-2 py-0.5 bg-bbs-bg/90 border border-bbs-border rounded text-bbs-text">
                    {member.department}
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 sm:p-7">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-xs font-semibold text-bbs-accent-light tracking-wider uppercase">
                      {member.role}
                    </span>
                    <span className="font-mono text-[10px] text-bbs-dim">
                      {member.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-bbs-text mb-3">
                    {member.name}
                  </h3>

                  <p className="text-sm text-bbs-muted leading-relaxed mb-5">
                    {member.description}
                  </p>

                  {/* Responsibilities & Specialties */}
                  <div className="mb-4">
                    <div className="font-mono text-[10px] text-bbs-dim uppercase tracking-wider mb-2">
                      CORE FOCUS & TOOLS
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="font-mono text-[11px] px-2 py-0.5 bg-bbs-raised border border-bbs-border rounded text-bbs-dim"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with Social Links */}
              <div className="px-6 py-4 sm:px-7 bg-bbs-raised/40 border-t border-bbs-border flex items-center justify-between">
                <span className="font-mono text-[11px] text-bbs-dim">
                  CONNECT:
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded hover:bg-bbs-hover text-bbs-muted hover:text-bbs-text transition-colors"
                    title={`${member.name} GitHub`}
                    aria-label={`${member.name} GitHub`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded hover:bg-bbs-hover text-bbs-muted hover:text-bbs-text transition-colors"
                    title={`${member.name} LinkedIn`}
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`mailto:${member.socials.email}`}
                    className="p-1.5 rounded hover:bg-bbs-hover text-bbs-muted hover:text-bbs-text transition-colors"
                    title={`Email ${member.name}`}
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 3. Notice of Active Cohort Elections & Track Nominations */}
        <div className="team-roster-item bg-bbs-surface border border-bbs-border rounded p-6 sm:p-8 flex justify-between items-center flex-wrap gap-6 hover:border-bbs-border-focus transition-colors">
          <div>
            <div className="font-mono text-xs text-bbs-accent-light mb-1">
              COHORT 2026 TRACK NOMINATIONS
            </div>
            <div className="font-display text-lg sm:text-xl font-bold text-bbs-text">
              WANT TO LEAD A TRACK IN THE NEXT COHORT?
            </div>
            <div className="text-sm text-bbs-muted mt-1 max-w-2xl leading-relaxed">
              Applications for track co-leads, contest coordinators, and sophomore mentors are evaluated every semester. Built for undergraduate students who love shipping real code.
            </div>
          </div>

          <a 
            href="#join" 
            className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold tracking-wide px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all shrink-0 hover:scale-102 shadow-md shadow-bbs-accent/20"
          >
            <span>SUBMIT LEADERSHIP APPLICATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
