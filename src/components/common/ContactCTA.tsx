import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import { Button, ButtonVariant, ButtonSize } from '../ui/Button';

export interface ContactCTAProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: string;
  showArrow?: boolean;
  className?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  variant = 'primary',
  size = 'md',
  label = 'Get in Touch',
  showArrow = true,
  className = '',
}) => {
  return (
    <Link to="/contact" className="inline-block">
      <Button
        variant={variant}
        size={size}
        leftIcon={<Mail className="w-4 h-4" />}
        rightIcon={showArrow ? <ArrowRight className="w-4 h-4" /> : undefined}
        className={className}
      >
        {label}
      </Button>
    </Link>
  );
};
