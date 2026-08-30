import React, { useState } from 'react';

export default function TerminalBlock({ onJoinClick }) {
  const [commandInput, setCommandInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'input', text: 'whoami' },
    { type: 'output', text: 'bbs_coding_club: student developer community' },
    { type: 'input', text: 'cat mission.txt' },
    { type: 'output', text: 'build things that work. learn with friends. ship code before graduation.' },
    { type: 'input', text: './status' },
    { type: 'output', text: '> SIH 2026 Track: Active | Discord: Online | CS Lab 02' }
  ]);

  const handleCommand = (cmdText) => {
    const trimmed = (cmdText || commandInput).trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'input', text: trimmed }];

    if (trimmed === 'help') {
      newHistory.push({
        type: 'output',
        text: 'AVAILABLE COMMANDS:\n  whoami          — print community identity\n  cat mission.txt — view club charter\n  status          — show upcoming tracks\n  projects        — list active student builds\n  join            — open membership signup\n  clear           — reset terminal screen'
      });
    } else if (trimmed === 'whoami') {
      newHistory.push({ type: 'output', text: 'bbs_coding_club: student developer community at BBS' });
    } else if (trimmed === 'cat mission.txt' || trimmed === 'mission') {
      newHistory.push({ type: 'output', text: 'build things that work. learn with friends. ship code before graduation.' });
    } else if (trimmed === 'status') {
      newHistory.push({ type: 'output', text: '> All squads active. Fall 2026 signups open.' });
    } else if (trimmed === 'projects') {
      newHistory.push({ type: 'output', text: 'ACTIVE REPOSITORIES:\n  01 bbs-official-web (React + Custom CSS Design System)\n  02 sih-eval-hub (Hackathon Judging Dashboard Prototype)\n  03 student-submissions (Open Call for Member Projects)' });
    } else if (trimmed === 'join' || trimmed === './join-community') {
      newHistory.push({ type: 'output', text: '> OPENING APPLICATION FORM...' });
      onJoinClick();
    } else if (trimmed === 'clear') {
      setHistory([]);
      setCommandInput('');
      return;
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
          <div className="flex items-center gap-2 font-mono text-xs text-bbs-accent-light tracking-wider uppercase">
            <span className="w-1.5 h-1.5 bg-bbs-accent rounded-sm inline-block"></span>
            <span>STUDENT CONSOLE</span>
          </div>

          {/* Quick command buttons */}
          <div className="flex gap-2 flex-wrap">
            {['whoami', 'mission', 'status', 'help'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd === 'mission' ? 'cat mission.txt' : cmd)}
                className="font-mono text-[11px] px-2 py-1 rounded bg-bbs-surface border border-bbs-border text-bbs-muted hover:text-bbs-text hover:border-bbs-border-focus transition-colors"
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
                bbs-sh — v1.0.4
              </span>
            </div>

            <span className="font-mono text-[11px] text-bbs-accent-light">
              LAB TTY: /dev/pts/0
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
