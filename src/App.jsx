import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SiteHeader from './components/SiteHeader.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import FloatingNav from './components/FloatingNav.jsx';
import NotFoundView from './components/NotFoundView.jsx';
import { PrivacyModal, TermsModal } from './components/SystemModals.jsx';
import SmoothScroll, { useSmoothScroll } from './components/SmoothScroll.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import DepartmentsPage from './pages/DepartmentsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import JoinPage from './pages/JoinPage.jsx';

/**
 * ScrollToTop - Resets scroll position to top and refreshes ScrollTrigger on route change
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);
    return () => clearTimeout(timer);
  }, [pathname, lenis]);

  return null;
}

function AppContent() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bbs-bg text-bbs-text font-display selection:bg-bbs-accent selection:text-white transition-colors duration-300 flex flex-col justify-between">
      <ScrollToTop />

      {/* Accessible Skip to Content Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-bbs-accent focus:text-white focus:font-mono focus:text-sm focus:rounded"
      >
        Skip to main content
      </a>

      {/* State 1: Top Navbar */}
      <SiteHeader />

      {/* Primary Routing Body */}
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </main>

      {/* State 2: Floating Bottom Navigation Dock */}
      <FloatingNav />

      {/* Footer */}
      <SiteFooter 
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
      />

      {/* System Modals */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SmoothScroll>
          <AppContent />
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
  );
}
