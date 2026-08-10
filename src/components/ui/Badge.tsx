import React from 'react';
import { ProductStatus, ProductCategory } from '../../types/product';

interface StatusBadgeProps {
  status: ProductStatus;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const styles: Record<ProductStatus, { bg: string; text: string; border: string; label: string }> = {
    live: {
      bg: 'bg-emerald/10',
      text: 'text-emerald',
      border: 'border-emerald/30',
      label: 'LIVE'
    },
    beta: {
      bg: 'bg-indigo/10',
      text: 'text-indigo',
      border: 'border-indigo/30',
      label: 'BETA'
    },
    alpha: {
      bg: 'bg-amber/10',
      text: 'text-amber',
      border: 'border-amber/30',
      label: 'ALPHA'
    },
    development: {
      bg: 'bg-iron',
      text: 'text-fog',
      border: 'border-border',
      label: 'IN DEV'
    },
    'coming-soon': {
      bg: 'bg-iron',
      text: 'text-ash',
      border: 'border-border',
      label: 'SOON'
    },
    archived: {
      bg: 'bg-iron',
      text: 'text-steel',
      border: 'border-border',
      label: 'ARCHIVED'
    }
  };

  const current = styles[status] || styles.live;

  return (
    <span
      className={`font-mono text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border inline-flex items-center gap-1 ${current.bg} ${current.text} ${current.border} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      <span>{current.label}</span>
    </span>
  );
};

interface CategoryBadgeProps {
  category: ProductCategory;
  className?: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, className = '' }) => {
  return (
    <span
      className={`font-mono text-[10px] uppercase tracking-widest text-ash bg-iron/80 px-2 py-0.5 rounded border border-border/80 ${className}`}
    >
      {category}
    </span>
  );
};
