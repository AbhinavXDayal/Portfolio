import React from 'react';
import { cn } from '../../lib/utils';

export interface TagProps {
  label: string;
  variant?: 'default' | 'accent' | 'subtle';
  size?: 'sm' | 'md';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  label,
  variant = 'default',
  size = 'md',
  className,
}) => {
  return (
    <span
      className={cn(
        'portfolio-tag',
        `tag-${variant}`,
        `tag-${size}`,
        className
      )}
    >
      {label}
    </span>
  );
};

