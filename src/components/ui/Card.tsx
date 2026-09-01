import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  interactive?: boolean;
  elevation?: 'flat' | 'subtle' | 'elevated';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  as: Component = 'div',
  interactive = false,
  elevation = 'subtle',
  children,
  className = '',
  ...props
}) => {
  const baseClasses =
    'rounded-brand-md bg-surface-light dark:bg-surface-dark-card border border-stroke-light dark:border-stroke-dark transition-all duration-normal overflow-hidden';

  const elevationClasses = {
    flat: '',
    subtle: 'shadow-brand-subtle dark:shadow-none',
    elevated: 'shadow-brand-card dark:shadow-brand-card-dark',
  }[elevation];

  const interactiveClasses = interactive
    ? 'hover:border-brand-primary/40 dark:hover:border-brand-accent/40 hover:shadow-brand-elevated dark:hover:shadow-brand-elevated-dark cursor-pointer group'
    : '';

  return (
    <Component
      className={`${baseClasses} ${elevationClasses} ${interactiveClasses} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`p-5 md:p-6 pb-3 ${className}`} {...props}>
    {children}
  </div>
);

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`px-5 md:px-6 py-3 font-body text-content-light-secondary dark:text-content-dark-secondary ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`p-5 md:p-6 pt-3 mt-auto border-t border-stroke-light/60 dark:border-stroke-dark/60 flex items-center justify-between ${className}`} {...props}>
    {children}
  </div>
);
