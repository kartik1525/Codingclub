import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Terminal, Users, ShieldCheck } from 'lucide-react';
import Section from '../components/Section.jsx';
import { CLUB_INFO } from '../data/clubInfo.js';
import { PILLARS } from '../data/pillars.js';
import { STATS, BENCHMARKS_HEADER } from '../data/stats.js';
import { 
  ABOUT_PAGE_HEADER, 
  ORIGIN_ETHOS, 
  PILLARS_SECTION_HEADER, 
  STUDENT_OUTCOMES, 
  COMMUNITY_GUIDELINES, 
  ABOUT_CTA 
} from '../data/about.js';

const ETHOS_ICONS = {
  terminal: Terminal,
  award: Award,
  users: Users,
  shield: ShieldCheck
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Page Header Introduction — Normal Solid Background */}
      <Section variant="solid" className="pt-14 sm:pt-20 pb-12 sm:pb-16">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
            <span>{ABOUT_PAGE_HEADER.badge}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-bbs-text leading-tight mb-6 whitespace-pre-line">
            {ABOUT_PAGE_HEADER.title}
          </h1>
          <p className="text-lg sm:text-xl text-bbs-muted max-w-3xl leading-relaxed">
            {ABOUT_PAGE_HEADER.description}
          </p>
        </div>
      </Section>

      {/* 2. Origin & Ethos — Checkered / Grid Background */}
      <Section variant="grid" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
            <div className="lg:col-span-6">
              <div className="font-mono text-xs text-bbs-accent-light mb-2 uppercase">
                {ORIGIN_ETHOS.badge}
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-bbs-text mb-6">
                {ORIGIN_ETHOS.title}
              </h2>
              {ORIGIN_ETHOS.paragraphs.map((p, idx) => (
                <p key={idx} className="text-base sm:text-lg text-bbs-muted leading-relaxed mb-6">
                  {p}
                </p>
              ))}
              <div className="font-mono text-xs text-bbs-dim border-l-2 border-bbs-accent pl-4 py-1 italic">
                "{ORIGIN_ETHOS.quote}"
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {ORIGIN_ETHOS.ethosCards.map((card) => {
                const IconComponent = ETHOS_ICONS[card.iconType] || Terminal;
                return (
                  <div key={card.id} className="bg-bbs-surface border border-bbs-border rounded p-6">
                    <div className="w-9 h-9 rounded bg-bbs-accent-dim text-bbs-accent-light flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-bbs-text mb-2">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-bbs-muted leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Operational Pillars — Normal Solid Background */}
      <Section variant="solid" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="font-mono text-xs text-bbs-accent-light mb-2 uppercase">
            {PILLARS_SECTION_HEADER.badge}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-bbs-text mb-12">
            {PILLARS_SECTION_HEADER.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-bbs-surface border border-bbs-border rounded p-6 sm:p-8 flex flex-col justify-between hover:border-bbs-border-focus transition-colors shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/25">
                      CORE PILLAR
                    </span>
                    <span className="font-mono text-xs text-bbs-dim uppercase">PRINCIPLE</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-bbs-text mb-3">
                    {pillar.title}
                  </h3>
                  <div className="font-mono text-xs text-bbs-accent-light mb-4">
                    {pillar.tagline}
                  </div>
                  <p className="text-sm sm:text-base text-bbs-muted leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="border-t border-bbs-border pt-4">
                  <div className="font-mono text-[10px] text-bbs-dim mb-2 uppercase tracking-wider">
                    DELIVERABLES & SESSIONS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pillar.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-bbs-raised border border-bbs-border text-bbs-text"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Student Outcomes & Culture — Checkered / Grid Background */}
      <Section variant="grid" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <div className="font-mono text-xs text-bbs-accent-light mb-2 uppercase">
                {STUDENT_OUTCOMES.badge}
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-bbs-text mb-6">
                {STUDENT_OUTCOMES.title}
              </h2>
              <ul className="list-none p-0 m-0 space-y-4">
                {STUDENT_OUTCOMES.outcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-bbs-muted leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-bbs-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 bg-bbs-surface border border-bbs-border rounded p-6 sm:p-8">
              <div className="font-mono text-xs text-bbs-accent-light mb-2 uppercase">
                {COMMUNITY_GUIDELINES.badge}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-bbs-text mb-4">
                {COMMUNITY_GUIDELINES.title}
              </h3>
              <p className="text-sm text-bbs-muted leading-relaxed mb-4">
                {COMMUNITY_GUIDELINES.description}
              </p>
              <div className="space-y-3 font-mono text-xs text-bbs-text">
                {COMMUNITY_GUIDELINES.rules.map((rule, idx) => (
                  <div key={idx} className="p-3 bg-bbs-raised border border-bbs-border rounded">
                    <span className="text-bbs-accent-light font-semibold">{rule.tag}:</span> {rule.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Verified Benchmarks & Metrics — Normal Solid Background */}
      <Section variant="solid" className="py-20 sm:py-24 border-t border-bbs-border relative text-center">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="font-mono text-xs text-bbs-accent-light mb-2 uppercase">
            {BENCHMARKS_HEADER.badge}
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-bbs-text mb-12">
            {BENCHMARKS_HEADER.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.id} className="bg-bbs-surface border border-bbs-border rounded p-6">
                <div className="font-display text-3xl sm:text-5xl font-bold text-bbs-accent mb-2">
                  {stat.value || stat.number}
                </div>
                <div className="font-mono text-xs font-semibold text-bbs-text mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-bbs-muted">
                  {stat.detail || stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. Closing Call to Action — Checkered / Grid Background */}
      <Section variant="grid" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="bg-bbs-surface border border-bbs-border rounded p-8 sm:p-12 text-center shadow-lg">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-bbs-text mb-4">
              {ABOUT_CTA.title}
            </h2>
            <p className="text-sm sm:text-base text-bbs-muted max-w-xl mx-auto mb-8 leading-relaxed">
              {ABOUT_CTA.description}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to={ABOUT_CTA.secondaryBtn.path}
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold px-5 py-2.5 rounded bg-bbs-raised border border-bbs-border text-bbs-text hover:border-bbs-accent transition-colors"
              >
                <span>{ABOUT_CTA.secondaryBtn.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={ABOUT_CTA.primaryBtn.path}
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:scale-105 shadow-md shadow-bbs-accent/25"
              >
                <span>{ABOUT_CTA.primaryBtn.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
