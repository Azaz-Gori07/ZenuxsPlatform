import React from 'react';
import { ScrollScene } from '../../../components/motion/ScrollScene';
import { MagneticButton } from '../../../components/motion/MagneticButton';
import TextMorph from '../../../components/originkit/ui/textmorph';
import ShinyPill from '../../../components/originkit/ui/shiny-pill';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';
import { Link } from 'react-router-dom';

export const Chapter16Final: React.FC = () => {
  return (
    <ScrollScene minHeight="min-h-[100svh]" className="flex items-center justify-center py-28 text-center border-b border-border/60">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="inline-flex items-center space-x-2 font-mono text-xs text-ember uppercase tracking-widest bg-ember/10 border border-ember/25 px-3 py-1 rounded">
          <Sparkles className="w-3.5 h-3.5 text-ember" />
          <ShinyPill
            text="15 / THE FINAL QUESTION"
            textColor="#da5c2c"
            shineColor="#ffffff"
            speed={2.0}
            font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
          />
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-white leading-tight">
          WHAT ARE YOU BUILDING?
        </h2>

        <div className="py-2">
          <TextMorph
            words={['SECURE AUTHENTICATION', 'ZERO-BOILERPLATE DATABASES', 'MEMORY-HARD CRYPTO', 'INTELLIGENT WORKSPACES', 'BUILD BEYOND THE TOOL']}
            color="#6798ff"
            font={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Space Grotesk' }}
            transition={{ duration: 0.8, delay: 2.0 }}
          />
        </div>

        <p className="font-sans text-fog text-base sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto font-normal">
          Find the tool. Read the source. Connect the pieces. Build something of your own without artificial constraints.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-mono">
          <MagneticButton>
            <Link
              to="/products"
              className="px-7 py-3.5 rounded-lg bg-ember hover:bg-ember-hover text-white text-xs sm:text-sm font-semibold shadow-2xl shadow-ember/25 border border-ember/40 flex items-center gap-2 transition-all cursor-pointer group"
            >
              <span>Explore Zenuxs Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </MagneticButton>

          <MagneticButton>
            <a
              href="https://github.com/zenuxs-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-lg bg-carbon hover:bg-iron text-paper hover:text-white text-xs sm:text-sm font-semibold border border-border flex items-center gap-2 transition-all cursor-pointer"
            >
              <GithubIcon className="w-4 h-4 text-white" />
              <span>Explore on GitHub ↗</span>
            </a>
          </MagneticButton>
        </div>
      </div>
    </ScrollScene>
  );
};
