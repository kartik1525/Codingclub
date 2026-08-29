import React, { useState, useEffect, useRef } from 'react';
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
import { CLUB_INFO } from '../data/clubInfo.js';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: Compass },
  { id: 'universe', label: 'Activities', icon: Layers },
  { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'team', label: 'Team', icon: Users },
];

/**
 * FloatingNav - Floating bottom navigation dock inspired by modern developer & studio websites
 * 
 * - Fixed near bottom-center of viewport.
 * - Rounded pill with subtle translucent blur & theme-adaptive borders.
 * - Active section tracking with smooth Lenis scroll glide.
 * - Responsive: full icon+text labels on desktop, sleek compact layout on mobile.
 * - Subtle scroll-reactive compaction when scrolling down, expands on pause/scroll-up.
 */
export default function FloatingNav({ onJoinClick }) {
  const { scrollTo } = useSmoothScroll();
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  // Active section observer
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'universe', 'projects', 'events', 'stats', 'team', 'terminal', 'join'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(e => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by visibility ratio or top position
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

  // Subtle scroll direction detector for dynamic compaction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current + 8 && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY.current - 8) {
        setIsScrollingDown(false);
      }

      lastScrollY.current = currentScrollY;

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrollingDown(false);
      }, 900);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    scrollTo(`#${id}`, { offset: id === 'hero' ? 0 : -30 });
  };

  return (
    <nav
      aria-label="Floating Navigation Bar"
      className={`fixed z-40 transition-all duration-300 ease-out left-1/2 -translate-x-1/2 bottom-4 sm:bottom-6 max-w-[calc(100vw-1.5rem)] sm:max-w-max ${
        isScrollingDown ? 'scale-[0.97] opacity-80 hover:opacity-100 hover:scale-100' : 'scale-100 opacity-100'
      }`}
    >
      <div className="flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-full bg-bbs-surface/85 backdrop-blur-xl border border-bbs-border-light shadow-2xl shadow-black/25 hover:border-bbs-border-focus transition-all">
        {/* BBS Monogram Logo Button */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-bbs-raised border border-bbs-border text-bbs-text font-mono font-bold text-xs hover:border-bbs-accent transition-colors shrink-0 ml-0.5"
          title="BBS Coding Club — Back to top"
          aria-label="Back to top"
        >
          B
        </button>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-bbs-border-light mx-0.5 sm:mx-1 shrink-0" aria-hidden="true" />

        {/* Navigation Items */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-mono transition-all select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-bbs-accent ${
                  isActive
                    ? 'text-bbs-accent-light bg-bbs-accent-dim font-semibold shadow-inner'
                    : 'text-bbs-muted hover:text-bbs-text hover:bg-bbs-hover'
                }`}
                title={label}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden md:inline">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-bbs-border-light mx-0.5 sm:mx-1 shrink-0" aria-hidden="true" />

        {/* Prominent Right CTA: Join Club */}
        <button
          onClick={() => {
            if (onJoinClick) {
              onJoinClick();
            } else {
              handleNavClick('join');
            }
          }}
          className="inline-flex items-center gap-1 font-mono text-xs font-semibold px-3 sm:px-4 py-1.5 rounded-full bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:scale-105 shadow-md shadow-bbs-accent/25 shrink-0 mr-0.5"
          id="floating-join-btn"
          aria-label="Join BBS Coding Club"
        >
          <span>JOIN</span>
          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
        </button>
      </div>
    </nav>
  );
}
