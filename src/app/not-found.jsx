'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, HelpCircle } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F8FAFC] dark:bg-[#090D16] px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            {/* 1. Background Ambient Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-125 sm:h-125 rounded-full blur-3xl opacity-60 dark:opacity-40"
                style={{
                    background:
                        'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(74, 222, 128, 0.08) 60%, transparent 100%)',
                }}
            />

            {/* 2. Content Container */}
            <div className="relative z-10 max-w-xl w-full text-center py-12">
                {/* Animated 404 Watermark / Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="relative inline-block mb-4"
                >
                    <span className="text-7xl sm:text-9xl font-black tracking-tight bg-gradient-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] bg-clip-text text-transparent select-none">
                        404
                    </span>
                </motion.div>

                {/* Headings & Descriptions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                    className="space-y-3"
                >
                    <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                        Page Not Found
                    </h1>

                    <p className="text-sm sm:text-base text-[#334155] dark:text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                        The page you are looking for might have been removed, had its name
                        changed, or is temporarily unavailable.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                    className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                >
                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-md hover:shadow-hover-light dark:hover:shadow-hover-dark transition-all duration-300 active:scale-98"
                    >
                        <Home className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] bg-white dark:bg-[rgba(15,23,42,0.75)] backdrop-blur-md text-[#0F172A] dark:text-[#F8FAFC] hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors active:scale-98"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                </motion.div>

                {/* Help / Footer Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="mt-12 inline-flex items-center gap-2 text-xs text-[#64748B]"
                >
                    <HelpCircle className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                    <span>Think this is an error? Feel free to report it.</span>
                </motion.div>
            </div>
        </main>
    );
}