'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Star,
    Quote,
    GraduationCap,
    Users,
    PenSquare,
    ArrowRight,
    CheckCircle2,
} from 'lucide-react';

const reviewsData = [
    {
        id: 1,
        name: 'Tanvir Ahmed',
        role: 'Student',
        program: 'HSC Science (Batch 2024)',
        rating: 5,
        date: '2 months ago',
        avatar: '/teachers.jpg',
        comment:
            'The multimedia ICT labs and demonstrator guidance made practical programming and digital classes enjoyable. Teachers take personal care of every student before board examinations.',
    },
    {
        id: 2,
        name: 'Abdur Rahim Howlader',
        role: 'Parent',
        program: 'Father of HSC Examinee',
        rating: 5,
        date: '1 month ago',
        avatar: '/university.jpg',
        comment:
            'The academic discipline and campus security give us complete peace of mind. Regular progress tracking and guardian meetings keep us informed about our daughter’s collegiate progress.',
    },
    {
        id: 3,
        name: 'Nusrat Jahan',
        role: 'Student',
        program: 'Degree (B.A. 2nd Year)',
        rating: 5,
        date: '3 weeks ago',
        avatar: '/teachers.jpg',
        comment:
            'The seminar library and supportive faculty created an inspiring atmosphere for our higher studies. Cultural events and sports tournaments balance academic rigor perfectly.',
    },
    {
        id: 4,
        name: 'Farhana Yasmin',
        role: 'Parent',
        program: 'Mother of Science Student',
        rating: 5,
        date: '1 month ago',
        avatar: '/university.jpg',
        comment:
            'Nayabazar Degree College has transformed my son into a curious, dedicated learner. The ICT training and science lab equipment provide practical exposure beyond textbooks.',
    },
    {
        id: 5,
        name: 'Mahfuzur Rahman',
        role: 'Student',
        program: 'HSC Business Studies',
        rating: 4,
        date: '2 weeks ago',
        avatar: '/teachers.jpg',
        comment:
            'Co-curricular debates, annual assemblies, and experienced accounting instructors gave me the confidence to prepare effectively for university admission tests.',
    },
    {
        id: 6,
        name: 'Sultana Begum',
        role: 'Parent',
        program: 'Guardian of Degree Student',
        rating: 5,
        date: '4 days ago',
        avatar: '/university.jpg',
        comment:
            'Accessible location, affordable tuition, and high moral standards make this institute a cornerstone for education across Keraniganj and neighboring regions.',
    },
];

export default function TestimonialsSection() {
    return (
        <section
            id="reviews"
            className="relative overflow-hidden py-14 sm:py-24 px-3 sm:px-6 lg:px-12 bg-transparent text-slate-800 dark:text-slate-100"
        >
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col space-y-9 sm:space-y-12">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-transparent text-[#0284C7] dark:text-[#38BDF8] border border-[#0284C7]/30 dark:border-[#38BDF8]/30 shadow-xs">
                        <Users className="w-3.5 h-3.5 shrink-0" />
                        Voices of Our Community
                    </span>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                        What Students & Parents Say
                    </h2>

                    <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                        Real feedback from collegiate learners and guardians sharing their academic journey, campus atmosphere, and faculty mentorship experiences.
                    </p>
                </div>

                {/* Reviews Grid: Fully transparent cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {reviewsData.slice(0, 6).map((item, index) => {
                        const isStudent = item.role === 'Student';

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group relative flex flex-col justify-between p-5 rounded-2xl border border-slate-300/40 dark:border-white/15 bg-transparent hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {/* Subtle Watermark Quote */}
                                <Quote className="absolute top-4 right-4 w-7 h-7 text-slate-400/20 dark:text-white/10 pointer-events-none group-hover:text-sky-500/20 transition-colors" />

                                <div className="space-y-3.5 relative z-10">
                                    {/* Header: Avatar, Info & Role Badge */}
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-300/50 dark:border-white/20 shrink-0">
                                                <Image
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    fill
                                                    sizes="40px"
                                                    className="object-cover object-center"
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="flex items-center gap-1.5">
                                                    <h4 className="text-[13px] sm:text-[14px] font-bold text-slate-900 dark:text-white truncate">
                                                        {item.name}
                                                    </h4>
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                                                </div>
                                                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                                                    {item.program}
                                                </p>
                                            </div>
                                        </div>

                                        <span
                                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider shrink-0 bg-transparent ${isStudent
                                                    ? 'text-[#0284C7] dark:text-[#38BDF8] border border-[#0284C7]/40 dark:border-[#38BDF8]/40'
                                                    : 'text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 dark:border-emerald-400/40'
                                                }`}
                                        >
                                            {isStudent ? (
                                                <GraduationCap className="w-3 h-3" />
                                            ) : (
                                                <Users className="w-3 h-3" />
                                            )}
                                            <span>{item.role}</span>
                                        </span>
                                    </div>

                                    {/* Star Rating */}
                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3.5 h-3.5 ${i < item.rating
                                                        ? 'fill-amber-400 text-amber-400'
                                                        : 'text-slate-300 dark:text-slate-600'
                                                    }`}
                                            />
                                        ))}
                                        <span className="text-[10px] text-slate-400 ml-1.5 font-mono">
                                            {item.date}
                                        </span>
                                    </div>

                                    {/* Feedback Text */}
                                    <p className="text-[12px] sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-4">
                                        “{item.comment}”
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
                    {/* Write Review: Transparent button */}
                    <Link
                        href="/reviews/add"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-white bg-transparent border border-slate-300/60 dark:border-white/20 hover:border-[#0284C7] dark:hover:border-[#38BDF8] shadow-xs hover:shadow-md active:scale-95 transition-all duration-300"
                    >
                        <PenSquare className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                        <span>Write a Review</span>
                    </Link>

                    {/* View All Reviews */}
                    <Link
                        href="/reviews"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        <span>View All Reviews</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}