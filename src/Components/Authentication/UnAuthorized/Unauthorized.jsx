'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    Home,
    Lock,
    Mail,
    PhoneCall,
    ShieldAlert,
    ShieldX,
} from 'lucide-react';

export default function UnauthorizedPage() {
    const router = useRouter();

    return (
        <section className="relative min-h-screen py-12 sm:py-20 px-3 sm:px-6 lg:px-12 bg-transparent text-slate-800 dark:text-slate-100 flex items-center justify-center select-none">
            {/* Background Accent Gradients */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
                <div className="w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-rose-500/10 dark:bg-rose-500/5 rounded-full blur-3xl transform -translate-y-12" />
            </div>

            <div className="relative z-10 w-full mx-auto max-w-xl text-center space-y-6 sm:space-y-8">
                {/* Visual Icon Badge */}
                <div className="inline-flex relative mx-auto">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-rose-500/10 dark:bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-500 shadow-lg shadow-rose-500/10">
                        <ShieldX className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-amber-500 text-slate-950 shadow-md">
                        <Lock className="w-3.5 h-3.5" />
                    </span>
                </div>

                {/* Status Header */}
                <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-500/10 border border-rose-500/20 font-mono">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        403 - Restricted Clearance Required
                    </span>
                    <h1 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        Access Denied to this Resource
                    </h1>
                    <p className="text-[11px] sm:text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-md mx-auto">
                        Your account does not have sufficient role clearance or administrative privileges to view this section of the Nayabazar Degree College ICT Faculty Portal.
                    </p>
                </div>

                {/* Information Card */}
                <div className="p-4 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 text-left space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Protocol Diagnostics
                        </span>
                        <span className="text-[10px] font-mono text-rose-500 font-semibold">
                            ERR_AUTH_FORBIDDEN
                        </span>
                    </div>
                    <ul className="text-[11px] text-slate-600 dark:text-slate-300 space-y-1.5">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                            <span>This module is restricted to authorized faculty members or ICT lab administrators.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                            <span>If you switched academic accounts, try logging in with your official institutional identity.</span>
                        </li>
                    </ul>
                </div>

                {/* Primary Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors cursor-pointer"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Go Back</span>
                    </button>

                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors"
                    >
                        <Home className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <span>Public Home</span>
                    </Link>
                </div>

                {/* Contact Help Support Footnote */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3 text-[#0284C7] dark:text-[#38BDF8]" />
                        ashiksirict@gmail.com
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                        <PhoneCall className="w-3 h-3 text-emerald-500" />
                        NBDC ICT Support Desk
                    </span>
                </div>
            </div>
        </section>
    );
}