import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { KeyRound, ShieldCheck, ArrowRight, RefreshCw, Smartphone, Globe, Lock } from 'lucide-react';

export const OAuthFlowVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: '1. PKCE Challenge Generation',
      badge: 'Client Side',
      desc: 'Client creates random 128-byte code_verifier and computes SHA-256 code_challenge.',
      details: {
        method: 'S256',
        challenge: 'E9Melhoa2OwvFrGMTJguCH5...q0Wj',
        scope: 'openid profile email offline_access'
      }
    },
    {
      title: '2. User Authorization',
      badge: 'Zenuxs Accounts',
      desc: 'User authenticates at https://zenuxs.in/oauth/authorize with 2FA protection.',
      details: {
        endpoint: 'https://zenuxs.in/oauth/authorize',
        response_type: 'code',
        authStatus: 'Consent Granted'
      }
    },
    {
      title: '3. Token Exchange & Proof',
      badge: 'Token Endpoint',
      desc: 'Authorization code exchanged for JWT access token + refresh token with PKCE verification.',
      details: {
        grant_type: 'authorization_code',
        token_type: 'Bearer',
        expires_in: 3600
      }
    },
    {
      title: '4. Authenticated Session',
      badge: 'Protected API',
      desc: 'Client attaches token to requests. Zenuxs SDK handles silent background rotation.',
      details: {
        header: 'Authorization: Bearer zx_at_9948c...',
        rotation: 'Silent background refresh at T-300s',
        status: 'Active Session Verified'
      }
    }
  ];

  return (
    <div className="w-full rounded-xl border border-border bg-graphite p-5 sm:p-6 shadow-2xl space-y-6">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-lg bg-ember/10 border border-ember/20 text-ember">
            <KeyRound className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-base">
              Zenuxs Accounts — OAuth 2.0 + PKCE Flow
            </h4>
            <p className="text-xs text-ash font-mono">RFC 7636 Proof Key Protocol</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-[11px] font-mono text-emerald bg-emerald/10 px-2 py-1 rounded border border-emerald/20">
            <ShieldCheck className="w-3.5 h-3.5" /> PKCE Protected
          </span>
        </div>
      </div>

      {/* Step Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`text-left p-3 rounded-lg border text-xs transition-all ${
              activeStep === idx
                ? 'bg-iron border-ember text-white shadow-md'
                : 'bg-carbon border-border text-ash hover:text-fog'
            }`}
          >
            <span className="font-mono text-[10px] text-ember block mb-1 font-bold">
              STEP 0{idx + 1}
            </span>
            <span className="font-semibold block truncate">{step.title}</span>
          </button>
        ))}
      </div>

      {/* Interactive Visual Canvas */}
      <div className="rounded-lg bg-void border border-border/80 p-4 sm:p-5 font-mono text-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-ash text-[11px] border-b border-border/40 pb-2">
          <span>Active State: <span className="text-white font-bold">{steps[activeStep].title}</span></span>
          <span className="text-indigo bg-indigo/10 px-2 py-0.5 rounded border border-indigo/20">
            {steps[activeStep].badge}
          </span>
        </div>

        <p className="text-sm text-fog leading-relaxed font-sans">
          {steps[activeStep].desc}
        </p>

        {/* Payload / Protocol Inspector */}
        <div className="bg-carbon rounded-md p-3.5 border border-border space-y-2 text-xs">
          <div className="text-[11px] text-steel uppercase tracking-wider font-bold">
            Protocol Payload:
          </div>
          {Object.entries(steps[activeStep].details).map(([key, val]) => (
            <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-border/30 last:border-0">
              <span className="text-ash">{key}:</span>
              <span className="text-white font-semibold break-all">{String(val)}</span>
            </div>
          ))}
        </div>

        {/* Dynamic Multi-Platform Node Visual */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 text-center">
          <div className={`p-3 rounded-lg border transition-all ${activeStep === 0 ? 'border-ember bg-ember/5 text-white' : 'border-border bg-carbon text-ash'}`}>
            <Globe className="w-4 h-4 mx-auto mb-1 text-indigo" />
            <span className="text-[11px] block font-semibold">Web / App</span>
            <span className="text-[9px] text-steel">Client Initiator</span>
          </div>
          <div className={`p-3 rounded-lg border transition-all ${activeStep === 1 || activeStep === 2 ? 'border-ember bg-ember/5 text-white' : 'border-border bg-carbon text-ash'}`}>
            <Lock className="w-4 h-4 mx-auto mb-1 text-ember" />
            <span className="text-[11px] block font-semibold">Zenuxs Auth</span>
            <span className="text-[9px] text-steel">Identity Gateway</span>
          </div>
          <div className={`p-3 rounded-lg border transition-all ${activeStep === 3 ? 'border-emerald bg-emerald/5 text-white' : 'border-border bg-carbon text-ash'}`}>
            <RefreshCw className="w-4 h-4 mx-auto mb-1 text-emerald animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-[11px] block font-semibold">Token Engine</span>
            <span className="text-[9px] text-steel">Silent Refresh</span>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between text-xs pt-1">
        <button
          onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
          className="text-ash hover:text-white px-3 py-1.5 rounded bg-carbon hover:bg-iron transition-colors"
        >
          ← Previous Step
        </button>
        <div className="flex space-x-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                activeStep === i ? 'bg-ember' : 'bg-iron'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
          className="text-white hover:text-ember px-3 py-1.5 rounded bg-carbon hover:bg-iron transition-colors font-semibold flex items-center gap-1"
        >
          Next Step <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
