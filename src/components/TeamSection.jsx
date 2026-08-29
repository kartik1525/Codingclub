import React from 'react';
import { TEAM_MEMBERS } from '../data/team.js';

export default function TeamSection() {
  return (
    <section id="team" className="subtle-grid py-20 sm:py-28 border-t border-bbs-border relative">
      <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
        {/* Section Meta */}
        <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-6">
          <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block"></span>
          <span>06 / CORE LEADERSHIP & ROSTER</span>
        </div>

        <div className="mb-14">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-bbs-text leading-tight m-0">
            RUN BY STUDENTS. OPEN TO BUILDERS.
          </h2>
          <p className="text-base sm:text-lg text-bbs-muted mt-3 max-w-2xl">
            Every track at BBS Coding Club is led by undergraduate students who volunteer their time to organize hackathons, run code reviews, and mentor first-years.
          </p>
        </div>

        {/* Notice of Active Nominations */}
        <div className="bg-bbs-surface border border-bbs-accent rounded p-6 sm:p-8 mb-12 flex justify-between items-center flex-wrap gap-6 shadow-xl">
          <div>
            <div className="font-mono text-xs text-bbs-accent-light mb-1">
              // COHORT 2026 STATUS
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold text-bbs-text">
              CORE ROSTER & TRACK LEAD NOMINATIONS IN PROGRESS
            </div>
            <div className="text-sm text-bbs-muted mt-1 max-w-xl">
              We do not publish fabricated personnel rosters. Official student elections and track confirmations are finalized every August.
            </div>
          </div>

          <a 
            href="#join" 
            className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-semibold tracking-wide px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-colors"
          >
            SUBMIT NOMINATION / APPLICATION ↗
          </a>
        </div>

        {/* Functional Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-bbs-surface border border-bbs-border rounded p-6 sm:p-7 flex flex-col justify-between hover:border-bbs-border-focus transition-colors"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="inline-flex items-center font-mono text-[11px] font-medium tracking-wider uppercase px-2 py-0.5 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/30">
                    {member.domain}
                  </span>
                  <span className="font-mono text-[10px] text-bbs-dim">
                    {member.status}
                  </span>
                </div>

                <div className="font-mono text-xs text-bbs-dim mb-1">
                  [{member.placeholderLabel}]
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-bbs-text mb-3 leading-snug">
                  {member.role}
                </h3>

                <p className="text-sm text-bbs-muted leading-relaxed mb-6">
                  {member.description}
                </p>
              </div>

              <div className="border-t border-bbs-border pt-4">
                <div className="font-mono text-[10px] text-bbs-dim mb-1 uppercase">
                  CORE RESPONSIBILITIES
                </div>
                <div className="font-mono text-xs text-bbs-text">
                  {member.focus}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
