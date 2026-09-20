'use client';

import Link from 'next/link';
import {
    ArrowUp,
    Mail,
    MapPin,
    Phone,
    MessageCircle,
    GraduationCap,
    Terminal,
    ExternalLink,
} from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About & Profile', href: '/#about' },
        { label: 'Achievements', href: '/achievements' },
        { label: 'Faculty & Community', href: '/#teachers' },
        { label: 'Photo Gallery', href: '/#gallery' },
        { label: 'Contact', href: '/#contact' },
    ];

    const contactItems = [
        {
            icon: Phone,
            label: '+880 1822-961027',
            href: 'tel:+8801822961027',
            color: 'text-sky-500 dark:text-[#38BDF8]',
        },
        {
            icon: MessageCircle,
            label: '+880 1822-961027 (WhatsApp)',
            href: 'https://wa.me/8801822961027',
            color: 'text-emerald-500 dark:text-[#4ADE80]',
        },
        {
            icon: Mail,
            label: 'ashiksirict@gmail.com',
            href: 'mailto:ashiksirict@gmail.com',
            color: 'text-sky-600 dark:text-[#38BDF8]',
        },
        {
            icon: MapPin,
            label: 'Nayabazar Degree College, Ati, Keraniganj, Dhaka-1312',
            href: 'https://maps.app.goo.gl/6qVyuF7FY71tcMqD6',
            color: 'text-emerald-600 dark:text-[#4ADE80]',
        },
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            href: 'http://www.fb.com/ashiksirict',
            icon: FaFacebookF,
            color: 'text-[#1877F2]',
            bg: 'bg-[#1877F2]/10 hover:bg-[#1877F2]/15',
            border: 'border-[#1877F2]/25 hover:border-[#1877F2]/60',
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/ashiksirict',
            icon: FaInstagram,
            color: 'text-[#E4405F]',
            bg: 'bg-[#E4405F]/10 hover:bg-[#E4405F]/15',
            border: 'border-[#E4405F]/25 hover:border-[#E4405F]/60',
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ashiksir/',
            icon: FaLinkedinIn,
            color: 'text-[#0A66C2]',
            bg: 'bg-[#0A66C2]/10 hover:bg-[#0A66C2]/15',
            border: 'border-[#0A66C2]/25 hover:border-[#0A66C2]/60',
        },
        {
            name: 'YouTube',
            href: 'https://www.youtube.com/c/ashiksir',
            icon: FaYoutube,
            color: 'text-[#FF0000]',
            bg: 'bg-[#FF0000]/10 hover:bg-[#FF0000]/15',
            border: 'border-[#FF0000]/25 hover:border-[#FF0000]/60',
        },
    ];

    return (
        <footer className="relative overflow-hidden bg-[#F8FAFC] dark:bg-[#090D16] border-t border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] transition-colors duration-300">
            {/* Top Accent Gradient Border */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#0284C7] dark:via-[#38BDF8] to-transparent opacity-90" />

            {/* ================= UNIQUE BACKGROUND SYSTEM ================= */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
            >
                {/* 1. Circuit Traces & Terminal Nodes */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.08]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 600"
                    fill="none"
                    stroke="url(#footer-circuit-grad)"
                    strokeWidth="1.5"
                >
                    <defs>
                        <linearGradient id="footer-circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0284C7" />
                            <stop offset="50%" stopColor="#38BDF8" />
                            <stop offset="100%" stopColor="#4ADE80" />
                        </linearGradient>
                    </defs>

                    {/* Circuit Busses */}
                    <path d="M-50 120 H 320 L 410 210 H 780 L 840 150 H 1500" />
                    <path d="M-50 480 H 420 L 530 370 H 960 L 1020 430 H 1500" strokeDasharray="6 8" />
                    <path d="M220 -20 V 160 L 300 240 V 620" />
                    <path d="M1180 -20 V 220 L 1100 300 V 620" strokeDasharray="4 6" />

                    {/* Circuit Terminals / Solder Pads */}
                    <circle cx="320" cy="120" r="4" fill="#38BDF8" />
                    <circle cx="780" cy="210" r="3.5" fill="#4ADE80" />
                    <circle cx="420" cy="480" r="4" fill="#0284C7" />
                    <circle cx="960" cy="370" r="3.5" fill="#38BDF8" />
                    <circle cx="1100" cy="300" r="3" fill="#4ADE80" />
                </svg>

                {/* 2. Micro-Dot Matrix Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #38BDF8 1px, transparent 1px)`,
                        backgroundSize: '28px 28px',
                        maskImage: 'radial-gradient(ellipse 75% 70% at 50% 60%, #000 40%, transparent 90%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 75% 70% at 50% 60%, #000 40%, transparent 90%)',
                    }}
                />

                {/* 3. Left Ambient Pulse Beacon (Sky Blue) */}
                <div
                    className="absolute -bottom-24 -left-20 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full blur-[130px] opacity-35 dark:opacity-20 animate-[pulse_8s_ease-in-out_infinite]"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(2, 132, 199, 0.1) 60%, transparent 80%)',
                    }}
                />

                {/* 4. Right Ambient Pulse Beacon (Emerald) */}
                <div
                    className="absolute -top-28 -right-20 w-72 sm:w-[450px] h-72 sm:h-[450px] rounded-full blur-[130px] opacity-25 dark:opacity-15 animate-[pulse_10s_ease-in-out_infinite_2s]"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(74, 222, 128, 0.3) 0%, rgba(22, 163, 74, 0.08) 60%, transparent 80%)',
                    }}
                />
            </div>
            {/* ============================================================= */}

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-14 pb-8 flex flex-col space-y-12">
                {/* Main Footer Directory Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]">
                    {/* Identity & Bio Column (Span 5) */}
                    <div className="lg:col-span-5 flex flex-col space-y-4">
                        <div className="flex flex-col items-start space-y-2">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-[#F0F9FF] dark:bg-[#0F172A] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                                <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                                <span>Academic & Professional Portfolio</span>
                            </span>
                            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                                Engr. Md. Ashikur Rahman
                            </h2>
                            <p className="text-xs sm:text-sm font-semibold text-[#0284C7] dark:text-[#38BDF8]">
                                Master Trainer &bull; Lecturer & Demonstrator (ICT)
                            </p>
                        </div>

                        <p className="text-xs sm:text-[13px] text-[#334155] dark:text-[#94A3B8] leading-relaxed max-w-sm">
                            Demonstrator (ICT) at Nayabazar Degree College and CSE graduate from UIU.
                            Committed to pedagogical innovation, computer science education, and
                            ethical academic leadership.
                        </p>

                        {/* Social Channels Pill Badges with Brand Colors */}
                        <div className="flex flex-wrap gap-2 pt-1">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit ${social.name}`}
                                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all duration-300 hover:scale-105 shadow-xs ${social.bg} ${social.border} ${social.color}`}
                                    >
                                        <Icon className="w-3.5 h-3.5 shrink-0" />
                                        <span className="text-[11px] tracking-wide">{social.name}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Navigation Column (Span 3) */}
                    <div className="lg:col-span-3 flex flex-col space-y-3.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                            Navigation
                        </h3>
                        <ul className="flex flex-col space-y-2.5 text-xs">
                            {navLinks.map((link, idx) => (
                                <li key={idx} className="flex items-center">
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-[#64748B] dark:text-[#94A3B8] hover:text-[#0284C7] dark:hover:text-[#38BDF8] transition-colors"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] dark:bg-[#38BDF8] opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Direct Contact Details Column (Span 4) */}
                    <div className="lg:col-span-4 flex flex-col space-y-3.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                            Direct Contact & Workplace
                        </h3>
                        <div className="flex flex-col space-y-2.5 text-xs">
                            {contactItems.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="group flex items-start gap-3 p-2 rounded-xl text-[#64748B] dark:text-[#94A3B8] hover:text-[#0284C7] dark:hover:text-[#38BDF8] transition-all"
                                    >
                                        <div className="w-7 h-7 rounded-lg bg-[#F0F9FF] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] flex items-center justify-center shrink-0 mt-0.5">
                                            <Icon className={`w-3.5 h-3.5 ${item.color} group-hover:scale-110 transition-transform`} />
                                        </div>
                                        <span className="leading-snug self-center break-words">{item.label}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Balanced 3-Point Layout */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#64748B] dark:text-[#94A3B8]">
                    {/* Copyright Notice */}
                    <p className="text-center md:text-left order-2 md:order-1">
                        &copy; {currentYear} <span className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Engr. Md. Ashikur Rahman</span>. All rights reserved.
                    </p>

                    {/* Developer Attribution Card with Infinite Rotating Border Glow */}
                    <div className="relative group order-1 md:order-2 p-[1px] rounded-xl overflow-hidden shadow-xs">
                        {/* Infinite Rotating Gradient Border */}
                        <div
                            aria-hidden="true"
                            className="absolute -inset-[150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,#0284C7_320deg,#16A34A_340deg,#38BDF8_360deg)] dark:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,#38BDF8_320deg,#4ADE80_340deg,#38BDF8_360deg)] opacity-70 group-hover:opacity-100 transition-opacity"
                        />

                        {/* Inner Content Box with Center Alignment */}
                        <div className="relative text-center flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-[11px] bg-[#F8FAFC]/95 dark:bg-[#090D16]/95 backdrop-blur-md">
                            <Terminal className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                            <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">Crafted by</span>
                            <a
                                href="https://codebymonir.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-semibold text-[#0F172A] dark:text-[#F8FAFC] hover:text-[#0284C7] dark:hover:text-[#38BDF8] transition-colors"
                            >
                                <span className="text-[14px]">Monir Hossen</span>
                                <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
                            </a>
                        </div>
                    </div>

                    {/* Back to Top Trigger */}
                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] bg-white dark:bg-[rgba(15,23,42,0.7)] text-[#334155] dark:text-[#94A3B8] hover:text-[#0284C7] dark:hover:text-[#38BDF8] hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-all cursor-pointer shadow-xs active:scale-95 font-medium text-xs order-3"
                        aria-label="Scroll to top"
                    >
                        <span>Back to top</span>
                        <ArrowUp className="w-3.5 h-3.5 shrink-0" />
                    </button>
                </div>
            </div>
        </footer>
    );
}