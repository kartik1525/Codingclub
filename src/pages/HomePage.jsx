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
import { PROJECTS } from '../data/projects.js';
import { EVENTS } from '../data/events.js';
import { 
  ABOUT_PREVIEW, 
  DEPARTMENTS_PREVIEW, 
  PROJECTS_PREVIEW, 
  EVENTS_PREVIEW, 
  JOIN_BANNER 
} from '../data/home.js';

/**
 * HomePage - Concise Overview of BBS Coding Club
 * 
 * - Hero section preserved with zero-layout-shift typewriter.
 * - Marquee technical strip.
 * - Concise About preview with CTA to /about.
 * - Departments preview with CTA to /departments.
 * - Featured Projects preview with CTA to /projects.
 * - Events preview with CTA to /events.
 * - Stats and Terminal block.
 * - Team leadership preview with CTA to /team.
 * - Join invitation with CTA to /join.
 */
export default function HomePage() {
  const featuredProjects = PROJECTS.slice(0, 2);
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
          <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-6">
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
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-bbs-accent-light hover:text-bbs-text transition-colors group"
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

      {/* 4. Departments Preview (Specialized Tracks) — Checkered / Grid Background */}
      <Section variant="grid" id="departments" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>{DEPARTMENTS_PREVIEW.badge}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight m-0">
                {DEPARTMENTS_PREVIEW.title}
              </h2>
            </div>
            <Link
              to={DEPARTMENTS_PREVIEW.cta.path}
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-bbs-accent-light hover:text-bbs-text transition-colors group shrink-0"
            >
              <span>{DEPARTMENTS_PREVIEW.cta.label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Interactive Department Directory with Dynamic Right-Side Detail Panel */}
          <DepartmentDirectory />
        </div>
      </Section>

      {/* 5. Featured Projects Preview — Normal Solid Background */}
      <Section variant="solid" id="projects" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>{PROJECTS_PREVIEW.badge}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight m-0">
                {PROJECTS_PREVIEW.title}
              </h2>
            </div>
            <Link
              to={PROJECTS_PREVIEW.cta.path}
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-bbs-accent-light hover:text-bbs-text transition-colors group shrink-0"
            >
              <span>{PROJECTS_PREVIEW.cta.label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8">
            {featuredProjects.map((project, index) => {
              const isFeatured = index === 0;

              return (
                <article
                  key={project.id}
                  className={`bg-bbs-surface border rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 group relative shadow-sm ${
                    isFeatured
                      ? 'border-bbs-border-focus/70 hover:border-bbs-accent'
                      : 'border-bbs-border hover:border-bbs-border-focus'
                  }`}
                >
                  {/* Image Container with Subtle Technical Hover Zoom & "OPEN PROJECT ↗" Overlay */}
                  <div className="w-full aspect-[16/9] bg-bbs-raised overflow-hidden relative border-b border-bbs-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Top Tag Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 z-20">
                      <span className="bg-bbs-bg/90 backdrop-blur-sm border border-bbs-border px-2.5 py-1 rounded font-mono text-[11px] text-bbs-accent font-semibold flex items-center gap-1.5 shadow-sm">
                        {isFeatured && <span className="w-1.5 h-1.5 rounded-full bg-bbs-accent inline-block animate-pulse" />}
                        <span>{isFeatured ? 'FLAGSHIP RELEASE' : 'STUDENT PROTOTYPE'}</span>
                      </span>
                      <span className="bg-bbs-surface/85 backdrop-blur-sm border border-bbs-border px-2 py-1 rounded font-mono text-[10px] text-bbs-dim hidden sm:inline-block">
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Subtle Technical Hover Overlay: "OPEN PROJECT ↗" */}
                    <Link
                      to="/projects"
                      className="absolute inset-0 bg-bbs-bg/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 cursor-pointer"
                      aria-label={`Open details for ${project.title}`}
                    >
                      <span className="font-mono text-xs font-semibold px-4 py-2 rounded bg-bbs-accent text-white border border-blue-400/30 shadow-lg shadow-bbs-accent/25 flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span>OPEN PROJECT</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-[11px] text-bbs-accent uppercase tracking-wider font-semibold">
                          {isFeatured ? 'FLAGSHIP BUILD' : 'CAMPUS HACK'}
                        </span>
                        <span className="font-mono text-xs text-bbs-dim">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold text-bbs-text mb-2 tracking-tight group-hover:text-bbs-accent-light transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-bbs-muted leading-relaxed mb-5">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techTags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="font-mono text-xs px-2.5 py-1 bg-bbs-raised border border-bbs-border rounded text-bbs-text/85 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Meta & Code Action */}
                    <div className="border-t border-bbs-border pt-4 flex justify-between items-center font-mono text-xs">
                      <span className="text-bbs-dim flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        <span>{project.status}</span>
                      </span>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-bbs-accent hover:text-bbs-text transition-colors inline-flex items-center gap-1 font-semibold"
                        >
                          <span>SOURCE CODE</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 6. Events Preview (Schedule & Activities) — Checkered / Grid Background */}
      <Section variant="grid" id="events" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>{EVENTS_PREVIEW.badge}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight m-0">
                {EVENTS_PREVIEW.title}
              </h2>
            </div>
            <Link
              to={EVENTS_PREVIEW.cta.path}
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-bbs-accent-light hover:text-bbs-text transition-colors group shrink-0"
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
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/25">
                      {event.formattedDate} — {event.category.toUpperCase()}
                    </span>
                    <span className="font-mono text-[10px] text-bbs-dim uppercase">
                      {event.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-bbs-text mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-bbs-muted leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="font-mono text-xs text-bbs-dim mb-6">
                    LOCATION: {event.location} · {event.time}
                  </div>
                </div>

                <div className="border-t border-bbs-border pt-4 flex justify-between items-center">
                  <div className="flex flex-wrap gap-1">
                    {event.tracks.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="font-mono text-[10px] text-bbs-dim px-2 py-0.5 bg-bbs-raised rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/events"
                    className="font-mono text-xs text-bbs-accent-light font-semibold hover:text-bbs-text transition-colors"
                  >
                    DETAILS ↗
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
          <div className="flex items-center justify-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-3">
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
            className="inline-flex items-center gap-2 font-mono text-sm font-semibold px-6 py-3 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:scale-105 shadow-xl shadow-bbs-accent/25"
          >
            <span>{JOIN_BANNER.cta.label}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
