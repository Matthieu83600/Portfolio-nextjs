import type { Metadata } from 'next';
import { ThemeContext } from './providers';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://matthieubonjour.fr/'),
  title: {
    template: '%s | Portfolio MB',
    default: 'Accueil | Portfolio MB',
  },
  description:
    "Je m'appelle Matthieu Bonjour, et je suis développeur front-end junior. Bienvenue sur mon portfolio !",
  icons: {
    icon: '/assets/logo.svg',
  },
  keywords: [
    'Matthieu Bonjour',
    'Matthieu Bonjour - développeur',
    'Matthieu Bonjour - developer',
    'Développeur front-end',
    'Frontend developer',
    'Site portfolio',
    'Portfolio website',
    'Portfolio développeur front-end',
    'Frontend Developer Portfolio',
  ],
  creator: 'Matthieu Bonjour',
  authors: [{ name: 'Matthieu Bonjour', url: 'https://matthieubonjour.fr/' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-slate-50 px-4 dark:bg-slate-950">
        <ThemeContext>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeContext>
      </body>
    </html>
  );
}
