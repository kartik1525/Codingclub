import React, { useState } from 'react';
import { EVENTS } from '../data/events.js';

export default function EventsSection({ onRegisterClick }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const upcomingEvents = EVENTS.filter(e => e.status === 'upcoming');
  const pastEvents = EVENTS.filter(e => e.status === 'completed');

  const filteredPastEvents = pastEvents.filter(e => {
    if (selectedCategory === 'all') return true;
    return e.category === selectedCategory;
  });

  return (
    <section id="events" className="section subtle-grid">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span>04 / CLUB EVENTS & CALENDAR</span>
        </div>

        <div style={{ marginBottom: '3.5rem' }}>
          <h2 className="section-heading-editorial" style={{ margin: 0 }}>
            ENGINEERED UNDER PRESSURE.
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: 'var(--text-body-l)', color: 'var(--text-muted)' }}>
            Hackathons, systems masterclasses, and open-source contribution sprints.
          </p>
        </div>

        {/* Featured Upcoming Event (Editorial Spotlight) */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-light)', marginBottom: '1rem', letterSpacing: '0.08em' }}>
            // UPCOMING SPOTLIGHT
          </div>

          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <div
                key={event.id}
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--accent)',
                  borderRadius: 'var(--radius-sm)',
                  padding: 'clamp(2rem, 5vw, 4rem)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Glow accent bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--accent)' }} />

                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <span className="tag tag-accent">UPCOMING // {event.category.toUpperCase()}</span>
                      <span className="status-indicator">
                        <span className="status-dot pulse"></span>
                        <span>REGISTRATION OPEN</span>
                      </span>
                    </div>

                    <h3 
                      style={{ 
                        fontFamily: 'var(--font-display)', 
                        fontSize: 'clamp(1.75rem, 4vw, 3rem)', 
                        fontWeight: 800,
                        lineHeight: 1.05,
                        color: 'var(--text)',
                        marginBottom: '1rem' 
                      }}
                    >
                      {event.title}
                    </h3>

                    <p 
                      style={{ 
                        fontFamily: 'var(--font-display)', 
                        fontSize: '1.25rem', 
                        fontWeight: 600, 
                        color: 'var(--accent-light)',
                        marginBottom: '1.5rem' 
                      }}
                    >
                      {event.tagline}
                    </p>

                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '2rem' }}>
                      {event.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
                      {event.tracks && event.tracks.map((track, i) => (
                        <span key={i} className="tag">
                          {track}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={onRegisterClick}
                      className="btn btn-primary"
                      style={{ padding: '0.9rem 1.8rem' }}
                    >
                      REGISTER FOR HACKATHON →
                    </button>
                  </div>

                  {/* Right Schedule & Location Box */}
                  <div 
                    style={{
                      backgroundColor: 'var(--surface-raised)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '2.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2rem'
                    }}
                  >
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.35rem' }}>
                        DATE & TIME
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)' }}>
                        {event.formattedDate}
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        {event.time}
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.35rem' }}>
                        FORMAT & LOCATION
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)' }}>
                        {event.location}
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                      <div>ELIGIBILITY: ALL REGISTERED BBS STUDENTS</div>
                      <div style={{ marginTop: '0.35rem', color: 'var(--accent-light)' }}>TEAMS: 3 TO 6 MEMBERS</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* Empty State per PRD Section 18.3 */
            <div 
              style={{
                padding: '3rem',
                textAlign: 'center',
                backgroundColor: 'var(--surface)',
                border: '1px dashed var(--border)',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
                // CALENDAR STATUS
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text)' }}>
                NOTHING SCHEDULED — YET. CHECK BACK SOON.
              </h3>
              <p style={{ margin: '0.5rem auto 0 auto' }}>
                Follow our community channels for flash hackathons and workshop announcements.
              </p>
            </div>
          )}
        </div>

        {/* Past Events Archive */}
        <div>
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.5rem',
              borderBottom: '1px solid var(--border)',
              paddingBottom: '1.5rem',
              marginBottom: '2.5rem'
            }}
          >
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
                EVENT TIMELINE & ARCHIVE
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
              {['all', 'workshop', 'competition', 'hackathon'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    padding: '0.4rem 0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    background: selectedCategory === cat ? 'var(--surface-raised)' : 'transparent',
                    border: selectedCategory === cat ? '1px solid var(--accent)' : '1px solid var(--border)',
                    color: selectedCategory === cat ? '#ffffff' : 'var(--text-muted)'
                  }}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Past Event Items */}
          {filteredPastEvents.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              No archived events found under this category.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {filteredPastEvents.map((evt) => (
                <div
                  key={evt.id}
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '1.5rem 2rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '1.5rem',
                    alignItems: 'center',
                    transition: 'border-color var(--duration-fast) var(--ease-standard)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-focus)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.35rem' }}>
                      {evt.formattedDate} // {evt.category.toUpperCase()}
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text)' }}>
                      {evt.title}
                    </h4>
                  </div>

                  <div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                      {evt.description}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
                    <span className="tag">COMPLETED</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
