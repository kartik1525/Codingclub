import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, Terminal, Code2, Users, Layers, Trophy } from 'lucide-react';
import Section from '../components/Section.jsx';
import { 
  DEPARTMENTS, 
  DEPARTMENTS_PAGE_HEADER, 
  DEPARTMENTS_CATALOGUE_HEADER 
} from '../data/departments.js';

export default function DepartmentsPage() {
  const [selectedDeptId, setSelectedDeptId] = useState(DEPARTMENTS[0].id);
  const activeDept = DEPARTMENTS.find(d => d.id === selectedDeptId) || DEPARTMENTS[0];

  return (
    <div className="flex flex-col">
      {/* 1. Page Header & Selector — Normal Solid Background */}
      <Section variant="solid" className="pt-14 sm:pt-20 pb-8 sm:pb-12">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
            <span>{DEPARTMENTS_PAGE_HEADER.badge}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-bbs-text leading-tight mb-6 whitespace-pre-line">
            {DEPARTMENTS_PAGE_HEADER.title}
          </h1>
          <p className="text-lg sm:text-xl text-bbs-muted max-w-3xl leading-relaxed mb-10">
            {DEPARTMENTS_PAGE_HEADER.description}
          </p>

          {/* Interactive Track Selector Pills */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 border-b border-bbs-border scrollbar-none">
            {DEPARTMENTS.map((dept) => {
              const isSelected = dept.id === selectedDeptId;
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDeptId(dept.id)}
                  className={`px-4 py-2 rounded font-mono text-xs whitespace-nowrap transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-bbs-accent text-white border-bbs-accent shadow-md shadow-bbs-accent/20 font-semibold'
                      : 'bg-bbs-surface text-bbs-muted hover:text-bbs-text hover:bg-bbs-raised border-bbs-border'
                  }`}
                >
                  {dept.shortName}
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 2. Active Department Spotlight — Checkered / Grid Background */}
      <Section variant="grid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="bg-bbs-surface border border-bbs-border rounded p-6 sm:p-10 lg:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left: Department Details */}
              <div className="lg:col-span-8">
                <div className="flex justify-between items-center flex-wrap gap-4 mb-4">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/25">
                    ACTIVE TRACK
                  </span>
                  <span className="font-mono text-xs text-bbs-dim">
                    STATUS: {activeDept.currentOpenings}
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-bbs-text mb-4">
                  {activeDept.name}
                </h2>

                <div className="font-mono text-sm text-bbs-accent-light mb-6">
                  "{activeDept.tagline}"
                </div>

                <p className="text-base sm:text-lg text-bbs-muted leading-relaxed mb-8">
                  {activeDept.description}
                </p>

                {/* Purpose & Core Mandate */}
                <div className="mb-8 p-5 bg-bbs-raised border border-bbs-border rounded">
                  <div className="font-mono text-xs text-bbs-accent-light mb-1 uppercase">
                    CORE PURPOSE
                  </div>
                  <div className="text-sm sm:text-base text-bbs-text leading-relaxed">
                    {activeDept.purpose}
                  </div>
                </div>

                {/* Responsibilities List */}
                <div className="mb-8">
                  <div className="font-mono text-xs text-bbs-dim mb-3 uppercase tracking-wider">
                    KEY RESPONSIBILITIES & SPRINT CADENCE
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeDept.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-bbs-muted">
                        <CheckCircle2 className="w-4 h-4 text-bbs-accent shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Tech Badges */}
                <div className="mb-8">
                  <div className="font-mono text-xs text-bbs-dim mb-3 uppercase tracking-wider">
                    TECHNOLOGIES & TOOLSETS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeDept.tools.map((tool, idx) => (
                      <span key={idx} className="font-mono text-xs px-3 py-1 bg-bbs-raised border border-bbs-border rounded text-bbs-text">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 border-t border-bbs-border flex items-center gap-4 flex-wrap">
                  <Link
                    to={`/join?track=${activeDept.id}`}
                    className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:scale-105 shadow-md shadow-bbs-accent/25"
                  >
                    <span>JOIN THIS TRACK</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold px-5 py-2.5 rounded bg-bbs-raised border border-bbs-border text-bbs-text hover:border-bbs-accent transition-colors"
                  >
                    <span>TRACK BUILDS & PROJECTS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Track Lead Bio Card */}
              <div className="lg:col-span-4 bg-bbs-raised border border-bbs-border rounded p-6 sm:p-7">
                <div className="font-mono text-xs text-bbs-dim uppercase tracking-wider mb-4">
                  TRACK LEADERSHIP
                </div>
                <div className="w-full aspect-[4/3] rounded overflow-hidden mb-4 bg-black border border-bbs-border">
                  <img
                    src={activeDept.leadImage}
                    alt={activeDept.leadName}
                    className="w-full h-full object-cover object-[center_30%]"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-bbs-text mb-1">
                  {activeDept.leadName}
                </h3>
                <div className="font-mono text-xs text-bbs-accent-light mb-1">
                  {activeDept.leadRole}
                </div>
                <div className="font-mono text-xs text-bbs-dim mb-4">
                  {activeDept.leadYear}
                </div>
                <div className="border-t border-bbs-border pt-4">
                  <Link
                    to="/team"
                    className="font-mono text-xs text-bbs-text hover:text-bbs-accent-light inline-flex items-center gap-1 transition-colors"
                  >
                    <span>VIEW FULL TEAM DIRECTORY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Complete Track Directory — Normal Solid Background */}
      <Section variant="solid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="font-mono text-xs text-bbs-accent-light mb-2 uppercase">
            {DEPARTMENTS_CATALOGUE_HEADER.badge}
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-bbs-text mb-8">
            {DEPARTMENTS_CATALOGUE_HEADER.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept.id}
                className="bg-bbs-surface border border-bbs-border rounded p-6 sm:p-7 flex flex-col justify-between hover:border-bbs-border-focus transition-colors shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-xs text-bbs-accent-light tracking-wider font-semibold">
                      {dept.code}
                    </span>
                    <span className="font-mono text-[10px] text-bbs-dim">
                      LEAD: {dept.leadName}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-bbs-text mb-2">
                    {dept.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-bbs-muted leading-relaxed mb-5">
                    {dept.tagline}
                  </p>

                  <div className="mb-5">
                    <div className="font-mono text-[10px] text-bbs-dim uppercase mb-2">
                      CORE COMPETENCIES
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {dept.skills.map((s, idx) => (
                        <span key={idx} className="font-mono text-[10px] px-2 py-0.5 bg-bbs-raised border border-bbs-border rounded text-bbs-dim">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-bbs-border pt-4 flex justify-between items-center">
                  <button
                    onClick={() => {
                      setSelectedDeptId(dept.id);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="font-mono text-xs text-bbs-muted hover:text-bbs-text transition-colors cursor-pointer"
                  >
                    INSPECT DETAILS ↑
                  </button>
                  <Link
                    to={`/join?track=${dept.id}`}
                    className="font-mono text-xs font-semibold text-bbs-accent-light hover:text-bbs-text transition-colors inline-flex items-center gap-1"
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
