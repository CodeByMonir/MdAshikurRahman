'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
    Building2,
    Maximize2,
    X,
    ChevronLeft,
    ChevronRight,
    MapPin,
    Calendar,
    Layers,
    ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export default function GalleryMosaic() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const miniTrackRef = useRef(null);

    // Institutional Campus Photographs
    const instituteItems = [
        {
            id: 1,
            title: 'College Main Campus & Grounds',
            subtitle: 'Nayabazar Degree College academic buildings & sprawling campus courtyard',
            category: 'Campus',
            location: 'Main Complex',
            date: 'Nayabazar, Keraniganj',
            src: '/university.jpg',
        },
        {
            id: 2,
            title: 'Faculty Assembly & Planning Hub',
            subtitle: 'Collaborative curriculum workshop sessions with collegiate faculty',
            category: 'Faculty Hub',
            location: 'Teachers Lounge',
            date: 'Academic Planning',
            src: '/teachers.jpg',
        },
        {
            id: 3,
            title: 'Computer Lab Practical Session',
            subtitle: 'Hands-on programming, system diagnostics, and digital pedagogy laboratory',
            category: 'ICT Labs',
            location: 'Computer Lab 01',
            date: 'Student Labs',
            src: '/university.jpg',
        },
        {
            id: 4,
            title: 'ICT Master Trainer Regional Hub',
            subtitle: 'Guiding collegiate teachers on pedagogical multimedia integration',
            category: 'ICT Labs',
            location: 'Training Wing',
            date: 'Upazila Education',
            src: '/teachers.jpg',
        },
        {
            id: 5,
            title: 'Annual Academic Seminar & Assembly',
            subtitle: 'Institutional conferences, faculty exchanges, and student orientations',
            category: 'Events',
            location: 'Main Auditorium',
            date: 'Annual Milestone',
            src: '/university.jpg',
        },
        {
            id: 6,
            title: 'Digital Classroom Demonstration',
            subtitle: 'Smart interactive presentations and computer science instruction',
            category: 'Classrooms',
            location: 'Demonstrator Hall',
            date: 'Academic Session',
            src: '/teachers.jpg',
        },
        {
            id: 7,
            title: 'College Administrative Wing',
            subtitle: 'Principal office, faculty affairs, and student administrative headquarters',
            category: 'Campus',
            location: 'Central Building',
            date: 'College HQ',
            src: '/university.jpg',
        },
        {
            id: 8,
            title: 'Central Library & Reference Center',
            subtitle: 'Extensive archive of academic textbooks, curriculum guides, and journals',
            category: 'Campus',
            location: '2nd Floor Wing',
            date: 'Research Center',
            src: '/teachers.jpg',
        },
        {
            id: 9,
            title: 'Science & Electronics Lab',
            subtitle: 'Hardware troubleshooting, electronic apparatus, and practical experimentation',
            category: 'ICT Labs',
            location: 'Science Block',
            date: 'Practical Center',
            src: '/university.jpg',
        },
        {
            id: 10,
            title: 'Campus Open Field & Sports Arena',
            subtitle: 'Outdoor sports pavilion, annual sports tournaments, and student recreation',
            category: 'Events',
            location: 'College Playground',
            date: 'Recreation Grounds',
            src: '/teachers.jpg',
        },
        {
            id: 11,
            title: 'College Shaheed Minar & Heritage',
            subtitle: 'National mourning, cultural ceremonies, and historic landmark tribute',
            category: 'Campus',
            location: 'Courtyard Memorial',
            date: 'Campus Monument',
            src: '/university.jpg',
        },
        {
            id: 12,
            title: 'Department of ICT Demonstrator Unit',
            subtitle: 'Official demonstrator lab office, maintenance desk, and student support center',
            category: 'Faculty Hub',
            location: 'ICT Complex',
            date: 'Nayabazar College',
            src: '/teachers.jpg',
        },
    ];

    const handlePrev = (e) => {
        if (e) e.stopPropagation();
        setSelectedImageIndex(
            (prev) => (prev - 1 + instituteItems.length) % instituteItems.length
        );
    };

    const handleNext = (e) => {
        if (e) e.stopPropagation();
        setSelectedImageIndex((prev) => (prev + 1) % instituteItems.length);
    };

    const scrollMiniTrack = (direction, e) => {
        if (e) e.stopPropagation();
        if (miniTrackRef.current) {
            const offset = direction === 'left' ? -150 : 150;
            miniTrackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    // Auto-scroll active mini thumbnail to center
    useEffect(() => {
        if (selectedImageIndex !== null && miniTrackRef.current) {
            const track = miniTrackRef.current;
            const activeThumb = track.children[selectedImageIndex];
            if (activeThumb) {
                activeThumb.scrollIntoView({
                    inline: 'center',
                    block: 'nearest',
                    behavior: 'smooth',
                });
            }
        }
    }, [selectedImageIndex]);

    // Keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return;
            if (e.key === 'Escape') setSelectedImageIndex(null);
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex]);

    return (
        <section
            id="institute-gallery"
            className="relative overflow-hidden py-12 sm:py-20 px-3 sm:px-6 lg:px-12 bg-[#F8FAFC] dark:bg-[#070B14] transition-colors duration-500"
        >
            {/* Background Dot Matrix */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
            >
                <div
                    className="absolute inset-0 opacity-[0.4] dark:opacity-[0.22]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.45) 1px, transparent 0)`,
                        backgroundSize: '28px 28px',
                        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 35%, black 40%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 35%, black 40%, transparent 100%)',
                    }}
                />

                {/* Blueprint Grid Overlay */}
                <svg
                    className="absolute inset-0 w-full h-full stroke-sky-400/10 dark:stroke-sky-400/5"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern id="campus-mosaic-grid" width="112" height="112" patternUnits="userSpaceOnUse">
                            <path d="M 112 0 L 0 0 0 112" fill="none" strokeWidth="0.8" />
                            <circle cx="0" cy="0" r="1.5" className="fill-sky-400/30" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#campus-mosaic-grid)" />
                </svg>

                {/* Ambient Glows with Pure CSS Pulse */}
                <div
                    className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[360px] sm:h-[460px] rounded-full blur-[140px] opacity-25 dark:opacity-35 animate-pulse duration-1000"
                    style={{
                        background:
                            'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.3) 0%, rgba(2, 132, 199, 0.08) 55%, transparent 75%)',
                    }}
                />
                <div
                    className="absolute -bottom-28 right-1/4 w-[420px] sm:w-[620px] h-[420px] rounded-full blur-[150px] opacity-20 dark:opacity-30 animate-pulse duration-1000"
                    style={{
                        background:
                            'radial-gradient(circle at center, rgba(74, 222, 128, 0.18) 0%, rgba(22, 163, 74, 0.05) 60%, transparent 80%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col space-y-7 sm:space-y-9">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-[#F0F9FF] dark:bg-[#0F172A] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs">
                        <Building2 className="w-3.5 h-3.5 shrink-0" />
                        Institutional Archive
                    </span>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                        Nayabazar Degree College Campus
                    </h2>

                    <p className="text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                        A continuous catalog showcasing academic infrastructure, computer science labs, faculty workspaces, and campus landmarks.
                    </p>
                </div>

                {/* Counter Strip */}
                <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.12)]">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
                        <Layers className="w-3.5 h-3.5 shrink-0" />
                        <span>Campus Gallery Matrix</span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                        Showing all {instituteItems.length} photographs
                    </span>
                </div>

                {/* 3-Images per Row Grid (pure Tailwind transition) */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                    {instituteItems.slice(0, 6).map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedImageIndex(index)}
                            className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.18)] bg-white dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md shadow-xs hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="relative w-full aspect-square sm:aspect-4/3 overflow-hidden">
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
                                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Ambient vignette */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-65 group-hover:opacity-90 transition-opacity duration-300" />

                                {/* Category Tag */}
                                <div className="hidden sm:flex absolute top-2 left-2 items-center">
                                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/20 text-white truncate max-w-[90px]">
                                        {item.category}
                                    </span>
                                </div>

                                {/* Hover Expand Icon */}
                                <div className="absolute top-1.5 right-1.5 p-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Maximize2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#38BDF8]" />
                                </div>

                                {/* Captions */}
                                <div className="absolute bottom-1.5 sm:bottom-2 inset-x-1.5 sm:inset-x-2 space-y-0.5 text-white">
                                    <h4 className="text-[10px] sm:text-[11px] md:text-[12px] font-bold truncate leading-tight drop-shadow-sm">
                                        {item.title}
                                    </h4>
                                    <p className="text-[10px] text-[#38BDF8] truncate hidden sm:block">
                                        {item.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-center pt-2">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] border border-transparent shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        <span>View All Campus Photos</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </Link>
                </div>
            </div>

            {/* Lightbox Modal (Conditional Rendering with Native Tailwind Transition) */}
            {selectedImageIndex !== null && instituteItems[selectedImageIndex] && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/95 backdrop-blur-md select-none transition-opacity duration-300"
                    onClick={() => setSelectedImageIndex(null)}
                >
                    {/* Close button */}
                    <button
                        type="button"
                        onClick={() => setSelectedImageIndex(null)}
                        className="absolute top-4 right-4 p-1.5 sm:p-2 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
                        aria-label="Close image preview"
                    >
                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>

                    {/* Left Screen Arrow */}
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="absolute left-2 sm:left-6 p-2 sm:p-3 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all z-50 cursor-pointer active:scale-95"
                        aria-label="Previous photo"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Modal Box */}
                    <div
                        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            onClick={handleNext}
                            className="relative w-full h-[45vh] sm:h-[60vh] md:h-[65vh] flex items-center justify-center rounded-2xl overflow-hidden border border-[rgba(56,189,248,0.3)] shadow-2xl bg-black/60 cursor-pointer group"
                            title="Click image to view next"
                        >
                            <Image
                                key={instituteItems[selectedImageIndex].id}
                                src={instituteItems[selectedImageIndex].src}
                                alt={instituteItems[selectedImageIndex].title}
                                fill
                                priority
                                className="object-contain object-center transition-opacity duration-300"
                            />
                        </div>

                        {/* Details Bar */}
                        <div className="w-full mt-3 text-center px-4 py-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white space-y-2">
                            <div className="flex items-center justify-between gap-2">
                                <button
                                    type="button"
                                    onClick={handlePrev}
                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 text-[10px] sm:text-[11px] font-semibold text-white transition-all cursor-pointer"
                                >
                                    <ChevronLeft className="w-3.5 h-3.5" />
                                    <span>Prev</span>
                                </button>

                                <div className="space-y-0.5 max-w-lg truncate">
                                    <p className="text-[13px] sm:text-[14px] font-bold truncate">
                                        {instituteItems[selectedImageIndex].title}
                                    </p>
                                    <p className="text-[10px] sm:text-[11px] text-[#38BDF8] truncate">
                                        {instituteItems[selectedImageIndex].subtitle}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 text-[10px] sm:text-[11px] font-semibold text-white transition-all cursor-pointer"
                                >
                                    <span>Next</span>
                                    <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                            </div>

                            {/* Metadata & Thumbnail Strip */}
                            <div className="flex flex-col sm:flex-row items-center justify-between pt-1 border-t border-white/10 gap-2">
                                <div className="flex items-center gap-3 text-[10px] text-[#94A3B8] shrink-0">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-2.5 h-2.5 text-[#38BDF8]" />
                                        {instituteItems[selectedImageIndex].location}
                                    </span>
                                    <span>&bull;</span>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-2.5 h-2.5" />
                                        {instituteItems[selectedImageIndex].date}
                                    </span>
                                    <span>&bull;</span>
                                    <span>
                                        {selectedImageIndex + 1} of {instituteItems.length}
                                    </span>
                                </div>

                                <div className="flex items-center gap-1.5 w-full sm:w-auto justify-center sm:justify-end">
                                    <button
                                        type="button"
                                        onClick={(e) => scrollMiniTrack('left', e)}
                                        aria-label="Scroll thumbnails left"
                                        className="hidden sm:inline-flex p-1 rounded-md border border-white/20 bg-white/10 hover:bg-white/20 text-white text-[10px] transition-all cursor-pointer shrink-0"
                                    >
                                        <ChevronLeft className="w-3 h-3" />
                                    </button>

                                    <div
                                        ref={miniTrackRef}
                                        className="flex items-center gap-1.5 px-[calc(50%-16px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 overflow-x-auto scroll-smooth max-w-[280px] sm:max-w-[420px] md:max-w-[500px]"
                                    >
                                        {instituteItems.map((item, idx) => (
                                            <button
                                                type="button"
                                                key={item.id}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedImageIndex(idx);
                                                }}
                                                className={`relative shrink-0 w-8 h-6 rounded-md overflow-hidden border transition-all cursor-pointer ${idx === selectedImageIndex
                                                        ? 'border-[#38BDF8] ring-1 ring-[#38BDF8] scale-110 opacity-100'
                                                        : 'border-white/20 opacity-50 hover:opacity-100'
                                                    }`}
                                            >
                                                <Image
                                                    src={item.src}
                                                    alt={item.title}
                                                    fill
                                                    sizes="32px"
                                                    className="object-cover object-center"
                                                />
                                            </button>
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={(e) => scrollMiniTrack('right', e)}
                                        aria-label="Scroll thumbnails right"
                                        className="hidden sm:inline-flex p-1 rounded-md border border-white/20 bg-white/10 hover:bg-white/20 text-white text-[10px] transition-all cursor-pointer shrink-0"
                                    >
                                        <ChevronRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Screen Arrow */}
                    <button
                        type="button"
                        onClick={handleNext}
                        className="absolute right-2 sm:right-6 p-2 sm:p-3 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all z-50 cursor-pointer active:scale-95"
                        aria-label="Next photo"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </div>
            )}
        </section>
    );
}