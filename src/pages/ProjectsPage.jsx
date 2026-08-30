import React, { useState } from 'react';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import Section from '../components/Section.jsx';
import { CLUB_INFO } from '../data/clubInfo.js';
import { 
  PROJECTS, 
  PROJECTS_PAGE_HEADER, 
  PROJECT_CATEGORIES, 
  PROJECTS_SUBMISSION_CALLOUT 
} from '../data/projects.js';

function GithubIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = PROJECT_CATEGORIES;

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => {
        if (selectedCategory === 'web') return p.category.toLowerCase().includes('web');
        if (selectedCategory === 'hackathon') return p.category.toLowerCase().includes('prototype') || p.category.toLowerCase().includes('hackathon');
        if (selectedCategory === 'community') return p.isPlaceholder || p.category.toLowerCase().includes('community');
        return true;
      });

  return (
    <div className="flex flex-col">
      {/* 1. Page Header & Filter Tabs — Normal Solid Background */}
      <Section variant="solid" className="pt-14 sm:pt-20 pb-8 sm:pb-12">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
            <span>{PROJECTS_PAGE_HEADER.badge}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-bbs-text leading-tight mb-6 whitespace-pre-line">
            {PROJECTS_PAGE_HEADER.title}
          </h1>
          <p className="text-lg sm:text-xl text-bbs-muted max-w-3xl leading-relaxed mb-10">
            {PROJECTS_PAGE_HEADER.description}
          </p>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 border-b border-bbs-border scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded font-mono text-xs whitespace-nowrap transition-all cursor-pointer border ${
                  selectedCategory === cat.id
                    ? 'bg-bbs-accent text-white border-bbs-accent shadow-md shadow-bbs-accent/20 font-semibold'
                    : 'bg-bbs-surface text-bbs-muted hover:text-bbs-text hover:bg-bbs-raised border-bbs-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* 2. Complete Project Showcase Grid — Checkered / Grid Background */}
      <Section variant="grid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex flex-col gap-12 sm:gap-16">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-bbs-surface border border-bbs-border rounded overflow-hidden shadow-lg hover:border-bbs-border-focus transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Left: Image Showcase */}
                  <div className="lg:col-span-6 bg-black relative overflow-hidden min-h-[280px] sm:min-h-[360px] border-b lg:border-b-0 lg:border-r border-bbs-border group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-bbs-bg/90 border border-bbs-border px-3 py-1 rounded font-mono text-xs text-bbs-accent-light">
                      {project.category.toUpperCase()}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-bbs-bg/90 border border-bbs-border px-2.5 py-1 rounded font-mono text-[11px] text-bbs-dim">
                      YEAR {project.year}
                    </div>
                  </div>

                  {/* Right: Technical Details & Specifications */}
                  <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-mono text-xs text-bbs-accent-light tracking-wider uppercase font-semibold">
                          STATUS: {project.status}
                        </span>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-bbs-text mb-3">
                        {project.title}
                      </h2>

                      <div className="font-mono text-xs text-bbs-dim mb-4">
                        {project.tagline}
                      </div>

                      <p className="text-sm sm:text-base text-bbs-muted leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {project.context && (
                        <div className="p-4 bg-bbs-raised border border-bbs-border rounded mb-6 text-xs sm:text-sm text-bbs-text leading-relaxed font-sans">
                          <span className="font-mono text-[10px] text-bbs-dim block mb-1 uppercase tracking-wider">
                            ARCHITECTURAL CONTEXT
                          </span>
                          {project.context}
                        </div>
                      )}

                      <div className="mb-6">
                        <div className="font-mono text-[10px] text-bbs-dim uppercase tracking-wider mb-2">
                          STACK & ARCHITECTURE
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.techTags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="font-mono text-xs px-2.5 py-1 rounded bg-bbs-raised border border-bbs-border text-bbs-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions & Repos */}
                    <div className="pt-6 border-t border-bbs-border flex items-center justify-between flex-wrap gap-4 font-mono text-xs">
                      <span className="text-bbs-dim">
                        CONTRIBUTORS: {project.contributors.join(', ')}
                      </span>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-bbs-raised border border-bbs-border text-bbs-text hover:border-bbs-accent transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>SOURCE CODE</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. Member Submission Callout — Normal Solid Background */}
      <Section variant="solid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="bg-bbs-surface border border-bbs-border rounded p-8 sm:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-md">
            <div>
              <div className="font-mono text-xs text-bbs-accent-light mb-1 uppercase">
                {PROJECTS_SUBMISSION_CALLOUT.badge}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-bbs-text">
                {PROJECTS_SUBMISSION_CALLOUT.title}
              </h3>
              <p className="text-sm text-bbs-muted mt-1 max-w-2xl leading-relaxed">
                {PROJECTS_SUBMISSION_CALLOUT.description}
              </p>
            </div>
            <a
              href={CLUB_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-colors shrink-0"
            >
              <span>{PROJECTS_SUBMISSION_CALLOUT.cta.label}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
