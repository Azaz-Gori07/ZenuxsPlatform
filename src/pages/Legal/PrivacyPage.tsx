import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Shield, Filter, CheckCircle2, ChevronRight } from 'lucide-react';
import { PLATFORM_PRIVACY, PRODUCT_LEGAL_DATA } from '../../data/legalData';
import { products } from '../../data/products';

export const PrivacyPolicyPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedProductSlug = searchParams.get('product') || 'all';

  const productList = [
    { slug: 'all', name: 'All Ecosystem Privacy Policies' },
    ...products.map((p) => ({ slug: p.slug, name: p.name })),
  ];

  const activeProductData = selectedProductSlug !== 'all' ? PRODUCT_LEGAL_DATA[selectedProductSlug] : null;

  const handleSelectProduct = (slug: string) => {
    if (slug === 'all') {
      searchParams.delete('product');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ product: slug });
    }
  };

  return (
    <div className="min-h-screen bg-void pt-6 pb-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Top Nav & Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-steel hover:text-white font-mono text-xs transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Ecosystem</span>
          </Link>

          <div className="flex items-center space-x-3 font-mono text-xs">
            <Link
              to={`/terms${selectedProductSlug !== 'all' ? `?product=${selectedProductSlug}` : ''}`}
              className="text-fog hover:text-white px-3 py-1 rounded hover:bg-carbon transition-colors"
            >
              Terms & Conditions ↗
            </Link>
            <span className="text-white font-bold bg-iron px-3 py-1 rounded border border-border">
              Privacy Policy
            </span>
          </div>
        </div>

        {/* Page Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald uppercase tracking-widest bg-emerald/10 border border-emerald/25 px-3 py-1 rounded-full">
            <Shield className="w-3.5 h-3.5 text-emerald" />
            <span>DATA PRIVACY & PROTECTION PORTAL</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-fog font-sans text-base sm:text-lg max-w-3xl leading-relaxed">
            {activeProductData
              ? `Privacy policy and data protection details for ${activeProductData.name}.`
              : 'Master Privacy Policy outlining how Zenuxs Platform processes, stores, and safeguards developer and identity data.'}
          </p>
        </div>

        {/* Interactive Product Filter Selector */}
        <div className="rounded-2xl border border-border bg-carbon p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase font-bold text-steel flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-emerald" /> Filter Privacy Policy by Product / Module:
            </span>
            <span className="font-mono text-[11px] text-steel">
              {productList.length} Ecosystem Services
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            {productList.map((p) => {
              const isActive = selectedProductSlug === p.slug;
              return (
                <button
                  key={p.slug}
                  onClick={() => handleSelectProduct(p.slug)}
                  className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-emerald text-black font-bold shadow-lg shadow-emerald/20 border border-emerald/40'
                      : 'bg-void text-ash hover:text-white hover:bg-iron border border-border/80'
                  }`}
                >
                  {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-black" />}
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Privacy Content Card */}
        <div className="rounded-2xl border border-border bg-carbon p-6 sm:p-10 space-y-10 shadow-2xl text-fog font-sans text-sm sm:text-base leading-relaxed">
          {/* Active Banner */}
          <div className="p-4 rounded-xl bg-void border border-border/80 flex items-center justify-between font-mono text-xs">
            <div>
              <span className="text-steel uppercase block text-[10px]">Current Legal Scope:</span>
              <span className="text-white font-bold text-sm">
                {activeProductData ? `${activeProductData.name} Privacy` : 'ZenuxsPlatform Privacy (Ecosystem Master)'}
              </span>
            </div>
            <span className="text-steel">
              Last Updated: {activeProductData ? activeProductData.privacy.lastUpdated : PLATFORM_PRIVACY.lastUpdated}
            </span>
          </div>

          {/* Section Render */}
          {activeProductData ? (
            <div className="space-y-10">
              <p className="text-white font-medium text-base sm:text-lg border-b border-border/60 pb-4">
                {activeProductData.privacy.summary}
              </p>

              {activeProductData.privacy.sections.map((sec, idx) => (
                <section key={idx} className="space-y-4">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {sec.title}
                  </h2>
                  {sec.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-ash leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              <div className="pt-6 border-t border-border/60 flex items-center justify-between text-xs font-mono text-steel">
                <span>Looking for Terms & Conditions?</span>
                <Link
                  to={`/terms?product=${activeProductData.slug}`}
                  className="text-emerald hover:text-emerald-400 font-bold inline-flex items-center gap-1"
                >
                  <span>View {activeProductData.name} Terms</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              <p className="text-white font-medium text-base sm:text-lg border-b border-border/60 pb-4">
                {PLATFORM_PRIVACY.summary}
              </p>

              {PLATFORM_PRIVACY.sections.map((sec, idx) => (
                <section key={idx} className="space-y-4">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {sec.title}
                  </h2>
                  {sec.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-ash leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              {/* Product Privacy Quick List */}
              <div className="pt-8 border-t border-border/60 space-y-4">
                <h3 className="font-display font-bold text-lg text-white">
                  Product Specific Privacy Policies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
                  {products.map((p) => (
                    <button
                      key={p.slug}
                      onClick={() => handleSelectProduct(p.slug)}
                      className="p-3 rounded-xl bg-void hover:bg-iron border border-border/80 text-left text-fog hover:text-white transition-colors group flex items-center justify-between"
                    >
                      <span>{p.name} Privacy</span>
                      <ChevronRight className="w-3.5 h-3.5 text-steel group-hover:text-emerald transition-transform group-hover:translate-x-0.5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
