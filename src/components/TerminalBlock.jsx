import React, { useState } from 'react';
import { TERMINAL_CONFIG } from '../data/home.js';

export default function TerminalBlock({ onJoinClick }) {
  const [commandInput, setCommandInput] = useState('');
  const [history, setHistory] = useState(TERMINAL_CONFIG.initialHistory);

  const handleCommand = (cmdText) => {
    const trimmed = (cmdText || commandInput).trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'input', text: trimmed }];

    if (trimmed === 'clear') {
      setHistory([]);
      setCommandInput('');
      return;
    }

    if (trimmed === 'join' || trimmed === './join-community') {
      newHistory.push({ type: 'output', text: TERMINAL_CONFIG.commandResponses.join || '> OPENING APPLICATION FORM...' });
      if (typeof onJoinClick === 'function') {
        onJoinClick();
      }
    } else if (TERMINAL_CONFIG.commandResponses[trimmed]) {
      newHistory.push({
        type: 'output',
        text: TERMINAL_CONFIG.commandResponses[trimmed]
      });
    } else if (trimmed === 'cat mission.txt') {
      newHistory.push({
        type: 'output',
        text: TERMINAL_CONFIG.commandResponses.mission
      });
    } else {
      newHistory.push({ type: 'output', text: `command not found: "${trimmed}". type "help" for valid options.` });
    }

    setHistory(newHistory);
    setCommandInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(commandInput);
  };

  return (
    <section className="py-14 border-t border-bbs-border">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 w-full">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-bbs-accent tracking-wide uppercase">
            <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block"></span>
            <span>{TERMINAL_CONFIG.badge}</span>
          </div>

          {/* Quick command buttons */}
          <div className="flex gap-2 flex-wrap">
            {TERMINAL_CONFIG.quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd === 'mission' ? 'cat mission.txt' : cmd)}
                className="font-mono text-[11px] px-2 py-1 rounded bg-bbs-surface border border-bbs-border text-bbs-muted hover:text-bbs-text hover:border-bbs-border-focus transition-colors cursor-pointer"
              >
                ${cmd}
              </button>
            ))}
          </div>
        </div>

        {/* Realistic Understated Terminal Frame */}
        <div className="bg-[#070707] border border-bbs-border rounded overflow-hidden shadow-2xl">
          {/* Terminal Titlebar */}
          <div className="px-4 py-2.5 bg-bbs-surface border-b border-bbs-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <span className="font-mono text-xs text-bbs-dim ml-3">
                {TERMINAL_CONFIG.version}
              </span>
            </div>

            <span className="font-mono text-[11px] text-bbs-accent-light">
              {TERMINAL_CONFIG.tty}
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-5 font-mono text-xs sm:text-sm text-bbs-text max-h-80 overflow-y-auto flex flex-col gap-2">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'input' ? (
                  <div className="flex gap-2 text-bbs-text">
                    <span className="text-bbs-accent-light">$</span>
                    <span>{item.text}</span>
                  </div>
                ) : (
                  <div className="text-bbs-muted whitespace-pre-wrap pl-4">
                    {item.text}
                  </div>
                )}
              </div>
            ))}

            {/* Input prompt line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
              <label htmlFor="terminal-input" className="text-bbs-accent-light">$</label>
              <input
                id="terminal-input"
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="try 'help', 'status', 'projects'..."
                className="flex-1 bg-transparent border-none outline-none text-bbs-text font-mono text-xs sm:text-sm focus:ring-0"
                autoComplete="off"
                spellCheck="false"
              />
              <span className="inline-block w-2 h-4 bg-bbs-accent-light animate-cursor-blink" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
