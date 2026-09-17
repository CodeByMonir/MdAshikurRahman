'use client';

import { motion } from 'framer-motion';

export default function HeroBackground() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden select-none -z-10 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-300"
        >
            {/* 1. Subtle Structural Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
                    backgroundSize: '48px 48px',
                    color: '#38BDF8',
                    maskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, #000 70%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, #000 70%, transparent 100%)',
                }}
            />

            {/* 2. Primary Ambient Glow Orb (Sky Blue Accent) */}
            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.75, 0.9, 0.75],
                    x: ['-50%', '-48%', '-50%'],
                    y: ['0%', '-4%', '0%'],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute -top-32 left-1/2 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px] rounded-full blur-3xl opacity-80"
                style={{
                    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(74, 222, 128, 0.08) 65%, transparent 100%)',
                }}
            />

            {/* 3. Secondary Counter-Glow Orb (Green/Emerald Accent) */}
            <motion.div
                animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.4, 0.6, 0.4],
                    x: ['0%', '5%', '0%'],
                    y: ['0%', '6%', '0%'],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
                className="absolute top-1/3 -right-24 sm:right-10 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] rounded-full blur-3xl opacity-50"
                style={{
                    background: 'radial-gradient(circle, rgba(74, 222, 128, 0.14) 0%, rgba(2, 132, 199, 0.06) 70%, transparent 100%)',
                }}
            />

            {/* 4. Bottom Vignette Fade (smooth transition into next section) */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8FAFC] dark:from-[#090D16] to-transparent" />
        </div>
    );
}