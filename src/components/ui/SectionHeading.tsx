import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl';

  return (
    <div className={`mb-8 md:mb-12 ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className="inline-block font-mono-tech text-xs font-semibold tracking-wider uppercase text-brand-primary dark:text-brand-accent mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-content-light-secondary dark:text-content-dark-secondary font-body leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
