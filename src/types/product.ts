export type ProductCategory = 
  | 'identity'
  | 'ai'
  | 'developer'
  | 'database'
  | 'security'
  | 'infrastructure'
  | 'minecraft'
  | 'community'
  | 'opensource';

export type ProductStatus = 
  | 'live'
  | 'beta'
  | 'alpha'
  | 'development'
  | 'coming-soon'
  | 'archived';

export interface ProductFeature {
  title: string;
  description: string;
  technicalDetail?: string;
  icon?: string;
}

export interface CodeSnippet {
  language: string;
  title: string;
  code: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory[];
  status: ProductStatus;
  openSource: boolean;
  url: string;
  docsUrl?: string;
  githubUrl?: string;
  npmUrl?: string;
  discordUrl?: string;
  tags: string[];
  features: ProductFeature[];
  audience: string[];
  architectureNote?: string;
  codeSnippet?: CodeSnippet;
  stats?: { label: string; value: string }[];
  accentColor?: string;
}

export interface CategoryInfo {
  id: ProductCategory;
  label: string;
  description: string;
  icon: string;
}

export interface Repository {
  id: string;
  name: string;
  repo: string;
  url: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  license: string;
  topics: string[];
  productRef?: string;
  illustrative?: boolean;
}
