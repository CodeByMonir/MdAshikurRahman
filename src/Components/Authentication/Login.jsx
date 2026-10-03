'use client';

import { authClient } from '@/app/lib/auth-client';
import {
    ArrowLeft,
    Eye,
    EyeOff,
    Home,
    Lock,
    LogIn,
    Mail,
    ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const toastId = toast.loading('Verifying your credentials...', {
            position: 'top-right',
        });

        try {
            const { error } = await authClient.signIn.email({
                email: email.trim().toLowerCase(),
                password,
                callbackURL: '/dashboard',
            });

            if (error) {
                toast.update(toastId, {
                    render: error.message || 'Unable to log in. Please try again.',
                    type: 'error',
                    isLoading: false,
                    autoClose: 4000,
                    closeOnClick: true,
                });
                return;
            }

            toast.update(toastId, {
                render: 'Login successful! Redirecting...',
                type: 'success',
                isLoading: false,
                autoClose: 1500,
                closeOnClick: true,
            });

            setTimeout(() => {
                window.location.assign('/dashboard');
            }, 1000);
        } catch {
            toast.update(toastId, {
                render: 'Unable to log in. Please try again.',
                type: 'error',
                isLoading: false,
                autoClose: 4000,
                closeOnClick: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="relative min-h-screen py-8 sm:py-16 px-3 sm:px-6 lg:px-12 bg-transparent text-slate-800 dark:text-slate-100 flex items-center justify-center">
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} theme="colored" />
            <div className="relative z-10 w-full mx-auto space-y-6 sm:space-y-8 max-w-2xl">
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
                        href="/lInE/registration"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#0284C7] dark:border-[#38BDF8] text-[10px] sm:text-xs font-semibold text-[#0284C7] dark:text-[#38BDF8] hover:bg-[#0284C7]/10 transition-colors"
                    >
                        <span>Need an Account? Register</span>
                    </Link>
                </div>

                {/* Section Header */}
                <div className="text-center max-w-xl mx-auto space-y-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8] border border-[#0284C7]/30 dark:border-[#38BDF8]/30">
                        <ShieldCheck className="w-3 h-3 text-[#0284C7] dark:text-[#38BDF8]" />
                        Secure Portal Access
                    </span>
                    <h1 className="text-[14px] sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        Institutional Portal Login
                    </h1>
                    <p className="text-[10px] sm:text-xs text-[#64748B] dark:text-[#94A3B8] leading-tight sm:leading-relaxed">
                        Log in with your academic credentials to access study materials, exam announcements, and management panels.
                    </p>
                </div>

                {/* Login Form */}
                <form
                    onSubmit={handleSubmit}
                    className="p-3.5 sm:p-6 rounded-2xl border border-slate-300/40 dark:border-white/15 bg-transparent hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-all duration-300 hover:shadow-lg space-y-3 sm:space-y-4 text-left w-full"
                >
                    {/* Email Input */}
                    <div className="space-y-1">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                            <Mail className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                            <span>Email Address <span className="text-red-500">*</span></span>
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="codebymonir@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1">
                        <div className="flex items-center justify-between">
                            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                                <Lock className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                                <span>Password <span className="text-red-500">*</span></span>
                            </label>
                            <Link
                                href="/forgot-password"
                                className="text-[10px] sm:text-[11px] text-[#0284C7] dark:text-[#38BDF8] hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                minLength={6}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 pr-10 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? (
                                    <EyeOff className="w-3.5 h-3.5" />
                                ) : (
                                    <Eye className="w-3.5 h-3.5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-6 rounded-xl font-semibold text-xs sm:text-sm text-white bg-linear-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                        >
                            <span>{isLoading ? 'Verifying...' : 'Log In to Portal'}</span>
                            <LogIn className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </form>

            </div>
        </section>
    );
}