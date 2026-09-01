import React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavItem {
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  return (
    <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1.5 lg:gap-2">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === '/'}
          className={({ isActive }) =>
            `px-3 py-2 text-sm font-medium font-body rounded-brand-xs transition-all duration-fast focus-ring ${
              isActive
                ? 'bg-brand-soft text-brand-primary dark:bg-brand-soft-dark dark:text-brand-accent font-semibold'
                : 'text-content-light-secondary dark:text-content-dark-secondary hover:text-content-light-primary dark:hover:text-content-dark-primary hover:bg-gray-100 dark:hover:bg-surface-dark-elevated'
            }`
          }
        >
          {({ isActive }) => (
            <span className="relative">
              {item.label}
              {isActive && (
                <span
                  className="sr-only"
                  aria-current="page"
                >
                  (Current page)
                </span>
              )}
            </span>
          )}
        </NavLink>
      ))}
    </nav>
  );
};
