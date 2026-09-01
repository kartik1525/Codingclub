import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, Terminal, Code2, Sparkles, BookOpen, Cpu } from 'lucide-react';
import Section from '../components/Section.jsx';
import { 
  AREAS, 
  AREAS_PAGE_HEADER, 
  AREAS_CATALOGUE_HEADER 
} from '../data/areas.js';

export default function ExplorePage() {
  const [searchParams] = useSearchParams();
  const initialArea = searchParams.get('area') || searchParams.get('track') || searchParams.get('dept') || AREAS[0].id;

  const [selectedAreaId, setSelectedAreaId] = useState(initialArea);
  const activeArea = AREAS.find(a => a.id === selectedAreaId) || AREAS[0];

  useEffect(() => {
    const queryArea = searchParams.get('area') || searchParams.get('track') || searchParams.get('dept');
    if (queryArea && AREAS.some(a => a.id === queryArea)) {
      setSelectedAreaId(queryArea);
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col">
      {/* 1. Page Header & Selector — Normal Solid Background */}
      <Section variant="solid" className="pt-14 sm:pt-20 pb-8 sm:pb-12">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex items-center gap-2.5 text-xs font-bold text-bbs-accent tracking-wide uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
            <span>{AREAS_PAGE_HEADER.badge}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-bbs-text leading-tight mb-6 whitespace-pre-line">
            {AREAS_PAGE_HEADER.title}
          </h1>
          <p className="text-lg sm:text-xl text-bbs-muted max-w-3xl leading-relaxed mb-10">
            {AREAS_PAGE_HEADER.description}
          </p>

          {/* Interactive Area Selector Pills */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 border-b border-bbs-border scrollbar-none">
            {AREAS.map((area) => {
              const isSelected = area.id === selectedAreaId;
              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedAreaId(area.id)}
                  className={`px-4 py-2 rounded text-xs whitespace-nowrap transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-bbs-accent text-white border-bbs-accent shadow-md shadow-bbs-accent/20 font-semibold'
                      : 'bg-bbs-surface text-bbs-muted hover:text-bbs-text hover:bg-bbs-raised border-bbs-border font-medium'
                  }`}
                >
                  {area.shortTitle}
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 2. Active Area Spotlight — Checkered / Grid Background */}
      <Section variant="grid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="bg-bbs-surface border border-bbs-border rounded p-6 sm:p-10 lg:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left: Area Details & Exploration */}
              <div className="lg:col-span-8">
                <div className="flex justify-between items-center flex-wrap gap-4 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent border border-blue-500/25 uppercase tracking-wide">
                    ACTIVE AREA
                  </span>
                  <span className="text-xs font-medium text-bbs-dim uppercase tracking-wide">
                    OPEN FOR COMMUNITY COLLABORATION
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-bbs-text mb-4">
                  {activeArea.title}
                </h2>

                <div className="text-sm sm:text-base font-semibold text-bbs-accent mb-6">
                  "{activeArea.tagline}"
                </div>

                <p className="text-base sm:text-lg text-bbs-muted leading-relaxed mb-8">
                  {activeArea.overview}
                </p>

                {/* What We Explore: Topics List */}
                <div className="mb-8">
                  <div className="text-xs font-bold text-bbs-dim mb-3 uppercase tracking-wide">
                    WHAT WE EXPLORE & LEARN
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeArea.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-bbs-muted font-medium">
                        <CheckCircle2 className="w-4 h-4 text-bbs-accent shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & Toolsets */}
                <div className="mb-8">
                  <div className="text-xs font-bold text-bbs-dim mb-3 uppercase tracking-wide">
                    RELEVANT TECHNOLOGIES & TOOLS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeArea.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs font-medium px-3 py-1 bg-bbs-raised border border-bbs-border rounded text-bbs-text">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 border-t border-bbs-border flex items-center gap-4 flex-wrap">
                  <Link
                    to={`/join?area=${activeArea.id}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:scale-105 shadow-md shadow-bbs-accent/25"
                  >
                    <span>JOIN THIS AREA</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded bg-bbs-raised border border-bbs-border text-bbs-text hover:border-bbs-accent transition-colors"
                  >
                    <span>VIEW RELEVANT BUILDS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Activities & Community Cadence Card */}
              <div className="lg:col-span-4 bg-bbs-raised border border-bbs-border rounded p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-bbs-dim uppercase tracking-wide mb-4">
                    TYPICAL ACTIVITIES
                  </div>

                  <div className="space-y-3 mb-6">
                    {activeArea.activities.map((act, idx) => (
                      <div key={idx} className="p-3 bg-bbs-surface border border-bbs-border rounded flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-bbs-accent shrink-0 mt-2" />
                        <div>
                          <span className="font-display text-sm font-bold text-bbs-text block">{act}</span>
                          <span className="text-xs text-bbs-muted">Peer-driven session with working demos and code reviews.</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {activeArea.relatedProjects && activeArea.relatedProjects.length > 0 && (
                    <div className="mb-6 pt-4 border-t border-bbs-border">
                      <div className="text-xs font-bold text-bbs-dim uppercase tracking-wide mb-2">
                        FEATURED BUILD
                      </div>
                      <Link 
                        to={activeArea.relatedProjects[0].url} 
                        className="block p-3 bg-bbs-surface border border-bbs-border rounded hover:border-bbs-accent transition-colors group"
                      >
                        <div className="text-xs font-bold text-bbs-text group-hover:text-bbs-accent transition-colors">
                          {activeArea.relatedProjects[0].title}
                        </div>
                        <div className="text-xs font-medium text-bbs-muted mt-0.5">
                          {activeArea.relatedProjects[0].category} ↗
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                <div className="border-t border-bbs-border pt-4 mt-4">
                  <Link
                    to="/team"
                    className="text-xs font-semibold text-bbs-text hover:text-bbs-accent inline-flex items-center gap-1 transition-colors"
                  >
                    <span>MEET THE CORE TEAM</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Complete Areas Catalogue — Normal Solid Background */}
      <Section variant="solid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="text-xs font-bold text-bbs-accent mb-2 uppercase tracking-wide">
            {AREAS_CATALOGUE_HEADER.badge}
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-bbs-text mb-8">
            {AREAS_CATALOGUE_HEADER.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map((area) => (
              <div
                key={area.id}
                className="bg-bbs-surface border border-bbs-border rounded p-6 sm:p-7 flex flex-col justify-between hover:border-bbs-border-focus transition-colors shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-bbs-accent tracking-wide uppercase">
                      {area.shortTitle.toUpperCase()}
                    </span>
                    <span className="text-xs font-medium text-bbs-dim uppercase">
                      INTEREST AREA
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-bbs-text mb-2">
                    {area.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-bbs-muted leading-relaxed mb-5">
                    {area.tagline}
                  </p>

                  <div className="mb-5">
                    <div className="text-xs font-bold text-bbs-dim uppercase mb-2 tracking-wide">
                      CORE TECHNOLOGIES
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {area.technologies.slice(0, 5).map((t, idx) => (
                        <span key={idx} className="text-xs font-medium px-2 py-0.5 bg-bbs-raised border border-bbs-border rounded text-bbs-dim">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-bbs-border pt-4 flex justify-between items-center">
                  <button
                    onClick={() => {
                      setSelectedAreaId(area.id);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-bbs-muted hover:text-bbs-text transition-colors cursor-pointer"
                  >
                    INSPECT DETAILS ↑
                  </button>
                  <Link
                    to={`/join?area=${area.id}`}
                    className="text-xs font-semibold text-bbs-accent hover:text-bbs-text transition-colors inline-flex items-center gap-1"
                  >
                    <span>JOIN</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
