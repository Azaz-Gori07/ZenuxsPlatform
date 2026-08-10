import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, Copy, Check } from 'lucide-react';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
  time: string;
}

export const TerminalSimulator: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'zenuxs --version',
      output: (
        <div className="text-fog font-mono text-xs space-y-1">
          <p className="text-ember font-bold">Zenuxs CLI v2.4.0 (x86_64-linux-gnu)</p>
          <p>Ecosystem orchestration & developer environment tool</p>
        </div>
      ),
      time: '10:00:01'
    },
    {
      command: 'zenuxs auth status',
      output: (
        <div className="text-fog font-mono text-xs space-y-1">
          <p className="text-emerald flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
            Authenticated: dev@zenuxs.in [OAuth 2.0 PKCE active]
          </p>
          <p className="text-ash">Session ID: zx_sess_89f02c91b44</p>
        </div>
      ),
      time: '10:00:15'
    }
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const runCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const time = new Date().toTimeString().split(' ')[0];
    let res: React.ReactNode = null;

    const cmdLower = trimmed.toLowerCase();

    if (cmdLower === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmdLower === 'zenuxs login' || cmdLower === 'login') {
      res = (
        <div className="space-y-1.5 text-xs text-fog">
          <p className="text-indigo">Initiating OAuth 2.0 + PKCE Device Authorization Flow...</p>
          <p className="text-white">Opening verification URI: <span className="text-ember underline">https://zenuxs.in/device</span></p>
          <p className="text-ash">User Code: <span className="text-white font-bold bg-iron px-1.5 py-0.5 rounded">ZX9-881-DEV</span></p>
          <p className="text-emerald">✓ Successfully linked to Zenuxs Accounts. Token stored in keychain.</p>
        </div>
      );
    } else if (cmdLower.startsWith('zenuxs create') || cmdLower.startsWith('create') || cmdLower.startsWith('zenuxs init')) {
      res = (
        <div className="space-y-1 text-xs text-fog">
          <p className="text-emerald">✓ Initializing new Zenuxs fullstack stack...</p>
          <p className="text-ash">📦 Installing @zenuxs/oauth, easy-mongoo, and hmax-secure...</p>
          <p className="text-ash">⚙️ Configuring TypeScript schemas & security pepper...</p>
          <p className="text-white font-bold">✨ Project ready at ./zenuxs-app</p>
          <p className="text-fog">Run: <span className="text-ember">cd zenuxs-app && npm run dev</span></p>
        </div>
      );
    } else if (cmdLower === 'hmax verify') {
      res = (
        <div className="space-y-1 text-xs text-fog">
          <p className="text-ember">Running HMAX cryptographic pipeline test...</p>
          <p className="text-ash">Salt: 32 bytes (CSPRNG) | Pepper: SHA-512 Sealed</p>
          <p className="text-ash">KDF: Argon2id (m=65536, t=3, p=4)</p>
          <p className="text-emerald">✓ Timing-safe verification: Match verified in 14.2ms</p>
        </div>
      );
    } else if (cmdLower === 'easy-mongoo status' || cmdLower === 'db') {
      res = (
        <div className="space-y-1 text-xs text-fog">
          <p className="text-emerald">✓ Connected to MongoDB Cluster via Easy-Mongoo ODM</p>
          <p className="text-ash">Registered Schemas: User, Session, AccessToken, LogEntry</p>
          <p className="text-ash">Active Transactions: 0 | Soft-Delete Engine: Enabled</p>
        </div>
      );
    } else if (cmdLower === 'help' || cmdLower === 'zenuxs help') {
      res = (
        <div className="space-y-1 text-xs text-fog">
          <p className="text-white font-bold">Available Zenuxs CLI Commands:</p>
          <p><span className="text-ember font-mono">zenuxs login</span> - Authenticate via Zenuxs Accounts PKCE</p>
          <p><span className="text-ember font-mono">zenuxs create &lt;app&gt;</span> - Scaffold fullstack project</p>
          <p><span className="text-ember font-mono">easy-mongoo status</span> - Check database models & connection</p>
          <p><span className="text-ember font-mono">hmax verify</span> - Test password hashing & pepper pipeline</p>
          <p><span className="text-ember font-mono">clear</span> - Clear terminal window</p>
        </div>
      );
    } else {
      res = (
        <p className="text-rose-400 text-xs">
          Command not recognized: "{trimmed}". Type <span className="text-white font-bold">help</span> for available commands.
        </p>
      );
    }

    setHistory((prev) => [...prev, { command: trimmed, output: res, time }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
    }
  };

  const copySample = () => {
    navigator.clipboard.writeText('npm install -g zenuxs-cli\nzenuxs login\nzenuxs create my-app');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl border border-border bg-void/95 shadow-2xl overflow-hidden font-mono">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-graphite border-b border-border/80 text-xs text-ash">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/30"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/30"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/30"></div>
          </div>
          <span className="font-semibold text-fog pl-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-ember" /> zenuxs-cli — interactive shell
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={copySample}
            className="flex items-center gap-1 text-[11px] hover:text-white px-2 py-1 bg-iron rounded transition-colors"
            title="Copy command"
          >
            {copied ? <Check className="w-3 h-3 text-emerald" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
          <button
            onClick={() => setHistory([])}
            className="flex items-center gap-1 text-[11px] hover:text-white px-2 py-1 bg-iron rounded transition-colors"
            title="Clear terminal"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 h-[340px] overflow-y-auto space-y-4 text-xs sm:text-sm">
        <div className="text-ash text-xs border-b border-border/40 pb-2 flex justify-between items-center">
          <span>Type <code className="text-ember font-bold">help</code>, <code className="text-ember font-bold">login</code>, <code className="text-ember font-bold">create</code>, or <code className="text-ember font-bold">hmax verify</code></span>
          <span className="text-emerald flex items-center gap-1">● Terminal Live</span>
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center space-x-2 text-fog">
              <span className="text-ember font-bold">~ ❯</span>
              <span className="text-white font-semibold">{item.command}</span>
              <span className="text-[10px] text-steel ml-auto">{item.time}</span>
            </div>
            <div className="pl-5 pt-0.5">{item.output}</div>
          </div>
        ))}

        {/* Input Prompt */}
        <div className="flex items-center space-x-2 text-fog pt-1">
          <span className="text-ember font-bold">~ ❯</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command here and press Enter..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-steel text-xs sm:text-sm"
          />
          <button
            onClick={() => runCommand(input)}
            className="text-ash hover:text-ember transition-colors p-1"
          >
            <Play className="w-3.5 h-3.5" />
          </button>
        </div>
        <div ref={bottomRef} />
      </div>

      {/* Terminal Footer Suggestions */}
      <div className="px-4 py-2.5 bg-carbon border-t border-border/60 flex flex-wrap gap-2 items-center text-[11px] text-ash">
        <span>Quick Run:</span>
        {['zenuxs login', 'zenuxs create my-app', 'hmax verify', 'easy-mongoo status'].map((qCmd) => (
          <button
            key={qCmd}
            onClick={() => runCommand(qCmd)}
            className="px-2 py-0.5 rounded bg-iron hover:bg-border text-fog hover:text-white transition-colors"
          >
            {qCmd}
          </button>
        ))}
      </div>
    </div>
  );
};
