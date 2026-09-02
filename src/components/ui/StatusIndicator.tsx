import React from 'react';
import { cn } from '../../lib/utils';

export interface StatusIndicatorProps {
  statusText?: string;
  className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  statusText = 'Available for opportunities',
  className,
}) => {
  return (
    <div className={cn('status-badge', className)}>
      <span className="status-dot-container">
        <span className="status-dot-ping" />
        <span className="status-dot" />
      </span>
      <span className="status-text">{statusText}</span>
    </div>
  );
};

