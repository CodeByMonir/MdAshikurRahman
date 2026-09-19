'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles,
    Camera,
    Layers,
    ChevronLeft,
    ChevronRight,
    Maximize2,
    X,
    Compass,
} from 'lucide-react';

export default function ImageGallery() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [heroIndex, setHeroIndex] = useState(0);

    const categories = ['All', 'Campus', 'Classroom', 'Workshops', 'Events'];

    const galleryItems = [
        {
            id: 1,
            title: 'College Main Campus & Grounds',
            subtitle: 'Nayabazar Degree College academic buildings & outdoor grounds',
            category: 'Campus',
            date: '2024 - 2026',
            src: '/university.jpg',
            aspect: 'md:col-span-8 md:row-span-2',
        },
        {
            id: 2,
            title: 'Faculty Assembly & Training Hub',
            subtitle: 'Collaborative workshop sessions with senior teachers and planners',
            category: 'Workshops',
            date: 'Keraniganj Hub',
            src: '/teachers.jpg',
            aspect: 'md:col-span-4 md:row-span-1',
        },
        {
            id: 3,
            title: 'Computer Lab Practical Session',
            subtitle: 'Hands-on programming, logic design, and digital literacy labs',
            category: 'Classroom',
            date: 'ICT Laboratory',
            src: '/university.jpg',
            aspect: 'md:col-span-4 md:row-span-1',
        },
        {
            id: 4,
            title: 'ICT Master Trainer Regional Workshop',
            subtitle: 'Guiding collegiate teachers on pedagogical multimedia integration',
            category: 'Workshops',
            date: 'Education Office',
            src: '/teachers.jpg',
            aspect: 'md:col-span-4 md:row-span-2',
        },
        {
            id: 5,
            title: 'Annual Academic Seminar',
            subtitle: 'Institutional conferences, faculty exchanges, and student orientations',
            category: 'Events',
            date: 'Main Auditorium',
            src: '/university.jpg',
            aspect: 'md:col-span-4 md:row-span-1',
        },
        {
            id: 6,
            title: 'Digital Classroom Demonstration',
            subtitle: 'Smart interactive presentations and computer science instruction',
            category: 'Classroom',
            date: 'Demonstrator Hall',
            src: '/teachers.jpg',
            aspect: 'md:col-span-4 md:row-span-1',
        },
    ];

    const filteredItems =
        activeCategory === 'All'
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeCategory);

    // Keep hero in bounds when filtering
    useEffect(() => {
        setHeroIndex(0);
    }, [activeCategory]);

    const activeHeroItem = filteredItems[heroIndex] || filteredItems[0] || galleryItems[0];

    // Keyboard navigation for full lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return;
            if (e.key === 'Escape') setSelectedImageIndex(null);
            if (e.key === 'ArrowRight') {
                setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
            }
            if (e.key === 'ArrowLeft') {
                setSelectedImageIndex(
                    (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
                );
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex, filteredItems.length]);

    return (
        <section
            id="gallery"
            className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-300"
        >
            {/* ================= UNIQUE APERTURE / CAMERA LENS BACKGROUND ================= */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
            >
                {/* Concentric Aperture Rings */}
                <div
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] rounded-full border border-sky-400/10 dark:border-sky-400/5 opacity-60"
                    style={{
                        maskImage: 'radial-gradient(circle, #000 40%, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(circle, #000 40%, transparent 80%)',
                    }}
                />
                <div
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full border border-emerald-400/10 dark:border-emerald-400/5 border-dashed"
                />

                {/* Ambient Glow Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.35, 0.5, 0.35],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-20 left-1/4 -translate-x-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full blur-[120px] opacity-40"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(2, 132, 199, 0.08) 60%, transparent 80%)',
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.25, 0.4, 0.25],
                    }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute bottom-24 right-1/4 w-72 sm:w-[450px] h-72 sm:h-[450px] rounded-full blur-[120px] opacity-30"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(74, 222, 128, 0.18) 0%, rgba(22, 163, 74, 0.05) 65%, transparent 80%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col space-y-12 sm:space-y-16">
                {/* ================= HEADER ================= */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-[#F0F9FF] dark:bg-[#0F172A] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs">
                        <Camera className="w-3.5 h-3.5" />
                        Visual Portfolio
                    </span>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                        Moments, Milestones & Campus Life
                    </h2>

                    <p className="text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                        An interactive archive featuring ICT workshops, classroom instruction, studentDBMS demonstrations, and academic events.
                    </p>

                    {/* Filter Pills */}
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                        {categories.map((category) => {
                            const isActive = activeCategory === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border cursor-pointer ${isActive
                                            ? 'bg-gradient-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] text-white dark:text-[#090D16] border-transparent shadow-sm scale-105'
                                            : 'bg-white dark:bg-[rgba(15,23,42,0.75)] border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] text-[#334155] dark:text-[#94A3B8] hover:border-[#0284C7] dark:hover:border-[#38BDF8]'
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ================= 1. THEATER SPOTLIGHT SHOWCASE ================= */}
                {activeHeroItem && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="w-full flex flex-col space-y-4"
                    >
                        {/* Large Stage Frame */}
                        <div className="relative w-full h-80 sm:h-[420px] md:h-[500px] rounded-3xl overflow-hidden border-2 border-[#E2E8F0] dark:border-[rgba(56,189,248,0.25)] shadow-2xl bg-black group">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeHeroItem.id}
                                    initial={{ opacity: 0, scale: 1.04 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.55 }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={activeHeroItem.src}
                                        alt={activeHeroItem.title}
                                        fill
                                        priority
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Ambient Shadow Gradients */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                            {/* Top Meta Badges */}
                            <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 flex items-center justify-between z-10">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/20 text-white">
                                    <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                                    {activeHeroItem.category}
                                </span>

                                <button
                                    onClick={() =>
                                        setSelectedImageIndex(
                                            filteredItems.findIndex((item) => item.id === activeHeroItem.id)
                                        )
                                    }
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold hover:bg-white/20 transition-colors cursor-pointer"
                                >
                                    <Maximize2 className="w-3.5 h-3.5 text-[#4ADE80]" />
                                    <span>Full View</span>
                                </button>
                            </div>

                            {/* Bottom Caption & Interactive Arrows */}
                            <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-10 text-white">
                                <div className="max-w-xl space-y-1">
                                    <p className="text-[11px] uppercase tracking-wider font-semibold text-[#38BDF8]">
                                        {activeHeroItem.date}
                                    </p>
                                    <h3 className="text-lg sm:text-2xl font-extrabold drop-shadow-md">
                                        {activeHeroItem.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-300 drop-shadow-sm line-clamp-2">
                                        {activeHeroItem.subtitle}
                                    </p>
                                </div>

                                {/* Left/Right Steppers */}
                                <div className="flex items-center gap-2 self-end sm:self-auto">
                                    <button
                                        onClick={() =>
                                            setHeroIndex(
                                                (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
                                            )
                                        }
                                        className="p-2.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white transition-all active:scale-95 cursor-pointer"
                                        aria-label="Previous Spotlight"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>

                                    <span className="text-xs font-medium text-slate-300 px-1">
                                        {heroIndex + 1} / {filteredItems.length}
                                    </span>

                                    <button
                                        onClick={() =>
                                            setHeroIndex((prev) => (prev + 1) % filteredItems.length)
                                        }
                                        className="p-2.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white transition-all active:scale-95 cursor-pointer"
                                        aria-label="Next Spotlight"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* ================= 2. FILMSTRIP THUMBNAIL TRACKER ================= */}
                        <div className="flex items-center gap-3 overflow-x-auto py-2 no-scrollbar scroll-smooth">
                            {filteredItems.map((item, idx) => {
                                const isSelected = idx === heroIndex;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setHeroIndex(idx)}
                                        className={`relative shrink-0 w-24 sm:w-32 h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${isSelected
                                                ? 'border-[#0284C7] dark:border-[#38BDF8] ring-2 ring-sky-400/40 scale-105 shadow-md'
                                                : 'border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] opacity-60 hover:opacity-100 hover:border-slate-400'
                                            }`}
                                    >
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            fill
                                            sizes="128px"
                                            className="object-cover object-center"
                                        />
                                        <div className="absolute inset-0 bg-black/25" />
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}

                {/* ================= 3. CURATED BENTO MOSAIC GRID ================= */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                                Explore Full Mosaic
                            </h3>
                        </div>
                        <span className="text-xs text-[#64748B]">
                            Showing {filteredItems.length} photos
                        </span>
                    </div>

                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
                        <AnimatePresence>
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.92 }}
                                    transition={{ duration: 0.4 }}
                                    onClick={() => setSelectedImageIndex(index)}
                                    className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-[#E2E8F0] dark:border-[rgba(56,189,248,0.18)] bg-white dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md shadow-card-light dark:shadow-card-dark hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover object-center transition-transform duration-500 group-hover:scale-108"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300" />

                                        {/* Top Badges */}
                                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                                            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/20 text-white">
                                                {item.category}
                                            </span>
                                        </div>

                                        <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Maximize2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                                        </div>

                                        {/* Bottom Title & Details */}
                                        <div className="absolute bottom-3 inset-x-3 space-y-1 text-white">
                                            <p className="text-[10px] text-[#38BDF8] font-semibold">
                                                {item.date}
                                            </p>
                                            <h4 className="text-xs sm:text-sm font-bold truncate">
                                                {item.title}
                                            </h4>
                                            <p className="text-[11px] text-slate-300 line-clamp-1">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            {/* ================= FULLSCREEN LIGHTBOX MODAL ================= */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImageIndex(null)}
                            className="absolute top-5 right-5 p-2 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
                            aria-label="Close image preview"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Left Nav Arrow */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImageIndex(
                                    (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
                                );
                            }}
                            className="absolute left-4 sm:left-8 p-2 sm:p-3 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Main Lightbox Image Container */}
                        <div
                            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-[55vh] sm:h-[70vh] flex items-center justify-center rounded-2xl overflow-hidden border border-[rgba(56,189,248,0.3)] shadow-2xl bg-black/60">
                                <Image
                                    src={filteredItems[selectedImageIndex].src}
                                    alt={filteredItems[selectedImageIndex].title}
                                    fill
                                    priority
                                    className="object-contain object-center"
                                />
                            </div>

                            {/* Caption */}
                            <div className="mt-4 text-center px-5 py-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white space-y-0.5">
                                <p className="text-sm sm:text-base font-bold">
                                    {filteredItems[selectedImageIndex].title}
                                </p>
                                <p className="text-xs text-[#38BDF8]">
                                    {filteredItems[selectedImageIndex].subtitle}
                                </p>
                                <p className="text-[10px] text-[#94A3B8] pt-0.5">
                                    {filteredItems[selectedImageIndex].category} • {selectedImageIndex + 1} of {filteredItems.length}
                                </p>
                            </div>
                        </div>

                        {/* Right Nav Arrow */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
                            }}
                            className="absolute right-4 sm:right-8 p-2 sm:p-3 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}