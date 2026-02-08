// src/app/projects/page.js
"use client";

export default function Projects() {

    const projects = [
        {
            category: "C++ & Game Development",
            items: [
                {
                    title: "Smart City Islamabad",
                    year: "2025", // <--- Added Year
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
                    year: "2024", // <--- FIXED: Year is now 2024
                    desc: "An arcade shooter game clone. Implemented custom enemy AI patterns and projectile mechanics from scratch.",
                    tech: ["C++", "Graphics", "Logic"],
                    color: "border-blue-500/50"
                }
            ]
        },
        {
            category: "Web & Full Stack",
            items: [
                {
                    title: "Portfolio V1",
                    year: "2026",
                    desc: "The site you are looking at! Built for performance with a custom AI chatbot and glassmorphism design.",
                    tech: ["Next.js", "Tailwind", "AI"],
                    color: "border-purple-500/50"
                },
                {
                    title: "NEXUS AI Assistant",
                    year: "2026",
                    desc: "A voice-activated virtual assistant capable of handling natural language commands.",
                    tech: ["Java", "Speech API", "OOP"],
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

                <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                    Selected Works.
                </h1>

                <div className="grid grid-cols-1 gap-12">
                    {projects.map((section, idx) => (
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
                                            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition">{project.title}</h3>

                                            {/* 👇 THIS IS THE CHANGE: It now reads the specific year from data */}
                                            <span className="text-zinc-600 text-xs">{project.year}</span>

                                        </div>

                                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
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