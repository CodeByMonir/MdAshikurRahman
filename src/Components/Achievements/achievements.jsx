'use client';

import { motion } from 'framer-motion';
import {
    Award,
    Calendar,
    FolderGit2,
    GraduationCap,
    Medal,
    Sparkles,
    Trophy,
    UserCheck,
} from 'lucide-react';

export default function Achievements() {
    // 1. Training & Capacity Building Achievements
    const trainingAchievements = [
        {
            title: 'ICT in Education Literacy, Troubleshooting & Maintenance',
            role: 'Trainee Participant',
            organizer: 'Department of ICT, Ministry of PTIT',
            duration: '10 Days (07 Nov 2023 – 17 Nov 2023)',
            award: '★ 1st Place in Training',
            isFirstPlace: true,
            description:
                'Achieved 1st place distinction among educational trainees nationwide, evaluating advanced troubleshooting, ICT educational literacy, and hardware maintenance.',
        },
        {
            title: 'ICT Skills Enhancement for Institution Heads & Teachers',
            role: 'ICT Master Trainer',
            organizer: 'Upazila Secondary Education Office, Keraniganj, Dhaka-1312',
            duration: '04 Days (20 June 2021 – 23 June 2021)',
            award: 'Master Trainer Honor',
            isFirstPlace: false,
            description:
                'Appointed as ICT Master Trainer instructing secondary and higher-secondary school headmasters and faculty on digital pedagogical methodologies and computer labs.',
        },
        {
            title: 'Computer Hardware, Network & Troubleshooting for Teachers',
            role: 'Trainee Participant',
            organizer: 'BANBEIS (Bangladesh Bureau of Educational Information & Statistics)',
            duration: '15 Days (11 Nov 2020 – 28 Nov 2020)',
            award: 'BANBEIS Certified',
            award: '★ 1st Place in Training',
            isFirstPlace: true,
            description:
                'Completed intensive institutional training on educational network topology, institutional routing, hardware diagnostics, and preventive system maintenance.',
        },
    ];

    // 2. Research & Projects
    const researchAchievements = [
        {
            title: 'Bolbo Kotha : A Communication Aid For Non-Verbal People',
            category: 'B.Sc. Thesis & HCI Innovation',
            supervisor: 'Dr. Khondaker Abdullah Al Mamun',
            supervisorRole: 'Founder & Director of AIMS Lab, UIU',
            description:
                'Conducted Human-Computer Interaction (HCI) research developing an assistive communication aid to empower speech-impaired individuals through digital accessibility.',
            tags: ['HCI Research', 'Assistive Tech', 'AIMS Lab UIU'],
            highlight: 'Distinguished Thesis',
        },
        {
            title: 'Visit Bangladesh : Web Application on Tours and Travels',
            category: 'System Analysis & Design',
            supervisor: 'Dr. Sumon Ahmed',
            supervisorRole: 'Director of CDIP, UIU',
            description:
                'Engineered full software lifecycle specifications, architectural diagrams, user journeys, and robust database models for a national tourism ecosystem.',
            tags: ['System Analysis', 'Software Architecture', 'CDIP UIU'],
            highlight: 'System Architecture',
        },
        {
            title: 'Student Database Management System',
            category: 'Web Programming Project',
            supervisor: 'Mr. Sajid Rabbani',
            supervisorRole: 'Lecturer, United International University',
            description:
                'Engineered relational database models, query optimizations, and full-stack CRUD administrative interfaces tailored for academic institutional data handling.',
            tags: ['DBMS', 'SQL Optimization', 'CRUD Application'],
            highlight: 'Database Design',
        },
    ];

    // 3. Academic Milestones
    const academicAchievements = [
        {
            degree: 'B.Sc. in Computer Science & Engineering (CSE)',
            institution: 'United International University (UIU), Dhaka',
            score: 'CGPA 3.41',
            scale: 'out of 4.00',
            year: 'Graduated Spring 2017',
            level: 'Undergraduate Degree',
            badgeColor: 'text-[#0284C7] dark:text-[#38BDF8] border-sky-400/30 bg-sky-500/10',
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Dhaka Residential Model College (DRMC), Dhaka',
            score: 'GPA 5.00',
            scale: 'Perfect Score',
            year: 'Passing Year: 2012',
            level: 'Higher Secondary',
            badgeColor: 'text-emerald-600 dark:text-[#4ADE80] border-emerald-400/30 bg-emerald-500/10',
        },
        {
            degree: 'Secondary School Certificate (SSC)',
            institution: 'Ati Vawal High School, Dhaka',
            score: 'GPA 5.00',
            scale: 'Perfect Score',
            year: 'Passing Year: 2010',
            level: 'Secondary School',
            badgeColor: 'text-emerald-600 dark:text-[#4ADE80] border-emerald-400/30 bg-emerald-500/10',
        },
    ];

    // 4. Government Scholarships & Early Academic Honors
    const scholarshipAchievements = [
        {
            title: 'Govt. Junior Scholarship Examination',
            year: '2008',
            grade: 'General Grade Scholarship',
            position: 'Divisional Merit Standing',
            authority: 'Board of Intermediate and Secondary Education, Dhaka',
            isTopRank: false,
            description:
                'Awarded government competitive merit scholarship based on outstanding scholastic excellence across regional secondary schools.',
            badgeColor: 'from-sky-500 to-emerald-400 text-white dark:text-slate-950',
        },
        {
            title: 'Govt. Primary Scholarship Examination',
            year: '2004',
            grade: 'Talentpool Scholarship',
            position: '★ 1st Place in Keraniganj Upazila',
            authority: 'Directorate of Primary Education, Bangladesh',
            isTopRank: true,
            description:
                'Secured the highest honors by securing 1st place in the entire Keraniganj Upazila under the competitive national talentpool category.',
            badgeColor: 'from-amber-500 to-yellow-400 text-slate-950',
        },

    ];

    return (
        <section
            id="achievements"
            className="relative min-h-screen overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-300"
        >
            {/* ================= UNIQUE ACHIEVEMENTS BACKGROUND SYSTEM ================= */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
            >
                {/* Geometric Quantum Hexagon / Honeycomb Matrix */}
                <div
                    className="absolute inset-0 opacity-[0.035] dark:opacity-[0.065]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #38BDF8 1px, transparent 1px),
              linear-gradient(to right, rgba(56, 189, 248, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.15) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px, 80px 80px, 80px 80px',
                        maskImage: 'radial-gradient(ellipse 75% 65% at 50% 35%, #000 50%, transparent 95%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 35%, #000 50%, transparent 95%)',
                    }}
                />

                {/* Celestial Award Halo & Constellation SVG */}
                <svg
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full opacity-[0.07] dark:opacity-[0.14]"
                    viewBox="0 0 1200 900"
                    fill="none"
                    stroke="url(#trophy-gradient)"
                    strokeWidth="1.2"
                >
                    <defs>
                        <linearGradient id="trophy-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#38BDF8" />
                            <stop offset="50%" stopColor="#F59E0B" />
                            <stop offset="100%" stopColor="#4ADE80" />
                        </linearGradient>
                    </defs>

                    <path d="M600 80 L350 260 L850 260 Z" strokeDasharray="4 4" />
                    <path d="M600 80 L180 440" strokeDasharray="6 6" />
                    <path d="M600 80 L1020 440" strokeDasharray="6 6" />
                    <circle cx="600" cy="80" r="8" fill="#F59E0B" />
                    <circle cx="350" cy="260" r="5" fill="#38BDF8" />
                    <circle cx="850" cy="260" r="5" fill="#4ADE80" />
                    <circle cx="180" cy="440" r="4" fill="#38BDF8" />
                    <circle cx="1020" cy="440" r="4" fill="#F59E0B" />

                    <path d="M220 220 C 140 380, 260 560, 420 620" strokeWidth="1" />
                    <path d="M980 220 C 1060 380, 940 560, 780 620" strokeWidth="1" />
                </svg>

                {/* Pulsing Golden / Sky Honor Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.18, 1],
                        opacity: [0.35, 0.55, 0.35],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] sm:w-[650px] lg:w-[800px] h-[420px] sm:h-[650px] lg:h-[800px] rounded-full blur-[130px] opacity-45 select-none"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(56, 189, 248, 0.18) 45%, rgba(74, 222, 128, 0.08) 70%, transparent 90%)',
                    }}
                />

                {/* Deep Indigo / Emerald Base Glows */}
                <div
                    className="absolute -bottom-28 -left-24 w-96 h-96 rounded-full blur-[120px] opacity-30 dark:opacity-20 select-none"
                    style={{
                        background: 'radial-gradient(circle, #0284C7 0%, transparent 75%)',
                    }}
                />
                <div
                    className="absolute bottom-1/3 -right-24 w-80 h-80 rounded-full blur-[120px] opacity-25 dark:opacity-15 select-none"
                    style={{
                        background: 'radial-gradient(circle, #16A34A 0%, transparent 75%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col space-y-16">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-[#F0F9FF] dark:bg-[#0F172A] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs">
                        <Trophy className="w-3.5 h-3.5 text-amber-500 dark:text-yellow-400" />
                        Accreditations & Accomplishments
                    </span>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                        Training, Research & Milestones
                    </h1>

                    <p className="text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                        A comprehensive catalog of academic degrees, government scholarship awards, research breakthroughs,
                        Master Trainer appointments, and 1st-place distinction honors.
                    </p>
                </div>

                {/* ================= 1. TRAINING & HONORS ================= */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.12)]">
                        <Award className="w-5 h-5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                            Professional Training Experiences
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {trainingAchievements.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${item.isFirstPlace
                                        ? 'bg-gradient-to-b from-amber-500/10 via-white/95 dark:via-[#0F172A]/90 to-white/95 dark:to-[#0F172A]/90 backdrop-blur-md border-amber-500/40 dark:border-amber-400/35 shadow-lg dark:shadow-amber-500/5'
                                        : 'bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs hover:border-[#0284C7] dark:hover:border-[#38BDF8]'
                                    }`}
                            >
                                {item.isFirstPlace && (
                                    <div className="absolute -top-3 right-5 inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-linear-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        Top Performer
                                    </div>
                                )}

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between gap-2">
                                        <span
                                            className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${item.isFirstPlace
                                                    ? 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/30'
                                                    : 'bg-[#F0F9FF] dark:bg-[#090D16] text-[#0284C7] dark:text-[#38BDF8] border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]'
                                                }`}
                                        >
                                            {item.role}
                                        </span>

                                        <span className="text-xs font-extrabold text-amber-500 dark:text-yellow-400">
                                            {item.award}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-snug">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-4 mt-4 border-t border-[#E2E8F0]/70 dark:border-[rgba(56,189,248,0.08)] space-y-1 text-[11px]">
                                    <p className="font-semibold text-[#0284C7] dark:text-[#38BDF8]">
                                        {item.organizer}
                                    </p>
                                    <p className="text-[#64748B] flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                                        {item.duration}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ================= 2. ACADEMIC RESEARCH & PROJECTS ================= */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.12)]">
                        <FolderGit2 className="w-5 h-5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                            Academic Research & Project Innovations
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {researchAchievements.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group flex flex-col justify-between p-6 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs hover:border-[#0284C7] dark:hover:border-[#38BDF8] hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="space-y-3.5">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#F0F9FF] dark:bg-[#090D16] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                                            {item.category}
                                        </span>
                                        <span className="text-[11px] font-semibold text-emerald-600 dark:text-[#4ADE80]">
                                            {item.highlight}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-bold text-[#0F172A] dark:text-[#F8FAFC] group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors leading-snug">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-4 mt-4 border-t border-[#E2E8F0]/70 dark:border-[rgba(56,189,248,0.08)] space-y-2.5">
                                    <div className="space-y-0.5 text-[11px]">
                                        <span className="text-[#64748B] flex items-center gap-1 font-medium">
                                            <UserCheck className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                                            Supervision:
                                        </span>
                                        <p className="font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                                            {item.supervisor}
                                        </p>
                                        <p className="text-[10px] text-[#64748B]">{item.supervisorRole}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {item.tags.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#F8FAFC] dark:bg-[rgba(9,13,22,0.6)] text-[#64748B] dark:text-[#94A3B8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ================= 3. ACADEMIC BACKGROUND & GPAS ================= */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.12)]">
                        <GraduationCap className="w-5 h-5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                            Academic Background & Scholastic Excellence
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {academicAchievements.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative p-6 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs hover:border-[#0284C7] dark:hover:border-[#38BDF8] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#64748B]">
                                            {edu.level}
                                        </span>
                                        <span
                                            className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full border ${edu.badgeColor}`}
                                        >
                                            {edu.score}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-snug">
                                        {edu.degree}
                                    </h3>

                                    <p className="text-xs font-semibold text-[#0284C7] dark:text-[#38BDF8]">
                                        {edu.institution}
                                    </p>
                                </div>

                                <div className="pt-4 mt-4 border-t border-[#E2E8F0]/70 dark:border-[rgba(56,189,248,0.08)] flex items-center justify-between text-xs text-[#64748B]">
                                    <span>{edu.year}</span>
                                    <span className="font-semibold text-emerald-600 dark:text-[#4ADE80]">
                                        {edu.scale}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ================= 4. GOVT. SCHOLARSHIP EXAMINATIONS ================= */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.12)]">
                        <Medal className="w-5 h-5 text-amber-500 dark:text-yellow-400" />
                        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                            Government Scholarships & Other Achievements
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {scholarshipAchievements.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${item.isTopRank
                                    ? 'bg-gradient-to-b from-amber-500/10 via-white/95 dark:via-[#0F172A]/90 to-white/95 dark:to-[#0F172A]/90 backdrop-blur-md border-amber-500/40 dark:border-amber-400/35 shadow-lg dark:shadow-amber-500/5'
                                    : 'bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs hover:border-[#0284C7] dark:hover:border-[#38BDF8]'
                                    }`}
                            >
                                {item.isTopRank && (
                                    <div className="absolute -top-3 right-5 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        Upazila Champion
                                    </div>
                                )}

                                <div className="space-y-3.5">
                                    <div className="flex items-center justify-between gap-2">
                                        <span
                                            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${item.isTopRank
                                                ? 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/30'
                                                : 'bg-[#F0F9FF] dark:bg-[#090D16] text-[#0284C7] dark:text-[#38BDF8] border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]'
                                                }`}
                                        >
                                            {item.grade}
                                        </span>

                                        <span className="text-xs font-extrabold text-amber-500 dark:text-yellow-400">
                                            Exam Year: {item.year}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs font-bold text-amber-600 dark:text-yellow-400 mt-1 flex items-center gap-1.5">
                                            <Trophy className="w-3.5 h-3.5 shrink-0" />
                                            {item.position}
                                        </p>
                                    </div>

                                    <p className="text-xs text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-4 mt-4 border-t border-[#E2E8F0]/70 dark:border-[rgba(56,189,248,0.08)] flex items-center justify-between text-[11px] text-[#64748B]">
                                    <span className="font-semibold text-[#0284C7] dark:text-[#38BDF8] line-clamp-1">
                                        {item.authority}
                                    </span>
                                    <span className="font-semibold text-emerald-600 dark:text-[#4ADE80] shrink-0 ml-2">
                                        Merit Awarded
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}