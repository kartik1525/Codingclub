import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, ArrowRight } from 'lucide-react';
import Section from '../components/Section.jsx';
import { TEAM_LEADERSHIP } from '../data/team.js';
import { DEPARTMENTS } from '../data/departments.js';

function GithubIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function TeamPage() {
  const [selectedDeptFilter, setSelectedDeptFilter] = useState('all');
  const { president, trackLeads } = TEAM_LEADERSHIP;

  const departmentFilters = [
    { id: 'all', label: 'ALL LEADERSHIP' },
    ...DEPARTMENTS.map(d => ({ id: d.id, label: d.shortName.toUpperCase() }))
  ];

  const filteredTrackLeads = selectedDeptFilter === 'all'
    ? trackLeads
    : trackLeads.filter(lead => lead.departmentId === selectedDeptFilter);

  const showPresident = selectedDeptFilter === 'all' || selectedDeptFilter === president.departmentId;

  return (
    <div className="flex flex-col">
      {/* 1. Page Header & Filter Tabs — Normal Solid Background */}
      <Section variant="solid" className="pt-14 sm:pt-20 pb-8 sm:pb-12">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-bbs-text leading-tight mb-6">
            RUN BY STUDENTS.<br />BUILT FOR BUILDERS.
          </h1>
          <p className="text-lg sm:text-xl text-bbs-muted max-w-3xl leading-relaxed mb-10">
            Every track at BBS Coding Club is led by undergraduate engineering students who volunteer their time to organize hackathons, run code reviews, and mentor first-years.
          </p>

          {/* Department Filter Navigation */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 border-b border-bbs-border scrollbar-none">
            {departmentFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedDeptFilter(filter.id)}
                className={`px-3.5 py-1.5 rounded font-mono text-xs whitespace-nowrap transition-all cursor-pointer border ${
                  selectedDeptFilter === filter.id
                    ? 'bg-bbs-accent text-white border-bbs-accent shadow-sm font-semibold'
                    : 'bg-bbs-surface text-bbs-muted hover:text-bbs-text hover:bg-bbs-raised border-bbs-border'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* 2. Dominant Core Leadership / President Feature — Checkered / Grid Background */}
      {showPresident && (
        <Section variant="grid" className="py-16 sm:py-24 border-t border-bbs-border relative">
          <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
            <article className="bg-bbs-surface border border-bbs-border rounded-xl overflow-hidden shadow-xl hover:border-bbs-border-focus transition-colors group">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Left: President Photo */}
                <div className="lg:col-span-5 relative bg-bbs-raised overflow-hidden min-h-[340px] sm:min-h-[420px]">
                  <img
                    src={president.image}
                    alt={`${president.name} — ${president.role}`}
                    className="w-full h-full object-cover object-[center_25%] filter grayscale-[20%] contrast-105 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Right: Editorial Mandate */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-bbs-border">
                  <div>
                    <div className="flex justify-between items-center flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center font-mono text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/25">
                        {president.department}
                      </span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-bbs-text mb-2">
                      {president.name}
                    </h2>
                    <div className="font-mono text-xs sm:text-sm text-bbs-accent-light uppercase tracking-wider mb-6">
                      {president.role}
                    </div>

                    <blockquote className="border-l-2 border-bbs-accent pl-4 mb-6 italic text-sm sm:text-base text-bbs-text leading-relaxed font-sans">
                      "{president.quote}"
                    </blockquote>

                    <p className="text-sm sm:text-base text-bbs-muted leading-relaxed mb-6">
                      {president.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {president.specialties.map((tag, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-xs px-2.5 py-1 rounded bg-bbs-raised border border-bbs-border text-bbs-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-bbs-border flex items-center justify-end flex-wrap gap-4 font-mono text-xs">
                    <div className="flex items-center gap-3">
                      <a
                        href={president.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs text-bbs-muted hover:text-bbs-text bg-bbs-raised border border-bbs-border hover:border-bbs-border-focus transition-all group/btn"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GITHUB</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                      <a
                        href={president.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs text-bbs-muted hover:text-bbs-text bg-bbs-raised border border-bbs-border hover:border-bbs-border-focus transition-all group/btn"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5" />
                        <span>LINKEDIN</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                      <a
                        href={`mailto:${president.socials.email}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs text-bbs-muted hover:text-bbs-text bg-bbs-raised border border-bbs-border hover:border-bbs-border-focus transition-all group/btn"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>EMAIL</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Section>
      )}

      {/* 3. Specialized Track Leads Grid — Normal Solid Background */}
      <Section variant="solid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTrackLeads.map((member) => (
              <article
                key={member.id}
                className="bg-bbs-surface border border-bbs-border rounded-xl overflow-hidden shadow-lg hover:border-bbs-border-focus transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full relative aspect-[16/10] bg-bbs-raised overflow-hidden border-b border-bbs-border">
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      className="w-full h-full object-cover object-[center_30%] filter grayscale-[25%] contrast-105 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="font-mono text-xs font-semibold text-bbs-accent-light tracking-wider uppercase mb-1">
                      {member.role}
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-bbs-text mb-3">
                      {member.name}
                    </h3>

                    <p className="text-sm text-bbs-muted leading-relaxed mb-5">
                      {member.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {member.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="font-mono text-[11px] px-2 py-0.5 bg-bbs-raised border border-bbs-border rounded text-bbs-dim"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-bbs-raised/40 border-t border-bbs-border flex items-center justify-end">
                  <div className="flex items-center gap-2">
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded hover:bg-bbs-hover text-bbs-muted hover:text-bbs-text transition-colors"
                      title={`${member.name} GitHub`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded hover:bg-bbs-hover text-bbs-muted hover:text-bbs-text transition-colors"
                      title={`${member.name} LinkedIn`}
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="p-1.5 rounded hover:bg-bbs-hover text-bbs-muted hover:text-bbs-text transition-colors"
                      title={`Email ${member.name}`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Leadership Nominations Banner — Checkered / Grid Background */}
      <Section variant="grid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="bg-bbs-surface border border-bbs-border rounded-xl p-6 sm:p-8 flex justify-between items-center flex-wrap gap-6 hover:border-bbs-border-focus transition-colors shadow-md">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-bbs-text">
                WANT TO LEAD A TRACK IN THE NEXT COHORT?
              </h3>
              <p className="text-sm text-bbs-muted mt-1 max-w-2xl leading-relaxed">
                Applications for track co-leads, contest coordinators, and sophomore mentors are evaluated every semester. Built for undergraduate students who love shipping real code.
              </p>
            </div>
            <Link
              to="/join"
              className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold tracking-wide px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all shrink-0 hover:scale-102 shadow-md shadow-bbs-accent/20"
            >
              <span>APPLY FOR LEADERSHIP</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
