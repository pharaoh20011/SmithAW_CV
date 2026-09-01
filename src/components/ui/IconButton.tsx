import React from 'react';
import { ButtonVariant, ButtonSize } from './Button';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  'aria-label': string; // Mandatory for accessibility
  children: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant = 'secondary',
  size = 'md',
  'aria-label': ariaLabel,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-body rounded-brand-sm transition-all duration-fast focus-ring select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]';

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'w-9 h-9 text-xs',
    md: 'w-11 h-11 text-sm', // 44px x 44px min touch target
    lg: 'w-12 h-12 text-base',
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      'bg-brand-primary text-white hover:bg-brand-supporting shadow-brand-subtle dark:bg-brand-accent dark:hover:bg-brand-primary',
    secondary:
      'bg-surface-light dark:bg-surface-dark-card border border-stroke-light dark:border-stroke-dark text-content-light-primary dark:text-content-dark-primary hover:bg-gray-100 dark:hover:bg-surface-dark-elevated',
    ghost:
      'bg-transparent text-content-light-secondary dark:text-content-dark-secondary hover:bg-brand-soft dark:hover:bg-brand-soft-dark hover:text-brand-primary dark:hover:text-brand-accent',
  };

  return (
    <button
      aria-label={ariaLabel}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
