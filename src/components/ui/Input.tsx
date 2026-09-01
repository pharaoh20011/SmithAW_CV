import React from 'react';
import { Label } from './Label';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  success?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      success,
      leftIcon,
      rightIcon,
      id,
      required,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    const hasError = Boolean(error);

    const baseInputClasses =
      'w-full min-h-[44px] px-3.5 py-2.5 text-sm font-body bg-surface-light dark:bg-surface-dark-card border rounded-brand-sm transition-colors duration-fast focus-ring placeholder:text-content-light-muted dark:placeholder:text-content-dark-muted text-content-light-primary dark:text-content-dark-primary disabled:opacity-50 disabled:bg-gray-100 dark:disabled:bg-surface-dark-elevated disabled:cursor-not-allowed';

    let stateBorderClasses =
      'border-stroke-light dark:border-stroke-dark focus:border-brand-primary dark:focus:border-brand-accent';

    if (hasError) {
      stateBorderClasses =
        'border-red-500 dark:border-red-400 text-red-900 dark:text-red-100 focus:ring-red-500';
    } else if (success) {
      stateBorderClasses =
        'border-emerald-500 dark:border-emerald-400 focus:ring-emerald-500';
    }

    return (
      <div className="w-full space-y-1">
        {label && (
          <Label htmlFor={inputId} required={required} error={hasError}>
            {label}
          </Label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 text-content-light-muted dark:text-content-dark-muted pointer-events-none">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${inputId}-error`
                : helperText
                ? `${inputId}-helper`
                : undefined
            }
            className={`${baseInputClasses} ${stateBorderClasses} ${
              leftIcon ? 'pl-10' : ''
            } ${rightIcon || hasError || success ? 'pr-10' : ''} ${className}`}
            {...props}
          />
          <div className="absolute right-3.5 flex items-center pointer-events-none">
            {hasError ? (
              <AlertCircle className="w-4 h-4 text-red-500" aria-hidden="true" />
            ) : success ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-500" aria-hidden="true" />
            ) : (
              rightIcon
            )}
          </div>
        </div>
        {hasError && (
          <p id={`${inputId}-error`} className="text-xs text-red-600 dark:text-red-400 font-body">
            {error}
          </p>
        )}
        {!hasError && helperText && (
          <p id={`${inputId}-helper`} className="text-xs text-content-light-muted dark:text-content-dark-muted font-body">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
