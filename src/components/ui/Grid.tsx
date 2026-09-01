import React from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  preset?: 'projects' | 'features' | '12-col';
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({
  cols,
  gap = 'md',
  preset,
  children,
  className = '',
  ...props
}) => {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6 md:gap-8',
    lg: 'gap-8 md:gap-10',
    xl: 'gap-10 md:gap-12',
  }[gap];

  let colClasses = 'grid-cols-1';

  if (preset === 'projects') {
    colClasses = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  } else if (preset === 'features') {
    colClasses = 'grid-cols-1 md:grid-cols-2';
  } else if (preset === '12-col') {
    colClasses = 'grid-cols-1 md:grid-cols-12';
  } else if (cols) {
    const colMap: Record<number, string> = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
      12: 'grid-cols-12',
    };
    colClasses = colMap[cols] || 'grid-cols-1';
  }

  return (
    <div className={`grid ${colClasses} ${gapClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};
