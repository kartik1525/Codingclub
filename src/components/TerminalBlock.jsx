import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { TERMINAL_CONFIG } from '../data/home.js';

export default function TerminalBlock() {
  const [commandInput, setCommandInput] = useState('');
  const [history, setHistory] = useState(TERMINAL_CONFIG.initialHistory || []);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [pastCommands, setPastCommands] = useState([]);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to latest output when history changes
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdText) => {
    const raw = cmdText !== undefined ? cmdText : commandInput;
    const trimmed = raw.trim();
    if (!trimmed) return;

    const normalized = trimmed.toLowerCase();

    // Store in command recall history
    setPastCommands(prev => [trimmed, ...prev]);
    setHistoryIndex(-1);

    // Clear command handled specially
    if (normalized === 'clear') {
      setHistory([]);
      setCommandInput('');
      return;
    }

    const newEntries = [...history, { type: 'input', text: trimmed }];

    if (TERMINAL_CONFIG.commandResponses[normalized]) {
      newEntries.push({
        type: 'output',
        text: TERMINAL_CONFIG.commandResponses[normalized]
      });
    } else {
      newEntries.push({
        type: 'output',
        text: `command not found: ${trimmed}\n\nType "help" to see available commands.`
      });
    }

    setHistory(newEntries);
    setCommandInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(commandInput);
  };

  // Keyboard navigation for command recall (ArrowUp / ArrowDown)
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCommands.length === 0) return;
      const nextIndex = Math.min(historyIndex + 1, pastCommands.length - 1);
      setHistoryIndex(nextIndex);
      setCommandInput(pastCommands[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setCommandInput(pastCommands[nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCommandInput('');
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <section className="py-16 sm:py-24 border-t border-bbs-border bg-bbs-bg relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-bbs-accent tracking-wide uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-sm bg-bbs-accent inline-block" aria-hidden="true" />
              <span>{TERMINAL_CONFIG.badge}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-bbs-text leading-tight mb-2">
              {TERMINAL_CONFIG.title}
            </h2>
            <p className="text-sm sm:text-base text-bbs-muted max-w-xl leading-relaxed">
              {TERMINAL_CONFIG.description}
            </p>
          </div>

          {/* Quick Command Chips */}
          <div className="flex flex-wrap items-center gap-1.5 shrink-0">
            <span className="text-xs font-medium text-bbs-dim mr-1 hidden sm:inline">Try:</span>
            {TERMINAL_CONFIG.quickCommands.map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => handleCommand(cmd)}
                className="font-mono text-xs px-2.5 py-1 rounded bg-bbs-surface border border-bbs-border text-bbs-accent hover:text-bbs-text hover:border-bbs-accent transition-colors cursor-pointer shadow-xs"
              >
                ${cmd}
              </button>
            ))}
          </div>
        </div>

        {/* Polished Terminal Window */}
        <div 
          onClick={focusInput}
          className="bg-[#0b0f17] border border-bbs-border rounded-xl overflow-hidden shadow-2xl transition-all cursor-text"
        >
          {/* Terminal Titlebar */}
          <div className="px-4 py-3 bg-[#0f141f] border-b border-bbs-border/80 flex items-center justify-between select-none">
            {/* Left: Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ef4444] inline-block shadow-xs" />
              <span className="w-3 h-3 rounded-full bg-[#f59e0b] inline-block shadow-xs" />
              <span className="w-3 h-3 rounded-full bg-[#10b981] inline-block shadow-xs" />
              <span className="font-mono text-xs text-slate-400 font-medium ml-3 hidden sm:inline">
                {TERMINAL_CONFIG.headerTitle}
              </span>
            </div>

            {/* Right: Online Status */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span className="font-mono text-[11px] font-bold text-emerald-400 tracking-wider">
                {TERMINAL_CONFIG.statusText}
              </span>
            </div>
          </div>

          {/* Terminal Body & Stream */}
          <div 
            ref={terminalBodyRef}
            className="p-5 sm:p-6 font-mono text-xs sm:text-sm text-slate-200 min-h-[260px] max-h-[420px] overflow-y-auto flex flex-col gap-3 scrollbar-thin scrollbar-thumb-bbs-border"
          >
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'input' ? (
                  <div className="flex items-center gap-2 text-slate-100 font-semibold">
                    <span className="text-bbs-accent font-bold">$</span>
                    <span>{item.text}</span>
                  </div>
                ) : (
                  <div className="text-slate-300/90 whitespace-pre-wrap pl-4 border-l-2 border-bbs-border/50 py-1 my-1">
                    {item.text}
                  </div>
                )}
              </div>
            ))}

            {/* Active Command Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2 pt-2">
              <label htmlFor="terminal-command-input" className="text-bbs-accent font-bold select-none">
                $
              </label>
              <input
                ref={inputRef}
                id="terminal-command-input"
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. 'help', 'learn', 'team')..."
                className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs sm:text-sm placeholder:text-slate-600 focus:ring-0 p-0"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <button
                type="submit"
                aria-label="Execute command"
                className="text-slate-500 hover:text-bbs-accent transition-colors shrink-0 p-1 cursor-pointer"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Discovery Footer under Terminal */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-bbs-muted px-1">
          <div className="flex items-center gap-1.5 font-mono">
            <span>Not sure where to start?</span>
            <span>Type</span>
            <button
              type="button"
              onClick={() => handleCommand('help')}
              className="text-bbs-accent font-semibold underline underline-offset-2 hover:text-bbs-text transition-colors cursor-pointer"
            >
              help
            </button>
            <span>or use the buttons above.</span>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-1 font-semibold text-bbs-accent hover:text-bbs-text transition-colors group"
          >
            <span>EXPLORE THE CLUB</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
