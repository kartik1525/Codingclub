import React from 'react';
import { STATS } from '../data/stats.js';

export default function StatsSection() {
  return (
    <section id="stats" className="py-20 sm:py-28 border-t border-bbs-border relative">
      <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
        {/* Section Meta */}
        <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-6">
          <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block"></span>
          <span>05 / COMMUNITY METRICS & STATUS</span>
        </div>

        <div className="mb-10 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight m-0">
            AUTHENTIC BENCHMARKS.
          </h2>
          <p className="text-base sm:text-lg text-bbs-muted mt-3 max-w-2xl">
            No inflated numbers or vanity statistics. Honest milestones and community standards as of our 2025–2026 foundation.
          </p>
        </div>

        {/* High-Contrast Numerals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((item) => (
            <div
              key={item.id}
              className={`rounded p-6 sm:p-8 flex flex-col justify-between border transition-all hover:border-bbs-border-focus ${
                item.isConceptual 
                  ? 'bg-bbs-raised border-bbs-accent' 
                  : 'bg-bbs-surface border-bbs-border'
              }`}
            >
              <div>
                {item.isConceptual ? (
                  <div className="font-mono text-xs text-bbs-accent-light mb-2">
                    // COMMUNITY PLEDGE
                  </div>
                ) : (
                  <div className="font-mono text-xs text-bbs-dim mb-2">
                    // VERIFIED STATUS
                  </div>
                )}
                <div 
                  className={`font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none mb-4 ${
                    item.isConceptual ? 'text-bbs-accent-light' : 'text-bbs-text'
                  }`}
                >
                  {item.number}
                </div>
              </div>

              <div>
                <div className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-bbs-text mb-2 uppercase">
                  {item.label}
                </div>
                <div className="text-xs sm:text-sm text-bbs-muted leading-relaxed">
                  {item.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
