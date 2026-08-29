import React, { useState } from 'react';

export default function TerminalBlock({ onJoinClick }) {
  const [commandInput, setCommandInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'input', text: 'whoami' },
    { type: 'output', text: 'bbs_coding_club // student engineering collective' },
    { type: 'input', text: 'cat mission.txt' },
    { type: 'output', text: 'build things. learn together. ship relentlessly.' },
    { type: 'input', text: './status' },
    { type: 'output', text: '> REPOSITORIES: 15+ | STUDENTS: 500+ | NEXT HACKATHON: SIH INTERNAL 2026' }
  ]);

  const handleCommand = (cmdText) => {
    const trimmed = (cmdText || commandInput).trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'input', text: trimmed }];

    if (trimmed === 'help') {
      newHistory.push({
        type: 'output',
        text: 'AVAILABLE COMMANDS:\n  whoami          — print club identity\n  cat mission.txt — view club charter\n  status          — show active club telemetry\n  projects        — list active builds\n  join            — open membership portal\n  clear           — reset terminal window'
      });
    } else if (trimmed === 'whoami') {
      newHistory.push({ type: 'output', text: 'bbs_coding_club // verified engineering collective' });
    } else if (trimmed === 'cat mission.txt' || trimmed === 'mission') {
      newHistory.push({ type: 'output', text: 'build things. learn together. ship relentlessly.' });
    } else if (trimmed === 'status') {
      newHistory.push({ type: 'output', text: '> ALL SYSTEMS NOMINAL // COHORT 2026 ACTIVE' });
    } else if (trimmed === 'projects') {
      newHistory.push({ type: 'output', text: 'ACTIVE BUILDS:\n  01 CampusFlow (Distributed Systems)\n  02 AlgoArena (Sandbox Execution)\n  03 SIH Internal Tracker\n  04 bbs-cli (Developer Tooling)' });
    } else if (trimmed === 'join' || trimmed === './join-community') {
      newHistory.push({ type: 'output', text: '> ACCESS GRANTED // INITIATING ONBOARDING PROTOCOL...' });
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
    <section className="section-tight" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '980px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div className="section-meta" style={{ margin: 0 }}>
            <span>// EASTER EGG // CLUB CONSOLE</span>
          </div>

          {/* Quick command buttons */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['whoami', 'mission', 'status', 'help'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd === 'mission' ? 'cat mission.txt' : cmd)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  padding: '0.25rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)'
                }}
              >
                ${cmd}
              </button>
            ))}
          </div>
        </div>

        {/* Realistic Understated Terminal Frame */}
        <div 
          style={{
            backgroundColor: '#070707',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)'
          }}
        >
          {/* Terminal Titlebar */}
          <div 
            style={{
              padding: '0.65rem 1rem',
              backgroundColor: 'var(--surface)',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginLeft: '0.75rem' }}>
                bbs-sh — v1.0.4
              </span>
            </div>

            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-light)' }}>
              ONLINE // TTY: /dev/pts/0
            </span>
          </div>

          {/* Terminal Body */}
          <div 
            style={{
              padding: '1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--text)',
              maxHeight: '340px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}
          >
            {history.map((item, idx) => (
              <div key={idx} style={{ lineHeight: 1.5 }}>
                {item.type === 'input' ? (
                  <div style={{ display: 'flex', gap: '0.65rem', color: 'var(--text)' }}>
                    <span style={{ color: 'var(--accent-light)' }}>$</span>
                    <span>{item.text}</span>
                  </div>
                ) : (
                  <div style={{ color: 'var(--text-muted)', whiteSpace: 'pre-wrap', paddingLeft: '1.25rem' }}>
                    {item.text}
                  </div>
                )}
              </div>
            ))}

            {/* Input prompt line */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginTop: '0.5rem' }}>
              <label htmlFor="terminal-input" style={{ color: 'var(--accent-light)' }}>$</label>
              <input
                id="terminal-input"
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="type a command (e.g. 'help', 'join')..."
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem'
                }}
                autoComplete="off"
                spellCheck="false"
              />
              <span className="terminal-cursor" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
