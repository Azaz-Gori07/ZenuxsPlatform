import React from 'react';
import { motion } from 'framer-motion';
import { ScrollScene } from '../../../components/motion/ScrollScene';
import { repositories } from '../../../data/repositories';
import GlitchCharReveal from '../../../components/originkit/ui/scrambletext';
import { Star, GitFork, ExternalLink, ArrowRight, Code2 } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';
import { Link } from 'react-router-dom';

export const Chapter12OpenSource: React.FC = () => {
  return (
    <ScrollScene id="opensource" minHeight="min-h-[100svh]" className="py-24 border-b border-border/60">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-fog uppercase tracking-widest bg-iron border border-border px-3 py-1 rounded">
            <GithubIcon className="w-3.5 h-3.5 text-white" />
            <span>11 / OPEN SOURCE — TRANSPARENT CODEBASES</span>
          </div>

          <div className="space-y-1">
            <h2 className="font-display font-bold text-4xl sm:text-6xl text-white leading-tight">
              IF IT MATTERS, SHOW THE SOURCE.
            </h2>
            <div className="pt-1 font-mono text-xs text-indigo">
              <GlitchCharReveal
                words="100% INSPECTABLE • PERMISSIVE LICENSES • ZERO VENDOR LOCK-IN"
                color="#6798ff"
                font={{ fontSize: '13px', fontWeight: 'bold', fontFamily: 'JetBrains Mono' }}
                enterAnimation={{ mode: 'oneLine', scrambleIntensity: 35 }}
                hoverAnimation={{ type: 'diffusion', lines: 'oneLine' }}
              />
            </div>
          </div>

          <p className="font-sans text-fog text-base sm:text-lg leading-relaxed font-normal">
            Zenuxs is not a black box. The code is part of the product — something developers can inspect, audit, improve, and deploy with complete confidence.
          </p>
        </div>

        {/* Public Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repositories.map((repo, idx) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-carbon hover:border-border-hover transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-ash">
                  <span className="flex items-center gap-1.5 text-white font-bold">
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

                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded bg-graphite border border-border/80 text-steel"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-border/60 font-mono text-xs text-ash flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center gap-1 text-amber">
                    <Star className="w-3.5 h-3.5 fill-amber" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-steel" />
                    <span>{repo.forks}</span>
                  </span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-ember flex items-center gap-1 font-semibold transition-colors cursor-pointer"
                >
                  <span>Inspect Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 font-mono text-xs">
          <span className="text-steel">All codebases licensed permissively under MIT / Apache-2.0 / GPL-3.0.</span>
          <Link
            to="/opensource"
            className="inline-flex items-center gap-1.5 text-ember hover:text-ember-hover font-semibold transition-colors cursor-pointer group"
          >
            <span>Explore All Repositories & Contribution Guides</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </ScrollScene>
  );
};
