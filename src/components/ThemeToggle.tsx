import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './theme/ThemeProvider';
import { IconButton } from './ui/IconButton';

export const ThemeToggle: React.FC = () => {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <IconButton
      variant="ghost"
      size="md"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
      title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 text-brand-supporting" />
      )}
    </IconButton>
  );
};
