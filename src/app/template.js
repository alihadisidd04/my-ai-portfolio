// src/app/template.js
"use client";
import { useEffect } from "react";

export default function Template({ children }) {
    return (
        // We apply the animation here. 
        // Since this component remounts on every page change, the animation replays!
        <div className="animate-page">
            {children}
        </div>
    );
}