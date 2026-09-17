'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ArrowRight } from 'lucide-react';

export default function Hero() {
    const birthYear = '19**'; // Update with your actual birth year

    return (
        <section className="relative overflow-hidden bg-[#F8FAFC] dark:bg-[#090D16] min-h-[calc(100vh-4rem)] flex items-center py-10 sm:py-16 px-4 sm:px-6 lg:px-12 transition-colors duration-300">
            {/* Background Ambient Glow Orb */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] rounded-full blur-3xl opacity-60 sm:opacity-70"
                style={{
                    background:
                        'radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(74,222,128,0.08) 60%)',
                }}
            />

            <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Section: Drops down from TOP */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="lg:col-span-5 flex flex-col items-center text-center p-5 sm:p-8 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-card-light dark:shadow-card-dark"
                >
                    {/* Profile Image Wrapper - Fully Responsive Dimensions */}
                    <div className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-2xl overflow-hidden border-2 border-[#E2E8F0] dark:border-[rgba(56,189,248,0.25)] shadow-md mb-4 sm:mb-5 group">
                        <Image
                            src="/Profile.jpg"
                            alt="Profile Photo"
                            fill
                            sizes="(max-width: 640px) 160px, (max-width: 1024px) 208px, 240px"
                            priority
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Name */}
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        Engr. Md. Ashikur Rahman
                    </h2>

                    {/* Subtitle / Role Tag */}
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-[#0284C7] dark:text-[#38BDF8]">
                        Master Trainer (ICT)
                    </p>

                    {/* Birth Year / Meta Pill */}
                    <div className="mt-3.5 sm:mt-4 inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-medium bg-[#F0F9FF] dark:bg-[#0F172A] text-[#64748B] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                        <Calendar className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <span>Born in {birthYear}</span>
                    </div>
                </motion.div>

                {/* Right Section: Rises up from BOTTOM */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                    className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 text-center lg:text-left"
                >
                    <div>
                        <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-[#F0F9FF] dark:bg-[#0F172A] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                            Welcome to my space
                        </span>

                        <h1 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-tight sm:leading-tight lg:leading-tight">
                            Academic Planner, Demonstrator (ICT),{' '}
                            <span className="bg-gradient-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] bg-clip-text text-transparent">
                                Master Trainer
                            </span>{' '}
                            (ICT) & Advisor.
                        </h1>
                    </div>

                    <p className="text-sm sm:text-base lg:text-lg text-[#334155] dark:text-[#94A3B8] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        I am working as an ICT teacher of Nayabazar Degree College, Ati,
                        Keraniganj, Dhaka-1312 since 01 January 2020. I am a truth seeker and
                        try to obey Islamic Laws.
                    </p>

                    {/* Basic Information Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1 sm:py-2 text-left">
                        <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-white dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs">
                            <Briefcase className="w-5 h-5 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                            <div>
                                <p className="text-xs text-[#64748B]">Experience</p>
                                <p className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                                    Lecturer (ICT)
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-white dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs">
                            <MapPin className="w-5 h-5 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                            <div>
                                <p className="text-xs text-[#64748B]">Location</p>
                                <p className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                                    Nayabazar Degree College, Ati, Keraniganj
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Actions - Full width on small screens, row on sm+ */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-md hover:shadow-hover-light dark:hover:shadow-hover-dark transition-all duration-300 active:scale-98"
                        >
                            Get In Touch
                            <ArrowRight className="w-4 h-4" />
                        </a>

                        <a
                            href="#projects"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] bg-white dark:bg-[rgba(15,23,42,0.75)] text-[#0F172A] dark:text-[#F8FAFC] hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors active:scale-98"
                        >
                            View Work
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}