import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="relative z-10 flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main id="main-content" className="flex-grow w-full">
        {children}
      </main>
    </div>
  );
};

