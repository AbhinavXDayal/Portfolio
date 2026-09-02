import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  className,
}) => {
  return (
    <div className={cn('section-v4-header', className)}>
      <span className="section-v4-num mono">{number}</span>
      <span className="section-v4-slash mono">/</span>
      <h2 className="section-v4-title mono">{title}</h2>
      <div className="section-v4-line" aria-hidden="true" />
    </div>
  );
};
