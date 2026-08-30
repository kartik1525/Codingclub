import React from 'react';
import { PROJECTS } from '../data/projects.js';
import ViewportText from './ViewportText.jsx';

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-bbs-border relative">
      <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
        {/* Section Meta */}
        <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-6">
          <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block"></span>
          <span>SELECTED BUILDS & CASE STUDIES</span>
        </div>

        {/* Section Header with Viewport-Driven Heading Visibility */}
        <div className="mb-14">
          <ViewportText
            as="h2"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-bbs-text leading-tight m-0"
          >
            THINGS WE'VE BUILT.
          </ViewportText>
          <p className="text-base sm:text-lg text-bbs-muted mt-3 max-w-2xl">
            Real software built by student members. From this very website to campus hackathon tools.
          </p>
        </div>

        {/* Editorial Case Studies (Non-repeating visual layouts) */}
        <div className="flex flex-col gap-16 sm:gap-20">
          
          {/* Project 01: Full Editorial Feature with Monitor Visual */}
          {PROJECTS[0] && (
            <article className="bg-bbs-surface border border-bbs-border rounded overflow-hidden">
              {/* Large Visual Showcase Image */}
              <div className="w-full max-h-[460px] overflow-hidden relative border-b border-bbs-border bg-black">
                <img 
                  src={PROJECTS[0].image} 
                  alt="BBS Coding Club Web Platform Interface Screenshot"
                  className="w-full h-full max-h-[460px] object-cover object-center block"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-bbs-bg/85 backdrop-blur-sm border border-bbs-border px-3.5 py-1.5 rounded font-mono text-xs text-bbs-text">
                  LIVE PRODUCTION BUILD · v1.0.4
                </div>
              </div>

              {/* Project Content Breakdown */}
              <div className="p-6 sm:p-10 md:p-14">
                <div className="flex justify-between items-center flex-wrap gap-4 mb-4">
                  <span className="font-mono text-xs sm:text-sm text-bbs-accent-light font-semibold">
                    {PROJECTS[0].category.toUpperCase()}
                  </span>
                  <span className="font-mono text-xs text-bbs-muted px-2.5 py-1 bg-bbs-surface border border-bbs-border rounded">
                    YEAR {PROJECTS[0].year}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-bold text-bbs-text mb-4">
                  {PROJECTS[0].title}
                </h3>

                <p className="text-base sm:text-lg text-bbs-muted leading-relaxed max-w-3xl mb-6">
                  {PROJECTS[0].description}
                </p>

                {/* Real student context */}
                <div className="bg-bbs-raised border border-bbs-border rounded p-4 sm:p-5 mb-8 font-mono text-xs sm:text-sm text-bbs-muted leading-relaxed">
                  <span className="text-bbs-accent-light font-semibold block mb-1.5">
                    WHY WE BUILT IT:
                  </span>
                  {PROJECTS[0].context}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {PROJECTS[0].techTags.map((t, idx) => (
                    <span key={idx} className="font-mono text-xs px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/30">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-4 flex-wrap">
                  <a 
                    href={PROJECTS[0].demoUrl} 
                    className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-semibold tracking-wide px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:-translate-y-0.5"
                  >
                    EXPERIENCE PLATFORM ↑
                  </a>
                  <a 
                    href={PROJECTS[0].repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-semibold tracking-wide px-5 py-2.5 rounded border border-bbs-border-light text-bbs-text bg-transparent hover:bg-bbs-raised hover:border-bbs-muted transition-all"
                  >
                    VIEW CODEBASE ON GITHUB ↗
                  </a>
                </div>
              </div>
            </article>
          )}

          {/* Project 02: Split Visual Case Study for Upcoming Hackathon Hub */}
          {PROJECTS[1] && (
            <article className="bg-bbs-surface border border-bbs-border rounded overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Photo of Students Collaborating */}
              <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] bg-black border-b lg:border-b-0 lg:border-r border-bbs-border">
                <img 
                  src={PROJECTS[1].image} 
                  alt="Students collaborating during hackathon development"
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-bbs-bg/85 backdrop-blur-sm px-3 py-1 rounded font-mono text-xs text-bbs-accent-light border border-bbs-border">
                  IN-PERSON SPRINT · FALL '26
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-xs sm:text-sm text-bbs-accent-light font-semibold">
                      {PROJECTS[1].category.toUpperCase()}
                    </span>
                    <span className="font-mono text-[11px] text-bbs-muted px-2 py-0.5 border border-bbs-border rounded">
                      STATUS: PROTOTYPE
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-bbs-text mb-3">
                    {PROJECTS[1].title}
                  </h3>

                  <p className="text-sm sm:text-base text-bbs-muted leading-relaxed mb-5">
                    {PROJECTS[1].description}
                  </p>

                  <div className="bg-bbs-raised border border-bbs-border p-4 rounded font-mono text-xs text-bbs-muted mb-5 leading-relaxed">
                    <span className="text-bbs-accent-light block mb-1">
                      STUDENT ORGANIZER NEED:
                    </span>
                    {PROJECTS[1].context}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {PROJECTS[1].techTags.map((t, i) => (
                      <span key={i} className="font-mono text-xs px-2.5 py-1 bg-bbs-surface border border-bbs-border rounded text-bbs-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <a 
                    href="#events" 
                    className="inline-flex items-center justify-center font-mono text-xs font-semibold px-4 py-2 border border-bbs-border-light text-bbs-text rounded hover:bg-bbs-raised hover:border-bbs-muted transition-colors"
                  >
                    JOIN THE HACKATHON WORKING GROUP →
                  </a>
                </div>
              </div>
            </article>
          )}

          {/* Project 03: Open Member Submission Callout */}
          {PROJECTS[2] && (
            <article className="bg-bbs-surface border border-dashed border-bbs-border-light rounded p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs text-bbs-accent-light font-semibold">
                    COMMUNITY INITIATIVE
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/30">
                    SUBMISSIONS OPEN
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-bbs-text mb-3">
                  {PROJECTS[2].title} — HAVE YOU BUILT A PROJECT?
                </h3>

                <p className="text-base text-bbs-muted leading-relaxed max-w-2xl mb-6">
                  {PROJECTS[2].description} {PROJECTS[2].context}
                </p>
              </div>

              <div>
                <a 
                  href="#join" 
                  className="inline-flex items-center justify-center font-mono text-xs font-semibold px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-colors"
                >
                  PITCH A PROJECT AT NEXT CLUB MEETUP ↗
                </a>
              </div>
            </article>
          )}

        </div>
      </div>
    </section>
  );
}
