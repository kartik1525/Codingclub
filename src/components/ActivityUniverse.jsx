import React, { useState } from 'react';
import { ACTIVITY_ZONES } from '../data/activityZones.js';
import ViewportText from './ViewportText.jsx';

export default function ActivityUniverse() {
  const [selectedId, setSelectedId] = useState(ACTIVITY_ZONES[0].id);
  const activeZone = ACTIVITY_ZONES.find(z => z.id === selectedId) || ACTIVITY_ZONES[0];

  return (
    <section id="universe" className="subtle-grid py-20 sm:py-28 border-t border-bbs-border relative">
      <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-6">
          <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block"></span>
          <span>02 / WHAT WE ACTUALLY DO</span>
        </div>

        <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
          <div>
            <ViewportText
              as="h2"
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-bbs-text leading-tight m-0"
            >
              WHERE BUILDERS CONVERGE.
            </ViewportText>
          </div>
          <div>
            <span className="font-mono text-xs sm:text-sm text-bbs-muted">
              TAP OR HOVER TO EXPLORE HOW SQUADS OPERATE
            </span>
          </div>
        </div>

        {/* Matrix & Editorial Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Matrix Selector (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {ACTIVITY_ZONES.map((zone) => {
              const isSelected = zone.id === selectedId;
              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedId(zone.id)}
                  onMouseEnter={() => setSelectedId(zone.id)}
                  className={`flex items-center justify-between p-4 sm:p-5 rounded border text-left w-full transition-all ${
                    isSelected 
                      ? 'bg-bbs-raised border-bbs-accent text-white' 
                      : 'bg-bbs-surface border-bbs-border text-bbs-muted hover:text-bbs-text hover:border-bbs-border-focus'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-baseline gap-4">
                    <span className={`font-mono text-xs ${isSelected ? 'text-bbs-accent-light' : 'text-bbs-dim'}`}>
                      //
                    </span>
                    <span className={`font-display text-lg sm:text-xl font-bold tracking-tight ${isSelected ? 'text-white' : 'inherit'}`}>
                      {zone.title}
                    </span>
                  </div>

                  <span className={`transition-transform duration-200 ${
                    isSelected ? 'text-bbs-accent-light translate-x-1' : 'text-bbs-dim'
                  }`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Editorial Visual Inspector (7 cols on desktop) */}
          <div className="lg:col-span-7 bg-bbs-surface border border-bbs-border rounded overflow-hidden flex flex-col">
            {/* Visual Photo Header */}
            {activeZone.image && (
              <div className="w-full h-56 sm:h-64 relative overflow-hidden border-b border-bbs-border bg-black">
                <img 
                  src={activeZone.image} 
                  alt={activeZone.title}
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-bbs-bg/85 backdrop-blur-sm px-3 py-1 rounded font-mono text-xs text-bbs-accent-light border border-bbs-border">
                  FORMAT: {activeZone.howItWorks.toUpperCase()}
                </div>
              </div>
            )}

            {/* Inspector Body */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="font-mono text-xs text-bbs-accent-light uppercase mb-2">
                  {activeZone.role}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-bbs-text">
                  {activeZone.title}
                </h3>

                <p className="text-base text-bbs-muted leading-relaxed mb-6">
                  {activeZone.description}
                </p>

                <div className="mb-6">
                  <div className="font-mono text-xs text-bbs-dim mb-2 uppercase">
                    COMMON TRACKS & EXPERIENCES:
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {activeZone.tags.map((tag, i) => (
                      <span key={i} className="inline-flex items-center font-mono text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-bbs-border pt-4 flex items-center justify-between flex-wrap gap-3">
                <div className="font-mono text-xs text-bbs-dim">
                  OPEN TO ALL UNDERGRADUATE STUDENTS
                </div>

                <a 
                  href="#join" 
                  className="font-mono text-xs font-semibold px-4 py-2 border border-bbs-border-light text-bbs-text rounded hover:bg-bbs-raised hover:border-bbs-muted transition-colors"
                >
                  GET INVOLVED ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
