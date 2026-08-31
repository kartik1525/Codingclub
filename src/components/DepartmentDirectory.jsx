import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { AREAS } from '../data/areas.js';

/**
 * AreasDirectory - Interactive Areas We Explore
 * 
 * Left Side: Full-width directory rows for the 5 interest areas
 * Right Side: Dynamic editorial detail panel with overview, topics, typical activities & technologies
 * Mobile: Responsive inline-expanding accordion with touch targets & CSS grid height animation
 */
export default function AreasDirectory() {
  const [activeId, setActiveId] = useState(AREAS[0].id);
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

  const activeArea = AREAS.find((a) => a.id === activeId) || AREAS[0];

  return (
    <div className="w-full">
      {/* ─────────────────────────────────────────────────────────────
          DESKTOP & TABLET TWO-COLUMN EXPLORER (lg:grid)
          ───────────────────────────────────────────────────────────── */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-12 items-start">
        {/* LEFT COLUMN: Areas Directory List (~58% width) */}
        <div className="lg:col-span-7 flex flex-col border-b border-bbs-border">
          {AREAS.map((area) => {
            const isActive = area.id === activeId;

            return (
              <button
                key={area.id}
                type="button"
                onMouseEnter={() => handleMouseEnter(area.id)}
                onMouseLeave={handleMouseLeave}
                onFocus={() => handleDirectSelect(area.id)}
                onClick={() => handleDirectSelect(area.id)}
                className={`group w-full text-left py-6 xl:py-7 px-5 sm:px-6 border-t border-bbs-border transition-all duration-300 cursor-pointer relative ${
                  isActive
                    ? 'bg-bbs-surface/80 border-l-4 border-l-bbs-accent pl-6 sm:pl-7'
                    : 'hover:bg-bbs-surface/40 border-l-4 border-l-transparent'
                }`}
                aria-selected={isActive}
                role="tab"
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Area Title & Technologies */}
                  <div className="flex-1">
                    <h3
                      className={`font-display text-xl sm:text-2xl xl:text-[1.65rem] font-bold tracking-tight leading-snug transition-all duration-200 ${
                        isActive
                          ? 'text-bbs-text group-hover:text-bbs-accent-light translate-x-1'
                          : 'text-bbs-text/80 group-hover:text-bbs-text group-hover:translate-x-1'
                      }`}
                    >
                      {area.title}
                    </h3>

                    {/* Monospace Tech / Focus Metadata */}
                    <div className="font-mono text-xs text-bbs-muted group-hover:text-bbs-text/90 mt-2 transition-colors duration-200 flex flex-wrap items-center gap-x-2 gap-y-1">
                      {area.technologies.slice(0, 4).map((tech, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span>{tech}</span>
                          {sIdx < Math.min(area.technologies.length - 1, 3) && (
                            <span className="text-bbs-border-focus select-none">·</span>
                          )}
                        </React.Fragment>
                      ))}
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

        {/* RIGHT COLUMN: Stable Dynamic Detail Panel (~42% width) */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="bg-bbs-surface border border-bbs-border rounded p-7 sm:p-9 shadow-2xl flex flex-col justify-between min-h-[560px] relative overflow-hidden transition-colors duration-300">
            {/* Upper Content */}
            <div className="relative z-10">
              {/* Meta Header */}
              <div className="flex justify-between items-center flex-wrap gap-2 mb-4">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/25 transition-colors">
                  {activeArea.shortTitle.toUpperCase()}
                </span>
                <span className="font-mono text-[10px] text-bbs-dim uppercase tracking-wider">
                  INTEREST AREA
                </span>
              </div>

              {/* Area Title */}
              <h3 className="font-display text-2xl xl:text-3xl font-extrabold text-bbs-text tracking-tight uppercase leading-tight mb-3 transition-colors">
                {activeArea.title}
              </h3>

              {/* Tagline Narrative */}
              <p className="text-sm sm:text-base text-bbs-muted leading-relaxed mb-6 font-sans min-h-[44px]">
                {activeArea.tagline}
              </p>

              {/* What We Explore (Topics) */}
              <div className="mb-6">
                <div className="font-mono text-[10px] text-bbs-dim uppercase tracking-wider mb-2.5">
                  WHAT WE EXPLORE
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {activeArea.topics.slice(0, 3).map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-bbs-text/90 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-bbs-accent shrink-0" />
                      <span className="truncate">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="mb-6">
                <div className="font-mono text-[10px] text-bbs-dim uppercase tracking-wider mb-2.5">
                  RELEVANT TECHNOLOGIES
                </div>
                <div className="flex flex-wrap gap-1.5 min-h-[32px]">
                  {activeArea.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-2.5 py-1 bg-bbs-raised border border-bbs-border rounded text-bbs-text/90 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Typical Activities */}
              <div className="p-3.5 bg-bbs-raised/60 border border-bbs-border rounded mb-6 text-xs text-bbs-muted leading-relaxed font-sans">
                <span className="font-mono text-[10px] text-bbs-accent-light uppercase block mb-1">
                  TYPICAL ACTIVITIES:
                </span>
                <span className="text-bbs-text font-medium">
                  {activeArea.activities.join(' · ')}
                </span>
              </div>
            </div>

            {/* Lower Content: Direct Actions */}
            <div className="relative z-10 pt-5 border-t border-bbs-border">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/explore?area=${activeArea.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold px-4 py-3 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:scale-[1.02] shadow-md shadow-bbs-accent/20"
                >
                  <span>EXPLORE AREA</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to={`/join?area=${activeArea.id}`}
                  className="inline-flex items-center justify-center gap-1.5 font-mono text-xs font-semibold px-4 py-3 rounded bg-bbs-raised border border-bbs-border text-bbs-text hover:border-bbs-accent transition-colors"
                >
                  <span>JOIN COMMUNITY</span>
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
        {AREAS.map((area) => {
          const isActive = area.id === activeId;

          return (
            <div key={area.id} className="border-t border-bbs-border transition-colors">
              {/* Expandable Header Row */}
              <button
                type="button"
                onClick={() => setActiveId(isActive ? '' : area.id)}
                className={`w-full text-left py-5 px-4 sm:px-5 flex items-center justify-between gap-4 transition-colors cursor-pointer ${
                  isActive ? 'bg-bbs-surface/80' : 'hover:bg-bbs-surface/30'
                }`}
                aria-expanded={isActive}
              >
                <div className="min-w-0 flex-1">
                  <h3
                    className={`font-display text-lg sm:text-xl font-bold tracking-tight truncate ${
                      isActive ? 'text-bbs-accent-light' : 'text-bbs-text'
                    }`}
                  >
                    {area.title}
                  </h3>
                  <p className="font-mono text-xs text-bbs-muted truncate mt-0.5">
                    {area.technologies.slice(0, 3).join(' · ')}
                  </p>
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
                      <div className="font-mono text-xs text-bbs-accent-light mb-2">
                        AREA OVERVIEW
                      </div>

                      <p className="text-xs sm:text-sm text-bbs-muted leading-relaxed mb-4">
                        {area.overview}
                      </p>

                      <div className="mb-4">
                        <div className="font-mono text-[10px] text-bbs-dim uppercase mb-1.5">
                          WHAT WE EXPLORE
                        </div>
                        <div className="space-y-1 mb-3">
                          {area.topics.slice(0, 3).map((topic, tIdx) => (
                            <div key={tIdx} className="flex items-center gap-1.5 text-xs text-bbs-text/90">
                              <CheckCircle2 className="w-3 h-3 text-bbs-accent shrink-0" />
                              <span className="truncate">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="font-mono text-[10px] text-bbs-dim uppercase mb-1.5">
                          TECHNOLOGIES
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {area.technologies.map((tech, sIdx) => (
                            <span
                              key={sIdx}
                              className="font-mono text-[10px] px-2 py-0.5 bg-bbs-raised border border-bbs-border rounded text-bbs-text"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 bg-bbs-raised border border-bbs-border rounded text-xs text-bbs-muted mb-4">
                        <span className="font-mono text-[10px] text-bbs-accent-light uppercase block mb-0.5">
                          ACTIVITIES:
                        </span>
                        {area.activities.join(' · ')}
                      </div>

                      <div className="flex gap-2">
                        <Link
                          to={`/explore?area=${area.id}`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 font-mono text-xs font-semibold px-3 py-2.5 rounded bg-bbs-accent text-white"
                        >
                          <span>EXPLORE</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          to={`/join?area=${area.id}`}
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

// Backwards compatibility export
export { AreasDirectory as DepartmentDirectory };
