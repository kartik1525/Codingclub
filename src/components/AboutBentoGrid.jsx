import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   TECHNICAL MICRO-VISUALS (Inline SVG / CSS)
   ───────────────────────────────────────────────────────────── */

/**
 * LearnVisual - AST / Code Teardown Matrix
 */
function LearnVisual() {
  return (
    <div className="w-full max-w-[280px] h-20 relative overflow-hidden select-none" aria-hidden="true">
      <svg viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Technical Grid Dots */}
        <pattern id="learn-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" className="fill-bbs-border group-hover:fill-white/30 transition-colors duration-300" />
        </pattern>
        <rect width="280" height="80" fill="url(#learn-grid)" opacity="0.6" />

        {/* Tree Connection Paths */}
        <path d="M 40 40 L 90 20 L 160 20" className="stroke-bbs-border-focus group-hover:stroke-white/60 transition-colors duration-300" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M 40 40 L 90 60 L 160 60" className="stroke-bbs-border-focus group-hover:stroke-white/60 transition-colors duration-300" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M 160 20 L 220 35" className="stroke-bbs-accent group-hover:stroke-white transition-colors duration-300" strokeWidth="1.5" />
        <path d="M 160 60 L 220 45" className="stroke-bbs-accent group-hover:stroke-white transition-colors duration-300" strokeWidth="1.5" />

        {/* Nodes */}
        <g transform="translate(20, 28)">
          <rect width="40" height="24" rx="2" className="fill-bbs-surface group-hover:fill-white/20 stroke-bbs-border group-hover:stroke-white/80 transition-colors duration-300" strokeWidth="1" />
          <text x="20" y="16" textAnchor="middle" className="font-mono text-[9px] fill-bbs-accent-light group-hover:fill-white font-bold transition-colors duration-300">AST</text>
        </g>
        <g transform="translate(100, 8)">
          <rect width="55" height="22" rx="2" className="fill-bbs-surface group-hover:fill-white/20 stroke-bbs-border group-hover:stroke-white/80 transition-colors duration-300" strokeWidth="1" />
          <text x="27" y="15" textAnchor="middle" className="font-mono text-[9px] fill-bbs-dim group-hover:fill-white/90 transition-colors duration-300">SYNTAX</text>
        </g>
        <g transform="translate(100, 48)">
          <rect width="55" height="22" rx="2" className="fill-bbs-surface group-hover:fill-white/20 stroke-bbs-border group-hover:stroke-white/80 transition-colors duration-300" strokeWidth="1" />
          <text x="27" y="15" textAnchor="middle" className="font-mono text-[9px] fill-bbs-dim group-hover:fill-white/90 transition-colors duration-300">RUNTIME</text>
        </g>
        <g transform="translate(210, 26)">
          <rect width="60" height="26" rx="2" className="fill-bbs-accent group-hover:fill-white stroke-bbs-accent group-hover:stroke-white transition-colors duration-300" strokeWidth="1" />
          <text x="30" y="17" textAnchor="middle" className="font-mono text-[9px] fill-white group-hover:fill-bbs-accent font-bold transition-colors duration-300">PASS ✓</text>
        </g>
      </svg>
    </div>
  );
}

/**
 * BuildVisual - Architecture Pipeline: UI → API → DB
 */
