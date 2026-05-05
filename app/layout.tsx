import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://github.com/ayyan420'),
  title: {
    default: 'Ayyan Saddiqui | Senior Software Engineer',
    template: '%s | Ayyan Saddiqui'
  },
  description: 'Senior Software Engineer specializing in Python, Odoo ERP, and AI-powered business automation with 5+ years of global experience.',
  keywords: ['Ayyan Saddiqui', 'Odoo Developer', 'Senior Software Engineer', 'Python Engineer', 'ERP Implementation', 'ZATCA Phase 2', 'Odoo AI Copilot', 'Lahore Software Engineer'],
  authors: [{ name: 'Ayyan Saddiqui' }],
  creator: 'Ayyan Saddiqui',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/ayyan420',
    title: 'Ayyan Saddiqui | Senior Software Engineer',
    description: 'Senior Software Engineer specializing in Python, Odoo ERP, and AI-powered business automation.',
    siteName: 'Ayyan Saddiqui Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayyan Saddiqui | Senior Software Engineer',
    description: 'Senior Software Engineer specializing in Python, Odoo ERP, and AI-powered business automation.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-[#050505] text-[#e4e2e4] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
