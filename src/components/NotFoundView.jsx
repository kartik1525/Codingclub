import React from 'react';

export default function NotFoundView({ onReturnHome }) {
  return (
    <div className="min-h-[75vh] flex items-center justify-center p-6 sm:p-12">
      <div className="max-w-xl w-full bg-bbs-surface border border-bbs-border rounded p-8 sm:p-14 text-center shadow-2xl">
        <div className="font-mono text-xs text-bbs-accent-light mb-4 tracking-wider">
          // HTTP 404 — ROUTE COMPILATION FAILURE
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-bbs-text leading-tight mb-4">
          THIS PAGE DIDN'T COMPILE.
        </h1>

        <p className="text-base text-bbs-muted leading-relaxed max-w-md mx-auto mb-8">
          The requested endpoint does not exist on the BBS server tree or has been refactored into another module.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={onReturnHome}
            className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-semibold tracking-wide px-5 py-2.5 rounded bg-bbs-accent text-white hover:bg-bbs-accent-hover transition-colors"
          >
            ← RETURN TO MAIN ROUTE
          </button>
          <a
            href="#projects"
            onClick={onReturnHome}
            className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-semibold tracking-wide px-5 py-2.5 rounded border border-bbs-border-light text-bbs-text bg-transparent hover:bg-bbs-raised hover:border-bbs-muted transition-colors"
          >
            EXPLORE SELECTED BUILDS
          </a>
        </div>
      </div>
    </div>
  );
}
