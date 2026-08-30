import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const ROSTER_DATA = [
  // Page 1
  [
    {
      number: "01",
      name: "Aarav Sharma",
      branch: "B.TECH CSE '26",
      role: "CLUB PRESIDENT & COMMUNITY LEAD",
      mandate: "SYS // PRESIDENTIAL MANDATE",
      image: "/assets/team/aarav.jpg",
      github: "https://github.com/aarav-sharma-bbs",
      linkedin: "https://linkedin.com/in/aarav-sharma-bbs",
      email: "aarav@bbscodingclub.org",
    },
    {
      number: "02",
      name: "Priya Patel",
      branch: "B.TECH IT '26",
      role: "VICE PRESIDENT & OPERATIONS LEAD",
      mandate: "OPS // EXECUTION MANDATE",
      image: "/assets/team/priya.jpg",
      github: "https://github.com/priya-patel-bbs",
      linkedin: "https://linkedin.com/in/priya-patel-bbs",
      email: "priya@bbscodingclub.org",
    },
    {
      number: "03",
      name: "Rohan Verma",
      branch: "B.TECH AI '26",
      role: "TECH LEAD & ARCHITECTURE LEAD",
      mandate: "TECH // ARCHITECTURAL MANDATE",
      image: "/assets/team/rohan.jpg",
      github: "https://github.com/rohan-verma-bbs",
      linkedin: "https://linkedin.com/in/rohan-verma-bbs",
      email: "rohan@bbscodingclub.org",
    },
    {
      number: "04",
      name: "Ananya Singh",
      branch: "B.TECH EC '26",
      role: "OUTREACH LEAD & DESIGN LEAD",
      mandate: "COMM // OUTREACH MANDATE",
      image: "/assets/team/ananya.jpg",
      github: "https://github.com/ananya-singh-bbs",
      linkedin: "https://linkedin.com/in/ananya-singh-bbs",
      email: "ananya@bbscodingclub.org",
    },
  ],
  // Page 2
  [
    {
      number: "05",
      name: "Vikram Joshi",
      branch: "B.TECH ECE '26",
      role: "PRODUCT LEAD & INNOVATION LEAD",
      mandate: "PROD // INNOVATION MANDATE",
      image: "/assets/team/vikram.jpg",
      github: "https://github.com/vikram-joshi-bbs",
      linkedin: "https://linkedin.com/in/vikram-joshi-bbs",
      email: "vikram@bbscodingclub.org",
    },
    {
      number: "06",
      name: "Systems Co-Lead",
      branch: "B.TECH CSE '27",
      role: "JUNIOR PLATFORM ARCHITECT",
      mandate: "SYS // REVIEW MANDATE",
      image: "/assets/team/priya.jpg",
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "systems@bbscodingclub.org",
    },
    {
      number: "07",
      name: "Contest Setter",
      branch: "B.TECH IT '27",
      role: "SPEED-CODING PROBLEM SETTER",
      mandate: "ALGO // CONTEST MANDATE",
      image: "/assets/team/rohan.jpg",
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "algo@bbscodingclub.org",
    },
    {
      number: "08",
      name: "Open Roster Seat",
      branch: "ALL BRANCHES",
      role: "APPLY FOR TRACK LEADERSHIP",
      mandate: "LEAD // NOMINATIONS OPEN",
      image: "/assets/team/aarav.jpg",
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org",
    },
  ],
];

export default function CoreLeadershipRoster() {
  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = ROSTER_DATA.length;
  const currentMembers = ROSTER_DATA[pageIndex];

  return (
    <div className="w-full">
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-bbs-accent tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-bbs-accent inline-block" />
            <span>06 / CORE LEADERSHIP</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight m-0">
            STUDENT-LED & OPERATED.
          </h2>
          <p className="text-sm sm:text-base text-bbs-muted leading-relaxed max-w-xl mt-3">
            Run by students, for students. We believe in ownership, transparency, and building things that matter.
          </p>
        </div>

        {/* Right Actions: Full Roster Link + Pagination Controls */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 shrink-0">
          <Link
            to="/team"
            className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-bbs-accent hover:text-bbs-text transition-colors group"
          >
            <span>MEET THE FULL ROSTER</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          {/* Pagination Carousel Buttons */}
          <div className="flex items-center gap-3 mt-1 lg:mt-3">
            <button
              type="button"
              onClick={() => setPageIndex((prev) => Math.max(0, prev - 1))}
              disabled={pageIndex === 0}
              className="w-8 h-8 rounded-full border border-bbs-border bg-bbs-surface flex items-center justify-center text-bbs-text hover:border-bbs-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm"
              aria-label="Previous Team Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="font-mono text-xs tracking-wider select-none">
              <span className="text-bbs-accent font-bold">
                {String(pageIndex + 1).padStart(2, '0')}
              </span>{' '}
              <span className="text-bbs-dim">/ {String(totalPages).padStart(2, '0')}</span>
            </div>

            <button
              type="button"
              onClick={() => setPageIndex((prev) => Math.min(totalPages - 1, prev + 1))}
              disabled={pageIndex === totalPages - 1}
              className="w-8 h-8 rounded-full border border-bbs-border bg-bbs-surface flex items-center justify-center text-bbs-text hover:border-bbs-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm"
              aria-label="Next Team Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {currentMembers.map((member) => (
          <div
            key={member.number}
            className="bg-bbs-surface border border-bbs-border rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:border-bbs-accent/80 hover:shadow-md transition-all duration-300 group"
          >
            {/* Top Row: Index + Branch Badge */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-bbs-accent">
                  <span className="w-1.5 h-1.5 rounded-full bg-bbs-accent inline-block" />
                  {member.number}
                </span>
                <span className="font-mono text-[10px] font-semibold px-2.5 py-0.5 rounded bg-blue-500/10 text-bbs-accent border border-blue-500/20 uppercase tracking-wider">
                  {member.branch}
                </span>
              </div>

              {/* Member Name */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-bbs-text tracking-tight mb-1 group-hover:text-bbs-accent-light transition-colors">
                {member.name}
              </h3>

              {/* Role */}
              <div className="font-mono text-xs font-semibold text-bbs-accent tracking-wider uppercase mb-1">
                {member.role}
              </div>

              {/* Mandate Metadata */}
              <div className="font-mono text-[11px] text-bbs-dim tracking-wider uppercase mb-4">
                {member.mandate}
              </div>

              {/* Member Photo */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-bbs-raised border border-bbs-border/70 mb-5 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bottom 4-Column Segmented Action Row */}
            <div className="border-t border-bbs-border pt-3 mt-auto">
              <div className="grid grid-cols-4 divide-x divide-bbs-border text-center">
                {/* GitHub */}
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-bbs-muted hover:text-bbs-text transition-colors py-1 cursor-pointer"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href={member.linkedin}
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
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center text-bbs-muted hover:text-bbs-text transition-colors py-1 cursor-pointer"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* Explore Profile / Directory */}
                <Link
                  to="/team"
                  className="flex items-center justify-center text-bbs-muted hover:text-bbs-accent transition-colors py-1 cursor-pointer"
                  title="View in Team Directory"
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
