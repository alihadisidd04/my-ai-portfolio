// src/components/ChatBox.jsx
"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatBox() {
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hi! I am Ali's AI Assistant. Ask me about his projects, skills, or how to contact him!" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    // Ref for the bottom of the list
    const messagesEndRef = useRef(null);
    const isFirstLoad = useRef(true); // <--- New Flag

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        // If it's the very first load, DO NOTHING.
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            return;
        }

        // Only scroll for new messages
        scrollToBottom();
    }, [messages.length, isTyping]);

    const getAIResponse = (text) => {
        const lowerText = text.toLowerCase();

        // LOGIC: Simple Keyword Matching
        if (lowerText.includes("project") || lowerText.includes("work") || lowerText.includes("build")) {
            return "Ali has built impressive projects including a 'Space Explorer' game in C++ and this Portfolio in Next.js. You can check the Projects tab for more!";
        }
        if (lowerText.includes("skill") || lowerText.includes("stack") || lowerText.includes("tech")) {
            return "Ali specializes in C++, Next.js, React, and Assembly Language. He loves building high-performance applications.";
        }
        if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("hire")) {
            return "You can reach him directly at alihadi.sidd04@gmail.com. He is currently open to new opportunities!";
        }
        if (lowerText.includes("location") || lowerText.includes("where") || lowerText.includes("live")) {
            return "Ali is currently based in Islamabad, Pakistan.";
        }
        if (lowerText.includes("hometown") || lowerText.includes("multan")) {
            return "Ali is originally from Multan 🇵🇰, but currently lives in Islamabad.";
        }
        if (lowerText.includes("thank") || lowerText.includes("thx")) {
            return "You are very welcome!";
        }
        if (lowerText.includes("hello") || lowerText.includes("hi")) {
            return "Hello! How can I help you today?";
        }

        return "That is a great question! I can tell you about Ali's Skills, Projects, or Contact info.";
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            const responseText = getAIResponse(userMessage.content);

            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: responseText }
            ]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl h-[400px] flex flex-col justify-between relative overflow-hidden group hover:border-zinc-700 transition duration-300">

            {/* Header */}
            <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <h2 className="text-zinc-400 text-xs font-mono uppercase">AI Assistant</h2>
                </div>
                <div className="text-zinc-600 text-xs font-mono">v1.2 (Smart)</div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar">
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-message`}>
                        <div className={`px-4 py-3 rounded-2xl text-sm max-w-[85%] shadow-sm ${m.role === "user"
                            ? "bg-blue-600 text-white rounded-br-none"
                            : "bg-zinc-800 text-zinc-300 rounded-bl-none border border-zinc-700"
                            }`}>
                            {m.content}
                        </div>
                    </div>
                ))}

                {/* Typing Indicator (Also Animated) */}
                {isTyping && (
                    <div className="flex justify-start animate-message">
                        <div className="bg-zinc-800 border border-zinc-700 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center h-10">
                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-100"></span>
                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-200"></span>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="flex gap-2 relative">
                <input
                    className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition placeholder:text-zinc-600"
                    placeholder="Ask about my projects..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                    onClick={handleSend}
                    disabled={isTyping || !input.trim()}
                    className="bg-white text-black font-bold px-6 py-2 rounded-xl text-sm hover:bg-zinc-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Send
                </button>
            </div>
        </div>
    );
}