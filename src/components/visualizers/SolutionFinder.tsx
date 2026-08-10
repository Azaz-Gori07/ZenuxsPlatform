import React, { useState } from 'react';
import { products } from '../../data/products';
import { Product } from '../../types/product';
import { ArrowRight, Check, ExternalLink, Sparkles } from 'lucide-react';

export const SolutionFinder: React.FC = () => {
  const problems = [
    {
      id: 'auth',
      label: 'Authentication & OAuth 2.0',
      tagline: 'Need secure user logins with PKCE, session management, or multi-platform auth?',
      productSlug: 'accounts'
    },
    {
      id: 'db',
      label: 'Database Schema & MongoDB',
      tagline: 'Need an ergonomic, lightweight ODM with soft-delete and typed schemas?',
      productSlug: 'easy-mongoo'
    },
    {
      id: 'security',
      label: 'Password Hashing & Pepper Security',
      tagline: 'Need GPU-resistant Argon2id + HMAC-SHA512 layered protection with zero deps?',
      productSlug: 'hmax'
    },
    {
      id: 'ai',
      label: 'AI Coding & Persistent Context',
      tagline: 'Need cross-model memory and an intelligent development workspace?',
      productSlug: 'code'
    },
    {
      id: 'infra',
      label: 'Edge Hosting & Fast DNS',
      tagline: 'Need sub-30ms global routing, automated SSL, and instant DNS propagation?',
      productSlug: 'hosting'
    },
    {
      id: 'minecraft',
      label: 'Minecraft Server Auth & Web Bridge',
      tagline: 'Need in-game player authentication with web dashboards and 2FA recovery?',
      productSlug: 'plugins'
    }
  ];

  const [selectedProblem, setSelectedProblem] = useState(problems[0]);
  const matchedProduct: Product | undefined = products.find(
    (p) => p.slug === selectedProblem.productSlug
  );

  return (
    <div className="w-full rounded-xl border border-border bg-graphite p-5 sm:p-7 shadow-2xl space-y-6">
      {/* Header */}
      <div className="space-y-1 border-b border-border/60 pb-4">
        <span className="font-mono text-xs text-ember uppercase tracking-wider font-bold flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Interactive Ecosystem Matcher
        </span>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
          What problem are you solving right now?
        </h3>
        <p className="text-sm text-ash">
          Pick your immediate need. You don't have to adopt the entire ecosystem at once.
        </p>
      </div>

      {/* Problem Selection Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {problems.map((prob) => {
          const isSelected = prob.id === selectedProblem.id;
          return (
            <button
              key={prob.id}
              onClick={() => setSelectedProblem(prob)}
              className={`p-3.5 rounded-lg border text-left transition-all ${
                isSelected
                  ? 'bg-iron border-ember shadow-lg text-white'
                  : 'bg-carbon border-border/80 text-ash hover:text-fog hover:border-border-hover'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-display font-semibold text-xs sm:text-sm text-white">
                  {prob.label}
                </span>
                {isSelected && <Check className="w-4 h-4 text-ember flex-shrink-0" />}
              </div>
              <p className="text-[11px] text-ash leading-relaxed line-clamp-2">
                {prob.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Matched Product Output Card */}
      {matchedProduct && (
        <div className="rounded-lg bg-void border border-border p-5 space-y-4 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-3">
            <div>
              <span className="text-[10px] text-steel uppercase tracking-widest font-bold block mb-0.5">
                RECOMMENDED ZENUXS COMPONENT
              </span>
              <h4 className="font-display text-lg font-bold text-white">
                {matchedProduct.name}
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald bg-emerald/10 px-2.5 py-1 rounded text-xs border border-emerald/20">
                {matchedProduct.status.toUpperCase()}
              </span>
              {matchedProduct.openSource && (
                <span className="text-fog bg-iron px-2.5 py-1 rounded text-xs border border-border">
                  OPEN SOURCE
                </span>
              )}
            </div>
          </div>

          <p className="text-fog text-sm font-sans leading-relaxed">
            {matchedProduct.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {matchedProduct.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="p-3 rounded bg-carbon border border-border/60">
                <span className="text-white font-semibold block mb-0.5">{feat.title}</span>
                <span className="text-ash text-[11px] font-sans">{feat.description}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <span className="text-ash text-[11px]">
              Ready to integrate? Start with single package or SDK.
            </span>
            <div className="flex items-center space-x-2">
              {matchedProduct.docsUrl && (
                <a
                  href={matchedProduct.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-iron hover:bg-border text-white text-xs transition-colors flex items-center gap-1"
                >
                  <span>Read Docs</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <a
                href={matchedProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded bg-ember hover:bg-ember-hover text-white text-xs font-semibold transition-colors flex items-center gap-1"
              >
                <span>Launch {matchedProduct.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
