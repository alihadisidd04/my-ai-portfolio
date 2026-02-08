// src/app/contact/page.js
"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        // Replace with your Formspree link if you have one
        setTimeout(() => {
            setStatus("✅ Message sent! I'll get back to you soon.");
            setForm({ name: "", email: "", message: "" });
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-12 flex items-center justify-center">

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl backdrop-blur-sm">

                {/* LEFT COLUMN: Contact Info */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                            Let's Talk.
                        </h1>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                            I'm open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    {/* Social Icons Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <a href="https://github.com/alihadisidd04" target="_blank" className="flex items-center gap-3 p-4 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-white transition group">
                            <FaGithub className="text-2xl text-zinc-400 group-hover:text-white transition" />
                            <span className="font-bold text-zinc-400 group-hover:text-white transition">GitHub</span>
                        </a>

                        <a href="https://www.linkedin.com/in/ali-hadi-52b63a39a/" target="_blank" className="flex items-center gap-3 p-4 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-blue-500 transition group">
                            <FaLinkedin className="text-2xl text-zinc-400 group-hover:text-blue-500 transition" />
                            <span className="font-bold text-zinc-400 group-hover:text-white transition">LinkedIn</span>
                        </a>

                        {/* WHATSAPP BUTTON */}
                        {/* Replace 92300... with your real number (include 92, remove 0 at start) */}
                        <a href="https://wa.me/923106672720" target="_blank" className="flex items-center gap-3 p-4 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-green-500 transition group">
                            <FaWhatsapp className="text-2xl text-zinc-400 group-hover:text-green-500 transition" />
                            <span className="font-bold text-zinc-400 group-hover:text-white transition">WhatsApp</span>
                        </a>

                        {/* EMAIL BUTTON */}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=alihadi.sidd04@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-red-500 transition group"
                        >
                            <FaEnvelope className="text-2xl text-zinc-400 group-hover:text-red-500 transition" />
                            <span className="font-bold text-zinc-400 group-hover:text-white transition">Email</span>
                        </a>
                    </div>
                </div>

                {/* RIGHT COLUMN: Form */}
                <form onSubmit={handleSubmit} className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl flex flex-col gap-6">
                    <h2 className="text-xl font-bold text-zinc-200">Send a Message</h2>
                    <div>
                        <label className="block text-xs font-mono text-zinc-500 uppercase mb-2">Your Name</label>
                        <input
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-white transition"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-mono text-zinc-500 uppercase mb-2">Your Email</label>
                        <input
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-white transition"
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-mono text-zinc-500 uppercase mb-2">Message</label>
                        <textarea
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white h-32 focus:outline-none focus:border-white transition resize-none"
                            placeholder="Hello..."
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition">
                        Send Message ↗
                    </button>
                    {status && <p className="text-green-400 text-sm text-center">{status}</p>}
                </form>

            </div>
        </div>
    );
}