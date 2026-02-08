import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// 👇 THIS IS THE SEO MAGIC
export const metadata = {
  title: 'Ali Hadi | Full Stack Developer & AI Engineer',
  description: 'Portfolio of Ali Hadi Siddiqui, a Full Stack Developer specializing in Next.js, C++, and AI. View my projects and contact me.',
  keywords: ['Ali Hadi', 'Ali Hadi Siddiqui', 'Ali Hadi Portfolio', 'Next.js Developer', 'C++ Developer', 'Islamabad', 'Multan'],
  authors: [{ name: 'Ali Hadi' }],
  creator: 'Ali Hadi',
  openGraph: {
    title: 'Ali Hadi - Portfolio',
    description: 'Check out my latest projects in AI, Web Dev, and Game Design.',
    url: 'https://alihadi.vercel.app',
    siteName: 'Ali Hadi Portfolio',
    images: [
      {
        url: 'https://alihadi.vercel.app/og-image.png', // We can add an image later
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}