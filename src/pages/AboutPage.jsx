import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Terminal, Users, Cpu, ShieldCheck } from 'lucide-react';
import Section from '../components/Section.jsx';
import { CLUB_INFO } from '../data/clubInfo.js';
import { PILLARS } from '../data/pillars.js';
import { STATS } from '../data/stats.js';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Page Header Introduction — Normal Solid Background */}
      <Section variant="solid" className="pt-14 sm:pt-20 pb-12 sm:pb-16">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
            <span>01 / ABOUT BBS CODING CLUB</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-bbs-text leading-tight mb-6">
            BUILT BY STUDENTS.<br />BACKED BY CODE.
          </h1>
          <p className="text-lg sm:text-xl text-bbs-muted max-w-3xl leading-relaxed">
            The official student engineering collective and digital innovation society of BBS College of Engineering & Technology. We turn technical curiosity into deployed software, national hackathon finalists, and lifelong peer networks.
          </p>
        </div>
      </Section>

      {/* 2. Origin & Ethos — Checkered / Grid Background */}
      <Section variant="grid" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
            <div className="lg:col-span-6">
              <div className="font-mono text-xs text-bbs-accent-light mb-2 uppercase">
                // ORIGIN & ETHOS
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-bbs-text mb-6">
                WHY BBS CODING CLUB EXISTS
              </h2>
              <p className="text-base sm:text-lg text-bbs-muted leading-relaxed mb-6">
                Most college engineering curricula focus heavily on theoretical examinations and outdated slide presentations. Students graduate without ever deploying code to a live cloud server, resolving a multi-branch Git merge conflict, or building a software prototype under a 36-hour hackathon deadline.
              </p>
              <p className="text-base sm:text-lg text-bbs-muted leading-relaxed mb-6">
                BBS Coding Club was established in {CLUB_INFO.estYear} to change that reality permanently. We created a student-governed engineering ecosystem where peers teach peers, code reviews happen over Discord, and juniors are mentored from their first `git commit` to national competition stages.
              </p>
              <div className="font-mono text-xs text-bbs-dim border-l-2 border-bbs-accent pl-4 py-1 italic">
                "No corporate jargon, no gatekeeping—just genuine student builders learning in public."
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-bbs-surface border border-bbs-border rounded p-6">
                <div className="w-9 h-9 rounded bg-bbs-accent-dim text-bbs-accent-light flex items-center justify-center mb-4">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-bbs-text mb-2">Our Mission</h3>
                <p className="text-xs sm:text-sm text-bbs-muted leading-relaxed">
                  {CLUB_INFO.missionStatement}
                </p>
              </div>

              <div className="bg-bbs-surface border border-bbs-border rounded p-6">
                <div className="w-9 h-9 rounded bg-bbs-accent-dim text-bbs-accent-light flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-bbs-text mb-2">Our Vision</h3>
                <p className="text-xs sm:text-sm text-bbs-muted leading-relaxed">
                  To establish BBS College of Engineering & Technology as a recognized hub of competitive programming excellence, open-source contributors, and hackathon champions.
                </p>
              </div>

              <div className="bg-bbs-surface border border-bbs-border rounded p-6">
                <div className="w-9 h-9 rounded bg-bbs-accent-dim text-bbs-accent-light flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-bbs-text mb-2">Student Governed</h3>
                <p className="text-xs sm:text-sm text-bbs-muted leading-relaxed">
                  Every workshop, competition track, and review sprint is led by undergraduate students volunteering to elevate their peers.
                </p>
              </div>

              <div className="bg-bbs-surface border border-bbs-border rounded p-6">
                <div className="w-9 h-9 rounded bg-bbs-accent-dim text-bbs-accent-light flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-bbs-text mb-2">Institutional Alignment</h3>
                <p className="text-xs sm:text-sm text-bbs-muted leading-relaxed">
                  Affiliated with {CLUB_INFO.institution}, bridging academic resources with modern software development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Operational Pillars — Normal Solid Background */}
      <Section variant="solid" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="font-mono text-xs text-bbs-accent-light mb-2 uppercase">
            // OPERATIONAL PILLARS
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-bbs-text mb-12">
            HOW WE OPERATE EVERY SEMESTER
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-bbs-surface border border-bbs-border rounded p-6 sm:p-8 flex flex-col justify-between hover:border-bbs-border-focus transition-colors shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/25">
                      PILLAR // {pillar.number}
                    </span>
                    <span className="font-mono text-xs text-bbs-dim uppercase">CORE PRINCIPLE</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-bbs-text mb-3">
                    {pillar.title}
                  </h3>
                  <div className="font-mono text-xs text-bbs-accent-light mb-4">
                    {pillar.tagline}
                  </div>
                  <p className="text-sm sm:text-base text-bbs-muted leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="border-t border-bbs-border pt-4">
                  <div className="font-mono text-[10px] text-bbs-dim mb-2 uppercase tracking-wider">
                    DELIVERABLES & SESSIONS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pillar.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-bbs-raised border border-bbs-border text-bbs-text"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Student Outcomes & Culture — Checkered / Grid Background */}
      <Section variant="grid" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <div className="font-mono text-xs text-bbs-accent-light mb-2 uppercase">
                // STUDENT OUTCOMES
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-bbs-text mb-6">
                WHAT YOU GAIN AS A MEMBER
              </h2>
              <ul className="list-none p-0 m-0 space-y-4">
                {[
                  "Deploy production-quality code to public repositories rather than solo academic exercises",
                  "Form validated squads for Smart India Hackathon (SIH) and regional collegiate hackathons",
                  "Learn modern collaborative Git workflows, code reviews, and CI/CD pipelines",
                  "Speed-coding contest practice with algorithmic problem-solving ladders",
                  "Direct mentorship from senior students who have cracked internships and national competitions",
                  "A tight-knit community of developers, designers, and systems enthusiasts on campus"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-bbs-muted leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-bbs-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 bg-bbs-surface border border-bbs-border rounded p-6 sm:p-8">
              <div className="font-mono text-xs text-bbs-accent-light mb-2 uppercase">
                // CLUB CULTURE & CONDUCT
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-bbs-text mb-4">
                OUR COMMUNITY GUIDELINES
              </h3>
              <p className="text-sm text-bbs-muted leading-relaxed mb-4">
                We cultivate a culture of curiosity and intellectual generosity. There is zero tolerance for condescension, gatekeeping, or harassment in our labs, workshops, or online Discord channels.
              </p>
              <div className="space-y-3 font-mono text-xs text-bbs-text">
                <div className="p-3 bg-bbs-raised border border-bbs-border rounded">
                  <span className="text-bbs-accent-light font-semibold">01. LEARN IN PUBLIC:</span> Share your work-in-progress code, ask questions early, and help others when they are stuck.
                </div>
                <div className="p-3 bg-bbs-raised border border-bbs-border rounded">
                  <span className="text-bbs-accent-light font-semibold">02. MERIT & CODE:</span> Ideas are evaluated on architectural soundness and working demos, regardless of student year or branch.
                </div>
                <div className="p-3 bg-bbs-raised border border-bbs-border rounded">
                  <span className="text-bbs-accent-light font-semibold">03. RESPECT & INCLUSION:</span> We welcome beginners from every engineering department. Curiosity is the only prerequisite.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Verified Benchmarks & Metrics — Normal Solid Background */}
      <Section variant="solid" className="py-20 sm:py-24 border-t border-bbs-border relative text-center">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="font-mono text-xs text-bbs-accent-light mb-2 uppercase">
            // COMMUNITY BENCHMARKS
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-bbs-text mb-12">
            TRACK RECORD & METRICS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.id} className="bg-bbs-surface border border-bbs-border rounded p-6">
                <div className="font-display text-3xl sm:text-5xl font-bold text-bbs-accent mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs font-semibold text-bbs-text mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-bbs-muted">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. Closing Call to Action — Checkered / Grid Background */}
      <Section variant="grid" className="py-20 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="bg-bbs-surface border border-bbs-border rounded p-8 sm:p-12 text-center shadow-lg">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-bbs-text mb-4">
              WANT TO CONTRIBUTE TO BBS CODING CLUB?
            </h2>
            <p className="text-sm sm:text-base text-bbs-muted max-w-xl mx-auto mb-8 leading-relaxed">
              Browse our specialized departments, meet the student leadership team, or submit an application to join our next onboarding cohort.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/departments"
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold px-5 py-2.5 rounded bg-bbs-raised border border-bbs-border text-bbs-text hover:border-bbs-accent transition-colors"
              >
                <span>EXPLORE DEPARTMENTS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:scale-105 shadow-md shadow-bbs-accent/25"
              >
                <span>APPLY FOR MEMBERSHIP</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
