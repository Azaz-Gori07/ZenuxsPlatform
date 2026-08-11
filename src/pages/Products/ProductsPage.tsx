import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../../data/products';
import { categories } from '../../data/categories';
import { Product, ProductCategory } from '../../types/product';
import { ProductCard } from '../../components/product/ProductCard';
import ShinyPill from '../../components/originkit/ui/shiny-pill';
import { Search, Sparkles, Filter, Layers } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as ProductCategory) || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCat =
        selectedCategory === 'all'
          ? true
          : selectedCategory === 'opensource'
          ? p.openSource
          : p.category.includes(selectedCategory as ProductCategory);

      const normalized = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !normalized ||
        p.name.toLowerCase().includes(normalized) ||
        p.tagline.toLowerCase().includes(normalized) ||
        p.tags.some((t) => t.toLowerCase().includes(normalized));

      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 pt-4">
        <div className="inline-flex items-center space-x-2 font-mono text-xs text-ember uppercase tracking-widest bg-ember/10 border border-ember/25 px-3 py-1 rounded">
          <Layers className="w-3.5 h-3.5 text-ember" />
          <ShinyPill
            text="ZENUXS ECOSYSTEM DIRECTORY"
            textColor="#da5c2c"
            shineColor="#ffffff"
            speed={2.2}
            font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
          />
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-6xl text-white">
          All Products & Infrastructure
        </h1>

        <p className="font-sans text-fog text-base sm:text-lg max-w-2xl">
          Browse the complete catalog of identity systems, database wrappers, security primitives, developer tools, and infrastructure.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-carbon p-4 rounded-xl border border-border">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-ember text-white font-bold shadow-md shadow-ember/20'
                : 'bg-graphite text-ash hover:text-white border border-border/60'
            }`}
          >
            All ({products.length})
          </button>
          {categories.map((cat) => {
            const count = products.filter((p) =>
              cat.id === 'opensource'
                ? p.openSource
                : p.category.includes(cat.id)
            ).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-ember text-white font-bold shadow-md shadow-ember/20'
                    : 'bg-graphite text-ash hover:text-white border border-border/60'
                }`}
              >
                {cat.label.split(' ')[0]} ({count})
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-steel absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by name, capability or tag..."
            className="w-full bg-void border border-border rounded-lg pl-9 pr-4 py-2 text-xs font-mono text-white focus:outline-none focus:border-ember transition-colors placeholder-steel"
          />
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-ash font-sans space-y-2 bg-carbon rounded-xl border border-border">
          <p className="text-xl text-white font-display">No products found</p>
          <p className="text-sm">Try broadening your search query or switching categories.</p>
        </div>
      )}
    </div>
  );
};
