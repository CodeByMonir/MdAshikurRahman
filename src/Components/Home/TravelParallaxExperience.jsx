'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MapPin,
    Compass,
    Mountain,
    Wind,
    ChevronLeft,
    ChevronRight,
    Sparkles,
} from 'lucide-react';

const travelStories = [
    {
        id: 1,
        tag: 'Riverway Trails',
        icon: Wind,
        accentColor: '#38BDF8',
        title: 'Drifting Across Padma Waters',
        subtitle: 'Golden Hour at the Delta Confluence',
        story:
            'The engine cuts out, and the river takes over. Across the expansive sandbars, evening light turns the current into liquid copper. Fishermen unfurl handwoven nets against silhouettes of flying herons, leaving nothing behind but ripples and stillness.',
        location: 'Munshiganj & Padma River',
        altitude: '12m Elevation',
        image: '/bg.jpg',
    },
    {
        id: 2,
        tag: 'Lush High Meadows',
        icon: Mountain,
        accentColor: '#4ADE80',
        title: 'Mist Rising Over Tea Valleys',
        subtitle: 'Dawn in the Rain-Drenched Hills',
        story:
            'Waking before the sun reveals valleys drowned in rolling white fog. Walking along the contours of terraced emerald slopes, the air is sharp and fragrant with damp soil and fresh tea leaves. Every turn is a corridor of pristine green cut through by stone tracks.',
        location: 'Sreemangal & Lawachara',
        altitude: '280m Ridgeline',
        image: '/bg1.jpg',
    },
    {
        id: 3,
        tag: 'Historic Horizons',
        icon: Compass,
        accentColor: '#FBBF24',
        title: 'Echoes in Forgotten Brick & Stone',
        subtitle: 'Chasing Heritage Along Ancient Trails',
        story:
            'Centuries-old terracotta architecture emerges quietly from wild banyan roots. Walking down ancient river ports and merchant ruins transports you into bygone centuries, where trade winds once steered wooden merchant vessels across the delta.',
        location: 'Panam Nagar, Sonargaon',
        altitude: 'Ancient Merchant Route',
        image: '/bg2.jpg',
    },
];

export default function TravelExperienceShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef(null);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + travelStories.length) % travelStories.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % travelStories.length);
    };

    // Center active indicator pill
    useEffect(() => {
        if (trackRef.current) {
            const activeEl = trackRef.current.children[currentIndex];
            if (activeEl) {
                activeEl.scrollIntoView({
                    inline: 'center',
                    block: 'nearest',
                    behavior: 'smooth',
                });
            }
        }
    }, [currentIndex]);

    const activeStory = travelStories[currentIndex];
    const IconComponent = activeStory.icon;

    return (
        <section className="relative w-full mx-auto aspect-16/10 sm:aspect-video max-h-145 overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 select-none bg-black">
            {/* Dynamic Image Container (Adapts to Native Image Bounds) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStory.id}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.55, ease: 'easeInOut' }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={activeStory.image}
                            alt={activeStory.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 1200px"
                            className="object-cover object-center"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Top HUD: Transparent Badge & Counter */}
            <div className="relative z-20 p-3 sm:p-4 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-transparent border border-white/30 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                    <Sparkles className="w-3 h-3 text-[#38BDF8]" />
                    <span>Travel Memoir</span>
                </div>

                <span className="text-[12px] font-mono font-semibold px-2.5 py-1 rounded-md bg-transparent border border-white/30 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                    0{currentIndex + 1} / 0{travelStories.length}
                </span>
            </div>

            {/* Side Navigation Stepper Buttons: Completely Transparent Background */}
            <div className="absolute inset-y-0 inset-x-2 sm:inset-x-3 flex items-center justify-between z-30 pointer-events-none">
                <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous story"
                    className="p-2 sm:p-2.5 rounded-full bg-transparent hover:bg-white/10 border border-white/30 text-white transition-all active:scale-95 cursor-pointer pointer-events-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] hover:border-white"
                >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" />
                </button>

                <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next story"
                    className="p-2 sm:p-2.5 rounded-full bg-transparent hover:bg-white/10 border border-white/30 text-white transition-all active:scale-95 cursor-pointer pointer-events-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] hover:border-white"
                >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" />
                </button>
            </div>

            {/* Corner Experience Panel: Fully Transparent Card */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-20 max-w-[88%] sm:max-w-sm md:max-w-md pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStory.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-transparent border border-white/20 space-y-1 sm:space-y-1.5 text-slate-100 drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)]"
                    >
                        {/* Tag */}
                        <div
                            className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[12px] font-bold uppercase tracking-wider leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                            style={{ color: activeStory.accentColor }}
                        >
                            <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                            <span>{activeStory.tag}</span>
                        </div>

                        {/* Title: Capped strictly at max 14px, almost zero line-height on mobile */}
                        <h3 className="text-[12px] sm:text-[14px] font-extrabold text-white leading-none sm:leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] line-clamp-1">
                            {activeStory.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="text-[10px] sm:text-[13px] font-semibold text-sky-100 leading-none sm:leading-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] line-clamp-1">
                            {activeStory.subtitle}
                        </p>

                        {/* Story Text: ultra-tight leading-[1.1] on mobile */}
                        <p className="text-[9px] sm:text-[12px] text-slate-100 leading-[1.1] sm:leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] line-clamp-2 sm:line-clamp-3">
                            {activeStory.story}
                        </p>

                        {/* Metadata */}
                        <div className="flex items-center gap-2 sm:gap-2.5 text-[8px] sm:text-[11px] text-slate-200 pt-0.5 sm:pt-1 border-t border-white/20 font-mono leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                            <span className="inline-flex items-center gap-1 text-[#38BDF8] truncate">
                                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                                {activeStory.location}
                            </span>
                            <span>&bull;</span>
                            <span className="shrink-0">{activeStory.altitude}</span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Bottom-Right Thumbnail Indicator Strip: Fully Transparent */}
            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-20">
                <div
                    ref={trackRef}
                    className="flex items-center gap-1.5 p-1 rounded-full bg-transparent border border-white/25 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]"
                >
                    {travelStories.map((story, idx) => {
                        const isSelected = idx === currentIndex;
                        return (
                            <button
                                key={story.id}
                                onClick={() => setCurrentIndex(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${isSelected
                                        ? 'w-5 bg-linear-to-r from-[#38BDF8] to-[#4ADE80] shadow-[0_0_8px_rgba(56,189,248,0.9)]'
                                        : 'w-2 bg-white/40 hover:bg-white/75'
                                    }`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}