import React from 'react';
import { SkipLink } from '../common/SkipLink';
import { Header } from './Header';
import { Footer } from './Footer';
import { PageTransition } from '../common/PageTransition';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-surface-light dark:bg-surface-dark text-content-light-primary dark:text-content-dark-primary transition-colors duration-normal">
      <SkipLink />
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-grow focus:outline-none"
      >
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
};
