'use client';

import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="relative min-h-[calc(100vh-4rem)] w-full flex flex-col items-center justify-center overflow-hidden bg-[#F8FAFC] dark:bg-[#090D16] px-4 transition-colors duration-300">
            {/* 1. Ambient Glow Orb */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-60 dark:opacity-40"
                style={{
                    background:
                        'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(74, 222, 128, 0.08) 60%, transparent 100%)',
                }}
            />

            {/* 2. Central Spinner Assembly */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                    {/* Outer Dual-Gradient Spinning Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#0284C7] border-r-[#16A34A] dark:border-t-[#38BDF8] dark:border-r-[#4ADE80]"
                    />

                    {/* Inner Counter-Spinning Subtle Ring */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#0284C7]/50 border-l-[#16A34A]/50 dark:border-b-[#38BDF8]/50 dark:border-l-[#4ADE80]/50"
                    />

                    {/* Center Glowing Core */}
                    <motion.div
                        animate={{
                            scale: [0.85, 1.15, 0.85],
                            opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-gradient-to-tr from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] shadow-hover-light dark:shadow-hover-dark"
                    />
                </div>

                {/* 3. Loading Text & Status Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 text-center space-y-1.5"
                >
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                        Loading
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            ...
                        </motion.span>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#64748B]">
                        Please wait while the page is preparing
                    </p>
                </motion.div>
            </div>
        </div>
    );
}