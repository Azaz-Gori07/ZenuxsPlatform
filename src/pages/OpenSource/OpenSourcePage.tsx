import React, { useState } from 'react';
import { repositories } from '../../data/repositories';
import ShinyPill from '../../components/originkit/ui/shiny-pill';
import { Star, GitFork, ExternalLink, Code2, Heart, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../../components/ui/Icons';

export const OpenSourcePage: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState('All');

  const languages = ['All', 'TypeScript', 'Java'];

  const filtered = repositories.filter(
    (r) => selectedLang === 'All' || r.language === selectedLang
  );

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 pt-4">
        <div className="inline-flex items-center space-x-2 font-mono text-xs text-fog uppercase tracking-widest bg-iron border border-border px-3 py-1 rounded">
          <GithubIcon className="w-3.5 h-3.5 text-white" />
          <ShinyPill
            text="OPEN SOURCE HUB — GITHUB.COM/ZENUXS-DEV"
            textColor="#b4b4b4"
            shineColor="#ffffff"
            speed={2.2}
            font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
          />
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-6xl text-white">
          Transparent, Modular Codebases
        </h1>

        <p className="font-sans text-fog text-base sm:text-lg max-w-2xl">
          Every open-source component in Zenuxs is built with zero-bloat, permissive licensing, and enterprise-grade reliability. Inspect, fork, and contribute.
        </p>

        <div className="pt-2 font-mono">
          <a
            href="https://github.com/zenuxs-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-carbon hover:bg-iron text-white font-semibold text-xs border border-border transition-colors shadow-md cursor-pointer group"
          >
            <GithubIcon className="w-4 h-4 text-ember" />
            <span>Follow @zenuxs-dev on GitHub</span>
            <ArrowRight className="w-3.5 h-3.5 text-steel group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Language Filter */}
      <div className="flex space-x-2 font-mono text-xs border-b border-border/60 pb-3">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setSelectedLang(lang)}
            className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
              selectedLang === lang
                ? 'bg-ember text-white font-bold shadow-md shadow-ember/20'
                : 'bg-carbon text-ash hover:text-white border border-border'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Repository Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((repo) => (
          <div
            key={repo.id}
            className="p-6 rounded-xl border border-border bg-carbon flex flex-col justify-between space-y-4 hover:border-border-hover transition-all group shadow-xl hover:shadow-2xl"
          >
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-sm flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-ember" />
                  {repo.name}
                </span>
                <span className="text-[10px] bg-void px-2 py-0.5 rounded border border-border text-steel font-mono">
                  {repo.license}
                </span>
              </div>

              <p className="font-sans text-fog text-xs sm:text-sm leading-relaxed line-clamp-3">
                {repo.description}
              </p>

              <div className="flex flex-wrap gap-1.5 text-[10px]">
                {repo.topics.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-graphite border border-border text-steel"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border/60 font-mono text-xs flex items-center justify-between text-ash">
              <div className="flex items-center space-x-3">
                <span className="flex items-center gap-1 text-amber">
                  <Star className="w-3.5 h-3.5 fill-amber" />
                  <span>{repo.stars}</span>
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5 text-steel" />
                  <span>{repo.forks}</span>
                </span>
                <span className="text-steel">[{repo.language}]</span>
              </div>

              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-ember flex items-center gap-1 font-semibold transition-colors cursor-pointer"
              >
                <span>Inspect</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Contribution Guidelines Box */}
      <div className="p-6 sm:p-8 rounded-xl border border-border bg-graphite space-y-4 font-mono text-xs shadow-2xl">
        <div className="flex items-center gap-2 text-white font-display text-lg font-bold">
          <Heart className="w-5 h-5 text-rose-500" />
          <span>Contributing to Zenuxs Open Source</span>
        </div>

        <p className="font-sans text-fog text-sm leading-relaxed max-w-3xl">
          We welcome pull requests, security audits, and issue reports from developers worldwide. All public libraries follow strict semantic versioning, typed documentation, and zero extraneous runtime dependencies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-4 rounded-lg bg-carbon border border-border">
            <span className="text-white font-bold block mb-1">1. Fork & Clone</span>
            <span className="text-ash font-sans text-xs">Fork any repository under github.com/zenuxs-dev.</span>
          </div>
          <div className="p-4 rounded-lg bg-carbon border border-border">
            <span className="text-white font-bold block mb-1">2. Audit & Test</span>
            <span className="text-ash font-sans text-xs">Run automated unit tests and linter before submitting.</span>
          </div>
          <div className="p-4 rounded-lg bg-carbon border border-border">
            <span className="text-white font-bold block mb-1">3. Submit PR</span>
            <span className="text-ash font-sans text-xs">Open a pull request with descriptive release notes.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
