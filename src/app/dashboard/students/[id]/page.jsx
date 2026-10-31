'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
    ArrowLeft,
    Check,
    Edit3,
    GraduationCap,
    Home,
    Loader2,
    Mail,
    Phone,
    RefreshCw,
    Save,
    ShieldAlert,
    UserCheck,
    X,
    XCircle,
} from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFetch from '@/hooks/useFetch';

export default function StudentDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const studentId = params?.id;

    const { data: studentsData, isLoading, error } = useFetch('/data/students.JSON');

    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [student, setStudent] = useState(null);
    const [formData, setFormData] = useState({});
    const [showImageModal, setShowImageModal] = useState(false);

    useEffect(() => {
        if (!studentsData) return;

        const list = Array.isArray(studentsData)
            ? studentsData
            : studentsData?.students || [];

        const found = list.find(
            (item) => String(item.id) === String(studentId) || String(item.roll) === String(studentId)
        );

        if (found) {
            setStudent(found);
            setFormData(found);
        }
    }, [studentsData, studentId]);

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleCancelEdit = () => {
        setFormData(student);
        setIsEditing(false);
        toast.info('Changes discarded.');
    };

    const handleSave = (e) => {
        e.preventDefault();
        setIsSaving(true);

        setTimeout(() => {
            setStudent(formData);
            setIsSaving(false);
            setIsEditing(false);
            toast.success('Student details updated successfully!');
            console.log('Updated Student Payload:', formData);
        }, 600);
    };

    if (isLoading) {
        return (
            <div className="min-h-[400px] flex flex-col items-center justify-center gap-2 border border-slate-200/80 dark:border-white/10 rounded-2xl p-8 bg-white/40 dark:bg-slate-900/40">
                <Loader2 className="w-6 h-6 animate-spin text-[#0284C7] dark:text-[#38BDF8]" />
                <p className="text-xs font-semibold text-slate-500">Retrieving student records...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[260px] flex flex-col items-center justify-center gap-2 border border-rose-500/30 rounded-2xl p-8 bg-rose-500/5 text-center">
                <XCircle className="w-8 h-8 text-rose-500" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Failed to Load Profile</h3>
                <p className="text-xs text-rose-600 dark:text-rose-400 max-w-sm">{error}</p>
                <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-500/30 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 cursor-pointer"
                >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Try Again</span>
                </button>
            </div>
        );
    }

    if (!student) {
        return (
            <div className="min-h-[260px] flex flex-col items-center justify-center gap-3 border border-slate-200/80 dark:border-white/10 rounded-2xl p-8 text-center">
                <ShieldAlert className="w-8 h-8 text-amber-500" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Student Not Found</h3>
                <p className="text-xs text-slate-500">
                    No student record exists matching identifier &quot;{studentId}&quot;.
                </p>
                <Link
                    href="/dashboard/students"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-semibold text-[#0284C7] dark:text-[#38BDF8]"
                >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Registry</span>
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full space-y-6 select-none">
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} theme="colored" />

            {/* Top Navigation & Actions Bar */}
            <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 dark:border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => router.push('/dashboard/students')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 text-[10px] sm:text-xs font-semibold hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors cursor-pointer"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <span>All Students</span>
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 text-[10px] sm:text-xs font-semibold hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors"
                    >
                        <Home className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <span>Home</span>
                    </Link>
                </div>

                <div className="flex items-center gap-2">
                    {!isEditing ? (
                        <button
                            type="button"
                            onClick={() => setIsEditing(true)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-[#0284C7] dark:bg-[#38BDF8] dark:text-slate-950 shadow-xs hover:opacity-90 transition-opacity cursor-pointer"
                        >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Edit Profile</span>
                        </button>
                    ) : (
                        <div className="flex items-center gap-1.5">
                            <button
                                type="button"
                                onClick={handleCancelEdit}
                                disabled={isSaving}
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                            >
                                <X className="w-3.5 h-3.5" />
                                <span>Cancel</span>
                            </button>
                            <button
                                type="button"
                                onClick={handleSave}
                                disabled={isSaving}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xs transition-colors cursor-pointer disabled:opacity-50"
                            >
                                {isSaving ? (
                                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                ) : (
                                    <Save className="w-3.5 h-3.5" />
                                )}
                                <span>Save Changes</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Profile Overview Card */}
            <div className="p-4 sm:p-6 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    {formData.img ? (
                        <button
                            type="button"
                            onClick={() => setShowImageModal(true)}
                            className="group relative cursor-pointer focus:outline-none"
                            title="Click to expand photo"
                        >
                            <img
                                src={formData.img}
                                alt={formData.name || 'Student Avatar'}
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#0284C7]/30 dark:border-[#38BDF8]/30 shadow-md transition-transform duration-200 group-hover:scale-105 shrink-0"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[10px] text-white font-semibold">
                                View
                            </div>
                        </button>
                    ) : (
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] flex items-center justify-center text-white dark:text-slate-950 font-black text-2xl sm:text-3xl shadow-md shrink-0">
                            {formData.name?.charAt(0) || 'S'}
                        </div>
                    )}
                    <div className="min-w-0 space-y-0.5">
                        <div className="flex items-center gap-2">
                            <h1 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                                {formData.name}
                            </h1>
                            <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${formData.status === 'Inactive'
                                    ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                                    : 'bg-emerald-500/10 text-emerald-600 dark:text-[#4ADE80] border border-emerald-500/20'
                                    }`}
                            >
                                {formData.status || 'Active'}
                            </span>
                        </div>
                        <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                            ID: {formData.id} • Class Roll: #{formData.roll}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-semibold text-slate-700 dark:text-slate-300">
                        {formData.group || 'Science'}
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-slate-600 dark:text-slate-400">
                        Session: {formData.session || '2025-2026'}
                    </span>
                </div>
            </div>

            {/* Editable Information Grid */}
            <form onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {/* Academic Credentials Section */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-transparent space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-200/80 dark:border-white/10">
                            <GraduationCap className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                                Academic Information
                            </h2>
                        </div>

                        <div className="space-y-3">
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                    Full Student Name
                                </label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        required
                                        value={formData.name || ''}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                ) : (
                                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                                        {student.name}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Class Roll No
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            required
                                            value={formData.roll || ''}
                                            onChange={(e) => handleInputChange('roll', e.target.value)}
                                            className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#38BDF8]">
                                            #{student.roll}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Registration No
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={formData.registrationNo || ''}
                                            onChange={(e) => handleInputChange('registrationNo', e.target.value)}
                                            className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs font-mono text-slate-700 dark:text-slate-300">
                                            {student.registrationNo || 'N/A'}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Academic Group
                                    </label>
                                    {isEditing ? (
                                        <select
                                            value={formData.group || 'Science'}
                                            onChange={(e) => handleInputChange('group', e.target.value)}
                                            className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white cursor-pointer"
                                        >
                                            <option value="Science">Science</option>
                                            <option value="Humanities">Humanities</option>
                                            <option value="Business Studies">Business Studies</option>
                                        </select>
                                    ) : (
                                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                            {student.group || 'Science'}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Academic Session
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={formData.session || ''}
                                            onChange={(e) => handleInputChange('session', e.target.value)}
                                            className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs font-mono text-slate-700 dark:text-slate-300">
                                            {student.session || '2025-2026'}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact & Status Section */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-transparent space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-200/80 dark:border-white/10">
                            <UserCheck className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                                Contact & Status
                            </h2>
                        </div>

                        <div className="space-y-3">
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                    Contact Phone Number
                                </label>
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        value={formData.phone || ''}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                ) : (
                                    <p className="text-xs font-mono text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                                        <Phone className="w-3 h-3 text-[#0284C7] dark:text-[#38BDF8]" />
                                        <span>{student.phone || 'None provided'}</span>
                                    </p>
                                )}
                            </div>

                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                    Email Address
                                </label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        value={formData.email || ''}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                ) : (
                                    <p className="text-xs text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                                        <Mail className="w-3 h-3 text-slate-400" />
                                        <span>{student.email || 'None provided'}</span>
                                    </p>
                                )}
                            </div>

                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                    Photo URL
                                </label>
                                {isEditing ? (
                                    <input
                                        type="url"
                                        placeholder="https://..."
                                        value={formData.img || ''}
                                        onChange={(e) => handleInputChange('img', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                ) : (
                                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate">
                                        {student.img || 'No custom image set'}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                    Enrolment Status
                                </label>
                                {isEditing ? (
                                    <select
                                        value={formData.status || 'Active'}
                                        onChange={(e) => handleInputChange('status', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white cursor-pointer"
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                ) : (
                                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                                        {student.status || 'Active'}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Edit Controls Toolbar */}
                {isEditing && (
                    <div className="p-3.5 sm:p-4 rounded-xl border border-sky-500/20 bg-sky-500/5 flex items-center justify-between gap-3">
                        <span className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                            Editing mode active. Review your adjustments before submitting.
                        </span>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={handleCancelEdit}
                                disabled={isSaving}
                                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer"
                            >
                                Discard
                            </button>
                            <button
                                type="submit"
                                disabled={isSaving}
                                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xs cursor-pointer disabled:opacity-50"
                            >
                                {isSaving ? (
                                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                ) : (
                                    <Check className="w-3.5 h-3.5" />
                                )}
                                <span>Save</span>
                            </button>
                        </div>
                    </div>
                )}
            </form>

            {/* Image Preview Modal */}
            {showImageModal && formData.img && (
                <div
                    onClick={() => setShowImageModal(false)}
                    className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-xl w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl cursor-default"
                    >
                        <div className="flex items-center justify-between p-3 border-b border-slate-200 dark:border-white/10">
                            <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                                {formData.name} — Profile Photo
                            </p>
                            <button
                                type="button"
                                onClick={() => setShowImageModal(false)}
                                className="p-1 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="p-3 bg-slate-950/40 flex items-center justify-center">
                            <img
                                src={formData.img}
                                alt={formData.name || 'Student Image'}
                                className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-md"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}