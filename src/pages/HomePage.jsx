import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Code2, Users, Layers, Calendar, Terminal, Mail } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import Marquee from '../components/Marquee.jsx';
import StatsSection from '../components/StatsSection.jsx';
import TerminalBlock from '../components/TerminalBlock.jsx';
import ViewportText from '../components/ViewportText.jsx';
import Section from '../components/Section.jsx';
import AboutBentoGrid from '../components/AboutBentoGrid.jsx';
import DepartmentDirectory from '../components/DepartmentDirectory.jsx';
import CoreLeadershipRoster from '../components/CoreLeadershipRoster.jsx';
import { EVENTS } from '../data/events.js';
import { 
  ABOUT_PREVIEW, 
  AREAS_PREVIEW, 
  EVENTS_PREVIEW, 
  JOIN_BANNER 
} from '../data/home.js';

/**
 * HomePage - Concise Overview of BBS Coding Club
 * 
 * - Hero section preserved with zero-layout-shift typewriter.
 * - Marquee technical strip.
 * - Concise About preview with CTA to /about.
 * - Areas We Explore preview with CTA to /explore.
 * - Events preview with CTA to /events.
 * - Stats and Terminal block.
 * - Team leadership preview with CTA to /team.
 * - Join invitation with CTA to /join.
 */
export default function HomePage() {
  const featuredEvents = EVENTS.slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* 1. Preserved Hero Section */}
      <Hero />

      {/* 2. Marquee Divider */}
      <Marquee />

      {/* 3. About Preview — Normal Solid Background */}
      <Section variant="solid" id="about" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex items-center gap-2.5 text-xs font-bold text-bbs-accent tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
            <span>{ABOUT_PREVIEW.badge}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 sm:mb-12">
            <div className="lg:col-span-6">
              <ViewportText
                as="h2"
                className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight m-0"
              >
                {ABOUT_PREVIEW.title}
              </ViewportText>
            </div>
            <div className="lg:col-span-6">
              <p className="text-base sm:text-lg text-bbs-muted leading-relaxed mb-6">
                {ABOUT_PREVIEW.description}
              </p>
              <Link
                to={ABOUT_PREVIEW.cta.path}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-bbs-accent hover:text-bbs-text transition-colors group"
              >
                <span>{ABOUT_PREVIEW.cta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Asymmetric Bento Grid (LEARN, BUILD, COMPETE, CONNECT) */}
          <AboutBentoGrid />
        </div>
      </Section>

      {/* 4. Areas We Explore Preview — Checkered / Grid Background */}
      <Section variant="grid" id="areas" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-bbs-accent tracking-wide uppercase mb-3">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>{AREAS_PREVIEW.badge}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight mb-3">
                {AREAS_PREVIEW.title}
              </h2>
              <p className="text-sm sm:text-base text-bbs-muted max-w-xl">
                {AREAS_PREVIEW.description}
              </p>
            </div>
            <Link
              to={AREAS_PREVIEW.cta.path}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-bbs-accent hover:text-bbs-text transition-colors group shrink-0"
            >
              <span>{AREAS_PREVIEW.cta.label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Interactive Areas Directory with Dynamic Right-Side Detail Panel */}
          <DepartmentDirectory />
        </div>
      </Section>

      {/* 5. Events Preview (Schedule & Activities) — Normal Solid Background */}
      <Section variant="solid" id="events" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-bbs-accent tracking-wide uppercase mb-3">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>{EVENTS_PREVIEW.badge}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight m-0">
                {EVENTS_PREVIEW.title}
              </h2>
            </div>
            <Link
              to={EVENTS_PREVIEW.cta.path}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-bbs-accent hover:text-bbs-text transition-colors group shrink-0"
            >
              <span>{EVENTS_PREVIEW.cta.label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-bbs-surface border border-bbs-border rounded p-6 sm:p-8 flex flex-col justify-between hover:border-bbs-border-focus transition-colors shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent border border-blue-500/25 uppercase tracking-wide">
                      {event.formattedDate} — {event.category.toUpperCase()}
                    </span>
                    <span className="text-xs font-medium text-bbs-dim uppercase">
                      {event.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-bbs-text mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-bbs-muted leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="text-xs font-medium text-bbs-muted mb-6">
                    LOCATION: {event.location} · {event.time}
                  </div>
                </div>

                <div className="border-t border-bbs-border pt-4 flex justify-between items-center">
                  <div className="flex flex-wrap gap-1">
                    {event.tracks.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-xs font-medium text-bbs-dim px-2 py-0.5 bg-bbs-raised rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/events"
                    className="text-xs font-semibold text-bbs-accent hover:text-bbs-text transition-colors inline-flex items-center gap-1"
                  >
                    <span>DETAILS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. Stats & Terminal Block — Normal Solid Background */}
      <StatsSection />
      <TerminalBlock />

      {/* 8. Team Preview (Core Leadership) — Checkered / Grid Background */}
      <Section variant="grid" id="team" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <CoreLeadershipRoster />
        </div>
      </Section>

      {/* 9. Join CTA Banner Preview — Normal Solid Background */}
      <Section variant="solid" id="join" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full text-center">
          <div className="flex items-center justify-center gap-2.5 text-xs font-bold text-bbs-accent tracking-wide uppercase mb-3">
            <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
            <span>{JOIN_BANNER.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight mb-4 max-w-2xl mx-auto">
            {JOIN_BANNER.title}
          </h2>
          <p className="text-base text-bbs-muted leading-relaxed max-w-xl mx-auto mb-8">
            {JOIN_BANNER.description}
          </p>
          <Link
            to={JOIN_BANNER.cta.path}
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:scale-105 shadow-xl shadow-bbs-accent/25"
          >
            <span>{JOIN_BANNER.cta.label}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
