import type { Metadata } from 'next';
import { ThemeContext } from './providers';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio - Matthieu Bonjour',
  description: 'Bienvenue sur mon portfolio!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-950">
        <ThemeContext>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeContext>
      </body>
    </html>
  );
}
