import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sprymd Docs',
  description: 'Comprehensive documentation for Sprymd with AI-powered search',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
    ],
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Sprymd Docs',
    description: 'Comprehensive documentation for Sprymd with AI-powered search',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Sprymd Docs Logo',
      },
    ],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
