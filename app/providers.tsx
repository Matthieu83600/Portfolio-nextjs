'use client';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export function ThemeContext({ children }) {
  return (
    <ThemeProvider attribute="class">
      <ProgressBar
        color='#000'
        height='3px'
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Toaster richColors closeButton />
      {children}
    </ThemeProvider>
  );
}
