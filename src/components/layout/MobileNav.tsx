import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { IconButton } from '../ui/IconButton';
import { ThemeToggle } from '../ThemeToggle';
import { ResumeCTA } from '../common/ResumeCTA';
import { NAV_ITEMS } from './Navbar';

export interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onToggle,
  onClose,
}) => {
  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Menu Toggle Trigger */}
      <IconButton
        variant="ghost"
        size="md"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
        onClick={onToggle}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </IconButton>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs transition-opacity duration-fast"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer Panel */}
      <div
        id="mobile-navigation-menu"
        aria-label="Mobile Navigation"
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-xs bg-surface-light dark:bg-surface-dark-card border-l border-stroke-light dark:border-stroke-dark shadow-brand-elevated dark:shadow-brand-elevated-dark p-6 flex flex-col justify-between transition-transform duration-normal ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-stroke-light dark:border-stroke-dark mb-6">
            <span className="font-heading font-bold text-sm tracking-tight text-content-light-primary dark:text-content-dark-primary">
              Navigation
            </span>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <IconButton
                variant="ghost"
                size="sm"
                aria-label="Close menu"
                onClick={onClose}
              >
                <X className="w-5 h-5" />
              </IconButton>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 text-base font-medium font-body rounded-brand-sm transition-colors ${
                    isActive
                      ? 'bg-brand-soft text-brand-primary dark:bg-brand-soft-dark dark:text-brand-accent font-semibold'
                      : 'text-content-light-primary dark:text-content-dark-primary hover:bg-gray-100 dark:hover:bg-surface-dark-elevated'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && <ArrowRight className="w-4 h-4 text-brand-primary dark:text-brand-accent" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Drawer Footer Actions */}
        <div className="pt-6 border-t border-stroke-light dark:border-stroke-dark space-y-3">
          <div className="w-full" onClick={onClose}>
            <ResumeCTA variant="secondary" size="md" className="w-full justify-center" />
          </div>
          <p className="text-[11px] font-mono-tech text-center text-content-light-muted dark:text-content-dark-muted">
            Anthony W. Smith &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};
