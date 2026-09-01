import React from 'react';

export type BadgeVariant = 'brand' | 'neutral' | 'accent' | 'outline';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'brand',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-brand-full text-xs font-medium font-mono-tech transition-colors duration-fast';

  const variantClasses: Record<BadgeVariant, string> = {
    brand:
      'bg-brand-soft text-brand-primary dark:bg-brand-soft-dark dark:text-brand-accent border border-brand-primary/10 dark:border-brand-accent/20',
    neutral:
      'bg-gray-100 text-content-light-secondary dark:bg-surface-dark-elevated dark:text-content-dark-secondary border border-stroke-light dark:border-stroke-dark',
    accent:
      'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800',
    outline:
      'bg-transparent text-content-light-secondary dark:text-content-dark-secondary border border-stroke-light dark:border-stroke-dark',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {icon && <span className="shrink-0" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
