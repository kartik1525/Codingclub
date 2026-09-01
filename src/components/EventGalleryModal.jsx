import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Camera } from 'lucide-react';

/**
 * EventGalleryModal - Editorial Light-Theme-First Event Photo Gallery
 * 
 * Features:
 * - Light editorial/technical design system matching BBS Coding Club aesthetic.
 * - Controlled content width (max-w-5xl / 6xl) with balanced whitespace.
 * - Structured compact header with title, category, date, counter, and CLOSE GALLERY button.
 * - Large centered primary image with clean proportional aspect ratio & comfortable padding.
 * - Previous/Next controls aligned with the image stage rather than screen edges.
 * - Clean horizontal thumbnail rail with smooth auto-scroll to active index.
 * - Keyboard navigation (ArrowLeft, ArrowRight, Escape) and touch swipe gestures.
 * - Supports both light and dark modes with light mode as the primary experience.
 */
export default function EventGalleryModal({ isOpen, onClose, event, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState('next');
  const touchStartRef = useRef({ x: 0, y: 0 });
  const thumbnailRailRef = useRef(null);

  const gallery = event?.gallery || [];
  const total = gallery.length;

  // Reset index whenever modal opens or event changes
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(Math.min(Math.max(0, initialIndex), Math.max(0, total - 1)));
      setDirection('next');
    }
  }, [isOpen, event, initialIndex, total]);

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    if (isOpen && thumbnailRailRef.current) {
      const activeThumb = thumbnailRailRef.current.children[currentIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentIndex, isOpen]);

  // Next / Prev navigation handlers
  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToIndex = useCallback((index) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  }, [currentIndex]);

  // Keyboard navigation: Escape to close, ArrowLeft / ArrowRight to navigate
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Prevent background body scrolling while modal is open
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  // Touch handlers for mobile swipe navigation
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const diffX = touch.clientX - touchStartRef.current.x;
    const diffY = touch.clientY - touchStartRef.current.y;

    // Minimum swipe threshold of 45px and predominantly horizontal
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  if (!isOpen || !event || total === 0) return null;

  const currentImage = gallery[currentIndex];
  const formattedCurrent = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${event.title} photo gallery`}
      className="fixed inset-0 z-[100] bg-bbs-bg/80 dark:bg-black/85 backdrop-blur-md overflow-y-auto flex items-center justify-center p-3 sm:p-6 lg:p-8 select-none transition-all duration-300"
      onClick={(e) => {
        // Clicking outer backdrop directly closes the gallery
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Editorial Gallery Card Container */}
      <div 
        className="w-full max-w-5xl xl:max-w-6xl bg-bbs-surface border border-bbs-border rounded-xl shadow-2xl overflow-hidden flex flex-col my-auto transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. Compact Structured Editorial Header */}
        <header className="w-full px-4 sm:px-6 py-3.5 sm:py-4 border-b border-bbs-border bg-bbs-surface flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
          {/* Left: Category Badge & Title Metadata */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <span className="shrink-0 px-2.5 py-0.5 rounded text-xs font-semibold text-bbs-accent bg-bbs-raised border border-bbs-border uppercase tracking-wide">
              {event.category}
            </span>
            <div className="flex items-center gap-2 min-w-0">
              <h2 className="font-display font-bold text-sm sm:text-base lg:text-lg text-bbs-text truncate tracking-tight">
                {event.title}
              </h2>
              {event.formattedDate && (
                <span className="hidden md:inline-flex items-center gap-1 text-xs font-medium text-bbs-muted shrink-0">
                  <span>·</span>
                  <Calendar className="w-3.5 h-3.5 text-bbs-dim" />
                  <span>{event.formattedDate}</span>
                </span>
              )}
            </div>
          </div>

          {/* Right: Counter & Close Action */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0 ml-auto sm:ml-0">
            {/* Technical Image Counter */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-bbs-accent px-3 py-1 rounded bg-bbs-raised border border-bbs-border shadow-xs">
              <Camera className="w-3.5 h-3.5 text-bbs-accent" />
              <span>{formattedCurrent}</span>
              <span className="text-bbs-dim">/</span>
              <span>{formattedTotal}</span>
            </div>

            {/* Clear CLOSE GALLERY Action */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close gallery (Esc)"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold text-bbs-muted hover:text-bbs-text bg-bbs-raised hover:bg-bbs-hover border border-bbs-border hover:border-bbs-accent transition-all cursor-pointer group"
            >
              <span className="hidden sm:inline text-bbs-dim group-hover:text-bbs-text transition-colors">[ESC]</span>
              <span>CLOSE</span>
              <X className="w-4 h-4 text-bbs-muted group-hover:text-bbs-text transition-colors" />
            </button>
          </div>
        </header>

        {/* 2. Centered Primary Image Stage with Aligned Controls */}
        <div className="relative w-full bg-bbs-raised/30 dark:bg-bbs-raised/20 border-b border-bbs-border flex items-center justify-center p-4 sm:p-6 lg:p-8 min-h-[340px] sm:min-h-[440px] lg:min-h-[500px]">
          {/* Previous Button (Aligned directly inside stage) */}
          {total > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image (Left Arrow)"
              className="absolute left-3 sm:left-6 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-bbs-surface/90 hover:bg-bbs-accent border border-bbs-border hover:border-bbs-accent text-bbs-text hover:text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-md active:scale-95 cursor-pointer group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Centered Image with Clean Proportional Aspect Ratio */}
          <div className="relative flex items-center justify-center w-full max-h-[50vh] sm:max-h-[56vh] xl:max-h-[60vh]">
            <img
              key={`${event.id}-${currentIndex}`}
              src={currentImage}
              alt={`${event.title} - Photo ${currentIndex + 1} of ${total}`}
              className={`max-h-[50vh] sm:max-h-[56vh] xl:max-h-[60vh] max-w-full w-auto object-contain rounded-lg border border-bbs-border shadow-lg bg-bbs-surface ${
                direction === 'next' ? 'gallery-anim-next' : 'gallery-anim-prev'
              }`}
              draggable={false}
            />
          </div>

          {/* Next Button (Aligned directly inside stage) */}
          {total > 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image (Right Arrow)"
              className="absolute right-3 sm:right-6 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-bbs-surface/90 hover:bg-bbs-accent border border-bbs-border hover:border-bbs-accent text-bbs-text hover:text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-md active:scale-95 cursor-pointer group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>

        {/* 3. Clean Horizontal Thumbnail Rail */}
        {total > 1 && (
          <div className="w-full px-4 sm:px-6 py-3.5 bg-bbs-surface border-b border-bbs-border/60">
            <div
              ref={thumbnailRailRef}
              className="w-full flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto scrollbar-none py-1 px-1 snap-x"
            >
              {gallery.map((imgSrc, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToIndex(idx)}
                    aria-label={`Jump to photo ${idx + 1}`}
                    className={`relative shrink-0 w-14 h-11 sm:w-18 sm:h-13 rounded-md overflow-hidden border transition-all cursor-pointer snap-center bg-bbs-raised ${
                      isActive
                        ? 'border-bbs-accent ring-2 ring-bbs-accent/40 shadow-sm scale-105 opacity-100'
                        : 'border-bbs-border opacity-45 hover:opacity-90 hover:border-bbs-border-focus'
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. Compact Editorial Footer with Shortcuts & Context */}
        <footer className="w-full px-4 sm:px-6 py-2.5 bg-bbs-raised/40 flex items-center justify-between text-bbs-dim text-xs font-medium">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-bbs-accent inline-block" />
            <span className="text-bbs-text font-semibold">PHOTO {formattedCurrent} OF {formattedTotal}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Use ← / → to navigate</span>
            <span className="hidden sm:inline text-bbs-border">•</span>
            <span className="hidden sm:inline">ESC to close</span>
            <span className="sm:hidden">Swipe to navigate</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
