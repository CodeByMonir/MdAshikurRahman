'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Building2,
    MapPin,
    Calendar,
    Award,
    CheckCircle2,
    ExternalLink,
} from 'lucide-react';

export default function CampusSection() {
    const experiences = [
        'Conducted interactive ICT lectures and practical lab sessions for higher secondary students.',
        'Formulated academic curriculum schedules, lesson plans, and practical examination modules.',
        'Mentored teachers across regional training hubs as an ICT Master Trainer.',
        'Supervised college digital resources, networking hardware, and computer laboratory systems.',
    ];

    return (
        <section
            id="campus"
            className="relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#F0F9FF] dark:bg-[#0F172A] transition-colors duration-300"
        >
            {/* 1. Animated Angled Light Ray / Beam (Top Right) */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [-12, -8, -12],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="pointer-events-none absolute -top-40 -right-20 w-150 h-87.5 rounded-full blur-[110px] opacity-40 select-none"
                style={{
                    background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.25) 0%, rgba(74, 222, 128, 0.12) 100%)',
                }}
            />

            {/* 2. Counter Glow Light Beam (Bottom Left) */}
            <motion.div
                animate={{
                    opacity: [0.25, 0.4, 0.25],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="pointer-events-none absolute -bottom-32 -left-24 w-125 h-87.5 rounded-full blur-[100px] opacity-35 select-none"
                style={{
                    background: 'linear-gradient(45deg, rgba(2, 132, 199, 0.18) 0%, rgba(22, 163, 74, 0.08) 100%)',
                }}
            />

            {/* 3. Modern SVG Organic Wave / Circuit Lines */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 select-none opacity-[0.035] dark:opacity-[0.07] overflow-hidden"
            >
                <svg
                    className="w-full h-full object-cover"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 800"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="1.5"
                >
                    <path d="M-100,200 C300,350 500,50 900,200 C1300,350 1500,100 1600,250" />
                    <path d="M-100,300 C250,450 600,150 1000,300 C1400,450 1550,200 1650,350" />
                    <path d="M-100,400 C200,550 700,250 1100,400 C1500,550 1600,300 1700,450" />
                    <path d="M-100,500 C350,650 800,350 1200,500 C1600,650 1700,400 1800,550" />
                </svg>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left Section: Content & Work Experience (Appears from the RIGHT) */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="lg:col-span-6 flex flex-col space-y-4 order-2 lg:order-1"
                >
                    <div>
                        {/* Category Tag */}
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-white dark:bg-[#090D16] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                            <Building2 className="w-3.5 h-3.5" />
                            Campus & Professional Experience
                        </span>

                        {/* Main Role Title */}
                        <h2 className="mt-2.5 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                            Lecturer & Demonstrator (ICT)
                        </h2>

                        {/* Institution Subtitle */}
                        <p className="mt-0.5 text-sm sm:text-base font-semibold text-[#0284C7] dark:text-[#38BDF8]">
                            Nayabazar Degree College
                        </p>
                    </div>

                    {/* Quick Meta Badges */}
                    <div className="flex flex-wrap gap-2.5 text-xs text-[#64748B]">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-[rgba(15,23,42,0.85)] backdrop-blur-xs border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                            <Calendar className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                            <span>01 January 2020 – Present</span>
                        </div>

                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-[rgba(15,23,42,0.85)] backdrop-blur-xs border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                            <MapPin className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                            <span>Ati, Keraniganj, Dhaka-1312</span>
                        </div>
                    </div>

                    {/* Experience Description */}
                    <p className="text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                        Serving as an academic planner and ICT demonstrator, focusing on computer
                        architecture, web fundamentals, digital literacy, and modern pedagogical development.
                    </p>

                    {/* Key Responsibilities / Experience Highlights */}
                    <div className="space-y-2 pt-0.5">
                        {experiences.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/85 dark:bg-[rgba(9,13,22,0.7)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs"
                            >
                                <CheckCircle2 className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                                <p className="text-xs sm:text-[13px] text-[#334155] dark:text-[#94A3B8] leading-normal">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-1">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] bg-white dark:bg-[rgba(9,13,22,0.7)] text-[#0F172A] dark:text-[#F8FAFC] hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors active:scale-98"
                        >
                            Academic Inquiries
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </motion.div>

                {/* Right Section: Image Container (Appears from the LEFT) */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="lg:col-span-6 flex justify-center order-1 lg:order-2"
                >
                    <div className="relative w-full max-w-lg lg:max-w-xl aspect-4/3 rounded-2xl overflow-hidden border-2 border-[#E2E8F0] dark:border-[rgba(56,189,248,0.25)] shadow-card-light dark:shadow-card-dark group">
                        <Image
                            src="/university.jpg"
                            alt="Nayabazar Degree College Campus"
                            fill
                            sizes="(max-width: 1024px) 100vw, 550px"
                            priority
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Subtle Gradient Overlay on Hover */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent opacity-85" />

                        {/* Bottom Photo Caption Tag */}
                        <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-[#38BDF8]" />
                                <span className="text-xs font-medium drop-shadow-sm">
                                    Nayabazar Degree College Campus
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}