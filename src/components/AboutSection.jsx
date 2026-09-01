import React, { useState } from 'react';
import { PILLARS } from '../data/pillars.js';
import ViewportText from './ViewportText.jsx';

export default function AboutSection() {
  const [activePillarId, setActivePillarId] = useState(PILLARS[0].id);
  const activePillar = PILLARS.find(p => p.id === activePillarId) || PILLARS[0];

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-bbs-border relative">
      <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-6">
          <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block"></span>
          <span>ABOUT US</span>
        </div>

        {/* Editorial Asymmetric Header with Viewport-Driven Heading Visibility */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline mb-16">
          <div className="lg:col-span-6">
            <ViewportText
              as="h2"
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-bbs-text leading-tight m-0"
            >
              WE ARE NOT JUST A CODING CLUB.
            </ViewportText>
          </div>

          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg text-bbs-muted leading-relaxed max-w-xl">
              Most college clubs stop at boring slide presentations and textbook definitions. At BBS Coding Club, we learn by actually writing code, building projects with our friends, preparing for hackathons, and helping each other navigate computer science beyond the classroom syllabus.
            </p>
          </div>
        </div>

        {/* Interactive 4 Pillars Showcase */}
        <div className="border border-bbs-border rounded bg-bbs-surface overflow-hidden">
          {/* Pillar Selector Tabs */}
          <div 
            role="tablist"
            aria-label="Club Pillars"
            className="grid grid-cols-2 sm:grid-cols-4 border-b border-bbs-border bg-bbs-bg"
          >
            {PILLARS.map((pillar) => {
              const isActive = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`pillar-panel-${pillar.id}`}
                  id={`pillar-tab-${pillar.id}`}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`p-4 sm:p-5 text-left transition-all border-b-2 ${
                    isActive 
                      ? 'bg-bbs-surface border-bbs-accent text-bbs-text' 
                      : 'bg-transparent border-transparent text-bbs-muted hover:text-bbs-text hover:bg-bbs-surface/50'
                  }`}
                >
                  <div className="font-display font-bold text-base sm:text-lg tracking-tight">
                    {pillar.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Details Panel */}
          <div 
            id={`pillar-panel-${activePillar.id}`}
            role="tabpanel"
            aria-labelledby={`pillar-tab-${activePillar.id}`}
            className="p-6 sm:p-10 md:p-14"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center font-mono text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/30 mb-5">
                  PILLAR FOCUS: {activePillar.title}
                </span>

                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-bbs-text leading-tight mb-4">
                  {activePillar.tagline}
                </h3>

                <p className="text-base sm:text-lg text-bbs-muted leading-relaxed max-w-xl">
                  {activePillar.description}
                </p>
              </div>

              {/* What We Do List */}
              <div className="lg:col-span-5 bg-bbs-raised border border-bbs-border rounded p-6 sm:p-8">
                <div className="font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-5">
                  WHAT WE DO TOGETHER
                </div>

                <ul className="list-none flex flex-col gap-4 p-0 m-0">
                  {activePillar.deliverables.map((item, i) => (
                    <li 
                      key={i} 
                      className="flex items-center gap-3 font-mono text-sm text-bbs-text"
                    >
                      <span className="w-1.5 h-1.5 rounded-sm bg-bbs-accent inline-block" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
