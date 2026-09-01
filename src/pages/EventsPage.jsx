import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowUpRight, ArrowRight, Images } from 'lucide-react';
import Section from '../components/Section.jsx';
import EventGalleryModal from '../components/EventGalleryModal.jsx';
import { 
  EVENTS, 
  EVENTS_PAGE_HEADER, 
  EVENT_CATEGORIES, 
  EVENT_STATUSES 
} from '../data/events.js';

export default function EventsPage() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedGalleryEvent, setSelectedGalleryEvent] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);

  const categories = EVENT_CATEGORIES;
  const statuses = EVENT_STATUSES;

  const openGallery = (event, index = 0) => {
    if (!event || event.status === 'upcoming' || !event?.gallery || event.gallery.length === 0) return;
    setSelectedGalleryEvent(event);
    setGalleryInitialIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

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
          <div className="flex items-center gap-2.5 text-xs font-bold text-bbs-accent tracking-wide uppercase mb-4">
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
                  className={`px-3.5 py-1.5 rounded text-xs whitespace-nowrap transition-all cursor-pointer border ${
                    filterCategory === cat.id
                      ? 'bg-bbs-accent text-white border-bbs-accent shadow-sm font-semibold'
                      : 'bg-bbs-surface text-bbs-muted hover:text-bbs-text hover:bg-bbs-raised border-bbs-border font-medium'
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
                  className={`px-3.5 py-1.5 rounded text-xs whitespace-nowrap transition-all cursor-pointer border ${
                    filterStatus === stat.id
                      ? 'bg-bbs-raised text-bbs-text border-bbs-accent font-semibold'
                      : 'bg-bbs-surface text-bbs-dim hover:text-bbs-text border-bbs-border font-medium'
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
            {filteredEvents.map((event) => {
              const isUpcoming = event.status === 'upcoming';
              const hasGallery = !isUpcoming && Array.isArray(event.gallery) && event.gallery.length > 0;

              return (
                <article
                  key={event.id}
                  className="bg-bbs-surface border border-bbs-border rounded overflow-hidden shadow-md hover:border-bbs-border-focus transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    {/* Left: Image / Photo or Typographic Placeholder */}
                    {isUpcoming ? (
                      <div className="lg:col-span-4 bg-bbs-raised relative overflow-hidden min-h-[220px] sm:min-h-[260px] border-b lg:border-b-0 lg:border-r border-bbs-border flex flex-col items-center justify-center p-6 text-center select-none group">
                        {/* Subtle background grid texture */}
                        <div className="absolute inset-0 section-grid opacity-60 pointer-events-none" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.08)_0%,_transparent_70%)] pointer-events-none" />

                        {/* Top-Left Category Badge */}
                        <div className="absolute top-3.5 left-3.5 bg-bbs-surface/95 border border-bbs-border px-2.5 py-1 rounded text-xs font-bold text-bbs-accent uppercase tracking-wider z-10 shadow-xs">
                          {event.category.toUpperCase()}
                        </div>

                        {/* Bottom-Left Status Badge */}
                        <div className="absolute bottom-3.5 left-3.5 bg-bbs-surface/95 border border-bbs-border px-2.5 py-1 rounded text-xs font-medium text-bbs-text uppercase flex items-center gap-1.5 z-10 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>{event.status}</span>
                        </div>

                        {/* Centered Typographic Headline */}
                        <div className="relative z-0 flex flex-col items-center justify-center my-auto py-6">
                          <span className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight text-bbs-text leading-none transition-transform duration-500 group-hover:scale-105">
                            {event.id.toLowerCase().includes('sih') ? 'SIH' : event.title.split(' ')[0]}
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-bbs-accent uppercase mt-2.5">
                            CAMPUS HACKATHON · 2026
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="lg:col-span-4 bg-black relative overflow-hidden min-h-[220px] sm:min-h-[260px] border-b lg:border-b-0 lg:border-r border-bbs-border group">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        {/* Subtle dark/neutral gradient overlay for clean contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/55 pointer-events-none transition-opacity duration-300" />

                        {/* Top-Left Category Badge */}
                        <div className="absolute top-3.5 left-3.5 bg-black/70 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded text-xs font-bold text-white uppercase tracking-wider z-10 shadow-sm">
                          {event.category.toUpperCase()}
                        </div>

                        {/* Top-Right Photo Gallery Indicator on Cover (Only for completed with gallery) */}
                        {hasGallery && (
                          <button
                            type="button"
                            onClick={() => openGallery(event, 0)}
                            aria-label={`View photo gallery for ${event.title}`}
                            className="absolute top-3.5 right-3.5 bg-black/70 hover:bg-bbs-accent text-white border border-white/20 hover:border-blue-400/50 px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm backdrop-blur-md cursor-pointer group/badge z-10"
                          >
                            <Images className="w-3.5 h-3.5 text-blue-400 group-hover/badge:text-white transition-colors" />
                            <span>{event.gallery.length} PHOTOS</span>
                          </button>
                        )}

                        {/* Bottom-Left Status Badge */}
                        <div className="absolute bottom-3.5 left-3.5 bg-black/70 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded text-xs font-medium text-white/90 uppercase flex items-center gap-1.5 z-10 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          <span>{event.status}</span>
                        </div>
                      </div>
                    )}

                    {/* Right: Event Details */}
                    <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        {/* Meta Schedule Header */}
                        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-bbs-accent mb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-bbs-accent" />
                            <span>{event.formattedDate}</span>
                          </span>
                          <span className="flex items-center gap-1.5 text-bbs-muted font-medium">
                            <Clock className="w-3.5 h-3.5 text-bbs-dim" />
                            <span>{event.time}</span>
                          </span>
                          <span className="flex items-center gap-1.5 text-bbs-muted font-medium">
                            <MapPin className="w-3.5 h-3.5 text-bbs-dim" />
                            <span>{event.location}</span>
                          </span>
                        </div>

                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-bbs-text mb-2">
                          {event.title}
                        </h2>

                        <div className="text-xs sm:text-sm font-medium text-bbs-muted mb-4">
                          {event.tagline}
                        </div>

                        <p className="text-sm sm:text-base text-bbs-muted leading-relaxed mb-6">
                          {event.description}
                        </p>

                        {event.note && (
                          <div className="p-3 bg-bbs-raised border border-bbs-border rounded mb-6 text-xs text-bbs-text leading-relaxed">
                            <span className="text-bbs-accent font-semibold">PARTICIPATION NOTE: </span>
                            {event.note}
                          </div>
                        )}

                        <div className="mb-6">
                          <div className="text-xs font-bold text-bbs-dim uppercase tracking-wide mb-2">
                            TRACKS & FOCUS AREAS
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {event.tracks.map((track, idx) => (
                              <span
                                key={idx}
                                className="text-xs font-medium px-2.5 py-1 rounded bg-bbs-raised border border-bbs-border text-bbs-muted"
                              >
                                {track}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer & Registration CTA */}
                      <div className="pt-6 border-t border-bbs-border flex items-center justify-between flex-wrap gap-4 text-xs font-medium">
                        <span className="text-bbs-dim">
                          AUDIENCE: ALL UNDERGRADUATE STUDENTS
                        </span>

                        <div className="flex items-center gap-3 flex-wrap">
                          {/* Subtle VIEW GALLERY action only when event has gallery images */}
                          {hasGallery && (
                            <button
                              type="button"
                              onClick={() => openGallery(event, 0)}
                              className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-bbs-raised hover:bg-bbs-hover border border-bbs-border hover:border-bbs-accent text-bbs-accent hover:text-bbs-text transition-all cursor-pointer text-xs font-semibold group/gal"
                            >
                              <Images className="w-3.5 h-3.5 text-bbs-accent group-hover/gal:scale-110 transition-transform" />
                              <span>VIEW GALLERY</span>
                              <span className="text-bbs-dim group-hover/gal:text-bbs-accent text-xs">
                                ({String(event.gallery.length).padStart(2, '0')})
                              </span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover/gal:translate-x-1 transition-transform" />
                            </button>
                          )}

                          {event.registrationOpen ? (
                            event.registrationUrl ? (
                              <a
                                href={event.registrationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-colors text-xs font-semibold shadow-md shadow-bbs-accent/20"
                              >
                                <span>REGISTER FOR EVENT</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            ) : (
                              <Link
                                to="/join"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-colors text-xs font-semibold shadow-md shadow-bbs-accent/20"
                              >
                                <span>REGISTER FOR EVENT</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </Link>
                            )
                          ) : (
                            <span className="px-3 py-1.5 rounded bg-bbs-raised border border-bbs-border text-bbs-dim text-xs font-medium">
                              EVENT CONCLUDED / ARCHIVED
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 3. Event Gallery Modal Lightbox */}
      <EventGalleryModal
        isOpen={isGalleryOpen}
        onClose={closeGallery}
        event={selectedGalleryEvent}
        initialIndex={galleryInitialIndex}
      />
    </div>
  );
}
