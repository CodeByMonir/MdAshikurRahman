'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Heart,
    Sparkles,
    ChevronLeft,
    ChevronRight,
    Maximize2,
    X,
    Play,
    Pause,
    MapPin,
    Calendar,
} from 'lucide-react';

export default function GalleryShowcase() {
    const [heroIndex, setHeroIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isPressHolding, setIsPressHolding] = useState(false);
    const [timerKey, setTimerKey] = useState(0); // Resets interval & countdown bar on click
    const thumbTrackRef = useRef(null);

    // Personal Memoirs & Life Photographs
    const personalMoments = [
        {
            id: 1,
            title: 'Family Gatherings & Roots',
            subtitle: 'Joyous moments and shared laughter at home in Boro Joynagar, Keraniganj',
            tag: 'Life & Roots',
            location: 'Keraniganj, Dhaka',
            date: 'Personal Archive',
            src: '/img1.jpg',
        },
        {
            id: 2,
            title: 'Moments of Reflection & Reading',
            subtitle: 'Quiet afternoon reading classics, literature, and technology treatises',
            tag: 'Leisure & Study',
            location: 'Home Study',
            date: 'Leisure Hours',
            src: '/img2.jpg',
        },
        {
            id: 3,
            title: 'Undergraduate Memories & Campus Days',
            subtitle: 'Research discussions, thesis trials, and friendships at UIU',
            tag: 'Alumni Memoir',
            location: 'United International University',
            date: 'Campus Life',
            src: '/img3.jpg',
        },
        {
            id: 4,
            title: 'Weekend Cricket Match with Colleagues',
            subtitle: 'Friendly collegiate sports and bonding outdoors on college grounds',
            tag: 'Recreation',
            location: 'Nayabazar Grounds',
            date: 'Sports Afternoon',
            src: '/img4.jpg',
        },
        {
            id: 5,
            title: 'Travel Diaries & Nature Escapes',
            subtitle: 'Exploring rural heritage, riversides, and peaceful green vistas across Bangladesh',
            tag: 'Journeys',
            location: 'Riverway Trails',
            date: 'Expeditions',
            src: '/img5.jpg',
        },
        {
            id: 6,
            title: 'Collegiate Milestones & Celebrations',
            subtitle: 'Faculty community gatherings, annual conferences, and teacher honors',
            tag: 'Academic Milestones',
            location: 'Nayabazar Degree College',
            date: 'Campus Life',
            src: '/img6.jpg',
        },
        {
            id: 7,
            title: 'Family Gatherings & Roots',
            subtitle: 'Joyous moments and shared laughter at home in Boro Joynagar, Keraniganj',
            tag: 'Life & Roots',
            location: 'Keraniganj, Dhaka',
            date: 'Personal Archive',
            src: '/img7.jpg',
        },
        {
            id: 8,
            title: 'Moments of Reflection & Reading',
            subtitle: 'Quiet afternoon reading classics, literature, and technology treatises',
            tag: 'Leisure & Study',
            location: 'Home Study',
            date: 'Leisure Hours',
            src: '/img8.jpg',
        },
        {
            id: 9,
            title: 'Undergraduate Memories & Campus Days',
            subtitle: 'Research discussions, thesis trials, and friendships at UIU',
            tag: 'Alumni Memoir',
            location: 'United International University',
            date: 'Campus Life',
            src: '/img9.jpg',
        },
        {
            id: 10,
            title: 'Weekend Cricket Match with Colleagues',
            subtitle: 'Friendly collegiate sports and bonding outdoors on college grounds',
            tag: 'Recreation',
            location: 'Nayabazar Grounds',
            date: 'Sports Afternoon',
            src: '/img10.jpg',
        },
        {
            id: 11,
            title: 'Travel Diaries & Nature Escapes',
            subtitle: 'Exploring rural heritage, riversides, and peaceful green vistas across Bangladesh',
            tag: 'Journeys',
            location: 'Riverway Trails',
            date: 'Expeditions',
            src: '/img11.jpg',
        },
        {
            id: 12,
            title: 'Collegiate Milestones & Celebrations',
            subtitle: 'Faculty community gatherings, annual conferences, and teacher honors',
            tag: 'Academic Milestones',
            location: 'Nayabazar Degree College',
            date: 'Campus Life',
            src: '/img12.jpg',
        },
    ];

    // Story Timer: Advances every 5 seconds; resets cleanly when timerKey increments
    useEffect(() => {
        if (!isPlaying || isPressHolding || lightboxOpen || personalMoments.length <= 1) return;

        const interval = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % personalMoments.length);
            setTimerKey((k) => k + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPlaying, isPressHolding, lightboxOpen, timerKey, personalMoments.length]);

    // Keep active thumbnail scrolled into view smoothly
    useEffect(() => {
        if (thumbTrackRef.current) {
            const track = thumbTrackRef.current;
            const activeThumb = track.children[heroIndex];
            if (activeThumb) {
                const thumbLeft = activeThumb.offsetLeft;
                const thumbWidth = activeThumb.offsetWidth;
                const trackWidth = track.offsetWidth;
                track.scrollTo({
                    left: thumbLeft - trackWidth / 2 + thumbWidth / 2,
                    behavior: 'smooth',
                });
            }
        }
    }, [heroIndex]);

    const activeHeroItem = personalMoments[heroIndex] || personalMoments[0];

    const handlePrev = (e) => {
        if (e) e.stopPropagation();
        setHeroIndex((prev) => (prev - 1 + personalMoments.length) % personalMoments.length);
        setTimerKey((k) => k + 1); // Reset animation & timer
    };

    const handleNext = (e) => {
        if (e) e.stopPropagation();
        setHeroIndex((prev) => (prev + 1) % personalMoments.length);
        setTimerKey((k) => k + 1); // Reset animation & timer
    };

    const handleSelectIndex = (idx) => {
        setHeroIndex(idx);
        setTimerKey((k) => k + 1); // Reset animation & timer
    };

    const scrollThumbnails = (direction) => {
        if (thumbTrackRef.current) {
            const scrollOffset = direction === 'left' ? -320 : 320;
            thumbTrackRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    };

    // Click on main stage advances image and resets timer
    const handleMainFrameClick = () => {
        handleNext();
    };

    // Story Hold / Pause handlers
    const handlePressStart = () => setIsPressHolding(true);
    const handlePressEnd = () => setIsPressHolding(false);

    return (
        <section
            id="personal-moments"
            className="relative overflow-hidden py-12 sm:py-20 px-3 sm:px-6 lg:px-12 bg-transparent transition-colors duration-300 select-none"
        >
            {/* Ambient Glow Background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 select-none overflow-hidden"
            >
                <div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[650px] sm:h-[900px] rounded-full border border-sky-400/10 dark:border-sky-400/5 opacity-50"
                    style={{
                        maskImage: 'radial-gradient(circle, #000 40%, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(circle, #000 40%, transparent 80%)',
                    }}
                />
                <div
                    className="absolute top-20 left-1/3 -translate-x-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full blur-[130px] opacity-30 dark:opacity-20 animate-[pulse_9s_ease-in-out_infinite]"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(74, 222, 128, 0.1) 60%, transparent 80%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-7 sm:space-y-9">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-[#F0F9FF] dark:bg-[#0F172A] text-[#0284C7] dark:text-[#38BDF8] border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] shadow-xs">
                        <Heart className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        Personal Moments & Memoirs
                    </span>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                        Life, Journeys & Memories
                    </h2>

                    <p className="text-xs sm:text-sm text-[#334155] dark:text-[#94A3B8] leading-relaxed">
                        A continuous visual journey capturing life passions, quiet moments, expeditions, and cherished milestones.
                    </p>
                </div>

                {/* Main Stage (Full Width) */}
                {activeHeroItem && (
                    <div className="w-full flex flex-col items-center space-y-5">
                        {/* Full-width Showcase Frame */}
                        <div
                            onClick={handleMainFrameClick}
                            onPointerDown={handlePressStart}
                            onPointerUp={handlePressEnd}
                            onPointerLeave={handlePressEnd}
                            onPointerCancel={handlePressEnd}
                            onTouchStart={handlePressStart}
                            onTouchEnd={handlePressEnd}
                            className="relative w-full h-[340px] sm:h-[440px] md:h-[540px] rounded-3xl overflow-hidden border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.25)] shadow-2xl bg-black cursor-pointer flex items-center justify-center group"
                        >
                            {/* Dual-Layer Responsive Container */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeHeroItem.id}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.65, ease: 'easeInOut' }}
                                    className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden"
                                >
                                    {/* Layer 1: Ambient Blurred Backdrop */}
                                    <Image
                                        src={activeHeroItem.src}
                                        alt={activeHeroItem.title}
                                        fill
                                        priority
                                        aria-hidden="true"
                                        className="object-cover object-center blur-2xl opacity-40 scale-110 pointer-events-none"
                                    />

                                    {/* Layer 2: Main Image - 100% fits centered within container */}
                                    <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4 z-1">
                                        <Image
                                            src={activeHeroItem.src}
                                            alt={activeHeroItem.title}
                                            fill
                                            priority
                                            className="object-contain object-center pointer-events-none transition-transform duration-700 group-hover:scale-[1.01]"
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Gradient Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none z-10" />

                            {/* Top Floating Controls */}
                            <div className="absolute top-3 sm:top-5 inset-x-3 sm:inset-x-5 flex items-center justify-between z-20">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xs">
                                        <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#38BDF8] shrink-0" />
                                        {activeHeroItem.tag}
                                    </span>

                                    {/* Play / Pause Indicator */}
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsPlaying((prev) => !prev);
                                        }}
                                        className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] flex items-center gap-1 cursor-pointer"
                                    >
                                        {isPlaying && !isPressHolding ? (
                                            <>
                                                <Pause className="w-2.5 h-2.5 text-[#4ADE80]" />
                                                <span>Playing</span>
                                            </>
                                        ) : (
                                            <>
                                                <Play className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                                                <span>Paused</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Full View Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLightboxOpen(true);
                                    }}
                                    className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[12px] font-semibold hover:bg-white/20 transition-colors cursor-pointer"
                                >
                                    <Maximize2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#4ADE80] shrink-0" />
                                    <span>Full View</span>
                                </button>
                            </div>

                            {/* Bottom Caption & Stepper Controls */}
                            <div className="absolute bottom-3 sm:bottom-5 inset-x-4 sm:inset-x-6 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-3 text-center sm:text-left z-20 text-white pointer-events-auto">
                                <div className="max-w-xl space-y-1 pointer-events-none">
                                    <div className="flex items-center justify-center sm:justify-start gap-2 text-[10px] sm:text-[11px] font-medium text-slate-300">
                                        <span className="flex items-center gap-1 text-[#38BDF8]">
                                            <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                                            {activeHeroItem.location}
                                        </span>
                                        <span>&bull;</span>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                                            {activeHeroItem.date}
                                        </span>
                                    </div>

                                    <h3 className="text-[13px] sm:text-[14px] font-extrabold drop-shadow-md leading-tight">
                                        {activeHeroItem.title}
                                    </h3>
                                    <p className="text-[10px] sm:text-[12px] text-slate-200 drop-shadow-sm line-clamp-2 leading-relaxed">
                                        {activeHeroItem.subtitle}
                                    </p>
                                </div>

                                {/* Left/Right Steppers (Reset timer on click) */}
                                <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                                    <button
                                        onClick={handlePrev}
                                        className="p-1.5 sm:p-2 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white transition-all active:scale-95 cursor-pointer"
                                        aria-label="Previous moment"
                                    >
                                        <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    </button>

                                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-200 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md border border-white/10">
                                        {heroIndex + 1} / {personalMoments.length}
                                    </span>

                                    <button
                                        onClick={handleNext}
                                        className="p-1.5 sm:p-2 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white transition-all active:scale-95 cursor-pointer"
                                        aria-label="Next moment"
                                    >
                                        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Story Countdown Bar (Resets on timerKey change) */}
                            <div className="absolute bottom-0 inset-x-0 h-1 bg-white/15 overflow-hidden z-30 pointer-events-none">
                                <motion.div
                                    key={`${activeHeroItem.id}-${timerKey}`}
                                    initial={{ width: '0%' }}
                                    animate={{
                                        width: isPressHolding ? undefined : '100%',
                                    }}
                                    transition={{
                                        duration: 5,
                                        ease: 'linear',
                                    }}
                                    className="h-full bg-gradient-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80]"
                                />
                            </div>
                        </div>

                        {/* Full-width Thumbnail Track Container with Hidden Scrollbar & Desktop Navigation Buttons */}
                        <div className="relative w-full px-2 sm:px-6 lg:px-10 flex items-center justify-center">
                            {/* Left Scroll Button (Desktop Only) */}
                            <button
                                type="button"
                                onClick={() => scrollThumbnails('left')}
                                aria-label="Scroll thumbnails left"
                                className="hidden md:flex absolute left-0 z-20 items-center justify-center p-2 rounded-xl border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.2)] bg-white/90 dark:bg-[rgba(15,23,42,0.85)] text-[#334155] dark:text-[#94A3B8] hover:text-[#0284C7] dark:hover:text-[#38BDF8] hover:border-[#0284C7] dark:hover:border-[#38BDF8] shadow-md transition-all active:scale-95 cursor-pointer"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>

                            {/* Thumbnail Row: Side Scroller Hidden (`[scrollbar-width:none] [&::-webkit-scrollbar]:hidden`) */}
                            <div
                                ref={thumbTrackRef}
                                className="w-full flex items-center gap-2.5 sm:gap-3 py-2 px-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
                            >
                                {personalMoments.map((item, idx) => {
                                    const isSelected = idx === heroIndex;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => handleSelectIndex(idx)}
                                            className={`relative shrink-0 w-20 sm:w-28 h-14 sm:h-18 rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer ${isSelected
                                                ? 'border-[#0284C7] dark:border-[#38BDF8] ring-1 ring-sky-400/40 scale-105 shadow-md'
                                                : 'border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] opacity-60 hover:opacity-100 hover:border-slate-400'
                                                }`}
                                        >
                                            <Image
                                                src={item.src}
                                                alt={item.title}
                                                fill
                                                sizes="112px"
                                                className="object-cover object-center"
                                            />
                                            <div className="absolute inset-0 bg-black/20" />
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Right Scroll Button (Desktop Only) */}
                            <button
                                type="button"
                                onClick={() => scrollThumbnails('right')}
                                aria-label="Scroll thumbnails right"
                                className="hidden md:flex absolute right-0 z-20 items-center justify-center p-2 rounded-xl border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.2)] bg-white/90 dark:bg-[rgba(15,23,42,0.85)] text-[#334155] dark:text-[#94A3B8] hover:text-[#0284C7] dark:hover:text-[#38BDF8] hover:border-[#0284C7] dark:hover:border-[#38BDF8] shadow-md transition-all active:scale-95 cursor-pointer"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Fullscreen Lightbox Preview */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/95 backdrop-blur-md"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <button
                            onClick={() => setLightboxOpen(false)}
                            className="absolute top-4 right-4 p-1.5 sm:p-2 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
                            aria-label="Close image preview"
                        >
                            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>

                        <div
                            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-[50vh] sm:h-[70vh] flex items-center justify-center rounded-2xl overflow-hidden border border-[rgba(56,189,248,0.3)] shadow-2xl bg-black/60">
                                <Image
                                    src={activeHeroItem.src}
                                    alt={activeHeroItem.title}
                                    fill
                                    priority
                                    className="object-contain object-center"
                                />
                            </div>

                            <div className="mt-2.5 text-center px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white space-y-0.5">
                                <p className="text-[13px] sm:text-[14px] font-bold">
                                    {activeHeroItem.title}
                                </p>
                                <p className="text-[10px] sm:text-[12px] text-[#38BDF8]">
                                    {activeHeroItem.subtitle}
                                </p>
                                <p className="text-[10px] sm:text-[11px] text-[#94A3B8]">
                                    {activeHeroItem.location} &bull; {activeHeroItem.date}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}