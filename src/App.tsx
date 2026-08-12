import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { HomePage } from './pages/Home/HomePage';
import { ProductsPage } from './pages/Products/ProductsPage';
import { OpenSourcePage } from './pages/OpenSource/OpenSourcePage';
import { CommunityPage } from './pages/Community/CommunityPage';
import { StatusPage } from './pages/Status/StatusPage';
import { AboutPage } from './pages/About/AboutPage';
import { TermsPage } from './pages/Legal/TermsPage';
import { PrivacyPolicyPage } from './pages/Legal/PrivacyPage';
import { AIPage } from './pages/AI/AIPage';
import ProductDetailPage from './pages/Products/ProductDetailPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/opensource" element={<OpenSourcePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
};
