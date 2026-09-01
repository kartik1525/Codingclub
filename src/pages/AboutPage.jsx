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
      {/* 1. Page Header Introduction — Two-Column Editorial Composition */}
      <Section variant="solid" className="pt-14 sm:pt-20 pb-12 sm:pb-16">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading & Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 text-xs font-bold text-bbs-accent tracking-wide uppercase mb-4">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>{ABOUT_PAGE_HEADER.badge}</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-bbs-text leading-tight mb-6 whitespace-pre-line">
                {ABOUT_PAGE_HEADER.title}
              </h1>
              <p className="text-base sm:text-lg text-bbs-muted leading-relaxed max-w-2xl">
                {ABOUT_PAGE_HEADER.description}
              </p>
            </div>

            {/* Right Column: College Photograph Card */}
            {ABOUT_PAGE_HEADER.image && (
              <div className="lg:col-span-5 w-full">
                <div className="bg-bbs-surface border border-bbs-border rounded-lg overflow-hidden shadow-md hover:border-bbs-border-focus transition-colors">
                  <div className="w-full aspect-[3/2] overflow-hidden bg-bbs-raised">
                    <img
                      src={ABOUT_PAGE_HEADER.image.src}
                      alt={ABOUT_PAGE_HEADER.image.alt}
                      className="w-full h-full object-cover object-center block"
                      loading="eager"
                    />
                  </div>
                  <div className="p-4 sm:p-5 bg-bbs-surface border-t border-bbs-border">
                    <div className="text-xs sm:text-sm font-bold tracking-tight text-bbs-text uppercase">
                      {ABOUT_PAGE_HEADER.image.title}
                    </div>
                    <div className="text-[11px] sm:text-xs font-medium text-bbs-muted tracking-wide uppercase mt-1">
                      {ABOUT_PAGE_HEADER.image.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* 2. Origin & Ethos — Checkered / Grid Background */}
      <Section variant="grid" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
            <div className="lg:col-span-6">
              <div className="text-xs font-bold text-bbs-accent mb-2 uppercase tracking-wide">
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
              <div className="text-xs text-bbs-dim border-l-2 border-bbs-accent pl-4 py-1 italic font-medium">
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
          <div className="text-xs font-bold text-bbs-accent mb-2 uppercase tracking-wide">
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
                  <h3 className="font-display text-2xl font-bold text-bbs-text mb-3">
                    {pillar.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-bbs-accent mb-4">
                    {pillar.tagline}
                  </div>
                  <p className="text-sm sm:text-base text-bbs-muted leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="border-t border-bbs-border pt-4">
                  <div className="text-xs font-bold text-bbs-dim mb-2 uppercase tracking-wide">
                    DELIVERABLES & SESSIONS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pillar.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-1 rounded bg-bbs-raised border border-bbs-border text-bbs-text"
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
              <div className="text-xs font-bold text-bbs-accent mb-2 uppercase tracking-wide">
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
              <div className="text-xs font-bold text-bbs-accent mb-2 uppercase tracking-wide">
                {COMMUNITY_GUIDELINES.badge}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-bbs-text mb-4">
                {COMMUNITY_GUIDELINES.title}
              </h3>
              <p className="text-sm text-bbs-muted leading-relaxed mb-4">
                {COMMUNITY_GUIDELINES.description}
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-bbs-text">
                {COMMUNITY_GUIDELINES.rules.map((rule, idx) => (
                  <div key={idx} className="p-3 bg-bbs-raised border border-bbs-border rounded">
                    <span className="text-bbs-accent font-semibold">{rule.tag}:</span> {rule.text}
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
          <div className="text-xs font-bold text-bbs-accent mb-2 uppercase tracking-wide">
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
                <div className="text-xs sm:text-sm font-bold text-bbs-text mb-1 uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-xs text-bbs-muted">
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
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded bg-bbs-raised border border-bbs-border text-bbs-text hover:border-bbs-accent transition-colors"
              >
                <span>{ABOUT_CTA.secondaryBtn.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={ABOUT_CTA.primaryBtn.path}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:scale-105 shadow-md shadow-bbs-accent/25"
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
