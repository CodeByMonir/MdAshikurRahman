'use client';

import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Briefcase,
    GraduationCap,
    Heart,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
    User,
    Users,
    X,
    Loader2,
    FolderGit2,
    Award,
    Code2,
    Target,
    CheckCircle2,
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

    // Quick Direct Contact Cards (Displayed at the top)
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
            value: 'ashik.6310@gmail.com',
            href: 'mailto:ashik.6310@gmail.com',
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

    // Social Channels
    const socialLinks = [
        {
            name: 'Facebook',
            href: 'http://www.fb.com/arashik2019',
            icon: FaFacebookF,
            hoverClass: 'hover:text-[#1877F2] hover:border-[#1877F2]/40',
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/imarashik',
            icon: FaInstagram,
            hoverClass: 'hover:text-[#E4405F] hover:border-[#E4405F]/40',
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/imarashik/',
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

    // Career Objective
    const careerObjective =
        'Highly motivated and dedicated ICT professional with a passion for teaching and a commitment to fostering a stimulating learning environment. Seeking a position as a Lecturer in ICT where I can utilize my expertise in Information and Communication Technology to inspire and educate students. With a strong background in ICT concepts and practical applications, I aspire to cultivate critical thinking, problem-solving, and innovation among students, preparing them to thrive in the dynamic and ever-evolving world of technology.';

    // Work Experience Data
    const workExperiences = [
        {
            role: 'Demonstrator (ICT)',
            index: 'N56930824',
            period: '01 September 2025 – Present',
            institution: 'Nayabazar Degree College, Dhaka',
            current: true,
        },
        {
            role: 'Lecturer (ICT)',
            period: '01 January 2020 – 31 August 2025',
            institution: 'Nayabazar Degree College, Dhaka',
            current: false,
        },
    ];

    // Academic Research & Projects
    const researchProjects = [
        {
            title: 'Bolbo Kotha : A Communication Aid For Non-Verbal People',
            type: 'B.Sc. Thesis',
            supervisor:
                'Dr. Khondaker Abdullah Al Mamun (Founder & Director of AIMS Lab, UIU)',
            details:
                'Human-Computer Interaction (HCI) research on assistive speech & communication technology for speech-impaired individuals.',
        },
        {
            title: 'Visit Bangladesh : A Web Application on Tours and Travels',
            type: 'System Analysis & Design',
            supervisor: 'Dr. Sumon Ahmed (Director of CDIP, UIU)',
            details:
                'Full software lifecycle, architecture modeling, user journeys, and database structuring for a national tourism ecosystem.',
        },
        {
            title: 'Student Database Management System',
            type: 'Web Programming Project',
            supervisor: 'Mr. Sajid Rabbani (Lecturer, UIU)',
            details:
                'Relational schema design, SQL optimization, and backend CRUD interfaces for academic institutions.',
        },
    ];

    // Training Experience (With 1st Place Highlight)
    const trainerExperience = [
        {
            title:
                'Basic Training on ICT Skills Enhancement for Heads of Secondary & Higher Secondary Educational Institutions and ICT Teachers',
            organizer: 'Upazila Secondary Education Office, Keraniganj, Dhaka-1312',
            duration: '04 Days (20 June 2021 – 23 June 2021)',
            role: 'Master Trainer',
        },
    ];

    const traineeExperience = [
        {
            title:
                'ICT in Education Literacy, Troubleshooting and Maintenance Training',
            organizer: 'Department of ICT, Ministry of PTIT',
            duration: '10 Days (07 November 2023 – 17 November 2023)',
            achievement: '1st Place in Training',
        },
        {
            title:
                'Computer Hardware, Network & Troubleshooting Training for Teachers',
            organizer: 'BANBEIS (Bangladesh Bureau of Educational Information and Statistics)',
            duration: '15 Days (11 November 2020 – 28 November 2020)',
        },
    ];

    // Technical Competencies
    const technicalSkillGroups = [
        {
            category: 'Core Computer Science',
            skills: [
                'System Analysis & Design',
                'Database Management Systems (DBMS)',
                'Digital Logic Design',
                'Project Management',
            ],
        },
        {
            category: 'Languages & Web Tech',
            skills: ['C', 'C++', 'Java', 'HTML5', 'CSS3', 'PHP', 'MySQL Server'],
        },
        {
            category: 'Developer Tools & OS',
            skills: ['Visual Studio', 'Android Studio', 'Windows', 'Android OS'],
        },
        {
            category: 'Office Productivity',
            skills: ['MS Word', 'MS Excel', 'MS PowerPoint'],
        },
    ];

    // Interpersonal Soft Skills
    const interpersonalSkills = [
        'Good in Oral and Written Communication (Bengali & English)',
        'Good in Presentation Making and Public Speaking',
        'Responsible in Maintaining Deadlines',
        'Good in Leadership and Motivation',
        'Good in Creative Thinking and Problem Solving',
        'Excellent Collaboration and Flexibility in Different Environments',
        'Good in Mentoring and Counseling',
        'Caring, Patience and Diversity in Workplace',
        'Love Reading Informative Books and References',
        'Love to do Research and Analysis',
    ];

    // Education Records
    const educations = [
        {
            degree: 'B.Sc. in Computer Science & Engineering (CSE)',
            institution: 'United International University (UIU), Dhaka',
            result: 'CGPA 3.41 / 4.00',
            passingYear: 'Spring 2017',
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Dhaka Residential Model College (DRMC), Dhaka',
            result: 'GPA 5.00 / 5.00',
            passingYear: '2012',
        },
        {
            degree: 'Secondary School Certificate (SSC)',
            institution: 'Ati Vawal High School, Dhaka',
            result: 'GPA 5.00 / 5.00',
            passingYear: '2010',
        },
    ];

    // Personal Credentials
    const personalDetails = [
        { label: "Father's Name", value: 'Md. Abdul Aual' },
        { label: "Mother's Name", value: 'Late Sultana Begum' },
        { label: 'Date of Birth', value: '2nd October, 1995' },
        { label: 'Religion', value: 'Islam' },
        { label: 'Marital Status', value: 'Married' },
        { label: 'Nationality', value: 'Bangladeshi' }
    ];

    // Hobbies & Interests
    const hobbies = [
        'Reading Novels',
        'Watching Cricket',
        'Solving Puzzles',
        'Cooking Innovative Food Items',
    ];

    // References
    const references = [
        {
            name: 'Professor Abdul Malek Miah',
            designation: 'Principal',
            institution: 'Nayabazar Degree College, Ati, Keraniganj, Dhaka-1312',
            email: 'principalmalek@yahoo.com',
            mobile: '+880 1712-106204',
        },
        {
            name: 'Maruf Rajon',
            designation: 'Principal Officer',
            institution: 'Sonali Bank PLC (Ati Bazar Branch), Keraniganj, Dhaka-1312',
            email: 'marufrajon111@gmail.com',
            mobile: '+880 1824-135635',
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

            {/* ================= BACKGROUND SYSTEM ================= */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
            >
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

                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.06] dark:opacity-[0.12]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 900"
                    fill="none"
                    stroke="url(#about-comm-gradient)"
                    strokeWidth="1.5"
                >
                    <defs>
                        <linearGradient id="about-comm-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0284C7" />
                            <stop offset="50%" stopColor="#38BDF8" />
                            <stop offset="100%" stopColor="#4ADE80" />
                        </linearGradient>
                    </defs>
                    <path d="M-100 150 Q 300 280, 700 120 T 1540 220" />
                    <path d="M-100 450 Q 400 300, 850 600 T 1540 400" strokeDasharray="6 8" />
                    <path d="M-100 750 Q 550 850, 950 650 T 1540 800" />
                    <circle cx="700" cy="120" r="3.5" fill="#38BDF8" />
                    <circle cx="850" cy="600" r="3" fill="#4ADE80" />
                    <circle cx="400" cy="300" r="2.5" fill="#0284C7" />
                </svg>

                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.35, 0.55, 0.35],
                        x: ['-5%', '3%', '-5%'],
                        y: ['-3%', '5%', '-3%'],
                    }}
                    transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-24 -left-20 w-105 h-105 sm:w-150 sm:h-150 rounded-full blur-[110px] opacity-40"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(56, 189, 248, 0.24) 0%, rgba(2, 132, 199, 0.08) 60%, transparent 80%)',
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.25, 0.45, 0.25],
                        x: ['3%', '-4%', '3%'],
                        y: ['4%', '-4%', '4%'],
                    }}
                    transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute -bottom-28 -right-20 w-95 h-95 sm:w-137.5 sm:h-137.5 rounded-full blur-[110px] opacity-30"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(74, 222, 128, 0.18) 0%, rgba(22, 163, 74, 0.06) 65%, transparent 80%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col space-y-10 sm:space-y-12">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-[#F0F9FF] dark:bg-[#0F172A] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs">
                        <User className="w-3.5 h-3.5" />
                        Curriculum Vitae & Profile
                    </span>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                        Md. Ashikur Rahman
                    </h2>

                    <p className="text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                        Master Trainer (ICT), Lecturer & Demonstrator at Nayabazar Degree College. CSE Graduate (UIU),
                        researcher, and academic advisor.
                    </p>
                </div>

                {/* ================= 1. CONTACT MEDIUMS AT TOP ================= */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex flex-col space-y-4"
                >
                    {/* Contact Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                        {contactChannels.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    className="group flex items-start gap-3 p-3.5 rounded-xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs hover:border-[#0284C7] dark:hover:border-[#38BDF8] hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <div className="p-2.5 rounded-xl bg-[#F0F9FF] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shrink-0 mt-0.5">
                                        <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${item.color}`} />
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

                    {/* Social Row & Instant Inquiry Action Banner */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                                Connect:
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

                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white bg-linear-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-md hover:shadow-hover-light dark:hover:shadow-hover-dark transition-all duration-300 active:scale-98 text-xs cursor-pointer"
                        >
                            <span>Send Direct Inquiry</span>
                            <Send className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </motion.div>

                {/* ================= 2. CAREER OBJECTIVE BANNER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="p-5 sm:p-7 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-card-light dark:shadow-card-dark space-y-2.5"
                >
                    <div className="flex items-center gap-2 text-[#0284C7] dark:text-[#38BDF8]">
                        <Target className="w-4 h-4" />
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                            Career Objective
                        </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                        {careerObjective}
                    </p>
                </motion.div>

                {/* ================= 3. MAIN DETAILS: 2-COLUMN GRID ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

                    {/* Left Column (Span 7): Experience, Education, Research, Training */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="lg:col-span-7 flex flex-col space-y-6"
                    >
                        {/* Work Experience */}
                        <div className="p-5 sm:p-7 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-card-light dark:shadow-card-dark space-y-4">
                            <div className="flex items-center gap-2 pb-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]">
                                <Briefcase className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                                    Work Experience
                                </h3>
                            </div>

                            <div className="space-y-3.5">
                                {workExperiences.map((exp, idx) => (
                                    <div
                                        key={idx}
                                        className="p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] dark:bg-[rgba(9,13,22,0.6)] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)] flex flex-col sm:flex-row sm:items-start justify-between gap-2"
                                    >
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                                                    {exp.role}
                                                </span>
                                                {exp.current && (
                                                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-[#4ADE80]">
                                                        Active Post
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xs text-[#0284C7] dark:text-[#38BDF8] font-medium mt-0.5">
                                                {exp.institution}
                                            </p>
                                            {exp.index && (
                                                <p className="text-[11px] text-[#64748B] mt-1">
                                                    Index No: <span className="font-semibold text-[#334155] dark:text-[#94A3B8]">{exp.index}</span>
                                                </p>
                                            )}
                                        </div>
                                        <span className="text-[11px] font-semibold text-[#64748B] bg-white dark:bg-[rgba(15,23,42,0.8)] px-2.5 py-1 rounded-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] self-start whitespace-nowrap">
                                            {exp.period}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Academic Research & Projects */}
                        <div className="p-5 sm:p-7 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-card-light dark:shadow-card-dark space-y-4">
                            <div className="flex items-center gap-2 pb-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]">
                                <FolderGit2 className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                                    Academic Research & Projects
                                </h3>
                            </div>

                            <div className="space-y-3.5">
                                {researchProjects.map((proj, idx) => (
                                    <div
                                        key={idx}
                                        className="p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] dark:bg-[rgba(9,13,22,0.6)] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)] space-y-1.5"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                            <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                                                {proj.title}
                                            </h4>
                                            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950/50 text-[#0284C7] dark:text-[#38BDF8] self-start sm:self-auto whitespace-nowrap">
                                                {proj.type}
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-[#0284C7] dark:text-[#38BDF8] font-medium">
                                            Supervision: {proj.supervisor}
                                        </p>
                                        <p className="text-xs text-[#64748B] leading-relaxed">
                                            {proj.details}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Training Experience (Master Trainer & Trainee with 1st Place distinction) */}
                        <div className="p-5 sm:p-7 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-card-light dark:shadow-card-dark space-y-5">
                            <div className="flex items-center gap-2 pb-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]">
                                <Award className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                                    Training & Capacity Building
                                </h3>
                            </div>

                            {/* Master Trainer */}
                            <div className="space-y-2">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-[#4ADE80]">
                                    • As Master Trainer
                                </span>
                                {trainerExperience.map((t, idx) => (
                                    <div
                                        key={idx}
                                        className="p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[rgba(9,13,22,0.6)] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)] space-y-1"
                                    >
                                        <p className="text-xs sm:text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                                            {t.title}
                                        </p>
                                        <p className="text-xs text-[#0284C7] dark:text-[#38BDF8]">
                                            Organized by: {t.organizer}
                                        </p>
                                        <p className="text-[11px] text-[#64748B] font-medium">
                                            Duration: {t.duration}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Trainee */}
                            <div className="space-y-2 pt-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
                                    • As Trainee (Professional Workshops)
                                </span>
                                {traineeExperience.map((t, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-3.5 rounded-xl border space-y-1.5 transition-all ${t.achievement
                                            ? 'bg-amber-500/5 dark:bg-amber-400/5 border-amber-500/30 dark:border-amber-400/25 shadow-xs'
                                            : 'bg-[#F8FAFC] dark:bg-[rgba(9,13,22,0.6)] border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]'
                                            }`}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                                            <p className="text-xs sm:text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                                                {t.title}
                                            </p>
                                            {t.achievement && (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-xs self-start sm:self-auto whitespace-nowrap">
                                                    ★ {t.achievement}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-[#0284C7] dark:text-[#38BDF8]">
                                            Organized by: {t.organizer}
                                        </p>
                                        <p className="text-[11px] text-[#64748B] font-medium">
                                            Duration: {t.duration}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Educational Qualifications */}
                        <div className="p-5 sm:p-7 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-card-light dark:shadow-card-dark space-y-4">
                            <div className="flex items-center gap-2 pb-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]">
                                <GraduationCap className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                                    Academic Background
                                </h3>
                            </div>

                            <div className="space-y-3.5">
                                {educations.map((edu, idx) => (
                                    <div
                                        key={idx}
                                        className="p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[rgba(9,13,22,0.6)] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)] flex flex-col sm:flex-row sm:items-start justify-between gap-2"
                                    >
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-xs text-[#0284C7] dark:text-[#38BDF8] font-medium mt-0.5">
                                                {edu.institution}
                                            </p>
                                            <p className="text-[11px] text-[#64748B] mt-1 font-semibold">
                                                Result: <span className="text-emerald-600 dark:text-[#4ADE80]">{edu.result}</span>
                                            </p>
                                        </div>
                                        <span className="text-[11px] font-semibold text-[#64748B] bg-white dark:bg-[rgba(15,23,42,0.8)] px-2.5 py-1 rounded-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] self-start whitespace-nowrap">
                                            {edu.passingYear}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column (Span 5): Skills, Details, Hobbies & References */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="lg:col-span-5 flex flex-col space-y-6"
                    >
                        {/* Technical Skills */}
                        <div className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs space-y-4">
                            <div className="flex items-center gap-2 pb-1.5 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]">
                                <Code2 className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                                    Technical Competencies
                                </h4>
                            </div>

                            <div className="space-y-3.5">
                                {technicalSkillGroups.map((group, idx) => (
                                    <div key={idx} className="space-y-1.5">
                                        <p className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                                            {group.category}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {group.skills.map((skill, sIdx) => (
                                                <span
                                                    key={sIdx}
                                                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#F0F9FF] dark:bg-[#0F172A] text-[#334155] dark:text-[#94A3B8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interpersonal Soft Skills */}
                        <div className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs space-y-3">
                            <div className="flex items-center gap-2 pb-1.5 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]">
                                <CheckCircle2 className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                                    Interpersonal Strengths
                                </h4>
                            </div>

                            <div className="space-y-2 pt-1">
                                {interpersonalSkills.map((skill, idx) => (
                                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#334155] dark:text-[#94A3B8]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] dark:bg-[#38BDF8] shrink-0 mt-1.5" />
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Personal Details */}
                        <div className="p-5 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs space-y-3">
                            <div className="flex items-center gap-2 pb-1.5 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]">
                                <User className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                                    Personal Details
                                </h4>
                            </div>
                            <div className="space-y-1.5 text-xs">
                                {personalDetails.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex justify-between py-1 border-b border-[#E2E8F0]/50 dark:border-[rgba(56,189,248,0.06)] last:border-none gap-2"
                                    >
                                        <span className="text-[#64748B] shrink-0">{item.label}:</span>
                                        <span className="font-semibold text-[#0F172A] dark:text-[#F8FAFC] text-right">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hobbies & Interests */}
                        <div className="p-5 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs space-y-3">
                            <div className="flex items-center gap-2 pb-1.5 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]">
                                <Heart className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                                    Hobbies & Interests
                                </h4>
                            </div>
                            <div className="grid grid-cols-2 gap-2 pt-1">
                                {hobbies.map((hobby, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-xs text-[#334155] dark:text-[#94A3B8]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] dark:bg-[#38BDF8]" />
                                        <span>{hobby}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* References */}
                        <div className="p-5 rounded-2xl bg-white/90 dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs space-y-4">
                            <div className="flex items-center gap-2 pb-1.5 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]">
                                <Users className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                                    References
                                </h4>
                            </div>

                            <div className="space-y-3">
                                {references.map((ref, idx) => (
                                    <div
                                        key={idx}
                                        className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[rgba(9,13,22,0.6)] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)] space-y-1"
                                    >
                                        <p className="text-xs font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                                            {ref.name}
                                        </p>
                                        <p className="text-[11px] font-semibold text-[#0284C7] dark:text-[#38BDF8]">
                                            {ref.designation}
                                        </p>
                                        <p className="text-[11px] text-[#64748B] leading-tight">
                                            {ref.institution}
                                        </p>
                                        <div className="pt-1 text-[11px] space-y-0.5">
                                            <p className="text-[#334155] dark:text-[#94A3B8]">
                                                <span className="text-[#64748B]">Email: </span>
                                                <a href={`mailto:${ref.email}`} className="hover:underline text-[#0284C7] dark:text-[#38BDF8]">
                                                    {ref.email}
                                                </a>
                                            </p>
                                            <p className="text-[#334155] dark:text-[#94A3B8]">
                                                <span className="text-[#64748B]">Mobile: </span>
                                                <a href={`tel:${ref.mobile}`} className="hover:underline">
                                                    {ref.mobile}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
                                        Delivers directly to Md. Ashikur Rahman
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-1.5 rounded-lg border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] text-[#64748B] hover:text-[#0284C7] dark:hover:text-[#38BDF8]"
                                >
                                    <X className="w-5 h-5" />
                                </button>
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
                                        placeholder="Academic Collaboration / Inquiry"
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
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-linear-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-md hover:shadow-hover-light dark:hover:shadow-hover-dark transition-all duration-300 disabled:opacity-50 cursor-pointer"
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