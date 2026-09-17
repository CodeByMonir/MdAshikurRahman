'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sun, Moon, User, Settings, LogOut } from 'lucide-react';

export default function Navbar() {
    const [theme, setTheme] = useState('dark');
    const [mounted, setMounted] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef(null);

    // Authentication state (set to true to preview profile)
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // User details placeholder
    const user = {
        name: 'Monir',
        email: 'monir@example.com',
        avatar: '/avatar.webp', // fallback to icon if missing
    };

    useEffect(() => {
        setMounted(true);
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }

        // Close dropdown on click outside
        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleTheme = () => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
    };

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        ...(isLoggedIn ? [{ label: 'Dashboard', href: '/dashboard' }] : []),
    ];

    return (
        <header className="sticky top-0 z-50 w-full transition-colors duration-300 bg-white/80 dark:bg-[rgba(9,13,22,0.85)] backdrop-blur-md border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Left: Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/Logo.webp"
                        alt="Logo"
                        width={40}
                        height={40}
                        priority
                        className="w-10 h-10 object-contain rounded-md"
                    />
                </Link>

                {/* Middle: Nav Links */}
                <nav className="flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium transition-colors text-[#334155] hover:text-[#0284C7] dark:text-[#94A3B8] dark:hover:text-[#38BDF8]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right: Actions (Theme Toggle & Profile) */}
                <div className="flex items-center gap-3">

                    {/* Theme Toggle */}
                    {mounted ? (
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="p-2 rounded-lg border transition-all duration-200 border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] bg-[#F8FAFC] dark:bg-[rgba(15,23,42,0.75)] hover:border-[#0284C7] dark:hover:border-[#38BDF8]"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-[#38BDF8] transition-transform hover:rotate-45" />
                            ) : (
                                <Moon className="w-5 h-5 text-[#0284C7] transition-transform hover:-rotate-12" />
                            )}
                        </button>
                    ) : (
                        <div className="w-9 h-9" />
                    )}

                    {/* Profile Section (Conditional) */}
                    {isLoggedIn && (
                        <div className="relative" ref={profileRef}>
                            <button
                                onClick={() => setIsProfileOpen((prev) => !prev)}
                                className="flex items-center justify-center w-9 h-9 rounded-full border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] bg-[#F0F9FF] dark:bg-[rgba(15,23,42,0.75)] hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors overflow-hidden focus:outline-none"
                                aria-label="Open profile menu"
                            >
                                {user.avatar ? (
                                    <Image
                                        src={user.avatar}
                                        alt={user.name}
                                        width={36}
                                        height={36}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                ) : (
                                    <User className="w-5 h-5 text-[#0284C7] dark:text-[#38BDF8]" />
                                )}
                            </button>

                            {/* Profile Dropdown Menu */}
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-52 rounded-xl py-2 shadow-card-light dark:shadow-card-dark bg-white dark:bg-[rgba(15,23,42,0.95)] dark:backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] z-50 animate-in fade-in zoom-in-95 duration-150">
                                    <div className="px-4 py-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]">
                                        <p className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                                            {user.name}
                                        </p>
                                        <p className="text-xs text-[#64748B] truncate">
                                            {user.email}
                                        </p>
                                    </div>

                                    <div className="py-1">
                                        <Link
                                            href="/profile"
                                            onClick={() => setIsProfileOpen(false)}
                                            className="flex items-center gap-2.5 px-4 py-2 text-sm text-[#334155] dark:text-[#94A3B8] hover:text-[#0284C7] dark:hover:text-[#38BDF8] hover:bg-[#F0F9FF] dark:hover:bg-[#0F172A] transition-colors"
                                        >
                                            <User className="w-4 h-4" />
                                            Profile
                                        </Link>
                                        <Link
                                            href="/settings"
                                            onClick={() => setIsProfileOpen(false)}
                                            className="flex items-center gap-2.5 px-4 py-2 text-sm text-[#334155] dark:text-[#94A3B8] hover:text-[#0284C7] dark:hover:text-[#38BDF8] hover:bg-[#F0F9FF] dark:hover:bg-[#0F172A] transition-colors"
                                        >
                                            <Settings className="w-4 h-4" />
                                            Settings
                                        </Link>
                                    </div>

                                    <div className="border-t border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)] pt-1">
                                        <button
                                            onClick={() => {
                                                setIsProfileOpen(false);
                                                setIsLoggedIn(false);
                                            }}
                                            className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                                        >
                                            <LogOut className="w-4 h-4" />
                                            Log Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                </div>

            </div>
        </header>
    );
}