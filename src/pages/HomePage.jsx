import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Calendar, MapPin } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import Marquee from '../components/Marquee.jsx';
import StatsSection from '../components/StatsSection.jsx';
import TerminalBlock from '../components/TerminalBlock.jsx';
import ViewportText from '../components/ViewportText.jsx';
import Section from '../components/Section.jsx';
import AboutBentoGrid from '../components/AboutBentoGrid.jsx';
import DepartmentDirectory from '../components/DepartmentDirectory.jsx';
import CoreLeadershipRoster from '../components/CoreLeadershipRoster.jsx';
import { PROJECTS } from '../data/projects.js';
import { EVENTS } from '../data/events.js';

export default function HomePage() {
  const featuredProjects = PROJECTS.slice(0, 2);
  const featuredEvents = EVENTS.slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Marquee Divider */}
      <Marquee />

      {/* 3. About Preview */}
      <Section variant="solid" id="about" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 sm:mb-12">
            <div className="lg:col-span-6">
              <ViewportText
                as="h2"
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-bbs-text leading-tight m-0"
              >
                WE ARE NOT JUST A CODING CLUB.
              </ViewportText>
            </div>
            <div className="lg:col-span-6">
              <p className="text-base sm:text-lg text-bbs-muted leading-relaxed mb-6">
                Most college clubs stop at slide presentations and textbook definitions. At BBS Coding Club, we learn by actually writing code, building software with our peers, competing in national hackathons, and preparing each other for modern engineering careers.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-bbs-accent-light hover:text-bbs-text transition-colors group"
              >
                <span>READ FULL ABOUT & MISSION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Bento Grid */}
          <AboutBentoGrid />
        </div>
      </Section>

      {/* 4. Departments Preview */}
      <Section variant="grid" id="departments" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-bbs-text leading-tight m-0">
                EXPLORE CLUB TRACKS.
              </h2>
            </div>
            <Link
              to="/departments"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-bbs-accent-light hover:text-bbs-text transition-colors group shrink-0"
            >
              <span>VIEW ALL 5 DEPARTMENTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <DepartmentDirectory />
        </div>
      </Section>

      {/* 5. Featured Projects Preview */}
      <Section variant="solid" id="projects" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-bbs-text leading-tight m-0">
                THINGS WE'VE SHIPPED.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-bbs-accent-light hover:text-bbs-text transition-colors group shrink-0"
            >
              <span>VIEW ALL PROJECTS & REPOS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8">
            {featuredProjects.map((project, index) => {
              const isFeatured = index === 0;

              return (
                <article
                  key={project.id}
                  className={`bg-bbs-surface border rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 group relative shadow-sm ${
                    isFeatured
                      ? 'border-bbs-border-focus/70 hover:border-bbs-accent'
                      : 'border-bbs-border hover:border-bbs-border-focus'
                  }`}
                >
                  <div className="w-full aspect-[16/9] bg-bbs-raised overflow-hidden relative border-b border-bbs-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    <Link
                      to="/projects"
                      className="absolute inset-0 bg-bbs-bg/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 cursor-pointer"
                      aria-label={`Open details for ${project.title}`}
                    >
                      <span className="font-mono text-xs font-semibold px-4 py-2 rounded bg-bbs-accent text-white border border-blue-400/30 shadow-lg shadow-bbs-accent/25 flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span>OPEN PROJECT</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-bbs-text tracking-tight group-hover:text-bbs-accent-light transition-colors">
                          {project.title}
                        </h3>
                        <span className="font-mono text-xs text-bbs-dim shrink-0">
                          {project.year}
                        </span>
                      </div>

                      <p className="text-sm text-bbs-muted leading-relaxed mb-5">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techTags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="font-mono text-xs px-2.5 py-1 bg-bbs-raised border border-bbs-border rounded text-bbs-text transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="border-t border-bbs-border pt-4 flex justify-between items-center font-mono text-xs">
                      <span className="text-bbs-dim">
                        {project.contributors[0]}
                      </span>

                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bbs-accent hover:text-bbs-text transition-colors inline-flex items-center gap-1 font-semibold"
                      >
                        <span>SOURCE CODE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 6. Events Preview */}
      <Section variant="grid" id="events" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-bbs-text leading-tight m-0">
                UPCOMING & RECENT EVENTS.
              </h2>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-bbs-accent-light hover:text-bbs-text transition-colors group shrink-0"
            >
              <span>VIEW FULL EVENT ARCHIVE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-bbs-surface border border-bbs-border rounded p-6 sm:p-8 flex flex-col justify-between hover:border-bbs-border-focus transition-colors shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/25">
                      {event.formattedDate}
                    </span>
                    <span className="font-mono text-xs text-bbs-dim capitalize">
                      {event.category}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-bbs-text mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-bbs-muted leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-mono text-bbs-dim mb-6">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{event.location}</span>
                    </span>
                    <span>{event.time}</span>
                  </div>
                </div>

                <div className="border-t border-bbs-border pt-4 flex justify-between items-center">
                  <div className="flex flex-wrap gap-1">
                    {event.tracks.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="font-mono text-[10px] text-bbs-dim px-2 py-0.5 bg-bbs-raised rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/events"
                    className="font-mono text-xs text-bbs-accent-light font-semibold hover:text-bbs-text transition-colors"
                  >
                    DETAILS ↗
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. Stats & Terminal Block */}
      <StatsSection />
      <TerminalBlock />

      {/* 8. Team Preview */}
      <Section variant="grid" id="team" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <CoreLeadershipRoster />
        </div>
      </Section>

      {/* 9. Join CTA Banner */}
      <Section variant="solid" id="join" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-bbs-text leading-tight mb-4 max-w-2xl mx-auto">
            READY TO BUILD REAL SOFTWARE WITH YOUR PEERS?
          </h2>
          <p className="text-base text-bbs-muted leading-relaxed max-w-xl mx-auto mb-8">
            Choose your track, meet fellow student developers, collaborate on campus hackathon squads, and level up your engineering skills outside the classroom.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 font-mono text-sm font-semibold px-6 py-3 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:scale-105 shadow-xl shadow-bbs-accent/25"
          >
            <span>START APPLICATION</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
