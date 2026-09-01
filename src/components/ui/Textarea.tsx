import React from 'react';
import { Label } from './Label';
import { AlertCircle } from 'lucide-react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  success?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      success,
      id,
      required,
      disabled,
      className = '',
      rows = 4,
      ...props
    },
    ref
  ) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    const hasError = Boolean(error);

    const baseTextareaClasses =
      'w-full p-3.5 text-sm font-body bg-surface-light dark:bg-surface-dark-card border rounded-brand-sm transition-colors duration-fast focus-ring placeholder:text-content-light-muted dark:placeholder:text-content-dark-muted text-content-light-primary dark:text-content-dark-primary disabled:opacity-50 disabled:bg-gray-100 dark:disabled:bg-surface-dark-elevated disabled:cursor-not-allowed resize-y';

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
          <Label htmlFor={textareaId} required={required} error={hasError}>
            {label}
          </Label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            id={textareaId}
            rows={rows}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${textareaId}-error`
                : helperText
                ? `${textareaId}-helper`
                : undefined
            }
            className={`${baseTextareaClasses} ${stateBorderClasses} ${className}`}
            {...props}
          />
          {hasError && (
            <div className="absolute top-3.5 right-3.5 text-red-500 pointer-events-none">
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
            </div>
          )}
        </div>
        {hasError && (
          <p id={`${textareaId}-error`} className="text-xs text-red-600 dark:text-red-400 font-body">
            {error}
          </p>
        )}
        {!hasError && helperText && (
          <p id={`${textareaId}-helper`} className="text-xs text-content-light-muted dark:text-content-dark-muted font-body">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
