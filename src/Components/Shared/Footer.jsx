'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowUp,
    Mail,
    MapPin,
    Phone,
    MessageCircle,
    GraduationCap,
    Sparkles,
    Heart,
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
        { label: 'Contact', href: '/#about' },
    ];

    const contactItems = [
        {
            icon: Phone,
            label: '+880 1822-961027',
            href: 'tel:+8801822961027',
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp Chat',
            href: 'https://wa.me/8801822961027',
        },
        {
            icon: Mail,
            label: 'ashik.6310@gmail.com',
            href: 'mailto:ashik.6310@gmail.com',
        },
        {
            icon: MapPin,
            label: 'Nayabazar Degree College, Ati, Keraniganj, Dhaka-1312',
            href: 'https://maps.app.goo.gl/6qVyuF7FY71tcMqD6',
        },
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            href: 'http://www.fb.com/arashik2019',
            icon: FaFacebookF,
            hoverClass: 'hover:text-[#1877F2] hover:border-[#1877F2]/40',
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/im.arashik',
            icon: FaInstagram,
            hoverClass: 'hover:text-[#E4405F] hover:border-[#E4405F]/40',
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ashik-rahman-0ba47511b/',
            icon: FaLinkedinIn,
            hoverClass: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
        },
        {
            name: 'YouTube',
            href: 'https://www.youtube.com/c/ashiksir',
            icon: FaYoutube,
            hoverClass: 'hover:text-[#FF0000] hover:border-[#FF0000]/40',
        },
    ];

    return (
        <footer className="relative overflow-hidden bg-[#F8FAFC] dark:bg-[#090D16] border-t border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] transition-colors duration-300">
            {/* Top Accent Gradient Border */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#0284C7] dark:via-[#38BDF8] to-transparent opacity-80" />

            {/* Subtle Background Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full blur-3xl opacity-30 dark:opacity-15"
                style={{
                    background:
                        'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(74, 222, 128, 0.1) 60%, transparent 100%)',
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-14 pb-8">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]">
                    {/* Brand & Identity Column (Span 5) */}
                    <div className="md:col-span-5 space-y-4">
                        <div className="space-y-1.5">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-[#F0F9FF] dark:bg-[#0F172A] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                                <GraduationCap className="w-3.5 h-3.5" />
                                <span>Academic & ICT Portfolio</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                                Engr. Md. Ashikur Rahman
                            </h2>
                            <p className="text-xs sm:text-sm font-semibold text-[#0284C7] dark:text-[#38BDF8]">
                                Master Trainer (ICT) &bull; Lecturer & Demonstrator
                            </p>
                        </div>

                        <p className="text-xs sm:text-[13px] text-[#334155] dark:text-[#94A3B8] leading-relaxed max-w-sm">
                            Demonstrator (ICT) at Nayabazar Degree College and CSE graduate from UIU.
                            Committed to pedagogical innovation, computer science education, and
                            ethical academic leadership.
                        </p>

                        {/* Social Icons Bar */}
                        <div className="flex items-center gap-2.5 pt-1">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit ${social.name}`}
                                        className={`p-2 rounded-xl border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] bg-white dark:bg-[rgba(15,23,42,0.7)] text-[#64748B] transition-all duration-300 hover:scale-110 shadow-xs ${social.hoverClass}`}
                                    >
                                        <Icon className="w-3.5 h-3.5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Navigation Links (Span 3) */}
                    <div className="md:col-span-3 space-y-3.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                            Navigation
                        </h3>
                        <ul className="space-y-2 text-xs">
                            {navLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="text-[#64748B] dark:text-[#94A3B8] hover:text-[#0284C7] dark:hover:text-[#38BDF8] transition-colors inline-flex items-center gap-1.5"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[#0284C7] dark:bg-[#38BDF8] opacity-60" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Direct Communication & Institution (Span 4) */}
                    <div className="md:col-span-4 space-y-3.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                            Direct Contact & Workplace
                        </h3>
                        <div className="space-y-2.5 text-xs">
                            {contactItems.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="group flex items-start gap-2.5 text-[#64748B] dark:text-[#94A3B8] hover:text-[#0284C7] dark:hover:text-[#38BDF8] transition-colors"
                                    >
                                        <Icon className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                        <span className="leading-snug">{item.label}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright, Made with care, Back to Top */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                    <p>
                        &copy; {currentYear} Engr. Md. Ashikur Rahman. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1">
                            Built with precision & integrity
                        </span>

                        <button
                            onClick={scrollToTop}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] bg-white dark:bg-[rgba(15,23,42,0.7)] text-[#334155] dark:text-[#94A3B8] hover:text-[#0284C7] dark:hover:text-[#38BDF8] hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-all cursor-pointer shadow-xs active:scale-95"
                            aria-label="Back to top"
                        >
                            <span>Top</span>
                            <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}