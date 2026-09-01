import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="editorial-footer" role="contentinfo">
      <div className="footer-inner mono">
        <span>© {currentYear} Abhinav Dayal</span>
        <span className="footer-sep">•</span>
        <span>React & React Native</span>
        <button onClick={scrollToTop} className="back-top-btn">
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};
