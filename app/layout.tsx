import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'TRUAIR Air Conditioning Melbourne | Split Systems, Ducted & Repairs',
  description:
    'TRUAIR is a family-run Melbourne air conditioning business specialising in split system installations, ducted air conditioning, multi-splits, servicing and repairs across Melbourne.',
  keywords: [
    'air conditioning Melbourne',
    'split system installation Melbourne',
    'ducted air conditioning Melbourne',
    'air conditioning repairs Melbourne',
    'TRUAIR',
  ],
  metadataBase: new URL('https://truair.com.au'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'TRUAIR Air Conditioning Melbourne | Split Systems, Ducted & Repairs',
    description:
      'Family-run Melbourne heating and cooling specialists for split systems, ducted air conditioning, servicing and repairs.',
    url: 'https://truair.com.au/',
    siteName: 'TRUAIR',
    images: ['https://iili.io/qMB2l3l.png'],
    locale: 'en_AU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YSJ70351D9"
        strategy="afterInteractive"
      />
      <Script
        id="google-tag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html:
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-YSJ70351D9');",
        }}
      ></Script>
    </html>
  );
}
