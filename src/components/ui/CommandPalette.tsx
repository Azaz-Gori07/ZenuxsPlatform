import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { repositories } from '../../data/repositories';
import { Search, ExternalLink, ArrowRight, BookOpen, Terminal, Sparkles, X } from 'lucide-react';
import { GithubIcon } from './Icons';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const normalized = query.toLowerCase().trim();

  // Filter items
  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(normalized) ||
      p.tagline.toLowerCase().includes(normalized) ||
      p.tags.some((t) => t.toLowerCase().includes(normalized))
  );

  const filteredRepos = repositories.filter(
    (r) =>
      r.name.toLowerCase().includes(normalized) ||
      r.description.toLowerCase().includes(normalized) ||
      r.topics.some((t) => t.toLowerCase().includes(normalized))
  );

  const quickActions = [
    { title: 'Explore All Products', action: () => { navigate('/products'); onClose(); }, icon: Sparkles },
    { title: 'Open Source Hub', action: () => { navigate('/opensource'); onClose(); }, icon: BookOpen },
    { title: 'Community & Discord', action: () => { navigate('/community'); onClose(); }, icon: BookOpen },
    { title: 'System Status Dashboard', action: () => { navigate('/status'); onClose(); }, icon: Terminal }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
      <div
        className="w-full max-w-2xl rounded-xl border border-border bg-graphite shadow-2xl overflow-hidden font-mono text-xs flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar */}
        <div className="flex items-center px-4 py-3.5 bg-carbon border-b border-border/80 text-fog">
          <Search className="w-4 h-4 text-ash mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, repositories, tags, or docs... (e.g., oauth, mongo, argon, minecraft)"
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-steel text-xs sm:text-sm font-sans"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-ash hover:text-white mr-2">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <span className="text-[10px] text-ash bg-iron px-1.5 py-0.5 rounded border border-border">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="p-3 overflow-y-auto space-y-4 max-h-[460px]">
          {/* Quick Actions (if no query) */}
          {!query && (
            <div className="space-y-1">
              <div className="text-[10px] text-steel uppercase tracking-wider font-bold px-2 py-1">
                Navigation & Quick Links
              </div>
              {quickActions.map((qa, i) => {
                const Icon = qa.icon;
                return (
                  <button
                    key={i}
                    onClick={qa.action}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-iron text-left transition-colors text-fog hover:text-white cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-ember" />
                      <span className="font-sans font-medium text-sm">{qa.title}</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-steel" />
                  </button>
                );
              })}
            </div>
          )}

          {/* Matching Products */}
          {filteredProducts.length > 0 && (
            <div className="space-y-1">
              <div className="text-[10px] text-steel uppercase tracking-wider font-bold px-2 py-1 flex justify-between">
                <span>Products ({filteredProducts.length})</span>
              </div>
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => {
                    navigate(`/products?slug=${prod.slug}`);
                    onClose();
                  }}
                  className="cursor-pointer p-2.5 rounded-lg hover:bg-iron border border-transparent hover:border-border transition-colors flex items-center justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-white text-sm">
                        {prod.name}
                      </span>
                      <span className="text-[10px] text-ember uppercase bg-ember/10 px-1.5 py-0.5 rounded border border-ember/20">
                        {prod.category[0]}
                      </span>
                    </div>
                    <p className="text-ash text-xs font-sans line-clamp-1 mt-0.5">
                      {prod.tagline}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {prod.url && (
                      <a
                        href={prod.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 text-ash hover:text-white"
                        title="External Launch"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <ArrowRight className="w-4 h-4 text-steel group-hover:text-ember transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Matching Repositories */}
          {filteredRepos.length > 0 && (
            <div className="space-y-1">
              <div className="text-[10px] text-steel uppercase tracking-wider font-bold px-2 py-1">
                Open Source Repositories ({filteredRepos.length})
              </div>
              {filteredRepos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg hover:bg-iron border border-transparent hover:border-border transition-colors flex items-center justify-between group block text-fog hover:text-white"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <GithubIcon className="w-3.5 h-3.5 text-fog" />
                      <span className="font-mono font-bold text-white text-xs">
                        {repo.repo}
                      </span>
                      <span className="text-[10px] text-ash bg-carbon px-1.5 py-0.5 rounded border border-border">
                        ★ {repo.illustrative ? '—' : repo.stars}
                      </span>
                    </div>
                    <p className="text-ash text-xs font-sans line-clamp-1 mt-0.5">
                      {repo.description}
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-steel group-hover:text-white" />
                </a>
              ))}
            </div>
          )}

          {/* No results */}
          {query && filteredProducts.length === 0 && filteredRepos.length === 0 && (
            <div className="text-center py-8 text-ash font-sans">
              <p>No results matching "{query}"</p>
              <p className="text-xs text-steel mt-1">Try searching for keywords like "oauth", "security", "mongo", "database", or "hosting"</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-carbon border-t border-border/70 text-[10px] text-steel flex justify-between items-center">
          <span>Navigate with mouse or keyboard</span>
          <span>Zenuxs Unified Search Index</span>
        </div>
      </div>
    </div>
  );
};
