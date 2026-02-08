// src/app/projects/page.js
"use client";

import { FaExternalLinkAlt } from "react-icons/fa"; // Optional: npm install react-icons if you haven't

export default function Projects() {

    // 1. NEW: Deployed / Live Projects (The "Flagship" Products)
    const liveProjects = [
        {
            title: "Stat Wars 🏏",
            desc: "Interactive cricket analytics dashboard comparing players using real-time API data and Chart.js visualizations.",
            tech: ["Next.js", "Chart.js", "APIs"],
            link: "https://stats-compare-ali.vercel.app/",
            color: "group-hover:text-green-400",
            border: "hover:border-green-500/50",
            bg: "hover:bg-green-900/10",
            badge: "LIVE APP"
        },
        {
            title: "Gully Scorer 📱",
            desc: "Offline-capable Progressive Web App (PWA) for scoring street cricket matches with undo functionality.",
            tech: ["React", "CSS Modules", "PWA"],
            link: "https://score-calculator-hadi.vercel.app/",
            color: "group-hover:text-yellow-400",
            border: "hover:border-yellow-500/50",
            bg: "hover:bg-yellow-900/10",
            badge: "PWA MOBILE"
        }
    ];

    // 2. EXISTING: Academic & Core Projects (Your existing data)
    const academicCategories = [
        {
            category: "C++ & Game Development",
            items: [
                {
                    title: "Smart City Islamabad",
                    year: "2025",
                    desc: "A complex simulation of city management using advanced Data Structures (Graphs, Trees) to optimize routes and resources.",
                    tech: ["C++", "DSA", "Graphs"],
                    color: "border-blue-500/50"
                },
                {
                    title: "Sonic The Hedgehog",
                    year: "2024",
                    desc: "A recreation of the classic platformer game. Features physics-based movement, collision detection, and score tracking.",
                    tech: ["C++", "OOP", "Game Logic"],
                    color: "border-blue-500/50"
                },
                {
                    title: "Buzz Bombers",
                    year: "2024",
                    desc: "An arcade shooter game clone. Implemented custom enemy AI patterns and projectile mechanics from scratch.",
                    tech: ["C++", "Graphics", "Logic"],
                    color: "border-blue-500/50"
                }
            ]
        },
        {
            category: "Web & Core Systems",
            items: [
                {
                    title: "NEXUS AI Assistant",
                    year: "2026",
                    desc: "A voice-activated virtual assistant capable of handling natural language commands.",
                    tech: ["Java", "Speech API", "OOP"],
                    color: "border-purple-500/50"
                },
                {
                    title: "Portfolio V1",
                    year: "2026",
                    desc: "The site you are looking at! Built for performance with a custom AI chatbot and glassmorphism design.",
                    tech: ["Next.js", "Tailwind", "AI"],
                    color: "border-purple-500/50"
                }
            ]
        },
        {
            category: "Small Projects & Tools",
            items: [
                {
                    title: "Weather App",
                    year: "2025",
                    desc: "A clean dashboard that fetches real-time weather data for any city using an external API.",
                    tech: ["JavaScript", "API", "CSS"],
                    color: "border-green-500/50"
                },
                {
                    title: "Scientific Calculator",
                    year: "2024",
                    desc: "A fully functional calculator with history features and advanced mathematical operations.",
                    tech: ["React", "State Logic"],
                    color: "border-green-500/50"
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-12">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-5xl font-bold mb-16 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                    Selected Works.
                </h1>

                {/* --- SECTION 1: LIVE APPLICATIONS (The New Stuff) --- */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                        <span className="text-green-500">🚀</span>
                        Deployed Applications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {liveProjects.map((project, idx) => (
                            <a
                                key={idx}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative p-8 rounded-3xl bg-zinc-900 border border-zinc-800 transition duration-300 ${project.border} ${project.bg}`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className={`text-3xl font-bold text-white transition ${project.color}`}>
                                        {project.title}
                                    </h3>
                                    <span className="px-3 py-1 text-[10px] font-bold tracking-widest bg-zinc-950 border border-zinc-800 rounded-full text-zinc-400 group-hover:text-white group-hover:border-white transition">
                                        {project.badge}
                                    </span>
                                </div>
                                <p className="text-zinc-400 mb-8 leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-mono text-zinc-500 bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <span className={`text-sm font-bold flex items-center gap-2 underline underline-offset-4 decoration-2 opacity-0 group-hover:opacity-100 transition duration-300 ${project.color.replace('group-hover:', '')}`}>
                                        Launch App ↗
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* --- SECTION 2: ACADEMIC & CORE PROJECTS (The Existing Stuff) --- */}
                <div className="space-y-16">
                    {academicCategories.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="text-xl font-mono text-zinc-500 uppercase tracking-widest mb-6 border-b border-zinc-800 pb-2">
                                {section.category}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map((project, pIdx) => (
                                    <div
                                        key={pIdx}
                                        className={`group bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-800 transition duration-300 hover:-translate-y-1 hover:border-opacity-100 ${project.color}`}
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition">
                                                {project.title}
                                            </h3>
                                            <span className="text-zinc-600 text-xs font-mono">{project.year}</span>
                                        </div>

                                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden line-clamp-3">
                                            {project.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tech.map((t, tIdx) => (
                                                <span key={tIdx} className="px-2 py-1 bg-black rounded text-[10px] font-mono text-zinc-500 uppercase border border-zinc-800">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}