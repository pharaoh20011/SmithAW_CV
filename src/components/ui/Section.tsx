import React from 'react';
import { Container } from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  id?: string;
  withContainer?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  as: Component = 'section',
  children,
  className = '',
  id,
  withContainer = true,
  ...props
}) => {
  const content = withContainer ? <Container>{children}</Container> : children;

  return (
    <Component
      id={id}
      className={`py-12 md:py-16 lg:py-20 ${className}`}
      {...props}
    >
      {content}
    </Component>
  );
};
