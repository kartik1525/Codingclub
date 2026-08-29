import React, { useState } from 'react';
import { PROJECTS } from '../data/projects.js';

export default function ProjectShowcase() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return true;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span>03 / SELECTED BUILDS</span>
        </div>

        {/* Section Header */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          <div>
            <h2 className="section-heading-editorial" style={{ margin: 0 }}>
              THINGS WE'VE BUILT.
            </h2>
            <p style={{ marginTop: '0.75rem', fontSize: 'var(--text-body-l)', color: 'var(--text-muted)' }}>
              Mini case studies in software architecture, campus utilities, and developer tooling.
            </p>
          </div>

          {/* Filter Controls */}
          <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--surface)', padding: '0.35rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
            <button
              onClick={() => setFilter('all')}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                padding: '0.45rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                background: filter === 'all' ? 'var(--accent)' : 'transparent',
                color: filter === 'all' ? '#ffffff' : 'var(--text-muted)',
                fontWeight: 600
              }}
            >
              ALL BUILDS ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                padding: '0.45rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                background: filter === 'featured' ? 'var(--accent)' : 'transparent',
                color: filter === 'featured' ? '#ffffff' : 'var(--text-muted)',
                fontWeight: 600
              }}
            >
              FEATURED ONLY
            </button>
          </div>
        </div>

        {/* Empty State Guard (PRD Section 18.3) */}
        {filteredProjects.length === 0 ? (
          <div 
            style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              backgroundColor: 'var(--surface)',
              border: '1px dashed var(--border-light)',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-light)', marginBottom: '0.75rem' }}>
              // NO REPOSITORIES FOUND
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text)' }}>
              NO BUILDS MATCH THIS FILTER CRITERIA
            </h3>
            <p style={{ margin: '0 auto 1.5rem auto' }}>
              Reset your filter to explore our campus tooling and systems prototypes.
            </p>
            <button onClick={() => setFilter('all')} className="btn btn-secondary">
              VIEW ALL BUILDS
            </button>
          </div>
        ) : (
          /* Editorial Project Case Studies */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <article
                  key={project.id}
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    transition: 'border-color var(--duration-fast) var(--ease-standard)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-focus)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div 
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      alignItems: 'stretch'
                    }}
                  >
                    {/* Project Information */}
                    <div style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        {/* Meta top bar */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--accent-light)', fontWeight: 600 }}>
                            {project.number} // {project.category.toUpperCase()}
                          </span>
                          <span className="tag">
                            YEAR {project.year}
                          </span>
                        </div>

                        <h3 
                          style={{ 
                            fontFamily: 'var(--font-display)', 
                            fontSize: 'var(--text-heading-l)', 
                            fontWeight: 700, 
                            lineHeight: 1.1,
                            color: 'var(--text)',
                            marginBottom: '0.75rem' 
                          }}
                        >
                          {project.title}
                        </h3>

                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-light)', marginBottom: '1.25rem' }}>
                          {project.tagline}
                        </div>

                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                          {project.description}
                        </p>

                        {/* Tech Stack Pills */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
                          {project.techTags.map((tech, i) => (
                            <span key={i} className="tag tag-accent" style={{ fontSize: '0.6875rem' }}>
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Contributors & Impact */}
                        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', marginBottom: '2rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-dim)', display: 'block' }}>
                                CONTRIBUTORS
                              </span>
                              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text)' }}>
                                {project.contributors.join(', ')}
                              </span>
                            </div>

                            {project.metrics && (
                              <div>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-dim)', display: 'block' }}>
                                  VERIFIED BENCHMARK
                                </span>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--accent-light)', fontWeight: 600 }}>
                                  {project.metrics}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Action Links */}
                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ fontSize: '0.75rem', padding: '0.65rem 1.25rem' }}
                          >
                            VIEW LIVE DEMO ↗
                          </a>
                        )}

                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                            style={{ fontSize: '0.75rem', padding: '0.65rem 1.25rem' }}
                          >
                            SOURCE CODE ↗
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Editorial Architectural Schematic / Preview */}
                    <div 
                      style={{
                        backgroundColor: 'var(--surface-raised)',
                        borderLeft: '1px solid var(--border)',
                        padding: 'clamp(2rem, 4vw, 3rem)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '280px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                          // ARCHITECTURE DIAGRAM & SUMMARY
                        </span>
                        <span className="tag">{project.featured ? "CORE STABLE BUILD" : "PROTOTYPE"}</span>
                      </div>

                      <div 
                        style={{
                          margin: '2rem 0',
                          padding: '1.5rem',
                          background: 'var(--bg)',
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8125rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.6
                        }}
                      >
                        <div style={{ color: 'var(--accent-light)', marginBottom: '0.5rem', fontWeight: 600 }}>
                          $ cat engineering_summary.md
                        </div>
                        <div>
                          {project.summary}
                        </div>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                        <span>BUILD {project.number}.0.4</span>
                        <span>STATUS: ACTIVE // DEPLOYED</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
