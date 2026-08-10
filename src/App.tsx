import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { HomePage } from './pages/Home/HomePage';
import { ProductsPage } from './pages/Products/ProductsPage';
import { OpenSourcePage } from './pages/OpenSource/OpenSourcePage';
import { CommunityPage } from './pages/Community/CommunityPage';
import { StatusPage } from './pages/Status/StatusPage';
import { AboutPage } from './pages/About/AboutPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/opensource" element={<OpenSourcePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
};
