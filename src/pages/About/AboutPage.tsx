import React from 'react';
import ShinyPill from '../../components/originkit/ui/shiny-pill';
import { Sparkles, ShieldCheck, Heart, Layers, ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 space-y-16">
      {/* Header */}
      <div className="space-y-4 pt-4">
        <div className="inline-flex items-center space-x-2 font-mono text-xs text-ember uppercase tracking-widest bg-ember/10 border border-ember/25 px-3 py-1 rounded">
          <Sparkles className="w-3.5 h-3.5 text-ember" />
          <ShinyPill
            text="ABOUT ZENUXS PLATFORM"
            textColor="#da5c2c"
            shineColor="#ffffff"
            speed={2.2}
            font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
          />
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-6xl text-white">
          Built For Builders.
        </h1>

        <p className="font-sans text-fog text-base sm:text-lg max-w-3xl leading-relaxed">
          Zenuxs started with a simple realization: developers spend too much time rebuilding the same identity, security, database, and infrastructure glue code across every project.
        </p>
      </div>

      {/* Philosophy Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
        <div className="p-8 rounded-xl border border-border bg-carbon space-y-4 shadow-xl">
          <div className="p-3 rounded-lg bg-ember/10 border border-ember/20 text-ember w-fit">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="font-display text-xl font-bold text-white">Modular & Standalone</h3>
          <p className="font-sans text-fog text-sm leading-relaxed">
            Every library functions autonomously. You don't have to adopt the entire Zenuxs ecosystem to benefit from Easy-Mongoo or HMAX-SECURE.
          </p>
        </div>

        <div className="p-8 rounded-xl border border-border bg-carbon space-y-4 shadow-xl">
          <div className="p-3 rounded-lg bg-indigo/10 border border-indigo/20 text-indigo w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-display text-xl font-bold text-white">Cryptographically Audited</h3>
          <p className="font-sans text-fog text-sm leading-relaxed">
            Security and authentication are foundational, not marketing afterthought checkboxes. We adhere to RFC standards (RFC 7636 PKCE, RFC 8628 Device Auth).
          </p>
        </div>

        <div className="p-8 rounded-xl border border-border bg-carbon space-y-4 shadow-xl">
          <div className="p-3 rounded-lg bg-emerald/10 border border-emerald/20 text-emerald w-fit">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="font-display text-xl font-bold text-white">Permissive Open Source</h3>
          <p className="font-sans text-fog text-sm leading-relaxed">
            Transparent codebases licensed under MIT and Apache-2.0, giving developers complete sovereignty over their infrastructure.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-10 rounded-xl border border-border bg-graphite flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-1">
          <h3 className="font-display text-2xl font-bold text-white">
            Ready to explore the ecosystem?
          </h3>
          <p className="text-fog text-sm font-sans max-w-xl">
            Inspect our verified packages, browse open-source repositories, or connect with our builder community.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <Link
            to="/products"
            className="px-6 py-3 rounded-lg bg-ember hover:bg-ember-hover text-white font-semibold shadow-lg shadow-ember/20 transition-all cursor-pointer"
          >
            Explore Products
          </Link>
          <Link
            to="/opensource"
            className="px-6 py-3 rounded-lg bg-carbon hover:bg-iron text-white border border-border transition-colors cursor-pointer"
          >
            View Repositories
          </Link>
        </div>
      </div>
    </div>
  );
};
