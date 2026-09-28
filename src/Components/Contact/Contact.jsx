'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import {
    ArrowLeft,
    Home,
    Loader2,
    Mail,
    MapPin,
    Megaphone,
    MessageCircle,
    Phone,
    Send,
    Sparkles,
} from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null);

    // Direct Communication Mediums
    const contactChannels = [
        {
            label: 'Phone Call',
            value: '+880 1822-961027',
            href: 'tel:+8801822961027',
            icon: Phone,
            color: 'text-sky-500 dark:text-[#38BDF8]',
        },
        {
            label: 'WhatsApp',
            value: '+880 1822-961027',
            href: 'https://wa.me/8801822961027',
            icon: MessageCircle,
            color: 'text-emerald-500 dark:text-[#4ADE80]',
        },
        {
            label: 'Email',
            value: 'ashiksirict@gmail.com',
            href: 'mailto:ashiksirict@gmail.com',
            icon: Mail,
            color: 'text-sky-600 dark:text-[#38BDF8]',
        },
        {
            label: 'Institution Address',
            value: 'Nayabazar Degree College, Ati, Keraniganj, Dhaka-1312.',
            href: 'https://maps.app.goo.gl/6qVyuF7FY71tcMqD6',
            icon: MapPin,
            color: 'text-emerald-600 dark:text-[#4ADE80]',
        },
    ];

    // Verified Social Media Links
    const socialLinks = [
        {
            name: 'Facebook',
            href: 'http://www.fb.com/ashiksirict',
            icon: FaFacebookF,
            hoverClass: 'hover:text-[#1877F2] hover:border-[#1877F2]/40',
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/ashiksirict',
            icon: FaInstagram,
            hoverClass: 'hover:text-[#E4405F] hover:border-[#E4405F]/40',
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ashiksir/',
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

    const handleSendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const toastId = toast.loading('Sending your message...', {
            position: 'top-right',
        });

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_id',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_id',
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key'
            );

            toast.update(toastId, {
                render: 'Your inquiry has been sent successfully!',
                type: 'success',
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });

            formRef.current.reset();
        } catch (error) {
            console.error('Email send failed:', error);
            toast.update(toastId, {
                render: 'Failed to send message. Please verify configuration or try again.',
                type: 'error',
                isLoading: false,
                autoClose: 4000,
                closeOnClick: true,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden py-8 sm:py-16 px-3 sm:px-6 lg:px-12 bg-transparent text-slate-800 dark:text-slate-100 transition-colors duration-300"
        >
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            {/* Background Ambient Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
            >
                <div
                    className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 sm:w-[540px] h-80 sm:h-[540px] rounded-full blur-[120px] opacity-30 select-none"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(74, 222, 128, 0.08) 60%, transparent 80%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col space-y-6 sm:space-y-10">

                {/* Navigation Bar */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-[10px] sm:text-xs font-semibold hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors cursor-pointer"
                        >
                            <ArrowLeft className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                            <span>Back</span>
                        </button>

                        <Link
                            href="/"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-[10px] sm:text-xs font-semibold hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors"
                        >
                            <Home className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                            <span>Home</span>
                        </Link>
                    </div>

                    <Link
                        href="/reviews"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#0284C7] dark:border-[#38BDF8] text-[10px] sm:text-xs font-semibold text-[#0284C7] dark:text-[#38BDF8] hover:bg-[#0284C7]/10 transition-colors"
                    >
                        <Megaphone className="w-3.5 h-3.5" />
                        <span>Community Feedback</span>
                    </Link>
                </div>

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8] border border-[#0284C7]/30 dark:border-[#38BDF8]/30">
                        <Mail className="w-3 h-3 text-[#0284C7] dark:text-[#38BDF8]" />
                        Direct Communication
                    </span>

                    <h1 className="text-[14px] sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                        Get In Touch
                    </h1>

                    <p className="text-[10px] sm:text-xs text-[#64748B] dark:text-[#94A3B8] leading-tight sm:leading-relaxed">
                        Reach out directly through WhatsApp, telephone, institutional email, or by submitting an official message below.
                    </p>
                </div>

                {/* 2-Column Contact Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
                    {/* Left Column (Span 5): Contact Channels & Social Badges */}
                    <div className="lg:col-span-5 flex flex-col space-y-3.5">
                        {/* Contact Channels Cards */}
                        <div className="flex flex-col space-y-2.5">
                            {contactChannels.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="group flex items-start gap-3 p-3.5 rounded-2xl bg-transparent border border-slate-300/40 dark:border-white/15 hover:border-[#0284C7] dark:hover:border-[#38BDF8] hover:-translate-y-0.5 transition-all duration-300 shadow-xs"
                                    >
                                        <div className="p-2 rounded-xl bg-sky-500/10 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 shrink-0 mt-0.5">
                                            <Icon
                                                className={`w-3.5 h-3.5 transition-transform group-hover:scale-110 ${item.color}`}
                                            />
                                        </div>

                                        <div className="overflow-hidden min-w-0">
                                            <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                {item.label}
                                            </p>
                                            <p className="text-[11px] sm:text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors break-words">
                                                {item.value}
                                            </p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Social Links Row */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-transparent border border-slate-300/40 dark:border-white/15 shadow-xs">
                            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Follow & Connect:
                            </span>
                            <div className="flex items-center gap-2">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Visit ${social.name}`}
                                            className={`p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent text-slate-600 dark:text-slate-400 transition-all duration-300 hover:scale-105 shadow-xs ${social.hoverClass}`}
                                        >
                                            <Icon className="w-3.5 h-3.5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Span 7): Inline Instant Email Form */}
                    <div className="lg:col-span-7 p-3.5 sm:p-6 rounded-2xl bg-transparent border border-slate-300/40 dark:border-white/15 hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-all duration-300 hover:shadow-lg space-y-4">
                        <div>
                            <div className="flex items-center gap-1.5 text-[#0284C7] dark:text-[#38BDF8] pb-0.5">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-bold uppercase tracking-wider">
                                    Instant Inquiry
                                </span>
                            </div>
                            <h3 className="text-[12px] sm:text-[14px] font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                                Send an Instant Message
                            </h3>
                            <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                                Delivers directly to ashiksirict@gmail.com
                            </p>
                        </div>

                        <form ref={formRef} onSubmit={handleSendEmail} className="space-y-3">
                            <div className="space-y-1">
                                <label className="block text-[10px] sm:text-xs font-medium text-slate-700 dark:text-slate-300">
                                    Your Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="from_name"
                                    required
                                    placeholder="e.g. Monir Hossen"
                                    className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8]"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="block text-[10px] sm:text-xs font-medium text-slate-700 dark:text-slate-300">
                                    Your Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="from_email"
                                    required
                                    placeholder="e.g. name@domain.com"
                                    className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8]"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="block text-[10px] sm:text-xs font-medium text-slate-700 dark:text-slate-300">
                                    Subject / Topic <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="Academic Collaboration / ICT Inquiry"
                                    className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8]"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="block text-[10px] sm:text-xs font-medium text-slate-700 dark:text-slate-300">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Write your constructive message or inquiry here..."
                                    className="w-full px-3 py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] resize-y"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-white bg-linear-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 disabled:opacity-50 cursor-pointer text-xs sm:text-sm"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Instant Message</span>
                                        <Send className="w-3.5 h-3.5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}