import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Code2, Users, Layers, Calendar, Terminal } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import Marquee from '../components/Marquee.jsx';
import StatsSection from '../components/StatsSection.jsx';
import TerminalBlock from '../components/TerminalBlock.jsx';
import ViewportText from '../components/ViewportText.jsx';
import Section from '../components/Section.jsx';
import AboutBentoGrid from '../components/AboutBentoGrid.jsx';
import DepartmentDirectory from '../components/DepartmentDirectory.jsx';
import { PROJECTS } from '../data/projects.js';
import { EVENTS } from '../data/events.js';
import { TEAM_LEADERSHIP } from '../data/team.js';

/**
 * HomePage - Concise Overview of BBS Coding Club
 * 
 * - Hero section preserved with zero-layout-shift typewriter.
 * - Marquee technical strip.
 * - Concise About preview with CTA to /about.
 * - Departments preview with CTA to /departments.
 * - Featured Projects preview with CTA to /projects.
 * - Events preview with CTA to /events.
 * - Stats and Terminal block.
 * - Team leadership preview with CTA to /team.
 * - Join invitation with CTA to /join.
 */
export default function HomePage() {
  const { president, trackLeads } = TEAM_LEADERSHIP;
  const featuredProjects = PROJECTS.slice(0, 2);
  const featuredEvents = EVENTS.slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* 1. Preserved Hero Section */}
      <Hero />

      {/* 2. Marquee Divider */}
      <Marquee />

      {/* 3. About Preview — Normal Solid Background */}
      <Section variant="solid" id="about" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
            <span>01 / ABOUT US OVERVIEW</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-6">
              <ViewportText
                as="h2"
                className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-bbs-text leading-tight m-0"
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

          {/* Asymmetric Bento Grid (LEARN, BUILD, COMPETE, CONNECT) */}
          <AboutBentoGrid />
        </div>
      </Section>

      {/* 4. Departments Preview (Specialized Tracks) — Checkered / Grid Background */}
      <Section variant="grid" id="departments" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>02 / SPECIALIZED TRACKS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-bbs-text leading-tight m-0">
                EXPLORE CLUB TRACKS.
              </h2>
            </div>
            <Link
              to="/departments"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-bbs-accent-light hover:text-bbs-text transition-colors group"
            >
              <span>VIEW ALL 5 DEPARTMENTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Interactive Department Directory with Dynamic Right-Side Detail Panel */}
          <DepartmentDirectory />
        </div>
      </Section>

      {/* 5. Featured Projects Preview — Normal Solid Background */}
      <Section variant="solid" id="projects" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>03 / SELECTED BUILDS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-bbs-text leading-tight m-0">
                THINGS WE'VE SHIPPED.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-bbs-accent-light hover:text-bbs-text transition-colors group"
            >
              <span>VIEW ALL PROJECTS & REPOS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-bbs-surface border border-bbs-border rounded overflow-hidden flex flex-col justify-between hover:border-bbs-border-focus transition-colors shadow-md group"
              >
                <div className="w-full aspect-[16/9] bg-black overflow-hidden relative border-b border-bbs-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-bbs-bg/85 backdrop-blur-sm border border-bbs-border px-2.5 py-1 rounded font-mono text-[11px] text-bbs-accent-light">
                    {project.number} // {project.category.toUpperCase()}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-bbs-text mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-bbs-muted leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techTags.map((tag, idx) => (
                        <span key={idx} className="font-mono text-xs px-2 py-0.5 bg-bbs-raised border border-bbs-border rounded text-bbs-dim">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-bbs-border pt-4 flex justify-between items-center font-mono text-xs">
                    <span className="text-bbs-dim">{project.status}</span>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bbs-accent-light hover:text-bbs-text transition-colors inline-flex items-center gap-1"
                    >
                      <span>VIEW CODE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. Events Preview (Schedule & Activities) — Checkered / Grid Background */}
      <Section variant="grid" id="events" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>04 / SCHEDULE & ACTIVITIES</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-bbs-text leading-tight m-0">
                UPCOMING & RECENT EVENTS.
              </h2>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-bbs-accent-light hover:text-bbs-text transition-colors group"
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
                      {event.formattedDate} — {event.category.toUpperCase()}
                    </span>
                    <span className="font-mono text-[10px] text-bbs-dim uppercase">
                      {event.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-bbs-text mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-bbs-muted leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="font-mono text-xs text-bbs-dim mb-6">
                    LOCATION: {event.location} // {event.time}
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

      {/* 7. Stats & Terminal Block — Normal Solid Background */}
      <StatsSection />
      <TerminalBlock />

      {/* 8. Team Preview (Core Leadership) — Checkered / Grid Background */}
      <Section variant="grid" id="team" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>05 / CORE LEADERSHIP</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-bbs-text leading-tight m-0">
                STUDENT-LED & OPERATED.
              </h2>
            </div>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-bbs-accent-light hover:text-bbs-text transition-colors group"
            >
              <span>MEET THE FULL ROSTER</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* President Card Preview */}
          <div className="bg-bbs-surface border border-bbs-border rounded overflow-hidden p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 mb-6 shadow-md hover:border-bbs-border-focus transition-colors">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border border-bbs-border shrink-0 bg-bbs-raised">
              <img
                src={president.image}
                alt={president.name}
                className="w-full h-full object-cover object-[center_25%]"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="font-mono text-xs text-bbs-accent-light mb-1">
                {president.trackCode} // {president.department}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-bbs-text mb-1">
                {president.name}
              </h3>
              <div className="font-mono text-xs text-bbs-muted mb-3">
                {president.role}
              </div>
              <p className="text-sm text-bbs-muted leading-relaxed mb-4 max-w-2xl">
                "{president.quote}"
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {president.specialties.map((s, idx) => (
                  <span key={idx} className="font-mono text-[11px] px-2 py-0.5 bg-bbs-raised rounded text-bbs-dim border border-bbs-border">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="shrink-0">
              <Link
                to="/team"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-4 py-2 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-colors"
              >
                <span>VIEW DIRECTORY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. Join CTA Banner Preview — Normal Solid Background */}
      <Section variant="solid" id="join" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full text-center">
          <div className="font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-3">
            // 06 / JOIN BBS CODING CLUB
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-bbs-text leading-tight mb-4 max-w-2xl mx-auto">
            READY TO BUILD REAL SOFTWARE WITH YOUR PEERS?
          </h2>
          <p className="text-base text-bbs-muted leading-relaxed max-w-xl mx-auto mb-8">
            Choose your track, meet fellow student developers, collaborate on campus hackathon squads, and level up your engineering skills outside the classroom.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 font-mono text-sm font-semibold px-6 py-3 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:scale-105 shadow-xl shadow-bbs-accent/25"
          >
            <span>START APPLICATION / ONBOARDING</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
