'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Images,
    X,
    ChevronLeft,
    ChevronRight,
    Maximize2
} from 'lucide-react';

export default function ImageGallery() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const categories = ['All', 'Campus', 'Classroom', 'Workshops', 'Events'];

    const galleryItems = [
        {
            id: 1,
            title: 'College Main Campus & Grounds',
            category: 'Campus',
            src: '/university.jpg',
        },
        {
            id: 2,
            title: 'Faculty Assembly & Training Hub',
            category: 'Workshops',
            src: '/teachers.jpg',
        },
        {
            id: 3,
            title: 'Computer Lab Practical Session',
            category: 'Classroom',
            src: '/university.jpg',
        },
        {
            id: 4,
            title: 'ICT Master Trainer Regional Workshop',
            category: 'Workshops',
            src: '/teachers.jpg',
        },
        {
            id: 5,
            title: 'Annual Academic Seminar',
            category: 'Events',
            src: '/university.jpg',
        },
        {
            id: 6,
            title: 'Digital Classroom Demonstration',
            category: 'Classroom',
            src: '/teachers.jpg',
        },
    ];

    const filteredItems = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory);

    // Keyboard navigation for lightbox modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return;
            if (e.key === 'Escape') setSelectedImageIndex(null);
            if (e.key === 'ArrowRight') {
                setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
            }
            if (e.key === 'ArrowLeft') {
                setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
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
            {/* Background Ambient Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full blur-3xl opacity-40 dark:opacity-20"
                style={{
                    background:
                        'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(74, 222, 128, 0.08) 60%, transparent 100%)',
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-10">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-[#F0F9FF] dark:bg-[#0F172A] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs">
                        <Images className="w-3.5 h-3.5" />
                        Photo Gallery
                    </span>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                        Moments, Milestones & Campus Life
                    </h2>

                    <p className="text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                        A visual glimpse into training workshops, academic activities, institutional events, and campus moments.
                    </p>
                </div>

                {/* Filter Category Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {categories.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveCategory(category);
                                    setSelectedImageIndex(null);
                                }}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${isActive
                                        ? 'bg-gradient-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] text-white dark:text-[#090D16] border-transparent shadow-sm'
                                        : 'bg-white dark:bg-[rgba(15,23,42,0.75)] border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] text-[#334155] dark:text-[#94A3B8] hover:border-[#0284C7] dark:hover:border-[#38BDF8]'
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Gallery Grid - Centered items */}
                <motion.div
                    layout
                    className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 justify-items-center"
                >
                    <AnimatePresence>
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setSelectedImageIndex(index)}
                                className="group relative cursor-pointer w-full max-w-sm sm:max-w-none overflow-hidden rounded-2xl border-2 border-[#E2E8F0] dark:border-[rgba(56,189,248,0.18)] bg-white dark:bg-[rgba(15,23,42,0.75)] dark:backdrop-blur-md shadow-card-light dark:shadow-card-dark hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Image Container with Center Alignment */}
                                <div className="relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Subtle Gradient Veil */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Top Category Badge */}
                                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/20 text-white">
                                            {item.category}
                                        </span>
                                    </div>

                                    {/* Expand Icon Indicator */}
                                    <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Maximize2 className="w-3.5 h-3.5" />
                                    </div>

                                    {/* Bottom Image Title */}
                                    <div className="absolute bottom-3 inset-x-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-xs sm:text-sm font-semibold text-white drop-shadow-sm truncate">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>

            {/* Fullscreen Interactive Lightbox Modal (Center Aligned) */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImageIndex(null)}
                            className="absolute top-5 right-5 p-2 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
                            aria-label="Close image preview"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Left Nav Arrow */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
                            }}
                            className="absolute left-4 sm:left-8 p-2 sm:p-3 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Main Lightbox Image & Caption Box - Centered */}
                        <div
                            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-[55vh] sm:h-[70vh] flex items-center justify-center rounded-2xl overflow-hidden border border-[rgba(56,189,248,0.3)] shadow-2xl bg-black/40">
                                <Image
                                    src={filteredItems[selectedImageIndex].src}
                                    alt={filteredItems[selectedImageIndex].title}
                                    fill
                                    priority
                                    className="object-contain object-center"
                                />
                            </div>

                            {/* Lightbox Caption Bar (Centered) */}
                            <div className="mt-4 text-center px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
                                <p className="text-sm font-semibold">
                                    {filteredItems[selectedImageIndex].title}
                                </p>
                                <p className="text-[11px] text-[#94A3B8]">
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
                            className="absolute right-4 sm:right-8 p-2 sm:p-3 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
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