function BuildVisual() {
  return (
    <div className="w-full max-w-[240px] h-14 relative overflow-hidden select-none" aria-hidden="true">
      <svg viewBox="0 0 240 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Pipeline connecting lines */}
        <line x1="60" y1="25" x2="90" y2="25" className="stroke-bbs-accent group-hover:stroke-white transition-colors duration-300" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="150" y1="25" x2="180" y2="25" className="stroke-bbs-accent group-hover:stroke-white transition-colors duration-300" strokeWidth="1.5" strokeDasharray="2 2" />

        {/* UI Block */}
        <rect x="5" y="10" width="55" height="30" rx="2" className="fill-bbs-surface group-hover:fill-white/20 stroke-bbs-border group-hover:stroke-white/80 transition-colors duration-300" strokeWidth="1" />
        <text x="32" y="29" textAnchor="middle" className="font-mono text-[10px] font-bold fill-bbs-text group-hover:fill-white transition-colors duration-300">UI</text>

        {/* API Block */}
        <rect x="95" y="10" width="55" height="30" rx="2" className="fill-bbs-surface group-hover:fill-white/20 stroke-bbs-border group-hover:stroke-white/80 transition-colors duration-300" strokeWidth="1" />
        <text x="122" y="29" textAnchor="middle" className="font-mono text-[10px] font-bold fill-bbs-accent-light group-hover:fill-white transition-colors duration-300">API</text>

        {/* DB Block */}
        <rect x="185" y="10" width="50" height="30" rx="2" className="fill-bbs-surface group-hover:fill-white/20 stroke-bbs-border group-hover:stroke-white/80 transition-colors duration-300" strokeWidth="1" />
        <text x="210" y="29" textAnchor="middle" className="font-mono text-[10px] font-bold fill-bbs-dim group-hover:fill-white/90 transition-colors duration-300">DB</text>
      </svg>
    </div>
  );
}

/**
 * CompeteVisual - Tournament Bracket / Speed Ladder
 */
function CompeteVisual() {
  return (
    <div className="w-full max-w-[220px] h-14 relative overflow-hidden select-none" aria-hidden="true">
      <svg viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Bracket lines */}
        <path d="M 10 12 L 60 12 L 80 25 L 140 25" className="stroke-bbs-border-focus group-hover:stroke-white/60 transition-colors duration-300" strokeWidth="1.2" />
        <path d="M 10 38 L 60 38 L 80 25" className="stroke-bbs-border-focus group-hover:stroke-white/60 transition-colors duration-300" strokeWidth="1.2" />
        <path d="M 140 25 L 170 25" className="stroke-bbs-accent group-hover:stroke-white transition-colors duration-300" strokeWidth="1.5" />

        {/* Seed indicators */}
        <circle cx="10" cy="12" r="3" className="fill-bbs-dim group-hover:fill-white/80 transition-colors duration-300" />
        <circle cx="10" cy="38" r="3" className="fill-bbs-dim group-hover:fill-white/80 transition-colors duration-300" />

        {/* Trophy / Final Node */}
        <rect x="165" y="12" width="48" height="26" rx="2" className="fill-bbs-accent group-hover:fill-white stroke-bbs-accent group-hover:stroke-white transition-colors duration-300" strokeWidth="1" />
        <text x="189" y="29" textAnchor="middle" className="font-mono text-[9px] font-bold fill-white group-hover:fill-bbs-accent transition-colors duration-300">SIH '26</text>
      </svg>
    </div>
  );
}

/**
 * ConnectVisual - Distributed Peer Mesh Network
 */
