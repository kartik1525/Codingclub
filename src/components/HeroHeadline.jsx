import React, { useState, useEffect, useMemo } from 'react';

/**
 * HeroHeadline - Zero Layout Shift Typewriter Headline
 * 
 * - Line 1: "WE" is permanently static and anchored.
 * - Line 2: The typewriter word cycles: "LEARN." -> "BUILD." -> "EXPERIMENT." -> loop.
 * - Zero Layout Shift: An invisible sizing element containing the longest word ("EXPERIMENT.")
 *   always occupies the layout flow, reserving the exact width and height needed.
 * - The animated text is positioned absolute inside the reserved box, guaranteeing
 *   the page NEVER moves, shrinks, or reflows while characters type or delete.
 * - Respects 'prefers-reduced-motion: reduce' by rendering static "WE LEARN.".
 */
export default function HeroHeadline({ className = '' }) {
  const words = useMemo(() => ["LEARN.", "BUILD.", "EXPERIMENT."], []);
  const longestWord = "EXPERIMENT.";
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Check prefers-reduced-motion
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(words[0]);
      return;
    }

    const currentTarget = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < currentTarget.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentTarget.slice(0, displayedText.length + 1));
        }, 90); // typing speed
      } else {
        // Word is fully typed, pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800); // hold time
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentTarget.slice(0, displayedText.length - 1));
        }, 55); // deletion speed
      } else {
        // Word is fully deleted, advance to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex, words, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <h1 className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-bbs-text uppercase leading-none m-0 ${className}`}>
        <span className="block text-bbs-text">WE</span>
        <span className="block text-bbs-accent-light mt-1 sm:mt-2">LEARN.</span>
      </h1>
    );
  }

  return (
    <h1 className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase leading-none m-0 flex flex-col items-start select-none ${className}`}>
      {/* Line 1: Permanent Static Anchor */}
      <span className="text-bbs-text block leading-none">
        WE
      </span>

      {/* Line 2: Typewriter Container with CSS Grid Overlapping to Guarantee Zero Layout Shift */}
      <span className="grid grid-cols-1 grid-rows-1 text-bbs-accent-light mt-1 sm:mt-2 items-baseline leading-none min-h-[1.15em] overflow-hidden">
        {/* Invisible Sizing Layer (Permanently anchors width and height to the longest word) */}
        <span 
          className="col-start-1 row-start-1 invisible select-none pointer-events-none block whitespace-nowrap leading-none" 
          aria-hidden="true"
        >
          {longestWord}
        </span>

        {/* Visible Layer (Overlaps the exact same grid cell without causing reflow) */}
        <span className="col-start-1 row-start-1 flex items-baseline whitespace-nowrap leading-none">
          <span>{displayedText || '\u00A0'}</span>
          <span 
            aria-hidden="true"
            className="inline-block w-[3px] sm:w-[4px] md:w-[6px] h-[0.75em] bg-bbs-accent ml-1 sm:ml-2 align-baseline animate-pulse opacity-85 shrink-0" 
          />
        </span>
      </span>
    </h1>
  );
}
