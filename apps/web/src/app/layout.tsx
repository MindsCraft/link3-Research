import type { Metadata } from 'next';
import { Figtree, Inter } from 'next/font/google';
import '@/styles/globals.css';
import { SegmentBar } from '@/components/ui/SegmentBar';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { FloatingChat } from '@/components/ui/FloatingChat';
import { siteConfig } from '@/data/site';

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: `${siteConfig.brandName} — 100% Full Fibre Broadband & Digital Infrastructure`,
  description:
    'Experience high-speed 100% full-fibre home broadband, business internet, and enterprise connectivity with symmetrical gigabit speeds.',
  keywords: ['Fibre Broadband', 'Home Internet', 'Business Fibre', '1Gbps', '2Gbps', 'Link3'],
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${inter.variable}`}>
      <body>
        <SegmentBar />
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
