import React, { useState } from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import AboutSection from './components/AboutSection.jsx';
import ActivityUniverse from './components/ActivityUniverse.jsx';
import ProjectShowcase from './components/ProjectShowcase.jsx';
import EventsSection from './components/EventsSection.jsx';
import StatsSection from './components/StatsSection.jsx';
import TeamSection from './components/TeamSection.jsx';
import TerminalBlock from './components/TerminalBlock.jsx';
import JoinSection from './components/JoinSection.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import NotFoundView from './components/NotFoundView.jsx';
import { PrivacyModal, TermsModal } from './components/SystemModals.jsx';
import SmoothScroll, { useSmoothScroll } from './components/SmoothScroll.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import FloatingNav from './components/FloatingNav.jsx';

function AppContent() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | '404'
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  const scrollToSection = (id) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        scrollTo(`#${id}`);
      }, 100);
      return;
    }
    scrollTo(`#${id}`);
  };

  const handleJoinClick = () => {
    scrollToSection('join');
  };

  return (
    <div className="min-h-screen bg-bbs-bg text-bbs-text font-display selection:bg-bbs-accent selection:text-white transition-colors duration-300">
      {/* Accessible Skip to Content Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-bbs-accent focus:text-white focus:font-mono focus:text-sm focus:rounded"
      >
        Skip to main content
      </a>

      {/* State 1: Top Navbar (Part of normal document flow, scrolls away with hero) */}
      <SiteHeader onJoinClick={handleJoinClick} />

      {/* Primary Page Content */}
      <main id="main-content">
        {currentView === '404' ? (
          <NotFoundView onReturnHome={() => setCurrentView('home')} />
        ) : (
          <>
            <Hero onJoinClick={handleJoinClick} />
            <Marquee />
            <AboutSection />
            <ActivityUniverse />
            <ProjectShowcase />
            <EventsSection onRegisterClick={handleJoinClick} />
            <StatsSection />
            <TeamSection />
            <TerminalBlock onJoinClick={handleJoinClick} />
            <JoinSection />
          </>
        )}
      </main>

      {/* Footer */}
      <SiteFooter 
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpen404Demo={() => {
          setCurrentView(currentView === 'home' ? '404' : 'home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* State 2: Floating Bottom Navigation Dock (Appears when scrolled past ~50% of Hero) */}
      <FloatingNav onJoinClick={handleJoinClick} />

      {/* System Modals */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <AppContent />
      </SmoothScroll>
    </ThemeProvider>
  );
}
