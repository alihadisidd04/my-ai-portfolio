// src/components/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* LOGO */}
                <Link href="/" className="font-bold text-xl tracking-tighter">
                    ALI<span className="text-blue-500">.DEV</span>
                </Link>

                {/* LINKS */}
                <div className="flex gap-6 text-sm font-medium text-zinc-400">
                    <Link href="/" className="hover:text-white transition">
                        Home
                    </Link>
                    <Link href="/projects" className="hover:text-white transition">
                        Projects
                    </Link>
                    <Link href="/contact" className="hover:text-white transition">
                        Contact
                    </Link>
                </div>

            </div>
        </nav>
    );
}