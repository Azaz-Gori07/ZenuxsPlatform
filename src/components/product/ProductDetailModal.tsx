import React from 'react';
import { Product } from '../../types/product';
import { StatusBadge } from '../ui/Badge';
import { X, ExternalLink, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="w-full max-w-3xl rounded-xl border border-border bg-graphite shadow-2xl overflow-hidden font-mono text-xs my-auto animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-carbon border-b border-border/80">
          <div className="flex items-center space-x-3">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: product.accentColor || '#da5c2c' }}
            />
            <h3 className="font-display font-bold text-white text-lg">
              {product.name}
            </h3>
            <StatusBadge status={product.status} />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-iron text-ash hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Tagline & Description */}
          <div className="space-y-2">
            <p className="font-display text-base font-semibold text-white">
              {product.tagline}
            </p>
            <p className="text-fog font-sans text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Categories & Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {product.stats?.map((st, i) => (
              <div key={i} className="p-3 rounded-lg bg-carbon border border-border">
                <span className="text-[10px] text-steel uppercase font-bold block mb-1">
                  {st.label}
                </span>
                <span className="text-white font-semibold text-xs truncate block">
                  {st.value}
                </span>
              </div>
            ))}
          </div>

          {/* Key Capabilities */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-sm flex items-center gap-2">
              <Layers className="w-4 h-4 text-ember" /> Verified Capabilities & Architecture
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-carbon border border-border/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-white font-semibold text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald flex-shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-ash font-sans text-xs leading-relaxed pl-5">
                    {feat.description}
                  </p>
                  {feat.technicalDetail && (
                    <div className="mt-1 pl-5 text-[10px] text-steel font-mono">
                      ⚙️ {feat.technicalDetail}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet (if available) */}
          {product.codeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] text-steel">
                <span>Code Example: {product.codeSnippet.title}</span>
                <span className="text-ember">{product.codeSnippet.language}</span>
              </div>
              <pre className="p-4 rounded-lg bg-void border border-border text-white text-xs overflow-x-auto">
                {product.codeSnippet.code}
              </pre>
            </div>
          )}

          {/* Tags */}
          <div className="space-y-1.5">
            <span className="text-[10px] text-steel uppercase tracking-widest block font-bold">
              Ecosystem Index Tags:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-carbon border border-border text-[11px] text-ash"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-4 bg-carbon border-t border-border/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            {product.githubUrl && (
              <a
                href={product.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-iron hover:bg-border text-white text-xs transition-colors flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
            {product.docsUrl && (
              <a
                href={product.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-iron hover:bg-border text-white text-xs transition-colors flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Documentation</span>
              </a>
            )}
          </div>

          {product.url && (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded bg-ember hover:bg-ember-hover text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Launch {product.name}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
