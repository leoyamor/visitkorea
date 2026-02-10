import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_URL } from '../lib/site';

export const metadata: Metadata = {
  title: {
    default: 'Korea Travel Guide',
    template: '%s | Korea Travel Guide'
  },
  description: 'Simple travel tips for foreigners visiting Korea.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: 'Korea Travel Guide',
    description: 'Simple travel tips for foreigners visiting Korea.',
    url: SITE_URL,
    siteName: 'Korea Travel Guide',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
