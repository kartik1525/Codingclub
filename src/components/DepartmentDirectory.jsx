import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { DEPARTMENTS } from '../data/departments.js';

/**
 * DepartmentDirectory - Interactive Department Explorer
 * 
 * Left Side: Full-width directory rows with technical identifiers and metadata
 * Right Side: Dynamic editorial detail panel with lead profile and direct CTAs
 * Mobile: Responsive inline-expanding accordion with touch targets & CSS grid height animation
 */
export default function DepartmentDirectory() {
  const [activeId, setActiveId] = useState(DEPARTMENTS[0].id);
  const hoverTimeoutRef = useRef(null);

  // Subtle 60ms hover intent to prevent rapid thrashing on skimming
  const handleMouseEnter = (id) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveId(id);
    }, 60);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const handleDirectSelect = (id) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveId(id);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const activeDept = DEPARTMENTS.find((d) => d.id === activeId) || DEPARTMENTS[0];
  const activeIndex = DEPARTMENTS.findIndex((d) => d.id === activeId);

  return (
    <div className="w-full">
      {/* ─────────────────────────────────────────────────────────────
          DESKTOP & TABLET TWO-COLUMN EXPLORER (lg:grid)
          ───────────────────────────────────────────────────────────── */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-12 items-start">
        {/* LEFT COLUMN: Department Directory List (~58% width) */}
        <div className="lg:col-span-7 flex flex-col border-b border-bbs-border">
          {DEPARTMENTS.map((dept, index) => {
            const isActive = dept.id === activeId;
            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <button
                key={dept.id}
                type="button"
                onMouseEnter={() => handleMouseEnter(dept.id)}
                onMouseLeave={handleMouseLeave}
                onFocus={() => handleDirectSelect(dept.id)}
                onClick={() => handleDirectSelect(dept.id)}
                className={`group w-full text-left py-6 xl:py-7 px-5 sm:px-6 border-t border-bbs-border transition-all duration-300 cursor-pointer relative ${
                  isActive
                    ? 'bg-bbs-surface/80 border-l-4 border-l-bbs-accent pl-6 sm:pl-7'
                    : 'hover:bg-bbs-surface/40 border-l-4 border-l-transparent'
                }`}
                aria-selected={isActive}
                role="tab"
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Department Number & Names */}
                  <div className="flex items-baseline gap-4 sm:gap-6 flex-1">
                    {/* Index Number */}
                    <span
                      className={`font-mono text-sm sm:text-base font-bold shrink-0 transition-colors duration-200 ${
                        isActive ? 'text-bbs-accent' : 'text-bbs-dim group-hover:text-bbs-accent-light'
                      }`}
                    >
                      {formattedIndex}
                    </span>

                    <div className="flex-1">
                      {/* Department Title */}
                      <h3
                        className={`font-display text-xl sm:text-2xl xl:text-[1.65rem] font-bold tracking-tight leading-snug transition-all duration-200 ${
                          isActive
                            ? 'text-bbs-text group-hover:text-bbs-accent-light translate-x-1'
                            : 'text-bbs-text/80 group-hover:text-bbs-text group-hover:translate-x-1'
                        }`}
                      >
                        {dept.name}
                      </h3>

                      {/* Monospace Skills / Focus Metadata */}
                      <div className="font-mono text-xs text-bbs-muted group-hover:text-bbs-text/90 mt-2 transition-colors duration-200 flex flex-wrap items-center gap-x-2 gap-y-1">
                        {dept.skills.slice(0, 4).map((skill, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span>{skill}</span>
                            {sIdx < Math.min(dept.skills.length - 1, 3) && (
                              <span className="text-bbs-border-focus select-none">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Indicator Arrow */}
                  <div className="shrink-0 mt-1">
                    {isActive ? (
                      <span className="w-8 h-8 rounded-full bg-bbs-accent-dim text-bbs-accent flex items-center justify-center transition-all duration-200">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="w-8 h-8 rounded-full text-bbs-dim group-hover:text-bbs-text group-hover:translate-x-1 flex items-center justify-center transition-all duration-200">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Large Dynamic Detail Panel (~42% width) */}
        {/* Stable container: no key re-teardown to prevent image re-flash */}
        <div className="lg:col-span-5 sticky top-28">
          <div
            className="bg-bbs-surface border border-bbs-border rounded-xl p-7 sm:p-9 shadow-2xl flex flex-col justify-between min-h-[520px] relative overflow-hidden transition-colors duration-300"
          >
            {/* Upper Content */}
            <div className="relative z-10">
              {/* Department Name */}
              <h3 className="font-display text-2xl xl:text-3xl font-extrabold text-bbs-text tracking-tight uppercase leading-tight mb-3 transition-colors">
                {activeDept.name}
              </h3>

              {/* Tagline Narrative */}
              <p className="text-sm sm:text-base text-bbs-muted leading-relaxed mb-6 font-sans">
                {activeDept.tagline}
              </p>

              {/* Core Technologies & Tool Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {activeDept.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-2.5 py-1 bg-bbs-raised border border-bbs-border rounded text-bbs-text transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Purpose Excerpt */}
              <div className="p-4 bg-bbs-raised/60 border border-bbs-border rounded mb-6 text-xs sm:text-sm text-bbs-muted leading-relaxed font-sans">
                {activeDept.purpose}
              </div>
            </div>

            {/* Lower Content: Lead Profile & Direct Actions */}
            <div className="relative z-10 pt-5 border-t border-bbs-border">
              {/* Department Lead Mini Profile */}
              <div className="flex items-center gap-3.5 mb-6">
                <img
                  src={activeDept.leadImage}
                  alt={activeDept.leadName}
                  className="w-11 h-11 rounded-full object-cover object-[center_25%] border border-bbs-border-focus bg-bbs-raised shrink-0 transition-opacity duration-300"
                />
                <div>
                  <div className="font-display text-sm font-bold text-bbs-text">
                    {activeDept.leadName}
                  </div>
                  <div className="font-mono text-xs text-bbs-accent-light">
                    Track Lead · {activeDept.leadYear}
                  </div>
                </div>
              </div>

              {/* Action Links with Context-Preserving Deep-Link */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/departments?track=${activeDept.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold px-4 py-3 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:scale-[1.02] shadow-md shadow-bbs-accent/20"
                >
                  <span>EXPLORE DEPARTMENT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to={`/join?track=${activeDept.id}`}
                  className="inline-flex items-center justify-center gap-1.5 font-mono text-xs font-semibold px-4 py-3 rounded bg-bbs-raised border border-bbs-border text-bbs-text hover:border-bbs-accent transition-colors"
                >
                  <span>JOIN TRACK</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MOBILE TOUCH-EXPANDING DIRECTORY (< lg:block)
          ───────────────────────────────────────────────────────────── */}
      <div className="lg:hidden flex flex-col border-b border-bbs-border">
        {DEPARTMENTS.map((dept, index) => {
          const isActive = dept.id === activeId;
          const formattedIndex = String(index + 1).padStart(2, '0');

          return (
            <div key={dept.id} className="border-t border-bbs-border transition-colors">
              {/* Expandable Header Row */}
              <button
                type="button"
                onClick={() => setActiveId(isActive ? '' : dept.id)}
                className={`w-full text-left py-5 px-4 sm:px-5 flex items-center justify-between gap-4 transition-colors cursor-pointer ${
                  isActive ? 'bg-bbs-surface/80' : 'hover:bg-bbs-surface/30'
                }`}
                aria-expanded={isActive}
              >
                <div className="flex items-baseline gap-3.5 flex-1 min-w-0">
                  <span
                    className={`font-mono text-sm font-bold shrink-0 ${
                      isActive ? 'text-bbs-accent' : 'text-bbs-dim'
                    }`}
                  >
                    {formattedIndex}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3
                      className={`font-display text-lg sm:text-xl font-bold tracking-tight truncate ${
                        isActive ? 'text-bbs-accent-light' : 'text-bbs-text'
                      }`}
                    >
                      {dept.name}
                    </h3>
                    <p className="font-mono text-xs text-bbs-muted truncate mt-0.5">
                      {dept.skills.slice(0, 3).join(' · ')}
                    </p>
                  </div>
                </div>

                {/* Toggle Chevron */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isActive
                      ? 'bg-bbs-accent text-white rotate-180'
                      : 'bg-bbs-raised text-bbs-dim'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Collapsible Mobile Detail Drawer with CSS Grid dynamic height */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-6 px-4 sm:px-5">
                    <div className="p-5 bg-bbs-surface border border-bbs-border rounded shadow-md mt-1">
                      <p className="text-xs sm:text-sm text-bbs-muted leading-relaxed mb-4">
                        {dept.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {dept.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="font-mono text-[10px] px-2 py-0.5 bg-bbs-raised border border-bbs-border rounded text-bbs-text"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-3 border-t border-bbs-border mb-4">
                        <img
                          src={dept.leadImage}
                          alt={dept.leadName}
                          className="w-9 h-9 rounded-full object-cover object-[center_25%] border border-bbs-border"
                        />
                        <div>
                          <div className="font-display text-xs font-bold text-bbs-text">
                            {dept.leadName}
                          </div>
                          <div className="font-mono text-[10px] text-bbs-dim">
                            Track Lead
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Link
                          to={`/departments?track=${dept.id}`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 font-mono text-xs font-semibold px-3 py-2.5 rounded bg-bbs-accent text-white"
                        >
                          <span>EXPLORE</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          to={`/join?track=${dept.id}`}
                          className="inline-flex items-center justify-center gap-1 font-mono text-xs font-semibold px-3 py-2.5 rounded bg-bbs-raised border border-bbs-border text-bbs-text"
                        >
                          <span>JOIN</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
