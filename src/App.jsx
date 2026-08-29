import React, { useState } from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import MenuOverlay from './components/MenuOverlay.jsx';
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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home' | '404'
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinClick = () => {
    scrollToSection('join');
  };

  return (
    <>
      {/* Accessible Skip to Content Link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Navigation Header */}
      <SiteHeader 
        onOpenMenu={() => setIsMenuOpen(!isMenuOpen)} 
        isMenuOpen={isMenuOpen}
        onJoinClick={handleJoinClick}
      />

      {/* Fullscreen Navigation Overlay */}
      <MenuOverlay 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={scrollToSection}
      />

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

      {/* System Modals */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </>
  );
}
