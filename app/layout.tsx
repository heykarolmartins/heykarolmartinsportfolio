import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Karol Martins — Short-form Video Editor for Creators',
  description:
    'Weekly short-form editing for creators, experts and brands. Designer-grade captions and motion, fully async, delivered on schedule. Get a free sample edit.',
  openGraph: {
    title: 'Karol Martins — Cut to keep them watching.',
    description: 'Weekly short-form editing with a designer’s eye. Free sample edit, no calls required.',
    type: 'website',
  },
};

export const viewport: Viewport = { themeColor: '#151613' };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="is-loading">{children}</body>
    </html>
  );
}
