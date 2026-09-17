'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Users2,
    Presentation,
    Award,
    BookCheck,
    CheckCircle2,
    Sparkles,
} from 'lucide-react';

export default function TeacherSection() {
    const teacherCollaborationHighlights = [
        'Conducted Master Trainer workshops empowering educators with interactive ICT pedagogy.',
        'Collaborated with senior faculty on curriculum development, lesson pacing, and digital exam schemes.',
        'Trained fellow teachers on modern digital classroom tools, smart presentation setups, and lab management.',
        'Fostered teacher peer-review groups for continuous professional and technical growth.',
    ];

    const collaborationMetrics = [
        { label: 'Educators Mentored', value: '120+' },
        { label: 'Faculty Workshops', value: '25+' },
        { label: 'Training Hubs', value: '5+' },
        { label: 'Collaborative Projects', value: '15+' },
    ];

    return (
        <section
            id="teachers"
            className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-300"
        >
            {/* ================= UNIQUE BACKGROUND SYSTEM ================= */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
            >
                {/* 1. Geometric Micro-Dot Matrix Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
                    style={{
                        backgroundImage: 'radial-gradient(#38BDF8 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px',
                        maskImage: 'radial-gradient(ellipse 65% 55% at 50% 50%, #000 65%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 50%, #000 65%, transparent 100%)',
                    }}
                />

                {/* 2. Educational Network Constellation SVG */}
                <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full opacity-[0.08] dark:opacity-[0.14]"
                    viewBox="0 0 800 600"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="1.2"
                >
                    {/* Interconnecting Teacher Hub Lines */}
                    <line x1="120" y1="180" x2="280" y2="120" strokeDasharray="4 4" />
                    <line x1="280" y1="120" x2="480" y2="200" />
                    <line x1="480" y1="200" x2="680" y2="140" strokeDasharray="6 4" />
                    <line x1="280" y1="120" x2="380" y2="340" />
                    <line x1="480" y1="200" x2="380" y2="340" strokeDasharray="3 3" />
                    <line x1="380" y1="340" x2="220" y2="480" />
                    <line x1="380" y1="340" x2="580" y2="460" />
                    <line x1="580" y1="460" x2="700" y2="380" strokeDasharray="5 5" />

                    {/* Glowing Hub Nodes */}
                    <circle cx="120" cy="180" r="4" fill="#0284C7" />
                    <circle cx="280" cy="120" r="5" fill="#38BDF8" />
                    <circle cx="480" cy="200" r="6" fill="#4ADE80" />
                    <circle cx="680" cy="140" r="4" fill="#0284C7" />
                    <circle cx="380" cy="340" r="7" fill="#38BDF8" />
                    <circle cx="220" cy="480" r="5" fill="#4ADE80" />
                    <circle cx="580" cy="460" r="5" fill="#38BDF8" />
                    <circle cx="700" cy="380" r="4" fill="#0284C7" />
                </svg>

                {/* 3. Breathing Knowledge Ambient Core (Central Beacon) */}
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.35, 0.55, 0.35],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] lg:w-[750px] h-[350px] sm:h-[550px] lg:h-[750px] rounded-full blur-3xl opacity-40"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(74, 222, 128, 0.08) 55%, transparent 75%)',
                    }}
                />

                {/* 4. Diagonal Accent Beams (Top-Left & Bottom-Right) */}
                <div
                    className="absolute -top-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-30 dark:opacity-20"
                    style={{ background: 'radial-gradient(circle, #0284C7 0%, transparent 70%)' }}
                />
                <div
                    className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-30 dark:opacity-20"
                    style={{ background: 'radial-gradient(circle, #16A34A 0%, transparent 70%)' }}
                />
            </div>
            {/* ============================================================= */}

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
                {/* 1. TOP: Information & Experience with Teachers (Appears from BOTTOM) */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="flex flex-col space-y-8"
                >
                    {/* Header & Subtitle */}
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-[#F0F9FF] dark:bg-[#0F172A] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs">
                            <Users2 className="w-3.5 h-3.5" />
                            Faculty Collaboration & Mentorship
                        </span>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                            Working Alongside & Empowering Educators
                        </h2>

                        <p className="text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                            Extensive experience collaborating with collegiate faculty, leading regional
                            ICT training initiatives, and fostering shared pedagogical best practices.
                        </p>
                    </div>

                    {/* Quick Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                        {collaborationMetrics.map((item, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-xl text-center bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-card-light dark:shadow-card-dark hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors"
                            >
                                <p className="text-xl sm:text-2xl font-extrabold text-[#0284C7] dark:text-[#38BDF8]">
                                    {item.value}
                                </p>
                                <p className="text-xs text-[#64748B] mt-1 font-medium">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Experience Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                        {teacherCollaborationHighlights.map((point, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs"
                            >
                                <CheckCircle2 className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                                <p className="text-xs sm:text-[13px] text-[#334155] dark:text-[#94A3B8] leading-normal">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 2. BOTTOM: Wide Group of Teachers Image Banner (Appears from TOP) */}
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                    className="w-full"
                >
                    <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden border-2 border-[#E2E8F0] dark:border-[rgba(56,189,248,0.25)] shadow-card-light dark:shadow-card-dark group">
                        <Image
                            src="/teachers.jpg"
                            alt="Faculty and Educators Group Photo"
                            fill
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            priority
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Depth Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                        {/* Floating Badge */}
                        <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/40 backdrop-blur-md border border-white/20 text-white">
                            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                            <span>Academic Community</span>
                        </div>

                        {/* Bottom Caption Overlay */}
                        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
                            <div>
                                <p className="text-[11px] uppercase tracking-wider font-semibold text-[#38BDF8]">
                                    Nayabazar Degree College & Training Hubs
                                </p>
                                <h3 className="text-base sm:text-xl font-bold drop-shadow-sm">
                                    Faculty Assembly & Teacher Development Workshops
                                </h3>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-xs">
                                <Presentation className="w-4 h-4 text-[#4ADE80]" />
                                <span>Professional Development</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}