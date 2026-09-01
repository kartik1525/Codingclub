import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { FEATURED_LEADS, ROSTER_SECTION_HEADER } from '../data/team.js';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function CoreLeadershipRoster() {
  return (
    <div className="w-full">
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-bbs-accent tracking-wide uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-bbs-accent inline-block" />
            <span>{ROSTER_SECTION_HEADER.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight m-0">
            {ROSTER_SECTION_HEADER.title}
          </h2>
          <p className="text-sm sm:text-base text-bbs-muted leading-relaxed max-w-xl mt-3">
            {ROSTER_SECTION_HEADER.description}
          </p>
        </div>

        {/* Right Action: Full Team Link */}
        <div className="shrink-0 pt-2">
          <Link
            to={ROSTER_SECTION_HEADER.cta.path}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-bbs-accent hover:text-bbs-text transition-colors group"
          >
            <span>{ROSTER_SECTION_HEADER.cta.label}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 4 Featured Core Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {FEATURED_LEADS.map((member) => (
          <div
            key={member.id}
            className="bg-bbs-surface border border-bbs-border rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:border-bbs-accent/80 hover:shadow-md transition-all duration-300 group"
          >
            {/* Top Row: Branch Badge & Status */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-500/10 text-bbs-accent border border-blue-500/20 uppercase tracking-wide">
                  {member.branch}
                </span>
                <span className="text-xs font-medium text-bbs-dim">
                  CORE TEAM
                </span>
              </div>

              {/* Member Name */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-bbs-text tracking-tight mb-1 group-hover:text-bbs-accent-light transition-colors">
                {member.name}
              </h3>

              {/* Role */}
              <div className="text-xs sm:text-sm font-semibold text-bbs-accent uppercase mb-2">
                {member.designation || member.role}
              </div>

              {/* Short responsibility focus */}
              <p className="text-xs sm:text-sm text-bbs-muted leading-relaxed mb-4 min-h-[36px]">
                {member.shortDescription || member.focus}
              </p>

              {/* Photo / Avatar Placeholder */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-bbs-raised border border-bbs-border/70 mb-5 relative flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-gradient-to-b from-bbs-surface to-bbs-raised relative">
                    <div className="absolute inset-0 section-grid opacity-40 pointer-events-none" />
                    <span className="font-display text-3xl font-black text-bbs-text/85 mb-1 relative z-10">
                      {member.initials || member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                    <span className="text-xs font-medium text-bbs-dim uppercase tracking-wide relative z-10">
                      {member.branch}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom 4-Column Segmented Action Row */}
            <div className="border-t border-bbs-border pt-3 mt-auto">
              <div className="grid grid-cols-4 divide-x divide-bbs-border text-center">
                {/* GitHub */}
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-bbs-muted hover:text-bbs-text transition-colors py-1 cursor-pointer"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-bbs-muted hover:text-bbs-text transition-colors py-1 cursor-pointer"
                  title="LinkedIn Profile"
                >
                  <span className="font-bold text-[13px] leading-none font-sans lowercase select-none">
                    in
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${member.socials.email}`}
                  className="flex items-center justify-center text-bbs-muted hover:text-bbs-text transition-colors py-1 cursor-pointer"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* View Full Team */}
                <Link
                  to="/team"
                  className="flex items-center justify-center text-bbs-muted hover:text-bbs-accent transition-colors py-1 cursor-pointer"
                  title="View on Team Page"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
