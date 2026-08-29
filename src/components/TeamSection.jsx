import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/team.js';

export default function TeamSection() {
  const [activeMemberId, setActiveMemberId] = useState(null);

  return (
    <section id="team" className="section subtle-grid">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span>06 / THE COLLECTIVE</span>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <h2 className="section-heading-editorial" style={{ margin: 0 }}>
            THE PEOPLE BEHIND THE CODE.
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: 'var(--text-body-l)', color: 'var(--text-muted)' }}>
            Engineers, builders, and community leads steering BBS Coding Club. Tap or hover to view focus areas.
          </p>
        </div>

        {/* Editorial Team Composition */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {TEAM_MEMBERS.map((member) => {
            const isExpanded = activeMemberId === member.id;
            return (
              <div
                key={member.id}
                onClick={() => setActiveMemberId(isExpanded ? null : member.id)}
                style={{
                  backgroundColor: 'var(--surface)',
                  border: isExpanded ? '1px solid var(--accent)' : '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all var(--duration-fast) var(--ease-standard)'
                }}
                onMouseEnter={() => setActiveMemberId(member.id)}
              >
                <div>
                  {/* Top row: Avatar monogram + Lead badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                    <div 
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--surface-raised)',
                        border: '1px solid var(--border-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        color: 'var(--accent-light)'
                      }}
                    >
                      {member.avatarInitials}
                    </div>

                    <span className="tag">
                      {member.domain}
                    </span>
                  </div>

                  <h3 
                    style={{ 
                      fontFamily: 'var(--font-display)', 
                      fontSize: '1.45rem', 
                      fontWeight: 700, 
                      color: 'var(--text)',
                      marginBottom: '0.35rem' 
                    }}
                  >
                    {member.name}
                  </h3>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--accent-light)', marginBottom: '1.25rem' }}>
                    {member.role}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {member.bio}
                  </p>
                </div>

                <div>
                  {/* Technical Interests */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {member.interests.map((interest, i) => (
                      <span key={i} className="tag tag-accent" style={{ fontSize: '0.6875rem' }}>
                        {interest}
                      </span>
                    ))}
                  </div>

                  {/* Social links */}
                  <div 
                    style={{
                      borderTop: '1px solid var(--border)',
                      paddingTop: '1rem',
                      display: 'flex',
                      gap: '1.25rem'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: 0 }}
                      >
                        GITHUB ↗
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: 0 }}
                      >
                        LINKEDIN ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
