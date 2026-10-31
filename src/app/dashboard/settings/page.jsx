'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    Construction,
    Hammer,
    Home,
    LayoutDashboard,
    Sparkles,
    Wrench,
} from 'lucide-react';

export default function SettingsUnderConstructionPage() {
    const router = useRouter();

    return (
        <section className="relative min-h-[calc(100vh-140px)] py-12 sm:py-16 px-3 sm:px-6 flex items-center justify-center select-none">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
                <div className="w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 w-full max-w-lg mx-auto text-center space-y-6">
                {/* Visual Icon Badge */}
                <div className="inline-flex relative mx-auto">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500 shadow-lg shadow-amber-500/10">
                        <Construction className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-[#0284C7] dark:bg-[#38BDF8] text-white dark:text-slate-950 shadow-md">
                        <Wrench className="w-3.5 h-3.5" />
                    </span>
                </div>

                {/* Status Header */}
                <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 font-mono">
                        <Hammer className="w-3.5 h-3.5" />
                        Under Active Construction
                    </span>
                    <h1 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        System Settings Module
                    </h1>
                    <p className="text-[11px] sm:text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-sm mx-auto">
                        This section is currently being configured for portal administration, security policies, and preference controls.
                    </p>
                </div>

                {/* Progress / Status Card */}
                <div className="p-4 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 text-left space-y-2.5">
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-[#0284C7] dark:text-[#38BDF8]" />
                            Upcoming Configurations
                        </span>
                        <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-semibold">
                            Phase 2 Rollout
                        </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-normal">
                        Session timeouts, password resets, academic batch archiving, and faculty notification rules will be accessible here.
                    </p>
                </div>

                {/* Quick Navigation Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors cursor-pointer"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Go Back</span>
                    </button>

                    <Link
                        href="/dashboard"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-linear-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-sm hover:shadow-md transition-all active:scale-95"
                    >
                        <LayoutDashboard className="w-3.5 h-3.5" />
                        <span>Return to Dashboard</span>
                    </Link>

                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors"
                    >
                        <Home className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <span>Public Home</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}