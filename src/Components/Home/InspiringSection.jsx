'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    GraduationCap,
    BookOpen,
    Users,
    Award,
    Sparkles,
    CheckCircle2
} from 'lucide-react';

export default function InspiringSection() {
    const pedagogicalStats = [
        { label: 'Years Teaching', value: '7+ Years' },
        { label: 'Students Guided', value: '1,500+' },
        { label: 'Training Workshops', value: '40+' },
        { label: 'Curriculum Modules', value: '12+' },
    ];

    const teachingHighlights = [
        'Specialized in HSC ICT syllabus: Number Systems, Web Design (HTML/CSS), C Programming, and DBMS.',
        'Focus on practical hands-on lab sessions to bridge theoretical knowledge with real-world logic.',
        'Certified ICT Master Trainer conducting teacher development and pedagogy training.',
        'Dedicated to interactive visual learning and structured exam preparation methodology.',
    ];

    return (
        <section
            id="teacher"
            className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-transparent transition-colors duration-300"
        >
            {/* Background Ambient Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-150 sm:h-150 rounded-full blur-3xl opacity-50 dark:opacity-25"
                style={{
                    background:
                        'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(74, 222, 128, 0.08) 65%, transparent 100%)',
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">

                {/* Top: Wide Image Banner (Appears from BOTTOM) */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="w-full"
                >
                    <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border-2 border-[#E2E8F0] dark:border-[rgba(56,189,248,0.25)] shadow-card-light dark:shadow-card-dark group">
                        <Image
                            src="/inspiring.jpg" // replace with your wide classroom or teaching photograph
                            alt="Classroom Lecture and ICT Training Session"
                            fill
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            priority
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Gradient Overlays for Depth and Readable Badges */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />

                        {/* Floating Top-Right Badge */}
                        <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white">
                            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                            <span>Interactive Pedagogy</span>
                        </div>

                        {/* Bottom Overlay Info Tag */}
                        <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-white">
                            <div>
                                <p className="text-xs uppercase tracking-wider font-semibold text-[#38BDF8]">
                                    ICT Classroom & Laboratory
                                </p>
                                <h3 className="text-lg sm:text-2xl font-bold drop-shadow-sm">
                                    Inspiring the Next Generation of Technologists
                                </h3>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-xs">
                                <Users className="w-4 h-4 text-[#4ADE80]" />
                                <span>Active Engagement</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom: Information Section (Appears from TOP) */}
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                    className="flex flex-col space-y-8"
                >
                    {/* Header Description */}
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-[#F0F9FF] dark:bg-[#0F172A] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                            <GraduationCap className="w-3.5 h-3.5" />
                            Teaching Philosophy & Expertise
                        </span>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                            Empowering Students with Digital Literacy & Code
                        </h2>

                        <p className="text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                            Committed to breaking down complex computing, networking, and programming
                            concepts into digestible, engaging lessons tailored for higher secondary students.
                        </p>
                    </div>

                    {/* Quick Metrics Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                        {pedagogicalStats.map((stat, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-xl text-center bg-white dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors"
                            >
                                <p className="text-xl sm:text-2xl font-extrabold text-[#0284C7] dark:text-[#38BDF8]">
                                    {stat.value}
                                </p>
                                <p className="text-xs text-[#64748B] mt-1 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Teaching Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                        {teachingHighlights.map((point, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs"
                            >
                                <CheckCircle2 className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                                <p className="text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] leading-normal">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}