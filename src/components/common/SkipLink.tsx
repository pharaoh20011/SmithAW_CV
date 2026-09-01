import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 px-4 py-2.5 bg-brand-primary text-white text-sm font-medium font-body rounded-brand-sm shadow-brand-elevated focus-ring"
    >
      Skip to main content
    </a>
  );
};
