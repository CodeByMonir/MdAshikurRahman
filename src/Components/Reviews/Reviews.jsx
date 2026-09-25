'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowLeft,
    CheckCircle2,
    GraduationCap,
    Home,
    PenSquare,
    Quote,
    Star,
    Users,
    X,
    Calendar,
    Briefcase,
    BookOpen,
} from 'lucide-react';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedReview, setSelectedReview] = useState(null);
    const [expandedComments, setExpandedComments] = useState({});

    useEffect(() => {
        const fetchReviews = async () => {
            const mockApiResponse = [
                {
                    id: 1,
                    name: 'Monir Hossen',
                    role: 'Student',
                    program: {
                        class: 'HSC',
                        group: 'Commerce',
                        batch: '2021',
                    },
                    rating: 5,
                    date: '5 years ago',
                    avatar: 'https://codebymonir.vercel.app/profile.webp',
                    comment:
                        'He was new when I was student, but his guidance and mentorship helped me to motivate in my life. His supportive nature and dedicated faculty made my academic journey truly enriching.',
                },
                {
                    id: 2,
                    name: 'Sumaiya Rahman',
                    role: 'Student',
                    program: {
                        class: 'HSC',
                        group: 'Science',
                        batch: '2023',
                    },
                    rating: 5,
                    date: '1 month ago',
                    avatar: '',
                    comment:
                        "Ashik Sir has always been my favorite teacher. I've had a very warm and close relationship with him since the very beginning of my college life. I enjoyed his classes the most during my college days, and even now, I really miss those classes. There was always something special about the way he taught and connected with us.",
                },
                {
                    id: 3,
                    name: 'Sifat Anowar',
                    role: 'Student',
                    program: {
                        class: 'HSC',
                        group: 'Business Studies',
                        batch: '2024',
                    },
                    rating: 5,
                    date: '3 weeks ago',
                    avatar: '',
                    comment:
                        "As a student, I wasn't always very attentive to my studies. I was more interested in extracurricular activities, especially drawing and cultural activities. Ashik Sir never discouraged me or showed any annoyance toward these interests. Instead, he always supported and encouraged me. And whenever I tried to seek the truth or understand things for myself, Ashik Sir always tried to guide me in the right direction. I'm truly grateful for his support, encouragement, and guidance throughout my college life.",
                },
                {
                    id: 4,
                    name: 'Mahmuda Akter Munni',
                    role: 'Gurdian',
                    program: {
                        relation: 'Elder Sister',
                        studentName: 'Two Students (Brother & Sister)',
                    },
                    rating: 5,
                    date: '1 month ago',
                    avatar: '',
                    comment:
                        'My younger brother and sister have also been students of Ashik Sir. I truly feel fortunate to have had the opportunity to entrust their education to a teacher like him. He is a very dedicated and hardworking teacher who genuinely cares about his students and always puts in his best effort for them.',
                },
                {
                    id: 5,
                    name: 'Noni Gopal Saha',
                    role: 'Teacher',
                    program: {
                        title: 'Senior Teacher',
                        teacherAt: 'Local High School',
                        Subject: 'Science',
                    },
                    rating: 4.5,
                    date: '2 weeks ago',
                    avatar: '',
                    comment:
                        'Ashik was once my student, and today, he has become a teacher himself. It fills my heart with immense pride to see how far he has come. He has also taught my son and still keeps in touch and checks on his progress from time to time. Seeing one of my former students grow into a dedicated and capable teacher gives me a deep sense of peace and satisfaction. It is truly one of the most rewarding feelings a teacher can have.',
                },
                {
                    id: 6,
                    name: 'Hashem Ali',
                    role: 'Teacher',
                    program: {
                        title: 'Colleague Lecturer',
                        teacherAt: 'Nayabazar Degree College',
                        Subject: 'General Studies',
                    },
                    rating: 5,
                    date: '4 days ago',
                    avatar: '',
                    comment:
                        'Ashik Sir is a popular teacher, but what makes him truly special is the kind of person he is. He is one of the most polite, warm-hearted, and helpful people I have ever known. I have rarely come across someone as humble, kind, and genuinely caring as him.',
                },
                {
                    id: 7,
                    name: 'Samaniya Aaka',
                    role: 'Student',
                    program: {
                        class: 'HSC',
                        group: 'Business Studies',
                        batch: '2026',
                    },
                    rating: 5,
                    date: '4 days ago',
                    avatar: '',
                    comment:
                        'Ashik Sir is an extremely honest and friendly person. We always felt safe and comfortable around him, and we could openly share any personal problems with him without hesitation. He never made us feel uncomfortable or annoyed. Instead, he would listen to us patiently and sincerely and always try to offer helpful advice and solutions.',
                },
                {
                    id: 8,
                    name: 'Shahinur Akter Ratri',
                    role: 'Student',
                    program: {
                        class: 'HSC',
                        group: 'Humanities',
                        batch: '2026',
                    },
                    rating: 5,
                    date: '4 days ago',
                    avatar: '',
                    comment:
                        'Ashik Sir is my favorite teacher from my college days. I always attended his classes with great interest and attention. He had a wonderful way of explaining even the most difficult topics in a very simple and understandable manner. I truly enjoyed his classes, and I still miss having him as my teacher.',
                },
                {
                    id: 9,
                    name: 'Tasnim Kabir',
                    role: 'Student',
                    program: {
                        class: 'HSC',
                        group: 'Science',
                        batch: '2026',
                    },
                    rating: 5,
                    date: '4 days ago',
                    avatar: '',
                    comment:
                        "Ashik Sir's classes were always full of fun and memorable moments. I used to have a lot of fun and mischief in his classes, and Sir would often joke around and have fun with us too. The time we spent in his classes was not only enjoyable but also very meaningful and valuable. Those moments are still some of my favorite memories.",
                },
                {
                    id: 10,
                    name: 'Mumtahina Momo',
                    role: 'Student',
                    program: {
                        class: 'HSC',
                        group: 'Humanities',
                        batch: '2026',
                    },
                    rating: 5,
                    date: '4 days ago',
                    avatar: '',
                    comment:
                        'Ashik Sir is truly the best teacher. He was also the teacher of my elder brother and my cousin, so he has always had a close and warm relationship with our family. We have a lot of respect and affection for him. I always pray for his well-being, success, and happiness.',
                },
                {
                    id: 11,
                    name: 'Tasin Ahmed',
                    role: 'Student',
                    program: {
                        class: 'HSC',
                        group: 'Humanities',
                        batch: '2023',
                    },
                    rating: 5,
                    date: '2 months ago',
                    avatar: '',
                    comment:
                        "There's actually a funny story behind how my relationship with Ashik Sir began, but I'd rather keep that story to myself. 😄 I've rarely come across a teacher who is as friendly, approachable, caring, and genuine as he is. What I appreciate most about him is how easily he connects with his students and makes them feel comfortable. He is not just a teacher to me; he is someone I genuinely respect and feel lucky to have known.",
                },
            ];
            setReviews(mockApiResponse);
        };

        fetchReviews();
    }, []);

    const renderProgramString = (item) => {
        if (!item?.program) return '';
        if (typeof item.program === 'string') return item.program;

        if (item.role === 'Student') {
            const { class: cls, group, batch } = item.program;
            return [cls, group, batch ? `Batch ${batch}` : ''].filter(Boolean).join(' • ');
        }
        if (item.role === 'Teacher') {
            const { title, Subject, teacherAt } = item.program;
            return [title, Subject, teacherAt].filter(Boolean).join(' • ');
        }
        if (item.role === 'Gurdian' || item.role === 'Guardian') {
            const { relation, studentName } = item.program;
            return [relation, studentName ? `Guardian of ${studentName}` : ''].filter(Boolean).join(' • ');
        }
        return '';
    };

    const filteredReviews = reviews.filter((item) => {
        if (activeFilter === 'All') return true;
        if (activeFilter === 'Gurdian') {
            return item.role === 'Gurdian' || item.role === 'Guardian';
        }
        return item.role === activeFilter;
    });

    const toggleExpand = (id, e) => {
        e.stopPropagation();
        setExpandedComments((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <section className="relative min-h-screen py-8 sm:py-16 px-3 sm:px-6 lg:px-12 bg-transparent text-slate-800 dark:text-slate-100">
            <div className="max-w-6xl mx-auto space-y-6 sm:space-y-10">
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
                        href="/reviews/add"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#0284C7] dark:border-[#38BDF8] text-[10px] sm:text-xs font-semibold text-[#0284C7] dark:text-[#38BDF8] hover:bg-[#0284C7]/10 transition-colors"
                    >
                        <PenSquare className="w-3.5 h-3.5" />
                        <span>Write Review</span>
                    </Link>
                </div>

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8] border border-[#0284C7]/30 dark:border-[#38BDF8]/30">
                        <Users className="w-3 h-3" />
                        Community Testimonials
                    </span>
                    <h1 className="text-[14px] sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        Student, Parent & Faculty Appraisals
                    </h1>
                    <p className="text-[10px] sm:text-xs text-[#64748B] dark:text-[#94A3B8] leading-tight sm:leading-relaxed">
                        Read full testimonials from students, colleagues, and guardians concerning academic leadership and mentoring.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {['All', 'Student', 'Gurdian', 'Teacher'].map((tab) => {
                        const count = reviews.filter((item) => {
                            if (tab === 'All') return true;
                            if (tab === 'Gurdian') return item.role === 'Gurdian' || item.role === 'Guardian';
                            return item.role === tab;
                        }).length;

                        return (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setActiveFilter(tab)}
                                className={`px-3 py-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all border cursor-pointer ${activeFilter === tab
                                        ? 'border-[#0284C7] dark:border-[#38BDF8] text-[#0284C7] dark:text-[#38BDF8] bg-sky-500/10'
                                        : 'border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-slate-300'
                                    }`}
                            >
                                <span>{tab === 'Gurdian' ? 'Guardian' : tab}</span>
                                <span className="ml-1 text-[9px] opacity-70">({count})</span>
                            </button>
                        );
                    })}
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
                    {filteredReviews.map((item) => {
                        const isStudent = item.role === 'Student';
                        const isExpanded = !!expandedComments[item.id];
                        const isLongComment = item.comment.length > 170;

                        return (
                            <div
                                key={item.id}
                                onClick={() => setSelectedReview(item)}
                                className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl border border-slate-300/40 dark:border-white/15 bg-transparent hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                            >
                                <Quote className="absolute top-4 right-4 w-6 h-6 text-slate-400/20 dark:text-white/10 pointer-events-none group-hover:text-sky-500/20 transition-colors" />

                                <div className="space-y-3 relative z-10">
                                    {/* Header: Avatar, Name & Role Badge */}
                                    <div className="flex items-center justify-between gap-2.5">
                                        <div className="flex items-center gap-2.5 min-w-0">
                                            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-slate-300/50 dark:border-white/20 shrink-0">
                                                <Image
                                                    src={item.avatar || '/CollegeLogo.jpg'}
                                                    alt={item.name}
                                                    fill
                                                    sizes="40px"
                                                    className="object-cover object-center"
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="flex items-center gap-1">
                                                    <h4 className="text-[12px] sm:text-[14px] font-bold text-slate-900 dark:text-white truncate">
                                                        {item.name}
                                                    </h4>
                                                    <CheckCircle2 className="w-3 h-3 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                                                </div>
                                                <p className="text-[9px] sm:text-[11px] text-slate-500 dark:text-slate-400 truncate">
                                                    {renderProgramString(item)}
                                                </p>
                                            </div>
                                        </div>

                                        <span
                                            className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[8px] sm:text-[10px] font-bold uppercase tracking-wider shrink-0 bg-transparent ${isStudent
                                                    ? 'text-[#0284C7] dark:text-[#38BDF8] border border-[#0284C7]/40 dark:border-[#38BDF8]/40'
                                                    : 'text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 dark:border-emerald-400/40'
                                                }`}
                                        >
                                            {isStudent ? (
                                                <GraduationCap className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                            ) : (
                                                <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                            )}
                                            <span>{item.role === 'Gurdian' ? 'Guardian' : item.role}</span>
                                        </span>
                                    </div>

                                    {/* Star Rating */}
                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${i < Math.floor(item.rating)
                                                        ? 'fill-amber-400 text-amber-400'
                                                        : 'text-slate-300 dark:text-slate-600'
                                                    }`}
                                            />
                                        ))}
                                        <span className="text-[9px] sm:text-[10px] text-slate-400 ml-1 font-mono">
                                            {item.date}
                                        </span>
                                    </div>

                                    {/* Feedback Text: Restricted to 3 lines with ...see more */}
                                    <div>
                                        <p
                                            className={`text-[10px] sm:text-[12px] text-slate-700 dark:text-slate-300 leading-tight sm:leading-relaxed ${isExpanded ? '' : 'line-clamp-3'
                                                }`}
                                        >
                                            “{item.comment}”
                                        </p>
                                        {isLongComment && (
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedReview(item);
                                                }}
                                                className="text-[9px] sm:text-[11px] font-bold text-[#0284C7] dark:text-[#38BDF8] mt-1 hover:underline cursor-pointer"
                                            >
                                                ...see more
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Detailed Inspection Modal */}
            {selectedReview && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md"
                    onClick={() => setSelectedReview(null)}
                >
                    <div
                        className="relative w-full max-w-lg rounded-2xl border border-slate-300/60 dark:border-white/20 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-2xl text-left space-y-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Close Button */}
                        <button
                            type="button"
                            onClick={() => setSelectedReview(null)}
                            className="absolute top-4 right-4 p-1 rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                            aria-label="Close modal"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* Modal Header: Avatar & Names */}
                        <div className="flex items-center gap-3.5 pr-8">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-300 dark:border-white/20 shrink-0">
                                <Image
                                    src={selectedReview.avatar || '/CollegeLogo.jpg'}
                                    alt={selectedReview.name}
                                    fill
                                    sizes="48px"
                                    className="object-cover object-center"
                                />
                            </div>
                            <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                    <h3 className="text-[13px] sm:text-base font-extrabold text-slate-900 dark:text-white">
                                        {selectedReview.name}
                                    </h3>
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                                </div>
                                <span className="inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border border-[#0284C7]/30 text-[#0284C7] dark:text-[#38BDF8] mt-0.5">
                                    {selectedReview.role === 'Gurdian' ? 'Guardian' : selectedReview.role}
                                </span>
                            </div>
                        </div>

                        {/* Detailed Metadata Breakdown */}
                        <div className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/50 space-y-1.5 text-[10px] sm:text-xs">
                            {selectedReview.role === 'Student' && typeof selectedReview.program === 'object' && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                            <BookOpen className="w-3 h-3" /> Class & Group:
                                        </span>
                                        <span className="font-semibold text-slate-900 dark:text-white">
                                            {selectedReview.program.class} ({selectedReview.program.group})
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                            <GraduationCap className="w-3 h-3" /> Batch:
                                        </span>
                                        <span className="font-semibold text-slate-900 dark:text-white">
                                            {selectedReview.program.batch}
                                        </span>
                                    </div>
                                </>
                            )}

                            {selectedReview.role === 'Teacher' && typeof selectedReview.program === 'object' && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                            <Briefcase className="w-3 h-3" /> Designation:
                                        </span>
                                        <span className="font-semibold text-slate-900 dark:text-white">
                                            {selectedReview.program.title}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                            <BookOpen className="w-3 h-3" /> Subject & Institute:
                                        </span>
                                        <span className="font-semibold text-slate-900 dark:text-white">
                                            {selectedReview.program.Subject} at {selectedReview.program.teacherAt}
                                        </span>
                                    </div>
                                </>
                            )}

                            {(selectedReview.role === 'Gurdian' || selectedReview.role === 'Guardian') &&
                                typeof selectedReview.program === 'object' && (
                                    <>
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                                <Users className="w-3 h-3" /> Relation to Student:
                                            </span>
                                            <span className="font-semibold text-slate-900 dark:text-white">
                                                {selectedReview.program.relation}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                                <GraduationCap className="w-3 h-3" /> Student Name:
                                            </span>
                                            <span className="font-semibold text-slate-900 dark:text-white">
                                                {selectedReview.program.studentName}
                                            </span>
                                        </div>
                                    </>
                                )}

                            <div className="flex items-center justify-between pt-1 border-t border-slate-200 dark:border-white/10">
                                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> Date Submitted:
                                </span>
                                <span className="font-mono text-slate-700 dark:text-slate-300">
                                    {selectedReview.date}
                                </span>
                            </div>
                        </div>

                        {/* Modal Star Rating */}
                        <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(selectedReview.rating)
                                            ? 'fill-amber-400 text-amber-400'
                                            : 'text-slate-300 dark:text-slate-600'
                                        }`}
                                />
                            ))}
                            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 ml-1">
                                {selectedReview.rating} out of 5
                            </span>
                        </div>

                        {/* Unconstrained Full Comment */}
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Full Statement
                            </p>
                            <p className="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 leading-relaxed max-h-48 overflow-y-auto">
                                “{selectedReview.comment}”
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}