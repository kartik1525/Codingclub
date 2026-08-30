import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Section from '../components/Section.jsx';
import { 
  EVENTS, 
  EVENTS_PAGE_HEADER, 
  EVENT_CATEGORIES, 
  EVENT_STATUSES 
} from '../data/events.js';

export default function EventsPage() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const categories = EVENT_CATEGORIES;
  const statuses = EVENT_STATUSES;

  const filteredEvents = EVENTS.filter((event) => {
    const matchCategory = filterCategory === 'all' || event.category === filterCategory;
    const matchStatus = filterStatus === 'all' || event.status === filterStatus;
    return matchCategory && matchStatus;
  });

  return (
    <div className="flex flex-col">
      {/* 1. Page Header & Filter Controls — Normal Solid Background */}
      <Section variant="solid" className="pt-14 sm:pt-20 pb-8 sm:pb-12">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex items-center gap-3 font-mono text-xs text-bbs-accent-light tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block" aria-hidden="true" />
            <span>{EVENTS_PAGE_HEADER.badge}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-bbs-text leading-tight mb-6 whitespace-pre-line">
            {EVENTS_PAGE_HEADER.title}
          </h1>
          <p className="text-lg sm:text-xl text-bbs-muted max-w-3xl leading-relaxed mb-10">
            {EVENTS_PAGE_HEADER.description}
          </p>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-bbs-border">
            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilterCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded font-mono text-xs whitespace-nowrap transition-all cursor-pointer border ${
                    filterCategory === cat.id
                      ? 'bg-bbs-accent text-white border-bbs-accent shadow-sm font-semibold'
                      : 'bg-bbs-surface text-bbs-muted hover:text-bbs-text hover:bg-bbs-raised border-bbs-border'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Status Filters */}
            <div className="flex items-center gap-2">
              {statuses.map((stat) => (
                <button
                  key={stat.id}
                  onClick={() => setFilterStatus(stat.id)}
                  className={`px-3 py-1.5 rounded font-mono text-xs whitespace-nowrap transition-all cursor-pointer border ${
                    filterStatus === stat.id
                      ? 'bg-bbs-raised text-bbs-text border-bbs-accent font-semibold'
                      : 'bg-bbs-surface text-bbs-dim hover:text-bbs-text border-bbs-border'
                  }`}
                >
                  {stat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Events Cards Archive — Checkered / Grid Background */}
      <Section variant="grid" className="py-16 sm:py-24 border-t border-bbs-border relative">
        <div className="max-w-container mx-auto px-5 sm:px-8 w-full">
          <div className="flex flex-col gap-8">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="bg-bbs-surface border border-bbs-border rounded overflow-hidden shadow-md hover:border-bbs-border-focus transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Left: Image / Photo */}
                  <div className="lg:col-span-4 bg-black relative overflow-hidden min-h-[220px] sm:min-h-[260px] border-b lg:border-b-0 lg:border-r border-bbs-border group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-bbs-bg/90 border border-bbs-border px-2.5 py-1 rounded font-mono text-xs text-bbs-accent-light">
                      {event.category.toUpperCase()}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-bbs-bg/90 border border-bbs-border px-2.5 py-1 rounded font-mono text-[11px] text-bbs-text uppercase flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${event.status === 'upcoming' ? 'bg-emerald-500 animate-ping' : 'bg-bbs-dim'}`} />
                      <span>{event.status}</span>
                    </div>
                  </div>

                  {/* Right: Event Details */}
                  <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      {/* Meta Schedule Header */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-bbs-accent-light mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{event.formattedDate}</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-bbs-dim">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{event.time}</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-bbs-dim">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{event.location}</span>
                        </span>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-bbs-text mb-2">
                        {event.title}
                      </h2>

                      <div className="font-mono text-xs text-bbs-muted mb-4">
                        {event.tagline}
                      </div>

                      <p className="text-sm sm:text-base text-bbs-muted leading-relaxed mb-6">
                        {event.description}
                      </p>

                      {event.note && (
                        <div className="p-3 bg-bbs-raised border border-bbs-border rounded mb-6 text-xs text-bbs-text font-mono">
                          <span className="text-bbs-accent-light font-semibold">PARTICIPATION NOTE: </span>
                          {event.note}
                        </div>
                      )}

                      <div className="mb-6">
                        <div className="font-mono text-[10px] text-bbs-dim uppercase tracking-wider mb-2">
                          TRACKS & FOCUS AREAS
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {event.tracks.map((track, idx) => (
                            <span
                              key={idx}
                              className="font-mono text-xs px-2.5 py-1 rounded bg-bbs-raised border border-bbs-border text-bbs-muted"
                            >
                              {track}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer & Registration CTA */}
                    <div className="pt-6 border-t border-bbs-border flex items-center justify-between flex-wrap gap-4 font-mono text-xs">
                      <span className="text-bbs-dim">
                        AUDIENCE: ALL UNDERGRADUATE STUDENTS
                      </span>

                      {event.registrationOpen ? (
                        <Link
                          to="/join"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-colors font-semibold"
                        >
                          <span>REGISTER FOR EVENT</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : (
                        <span className="px-3 py-1.5 rounded bg-bbs-raised border border-bbs-border text-bbs-dim">
                          EVENT CONCLUDED / ARCHIVED
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
