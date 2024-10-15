'use client';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ReactNode } from 'react';

const ThemeContext = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <ProgressBar
        color="#000"
        height="3px"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Toaster richColors closeButton />
      {children}
    </ThemeProvider>
  );
};

export default ThemeContext;
