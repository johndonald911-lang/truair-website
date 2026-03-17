import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TRUAIR | Melbourne Heating & Cooling Specialists',
  description: 'TRUAIR is a family-run air conditioning business based in Melbourne’s west, proudly servicing homes and businesses across Melbourne.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
