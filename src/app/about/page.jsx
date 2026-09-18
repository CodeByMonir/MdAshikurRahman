'use client';

import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import {
    CheckCircle2,
    Loader2,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
    User,
    X
} from 'lucide-react';
import { useRef, useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AboutSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null);

    const contactChannels = [
        {
            label: 'Phone Call',
            value: '+880 01822-961027',
            href: 'tel:+88001822961027',
            icon: Phone,
            color: 'text-sky-500 dark:text-[#38BDF8]',
        },
        {
            label: 'WhatsApp',
            value: '+880 01822-961027',
            href: 'https://wa.me/88001822961027',
            icon: MessageCircle,
            color: 'text-emerald-500 dark:text-[#4ADE80]',
        },
        {
            label: 'Email',
            value: 'ashik.6310@gmail.com',
            href: 'mailto:ashik.6310@gmail.com',
            icon: Mail,
            color: 'text-sky-600 dark:text-[#38BDF8]',
        },
        {
            label: 'Workplace',
            value: 'Nayabazar Degree College, Keraniganj',
            href: 'https://maps.app.goo.gl/6qVyuF7FY71tcMqD6',
            icon: MapPin,
            color: 'text-emerald-600 dark:text-[#4ADE80]',
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
            href: 'https://instagram.com/ashik.6310',
            icon: FaInstagram,
            hoverClass: 'hover:text-[#E4405F] hover:border-[#E4405F]/40',
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com',
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

    const personalAttributes = [
        '5+ years of collegiate lecturing and ICT training experience',
        'Certified ICT Master Trainer guiding secondary curriculum development',
        'Demonstrated expertise in C Programming, Web Development & DBMS',
        'Committed to ethical integrity, Islamic values, and lifelong learning',
    ];

    const handleSendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const toastId = toast.loading('Sending your message...', {
            position: 'top-right',
        });

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            toast.update(toastId, {
                render: 'Your inquiry has been sent successfully!',
                type: 'success',
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });

            formRef.current.reset();
            setTimeout(() => {
                setIsModalOpen(false);
            }, 1500);
        } catch (error) {
            toast.update(toastId, {
                render: 'Failed to send message. Please try again.',
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
            id="about"
            className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-300"
        >
            {/* Toast Notification Container */}
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

            {/* ================= UNIQUE BACKGROUND SYSTEM ================= */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
            >
                {/* 1. Isometric Digital Perspective Grid */}
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.055]"
                    style={{
                        backgroundImage: `
              linear-gradient(30deg, #38BDF8 12%, transparent 12.5%, transparent 87%, #38BDF8 87.5%, #38BDF8),
              linear-gradient(150deg, #38BDF8 12%, transparent 12.5%, transparent 87%, #38BDF8 87.5%, #38BDF8),
              linear-gradient(30deg, #38BDF8 12%, transparent 12.5%, transparent 87%, #38BDF8 87.5%, #38BDF8),
              linear-gradient(150deg, #38BDF8 12%, transparent 12.5%, transparent 87%, #38BDF8 87.5%, #38BDF8),
              linear-gradient(60deg, #4ADE80 25%, transparent 25.5%, transparent 75%, #4ADE80 75%, #4ADE80),
              linear-gradient(60deg, #4ADE80 25%, transparent 25.5%, transparent 75%, #4ADE80 75%, #4ADE80)
            `,
                        backgroundSize: '48px 84px',
                        backgroundPosition: '0 0, 0 0, 24px 42px, 24px 42px, 0 0, 24px 42px',
                        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 95%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 95%)',
                    }}
                />

                {/* 2. Flowing Fiber Communication Signals (SVG Curves) */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.06] dark:opacity-[0.12]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 900"
                    fill="none"
                    stroke="url(#comm-gradient)"
                    strokeWidth="1.5"
                >
                    <defs>
                        <linearGradient id="comm-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0284C7" />
                            <stop offset="50%" stopColor="#38BDF8" />
                            <stop offset="100%" stopColor="#4ADE80" />
                        </linearGradient>
                    </defs>
                    <path d="M-100 150 Q 300 280, 700 120 T 1540 220" />
                    <path d="M-100 450 Q 400 300, 850 600 T 1540 400" strokeDasharray="6 8" />
                    <path d="M-100 750 Q 550 850, 950 650 T 1540 800" />

                    {/* Accent Nodes along path */}
                    <circle cx="700" cy="120" r="3.5" fill="#38BDF8" />
                    <circle cx="850" cy="600" r="3" fill="#4ADE80" />
                    <circle cx="400" cy="300" r="2.5" fill="#0284C7" />
                </svg>

                {/* 3. Floating Left Light Beacon (Sky Blue Glow) */}
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.35, 0.55, 0.35],
                        x: ['-5%', '3%', '-5%'],
                        y: ['-3%', '5%', '-3%'],
                    }}
                    transition={{
                        duration: 11,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute -top-24 -left-20 w-105 h-105 sm:w-150 sm:h-150 rounded-full blur-[110px] opacity-40"
                    style={{
                        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.24) 0%, rgba(2, 132, 199, 0.08) 60%, transparent 80%)',
                    }}
                />

                {/* 4. Counter Light Beacon (Emerald Glow) */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.25, 0.45, 0.25],
                        x: ['3%', '-4%', '3%'],
                        y: ['4%', '-4%', '4%'],
                    }}
                    transition={{
                        duration: 13,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                    className="absolute -bottom-28 -right-20 w-[380px] h-[380px] sm:w-[550px] sm:h-[550px] rounded-full blur-[110px] opacity-30"
                    style={{
                        background: 'radial-gradient(circle, rgba(74, 222, 128, 0.18) 0%, rgba(22, 163, 74, 0.06) 65%, transparent 80%)',
                    }}
                />
            </div>
            {/* ============================================================= */}

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col space-y-12">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-[#F0F9FF] dark:bg-[#0F172A] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs">
                        <User className="w-3.5 h-3.5" />
                        Get To Know Me
                    </span>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                        About & Direct Connect
                    </h2>

                    <p className="text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                        A short glimpse into my professional vocation, pedagogical principles, and direct communication channels.
                    </p>
                </div>

                {/* 2-Column Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    {/* Left Column: Biography & Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="lg:col-span-7 flex flex-col space-y-6"
                    >
                        <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-card-light dark:shadow-card-dark space-y-4">
                            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                                Academic Planner, Demonstrator & Mentor
                            </h3>

                            <p className="text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                                I am Engr. Md. Ashikur Rahman, serving as an ICT teacher at Nayabazar Degree College, Keraniganj, Dhaka since January 2020. My career centers on making computer technologies accessible, inspiring future innovators, and upholding ethical discipline in both academia and life.
                            </p>

                            {/* Bullet Highlights */}
                            <div className="space-y-2.5 pt-2">
                                {personalAttributes.map((attr, idx) => (
                                    <div key={idx} className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                                        <span className="text-xs sm:text-[13px] text-[#334155] dark:text-[#94A3B8]">
                                            {attr}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Media Channels Row */}
                        <div className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                                Follow & Connect
                            </span>

                            <div className="flex items-center gap-3">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Visit ${social.name}`}
                                            className={`p-2.5 rounded-xl border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] bg-[#F8FAFC] dark:bg-[rgba(9,13,22,0.7)] text-[#64748B] transition-all duration-300 hover:scale-110 shadow-xs ${social.hoverClass}`}
                                        >
                                            <Icon className="w-4 h-4" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Direct Contact Details Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="lg:col-span-5 flex flex-col space-y-3"
                    >
                        {contactChannels.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs hover:border-[#0284C7] dark:hover:border-[#38BDF8] hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <div className="p-3 rounded-xl bg-[#F0F9FF] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shrink-0">
                                        <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${item.color}`} />
                                    </div>

                                    <div className="overflow-hidden">
                                        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
                                            {item.label}
                                        </p>
                                        <p className="text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC] truncate group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors">
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            );
                        })}

                        {/* Instant Email Modal Trigger */}
                        <div className="pt-2">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-md hover:shadow-hover-light dark:hover:shadow-hover-dark transition-all duration-300 active:scale-98 text-xs sm:text-sm cursor-pointer"
                            >
                                <span>Send Direct Inquiry</span>
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* EmailJS Inquiry Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xs"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.2)] shadow-2xl z-10 space-y-5"
                        >
                            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                                <div>
                                    <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                                        Send Direct Inquiry
                                    </h3>
                                    <p className="text-xs text-[#64748B]">
                                        Delivers directly to Engr. Md. Ashikur Rahman
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-1.5 rounded-lg border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] text-[#64748B] hover:text-[#0284C7] dark:hover:text-[#38BDF8]"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Email Form */}
                            <form ref={formRef} onSubmit={handleSendEmail} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-medium text-[#334155] dark:text-[#94A3B8] mb-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        required
                                        placeholder="e.g. Monir Hossen"
                                        className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F8FAFC] dark:bg-[#090D16] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] text-[#0F172A] dark:text-[#F8FAFC] focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-[#334155] dark:text-[#94A3B8] mb-1">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        name="from_email"
                                        required
                                        placeholder="codebymonir@gmail.com"
                                        className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F8FAFC] dark:bg-[#090D16] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] text-[#0F172A] dark:text-[#F8FAFC] focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-[#334155] dark:text-[#94A3B8] mb-1">
                                        Subject / Topic
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        placeholder="ICT Lab Consultation / Academic Inquiry"
                                        className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F8FAFC] dark:bg-[#090D16] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] text-[#0F172A] dark:text-[#F8FAFC] focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-[#334155] dark:text-[#94A3B8] mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        placeholder="Write your message here..."
                                        className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F8FAFC] dark:bg-[#090D16] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] text-[#0F172A] dark:text-[#F8FAFC] focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-md hover:shadow-hover-light dark:hover:shadow-hover-dark transition-all duration-300 disabled:opacity-50 cursor-pointer"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Instant Message</span>
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}