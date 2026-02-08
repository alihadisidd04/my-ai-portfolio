// src/app/layout.js
import './globals.css';
import Navbar from '../app/components/Navbar'; // <--- Import it

export const metadata = {
  title: 'Ali Portfolio',
  description: 'My AI Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* <--- Placed at the top */}

        {/* This "children" is where your Home or Projects page gets inserted */}
        <div className="pt-20 animate-page">
          {children}
        </div>

      </body>
    </html>
  );
}