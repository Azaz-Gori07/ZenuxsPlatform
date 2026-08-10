import React, { useState } from 'react';
import { Lock, ShieldAlert, Cpu, CheckCircle2, ArrowRight, RefreshCw } from 'lucide-react';

export const HmaxCryptoPipeline: React.FC = () => {
  const [password, setPassword] = useState('super_secure_pass_2026');
  const [isHashing, setIsHashing] = useState(false);
  const [hashOutput, setHashOutput] = useState('$v2$argon2id$m=65536,t=3,p=4$q8J...71f$9d8a2...3b1');
  const [verifiedTime, setVerifiedTime] = useState('12.4ms');

  const recomputeHash = () => {
    setIsHashing(true);
    setTimeout(() => {
      // Simulate real deterministic-looking HMAC-Argon2 hash
      const randomChunk = Math.random().toString(36).substring(2, 10);
      setHashOutput(`$v2$argon2id$m=65536,t=3,p=4$zx_${randomChunk}...sealed`);
      setVerifiedTime((10 + Math.random() * 5).toFixed(1) + 'ms');
      setIsHashing(false);
    }, 300);
  };

  return (
    <div className="w-full rounded-xl border border-border bg-graphite p-5 sm:p-6 shadow-2xl space-y-5">
      {/* Title Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-ember/10 border border-ember/20 text-ember">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-base">
              HMAX-SECURE — Layered Cryptographic Pipeline
            </h4>
            <p className="text-xs text-ash font-mono">HMAC-SHA512 Pepper + Argon2id / PBKDF2</p>
          </div>
        </div>
        <span className="text-[11px] font-mono text-emerald bg-emerald/10 px-2.5 py-1 rounded border border-emerald/20 flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" /> Timing-Safe Equal
        </span>
      </div>

      {/* Interactive Input */}
      <div className="space-y-2">
        <label className="text-xs text-ash font-mono flex items-center justify-between">
          <span>Test Input Password:</span>
          <span className="text-steel">Audited for GPU resistance</span>
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              recomputeHash();
            }}
            className="flex-1 bg-void border border-border rounded-lg px-3.5 py-2 text-xs sm:text-sm font-mono text-white focus:outline-none focus:border-ember transition-colors"
            placeholder="Type a password..."
          />
          <button
            onClick={recomputeHash}
            disabled={isHashing}
            className="flex items-center gap-1.5 bg-ember hover:bg-ember-hover text-white font-mono text-xs font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isHashing ? 'animate-spin' : ''}`} />
            <span>Hash</span>
          </button>
        </div>
      </div>

      {/* 4-Stage Security Architecture Diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs">
        <div className="p-3 rounded-lg bg-carbon border border-border/80 space-y-1">
          <div className="text-ember font-bold text-[10px]">STAGE 01</div>
          <div className="text-white font-semibold text-xs">Salt Injection</div>
          <div className="text-[11px] text-ash">32-byte CSPRNG random cryptographic nonce</div>
        </div>
        <div className="p-3 rounded-lg bg-carbon border border-border/80 space-y-1">
          <div className="text-indigo font-bold text-[10px]">STAGE 02</div>
          <div className="text-white font-semibold text-xs">Pepper Secret</div>
          <div className="text-[11px] text-ash">Application-level key isolated outside database</div>
        </div>
        <div className="p-3 rounded-lg bg-carbon border border-border/80 space-y-1">
          <div className="text-emerald font-bold text-[10px]">STAGE 03</div>
          <div className="text-white font-semibold text-xs">Argon2id KDF</div>
          <div className="text-[11px] text-ash">64MB memory-hard matrix, 3 iterations</div>
        </div>
        <div className="p-3 rounded-lg bg-carbon border border-border/80 space-y-1">
          <div className="text-white font-bold text-[10px]">STAGE 04</div>
          <div className="text-white font-semibold text-xs">HMAC Envelope</div>
          <div className="text-[11px] text-ash">SHA-512 seal with versioned migration header</div>
        </div>
      </div>

      {/* Hash Output Canvas */}
      <div className="rounded-lg bg-void border border-border p-4 font-mono text-xs space-y-3">
        <div className="flex items-center justify-between text-[11px] text-steel">
          <span>Final Sealed Hash Representation:</span>
          <span className="text-emerald flex items-center gap-1">
            <Cpu className="w-3 h-3" /> Verifies in {verifiedTime}
          </span>
        </div>
        <div className="p-2.5 rounded bg-carbon border border-border/60 text-ember font-mono text-xs sm:text-sm break-all select-all">
          {hashOutput}
        </div>
        <p className="text-xs text-ash font-sans leading-relaxed">
          If your database is compromised, attackers cannot perform offline GPU brute-force attacks because the pepper key remains secured in application memory.
        </p>
      </div>
    </div>
  );
};
