import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import Section from '../components/Section.jsx';
import { 
  TEAM_MEMBERS, 
  TEAM_PAGE_HEADER, 
  LEADERSHIP_NOMINATIONS_CALLOUT 
} from '../data/team.js';

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

export default function TeamPage() {
  const [expandedMemberIds, setExpandedMemberIds] = useState(new Set());

  const toggleExpand = (id) => {
    setExpandedMemberIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const president = TEAM_MEMBERS[0]; // Kartikeya Singh (President / Club Head)
  const executives = TEAM_MEMBERS.slice(1, 3); // Adarsh Pandey (VP), Mohd. Shariq Irshad (Gen Sec)
  const leads = TEAM_MEMBERS.slice(3, 7); // Tech, Event, Community, Content & Design Leads
  const coordinators = TEAM_MEMBERS.slice(7, 10); // Technical, Event & Ops, Media & Docs Coordinators

  return (
    <div className="flex flex-col">
      {/* 1. Page Header — Normal Solid Background */}
      <Section variant="solid" className="pt-14 sm:pt-20 pb-8 sm:pb-12">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex items-center gap-2.5 text-xs font-bold text-bbs-accent tracking-wide uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
            <span>{TEAM_PAGE_HEADER.badge}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-bbs-text leading-tight mb-6 whitespace-pre-line">
            {TEAM_PAGE_HEADER.title}
          </h1>
          <p className="text-lg sm:text-xl text-bbs-muted max-w-3xl leading-relaxed">
            {TEAM_PAGE_HEADER.description}
          </p>
        </div>
      </Section>

      {/* 2. Team Directory Sections — Checkered / Grid Background */}
      <Section variant="grid" className="py-14 sm:py-20 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full space-y-16 sm:space-y-20">
          
          {/* ─── PRESIDENT / CLUB HEAD (FEATURED CARD) ─── */}
          <div>
            <div className="text-xs font-bold text-bbs-accent tracking-wider uppercase mb-4">
              PRESIDENT / CLUB HEAD
            </div>

            <article className="bg-bbs-surface border border-bbs-border rounded-xl overflow-hidden shadow-sm hover:border-bbs-border-focus transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Clean Photo Container: Zero Text Overlay */}
                <div className="lg:col-span-5 bg-bbs-raised overflow-hidden min-h-[280px] sm:min-h-[340px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-bbs-border relative">
                  <TeamPhoto member={president} />
                </div>

                {/* Information Section Below / Beside Image */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-bbs-accent uppercase tracking-wider mb-2">
                      {president.designation}
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-bbs-text mb-3">
                      {president.name}
                    </h2>

                    <p className="text-base sm:text-lg text-bbs-muted leading-relaxed mb-6">
                      {president.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Expandable Responsibilities */}
                    <div className="pt-4 border-t border-bbs-border flex items-center justify-between gap-4 flex-wrap">
                      <button
                        type="button"
                        onClick={() => toggleExpand(president.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-bbs-accent hover:text-bbs-text transition-colors cursor-pointer py-1 group/btn"
                        aria-expanded={expandedMemberIds.has(president.id)}
                      >
                        <span>
                          {expandedMemberIds.has(president.id) ? 'HIDE RESPONSIBILITIES' : 'VIEW RESPONSIBILITIES'}
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${expandedMemberIds.has(president.id) ? 'rotate-180 text-bbs-accent' : 'group-hover/btn:translate-y-0.5'}`} />
                      </button>

                      {/* Social Icons */}
                      <SocialLinks socials={president.socials} name={president.name} />
                    </div>

                    {/* Expandable Responsibilities List */}
                    <ResponsibilitiesDrawer
                      isExpanded={expandedMemberIds.has(president.id)}
                      responsibilities={president.responsibilities}
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* ─── EXECUTIVE TEAM ─── */}
          <div>
            <div className="text-xs font-bold text-bbs-accent tracking-wider uppercase mb-4">
              EXECUTIVE TEAM
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {executives.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  isExpanded={expandedMemberIds.has(member.id)}
                  onToggle={() => toggleExpand(member.id)}
                />
              ))}
            </div>
          </div>

          {/* ─── CORE FUNCTIONAL LEADS ─── */}
          <div>
            <div className="text-xs font-bold text-bbs-accent tracking-wider uppercase mb-4">
              CORE FUNCTIONAL LEADS
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leads.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  isExpanded={expandedMemberIds.has(member.id)}
                  onToggle={() => toggleExpand(member.id)}
                />
              ))}
            </div>
          </div>

          {/* ─── COORDINATORS ─── */}
          <div>
            <div className="text-xs font-bold text-bbs-accent tracking-wider uppercase mb-4">
              COORDINATORS
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coordinators.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  isExpanded={expandedMemberIds.has(member.id)}
                  onToggle={() => toggleExpand(member.id)}
                />
              ))}
            </div>
          </div>

        </div>
      </Section>

      {/* 3. Community Involvement Callout — Normal Solid Background */}
      <Section variant="solid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="bg-bbs-surface border border-bbs-border rounded-xl p-6 sm:p-8 flex justify-between items-center flex-wrap gap-6 hover:border-bbs-border-focus transition-colors shadow-sm">
            <div>
              <div className="text-xs font-bold text-bbs-accent mb-1 uppercase tracking-wide">
                {LEADERSHIP_NOMINATIONS_CALLOUT.badge}
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-bbs-text">
                {LEADERSHIP_NOMINATIONS_CALLOUT.title}
              </h3>
              <p className="text-sm text-bbs-muted mt-1 max-w-2xl leading-relaxed">
                {LEADERSHIP_NOMINATIONS_CALLOUT.description}
              </p>
            </div>
            <Link
              to={LEADERSHIP_NOMINATIONS_CALLOUT.cta.path}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all shrink-0 hover:scale-102 shadow-md shadow-bbs-accent/20"
            >
              <span>{LEADERSHIP_NOMINATIONS_CALLOUT.cta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}

/**
 * TeamCard - Clean Directory Card with NO Text Overlay on Photo
 */
function TeamCard({ member, isExpanded, onToggle }) {
  return (
    <article className="bg-bbs-surface border border-bbs-border rounded-xl overflow-hidden shadow-sm hover:border-bbs-border-focus transition-colors flex flex-col justify-between">
      <div>
        {/* Clean Photo Container: Zero Text Overlay */}
        <div className="aspect-[4/3] bg-bbs-raised overflow-hidden border-b border-bbs-border relative">
          <TeamPhoto member={member} />
        </div>

        {/* Textual Information Below Image */}
        <div className="p-6">
          <div className="text-xs font-bold text-bbs-accent uppercase tracking-wider mb-1.5">
            {member.designation}
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-bbs-text mb-2.5">
            {member.name}
          </h3>

          <p className="text-sm text-bbs-muted leading-relaxed">
            {member.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Footer: Expand Responsibilities & Socials */}
      <div className="px-6 pb-6 pt-0">
        <div className="pt-4 border-t border-bbs-border flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onToggle}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-bbs-accent hover:text-bbs-text transition-colors cursor-pointer py-1 group/btn"
            aria-expanded={isExpanded}
          >
            <span>
              {isExpanded ? 'HIDE RESPONSIBILITIES' : 'VIEW RESPONSIBILITIES'}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-bbs-accent' : 'group-hover/btn:translate-y-0.5'}`} />
          </button>

          {/* Social Channels */}
          <SocialLinks socials={member.socials} name={member.name} />
        </div>

        {/* Expandable Responsibilities Drawer */}
        <ResponsibilitiesDrawer
          isExpanded={isExpanded}
          responsibilities={member.responsibilities}
        />
      </div>
    </article>
  );
}

/**
 * TeamPhoto - Pure Clean Image Container without Any Overlays
 */
function TeamPhoto({ member }) {
  const [hasError, setHasError] = useState(false);

  if (!member.image || hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-bbs-surface via-bbs-raised to-bbs-surface relative select-none">
        <div className="absolute inset-0 section-grid opacity-40 pointer-events-none" />
        <span className="font-display text-4xl sm:text-5xl font-black text-bbs-text/80 tracking-tight relative z-10">
          {member.initials}
        </span>
      </div>
    );
  }

  return (
    <img
      src={member.image}
      alt={member.name}
      style={{ objectPosition: member.imagePosition || 'center center' }}
      className="w-full h-full object-cover select-none"
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

/**
 * ResponsibilitiesDrawer - Expandable Vertical List
 */
function ResponsibilitiesDrawer({ isExpanded, responsibilities }) {
  return (
    <div
      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
        isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="overflow-hidden">
        <div className="pt-4 mt-3 border-t border-bbs-border">
          <ul className="space-y-2">
            {responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-bbs-muted leading-relaxed font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-bbs-accent shrink-0 mt-1.5" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/**
 * SocialLinks - Subtle Social Icons
 */
function SocialLinks({ socials, name }) {
  if (!socials) return null;

  return (
    <div className="flex items-center gap-2 shrink-0">
      {socials.github && (
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded hover:bg-bbs-hover text-bbs-muted hover:text-bbs-text transition-colors cursor-pointer"
          title={`${name} GitHub`}
        >
          <GithubIcon className="w-3.5 h-3.5" />
        </a>
      )}
      {socials.linkedin && (
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded hover:bg-bbs-hover text-bbs-muted hover:text-bbs-text transition-colors cursor-pointer"
          title={`${name} LinkedIn`}
        >
          <LinkedinIcon className="w-3.5 h-3.5" />
        </a>
      )}
      {socials.email && (
        <a
          href={`mailto:${socials.email}`}
          className="p-1 rounded hover:bg-bbs-hover text-bbs-muted hover:text-bbs-text transition-colors cursor-pointer"
          title={`Email ${name}`}
        >
          <Mail className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  );
}
