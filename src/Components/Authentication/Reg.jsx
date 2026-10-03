'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    CheckCircle2,
    Eye,
    EyeOff,
    Home,
    Image as ImageIcon,
    Loader2,
    Lock,
    Mail,
    Phone,
    Send,
    ShieldCheck,
    UploadCloud,
    User,
} from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authClient } from '@/app/lib/auth-client';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const getPasswordStrength = (pass) => {
        if (!pass) return { score: 0, label: '', color: '', bg: '' };
        let score = 0;
        if (pass.length >= 6) score++;
        if (pass.length >= 8) score++;
        if (/[A-Z]/.test(pass)) score++;
        if (/[0-9]/.test(pass)) score++;
        if (/[^A-Za-z0-9]/.test(pass)) score++;

        if (score <= 2) {
            return { score: 1, label: 'Weak', color: 'text-rose-500', bg: 'bg-rose-500' };
        }
        if (score <= 4) {
            return { score: 2, label: 'Medium', color: 'text-amber-500', bg: 'bg-amber-500' };
        }
        return { score: 3, label: 'Strong', color: 'text-emerald-500', bg: 'bg-emerald-500' };
    };

    const passwordStrength = getPasswordStrength(password);

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        const formData = new FormData();
        formData.append('image', file);

        try {
            const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY || 'YOUR_IMGBB_API_KEY';
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (data?.data?.url) {
                setAvatarUrl(data.data.url);
                toast.success('Avatar uploaded successfully!');
            } else {
                toast.error(data?.error?.message || 'Failed to upload image.');
            }
        } catch (error) {
            console.error('Image upload failed:', error);
            toast.error('An error occurred during avatar upload.');
        } finally {
            setIsUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }

        const payload = {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            password,
            phone: phone.trim(),
            image: avatarUrl || '',
        };

        const toastId = toast.loading('Registering your account...', {
            position: 'top-right',
        });

        try {
            const { data, error } = await authClient.signUp.email(payload);

            if (error) {
                console.log('Registration Error:', error);
                toast.update(toastId, {
                    render: error.message || 'Registration failed. Please try again.',
                    type: 'error',
                    isLoading: false,
                    autoClose: 4000,
                    closeOnClick: true,
                });
                return;
            }

            console.log('Registration Payload:', payload);
            console.log('Registration Success Response:', data);

            setSubmittedData({ ...payload, response: data });

            toast.update(toastId, {
                render: 'Registration successful! Welcome to the portal.',
                type: 'success',
                isLoading: false,
                autoClose: 2500,
                closeOnClick: true,
            });

            // Optional: Redirect to login or verification after success
            setTimeout(() => {
                window.location.href = '/login';
            }, 2000);

        } catch (err) {
            console.error('Unexpected Registration Error:', err);
            toast.update(toastId, {
                render: err.message || 'An unexpected error occurred. Please try again.',
                type: 'error',
                isLoading: false,
                autoClose: 4000,
                closeOnClick: true,
            });
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
                        href="/lInE/login"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#0284C7] dark:border-[#38BDF8] text-[10px] sm:text-xs font-semibold text-[#0284C7] dark:text-[#38BDF8] hover:bg-[#0284C7]/10 transition-colors"
                    >
                        <span>Already Registered? Log In</span>
                    </Link>
                </div>

                {/* Section Header */}
                <div className="text-center max-w-xl mx-auto space-y-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8] border border-[#0284C7]/30 dark:border-[#38BDF8]/30">
                        <ShieldCheck className="w-3 h-3 text-[#0284C7] dark:text-[#38BDF8]" />
                        Official Account Onboarding
                    </span>
                    <h1 className="text-[14px] sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        Institutional Portal Registration
                    </h1>
                    <p className="text-[10px] sm:text-xs text-[#64748B] dark:text-[#94A3B8] leading-tight sm:leading-relaxed">
                        Create an account to access ICT class curriculum modules, workshop records, test archives, and review platforms.
                    </p>
                </div>

                {/* Registration Form */}
                <form
                    onSubmit={handleSubmit}
                    className="p-3.5 sm:p-6 rounded-2xl border border-slate-300/40 dark:border-white/15 bg-transparent hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-all duration-300 hover:shadow-lg space-y-3 sm:space-y-4 text-left w-full"
                >
                    {/* Full Name */}
                    <div className="space-y-1">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                            <User className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                            <span>Full Name <span className="text-red-500">*</span></span>
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="e.g. Monir Hossen"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                        />
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
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

                        <div className="space-y-1">
                            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                                <Phone className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                                <span>Contact Number <span className="text-red-500">*</span></span>
                            </label>
                            <input
                                type="tel"
                                required
                                placeholder="+880 1XXX XXXXXX"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                            />
                        </div>
                    </div>

                    {/* Passwords */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                        <div className="space-y-1">
                            <div className="flex items-center justify-between">
                                <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                                    <Lock className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                                    <span>Password <span className="text-red-500">*</span></span>
                                </label>
                                {password && (
                                    <span className={`text-[10px] font-bold font-mono ${passwordStrength.color}`}>
                                        {passwordStrength.label}
                                    </span>
                                )}
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    minLength={6}
                                    placeholder="Minimum 6 characters"
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
                            {password && (
                                <div className="grid grid-cols-3 gap-1 pt-1">
                                    <div className={`h-1 rounded-full ${passwordStrength.score >= 1 ? passwordStrength.bg : 'bg-slate-200 dark:bg-white/10'}`} />
                                    <div className={`h-1 rounded-full ${passwordStrength.score >= 2 ? passwordStrength.bg : 'bg-slate-200 dark:bg-white/10'}`} />
                                    <div className={`h-1 rounded-full ${passwordStrength.score >= 3 ? passwordStrength.bg : 'bg-slate-200 dark:bg-white/10'}`} />
                                </div>
                            )}
                        </div>

                        <div className="space-y-1">
                            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                                <Lock className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                                <span>Confirm Password <span className="text-red-500">*</span></span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    required
                                    minLength={6}
                                    placeholder="Re-enter password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-3 pr-10 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="w-3.5 h-3.5" />
                                    ) : (
                                        <Eye className="w-3.5 h-3.5" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Profile Picture (ImgBB) */}
                    <div className="space-y-1 pt-1">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                            <span className="flex items-center gap-1">
                                <ImageIcon className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                                <span>Profile Avatar (Optional)</span>
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">Hosted via ImgBB</span>
                        </label>
                        <div className="flex items-center gap-3">
                            <label className="inline-flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-xl border border-dashed border-slate-300 dark:border-white/20 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer transition-colors">
                                {isUploading ? (
                                    <Loader2 className="w-4 h-4 animate-spin text-sky-500" />
                                ) : (
                                    <UploadCloud className="w-4 h-4 text-sky-500" />
                                )}
                                <span>{isUploading ? 'Uploading...' : 'Choose Image'}</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                    disabled={isUploading}
                                />
                            </label>
                            {avatarUrl && (
                                <div className="flex items-center gap-2">
                                    <img
                                        src={avatarUrl}
                                        alt="Avatar preview"
                                        className="w-10 h-10 rounded-full object-cover border-2 border-[#0284C7] dark:border-[#38BDF8] shadow-sm"
                                    />
                                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                                        <CheckCircle2 className="w-3 h-3" />
                                        Ready
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={isUploading}
                            className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-6 rounded-xl font-semibold text-xs sm:text-sm text-white bg-linear-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                        >
                            <span>Complete Registration</span>
                            <Send className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </form>

                {/* Debug Payload Display */}
                {submittedData && (
                    <div className="p-3.5 sm:p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-left space-y-1.5">
                        <p className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            Console Payload Dispatched:
                        </p>
                        <pre className="text-[10px] font-mono bg-black/60 text-emerald-300 p-3 rounded-lg overflow-x-auto">
                            {JSON.stringify(submittedData, null, 2)}
                        </pre>
                    </div>
                )}
            </div>
        </section>
    );
}