// src/app/layout.js
import './globals.css';
import Navbar from '../app/components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// 👇 UPDATED SEO METADATA
export const metadata = {
  title: 'Ali Hadi | Full Stack Developer & AI Engineer',
  description: 'Portfolio of Ali Hadi Siddiqui, a Full Stack Developer specializing in Next.js, C++, and AI. View my projects and contact me.',
  keywords: ['Ali Hadi', 'Ali Hadi Siddiqui', 'Ali Hadi Portfolio', 'Next.js Developer', 'C++ Developer', 'Islamabad', 'Multan', 'Software Engineer Pakistan'],
  authors: [{ name: 'Ali Hadi' }],
  creator: 'Ali Hadi',
  openGraph: {
    title: 'Ali Hadi - Portfolio',
    description: 'Check out my latest projects in AI, Web Dev, and Game Design.',
    url: 'https://alihadi.vercel.app',
    siteName: 'Ali Hadi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* Navbar stays at the top */}
        <Navbar />

        {/* Page Content with padding for the fixed navbar */}
        <div className="pt-20">
          {children}
        </div>

      </body>
    </html>
  );
}