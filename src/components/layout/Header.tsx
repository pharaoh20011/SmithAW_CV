import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Brand } from '../common/Brand';
import { Navbar } from './Navbar';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from '../ThemeToggle';
import { ResumeCTA } from '../common/ResumeCTA';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-normal ${
        isScrolled
          ? 'bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md border-b border-stroke-light dark:border-stroke-dark shadow-brand-subtle'
          : 'bg-surface-light dark:bg-surface-dark border-b border-stroke-light/60 dark:border-stroke-dark/60'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Identity */}
          <Brand />

          {/* Desktop Primary Nav */}
          <Navbar />

          {/* Desktop Right Controls (Theme Toggle + Resume CTA) */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <ResumeCTA variant="secondary" size="sm" />
          </div>

          {/* Mobile Nav Trigger & Drawer */}
          <MobileNav
            isOpen={mobileMenuOpen}
            onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
            onClose={() => setMobileMenuOpen(false)}
          />
        </div>
      </Container>
    </header>
  );
};
