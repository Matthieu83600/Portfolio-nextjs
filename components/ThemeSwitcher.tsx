'use client';
import { useTheme } from 'next-themes';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Changer le thème"
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
    >
      {currentTheme === 'dark' ? (
        <BsSun size={24} fill="yellow" />
      ) : (
        <BsMoon size={24} fill="dark" />
      )}
    </button>
  );
};
