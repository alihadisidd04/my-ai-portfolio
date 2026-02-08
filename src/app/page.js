// src/app/page.js
"use client"; // <--- 1. Add this to enable browser commands
import { useEffect } from "react"; // <--- 2. Import useEffect
import Link from 'next/link';
import ChatBox from './components/ChatBox';

export default function Home() {

  // 3. THIS IS THE FIX: Force scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardStyle = "bg-zinc-900 border border-zinc-800 p-6 rounded-3xl transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] flex flex-col justify-between overflow-hidden";

  return (
    <main className="min-h-screen bg-black text-zinc-100 p-4 md:p-12 flex justify-center items-center">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full">

        {/* HERO SECTION */}
        <div className={`col-span-1 md:col-span-2 md:row-span-2 ${cardStyle} relative group`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/20 blur-3xl rounded-full -translate-y-10 translate-x-10 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">Online</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white">
              Ali Hadi <br />
              <span className="text-zinc-600">Siddiqui.</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              Full Stack Developer building <span className="text-zinc-200">fast</span> web apps with Next.js and AI.
            </p>
          </div>

          <div className="relative z-10 mt-8">
            <Link href="/projects" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition">
              View Projects
            </Link>
          </div>
        </div>

        {/* LOCATION (Updated with "Journey" Design) */}
        <div className={`col-span-1 h-48 ${cardStyle} relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">My Journey</h2>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-zinc-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                  <span className="text-sm font-medium">Multan</span>
                </div>
                <div className="w-0.5 h-4 bg-zinc-800 ml-[2.5px]"></div>
                <div className="flex items-center gap-2 text-white">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                  <span className="text-lg font-bold tracking-tight">Islamabad</span>
                </div>
              </div>
            </div>
            <div className="text-4xl self-end opacity-20 grayscale hover:grayscale-0 transition duration-500">🇵🇰</div>
          </div>
        </div>

        {/* TECH STACK */}
        <div className={`col-span-1 h-48 ${cardStyle} justify-center`}>
          <h2 className="text-zinc-500 text-xs font-mono uppercase mb-4">Toolkit</h2>
          <div className="flex flex-wrap gap-2">
            {["C++", "Next.js", "React", "Tailwind", "Assembly"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-lg text-xs font-bold text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* AI CHAT */}
        <div className="col-span-1 md:col-span-3">
          <ChatBox />
        </div>

      </div>
    </main>
  );
}