'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    Bell,
    Calendar,
    ChevronDown,
    Download,
    ExternalLink,
    FileText,
    Filter,
    Home,
    Megaphone,
    Search,
    Sparkles,
    Tag,
} from 'lucide-react';

export default function NoticePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [expandedNoticeId, setExpandedNoticeId] = useState(null);

    const categories = ['All', 'Academic', 'Exam', 'Training', 'Events'];

    const noticesData = [
        {
            id: 1,
            title: 'HSC 2026 Batch: ICT Practical Class & Lab Exam Schedules',
            category: 'Exam',
            date: 'September 24, 2026',
            badgeStyle: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
            pinned: true,
            summary:
                'Hands-on laboratory diagnostics, HTML/C programming assignments, and computer network troubleshooting sessions for upcoming internal evaluations.',
            details:
                'All HSC 2026 registered students from Science, Commerce, and Humanities groups are instructed to submit their practical lab notebooks by October 10. Sessions will be conducted at Computer Lab 01 in Nayabazar Degree College under direct teacher supervision.',
            attachments: [
                { name: 'HSC_2026_ICT_Lab_Schedule.pdf', size: '240 KB' },
            ],
        },
        {
            id: 2,
            title: 'Basic Teacher Training & Blended E-Learning Pedagogy Workshop',
            category: 'Training',
            date: 'September 18, 2026',
            badgeStyle: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
            pinned: true,
            summary:
                'Curriculum development and interactive multimedia teaching resources certified under institutional e-learning guidelines.',
            details:
                'Facilitators and faculty members from regional institutions are invited to review the digital instructional pedagogy decks and interactive module authoring guidelines. Access to workshop recording archives is provided through the college portal.',
            attachments: [
                { name: 'Pedagogy_Workshop_Guidelines.pdf', size: '1.2 MB' },
            ],
        },
        {
            id: 3,
            title: 'Online Evaluation & Student Testimonial Portal Now Active',
            category: 'Academic',
            date: 'September 10, 2026',
            badgeStyle: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
            pinned: false,
            summary:
                'Students and guardians can submit verified coursework feedback and guidance appraisals directly through the portal.',
            details:
                'The centralized review submission engine is open for all active and alumni batches. Testimonials submitted with role-specific credentials will be processed and indexed on the official reviews dashboard.',
            attachments: [],
        },
        {
            id: 4,
            title: 'Upcoming National ICT Olympiad & Sheikh Russel Digital Lab Sessions',
            category: 'Events',
            date: 'August 28, 2026',
            badgeStyle: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
            pinned: false,
            summary:
                'Intensive interactive programming bootcamps and competitive logic-building contests for collegiate participants.',
            details:
                'Training will focus on algorithm design, relational database models, and hardware diagnostic procedures. Registration opens for all college students next Monday.',
            attachments: [
                { name: 'ICT_Olympiad_Registration_Form.pdf', size: '180 KB' },
            ],
        },
        {
            id: 5,
            title: 'College Library: ICT Reference Volumes & Journals Updated',
            category: 'Academic',
            date: 'August 14, 2026',
            badgeStyle: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
            pinned: false,
            summary:
                'New editions of computer science treatises, networking protocols, and system architecture textbooks added to the 2nd-floor archive.',
            details:
                'Students can borrow reference guides using their institutional library cards. Additional digital e-book collections are accessible through the reading room terminal desks.',
            attachments: [],
        },
    ];

    const toggleNotice = (id) => {
        setExpandedNoticeId((prev) => (prev === id ? null : id));
    };

    const filteredNotices = noticesData.filter((item) => {
        const matchesCategory =
            selectedCategory === 'All' || item.category === selectedCategory;
        const matchesSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.summary.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="relative min-h-screen py-8 sm:py-16 px-3 sm:px-6 lg:px-12 bg-transparent text-slate-800 dark:text-slate-100">
            <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
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
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8] border border-[#0284C7]/30 dark:border-[#38BDF8]/30">
                        <Bell className="w-3 h-3 text-[#0284C7] dark:text-[#38BDF8]" />
                        Official Announcements
                    </span>
                    <h1 className="text-[14px] sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        Notice Board & Academic Bulletins
                    </h1>
                    <p className="text-[10px] sm:text-xs text-[#64748B] dark:text-[#94A3B8] leading-tight sm:leading-relaxed">
                        Stay updated on examination timetables, practical ICT laboratory schedules, faculty workshops, and collegiate circulars.
                    </p>
                </div>

                {/* Search & Category Filter Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-transparent">
                    {/* Search Bar */}
                    <div className="relative w-full sm:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search notices..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8]"
                        />
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto justify-start sm:justify-end">
                        <Filter className="w-3.5 h-3.5 text-slate-400 hidden sm:block mr-1" />
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all border cursor-pointer ${selectedCategory === cat
                                        ? 'border-[#0284C7] dark:border-[#38BDF8] text-[#0284C7] dark:text-[#38BDF8] bg-sky-500/10'
                                        : 'border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-slate-300'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Notices List */}
                <div className="space-y-3">
                    {filteredNotices.length > 0 ? (
                        filteredNotices.map((notice) => {
                            const isExpanded = expandedNoticeId === notice.id;

                            return (
                                <article
                                    key={notice.id}
                                    className="p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-transparent transition-all duration-300 hover:border-[#0284C7] dark:hover:border-[#38BDF8]"
                                >
                                    <div
                                        onClick={() => toggleNotice(notice.id)}
                                        className="cursor-pointer space-y-2 select-none"
                                    >
                                        {/* Header Row: Category, Date & Pinned Badge */}
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-1.5 flex-wrap">
                                                <span
                                                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border ${notice.badgeStyle}`}
                                                >
                                                    <Tag className="w-2.5 h-2.5" />
                                                    <span>{notice.category}</span>
                                                </span>

                                                {notice.pinned && (
                                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-linear-to-r from-amber-500 to-yellow-400 text-slate-950">
                                                        <Sparkles className="w-2.5 h-2.5" />
                                                        <span>Pinned</span>
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-1 text-[9px] sm:text-[11px] font-mono text-slate-400">
                                                <Calendar className="w-3 h-3" />
                                                <span>{notice.date}</span>
                                            </div>
                                        </div>

                                        {/* Title & Summary */}
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="space-y-1">
                                                <h2 className="text-[12px] sm:text-[14px] font-bold text-slate-900 dark:text-white leading-tight">
                                                    {notice.title}
                                                </h2>
                                                <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-300 leading-normal">
                                                    {notice.summary}
                                                </p>
                                            </div>

                                            <ChevronDown
                                                className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#0284C7] dark:text-[#38BDF8]' : ''
                                                    }`}
                                            />
                                        </div>
                                    </div>

                                    {/* Expanded Detail Body */}
                                    {isExpanded && (
                                        <div className="mt-3.5 pt-3.5 border-t border-slate-200/80 dark:border-white/10 space-y-3 text-left">
                                            <p className="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                                {notice.details}
                                            </p>

                                            {/* File Attachments */}
                                            {notice.attachments.length > 0 && (
                                                <div className="space-y-1.5 pt-1">
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                        Attached Circular Documents:
                                                    </span>
                                                    <div className="flex flex-wrap gap-2">
                                                        {notice.attachments.map((file, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-[10px] sm:text-[11px] font-medium text-slate-700 dark:text-slate-200 hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors"
                                                            >
                                                                <FileText className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                                                                <span>{file.name}</span>
                                                                <span className="text-[9px] text-slate-400 font-mono">
                                                                    ({file.size})
                                                                </span>
                                                                <button
                                                                    type="button"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        alert(`Downloading ${file.name}`);
                                                                    }}
                                                                    aria-label="Download attachment"
                                                                    className="p-1 hover:text-[#0284C7] dark:hover:text-[#38BDF8] cursor-pointer"
                                                                >
                                                                    <Download className="w-3 h-3" />
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </article>
                            );
                        })
                    ) : (
                        <div className="p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-white/15">
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                                No notices found matching &ldquo;{searchQuery}&rdquo;.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}