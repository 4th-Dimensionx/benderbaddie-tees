import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BenderBaddie | Custom Graphic Tees',
  description: 'Luxury streetwear custom tees, cross-vendor outfits, and statement graphic wear by BenderBaddie.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
