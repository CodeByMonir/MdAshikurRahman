'use client';

import useFetch from '@/hooks/useFetch';
import {
    ChevronRight,
    Loader2,
    Mail,
    Phone,
    RefreshCw,
    Search,
    UserCheck,
    Users,
    XCircle
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function StudentsDashboard() {
    const router = useRouter();
    const { data: students, isLoading, error } = useFetch('/data/students.JSON');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGroup, setSelectedGroup] = useState('All');

    // Safe fallback if JSON structure is { students: [...] } or direct array [...]
    const studentList = Array.isArray(students)
        ? students
        : students?.students || [];

    // Filter Logic
    const filteredStudents = studentList.filter((student) => {
        const matchesSearch =
            student.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.roll?.toString().includes(searchQuery) ||
            student.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.registrationNo?.toString().includes(searchQuery);

        const matchesGroup =
            selectedGroup === 'All' ||
            student.group?.toLowerCase() === selectedGroup.toLowerCase();

        return matchesSearch && matchesGroup;
    });

    const handleRowClick = (id) => {
        router.push(`/dashboard/students/${id}`);
    };

    return (
        <div className="w-full space-y-6 select-none">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-4">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#38BDF8] animate-pulse" />
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
                            Academic Records
                        </span>
                    </div>
                    <h1 className="text-[14px] sm:text-2xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        Student Directory & Registry
                    </h1>
                    <p className="text-[10px] sm:text-xs text-[#64748B] dark:text-[#94A3B8]">
                        Comprehensive database of registered students across Nayabazar Degree College ICT batches.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-slate-900/50">
                        <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Total: {studentList.length}</span>
                    </span>
                </div>
            </div>

            {/* Filter and Search Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                {/* Search Bar */}
                <div className="relative w-full sm:w-80">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by name, roll, reg..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                    />
                </div>

                {/* Group Filter Chips */}
                <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                    {['All', 'Science', 'Humanities', 'Business Studies'].map((group) => (
                        <button
                            key={group}
                            onClick={() => setSelectedGroup(group)}
                            className={`px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${selectedGroup === group
                                ? 'bg-[#0284C7] dark:bg-[#38BDF8] text-white dark:text-slate-950 shadow-xs'
                                : 'border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-[#0284C7] dark:hover:border-[#38BDF8]'
                                }`}
                        >
                            {group}
                        </button>
                    ))}
                </div>
            </div>

            {/* Data Representation View */}
            {isLoading ? (
                <div className="min-h-[300px] flex flex-col items-center justify-center gap-2 border border-slate-200/80 dark:border-white/10 rounded-2xl p-8 bg-white/40 dark:bg-slate-900/40">
                    <Loader2 className="w-6 h-6 animate-spin text-[#0284C7] dark:text-[#38BDF8]" />
                    <p className="text-xs font-semibold text-slate-500">Synchronizing student records...</p>
                </div>
            ) : error ? (
                <div className="min-h-[260px] flex flex-col items-center justify-center gap-2 border border-rose-500/30 rounded-2xl p-8 bg-rose-500/5 text-center">
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
                <div className="min-h-[220px] flex flex-col items-center justify-center border border-slate-200/80 dark:border-white/10 rounded-2xl p-8 text-center text-slate-400">
                    <Users className="w-8 h-8 mb-2 opacity-50" />
                    <p className="text-xs font-medium">No students matched your search criteria.</p>
                </div>
            ) : (
                <div className="overflow-hidden border border-slate-300/40 dark:border-white/10 rounded-2xl shadow-xs">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                <tr>
                                    <th className="py-3 px-4">Roll</th>
                                    <th className="py-3 px-4">Student Name</th>
                                    <th className="py-3 px-4">Academic Group</th>
                                    <th className="py-3 px-4">Session / Batch</th>
                                    <th className="py-3 px-4">Contact</th>
                                    <th className="py-3 px-4 text-center">Status</th>
                                    <th className="py-3 px-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200/60 dark:divide-white/5">
                                {filteredStudents.map((student) => (
                                    <tr
                                        key={student.id}
                                        onClick={() => handleRowClick(student.id)}
                                        className="group hover:bg-slate-50/70 dark:hover:bg-white/5 transition-colors cursor-pointer"
                                    >
                                        <td className="py-3.5 px-4 font-mono font-bold text-[#0284C7] dark:text-[#38BDF8]">
                                            #{student.roll || student.id}
                                        </td>
                                        <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100">
                                            <div className="flex items-center gap-2.5">
                                                {student.img ? (
                                                    <img
                                                        src={student.img}
                                                        alt={student.name || 'Student'}
                                                        className="w-7 h-7 rounded-full object-cover border border-[#0284C7]/20 dark:border-[#38BDF8]/20 shrink-0"
                                                    />
                                                ) : (
                                                    <div className="w-7 h-7 rounded-full bg-sky-500/10 border border-[#0284C7]/20 dark:border-[#38BDF8]/20 flex items-center justify-center font-bold text-[#0284C7] dark:text-[#38BDF8] text-[10px] shrink-0">
                                                        {student.name?.charAt(0) || 'S'}
                                                    </div>
                                                )}
                                                <div className="min-w-0">
                                                    <p className="truncate group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors">
                                                        {student.name}
                                                    </p>
                                                    <p className="text-[10px] font-normal text-slate-400 truncate">
                                                        Reg: {student.registrationNo || 'N/A'}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3.5 px-4">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                                                {student.group || 'Science'}
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 font-mono text-[11px]">
                                            {student.session || '2025-2026'}
                                        </td>
                                        <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400 text-[11px]">
                                            <div className="space-y-0.5">
                                                {student.phone && (
                                                    <p className="flex items-center gap-1 font-mono text-[10px]">
                                                        <Phone className="w-2.5 h-2.5 text-[#0284C7] dark:text-[#38BDF8]" />
                                                        {student.phone}
                                                    </p>
                                                )}
                                                {student.email && (
                                                    <p className="flex items-center gap-1 truncate text-[10px]">
                                                        <Mail className="w-2.5 h-2.5 text-slate-400" />
                                                        {student.email}
                                                    </p>
                                                )}
                                            </div>
                                        </td>
                                        <td className="py-3.5 px-4 text-center">
                                            <span
                                                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${student.status === 'Inactive'
                                                    ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                                                    : 'bg-emerald-500/10 text-emerald-600 dark:text-[#4ADE80] border border-emerald-500/20'
                                                    }`}
                                            >
                                                <span
                                                    className={`w-1 h-1 rounded-full ${student.status === 'Inactive'
                                                        ? 'bg-rose-500'
                                                        : 'bg-emerald-500'
                                                        }`}
                                                />
                                                {student.status || 'Active'}
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-4 text-right">
                                            <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0284C7] dark:text-[#38BDF8] group-hover:translate-x-0.5 transition-transform">
                                                <span>Profile</span>
                                                <ChevronRight className="w-3.5 h-3.5" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}