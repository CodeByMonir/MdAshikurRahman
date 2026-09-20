'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Layers,
    Maximize2,
    X,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

export default function GalleryMosaic() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const mosaicItems = [
        {
            id: 1,
            title: 'College Main Campus & Grounds',
            subtitle: 'Nayabazar Degree College academic buildings & outdoor grounds',
            category: 'Campus',
            date: '2024 - 2026',
            src: '/university.jpg',
        },
        {
            id: 2,
            title: 'Faculty Assembly & Training Hub',
            subtitle: 'Collaborative workshop sessions with senior teachers and planners',
            category: 'Workshops',
            date: 'Keraniganj Hub',
            src: '/teachers.jpg',
        },
        {
            id: 3,
            title: 'Computer Lab Practical Session',
            subtitle: 'Hands-on programming, logic design, and digital literacy labs',
            category: 'Classroom',
            date: 'ICT Laboratory',
            src: '/university.jpg',
        },
        {
            id: 4,
            title: 'ICT Master Trainer Regional Workshop',
            subtitle: 'Guiding collegiate teachers on pedagogical multimedia integration',
            category: 'Workshops',
            date: 'Education Office',
            src: '/teachers.jpg',
        },
        {
            id: 5,
            title: 'Annual Academic Seminar',
            subtitle: 'Institutional conferences, faculty exchanges, and student orientations',
            category: 'Events',
            date: 'Main Auditorium',
            src: '/university.jpg',
        },
        {
            id: 6,
            title: 'Digital Classroom Demonstration',
            subtitle: 'Smart interactive presentations and computer science instruction',
            category: 'Classroom',
            date: 'Demonstrator Hall',
            src: '/teachers.jpg',
        },
    ];

    // Keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return;
            if (e.key === 'Escape') setSelectedImageIndex(null);
            if (e.key === 'ArrowRight') {
                setSelectedImageIndex((prev) => (prev + 1) % mosaicItems.length);
            }
            if (e.key === 'ArrowLeft') {
                setSelectedImageIndex(
                    (prev) => (prev - 1 + mosaicItems.length) % mosaicItems.length
                );
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex, mosaicItems.length]);

    return (
        <section
            id="gallery-mosaic"
            className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-300"
        >
            {/* Background Ambience */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
            >
                <div
                    className="absolute -bottom-24 right-1/4 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full blur-[130px] opacity-25 dark:opacity-15"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(74, 222, 128, 0.2) 0%, rgba(22, 163, 74, 0.05) 65%, transparent 80%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col space-y-6">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.12)]">
                    <div className="flex items-center gap-2.5">
                        <Layers className="w-5 h-5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                            Explore Full Mosaic Archive
                        </h3>
                    </div>
                    <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                        Showing all {mosaicItems.length} curated photographs
                    </span>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
                    {mosaicItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
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

                                {/* Subtle dark gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300" />

                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/20 text-white">
                                        {item.category}
                                    </span>
                                </div>

                                <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Maximize2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                                </div>

                                {/* Bottom details */}
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
                </div>
            </div>

            {/* Fullscreen Lightbox Modal */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        <button
                            onClick={() => setSelectedImageIndex(null)}
                            className="absolute top-5 right-5 p-2 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
                            aria-label="Close image preview"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImageIndex(
                                    (prev) => (prev - 1 + mosaicItems.length) % mosaicItems.length
                                );
                            }}
                            className="absolute left-4 sm:left-8 p-2 sm:p-3 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div
                            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-[55vh] sm:h-[70vh] flex items-center justify-center rounded-2xl overflow-hidden border border-[rgba(56,189,248,0.3)] shadow-2xl bg-black/60">
                                <Image
                                    src={mosaicItems[selectedImageIndex].src}
                                    alt={mosaicItems[selectedImageIndex].title}
                                    fill
                                    priority
                                    className="object-contain object-center"
                                />
                            </div>

                            <div className="mt-4 text-center px-5 py-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white space-y-0.5">
                                <p className="text-sm sm:text-base font-bold">
                                    {mosaicItems[selectedImageIndex].title}
                                </p>
                                <p className="text-xs text-[#38BDF8]">
                                    {mosaicItems[selectedImageIndex].subtitle}
                                </p>
                                <p className="text-[10px] text-[#94A3B8] pt-0.5">
                                    {mosaicItems[selectedImageIndex].category} • {selectedImageIndex + 1} of {mosaicItems.length}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImageIndex((prev) => (prev + 1) % mosaicItems.length);
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