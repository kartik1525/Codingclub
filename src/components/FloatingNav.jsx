import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
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
import { FLOATING_NAV_ITEMS } from '../data/navigation.js';

const ICON_MAP = {
  home: Home,
  compass: Compass,
  layers: Layers,
  code: Code2,
  calendar: Calendar,
  users: Users
};

const NAV_ITEMS = FLOATING_NAV_ITEMS.map(item => ({
  ...item,
  icon: ICON_MAP[item.iconType] || Home
}));

/**
 * FloatingNav - State 2 Floating Bottom Navigation Dock
 * 
 * - Home page: Appears after scrolling past ~50% of the Hero section.
 * - Subpages: Appears after scrolling past the top page banner (~150px).
 * - Smoothly slides up from below the viewport: translateY(130%) -> translateY(0).
 * - Smoothly reverses when the user scrolls back above the threshold.
 * - 100% SOLID opaque background in both Dark and Light themes.
 * - Navigates across routes and synchronizes with Lenis smooth scrolling.
 */
export default function FloatingNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollTo } = useSmoothScroll();
  const [isVisible, setIsVisible] = useState(false);

  const isHomePage = location.pathname === '/';

  // 1. Scroll threshold visibility detector
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (isHomePage) {
      const heroEl = document.getElementById('hero');
      if (!heroEl) return;

      const handleHeroIntersection = (entries) => {
        const entry = entries[0];
        // When hero top has scrolled above viewport and less than 50% remains visible
        const isPastHalfHero = entry.boundingClientRect.top < 0 && entry.intersectionRatio <= 0.5;
        setIsVisible(isPastHalfHero);
      };

      const thresholds = Array.from({ length: 21 }, (_, i) => i * 0.05);
      const observer = new IntersectionObserver(handleHeroIntersection, {
        threshold: thresholds,
      });

      observer.observe(heroEl);

      // Initial check
      const initialRect = heroEl.getBoundingClientRect();
      if (initialRect.top < 0 && initialRect.bottom < window.innerHeight * 0.6) {
        setIsVisible(true);
      }

      return () => observer.disconnect();
    } else {
      // Subpages: Show floating nav after scrolling past top header (~160px)
      const handleSubpageScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setIsVisible(scrollY > 160);
      };

      window.addEventListener('scroll', handleSubpageScroll, { passive: true });
      handleSubpageScroll();

      return () => window.removeEventListener('scroll', handleSubpageScroll);
    }
  }, [isHomePage, location.pathname]);

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      if (path === '/') {
        scrollTo('#hero', { offset: 0 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav
      aria-label="Floating Navigation Dock"
      className={`fixed z-50 left-1/2 -translate-x-1/2 bottom-2.5 sm:bottom-6 max-w-[calc(100vw-0.75rem)] sm:max-w-max mb-[max(0.25rem,env(safe-area-inset-bottom))] transition-all duration-500 ease-out ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-[130%] opacity-0 pointer-events-none'
      }`}
    >
      {/* 100% Solid Opaque Dock Container */}
      <div className="flex items-center gap-0.5 sm:gap-1.5 p-1 sm:p-2 rounded-full bg-bbs-surface border border-bbs-border-light shadow-2xl shadow-black/50 hover:border-bbs-border-focus transition-colors">
        {/* BBS Logo Button */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-bbs-border hover:border-bbs-accent active:scale-95 transition-all shrink-0 ml-0.5 cursor-pointer shadow-sm"
          title="BBS Coding Club — Home"
          aria-label="Navigate to Home"
        >
          <img src="/bbs-logo.jpg" alt="BBS Coding Club Logo" className="w-full h-full object-cover" />
        </button>

        {/* Divider */}
        <div className="w-[1px] h-3.5 sm:h-4 bg-bbs-border-light mx-0.5 shrink-0" aria-hidden="true" />

        {/* Navigation Items */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {NAV_ITEMS.map(({ path, label, icon: Icon }) => {
            const isActive = location.pathname === path || (path === '/explore' && location.pathname === '/departments');
            return (
              <button
                key={path}
                onClick={() => handleNavClick(path)}
                className={`relative flex items-center justify-center sm:justify-start gap-1.5 p-1.5 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium transition-all select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-bbs-accent active:scale-95 shrink-0 ${
                  isActive
                    ? 'text-bbs-accent-light bg-bbs-accent-dim font-semibold border border-bbs-accent/25'
                    : 'text-bbs-muted sm:hover:text-bbs-text sm:hover:bg-bbs-hover active:bg-bbs-hover border border-transparent'
                }`}
                title={label}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-3.5 sm:h-4 bg-bbs-border-light mx-0.5 shrink-0" aria-hidden="true" />

        {/* Integrated Theme Toggle */}
        <ThemeToggle className="rounded-full !py-1 sm:!py-1.5 !px-1.5 sm:!px-2.5 shrink-0" />

        {/* Divider */}
        <div className="w-[1px] h-3.5 sm:h-4 bg-bbs-border-light mx-0.5 shrink-0 hidden xs:block" aria-hidden="true" />

        {/* Primary CTA: Join Club */}
        <Link
          to="/join"
          className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-bbs-accent text-white hover:bg-bbs-accent-hover active:scale-95 transition-all hover:scale-105 shadow-md shadow-bbs-accent/25 shrink-0 mr-0.5 cursor-pointer"
          id="floating-join-btn"
          aria-label="Join BBS Coding Club"
        >
          <span className="hidden sm:inline">JOIN</span>
          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
        </Link>
      </div>
    </nav>
  );
}
