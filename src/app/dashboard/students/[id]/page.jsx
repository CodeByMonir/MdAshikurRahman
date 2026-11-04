'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
    ArrowLeft,
    Award,
    Building2,
    Calendar,
    Check,
    CheckCircle2,
    Droplet,
    Edit3,
    GraduationCap,
    Heart,
    Home,
    Image as ImageIcon,
    Loader2,
    Mail,
    MapPin,
    Phone,
    RefreshCw,
    Save,
    ShieldAlert,
    Trash2,
    UploadCloud,
    User,
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

    const { data: studentsData, isLoading, error } = useFetch('/data/students.json');

    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [student, setStudent] = useState(null);
    const [formData, setFormData] = useState({});
    const [showImageModal, setShowImageModal] = useState(false);

    // ImgBB Upload & Live Preview States
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [isUploadingImg, setIsUploadingImg] = useState(false);
    const [isImgConfirmed, setIsImgConfirmed] = useState(false);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (!studentsData) return;

        const list = Array.isArray(studentsData)
            ? studentsData
            : studentsData?.students || [];

        const found = list.find(
            (item) =>
                String(item.id) === String(studentId) ||
                String(item.classRoll || item.roll) === String(studentId)
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

    // Handle Local File Selection (Blob Preview)
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            toast.error('Please choose a valid image file (PNG, JPG, WEBP).');
            return;
        }

        if (previewUrl && previewUrl.startsWith('blob:')) {
            URL.revokeObjectURL(previewUrl);
        }

        const objectUrl = URL.createObjectURL(file);
        setSelectedFile(file);
        setPreviewUrl(objectUrl);
        setIsImgConfirmed(false);
    };

    // Remove or Cancel Draft Photo
    const handleRemoveImage = () => {
        if (previewUrl && previewUrl.startsWith('blob:')) {
            URL.revokeObjectURL(previewUrl);
        }
        setSelectedFile(null);
        setPreviewUrl('');
        setIsImgConfirmed(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // ImgBB API Upload Handler
    const handleConfirmUpload = async () => {
        if (!selectedFile) return;

        const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
        if (!apiKey) {
            toast.error('ImgBB API key is missing in environment variables.');
            return;
        }

        setIsUploadingImg(true);

        try {
            const uploadData = new FormData();
            uploadData.append('image', selectedFile);

            const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                method: 'POST',
                body: uploadData,
            });

            const data = await res.json();

            if (data.success) {
                const uploadedUrl = data.data.display_url || data.data.url;
                setFormData((prev) => ({ ...prev, img: uploadedUrl }));
                setIsImgConfirmed(true);
                toast.success('Image successfully uploaded to ImgBB!');
            } else {
                throw new Error(data.error?.message || 'Failed to upload image to ImgBB');
            }
        } catch (err) {
            console.error('ImgBB Upload Error:', err);
            toast.error(err.message || 'Image upload failed. Please try again.');
        } finally {
            setIsUploadingImg(false);
        }
    };

    const handleCancelEdit = () => {
        handleRemoveImage();
        setFormData(student);
        setIsEditing(false);
        toast.info('Changes discarded.');
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (selectedFile && !isImgConfirmed) {
            toast.warning('Please confirm and upload your selected image before saving changes.');
            return;
        }

        setIsSaving(true);

        setTimeout(() => {
            setStudent(formData);
            handleRemoveImage();
            setIsSaving(false);
            setIsEditing(false);
            toast.success('Student records updated successfully!');
            console.log('Persisted Student Details Payload:', formData);
        }, 600);
    };

    if (isLoading) {
        return (
            <div className="min-h-[400px] flex flex-col items-center justify-center gap-2 border border-slate-200/80 dark:border-white/10 rounded-2xl p-8 bg-white/40 dark:bg-slate-900/40 select-none">
                <Loader2 className="w-6 h-6 animate-spin text-[#0284C7] dark:text-[#38BDF8]" />
                <p className="text-xs font-semibold text-slate-500">Retrieving student records...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[260px] flex flex-col items-center justify-center gap-2 border border-rose-500/30 rounded-2xl p-8 bg-rose-500/5 text-center select-none">
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
            <div className="min-h-[260px] flex flex-col items-center justify-center gap-3 border border-slate-200/80 dark:border-white/10 rounded-2xl p-8 text-center select-none">
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

    const currentHeroPhoto = previewUrl || formData.img;

    return (
        <div className="w-full space-y-6 select-none max-w-6xl mx-auto pb-12">
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} theme="colored" />

            {/* Top Navigation & Toolbar */}
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
                                disabled={isSaving || isUploadingImg}
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-50"
                            >
                                <X className="w-3.5 h-3.5" />
                                <span>Cancel</span>
                            </button>
                            <button
                                type="button"
                                onClick={handleSave}
                                disabled={isSaving || isUploadingImg}
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

            {/* Profile Hero Overview Card */}
            <div className="p-4 sm:p-6 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    {currentHeroPhoto ? (
                        <button
                            type="button"
                            onClick={() => setShowImageModal(true)}
                            className="group relative cursor-pointer focus:outline-none shrink-0"
                            title="Click to zoom student photo"
                        >
                            <img
                                src={currentHeroPhoto}
                                alt={formData.name || 'Student Avatar'}
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#0284C7]/30 dark:border-[#38BDF8]/30 shadow-md transition-transform duration-200 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[10px] text-white font-semibold">
                                View
                            </div>
                        </button>
                    ) : (
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] flex items-center justify-center text-white dark:text-slate-950 font-black text-2xl sm:text-3xl shadow-md shrink-0">
                            {formData.name?.charAt(0) || 'S'}
                        </div>
                    )}

                    <div className="min-w-0 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                            <h1 className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-white truncate">
                                {formData.name}
                            </h1>
                            <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                    formData.status === 'Inactive'
                                        ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                                        : 'bg-emerald-500/10 text-emerald-600 dark:text-[#4ADE80] border border-emerald-500/20'
                                }`}
                            >
                                {formData.status || 'Active'}
                            </span>
                        </div>

                        <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-1.5">
                            <span>ID: <strong className="text-slate-700 dark:text-slate-200">{formData.id}</strong></span>
                            <span>•</span>
                            <span>Class Roll: <strong className="text-[#0284C7] dark:text-[#38BDF8]">#{formData.classRoll || formData.roll}</strong></span>
                            <span>•</span>
                            <span>Reg: <strong className="text-slate-700 dark:text-slate-200">{formData.regNo || formData.registrationNo || 'N/A'}</strong></span>
                        </p>
                    </div>
                </div>

                {/* Score Badges & Academic Groups */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-3 py-1 rounded-xl bg-sky-500/10 border border-[#0284C7]/20 dark:border-[#38BDF8]/20 font-semibold text-[#0284C7] dark:text-[#38BDF8]">
                        {formData.group || 'Science'}
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-slate-700 dark:text-slate-300">
                        HSC Batch: {formData.hscBatch || formData.session || '2026'}
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 font-mono font-bold text-emerald-600 dark:text-[#4ADE80]">
                        ICT: {formData.ictMark ?? 'N/A'}/100
                    </span>
                </div>
            </div>

            {/* Editable Form Grid */}
            <form onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {/* Section 1: Identification & Personal Roots */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-200/80 dark:border-white/10">
                            <User className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                                Student Bio & Parental Info
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {/* ID, Class Roll, RegNo */}
                            <div className="grid grid-cols-3 gap-2.5">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        ID
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            required
                                            value={formData.id || ''}
                                            onChange={(e) => handleInputChange('id', e.target.value)}
                                            className="w-full px-2.5 py-1.5 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200">
                                            {formData.id}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Class Roll
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            required
                                            value={formData.classRoll || formData.roll || ''}
                                            onChange={(e) => handleInputChange('classRoll', e.target.value)}
                                            className="w-full px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold text-[#0284C7] dark:text-[#38BDF8] bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8]"
                                        />
                                    ) : (
                                        <p className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#38BDF8]">
                                            #{formData.classRoll || formData.roll}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Reg No
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={formData.regNo || formData.registrationNo || ''}
                                            onChange={(e) => handleInputChange('regNo', e.target.value)}
                                            className="w-full px-2.5 py-1.5 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs font-mono text-slate-700 dark:text-slate-300">
                                            {formData.regNo || formData.registrationNo || 'N/A'}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Full Name */}
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                    Full Name
                                </label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        required
                                        value={formData.name || ''}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        className="w-full px-3 py-1.5 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                ) : (
                                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                                        {formData.name}
                                    </p>
                                )}
                            </div>

                            {/* Parents Names */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Father&apos;s Name
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={formData.fathersName || ''}
                                            onChange={(e) => handleInputChange('fathersName', e.target.value)}
                                            className="w-full px-3 py-1.5 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs text-slate-700 dark:text-slate-300">
                                            {formData.fathersName || 'Not recorded'}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Mother&apos;s Name
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={formData.mothersName || ''}
                                            onChange={(e) => handleInputChange('mothersName', e.target.value)}
                                            className="w-full px-3 py-1.5 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs text-slate-700 dark:text-slate-300">
                                            {formData.mothersName || 'Not recorded'}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Birth Date, Blood Group */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Birth Date
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="date"
                                            value={formData.birthDate || ''}
                                            onChange={(e) => handleInputChange('birthDate', e.target.value)}
                                            className="w-full px-3 py-1.5 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs font-mono text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                                            <Calendar className="w-3 h-3 text-[#0284C7] dark:text-[#38BDF8]" />
                                            <span>{formData.birthDate || 'N/A'}</span>
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Blood Group
                                    </label>
                                    {isEditing ? (
                                        <select
                                            value={formData.bloodGroup || 'A+'}
                                            onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                                            className="w-full px-3 py-1.5 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white cursor-pointer"
                                        >
                                            {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((bg) => (
                                                <option key={bg} value={bg}>{bg}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        <p className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                                            <Droplet className="w-3 h-3 fill-rose-500 text-rose-500" />
                                            <span>{formData.bloodGroup || 'N/A'}</span>
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Village Name & Hobby */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Village Name / Address
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={formData.villageName || ''}
                                            onChange={(e) => handleInputChange('villageName', e.target.value)}
                                            className="w-full px-3 py-1.5 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5 truncate">
                                            <MapPin className="w-3 h-3 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                                            <span>{formData.villageName || 'N/A'}</span>
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Hobby / Activities
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={formData.hobby || ''}
                                            onChange={(e) => handleInputChange('hobby', e.target.value)}
                                            className="w-full px-3 py-1.5 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5 truncate">
                                            <Heart className="w-3 h-3 text-pink-500 shrink-0" />
                                            <span>{formData.hobby || 'None specified'}</span>
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Contact: Phone & ImageBB Upload Section */}
                            <div className="space-y-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Mobile No
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="tel"
                                            value={formData.mobileNo || formData.phone || ''}
                                            onChange={(e) => handleInputChange('mobileNo', e.target.value)}
                                            className="w-full px-3 py-1.5 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs font-mono text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                                            <Phone className="w-3 h-3 text-[#0284C7] dark:text-[#38BDF8]" />
                                            <span>{formData.mobileNo || formData.phone || 'N/A'}</span>
                                        </p>
                                    )}
                                </div>

                                {/* ImgBB Live File Upload / Preview Controls */}
                                <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-white/10">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400 flex items-center justify-between">
                                        <span>Student Photo (ImgBB Workflow)</span>
                                        {isImgConfirmed && (
                                            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                                                <CheckCircle2 className="w-3 h-3" /> Confirmed &amp; Uploaded
                                            </span>
                                        )}
                                    </label>

                                    {isEditing ? (
                                        <>
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                                className="hidden"
                                            />

                                            {previewUrl ? (
                                                <div className="p-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-800/40 flex flex-col sm:flex-row items-center gap-3.5">
                                                    <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shrink-0 shadow-xs">
                                                        <img
                                                            src={previewUrl}
                                                            alt="Draft Preview"
                                                            className="w-full h-full object-cover"
                                                        />
                                                        {isImgConfirmed && (
                                                            <div className="absolute top-1 right-1 bg-emerald-500 text-white rounded-full p-0.5">
                                                                <Check className="w-2.5 h-2.5" />
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="flex-1 space-y-1.5 text-center sm:text-left min-w-0">
                                                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                                                            {selectedFile?.name || 'Selected Replacement'}
                                                        </p>
                                                        <p className="text-[10px] text-slate-500 dark:text-slate-400">
                                                            {isImgConfirmed
                                                                ? 'Uploaded to ImgBB and queued for profile save.'
                                                                : 'Local preview active. Confirm to upload to ImgBB.'}
                                                        </p>

                                                        <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                                                            {!isImgConfirmed && (
                                                                <button
                                                                    type="button"
                                                                    onClick={handleConfirmUpload}
                                                                    disabled={isUploadingImg}
                                                                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-[11px] font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-2xs cursor-pointer disabled:opacity-50"
                                                                >
                                                                    {isUploadingImg ? (
                                                                        <>
                                                                            <Loader2 className="w-3 h-3 animate-spin" />
                                                                            <span>Uploading...</span>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <UploadCloud className="w-3 h-3" />
                                                                            <span>Confirm &amp; Upload</span>
                                                                        </>
                                                                    )}
                                                                </button>
                                                            )}

                                                            <button
                                                                type="button"
                                                                onClick={() => fileInputRef.current?.click()}
                                                                disabled={isUploadingImg}
                                                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer disabled:opacity-50"
                                                            >
                                                                <span>Change</span>
                                                            </button>

                                                            <button
                                                                type="button"
                                                                onClick={handleRemoveImage}
                                                                disabled={isUploadingImg}
                                                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/30 hover:bg-rose-500/10 cursor-pointer disabled:opacity-50"
                                                            >
                                                                <Trash2 className="w-3 h-3" />
                                                                <span>Cancel Draft</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div
                                                    onClick={() => fileInputRef.current?.click()}
                                                    className="border-2 border-dashed border-slate-200 dark:border-white/10 hover:border-[#0284C7] dark:hover:border-[#38BDF8] rounded-2xl p-4 flex flex-col items-center justify-center gap-1.5 cursor-pointer bg-slate-50/50 dark:bg-white/5 transition-colors"
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center text-[#0284C7] dark:text-[#38BDF8]">
                                                        <ImageIcon className="w-4 h-4" />
                                                    </div>
                                                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                                        Click to select new photo for ImgBB upload
                                                    </p>
                                                    <p className="text-[10px] text-slate-400">
                                                        PNG, JPG, or WEBP (preview first before uploading)
                                                    </p>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate">
                                            {formData.img || 'No custom photo set'}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Academic Career, Boards & GPA */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-200/80 dark:border-white/10">
                            <GraduationCap className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                                Academic History & Benchmarks
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {/* Group & School Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                                            {formData.group || 'Science'}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Previous School Name
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={formData.schoolName || ''}
                                            onChange={(e) => handleInputChange('schoolName', e.target.value)}
                                            className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5 truncate">
                                            <Building2 className="w-3 h-3 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                                            <span>{formData.schoolName || 'Not specified'}</span>
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* SSC Batch & GPA */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        SSC Batch
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={formData.sscBatch || ''}
                                            onChange={(e) => handleInputChange('sscBatch', e.target.value)}
                                            className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs font-mono text-slate-700 dark:text-slate-300">
                                            {formData.sscBatch || 'N/A'}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        SSC GPA
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="number"
                                            step="0.01"
                                            min="0"
                                            max="5.00"
                                            value={formData.sscGpa || ''}
                                            onChange={(e) => handleInputChange('sscGpa', e.target.value)}
                                            className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs font-mono font-bold text-emerald-600 dark:text-[#4ADE80]">
                                            {formData.sscGpa ? `${formData.sscGpa} / 5.00` : 'N/A'}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* HSC Batch & GPA */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        HSC Batch / Session
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={formData.hscBatch || formData.session || ''}
                                            onChange={(e) => handleInputChange('hscBatch', e.target.value)}
                                            className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs font-mono text-slate-700 dark:text-slate-300">
                                            {formData.hscBatch || formData.session || '2026'}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        HSC GPA
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="number"
                                            step="0.01"
                                            min="0"
                                            max="5.00"
                                            value={formData.hscGpa || ''}
                                            onChange={(e) => handleInputChange('hscGpa', e.target.value)}
                                            className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs font-mono font-bold text-emerald-600 dark:text-[#4ADE80]">
                                            {formData.hscGpa ? `${formData.hscGpa} / 5.00` : 'N/A'}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* ICT Mark & Status */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        ICT Mark (0 - 100)
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="number"
                                            min="0"
                                            max="100"
                                            value={formData.ictMark ?? ''}
                                            onChange={(e) => handleInputChange('ictMark', e.target.value)}
                                            className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                        />
                                    ) : (
                                        <p className="text-xs font-mono font-extrabold text-[#0284C7] dark:text-[#38BDF8] flex items-center gap-1.5">
                                            <Award className="w-3.5 h-3.5" />
                                            <span>{formData.ictMark ?? 'Not graded'}</span>
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Enrollment Status
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
                                            {formData.status || 'Active'}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Additional Contact Email */}
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                    Official Email Address
                                </label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        value={formData.email || ''}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                ) : (
                                    <p className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5 truncate">
                                        <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                                        <span>{formData.email || 'None provided'}</span>
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
                            Editing mode active. Review all personal and academic metrics before saving.
                        </span>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={handleCancelEdit}
                                disabled={isSaving || isUploadingImg}
                                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer disabled:opacity-50"
                            >
                                Discard
                            </button>
                            <button
                                type="submit"
                                disabled={isSaving || isUploadingImg}
                                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xs cursor-pointer disabled:opacity-50"
                            >
                                {isSaving ? (
                                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                ) : (
                                    <Check className="w-3.5 h-3.5" />
                                )}
                                <span>Save All Records</span>
                            </button>
                        </div>
                    </div>
                )}
            </form>

            {/* Image Preview Modal */}
            {showImageModal && currentHeroPhoto && (
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
                                src={currentHeroPhoto}
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