import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Fraunces, IBM_Plex_Mono, Manrope } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NavigationProgress } from '@/components/NavigationProgress';
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
  openGraph: { siteName: site.name, type: 'website', locale: 'en_LK', url: site.url, title: 'Marine Surveyors in Sri Lanka | Earndeck Shipping', description: 'Independent marine surveying, draft and bunker surveys, vessel inspections and maritime audits across Sri Lanka.' },
  twitter: { card: 'summary', title: 'Marine Surveyors in Sri Lanka | Earndeck Shipping' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#071d2e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': site.url + '/#business',
    name: site.legal,
    url: site.url,
    description: 'Independent marine surveying, vessel inspections, cargo and bunker quantity surveys and maritime consultancy in Sri Lanka.',
    areaServed: [
      { '@type': 'Place', name: 'Colombo, Sri Lanka' },
      { '@type': 'Place', name: 'Galle, Sri Lanka' },
      { '@type': 'Place', name: 'Trincomalee, Sri Lanka' },
      { '@type': 'Place', name: 'Hambantota, Sri Lanka' },
    ],
    knowsAbout: ['Marine surveying', 'Draft surveys', 'Bunker quantity surveys', 'Cargo inspections', 'Vessel condition surveys', 'Maritime audits'],
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
        <NavigationProgress />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
      </body>
    </html>
  );
}
