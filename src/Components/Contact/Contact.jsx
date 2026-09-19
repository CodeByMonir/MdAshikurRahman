'use client';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
    Loader2,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
    Sparkles,
} from 'lucide-react';
import { useRef, useState } from 'react';
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
            id="contact"
            className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-300"
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
                    className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] rounded-full blur-[120px] opacity-40 select-none"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(74, 222, 128, 0.08) 60%, transparent 80%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col space-y-12">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-[#F0F9FF] dark:bg-[#0F172A] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs">
                        <Mail className="w-3.5 h-3.5" />
                        Direct Communication
                    </span>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                        Get In Touch
                    </h2>

                    <p className="text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                        Feel free to reach out directly through WhatsApp, phone, email, or by sending a direct inquiry below.
                    </p>
                </div>

                {/* 2-Column Contact Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    {/* Left Column (Span 5): Contact Channels & Social Badges */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="lg:col-span-5 flex flex-col space-y-4"
                    >
                        {/* Contact Channels Cards */}
                        <div className="flex flex-col space-y-3">
                            {contactChannels.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="group flex items-start gap-3.5 p-4 rounded-xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs hover:border-[#0284C7] dark:hover:border-[#38BDF8] hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        <div className="p-2.5 rounded-xl bg-[#F0F9FF] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shrink-0 mt-0.5">
                                            <Icon
                                                className={`w-4 h-4 transition-transform group-hover:scale-110 ${item.color}`}
                                            />
                                        </div>

                                        <div className="overflow-hidden">
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
                                                {item.label}
                                            </p>
                                            <p className="text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC] group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors line-clamp-2">
                                                {item.value}
                                            </p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Social Links Row */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs">
                            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                                Follow & Connect:
                            </span>
                            <div className="flex items-center gap-2.5">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Visit ${social.name}`}
                                            className={`p-2 rounded-lg border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] bg-[#F8FAFC] dark:bg-[rgba(9,13,22,0.7)] text-[#64748B] transition-all duration-300 hover:scale-110 shadow-xs ${social.hoverClass}`}
                                        >
                                            <Icon className="w-3.5 h-3.5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column (Span 7): Inline Instant Email Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-card-light dark:shadow-card-dark space-y-5"
                    >
                        <div>
                            <div className="flex items-center gap-2 text-[#0284C7] dark:text-[#38BDF8] pb-1">
                                <Sparkles className="w-4 h-4" />
                                <h3 className="text-xs font-bold uppercase tracking-wider">
                                    Instant Inquiry
                                </h3>
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                                Send an Instant Message
                            </h3>
                            <p className="text-xs text-[#64748B]">
                                Delivers directly to ashik.6310@gmail.com
                            </p>
                        </div>

                        <form ref={formRef} onSubmit={handleSendEmail} className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-[#334155] dark:text-[#94A3B8] mb-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="from_name"
                                    required
                                    placeholder="e.g. Tanvir Ahmed"
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
                                    placeholder="tanvir@example.com"
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
                                    placeholder="Academic Collaboration / ICT Inquiry"
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
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-md hover:shadow-hover-light dark:hover:shadow-hover-dark transition-all duration-300 disabled:opacity-50 cursor-pointer text-xs sm:text-sm"
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
            </div>
        </section>
    );
}