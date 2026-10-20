import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Fraunces, IBM_Plex_Mono, Manrope } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RevealObserver } from '@/components/RevealObserver';
import { site } from '@/lib/site';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});
const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Marine Surveyors in Sri Lanka | Earndeck Shipping',
    template: '%s | Earndeck Shipping',
  },
  description:
    'Marine surveying, cargo and container inspections, bunker and draft surveys, and maritime audits across Sri Lanka.',
  openGraph: { siteName: site.name, type: 'website', locale: 'en_LK' },
  robots: { index: true, follow: true },
  icons: { icon: '/earndeck-logo.png', apple: '/earndeck-logo.png' },
};

export const viewport: Viewport = {
  themeColor: '#071d2e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.legal,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 5/5 Nagahawatha Road, Wathtegedara',
      addressLocality: 'Maharagama',
      postalCode: '10280',
      addressCountry: 'LK',
    },
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
      </body>
    </html>
  );
}
