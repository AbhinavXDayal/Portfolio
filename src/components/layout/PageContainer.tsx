import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main id="main-content" className="main-content-layout" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
