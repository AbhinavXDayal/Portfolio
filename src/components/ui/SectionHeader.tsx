import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  className = '',
}) => {
  return (
    <div className={`section-header-block ${className}`}>
      <span className="section-number mono">{number}</span>
      <span className="section-slash mono">/</span>
      <h2 className="section-title mono">{title}</h2>
      <div className="section-divider-line" aria-hidden="true" />
    </div>
  );
};
