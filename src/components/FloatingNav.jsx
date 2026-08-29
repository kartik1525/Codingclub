import React, { useState, useEffect, useMemo } from 'react';
import { 
  Home, 
  Compass, 
  Layers, 
  Code2, 
  Calendar, 
  Users, 
  ArrowUpRight 
} from 'lucide-react';
import { useSmoothScroll } from './SmoothScroll.jsx';
import ThemeToggle from './ThemeToggle.jsx';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: Compass },
  { id: 'universe', label: 'Activities', icon: Layers },
  { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'team', label: 'Team', icon: Users },
];

/**
 * FloatingNav - State 2 Floating Bottom Navigation Dock
 * 
 * - Appears only when the user scrolls past ~50% of the Hero section.
 * - Smoothly slides up from below the viewport: translateY(120%) -> translateY(0).
 * - Smoothly reverses when the user scrolls back above the threshold.
 * - Zero layout shift (fixed and removed from normal document flow).
 * - 100% SOLID opaque background in both Dark and Light themes.
 * - Seamless integration with Lenis smooth scrolling.
 */
export default function FloatingNav({ onJoinClick }) {
  const { scrollTo } = useSmoothScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // 1. Hero Visibility Observer: Triggers Floating Nav after scrolling past ~50% of Hero
  useEffect(() => {
    const heroEl = document.getElementById('hero');
    if (!heroEl) return;

    const handleHeroIntersection = (entries) => {
      const entry = entries[0];
      // When hero top has scrolled above viewport and less than 50% remains visible
      const isPastHalfHero = entry.boundingClientRect.top < 0 && entry.intersectionRatio <= 0.5;
      setIsVisible(isPastHalfHero);
    };

    // Fine-grained thresholds for accurate 50% detection
    const thresholds = Array.from({ length: 21 }, (_, i) => i * 0.05);

    const observer = new IntersectionObserver(handleHeroIntersection, {
      threshold: thresholds,
    });

    observer.observe(heroEl);

    // Initial check (in case page reloads while scrolled)
    const initialRect = heroEl.getBoundingClientRect();
    if (initialRect.top < 0 && initialRect.bottom < window.innerHeight * 0.7) {
      setIsVisible(true);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Active Section Observer: Highlights the section currently in view
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'universe', 'projects', 'events', 'stats', 'team', 'terminal', 'join'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(e => e.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const topVisible = visibleEntries[0].target.id;
          if (NAV_ITEMS.some(item => item.id === topVisible)) {
            setActiveSection(topVisible);
          }
        }
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    );

    sections.forEach(s => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    scrollTo(`#${id}`, { offset: id === 'hero' ? 0 : -30 });
  };

  return (
    <nav
      aria-label="Floating Navigation Dock"
      className={`fixed z-50 left-1/2 -translate-x-1/2 bottom-3 sm:bottom-6 max-w-[calc(100vw-1rem)] sm:max-w-max pb-[max(0px,env(safe-area-inset-bottom))] transition-all duration-500 ease-out ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-[130%] opacity-0 pointer-events-none'
      }`}
    >
      {/* 100% Solid Opaque Dock Container */}
      <div className="flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-full bg-bbs-surface border border-bbs-border-light shadow-2xl shadow-black/40 hover:border-bbs-border-focus transition-colors">
        {/* BBS Logo Button */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-bbs-border hover:border-bbs-accent transition-colors shrink-0 ml-0.5 cursor-pointer shadow-sm"
          title="BBS Coding Club — Top"
          aria-label="Scroll to top"
        >
          <img src="/bbs-logo.jpg" alt="BBS Coding Club Logo" className="w-full h-full object-cover" />
        </button>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-bbs-border-light mx-0.5 shrink-0" aria-hidden="true" />

        {/* Navigation Items */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`relative flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-full text-xs font-mono transition-all select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-bbs-accent shrink-0 ${
                  isActive
                    ? 'text-bbs-accent-light bg-bbs-accent-dim font-semibold border border-bbs-accent/25'
                    : 'text-bbs-muted hover:text-bbs-text hover:bg-bbs-hover border border-transparent'
                }`}
                title={label}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden lg:inline">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-bbs-border-light mx-0.5 shrink-0" aria-hidden="true" />

        {/* Integrated Theme Toggle */}
        <ThemeToggle className="rounded-full !py-1 sm:!py-1.5 !px-2 sm:!px-2.5 shrink-0" />

        {/* Divider */}
        <div className="w-[1px] h-4 bg-bbs-border-light mx-0.5 shrink-0 hidden sm:block" aria-hidden="true" />

        {/* Primary CTA: Join Club */}
        <button
          onClick={() => {
            if (onJoinClick) {
              onJoinClick();
            } else {
              handleNavClick('join');
            }
          }}
          className="inline-flex items-center gap-1 font-mono text-xs font-semibold px-2.5 sm:px-4 py-1.5 rounded-full bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:scale-105 shadow-md shadow-bbs-accent/25 shrink-0 mr-0.5 cursor-pointer"
          id="floating-join-btn"
          aria-label="Join BBS Coding Club"
        >
          <span className="hidden sm:inline">JOIN</span>
          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
        </button>
      </div>
    </nav>
  );
}
