import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Karol Martins — Short-form Video Editor for Coaches & Educators',
  description:
    'Signature Shorts: 8 short videos a month for coaches, consultants and educators, edited in one consistent brand style and delivered every week. Fully async. Free sample edit.',
  openGraph: {
    title: 'Karol Martins — Cut to keep them watching.',
    description: 'Your weekly shorts, edited in one consistent brand style. Free sample edit, no calls.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f4f2' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0c' },
  ],
};

// Apply the saved theme before first paint (light is the default).
const themeScript = `try{var t=localStorage.getItem('hkm-theme');document.documentElement.dataset.theme=(t==='dark'||t==='light')?t:'light'}catch(e){document.documentElement.dataset.theme='light'}`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="is-loading">{children}</body>
    </html>
  );
}
