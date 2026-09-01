import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
  error?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  required,
  error,
  className = '',
  ...props
}) => {
  return (
    <label
      className={`block text-xs font-semibold uppercase tracking-wider font-mono-tech mb-1.5 ${
        error
          ? 'text-red-600 dark:text-red-400'
          : 'text-content-light-secondary dark:text-content-dark-secondary'
      } ${className}`}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
    </label>
  );
};
