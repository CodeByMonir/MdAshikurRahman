'use client';

import React from 'react';
import Link from 'next/link';
import {
    Activity,
    ArrowUpRight,
    Award,
    Bell,
    Calendar,
    CheckCircle2,
    Clock,
    Download,
    GraduationCap,
    Layers,
    Mail,
    Megaphone,
    MessageSquare,
    Plus,
    Send,
    Sparkles,
    TrendingUp,
    Users,
} from 'lucide-react';

export default function DashboardOverview() {
    // Top Level Real-time Metric Indicators
    const statCards = [
        {
            title: 'Enrolled ICT Students',
            value: '428',
            subtext: '+34 from HSC 2026 Batch',
            trend: '+8.6%',
            icon: Users,
            color: 'text-sky-500 dark:text-[#38BDF8]',
            borderGlow: 'hover:border-sky-500/50',
        },
        {
            title: 'Published Circulars',
            value: '18',
            subtext: '4 active exam routines',
            trend: 'Up to date',
            icon: Bell,
            color: 'text-emerald-500 dark:text-[#4ADE80]',
            borderGlow: 'hover:border-emerald-500/50',
        },
        {
            title: 'Verified Reviews',
            value: '64',
            subtext: '98% positive sentiment',
            trend: '+12 new',
            icon: MessageSquare,
            color: 'text-amber-500 dark:text-amber-400',
            borderGlow: 'hover:border-amber-500/50',
        },
        {
            title: 'Active Lab Batches',
            value: '06',
            subtext: 'Sheikh Russel Lab 01',
            trend: 'Full Capacity',
            icon: GraduationCap,
            color: 'text-indigo-500 dark:text-indigo-400',
            borderGlow: 'hover:border-indigo-500/50',
        },
    ];

    // Upcoming Academic Lab Schedules
    const upcomingSchedules = [
        {
            time: '10:00 AM - 11:30 AM',
            subject: 'HSC ICT Practical (Group Science A)',
            topic: 'HTML Form Authoring & CSS Flexbox Diagnostics',
            lab: 'Computer Lab 01',
            status: 'Ongoing',
            badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-[#4ADE80] border-emerald-500/20',
        },
        {
            time: '12:00 PM - 01:30 PM',
            subject: 'HSC ICT Practical (Group Humanities B)',
            topic: 'C Programming Functions & Array Structures',
            lab: 'Sheikh Russel Digital Lab',
            status: 'Upcoming',
            badgeClass: 'bg-sky-500/10 text-sky-600 dark:text-[#38BDF8] border-sky-500/20',
        },
        {
            time: '02:30 PM - 04:00 PM',
            subject: 'Teacher Pedagogy Consultation',
            topic: 'Blended E-Learning Module Sync on MuktoPaath',
            lab: 'Faculty Conference Room',
            status: 'Scheduled',
            badgeClass: 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-white/15',
        },
    ];

    // Recent System Activity Stream
    const recentActivities = [
        {
            title: 'New Student Feedback Submitted',
            detail: 'Tanjim Ahmed (HSC 2026, Science) posted a verified course testimonial.',
            time: '24 mins ago',
            type: 'review',
        },
        {
            title: 'Official Circular Dispatched',
            detail: 'HSC 2026 Batch Practical Class and Notebook submission schedule published.',
            time: '2 hours ago',
            type: 'notice',
        },
        {
            title: 'Direct Message Received',
            detail: 'Academic collaboration inquiry from Upazila Education Office.',
            time: 'Yesterday at 4:15 PM',
            type: 'mail',
        },
        {
            title: 'Credentials Verified',
            detail: 'DoICT Master Trainer certificate serial index #N56930824 synchronized.',
            time: 'Sep 26, 2026',
            type: 'award',
        },
    ];

    return (
        <div className="w-full space-y-6 sm:space-y-8 select-none">
            {/* Top Header & Quick Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-4">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
                            Faculty Operations Hub
                        </span>
                    </div>
                    <h1 className="text-[14px] sm:text-2xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        Administrative Overview
                    </h1>
                    <p className="text-[10px] sm:text-xs text-[#64748B] dark:text-[#94A3B8]">
                        Welcome back, Engr. Ashikur Rahman. Here is the operational summary for Nayabazar Degree College ICT department.
                    </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                    <Link
                        href="/notice"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 text-[10px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors"
                    >
                        <Megaphone className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <span>Public Notice Board</span>
                    </Link>

                    <Link
                        href="/dashboard/circulars"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold text-[10px] sm:text-xs text-white bg-linear-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-xs hover:shadow-md transition-all active:scale-95"
                    >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Post Notice</span>
                    </Link>
                </div>
            </div>

            {/* Metric Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {statCards.map((card, idx) => {
                    const Icon = card.icon;
                    return (
                        <div
                            key={idx}
                            className={`p-4 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-transparent transition-all duration-300 ${card.borderGlow} hover:-translate-y-0.5 shadow-xs flex flex-col justify-between space-y-3`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                    {card.title}
                                </span>
                                <div className="p-2 rounded-xl bg-slate-100/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 shrink-0">
                                    <Icon className={`w-4 h-4 ${card.color}`} />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono">
                                        {card.value}
                                    </span>
                                    <span className="text-[10px] font-bold text-emerald-600 dark:text-[#4ADE80] font-mono">
                                        {card.trend}
                                    </span>
                                </div>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                                    {card.subtext}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Central 2-Column Operational Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column (Span 7): Today's Lab Routines & Class Schedules */}
                <div className="lg:col-span-7 space-y-4">
                    <div className="p-4 sm:p-5 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-transparent space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                                <h2 className="text-[12px] sm:text-[14px] font-bold text-slate-900 dark:text-white">
                                    Today&apos;s Lab & Practical Sessions
                                </h2>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400">
                                Tuesday, NDC Campus
                            </span>
                        </div>

                        <div className="space-y-3">
                            {upcomingSchedules.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="p-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                                >
                                    <div className="space-y-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                                                {item.subject}
                                            </span>
                                            <span
                                                className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${item.badgeClass}`}
                                            >
                                                {item.status}
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                                            {item.topic}
                                        </p>
                                        <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono pt-0.5">
                                            <span>{item.time}</span>
                                            <span>•</span>
                                            <span>{item.lab}</span>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-[10px] font-semibold text-[#0284C7] dark:text-[#38BDF8] hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors shrink-0 self-start sm:self-auto cursor-pointer"
                                    >
                                        <span>Attendance</span>
                                        <ArrowUpRight className="w-3 h-3" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Circular Broadcast Card */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-sky-500/20 bg-sky-500/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8] flex items-center gap-1">
                                <Sparkles className="w-3 h-3" />
                                Instant Campus Broadcast
                            </span>
                            <h3 className="text-[12px] sm:text-[14px] font-bold text-slate-900 dark:text-white">
                                Sheikh Russel Digital Lab Notice Dispatch
                            </h3>
                            <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400">
                                Need to notify all batches regarding equipment maintenance or schedule updates?
                            </p>
                        </div>

                        <Link
                            href="/dashboard/circulars"
                            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-[#0284C7] dark:bg-[#38BDF8] dark:text-slate-950 shrink-0 hover:opacity-90 transition-opacity"
                        >
                            <span>Draft Circular</span>
                            <Send className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>

                {/* Right Column (Span 5): System Activity Feed & Fast Shortcuts */}
                <div className="lg:col-span-5 space-y-4">
                    {/* Activity Feed */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-transparent space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3">
                            <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                                <h2 className="text-[12px] sm:text-[14px] font-bold text-slate-900 dark:text-white">
                                    Recent Activity Feed
                                </h2>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400">Live</span>
                        </div>

                        <div className="space-y-3">
                            {recentActivities.map((act, idx) => (
                                <div
                                    key={idx}
                                    className="p-3 rounded-xl border border-slate-200/60 dark:border-white/5 bg-transparent flex items-start gap-3"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] dark:bg-[#38BDF8] shrink-0 mt-1.5" />
                                    <div className="min-w-0 flex-1 space-y-0.5">
                                        <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-tight">
                                            {act.title}
                                        </p>
                                        <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug">
                                            {act.detail}
                                        </p>
                                        <span className="text-[9px] font-mono text-slate-400 block pt-0.5">
                                            {act.time}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Access Matrix */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-transparent space-y-3">
                        <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Quick Shortcuts
                        </h2>
                        <div className="grid grid-cols-2 gap-2">
                            <Link
                                href="/reviews"
                                className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors text-left"
                            >
                                <MessageSquare className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8] mb-1.5" />
                                <p className="text-[11px] font-bold text-slate-900 dark:text-white">Reviews</p>
                                <p className="text-[9px] text-slate-500 dark:text-slate-400">View testimonials</p>
                            </Link>

                            <Link
                                href="/achievements"
                                className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors text-left"
                            >
                                <Award className="w-3.5 h-3.5 text-[#16A34A] dark:text-[#4ADE80] mb-1.5" />
                                <p className="text-[11px] font-bold text-slate-900 dark:text-white">Credentials</p>
                                <p className="text-[9px] text-slate-500 dark:text-slate-400">Verify a2i & DoICT</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}