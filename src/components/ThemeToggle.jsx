import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      id="theme-toggle-btn"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleTheme();
      }}
      type="button"
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-bbs-border-light bg-bbs-surface text-bbs-text hover:bg-bbs-hover hover:border-bbs-muted transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-bbs-accent ${className}`}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      {isLight ? (
        // Moon icon + label for light theme
        <>
          <svg 
            className="w-3.5 h-3.5 text-bbs-text pointer-events-none" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <span className="text-xs font-semibold tracking-wide text-bbs-muted pointer-events-none hidden sm:inline">
            DARK
          </span>
        </>
      ) : (
        // Sun icon + label for dark theme
        <>
          <svg 
            className="w-3.5 h-3.5 text-amber-400 pointer-events-none" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <span className="text-xs font-semibold tracking-wide text-bbs-muted pointer-events-none hidden sm:inline">
            LIGHT
          </span>
        </>
      )}
    </button>
  );
}
