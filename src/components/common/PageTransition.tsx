import React from 'react';
import { useLocation } from 'react-router-dom';

export interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div
      key={location.pathname}
      className="animate-fade-in transition-opacity duration-fast"
    >
      {children}
    </div>
  );
};
