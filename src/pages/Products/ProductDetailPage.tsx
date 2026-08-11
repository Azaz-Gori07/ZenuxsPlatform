import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../data/products';
import { Product } from '../../types/product';
import { StatusBadge, CategoryBadge } from '../../components/ui/Badge';
import { Reveal } from '../../components/motion/Reveal';
import {
  ArrowLeft, ExternalLink, BookOpen, Shield, Zap,
  Code2, CheckCircle2, Terminal, Globe, Copy, Check
} from 'lucide-react';
import { GithubIcon } from '../../components/ui/Icons';

const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  const [copied, setCopied] = React.useState(false);

  const copySnippet = () => {
    if (!product?.codeSnippet) return;
    navigator.clipboard.writeText(product.codeSnippet.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="font-serif text-5xl text-white">404</h1>
          <p className="text-fog font-sans">Product not found.</p>
          <Link to="/products" className="inline-flex items-center gap-2 text-ember hover:text-ember-hover font-mono text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-void">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80svh] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${product.accentColor || '#da5c2c'}, transparent)`
            }}
          />
          <div className="absolute inset-0 technical-grid opacity-20" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 space-y-10">
          {/* Back nav */}
          <Reveal>
            <Link to="/products" className="inline-flex items-center gap-2 font-mono text-xs text-steel hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Products
            </Link>
          </Reveal>

          {/* Identity */}
          <div className="space-y-6 max-w-4xl">
            <Reveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-3">
                {product.category.map((cat) => (
                  <CategoryBadge key={cat} category={cat} />
                ))}
                <StatusBadge status={product.status} />
                {product.openSource && (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-fog bg-iron px-2 py-0.5 rounded border border-border/80">
                    Open Source
                  </span>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight">
                {product.name}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-sans text-fog text-lg sm:text-xl leading-relaxed max-w-2xl">
                {product.description}
              </p>
            </Reveal>

            {/* Action buttons */}
            <Reveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-3 font-mono">
                {product.url && (
                  <a href={product.url} target="_blank" rel="noopener noreferrer"
                     className="px-6 py-3 rounded-lg bg-ember hover:bg-ember-hover text-white text-sm font-semibold shadow-lg transition-all flex items-center gap-2">
                    Launch Product <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {product.githubUrl && (
                  <a href={product.githubUrl} target="_blank" rel="noopener noreferrer"
                     className="px-5 py-3 rounded-lg bg-carbon hover:bg-iron text-fog hover:text-white border border-border text-sm transition-colors flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" /> GitHub
                  </a>
                )}
                {product.docsUrl && (
                  <a href={product.docsUrl} target="_blank" rel="noopener noreferrer"
                     className="px-5 py-3 rounded-lg bg-carbon hover:bg-iron text-fog hover:text-white border border-border text-sm transition-colors flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Documentation
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          {/* Stats strip */}
          {product.stats && (
            <Reveal delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
                {product.stats.map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-carbon border border-border">
                    <span className="text-fog text-[10px] uppercase font-mono block mb-1">{stat.label}</span>
                    <span className="text-white font-mono text-sm font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative w-full py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-graphite/30" />
          <div className="absolute inset-0 technical-dots opacity-20" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          <Reveal>
            <div className="max-w-4xl space-y-4">
              <h2 className="font-serif text-4xl sm:text-5xl text-white">Features & Capabilities</h2>
              <p className="font-sans text-fog text-lg">Every feature is designed to solve a specific problem in the ecosystem.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feat, idx) => (
              <Reveal key={feat.title} delay={0.1 + idx * 0.08}>
                <div className="group p-8 rounded-2xl border border-border bg-carbon/60 hover:bg-carbon transition-all duration-300 space-y-4 h-full">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-xl border border-border bg-void">
                      <Zap className="w-5 h-5 text-ember" />
                    </div>
                    <span className="text-[10px] font-mono text-steel bg-void px-2 py-0.5 rounded border border-border/50">
                      Feature {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white">{feat.title}</h3>
                  <p className="font-sans text-fog text-sm leading-relaxed">{feat.description}</p>

                  {feat.technicalDetail && (
                    <div className="pt-3 border-t border-border/50">
                      <span className="text-[10px] font-mono uppercase text-steel block mb-1">Technical Detail</span>
                      <p className="text-ash font-mono text-xs">{feat.technicalDetail}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Code Snippet Section */}
      {product.codeSnippet && (
        <section className="relative w-full py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(218,92,44,0.04),transparent)]" />
            <div className="absolute inset-0 technical-grid opacity-15" />
          </div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
            <Reveal>
              <div className="max-w-4xl space-y-4">
                <h2 className="font-serif text-4xl sm:text-5xl text-white">Quick Start</h2>
                <p className="font-sans text-fog text-lg">Get up and running in minutes.</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-carbon shadow-2xl overflow-hidden font-mono text-xs max-w-4xl">
                <div className="flex items-center justify-between px-5 py-3 bg-graphite border-b border-border/80">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-white font-bold">{product.codeSnippet.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-steel text-[10px]">{product.codeSnippet.language}</span>
                    <button onClick={copySnippet}
                            className="p-1.5 rounded bg-carbon hover:bg-iron text-ash hover:text-white border border-border transition-colors cursor-pointer"
                            title="Copy to clipboard">
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <pre className="p-6 bg-void text-ash overflow-x-auto leading-relaxed">
                  <code>{product.codeSnippet.code}</code>
                </pre>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Audience */}
      <section className="relative w-full py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-graphite/20" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
          <Reveal>
            <div className="max-w-4xl space-y-4">
              <h2 className="font-serif text-4xl sm:text-5xl text-white">Built For</h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 max-w-4xl">
              {product.audience.map((aud) => (
                <span key={aud} className="px-5 py-3 rounded-xl bg-carbon border border-border font-mono text-sm text-fog">
                  {aud}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Tags */}
          {product.tags.length > 0 && (
            <Reveal delay={0.15}>
              <div className="max-w-4xl pt-6 border-t border-border/50">
                <span className="text-steel text-[10px] uppercase font-mono block mb-3">Tags</span>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded bg-void border border-border/50 font-mono text-[11px] text-ash">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative w-full py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{ background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${product.accentColor || '#da5c2c'}, transparent)` }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal>
            <div className="text-center space-y-8 max-w-2xl mx-auto">
              <h2 className="font-serif text-4xl sm:text-5xl text-white">
                Start Using {product.name}
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4 font-mono">
                {product.url && (
                  <a href={product.url} target="_blank" rel="noopener noreferrer"
                     className="px-8 py-4 rounded-xl bg-ember hover:bg-ember-hover text-white text-base font-bold shadow-2xl transition-all flex items-center gap-3">
                    Launch <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                {product.githubUrl && (
                  <a href={product.githubUrl} target="_blank" rel="noopener noreferrer"
                     className="px-8 py-4 rounded-xl bg-carbon hover:bg-iron text-white text-base font-bold border border-border transition-all flex items-center gap-3">
                    <GithubIcon className="w-5 h-5" /> View Source
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
