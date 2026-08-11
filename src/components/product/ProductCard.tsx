import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { StatusBadge, CategoryBadge } from '../ui/Badge';
import { ExternalLink, ArrowRight, BookOpen } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative rounded-xl border border-border bg-graphite p-5 sm:p-6 transition-all duration-300 hover:border-border-hover hover:shadow-2xl flex flex-col justify-between overflow-hidden">
      {/* Top Accent Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-30 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: product.accentColor || '#da5c2c' }}
      />

      <div>
        {/* Category & Status Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap gap-1.5">
            {product.category.map((cat) => (
              <CategoryBadge key={cat} category={cat} />
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            {product.openSource && (
              <span className="font-mono text-[9px] uppercase tracking-wider text-fog bg-iron px-1.5 py-0.5 rounded border border-border/80">
                OSS
              </span>
            )}
            <StatusBadge status={product.status} />
          </div>
        </div>

        {/* Product Identity */}
        <h3 className="font-display text-xl font-bold text-white group-hover:text-white transition-colors mb-1.5">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-fog font-sans leading-relaxed mb-4">
          {product.tagline}
        </p>

        {/* Feature bullets */}
        <ul className="space-y-1.5 mb-5 font-sans text-xs text-ash">
          {product.features.slice(0, 2).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-1.5">
              <span className="text-ember font-bold">•</span>
              <span className="line-clamp-1">{feat.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
        <Link
          to={`/products/${product.slug}`}
          className="text-ember hover:text-ember-hover font-semibold flex items-center gap-1 group/btn"
        >
          <span>Architecture & Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </Link>

        <div className="flex items-center space-x-2">
          {product.githubUrl && (
            <a
              href={product.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded bg-carbon hover:bg-iron text-ash hover:text-white border border-border transition-colors"
              title="View GitHub Repository"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}
          {product.docsUrl && (
            <a
              href={product.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded bg-carbon hover:bg-iron text-ash hover:text-white border border-border transition-colors"
              title="Read Documentation"
            >
              <BookOpen className="w-3.5 h-3.5" />
            </a>
          )}
          {product.url && (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded bg-ember/10 hover:bg-ember/20 text-ember hover:text-ember-hover border border-ember/30 font-semibold transition-colors flex items-center gap-1"
            >
              <span>Launch</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
