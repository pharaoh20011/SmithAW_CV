import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Button, ButtonVariant, ButtonSize } from '../ui/Button';

export interface ResumeCTAProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: string;
  icon?: 'download' | 'file';
  className?: string;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({
  variant = 'secondary',
  size = 'md',
  label = 'Resume PDF',
  icon = 'file',
  className = '',
}) => {
  const IconComponent = icon === 'download' ? Download : FileText;

  return (
    <a
      href="/awsmith_resume__fed.pdf"
      target="_blank"
      rel="noreferrer"
      aria-label="Download Anthony W. Smith's Resume PDF (opens in new tab)"
      className="inline-block"
    >
      <Button
        variant={variant}
        size={size}
        leftIcon={<IconComponent className="w-4 h-4" />}
        className={className}
      >
        {label}
      </Button>
    </a>
  );
};
