import React, { useState } from 'react';
import { EVENTS } from '../data/events.js';
import ViewportText from './ViewportText.jsx';

export default function EventsSection({ onRegisterClick }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const upcomingEvents = EVENTS.filter(e => e.status === 'upcoming');
  const pastEvents = EVENTS.filter(e => e.status === 'completed');

  const filteredPastEvents = pastEvents.filter(e => {
    if (selectedCategory === 'all') return true;
    return e.category === selectedCategory;
  });

  return (
    <section id="events" className="subtle-grid py-20 sm:py-28 border-t border-bbs-border relative">
      <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
        {/* Section Meta */}
        <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-6">
          <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block"></span>
          <span>04 / CAMPUS EVENTS & HACKATHONS</span>
        </div>

        <div className="mb-14">
          <ViewportText
            as="h2"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-bbs-text leading-tight m-0"
          >
            ENGINEERED UNDER PRESSURE.
          </ViewportText>
          <p className="text-base sm:text-lg text-bbs-muted mt-3 max-w-2xl">
            From 36-hour overnight hackathons to hands-on lab workshops with fellow students.
          </p>
        </div>

        {/* Featured Upcoming Event with Large Photography */}
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="bg-bbs-surface border border-bbs-accent rounded overflow-hidden mb-20 shadow-xl"
          >
            {/* Top Event Photography Banner */}
            <div className="w-full max-h-[380px] overflow-hidden relative bg-black border-b border-bbs-border">
              <img 
                src={event.image} 
                alt="Students collaborating during overnight campus hackathon"
                className="w-full h-full max-h-[380px] object-cover block"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-bbs-bg/85 backdrop-blur-sm px-3.5 py-1.5 rounded font-mono text-xs text-white border border-bbs-border">
                UPCOMING IN-PERSON HACKATHON // FALL 2026
              </div>
            </div>

            {/* Event Details Grid */}
            <div className="p-6 sm:p-10 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex gap-3 items-center flex-wrap mb-4">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-bbs-accent-dim text-bbs-accent-light border border-blue-500/30">
                    INTERNAL CAMPUS QUALIFIER
                  </span>
                  <div className="inline-flex items-center gap-2 font-mono text-xs text-bbs-muted">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>REGISTRATIONS ACTIVE</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-bold text-bbs-text leading-tight mb-3">
                  {event.title}
                </h3>

                <p className="text-lg text-bbs-accent-light font-semibold mb-4">
                  {event.tagline}
                </p>

                <p className="text-base text-bbs-muted leading-relaxed mb-6">
                  {event.description}
                </p>

                <div className="bg-bbs-raised border border-bbs-border rounded p-4 mb-6 font-mono text-xs sm:text-sm text-bbs-muted leading-relaxed">
                  <span className="text-bbs-accent-light font-semibold">[NOTE FOR FIRST-TIMERS]: </span>
                  {event.note}
                </div>

                <button
                  onClick={onRegisterClick}
                  className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-semibold tracking-wide px-6 py-3 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-all hover:-translate-y-0.5"
                >
                  REGISTER YOUR SQUAD FOR SIH '26 →
                </button>
              </div>

              {/* Schedule Box */}
              <div className="lg:col-span-5 bg-bbs-raised border border-bbs-border rounded p-6 sm:p-8 flex flex-col gap-6">
                <div>
                  <div className="font-mono text-xs text-bbs-dim mb-1 uppercase">
                    DATE & SCHEDULE
                  </div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-bbs-text">
                    {event.formattedDate}
                  </div>
                  <div className="font-mono text-sm text-bbs-muted">
                    {event.time}
                  </div>
                </div>

                <div className="border-t border-bbs-border pt-5">
                  <div className="font-mono text-xs text-bbs-dim mb-1 uppercase">
                    CAMPUS VENUE
                  </div>
                  <div className="font-display text-lg sm:text-xl font-semibold text-bbs-text">
                    {event.location}
                  </div>
                </div>

                <div className="border-t border-bbs-border pt-5 font-mono text-xs text-bbs-muted">
                  <div>TEAM SIZE: 3 TO 6 STUDENTS (CROSS-BRANCH ENCOURAGED)</div>
                  <div className="mt-1 text-bbs-accent-light">NO ENTRY FEE // CAMPUS PASS REQUIRED</div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Past Events Timeline */}
        <div>
          <div className="flex flex-wrap justify-between items-center gap-4 border-b border-bbs-border pb-5 mb-10">
            <div>
              <h3 className="font-display text-2xl font-bold text-bbs-text m-0">
                RECENT SESSIONS & LAB MEETS
              </h3>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 flex-wrap">
              {['all', 'workshop', 'community'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-mono text-xs px-3 py-1.5 rounded transition-colors ${
                    selectedCategory === cat 
                      ? 'bg-bbs-raised border border-bbs-accent text-white' 
                      : 'bg-transparent border border-bbs-border text-bbs-muted hover:text-bbs-text'
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Past Event List with Workshop photo */}
          <div className="flex flex-col gap-6">
            {filteredPastEvents.map((evt) => (
              <div
                key={evt.id}
                className={`bg-bbs-surface border border-bbs-border rounded overflow-hidden items-center ${
                  evt.image ? 'grid grid-cols-1 md:grid-cols-12' : 'block'
                }`}
              >
                {evt.image && (
                  <div className="md:col-span-4 h-full min-h-[200px] bg-black border-b md:border-b-0 md:border-r border-bbs-border">
                    <img 
                      src={evt.image} 
                      alt={evt.title} 
                      className="w-full h-full object-cover block" 
                      loading="lazy"
                    />
                  </div>
                )}

                <div className={`${evt.image ? 'md:col-span-8' : ''} p-6 sm:p-8`}>
                  <div className="font-mono text-xs text-bbs-accent-light mb-2">
                    {evt.formattedDate} // {evt.category.toUpperCase()}
                  </div>
                  <h4 className="font-display text-xl font-bold text-bbs-text mb-2">
                    {evt.title}
                  </h4>
                  <p className="text-sm sm:text-base text-bbs-muted leading-relaxed mb-4">
                    {evt.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {evt.tracks && evt.tracks.map((t, idx) => (
                      <span key={idx} className="font-mono text-xs px-2 py-0.5 bg-bbs-surface border border-bbs-border rounded text-bbs-dim">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
