'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    CheckCircle2,
    GraduationCap,
    PenSquare,
    Quote,
    Star,
    Users,
} from 'lucide-react';

const reviewsData = [
    {
        id: 1,
        name: 'Monir Hossen',
        role: 'Student',
        program: 'HSC Commerce (Batch 2021)',
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
        program: 'HSC-2023 Batch (Science)',
        rating: 5,
        date: '1 month ago',
        avatar: '/university.jpg',
        comment: `Ashik Sir has always been my favorite teacher. I've had a very warm and close relationship with him since the very beginning of my college life. I enjoyed his classes the most during my college days, and even now, I really miss those classes. There was always something special about the way he taught and connected with us.`,
    },
    {
        id: 3,
        name: 'Sifat Anowar',
        role: 'Student',
        program: 'HSC-2024 Batch (Business Studies)',
        rating: 5,
        date: '3 weeks ago',
        avatar: '/teachers.jpg',
        comment: `As a student, I wasn't always very attentive to my studies. I was more interested in extracurricular activities, especially drawing and cultural activities. Ashik Sir never discouraged me or showed any annoyance toward these interests. Instead, he always supported and encouraged me.
        And whenever I tried to seek the truth or understand things for myself, Ashik Sir always tried to guide me in the right direction. I'm truly grateful for his support, encouragement, and guidance throughout my college life.`,
    },
    {
        id: 4,
        name: 'Mahmuda Akter Munni',
        role: 'Guardian',
        program: 'Sister of 2 Students',
        rating: 5,
        date: '1 month ago',
        avatar: '/university.jpg',
        comment: `My younger brother and sister have also been students of Ashik Sir. I truly feel fortunate to have had the opportunity to entrust their education to a teacher like him. He is a very dedicated and hardworking teacher who genuinely cares about his students and always puts in his best effort for them.`,
    },
    {
        id: 5,
        name: 'Noni Gopal Saha',
        role: 'Teacher',
        program: 'Father of Science Student',
        rating: 4.5,
        date: '2 weeks ago',
        avatar: '/teachers.jpg',
        comment: `Ashik was once my student, and today, he has become a teacher himself. It fills my heart with immense pride to see how far he has come. He has also taught my son and still keeps in touch and checks on his progress from time to time.
        Seeing one of my former students grow into a dedicated and capable teacher gives me a deep sense of peace and satisfaction. It is truly one of the most rewarding feelings a teacher can have.`,
    },
    {
        id: 6,
        name: 'Hashem Ali',
        role: 'Teacher',
        program: 'Colleague of Ashik Sir',
        rating: 5,
        date: '4 days ago',
        avatar: '/university.jpg',
        comment: `Ashik Sir is a popular teacher, but what makes him truly special is the kind of person he is. He is one of the most polite, warm-hearted, and helpful people I have ever known. I have rarely come across someone as humble, kind, and genuinely caring as him.`,
    },
    {
        id: 7,
        name: 'Samaniya Aaka',
        role: 'Student',
        program: 'HSC-2026 Batch (Business Studies)',
        rating: 5,
        date: '4 days ago',
        avatar: '/university.jpg',
        comment: `Ashik Sir is an extremely honest and friendly person. We always felt safe and comfortable around him, and we could openly share any personal problems with him without hesitation. He never made us feel uncomfortable or annoyed. Instead, he would listen to us patiently and sincerely and always try to offer helpful advice and solutions.`,
    },
    {
        id: 8,
        name: 'Shahinur Akter Ratri',
        role: 'Student',
        program: 'HSC-2026 Batch (Humanities)',
        rating: 5,
        date: '4 days ago',
        avatar: '/university.jpg',
        comment: `Ashik Sir is my favorite teacher from my college days. I always attended his classes with great interest and attention. He had a wonderful way of explaining even the most difficult topics in a very simple and understandable manner. I truly enjoyed his classes, and I still miss having him as my teacher.`,
    },
    {
        id: 9,
        name: 'Tasnim Kabir',
        role: 'Student',
        program: 'HSC-2026 Batch (Science)',
        rating: 5,
        date: '4 days ago',
        avatar: '/university.jpg',
        comment: `Ashik Sir's classes were always full of fun and memorable moments. I used to have a lot of fun and mischief in his classes, and Sir would often joke around and have fun with us too. The time we spent in his classes was not only enjoyable but also very meaningful and valuable. Those moments are still some of my favorite memories.`,
    },
    {
        id: 10,
        name: 'Mumtahina Momo',
        role: 'Student',
        program: 'HSC-2026 Batch (Humanities)',
        rating: 5,
        date: '4 days ago',
        avatar: '/university.jpg',
        comment: `Ashik Sir is truly the best teacher. He was also the teacher of my elder brother and my cousin, so he has always had a close and warm relationship with our family. We have a lot of respect and affection for him. I always pray for his well-being, success, and happiness.`,
    },
    {
        id: 11,
        name: 'Tasin Ahmed',
        role: 'Student',
        program: 'HSC-2023 Batch (Humanities)',
        rating: 5,
        date: '2 months ago',
        avatar: '/teachers.jpg',
        comment: `There's actually a funny story behind how my relationship with Ashik Sir began, but I'd rather keep that story to myself. 😄
        I've rarely come across a teacher who is as friendly, approachable, caring, and genuine as he is. What I appreciate most about him is how easily he connects with his students and makes them feel comfortable. He is not just a teacher to me; he is someone I genuinely respect and feel lucky to have known.`,
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

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {reviewsData.slice(0, 6).map((item) => {
                        const isStudent = item.role === 'Student';

                        return (
                            <div
                                key={item.id}
                                className="group relative flex flex-col justify-between p-5 rounded-2xl border border-slate-300/40 dark:border-white/15 bg-transparent hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {/* Subtle Watermark Quote */}
                                <Quote className="absolute top-4 right-4 w-7 h-7 text-slate-400/20 dark:text-white/10 pointer-events-none group-hover:text-sky-500/20 transition-colors" />

                                <div className="space-y-3.5 relative z-10">
                                    {/* Header: Avatar, Info & Role Badge */}
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-3 min-w-0">
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
                                                className={`w-3.5 h-3.5 ${i < Math.floor(item.rating)
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
                            </div>
                        );
                    })}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
                    <Link
                        href="/reviews/add"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-white bg-transparent border border-slate-300/60 dark:border-white/20 hover:border-[#0284C7] dark:hover:border-[#38BDF8] shadow-xs hover:shadow-md active:scale-95 transition-all duration-300"
                    >
                        <PenSquare className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                        <span>Write a Review</span>
                    </Link>

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