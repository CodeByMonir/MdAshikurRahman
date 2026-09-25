'use client';

import React, { useState } from 'react';
import {
    AlertTriangle,
    CheckCircle2,
    GraduationCap,
    Image as ImageIcon,
    Loader2,
    Send,
    Star,
    UploadCloud,
    User,
    Users,
} from 'lucide-react';

const AddReview = () => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('Student');
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState(0);
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [comment, setComment] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    // Conditional sub-fields
    const [studentInfo, setStudentInfo] = useState({ class: '', group: '', batch: '' });
    const [teacherInfo, setTeacherInfo] = useState({ title: '', teacherAt: '', Subject: '' });
    const [guardianInfo, setGuardianInfo] = useState({ relation: '', studentName: '' });

    const monthsList = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        const formData = new FormData();
        formData.append('image', file);

        try {
            // Replace with process.env.NEXT_PUBLIC_IMGBB_API_KEY
            const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY || 'YOUR_IMGBB_API_KEY';
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (data?.data?.url) {
                setAvatarUrl(data.data.url);
            }
        } catch (error) {
            console.error('Image upload failed:', error);
        } finally {
            setIsUploading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let programPayload = {};
        if (role === 'Student') {
            programPayload = {
                class: studentInfo.class,
                group: studentInfo.group,
                batch: studentInfo.batch,
            };
        } else if (role === 'Teacher') {
            programPayload = {
                title: teacherInfo.title,
                teacherAt: teacherInfo.teacherAt,
                Subject: teacherInfo.Subject,
            };
        } else if (role === 'Guardian') {
            programPayload = {
                relation: guardianInfo.relation,
                studentName: guardianInfo.studentName,
            };
        }

        const payload = {
            name: name.trim(),
            role,
            program: programPayload,
            rating: Number(rating),
            date: `${month} ${year}`.trim(),
            avatar: avatarUrl || '',
            comment: comment.trim(),
        };

        setSubmittedData(payload);
        console.log('Submitted Review Payload:', payload);
    };

    return (
        <section className="relative min-h-screen py-10 sm:py-16 px-3 sm:px-6 lg:px-12 bg-transparent text-slate-800 dark:text-slate-100 flex items-center justify-center">
            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col space-y-5">

                {/* Section Header */}
                <div className="text-center space-y-1.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider bg-transparent text-[#0284C7] dark:text-[#38BDF8] border border-[#0284C7]/30 dark:border-[#38BDF8]/30">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        Community Testimonial
                    </span>
                    <h1 className="text-[14px] sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        Submit Your Feedback
                    </h1>
                    <p className="text-[11px] sm:text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                        Share your classroom, mentorship, or campus experience with Engr. Md. Ashikur Rahman.
                    </p>
                </div>

                {/* Warning Banner */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl border border-amber-500/40 bg-amber-500/10 dark:bg-amber-500/5 text-amber-800 dark:text-amber-300">
                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <p className="text-[11px] sm:text-xs font-semibold leading-tight">
                        Notice: This review cannot be deleted once submitted. Please verify your info.
                    </p>
                </div>

                {/* Form Card */}
                <form
                    onSubmit={handleSubmit}
                    className="p-5 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-lg space-y-4 text-left"
                >
                    {/* Name */}
                    <div className="space-y-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                            <User className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                            <span>Your Full Name <span className="text-red-500">*</span></span>
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="e.g. Monir Hossen"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                        />
                    </div>

                    {/* Role Selection */}
                    <div className="space-y-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                            <Users className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                            <span>Select Your Role <span className="text-red-500">*</span></span>
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            {['Student', 'Guardian', 'Teacher'].map((r) => (
                                <button
                                    key={r}
                                    type="button"
                                    onClick={() => setRole(r)}
                                    className={`py-2 px-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all border ${role === r
                                        ? 'bg-sky-500/10 border-[#0284C7] dark:border-[#38BDF8] text-[#0284C7] dark:text-[#38BDF8]'
                                        : 'bg-transparent border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                                        }`}
                                >
                                    {r}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Conditional Fields: Student */}
                    {role === 'Student' && (
                        <div className="p-3.5 rounded-xl border border-sky-500/20 bg-sky-500/5 space-y-3">
                            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8] flex items-center gap-1">
                                <GraduationCap className="w-3.5 h-3.5" />
                                Student Academic Credentials
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                <div>
                                    <label className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold block mb-1">
                                        Class <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="HSC 1st Year"
                                        value={studentInfo.class}
                                        onChange={(e) => setStudentInfo({ ...studentInfo, class: e.target.value })}
                                        className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] text-slate-900 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold block mb-1">
                                        Group <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Commerce"
                                        value={studentInfo.group}
                                        onChange={(e) => setStudentInfo({ ...studentInfo, group: e.target.value })}
                                        className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] text-slate-900 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold block mb-1">
                                        Batch <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="2021"
                                        value={studentInfo.batch}
                                        onChange={(e) => setStudentInfo({ ...studentInfo, batch: e.target.value })}
                                        className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] text-slate-900 dark:text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Conditional Fields: Teacher */}
                    {role === 'Teacher' && (
                        <div className="p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-3">
                            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                <Users className="w-3.5 h-3.5" />
                                Professional Educator Details
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                <div>
                                    <label className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold block mb-1">
                                        Designation Title <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Assistant Professor"
                                        value={teacherInfo.title}
                                        onChange={(e) => setTeacherInfo({ ...teacherInfo, title: e.target.value })}
                                        className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold block mb-1">
                                        Institution (Teacher At) <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="College / School Name"
                                        value={teacherInfo.teacherAt}
                                        onChange={(e) => setTeacherInfo({ ...teacherInfo, teacherAt: e.target.value })}
                                        className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold block mb-1">
                                        Subject <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Physics / ICT"
                                        value={teacherInfo.Subject}
                                        onChange={(e) => setTeacherInfo({ ...teacherInfo, Subject: e.target.value })}
                                        className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Conditional Fields: Guardian */}
                    {role === 'Guardian' && (
                        <div className="p-3.5 rounded-xl border border-amber-500/20 bg-amber-500/5 space-y-3">
                            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1">
                                <Users className="w-3.5 h-3.5" />
                                Guardian Relationship
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                <div>
                                    <label className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold block mb-1">
                                        Relationship to Student <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Father, Mother, Brother, Sister, etc."
                                        value={guardianInfo.relation}
                                        onChange={(e) => setGuardianInfo({ ...guardianInfo, relation: e.target.value })}
                                        className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-amber-500 text-slate-900 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold block mb-1">
                                        Student Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Name of the student"
                                        value={guardianInfo.studentName}
                                        onChange={(e) => setGuardianInfo({ ...guardianInfo, studentName: e.target.value })}
                                        className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-amber-500 text-slate-900 dark:text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Rating & Date Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                        {/* Rating */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 block">
                                Rating Score ({rating} of 5) <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center gap-1.5 py-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        className="p-1 text-slate-300 dark:text-slate-600 transition-colors cursor-pointer"
                                    >
                                        <Star
                                            className={`w-5 h-5 ${star <= (hoverRating || rating)
                                                ? 'fill-amber-400 text-amber-400'
                                                : 'text-slate-300 dark:text-slate-600'
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Month & Year Selection */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 block">
                                Date Period <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                <select
                                    required
                                    value={month}
                                    onChange={(e) => setMonth(e.target.value)}
                                    className="px-2.5 py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-[#0284C7]"
                                >
                                    <option value="">Month</option>
                                    {monthsList.map((m) => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                                <input
                                    type="number"
                                    required
                                    placeholder="Year (2021)"
                                    min="2021"
                                    max="2099"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    className="px-2.5 py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-[#0284C7]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Avatar Upload (imgbb - Optional) */}
                    <div className="space-y-1.5 pt-1">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                            <span className="flex items-center gap-1">
                                <ImageIcon className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                                <span>Profile Photo Avatar (Optional)</span>
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">Hosted on ImgBB</span>
                        </label>
                        <div className="flex items-center gap-3">
                            <label className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-dashed border-slate-300 dark:border-white/20 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer transition-colors">
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
                                        className="w-8 h-8 rounded-full object-cover border border-sky-400"
                                    />
                                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                                        <CheckCircle2 className="w-3 h-3" />
                                        Ready
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Comment */}
                    <div className="space-y-1.5 pt-1">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 block">
                            Your Review & Feedback <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            required
                            rows={4}
                            placeholder="Write your constructive thoughts, guidance experiences, or memorable sessions..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full p-3 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white leading-relaxed resize-y"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={isUploading}
                            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-xs sm:text-sm text-white bg-linear-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                        >
                            <span>Submit Formal Review</span>
                            <Send className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </form>

                {/* Submitted Payload Debug Preview */}
                {submittedData && (
                    <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-left space-y-2">
                        <p className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            Data Object Collected Successfully:
                        </p>
                        <pre className="text-[10px] font-mono bg-black/60 text-emerald-300 p-3 rounded-lg overflow-x-auto">
                            {JSON.stringify(submittedData, null, 2)}
                        </pre>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AddReview;