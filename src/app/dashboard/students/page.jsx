'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
    Award,
    ArrowDownWideNarrow,
    ArrowUpNarrowWide,
    Droplet,
    GraduationCap,
    Loader2,
    MapPin,
    Phone,
    RefreshCw,
    Search,
    UserCheck,
    UserPlus,
    Users,
    XCircle,
} from 'lucide-react';
import useFetch from '@/hooks/useFetch';

// Helper function to cleanly highlight matched text substrings
function HighlightText({ text, query }) {
    if (!text && text !== 0) return null;
    const strText = String(text);
    const trimmedQuery = query?.trim();

    if (!trimmedQuery) return <span>{strText}</span>;

    // Escape regex special characters
    const escapedQuery = trimmedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    const parts = strText.split(regex);

    return (
        <span>
            {parts.map((part, i) =>
                regex.test(part) ? (
                    <mark
                        key={i}
                        className="bg-amber-300/80 dark:bg-amber-400/30 text-amber-950 dark:text-amber-200 px-0.5 rounded-xs font-semibold"
                    >
                        {part}
                    </mark>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </span>
    );
}

export default function StudentsDashboard() {
    const router = useRouter();
    const { data: students, isLoading, error } = useFetch('/data/students.json');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGroup, setSelectedGroup] = useState('All');
    const [gpaSortOrder, setGpaSortOrder] = useState('default');

    const studentList = useMemo(() => {
        return Array.isArray(students) ? students : students?.students || [];
    }, [students]);

    // Comprehensive search spanning identity, location, contacts, SSC/HSC batches & GPA with sorting
    const filteredStudents = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        const filtered = studentList.filter((student) => {
            const matchesGroup =
                selectedGroup === 'All' ||
                student.group?.toLowerCase() === selectedGroup.toLowerCase();

            if (!matchesGroup) return false;
            if (!query) return true;

            const fieldsToMatch = [
                student.id,
                student.classRoll,
                student.roll,
                student.regNo,
                student.registrationNo,
                student.name,
                student.villageName,
                student.mobileNo,
                student.phone,
                student.schoolName,
                student.sscBatch,
                student.sscGpa,
                student.hscBatch,
                student.hscGpa,
                student.ictMark,
                student.bloodGroup,
            ];

            return fieldsToMatch.some(
                (field) => field && String(field).toLowerCase().includes(query)
            );
        });

        if (gpaSortOrder === 'default') return filtered;

        return [...filtered].sort((a, b) => {
            const gpaA = parseFloat(a.hscGpa || a.sscGpa || 0);
            const gpaB = parseFloat(b.hscGpa || b.sscGpa || 0);

            if (gpaSortOrder === 'high-to-low') {
                return gpaB - gpaA;
            } else if (gpaSortOrder === 'low-to-high') {
                return gpaA - gpaB;
            }
            return 0;
        });
    }, [studentList, searchQuery, selectedGroup, gpaSortOrder]);

    const handleRowClick = (id) => {
        router.push(`/dashboard/students/${id}`);
    };

    return (
        <div className="w-full space-y-6 select-none max-w-7xl mx-auto pb-10">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-5">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#38BDF8] animate-pulse" />
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
                            Academic Records
                        </span>
                    </div>
                    <h1 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        Student Directory &amp; Registry
                    </h1>
                    <p className="text-[11px] sm:text-xs text-[#64748B] dark:text-[#94A3B8]">
                        Comprehensive database of registered collegiate students across batches, GPA records, and personal profiles.
                    </p>
                </div>

                <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-slate-900/50">
                        <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Total: {studentList.length}</span>
                    </span>

                    <button
                        type="button"
                        onClick={() => router.push('/dashboard/students/add')}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                        <UserPlus className="w-3.5 h-3.5" />
                        <span>Add Student</span>
                    </button>
                </div>
            </div>

            {/* Multi-Dimensional Filter and Search Controls */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search ID, name, SSC/HSC batch, GPA (e.g. 5.00), phone..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white placeholder:text-slate-400 shadow-2xs"
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold"
                        >
                            CLEAR
                        </button>
                    )}
                </div>

                {/* Filter Controls: Groups & GPA Sorting */}
                <div className="flex flex-wrap items-center gap-2">
                    {/* Vibrant Styled GPA High to Low / Low to High Sorting Control */}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-sky-500/30 dark:border-sky-400/30 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-indigo-500/10 dark:from-sky-500/20 dark:via-blue-500/20 dark:to-indigo-500/20 text-xs shadow-2xs">
                        {gpaSortOrder === 'low-to-high' ? (
                            <ArrowUpNarrowWide className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                        ) : (
                            <ArrowDownWideNarrow className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                        )}
                        <span className="text-[11px] font-bold text-[#0284C7] dark:text-[#38BDF8] tracking-tight">GPA Order:</span>
                        <select
                            value={gpaSortOrder}
                            onChange={(e) => setGpaSortOrder(e.target.value)}
                            className="bg-sky-500/10 dark:bg-sky-950/60 text-[#0284C7] dark:text-[#38BDF8] font-bold text-xs px-2 py-0.5 rounded-lg border border-sky-400/30 focus:outline-none focus:ring-1 focus:ring-[#0284C7] cursor-pointer"
                        >
                            <option value="default" className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200">Default (Unsorted)</option>
                            <option value="high-to-low" className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200">High to Low (5.00 → 0)</option>
                            <option value="low-to-high" className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200">Low to High (0 → 5.00)</option>
                        </select>
                    </div>

                    {/* Academic Group Tabs */}
                    <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                        {['All', 'Science', 'Humanities', 'Business Studies'].map((group) => (
                            <button
                                key={group}
                                onClick={() => setSelectedGroup(group)}
                                className={`px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                                    selectedGroup === group
                                        ? 'bg-[#0284C7] dark:bg-[#38BDF8] text-white dark:text-slate-950 shadow-2xs'
                                        : 'border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-[#0284C7] dark:hover:border-[#38BDF8] bg-white/40 dark:bg-white/5'
                                }`}
                            >
                                {group}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Match Counter Strip */}
            {searchQuery && (
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between px-1">
                    <span>
                        Found <strong className="text-[#0284C7] dark:text-[#38BDF8]">{filteredStudents.length}</strong> matching student records for &quot;{searchQuery}&quot;
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold">
                        Filtered view
                    </span>
                </div>
            )}

            {/* Data Representation View */}
            {isLoading ? (
                <div className="min-h-85 flex flex-col items-center justify-center gap-2 border border-slate-200/80 dark:border-white/10 rounded-2xl p-8 bg-white/40 dark:bg-slate-900/40">
                    <Loader2 className="w-6 h-6 animate-spin text-[#0284C7] dark:text-[#38BDF8]" />
                    <p className="text-xs font-semibold text-slate-500">Synchronizing student records...</p>
                </div>
            ) : error ? (
                <div className="min-h-65 flex flex-col items-center justify-center gap-2 border border-rose-500/30 rounded-2xl p-8 bg-rose-500/5 text-center">
                    <XCircle className="w-8 h-8 text-rose-500" />
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Unable to Fetch Directory</h3>
                    <p className="text-xs text-rose-600 dark:text-rose-400 max-w-sm">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-500/30 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 cursor-pointer"
                    >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Retry Network Fetch</span>
                    </button>
                </div>
            ) : filteredStudents.length === 0 ? (
                <div className="min-h-60 flex flex-col items-center justify-center border border-slate-200/80 dark:border-white/10 rounded-2xl p-8 text-center text-slate-400">
                    <Users className="w-8 h-8 mb-2 opacity-50" />
                    <p className="text-xs font-medium">No students matched your search criteria.</p>
                </div>
            ) : (
                <>
                    {/* Mobile Card Grid View */}
                    <div className="grid grid-cols-1 gap-3 md:hidden">
                        {filteredStudents.map((student) => {
                            const mobile = student.mobileNo || student.phone || 'N/A';
                            const hscBatch = student.hscBatch || student.session || 'N/A';
                            const sscBatch = student.sscBatch || 'N/A';
                            const roll = student.classRoll || student.roll || 'N/A';
                            const hasHscGpa = Boolean(student.hscGpa);

                            return (
                                <div
                                    key={student.id}
                                    onClick={() => handleRowClick(student.id)}
                                    className="p-4 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-white/70 dark:bg-slate-900/50 hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-all space-y-3 cursor-pointer shadow-xs active:scale-[0.99]"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-center gap-3 min-w-0">
                                            {student.img ? (
                                                <img
                                                    src={student.img}
                                                    alt={student.name || 'Student'}
                                                    className="w-10 h-10 rounded-xl object-cover border border-[#0284C7]/20 dark:border-[#38BDF8]/20 shrink-0"
                                                />
                                            ) : (
                                                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-[#0284C7]/20 dark:border-[#38BDF8]/20 flex items-center justify-center font-bold text-[#0284C7] dark:text-[#38BDF8] text-xs shrink-0">
                                                    {student.name?.charAt(0) || 'S'}
                                                </div>
                                            )}

                                            <div className="min-w-0 space-y-0.5">
                                                <div className="flex items-center gap-1.5 flex-wrap">
                                                    <h3 className="font-bold text-sm text-slate-900 dark:text-white truncate">
                                                        <HighlightText text={student.name} query={searchQuery} />
                                                    </h3>
                                                    {student.bloodGroup && (
                                                        <span className="inline-flex items-center gap-0.5 text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 shrink-0">
                                                            <Droplet className="w-2 h-2 fill-rose-500 text-rose-500" />
                                                            <HighlightText text={student.bloodGroup} query={searchQuery} />
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-[11px] font-mono text-[#0284C7] dark:text-[#38BDF8] font-semibold">
                                                    ID: <HighlightText text={student.id} query={searchQuery} />
                                                </p>
                                            </div>
                                        </div>

                                        <span className="inline-flex items-center px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 shrink-0">
                                            #{roll} • <HighlightText text={student.group || 'Science'} query={searchQuery} />
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-200/60 dark:border-white/5">
                                        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                                            <GraduationCap className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                                            <span>
                                                Batches: <strong><HighlightText text={sscBatch} query={searchQuery} /> / <HighlightText text={hscBatch} query={searchQuery} /></strong>
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                                            <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                            <span>
                                                GPA: <strong><HighlightText text={student.sscGpa || '—'} query={searchQuery} /> / <HighlightText text={student.hscGpa || '—'} query={searchQuery} /></strong>
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 truncate col-span-2">
                                            <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                            <span className="font-mono truncate">
                                                <HighlightText text={mobile} query={searchQuery} />
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 truncate col-span-2">
                                            <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                            <span className="truncate">
                                                <HighlightText text={student.villageName || 'N/A'} query={searchQuery} />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-slate-200/60 dark:border-white/5">
                                        <div className="text-[11px] font-mono">
                                            {hasHscGpa ? (
                                                <span className="inline-flex items-center gap-1 font-bold px-2.5 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-[#4ADE80] border border-emerald-500/20">
                                                    <span>HSC: <HighlightText text={student.hscGpa} query={searchQuery} /></span>
                                                </span>
                                            ) : student.sscGpa ? (
                                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-[10px]">
                                                    <span>SSC: <HighlightText text={student.sscGpa} query={searchQuery} /></span>
                                                </span>
                                            ) : (
                                                <span className="text-slate-400 text-[10px]">GPA: Pending</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Desktop Professional Table View */}
                    <div className="hidden md:block overflow-hidden border border-slate-300/40 dark:border-white/10 rounded-2xl shadow-xs bg-white/40 dark:bg-slate-900/40">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs whitespace-nowrap">
                                <thead className="border-b border-slate-200 dark:border-white/10 bg-slate-50/90 dark:bg-white/5 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                    <tr>
                                        <th className="py-3.5 px-4">Student Name &amp; Blood Group</th>
                                        <th className="py-3.5 px-4">Roll &amp; Group</th>
                                        <th className="py-3.5 px-4">Address / Village</th>
                                        <th className="py-3.5 px-4">Contact Phone</th>
                                        <th className="py-3.5 px-4">Batches (SSC / HSC)</th>
                                        <th className="py-3.5 px-4 text-center">GPA (SSC / HSC)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200/60 dark:divide-white/5">
                                    {filteredStudents.map((student) => {
                                        const roll = student.classRoll || student.roll || 'N/A';
                                        const mobile = student.mobileNo || student.phone || 'N/A';
                                        const hscBatch = student.hscBatch || student.session || 'N/A';
                                        const sscBatch = student.sscBatch || 'N/A';

                                        return (
                                            <tr
                                                key={student.id}
                                                onClick={() => handleRowClick(student.id)}
                                                className="group hover:bg-slate-50/80 dark:hover:bg-white/5 transition-colors cursor-pointer"
                                            >
                                                {/* Student Profile: Name with Blood Group & ID */}
                                                <td className="py-3.5 px-4">
                                                    <div className="flex items-center gap-3">
                                                        {student.img ? (
                                                            <img
                                                                src={student.img}
                                                                alt={student.name || 'Student'}
                                                                className="w-9 h-9 rounded-xl object-cover border border-[#0284C7]/20 dark:border-[#38BDF8]/20 shrink-0"
                                                            />
                                                        ) : (
                                                            <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-[#0284C7]/20 dark:border-[#38BDF8]/20 flex items-center justify-center font-bold text-[#0284C7] dark:text-[#38BDF8] text-xs shrink-0">
                                                                {student.name?.charAt(0) || 'S'}
                                                            </div>
                                                        )}
                                                        <div className="min-w-0">
                                                            <div className="flex items-center gap-1.5 flex-wrap">
                                                                <p className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors leading-tight">
                                                                    <HighlightText text={student.name} query={searchQuery} />
                                                                </p>
                                                                {student.bloodGroup && (
                                                                    <span className="inline-flex items-center gap-0.5 text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 shrink-0">
                                                                        <Droplet className="w-2 h-2 fill-rose-500 text-rose-500" />
                                                                        <span><HighlightText text={student.bloodGroup} query={searchQuery} /></span>
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                                                                ID: <span className="font-semibold text-slate-600 dark:text-slate-300"><HighlightText text={student.id} query={searchQuery} /></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* Class Roll & Group in One Column */}
                                                <td className="py-3.5 px-4">
                                                    <div className="space-y-0.5">
                                                        <p className="font-mono font-bold text-slate-800 dark:text-slate-200">
                                                            #<HighlightText text={roll} query={searchQuery} />
                                                        </p>
                                                        <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                                                            <HighlightText text={student.group || 'Science'} query={searchQuery} />
                                                        </span>
                                                    </div>
                                                </td>

                                                {/* Address / Village */}
                                                <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 text-[11px]">
                                                    <div className="flex items-center gap-1.5 max-w-47.5">
                                                        <MapPin className="w-3 h-3 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                                                        <span className="truncate">
                                                            <HighlightText text={student.villageName || 'N/A'} query={searchQuery} />
                                                        </span>
                                                    </div>
                                                </td>

                                                {/* Contact Phone */}
                                                <td className="py-3.5 px-4 font-mono text-[11px] text-slate-700 dark:text-slate-300">
                                                    <div className="flex items-center gap-1.5">
                                                        <Phone className="w-2.5 h-2.5 text-emerald-500 shrink-0" />
                                                        <span><HighlightText text={mobile} query={searchQuery} /></span>
                                                    </div>
                                                </td>

                                                {/* SSC Batch & HSC Batch in One Column */}
                                                <td className="py-3.5 px-4 font-mono text-[11px] text-slate-700 dark:text-slate-300">
                                                    <div className="space-y-0.5">
                                                        <p className="leading-tight">
                                                            <span className="text-[10px] text-slate-400 font-sans">HSC: </span>
                                                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                                                                <HighlightText text={hscBatch} query={searchQuery} />
                                                            </span>
                                                        </p>
                                                        <p className="text-[10px] text-slate-400 leading-tight">
                                                            <span className="font-sans">SSC: </span>
                                                            <span><HighlightText text={sscBatch} query={searchQuery} /></span>
                                                        </p>
                                                    </div>
                                                </td>

                                                {/* SSC GPA & HSC GPA in One Column */}
                                                <td className="py-3.5 px-4 text-center font-mono">
                                                    <div className="inline-flex flex-col items-center space-y-0.5">
                                                        {student.hscGpa ? (
                                                            <span className="inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-[#4ADE80] border border-emerald-500/20 text-[11px]">
                                                                <Award className="w-3 h-3 shrink-0" />
                                                                <span>HSC: <HighlightText text={student.hscGpa} query={searchQuery} /></span>
                                                            </span>
                                                        ) : (
                                                            <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5">
                                                                HSC Pending
                                                            </span>
                                                        )}

                                                        <span className="text-[10px] text-slate-500 dark:text-slate-400">
                                                            SSC: <strong className="font-bold text-slate-700 dark:text-slate-200"><HighlightText text={student.sscGpa || 'N/A'} query={searchQuery} /></strong>
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}