import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Code2, Users, Layers, Calendar, Terminal, Mail } from 'lucide-react';
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

function GithubIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 sm:mb-12">
            <div className="lg:col-span-6">
              <ViewportText
                as="h2"
                className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight m-0"
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>02 / SPECIALIZED TRACKS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight m-0">
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

          {/* Interactive Department Directory with Dynamic Right-Side Detail Panel */}
          <DepartmentDirectory />
        </div>
      </Section>

      {/* 5. Featured Projects Preview — Normal Solid Background */}
      <Section variant="solid" id="projects" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>03 / SELECTED BUILDS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight m-0">
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>04 / SCHEDULE & ACTIVITIES</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight m-0">
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
                <span>06 / CORE LEADERSHIP</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight m-0">
                STUDENT-LED & OPERATED.
              </h2>
            </div>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-bbs-accent-light hover:text-bbs-text transition-colors group shrink-0"
            >
              <span>MEET THE FULL ROSTER</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* President Card Preview — Upgraded to Editorial Technical Roster Language */}
          <article className="bg-bbs-surface border border-bbs-border rounded overflow-hidden shadow-xl hover:border-bbs-border-focus transition-colors group">
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              {/* Left: Rectangular Technical Portrait */}
              <div className="md:col-span-5 relative bg-bbs-raised overflow-hidden min-h-[300px] sm:min-h-[360px]">
                <img
                  src={president.image}
                  alt={`${president.name} — ${president.role}`}
                  className="w-full h-full object-cover object-[center_25%] filter grayscale-[15%] contrast-105 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 font-mono text-[11px] px-2.5 py-1 bg-bbs-bg/90 backdrop-blur-sm border border-bbs-border rounded text-bbs-accent-light tracking-wider">
                  {president.trackCode} // PRESIDENTIAL MANDATE
                </div>
                <div className="absolute bottom-4 left-4 font-mono text-[10px] px-2.5 py-1 bg-bbs-bg/90 backdrop-blur-sm border border-bbs-border rounded text-bbs-text flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  <span>{president.status}</span>
                </div>
              </div>

              {/* Right: Editorial Content */}
              <div className="md:col-span-7 p-6 sm:p-8 lg:p-9 flex flex-col justify-between border-t md:border-t-0 md:border-l border-bbs-border">
                <div>
                  <div className="flex justify-between items-center flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center font-mono text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/25">
                      {president.department}
                    </span>
                    <span className="font-mono text-xs text-bbs-dim">
                      COHORT 2026
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-bbs-text mb-1">
                    {president.name}
                  </h3>
                  <div className="font-mono text-xs text-bbs-accent-light uppercase tracking-wider mb-4">
                    {president.role}
                  </div>

                  <blockquote className="border-l-2 border-bbs-accent pl-3.5 mb-4 italic text-xs sm:text-sm text-bbs-text leading-relaxed font-sans">
                    "{president.quote}"
                  </blockquote>

                  <p className="text-xs sm:text-sm text-bbs-muted leading-relaxed mb-4">
                    {president.description}
                  </p>

                  <div className="mb-6">
                    <div className="font-mono text-[10px] text-bbs-dim uppercase tracking-wider mb-2">
                      // SPECIALTIES & FOCUS
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {president.specialties.map((s, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[11px] px-2 py-0.5 bg-bbs-raised rounded text-bbs-dim border border-bbs-border"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Connect Actions + View Directory CTA */}
                <div className="pt-4 border-t border-bbs-border flex items-center justify-between flex-wrap gap-3 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <a
                      href={president.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-bbs-muted hover:text-bbs-text bg-bbs-raised border border-bbs-border hover:border-bbs-accent transition-all"
                      title="GitHub Profile"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">GITHUB</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <a
                      href={president.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-bbs-muted hover:text-bbs-text bg-bbs-raised border border-bbs-border hover:border-bbs-accent transition-all"
                      title="LinkedIn Profile"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">LINKEDIN</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <a
                      href={`mailto:${president.socials.email}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-bbs-muted hover:text-bbs-text bg-bbs-raised border border-bbs-border hover:border-bbs-accent transition-all"
                      title="Email Contact"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">EMAIL</span>
                    </a>
                  </div>

                  <Link
                    to="/team"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-3.5 py-2 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-colors ml-auto"
                  >
                    <span>MEET FULL ROSTER</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Section>

      {/* 9. Join CTA Banner Preview — Normal Solid Background */}
      <Section variant="solid" id="join" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full text-center">
          <div className="flex items-center justify-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
            <span>07 / MEMBERSHIP & ONBOARDING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-bbs-text leading-tight mb-4 max-w-2xl mx-auto">
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