function ConnectVisual() {
  return (
    <div className="w-full max-w-[260px] h-16 relative overflow-hidden select-none" aria-hidden="true">
      <svg viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Interconnected Mesh Lines */}
        <line x1="30" y1="30" x2="90" y2="15" className="stroke-bbs-border-focus group-hover:stroke-white/50 transition-colors duration-300" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="30" y1="30" x2="100" y2="48" className="stroke-bbs-border-focus group-hover:stroke-white/50 transition-colors duration-300" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="90" y1="15" x2="170" y2="20" className="stroke-bbs-accent group-hover:stroke-white transition-colors duration-300" strokeWidth="1.2" />
        <line x1="100" y1="48" x2="170" y2="20" className="stroke-bbs-border-focus group-hover:stroke-white/50 transition-colors duration-300" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="170" y1="20" x2="230" y2="35" className="stroke-bbs-accent group-hover:stroke-white transition-colors duration-300" strokeWidth="1.5" />

        {/* Nodes */}
        <circle cx="30" cy="30" r="6" className="fill-bbs-surface group-hover:fill-white/30 stroke-bbs-border group-hover:stroke-white transition-colors duration-300" strokeWidth="1.5" />
        <circle cx="90" cy="15" r="5" className="fill-bbs-surface group-hover:fill-white/30 stroke-bbs-accent-light group-hover:stroke-white transition-colors duration-300" strokeWidth="1.5" />
        <circle cx="100" cy="48" r="5" className="fill-bbs-surface group-hover:fill-white/30 stroke-bbs-border group-hover:stroke-white transition-colors duration-300" strokeWidth="1.5" />
        <circle cx="170" cy="20" r="8" className="fill-bbs-accent group-hover:fill-white stroke-bbs-accent group-hover:stroke-white transition-colors duration-300" strokeWidth="1.5" />
        <circle cx="170" cy="20" r="3" className="fill-white group-hover:fill-bbs-accent transition-colors duration-300" />
        <circle cx="230" cy="35" r="6" className="fill-bbs-surface group-hover:fill-white/30 stroke-bbs-border group-hover:stroke-white transition-colors duration-300" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ASYMMETRIC BENTO GRID COMPONENT
   ───────────────────────────────────────────────────────────── */

import { PILLARS } from '../data/pillars.js';

const VISUAL_MAP = {
  learn: <LearnVisual />,
  build: <BuildVisual />,
  compete: <CompeteVisual />,
  connect: <ConnectVisual />
};

const GRID_CLASS_MAP = {
  learn: 'col-span-12 lg:col-span-7',
  build: 'col-span-12 sm:col-span-6 lg:col-span-5',
  compete: 'col-span-12 sm:col-span-6 lg:col-span-5',
  connect: 'col-span-12 lg:col-span-7'
};

export default function AboutBentoGrid() {
  return (
    <div className="grid grid-cols-12 gap-5 w-full">
      {PILLARS.map((card) => (
        <Link
          key={card.id}
          to={card.actionHref}
          className={`group relative overflow-hidden bg-bbs-surface border border-bbs-border hover:border-bbs-accent/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bbs-accent rounded transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 lg:p-9 shadow-sm ${GRID_CLASS_MAP[card.id] || 'col-span-12'}`}
        >
          {/* Editorial Blue Accent Wipe Background Transition on Hover / Focus */}
          <div
            className="absolute inset-0 bg-bbs-accent pointer-events-none transform translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none z-0"
            aria-hidden="true"
          />

          {/* Card Top: Identifier & Micro-Visual */}
          <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-sm bg-bbs-accent group-hover:bg-white transition-colors duration-300 inline-block"
                aria-hidden="true"
              />
              <span className="text-xs font-bold tracking-wide uppercase text-bbs-accent group-hover:text-white transition-colors duration-300">
                {card.title}
              </span>
            </div>

            {/* Subtle technical visual */}
            <div className="opacity-75 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
              {VISUAL_MAP[card.id]}
            </div>
          </div>

          {/* Card Body: Editorial Title, Headline & Description */}
          <div className="relative z-10 my-auto pb-6">
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-bbs-text group-hover:text-white transition-colors duration-300 leading-none mb-3">
              {card.title}
            </h3>

            <div className="font-display font-semibold text-base sm:text-lg text-bbs-text/90 group-hover:text-white/95 transition-colors duration-300 mb-3 leading-snug">
              {card.headline}
            </div>

            <p className="text-xs sm:text-sm text-bbs-muted group-hover:text-white/85 transition-colors duration-300 leading-relaxed max-w-xl">
              {card.bentoDescription || card.description}
            </p>
          </div>

          {/* Card Bottom: Technical Action Line with Directional Arrow */}
          <div className="relative z-10 pt-5 border-t border-bbs-border group-hover:border-white/20 transition-colors duration-300 flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-bbs-accent group-hover:text-white transition-colors duration-300 flex items-center gap-1.5">
              <span>{card.actionText}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-bbs-accent group-hover:text-white" />
            </span>

            <span className="text-xs font-medium text-bbs-dim group-hover:text-white/70 transition-colors duration-300 uppercase">
              BBS 2025–26
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
