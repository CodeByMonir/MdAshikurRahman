'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { Bell, ChevronRight, Sparkles } from 'lucide-react';

export default function NoticeMarquee() {
    const notices = [
        'HSC 2026 Batch: ICT Practical Class & Lab Exam Schedules have been announced.',
        'Basic Teacher Training & Blended E-Learning Pedagogy workshop materials are now accessible.',
        'Nayabazar Degree College: Online evaluation tests and review portals are currently active.',
        'Upcoming ICT Olympiad & Sheikh Russel Digital Lab interactive programming sessions.',
    ];

    const trackRef = useRef(null);
    const primaryRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let animationFrameId;
        let position = 0;
        const speed = 0.8; // Adjust speed (pixels per frame)

        const step = () => {
            if (!isPaused && trackRef.current && primaryRef.current) {
                const singleSequenceWidth = primaryRef.current.offsetWidth;

                position += speed;
                // Once half of the duplicate track has scrolled, reset seamlessly
                if (position >= singleSequenceWidth) {
                    position = 0;
                }

                trackRef.current.style.transform = `translate3d(-${position}px, 0, 0)`;
            }
            animationFrameId = requestAnimationFrame(step);
        };

        animationFrameId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    return (
        <aside
            aria-label="Important Notices"
            className="relative w-full border-y border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-[#090D16]/60 backdrop-blur-md transition-colors duration-300 overflow-hidden select-none"
        >
            <div className="max-w-7xl mx-auto flex items-center h-10 sm:h-11 px-3 sm:px-6 lg:px-12">
                {/* Fixed Label Badge */}
                <div className="relative z-20 flex items-center shrink-0 pr-3 sm:pr-4 bg-transparent">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-linear-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] text-white dark:text-[#090D16] shadow-xs shrink-0">
                        <Bell className="w-3 h-3 shrink-0 animate-bounce" />
                        <span>Notice</span>
                    </span>
                </div>

                {/* Left/Right Edge Fade Gradients */}
                <div
                    className="relative flex-1 overflow-hidden h-full flex items-center min-w-0"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="pointer-events-none absolute left-0 inset-y-0 w-6 sm:w-10 bg-gradient-to-r from-white/90 dark:from-[#090D16]/90 to-transparent z-10" />
                    <div className="pointer-events-none absolute right-0 inset-y-0 w-6 sm:w-10 bg-gradient-to-l from-white/90 dark:from-[#090D16]/90 to-transparent z-10" />

                    {/* Pure JS Controlled Track */}
                    <div
                        ref={trackRef}
                        className="inline-flex flex-nowrap items-center whitespace-nowrap will-change-transform"
                    >
                        {/* Primary Sequence */}
                        <div
                            ref={primaryRef}
                            className="inline-flex flex-nowrap items-center gap-8 sm:gap-12 pr-8 sm:pr-12 text-[11px] sm:text-[13px] text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap shrink-0"
                        >
                            {notices.map((text, idx) => (
                                <div key={`orig-${idx}`} className="inline-flex items-center gap-2 shrink-0 whitespace-nowrap">
                                    <Sparkles className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                                    <span className="whitespace-nowrap inline-block">{text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Duplicate Sequence for Seamless Looping */}
                        <div
                            className="inline-flex flex-nowrap items-center gap-8 sm:gap-12 pr-8 sm:pr-12 text-[11px] sm:text-[13px] text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap shrink-0"
                            aria-hidden="true"
                        >
                            {notices.map((text, idx) => (
                                <div key={`dup-${idx}`} className="inline-flex items-center gap-2 shrink-0 whitespace-nowrap">
                                    <Sparkles className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                                    <span className="whitespace-nowrap inline-block">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Direct Action Link */}
                <div className="relative z-20 flex items-center shrink-0 pl-2 sm:pl-3 border-l border-slate-200 dark:border-white/10 bg-transparent">
                    <Link
                        href="/notice"
                        className="inline-flex items-center gap-0.5 text-[10px] sm:text-[11px] font-semibold text-[#0284C7] dark:text-[#38BDF8] hover:underline shrink-0"
                    >
                        <span>All</span>
                        <ChevronRight className="w-3 h-3" />
                    </Link>
                </div>
            </div>
        </aside>
    );
}