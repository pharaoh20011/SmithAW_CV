import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  cleanPadding?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  as: Component = 'div',
  children,
  className = '',
  cleanPadding = false,
  ...props
}) => {
  const paddingClasses = cleanPadding ? '' : 'px-5 sm:px-6 lg:px-8';

  return (
    <Component
      className={`mx-auto w-full max-w-content ${paddingClasses} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
