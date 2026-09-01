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
      className={`group flex items-center gap-3 focus-ring rounded-brand-xs py-1 transition-opacity hover:opacity-90 ${className}`}
      aria-label="Anthony W. Smith - Home"
    >
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-brand-sm bg-brand-primary text-white dark:bg-brand-accent flex items-center justify-center font-heading font-bold text-sm sm:text-base tracking-wider shadow-brand-subtle group-hover:scale-105 transition-transform duration-fast shrink-0">
        AWS
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-content-light-primary dark:text-content-dark-primary group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
          Anthony W. Smith
        </span>
        {showTagline && (
          <span className="text-[11px] sm:text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted hidden sm:inline-block leading-none">
            Front-End Developer &amp; UI/UX Designer
          </span>
        )}
      </div>
    </Link>
  );
};
