'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
    const birthYear = 2002; // Update with your actual birth year

    return (
        <section className="relative overflow-hidden bg-[#F8FAFC] dark:bg-[#090D16] min-h-[calc(100vh-4rem)] flex items-center py-16 px-6 md:px-12 transition-colors duration-300">
            {/* Background Ambient Glow Orb */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full blur-3xl opacity-70"
                style={{
                    background:
                        'radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(74,222,128,0.08) 60%)',
                }}
            />

            <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Section: Drops down from TOP */}
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="lg:col-span-5 flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-card-light dark:shadow-card-dark"
                >
                    {/* Profile Image Wrapper */}
                    <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 border-[#E2E8F0] dark:border-[rgba(56,189,248,0.25)] shadow-lg mb-6 group">
                        <Image
                            src="/profile.webp"
                            alt="Profile Photo"
                            fill
                            priority
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Name */}
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        Monir Hossen
                    </h2>

                    {/* Subtitle / Role Tag */}
                    <p className="mt-1 text-sm font-semibold text-[#0284C7] dark:text-[#38BDF8]">
                        Full-Stack Developer
                    </p>

                    {/* Birth Year / Meta Pill */}
                    <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#F0F9FF] dark:bg-[#0F172A] text-[#64748B] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                        <Calendar className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <span>Born in {birthYear}</span>
                    </div>
                </motion.div>

                {/* Right Section: Rises up from BOTTOM */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                    className="lg:col-span-7 flex flex-col justify-center space-y-6"
                >
                    <div>
                        <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-[#F0F9FF] dark:bg-[#0F172A] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                            Welcome to my space
                        </span>

                        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-tight">
                            Building modern web experiences with{' '}
                            <span className="bg-gradient-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] bg-clip-text text-transparent">
                                clean code
                            </span>{' '}
                            & speed.
                        </h1>
                    </div>

                    <p className="text-base md:text-lg text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                        I specialize in crafting high-performance full-stack web applications,
                        responsive interfaces, and scalable solutions. Passionate about clean
                        architecture, UI polish, and functional design.
                    </p>

                    {/* Basic Information Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
                        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                            <Briefcase className="w-5 h-5 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                            <div>
                                <p className="text-xs text-[#64748B]">Experience</p>
                                <p className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Junior Full-Stack Dev</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                            <MapPin className="w-5 h-5 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                            <div>
                                <p className="text-xs text-[#64748B]">Location</p>
                                <p className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Actions */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-md hover:shadow-hover-light dark:hover:shadow-hover-dark transition-all duration-300"
                        >
                            Get In Touch
                            <ArrowRight className="w-4 h-4" />
                        </a>

                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] bg-white dark:bg-[rgba(15,23,42,0.75)] text-[#0F172A] dark:text-[#F8FAFC] hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors"
                        >
                            View Work
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}