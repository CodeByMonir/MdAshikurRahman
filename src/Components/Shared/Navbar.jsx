'use client';

import { signOut } from '@/app/lib/auth-client';
import { useAuth } from '@/Context/AuthContext';
import {
    Bell,
    Home as HomeIcon,
    Info,
    LayoutDashboard,
    LogOut,
    Mail,
    Menu,
    Moon,
    Settings,
    Sun,
    User,
    X
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
    const [theme, setTheme] = useState('dark');
    const [mounted, setMounted] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
    const profileRef = useRef(null);

    // 1. AuthContext থেকে ডাটা এবং মেথড রিসিভ করা
    const { user, loading, refreshSession } = useAuth();

    // 2. নিরাপদভাবে ইউজার ডাটা বের করা
    const { name, email, image } = user || {};
    const isLoggedIn = Boolean(user);

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

        // প্রোফাইল ড্রপডাউনের বাইরে ক্লিক করলে তা বন্ধ করার লজিক
        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // মোবাইল মেনু ওপেন থাকলে পেছনের পেজ স্ক্রল বন্ধ রাখা
    useEffect(() => {
        if (isMobileModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileModalOpen]);

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

    // 3. লগ-আউট করার পর refreshSession() কল করা যাতে UI সাথে সাথে আপডেট হয়
    const handleLogout = async () => {
        setIsProfileOpen(false);
        setIsMobileModalOpen(false);
        try {
            if (typeof signOut === 'function') {
                await signOut();
            }
            if (typeof refreshSession === 'function') {
                await refreshSession();
            }
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    // নেভিগেশন লিংক (লগইন থাকলে Dashboard যুক্ত হবে)
    const navLinks = [
        { label: 'Home', href: '/', icon: HomeIcon },
        { label: 'About', href: '/about', icon: Info },
        { label: 'Contact', href: '/contacts', icon: Mail },
        { label: 'Notice', href: '/notice', icon: Bell },
        ...(!loading && isLoggedIn ? [{ label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard }] : []),
    ];

    return (
        <>
            <header className="sticky top-0 z-40 w-full transition-colors duration-300 bg-white/80 dark:bg-[rgba(9,13,22,0.85)] backdrop-blur-md border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
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

                    {/* Middle: Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-7">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="group flex items-center gap-2 text-sm font-medium transition-colors text-[#334155] hover:text-[#0284C7] dark:text-[#94A3B8] dark:hover:text-[#38BDF8]"
                                >
                                    <Icon className="w-4 h-4 transition-transform group-hover:scale-110 text-[#64748B] group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8]" />
                                    <span>{link.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-2 sm:gap-3">
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

                        {/* 4. Auth State Handling (Desktop) - শুধুমাত্র লগইন থাকলে প্রোফাইল আইকন ও ড্রপডাউন দেখাবে */}
                        {!loading && isLoggedIn && (
                            <div className="relative hidden sm:block" ref={profileRef}>
                                <button
                                    onClick={() => setIsProfileOpen((prev) => !prev)}
                                    className="flex items-center justify-center w-9 h-9 rounded-full border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] bg-[#F0F9FF] dark:bg-[rgba(15,23,42,0.75)] hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors overflow-hidden focus:outline-none"
                                    aria-label="Open profile menu"
                                >
                                    {image ? (
                                        <Image
                                            src={image}
                                            alt={name || 'User Avatar'}
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

                                {/* Profile Dropdown Box */}
                                {isProfileOpen && (
                                    <div className="absolute right-0 mt-2 w-56 rounded-xl py-2 shadow-lg bg-white dark:bg-[rgba(15,23,42,0.95)] backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] z-50">
                                        <div className="px-4 py-2 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]">
                                            <p className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC] truncate">
                                                {name || 'Admin'}
                                            </p>
                                            <p className="text-xs text-[#64748B] truncate">
                                                {email || 'No email provided'}
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
                                                onClick={handleLogout}
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

                        {/* Mobile Menu Trigger Button */}
                        <button
                            onClick={() => setIsMobileModalOpen(true)}
                            aria-label="Open navigation menu"
                            className="md:hidden p-2 rounded-lg border transition-all duration-200 border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] bg-[#F8FAFC] dark:bg-[rgba(15,23,42,0.75)] text-[#334155] dark:text-[#94A3B8] hover:text-[#0284C7] dark:hover:text-[#38BDF8]"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Modal Overlay */}
            {isMobileModalOpen && (
                <div className="fixed inset-0 z-50 md:hidden flex items-center justify-center p-4">
                    <div
                        onClick={() => setIsMobileModalOpen(false)}
                        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xs transition-opacity duration-300"
                        aria-hidden="true"
                    />

                    <div className="relative w-full max-w-sm rounded-2xl p-6 bg-white dark:bg-[rgba(15,23,42,0.95)] backdrop-blur-md border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.2)] shadow-lg transition-transform duration-300">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)]">
                            <Link
                                href="/"
                                onClick={() => setIsMobileModalOpen(false)}
                                className="flex items-center gap-2"
                            >
                                <Image
                                    src="/Logo.webp"
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 object-contain rounded-md"
                                />
                                <span className="font-bold text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                                    Navigation
                                </span>
                            </Link>
                            <button
                                onClick={() => setIsMobileModalOpen(false)}
                                aria-label="Close menu"
                                className="p-1.5 rounded-lg border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.15)] text-[#64748B] hover:text-[#0284C7] dark:hover:text-[#38BDF8] transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Authenticated User Preview (Mobile) - শুধুমাত্র লগইন থাকলে দেখাবে */}
                        {!loading && isLoggedIn && (
                            <div className="flex items-center gap-3 py-4 border-b border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)]">
                                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E2E8F0] dark:border-[rgba(56,189,248,0.25)] flex items-center justify-center bg-[#F0F9FF] dark:bg-[#0F172A]">
                                    {image ? (
                                        <Image
                                            src={image}
                                            alt={name || 'User Avatar'}
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    ) : (
                                        <User className="w-5 h-5 text-[#0284C7] dark:text-[#38BDF8]" />
                                    )}
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC] truncate">
                                        {name || 'Admin'}
                                    </p>
                                    <p className="text-xs text-[#64748B] truncate">
                                        {email || 'No email provided'}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Nav Links with Icons */}
                        <nav className="flex flex-col py-3 space-y-1">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setIsMobileModalOpen(false)}
                                        className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors text-[#334155] hover:text-[#0284C7] hover:bg-[#F0F9FF] dark:text-[#94A3B8] dark:hover:text-[#38BDF8] dark:hover:bg-[#0F172A]"
                                    >
                                        <Icon className="w-4 h-4 text-[#64748B]" />
                                        <span>{link.label}</span>
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* 5. Mobile User Actions - শুধুমাত্র লগইন থাকলে Profile/Settings/Logout দেখাবে */}
                        {!loading && isLoggedIn && (
                            <div className="pt-2 border-t border-[#E2E8F0] dark:border-[rgba(56,189,248,0.1)] space-y-1">
                                <Link
                                    href="/profile"
                                    onClick={() => setIsMobileModalOpen(false)}
                                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm text-[#334155] dark:text-[#94A3B8] hover:text-[#0284C7] dark:hover:text-[#38BDF8] hover:bg-[#F0F9FF] dark:hover:bg-[#0F172A] transition-colors"
                                >
                                    <User className="w-4 h-4" />
                                    Profile
                                </Link>
                                <Link
                                    href="/settings"
                                    onClick={() => setIsMobileModalOpen(false)}
                                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm text-[#334155] dark:text-[#94A3B8] hover:text-[#0284C7] dark:hover:text-[#38BDF8] hover:bg-[#F0F9FF] dark:hover:bg-[#0F172A] transition-colors"
                                >
                                    <Settings className="w-4 h-4" />
                                    Settings
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}