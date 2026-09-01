import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section.jsx';

export default function NotFoundView() {
  return (
    <Section variant="grid" className="min-h-[75vh] flex items-center justify-center p-6 sm:p-12">
      <div className="max-w-xl w-full bg-bbs-surface border border-bbs-border rounded p-8 sm:p-14 text-center shadow-2xl">
        <div className="text-xs font-bold text-bbs-accent mb-4 tracking-wide uppercase">
          HTTP 404 — ROUTE COMPILATION FAILURE
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-bbs-text leading-tight mb-4">
          THIS PAGE DIDN'T COMPILE.
        </h1>

        <p className="text-base text-bbs-muted leading-relaxed max-w-md mx-auto mb-8">
          The requested endpoint does not exist on the BBS server tree or has been refactored into another module.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/"
            className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-colors"
          >
            ← RETURN TO MAIN ROUTE
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold px-5 py-2.5 rounded border border-bbs-border-light text-bbs-text bg-transparent hover:bg-bbs-raised hover:border-bbs-muted transition-colors"
          >
            EXPLORE SELECTED BUILDS
          </Link>
        </div>
      </div>
    </Section>
  );
}
