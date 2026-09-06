import React from 'react';
import { Link } from 'react-router-dom';

export interface BrandProps {
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Brand: React.FC<BrandProps> = ({
  showTagline = true,
  className = '',
  onClick,
}) => {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`group flex items-center gap-3 focus-ring rounded-brand-xs py-1 transition-opacity hover:opacity-95 ${className}`}
      aria-label="Anthony W. Smith - Home"
    >
      {/* Official AWS Brand Mark Image */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-brand-sm overflow-hidden border border-brand-primary/20 dark:border-brand-accent/30 bg-surface-light dark:bg-surface-dark-card flex items-center justify-center shadow-brand-subtle group-hover:scale-105 transition-transform duration-fast shrink-0">
        <img
          src="/assets/img/favicon_close_logo.png"
          alt="AWS Brand Logo"
          width={40}
          height={40}
          className="w-full h-full object-contain p-0.5"
        />
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col justify-center">
        <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-content-light-primary dark:text-content-dark-primary group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
          Anthony W. Smith
        </span>
        {showTagline && (
          <span className="text-[11px] sm:text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted hidden sm:inline-block leading-none mt-0.5">
            Front-End Developer / UI/UX Designer &amp; Advanced AI Prompt Engineer
          </span>
        )}
      </div>
    </Link>
  );
};
