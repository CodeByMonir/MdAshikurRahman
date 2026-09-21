'use client';

import { motion } from 'framer-motion';
import {
    Award,
    BarChart3,
    BookOpen,
    Calendar,
    CheckCircle,
    CheckCircle2,
    Compass,
    Cpu,
    Film,
    FolderGit2,
    Globe,
    GraduationCap,
    Medal,
    Megaphone,
    QrCode,
    Shield,
    ShieldCheck,
    Sparkles,
    Trophy,
    UserCheck,
    Wrench,
} from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';

export default function Achievements() {
    // 1. Professional & Pedagogical Certificates (Unified 3-Column Grid)
    const certificateAchievements = [
        {
            id: 1,
            tag: 'Pedagogy & ICT',
            icon: Award,
            badgeStyle: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
            title: 'Basic Teacher Training Course - 5th Batch',
            recipient: 'Md. Ashikur Rahman',
            organization: 'a2i • ICT Division • USAID • UNDP',
            description:
                'Completed blended e-learning pedagogy course on modern classroom delivery, interactive module design, and ICT instructional methods.',
            metadata: 'Prof. Faruque Ahmed (e-Learning Specialist)',
            credentialId: 'Verified a2i Batch-05',
        },
        {
            id: 2,
            tag: 'Language Qualification',
            icon: Globe,
            badgeStyle: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
            title: 'General English — S.S.C. Pre-Intermediate 1',
            recipient: 'Md. Ashikur Rahman',
            organization: 'British Council Bangladesh',
            description:
                'Accredited English course focusing on listening comprehension, communicative syntax, and formal verbal interactions.',
            metadata: 'Teaching Centre Manager',
            duration: 'between the dates 12/04/2010 and 06/06/2010',
            credentialId: 'BC-BD End of Course',
        },
        {
            id: 3,
            tag: 'Digital Marketing',
            icon: Megaphone,
            badgeStyle: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
            title: 'Digital Marketing: Campaign Planning',
            recipient: 'Md. Ashikur Rahman',
            organization: 'Robi- 10 Minute School • MuktoPaath',
            description:
                'Online certification covering marketing lifecycle strategy, targeted campaign execution, digital funnels, and brand engagement.',
            metadata: 'Ayman Sadiq & Dr. Md. Abdul Mannan, PAA',
            credentialId: 'MC-B472108M839197X185L',
        },
        {
            id: 4,
            tag: 'Cyber Security',
            icon: Shield,
            badgeStyle: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
            title: 'Digital Security Essentials',
            recipient: 'Md. Ashikur Rahman',
            organization: 'Digital Security Agency • a2i',
            description:
                'Blended learning on information asset protection, threat recognition, privacy protocols, and safe digital infrastructure maintenance.',
            metadata: 'Dr. Md. Abdul Mannan, PAA & Md. Rashadul Islam',
            duration: 'held on 8th April, 2020',
            credentialId: 'MC-N472108T820518J106Q',
        },
        {
            id: 5,
            tag: 'Analytics & Insights',
            icon: BarChart3,
            badgeStyle: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
            title: 'Google Analytics',
            recipient: 'Md. Ashikur Rahman',
            organization: 'Robi 10 Minute School • MuktoPaath',
            description:
                'Web analytics course mastering user behavior metrics, traffic tracking, conversion goals, and institutional reporting dashboard creation.',
            metadata: 'Ayman Sadiq & Dr. Md. Abdul Mannan, PAA',
            credentialId: 'MC-M472108A838563P189U',
        },
        {
            id: 6,
            tag: 'Multimedia Pedagogy',
            icon: Film,
            badgeStyle: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
            title: 'Multimedia Content Development',
            recipient: 'Md. Ashikur Rahman',
            organization: 'a2i Programme • MuktoPaath • ICT Division',
            description:
                'Blended e-learning course covering interactive digital teaching content, visual classroom media creation, and instructional multimedia tools.',
            metadata: 'Dr. Md. Abdul Mannan (PAA)',
            credentialId: 'MC-O472108D815991P125W',
        },
        {
            id: 7,
            tag: 'Leadership & Soft Skills',
            icon: Compass,
            badgeStyle: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
            title: 'Personal Leadership',
            recipient: 'Md. Ashikur Rahman',
            organization: 'Robi 10 Minute School • MuktoPaath',
            description:
                'Executive self-development course focusing on professional initiative, habit architecture, structured time governance, and ethical leadership.',
            metadata: 'Ayman Sadiq & Dr. Md. Abdul Mannan, PAA',
            credentialId: 'MC-G472108H899888U198J',
        },
        {
            id: 8,
            tag: 'Government Technical Lab',
            icon: Cpu,
            badgeStyle: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
            title: 'ICT in Education Literacy, Troubleshooting & Maintenance',
            recipient: 'Md. Ashikur Rahman (Lecturer, Nayabazar College)',
            organization: 'Department of ICT (DoICT) • Sheikh Russel Digital Lab',
            description:
                '10-day intensive hardware diagnostics, network layout setup, lab preventive maintenance, and smart classroom maintenance training.',
            metadata: 'DoICT • S. A. M. Rafiqunnabi & Md. Mostafa Kamal',
            duration: '07 Nov 2023 – 17 Nov 2023',
            credentialId: 'Govt. Project Phase 2',
        },
        {
            id: 9,
            tag: 'Content Strategy',
            icon: FaYoutube,
            badgeStyle: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
            title: 'YouTubing',
            recipient: 'Md. Ashikur Rahman',
            organization: 'Robi 10 Minute School • MuktoPaath',
            description:
                'Comprehensive curriculum addressing video production, pedagogical channel development, audience analytics, and educational outreach.',
            metadata: 'Ayman Sadiq & Dr. Md. Abdul Mannan, PAA',
            credentialId: 'MC-T472108V833637H199O',
        },
    ];

    // 2. Training & Capacity Building Achievements
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
            award: '★ 1st Place in Training',
            isFirstPlace: true,
            description:
                'Completed intensive institutional training on educational network topology, institutional routing, hardware diagnostics, and preventive system maintenance.',
        },
    ];

    // 3. Research & Projects
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

    // 4. Academic Milestones
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

    // 5. Government Scholarships & Early Academic Honors
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
            className="relative min-h-screen overflow-hidden py-14 sm:py-24 px-3 sm:px-6 lg:px-12 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-300 select-none text-slate-800 dark:text-slate-100"
        >
            {/* Background Matrix & Constellation System */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
            >
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

                <motion.div
                    animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.55, 0.35] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] sm:w-[650px] lg:w-[800px] h-[420px] sm:h-[650px] lg:h-[800px] rounded-full blur-[130px] opacity-45 select-none"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(56, 189, 248, 0.18) 45%, rgba(74, 222, 128, 0.08) 70%, transparent 90%)',
                    }}
                />

                <div
                    className="absolute -bottom-28 -left-24 w-96 h-96 rounded-full blur-[120px] opacity-30 dark:opacity-20 select-none"
                    style={{ background: 'radial-gradient(circle, #0284C7 0%, transparent 75%)' }}
                />
                <div
                    className="absolute bottom-1/3 -right-24 w-80 h-80 rounded-full blur-[120px] opacity-25 dark:opacity-15 select-none"
                    style={{ background: 'radial-gradient(circle, #16A34A 0%, transparent 75%)' }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col space-y-12 sm:space-y-16">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider bg-[#F0F9FF] dark:bg-[#0F172A] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs">
                        <Trophy className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 dark:text-yellow-400" />
                        Accreditations & Accomplishments
                    </span>

                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                        Training, Research & Milestones
                    </h1>

                    <p className="text-[11px] sm:text-xs md:text-sm text-[#334155] dark:text-[#94A3B8] leading-tight sm:leading-relaxed">
                        A comprehensive catalog of verified pedagogical certifications, academic degrees, government scholarship awards, research publications, Master Trainer appointments, and 1st-place honors.
                    </p>
                </div>

                {/* ================= 1. VERIFIED CERTIFICATES (3-COLUMN MATRIX) ================= */}
                <div className="space-y-5 sm:space-y-6">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.12)]">
                        <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <h2 className="text-[14px] sm:text-lg md:text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                            Verified Pedagogical & Professional Certificates
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
                        {certificateAchievements.map((cert, idx) => {
                            const IconComp = cert.icon;

                            return (
                                <motion.div
                                    key={cert.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: idx * 0.05 }}
                                    className="group relative flex flex-col justify-between p-3.5 sm:p-5 rounded-2xl bg-white/70 dark:bg-[rgba(15,23,42,0.65)] backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.18)] shadow-xs hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="space-y-2 sm:space-y-3">
                                        {/* Badge / Tag Header */}
                                        <div className="flex items-center justify-between gap-1.5">
                                            <span
                                                className={`inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${cert.badgeStyle}`}
                                            >
                                                <IconComp className="w-3 h-3" />
                                                <span>{cert.tag}</span>
                                            </span>

                                            <span className="inline-flex items-center gap-0.5 text-[9px] sm:text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                                                <CheckCircle2 className="w-3 h-3" />
                                                Verified
                                            </span>
                                        </div>

                                        {/* Title (strictly capped at max 14px on mobile) */}
                                        <div>
                                            <h3 className="text-[12px] sm:text-[14px] font-extrabold text-[#0F172A] dark:text-[#F8FAFC] leading-tight group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors line-clamp-2">
                                                {cert.title}
                                            </h3>
                                            <p className="text-[10px] sm:text-[11px] text-[#0284C7] dark:text-[#38BDF8] font-semibold mt-0.5 truncate">
                                                {cert.organization}
                                            </p>
                                        </div>

                                        {/* Description (max 14px on mobile, tight line-height) */}
                                        <p className="text-[9px] sm:text-[12px] text-[#334155] dark:text-[#94A3B8] leading-tight sm:leading-relaxed line-clamp-3">
                                            {cert.description}
                                        </p>

                                        {/* Optional single duration date mention */}
                                        {cert.duration && (
                                            <div className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100/60 dark:bg-slate-800/40 px-2 py-0.5 rounded">
                                                <Calendar className="w-2.5 h-2.5 text-sky-500 shrink-0" />
                                                <span className="truncate">{cert.duration}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Card Footer: Signatory & Credential ID */}
                                    <div className="pt-2.5 sm:pt-3 mt-3 border-t border-[#E2E8F0]/70 dark:border-white/10 space-y-1 font-mono text-[8px] sm:text-[10px] text-slate-500 dark:text-slate-400 leading-none">
                                        <p className="truncate text-slate-700 dark:text-slate-300 font-medium">
                                            {cert.metadata}
                                        </p>
                                        <div className="flex items-center justify-between pt-0.5">
                                            <span className="text-[#0284C7] dark:text-[#38BDF8] truncate max-w-[70%]">
                                                {cert.credentialId}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-slate-400 shrink-0">
                                                <QrCode className="w-3 h-3" />
                                                QR
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* ================= 2. TRAINING & HONORS ================= */}
                <div className="space-y-5 sm:space-y-6">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.12)]">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <h2 className="text-[14px] sm:text-lg md:text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                            Professional Training Experiences
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
                        {trainingAchievements.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: idx * 0.08 }}
                                className={`relative flex flex-col justify-between p-3.5 sm:p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${item.isFirstPlace
                                        ? 'bg-gradient-to-b from-amber-500/10 via-white/80 dark:via-[#0F172A]/80 to-white/90 dark:to-[#0F172A]/90 backdrop-blur-md border-amber-500/40 dark:border-amber-400/35 shadow-lg'
                                        : 'bg-white/70 dark:bg-[rgba(15,23,42,0.65)] backdrop-blur-md border-[#E2E8F0] dark:border-[rgba(56,189,248,0.18)] shadow-xs hover:border-[#0284C7] dark:hover:border-[#38BDF8]'
                                    }`}
                            >
                                {item.isFirstPlace && (
                                    <div className="absolute -top-2.5 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wide bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md">
                                        <Sparkles className="w-3 h-3" />
                                        Top Performer
                                    </div>
                                )}

                                <div className="space-y-2 sm:space-y-2.5">
                                    <div className="flex items-center justify-between gap-2">
                                        <span
                                            className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${item.isFirstPlace
                                                    ? 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/30'
                                                    : 'bg-[#F0F9FF] dark:bg-[#090D16] text-[#0284C7] dark:text-[#38BDF8] border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]'
                                                }`}
                                        >
                                            {item.role}
                                        </span>

                                        <span className="text-[10px] sm:text-xs font-extrabold text-amber-500 dark:text-yellow-400">
                                            {item.award}
                                        </span>
                                    </div>

                                    <h3 className="text-[12px] sm:text-[14px] font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-tight sm:leading-snug line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-[9px] sm:text-[12px] text-[#334155] dark:text-[#94A3B8] leading-tight sm:leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-3 mt-3 border-t border-[#E2E8F0]/70 dark:border-white/10 space-y-1 text-[9px] sm:text-[11px] leading-none">
                                    <p className="font-semibold text-[#0284C7] dark:text-[#38BDF8] truncate">
                                        {item.organizer}
                                    </p>
                                    <p className="text-[#64748B] dark:text-[#94A3B8] flex items-center gap-1 truncate">
                                        <Calendar className="w-3 h-3 shrink-0" />
                                        <span>{item.duration}</span>
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ================= 3. ACADEMIC RESEARCH & PROJECTS ================= */}
                <div className="space-y-5 sm:space-y-6">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.12)]">
                        <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <h2 className="text-[14px] sm:text-lg md:text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                            Academic Research & Project Innovations
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
                        {researchAchievements.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: idx * 0.08 }}
                                className="group flex flex-col justify-between p-3.5 sm:p-5 rounded-2xl bg-white/70 dark:bg-[rgba(15,23,42,0.65)] backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.18)] shadow-xs hover:border-[#0284C7] dark:hover:border-[#38BDF8] hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#F0F9FF] dark:bg-[#090D16] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] truncate">
                                            {item.category}
                                        </span>
                                        <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-600 dark:text-[#4ADE80] shrink-0">
                                            {item.highlight}
                                        </span>
                                    </div>

                                    <h3 className="text-[12px] sm:text-[14px] font-bold text-[#0F172A] dark:text-[#F8FAFC] group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors leading-tight sm:leading-snug line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-[9px] sm:text-[12px] text-[#334155] dark:text-[#94A3B8] leading-tight sm:leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-3 mt-3 border-t border-[#E2E8F0]/70 dark:border-white/10 space-y-2 leading-none">
                                    <div className="space-y-0.5 text-[9px] sm:text-[11px]">
                                        <span className="text-[#64748B] flex items-center gap-1 font-medium">
                                            <UserCheck className="w-3 h-3 text-[#0284C7] dark:text-[#38BDF8]" />
                                            Supervision:
                                        </span>
                                        <p className="font-bold text-[#0F172A] dark:text-[#F8FAFC] truncate">
                                            {item.supervisor}
                                        </p>
                                        <p className="text-[8px] sm:text-[10px] text-[#64748B] truncate">
                                            {item.supervisorRole}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-1 pt-1">
                                        {item.tags.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-medium bg-[#F8FAFC] dark:bg-[rgba(9,13,22,0.6)] text-[#64748B] dark:text-[#94A3B8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]"
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

                {/* ================= 4. ACADEMIC BACKGROUND & GPAS ================= */}
                <div className="space-y-5 sm:space-y-6">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.12)]">
                        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <h2 className="text-[14px] sm:text-lg md:text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                            Academic Background & Scholastic Excellence
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
                        {academicAchievements.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: idx * 0.08 }}
                                className="relative p-3.5 sm:p-5 rounded-2xl bg-white/70 dark:bg-[rgba(15,23,42,0.65)] backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.18)] shadow-xs hover:border-[#0284C7] dark:hover:border-[#38BDF8] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="space-y-2 sm:space-y-2.5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#64748B]">
                                            {edu.level}
                                        </span>
                                        <span
                                            className={`text-[10px] sm:text-xs font-extrabold px-2 py-0.5 rounded-full border ${edu.badgeColor}`}
                                        >
                                            {edu.score}
                                        </span>
                                    </div>

                                    <h3 className="text-[12px] sm:text-[14px] font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-tight sm:leading-snug">
                                        {edu.degree}
                                    </h3>

                                    <p className="text-[10px] sm:text-xs font-semibold text-[#0284C7] dark:text-[#38BDF8]">
                                        {edu.institution}
                                    </p>
                                </div>

                                <div className="pt-3 mt-3 border-t border-[#E2E8F0]/70 dark:border-white/10 flex items-center justify-between text-[9px] sm:text-xs text-[#64748B] leading-none">
                                    <span>{edu.year}</span>
                                    <span className="font-semibold text-emerald-600 dark:text-[#4ADE80]">
                                        {edu.scale}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ================= 5. GOVT. SCHOLARSHIP EXAMINATIONS ================= */}
                <div className="space-y-5 sm:space-y-6">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.12)]">
                        <Medal className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 dark:text-yellow-400" />
                        <h2 className="text-[14px] sm:text-lg md:text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                            Government Scholarships & Honors
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
                        {scholarshipAchievements.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: idx * 0.08 }}
                                className={`relative flex flex-col justify-between p-3.5 sm:p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${item.isTopRank
                                        ? 'bg-gradient-to-b from-amber-500/10 via-white/80 dark:via-[#0F172A]/80 to-white/90 dark:to-[#0F172A]/90 backdrop-blur-md border-amber-500/40 dark:border-amber-400/35 shadow-lg'
                                        : 'bg-white/70 dark:bg-[rgba(15,23,42,0.65)] backdrop-blur-md border-[#E2E8F0] dark:border-[rgba(56,189,248,0.18)] shadow-xs hover:border-[#0284C7] dark:hover:border-[#38BDF8]'
                                    }`}
                            >
                                {item.isTopRank && (
                                    <div className="absolute -top-2.5 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wide bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md">
                                        <Sparkles className="w-3 h-3" />
                                        Upazila Champion
                                    </div>
                                )}

                                <div className="space-y-2 sm:space-y-2.5">
                                    <div className="flex items-center justify-between gap-2">
                                        <span
                                            className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${item.isTopRank
                                                    ? 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/30'
                                                    : 'bg-[#F0F9FF] dark:bg-[#090D16] text-[#0284C7] dark:text-[#38BDF8] border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]'
                                                }`}
                                        >
                                            {item.grade}
                                        </span>

                                        <span className="text-[10px] sm:text-xs font-extrabold text-amber-500 dark:text-yellow-400">
                                            Exam Year: {item.year}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-[12px] sm:text-[14px] font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-tight sm:leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-[10px] sm:text-xs font-bold text-amber-600 dark:text-yellow-400 mt-0.5 flex items-center gap-1">
                                            <Trophy className="w-3 h-3 shrink-0" />
                                            {item.position}
                                        </p>
                                    </div>

                                    <p className="text-[9px] sm:text-[12px] text-[#334155] dark:text-[#94A3B8] leading-tight sm:leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-3 mt-3 border-t border-[#E2E8F0]/70 dark:border-white/10 flex items-center justify-between text-[9px] sm:text-[11px] text-[#64748B] leading-none">
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
