'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle2, QrCode, ShieldCheck } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';

export default function YouTubingAchievement() {
    return (
        <section className="relative w-full py-8 sm:py-12 bg-transparent text-slate-800 dark:text-slate-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl p-4 sm:p-7 shadow-lg"
                >
                    {/* Ambient Specular Glow */}
                    <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-red-500/15 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-rose-500/15 blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 sm:gap-6">
                        {/* Left Content Area */}
                        <div className="space-y-2 sm:space-y-3">
                            {/* Badge Row */}
                            <div className="flex flex-wrap items-center gap-2">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                                    <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                    <span>Certificate of Participation[cite: 11]</span>
                                </div>

                                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10">
                                    <span>Robi 10 Minute School • MuktoPaath[cite: 11]</span>
                                </div>
                            </div>

                            {/* Title & Recipient (max 14px on mobile) */}
                            <div>
                                <h3 className="text-[13px] sm:text-lg md:text-xl font-extrabold text-slate-900 dark:text-white leading-tight sm:leading-snug">
                                    YouTubing[cite: 11]
                                </h3>
                                <p className="text-[11px] sm:text-xs text-sky-600 dark:text-sky-400 font-semibold mt-0.5">
                                    Awarded to Md. Ashikur Rahman[cite: 11]
                                </p>
                            </div>

                            {/* Description (max 14px on mobile, tight line-height) */}
                            <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-300 leading-[1.25] sm:leading-relaxed max-w-xl">
                                Successfully completed the online skill development course developed by Robi 10 Minute School and offered through MuktoPaath[cite: 11], focusing on educational content planning, video production, audience engagement, and channel growth.
                            </p>

                            {/* Signatories & Verification Metadata */}
                            <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-y-1.5 gap-x-3 text-[9px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-mono leading-none sm:leading-normal">
                                <span>Ayman Sadiq (Founder and CEO, Robi- 10 Minute School)[cite: 11]</span>
                                <span>•</span>
                                <span>Dr. Md. Abdul Mannan, PAA (Project Director, Additional Secretary, a2i Programme)[cite: 11]</span>
                                <span>•</span>
                                <span>ICT Division[cite: 11]</span>
                                <span>•</span>
                                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                                    <ShieldCheck className="w-3 h-3" />
                                    ID: MC-T472108V833637H199O[cite: 11]
                                </span>
                            </div>
                        </div>

                        {/* Right Authority Card */}
                        <div className="flex md:flex-col items-center justify-start md:justify-center gap-2.5 sm:gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/10 md:pl-6">
                            <div className="px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-slate-800/60 text-center">
                                <div className="text-[11px] sm:text-[12px] font-extrabold tracking-tight text-slate-900 dark:text-white uppercase flex items-center gap-1.5 justify-center leading-none">
                                    <FaYoutube className="w-3.5 h-3.5 text-red-500" />
                                    <span>MuktoPaath • a2i[cite: 11]</span>
                                </div>
                                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 dark:text-slate-400 block mt-1">
                                    ICT Division, Bangladesh[cite: 11]
                                </span>
                            </div>

                            {/* QR Verification Tag */}
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-800/40 text-[9px] sm:text-[10px] font-mono text-slate-600 dark:text-slate-300">
                                <QrCode className="w-3 h-3 text-sky-500" />
                                <span>QR Verified[cite: 11]</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}