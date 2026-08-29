import React from 'react';

export default function Marquee() {
  const items = [
    "BUILD",
    "LEARN",
    "COMPETE",
    "CREATE",
    "COLLABORATE",
    "SHIP",
    "DEBUG",
    "DEPLOY"
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <aside 
      aria-label="Core values ticker" 
      className="border-b border-bbs-border bg-bbs-surface overflow-hidden py-4 select-none group"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {repeated.map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-8 pr-8"
          >
            <span 
              className={`font-mono text-sm sm:text-base font-semibold tracking-widest ${
                idx % 3 === 0 ? 'text-bbs-text' : 'text-bbs-muted'
              }`}
            >
              {item}
            </span>
            <span className="text-bbs-accent-light text-sm opacity-60">
              •
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
