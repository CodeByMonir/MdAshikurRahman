'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    Check,
    CheckCircle2,
    GraduationCap,
    Home,
    Image as ImageIcon,
    Loader2,
    RotateCcw,
    Sparkles,
    Trash2,
    UploadCloud,
    User,
    UserPlus,
} from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialFormData = {
    id: '',
    classRoll: '',
    regNo: '',
    name: '',
    group: 'Science',
    fathersName: '',
    mothersName: '',
    birthDate: '',
    bloodGroup: 'A+',
    villageName: '',
    hobby: '',
    mobileNo: '',
    email: '',
    img: '',
    schoolName: '',
    sscBatch: '2024',
    sscGpa: '',
    hscBatch: '2026',
    hscGpa: '',
    ictMark: '',
    status: 'Active',
};

export default function AddStudentPage() {
    const router = useRouter();
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ImageBB Preview & Temporary State
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [isUploadingImg, setIsUploadingImg] = useState(false);
    const [isImgConfirmed, setIsImgConfirmed] = useState(false);
    const fileInputRef = useRef(null);

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Handle Local File Selection (Temporary Object URL for preview)
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            toast.error('Please select a valid image file (PNG, JPG, WEBP).');
            return;
        }

        // Clean up previous blob URL if exists
        if (previewUrl && previewUrl.startsWith('blob:')) {
            URL.revokeObjectURL(previewUrl);
        }

        const objectUrl = URL.createObjectURL(file);
        setSelectedFile(file);
        setPreviewUrl(objectUrl);
        setIsImgConfirmed(false);
        setFormData((prev) => ({ ...prev, img: '' }));
    };

    // Remove or Change selected image
    const handleRemoveImage = () => {
        if (previewUrl && previewUrl.startsWith('blob:')) {
            URL.revokeObjectURL(previewUrl);
        }
        setSelectedFile(null);
        setPreviewUrl('');
        setIsImgConfirmed(false);
        setFormData((prev) => ({ ...prev, img: '' }));
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // Upload to ImgBB only after user clicks "Confirm & Upload"
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
                throw new Error(data.error?.message || 'Failed to upload to ImgBB');
            }
        } catch (err) {
            console.error('ImgBB Upload Error:', err);
            toast.error(err.message || 'Image upload failed. Please try again.');
        } finally {
            setIsUploadingImg(false);
        }
    };

    const handleReset = () => {
        handleRemoveImage();
        setFormData(initialFormData);
        toast.info('Form cleared.');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Warning if an image was selected but not confirmed/uploaded
        if (selectedFile && !isImgConfirmed) {
            toast.warning('Please confirm and upload your selected image before submitting.');
            return;
        }

        setIsSubmitting(true);

        try {
            console.log('Submitted Student Record:', formData);

            setTimeout(() => {
                setIsSubmitting(false);
                toast.success('Student added successfully!');
                setTimeout(() => {
                    router.push('/dashboard/students');
                }, 1000);
            }, 700);
        } catch {
            setIsSubmitting(false);
            toast.error('Failed to add student. Please retry.');
        }
    };

    return (
        <div className="w-full space-y-6 select-none max-w-5xl mx-auto pb-10">
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} theme="colored" />

            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 dark:border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => router.push('/dashboard/students')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 text-[10px] sm:text-xs font-semibold hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors cursor-pointer"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                        <span>Student Registry</span>
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
                    <span className="text-[10px] sm:text-xs font-mono text-[#0284C7] dark:text-[#38BDF8] font-semibold bg-sky-500/10 px-2.5 py-1 rounded-lg border border-[#0284C7]/20">
                        Enrollment Portal
                    </span>
                </div>
            </div>

            {/* Header Title */}
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#38BDF8] animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
                        Registration Form
                    </span>
                </div>
                <h1 className="text-lg sm:text-2xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                    Add New Student Profile
                </h1>
                <p className="text-[10px] sm:text-xs text-[#64748B] dark:text-[#94A3B8]">
                    Fill in personal details, identification, residential address, academic records, and college scores to register.
                </p>
            </div>

            {/* Student Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {/* Section 1: Basic & Personal Info */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-200/80 dark:border-white/10">
                            <User className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                                Personal Identification
                            </h2>
                        </div>

                        <div className="space-y-3">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        ID <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. std-122"
                                        value={formData.id}
                                        onChange={(e) => handleInputChange('id', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Class Roll <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. 122"
                                        value={formData.classRoll}
                                        onChange={(e) => handleInputChange('classRoll', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Registration No
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. 2024881042"
                                        value={formData.regNo}
                                        onChange={(e) => handleInputChange('regNo', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Full Name <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Hasibul Hasan"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="e.g. hasib.ndc@gmail.com"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Father&apos;s Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Enamul Haque"
                                        value={formData.fathersName}
                                        onChange={(e) => handleInputChange('fathersName', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Mother&apos;s Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Feroza Begum"
                                        value={formData.mothersName}
                                        onChange={(e) => handleInputChange('mothersName', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Birth Date
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.birthDate}
                                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Blood Group
                                    </label>
                                    <select
                                        value={formData.bloodGroup}
                                        onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white cursor-pointer"
                                    >
                                        {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((bg) => (
                                            <option key={bg} value={bg}>{bg}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-span-2 sm:col-span-1 space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Mobile No <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="+880 1822-567890"
                                        value={formData.mobileNo}
                                        onChange={(e) => handleInputChange('mobileNo', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Village Name / Address
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Rohitpur, Keraniganj"
                                        value={formData.villageName}
                                        onChange={(e) => handleInputChange('villageName', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Hobby / Extra-curricular
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Table Tennis & Spreadsheets"
                                        value={formData.hobby}
                                        onChange={(e) => handleInputChange('hobby', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>
                            </div>

                            {/* ImageBB Upload & Live Preview System */}
                            <div className="space-y-2 pt-1 border-t border-slate-200/60 dark:border-white/10">
                                <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400 flex items-center justify-between">
                                    <span>Student Photo (ImgBB Upload)</span>
                                    {isImgConfirmed && (
                                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                                            <CheckCircle2 className="w-3 h-3" /> Confirmed &amp; Uploaded
                                        </span>
                                    )}
                                </label>

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
                                                alt="Preview"
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
                                                {selectedFile?.name || 'Selected Image'}
                                            </p>
                                            <p className="text-[10px] text-slate-500 dark:text-slate-400">
                                                {isImgConfirmed
                                                    ? 'Image successfully stored on ImgBB.'
                                                    : 'Previewing locally. Confirm to upload to ImgBB.'}
                                            </p>

                                            <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                                                {!isImgConfirmed ? (
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
                                                ) : null}

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
                                                    <span>Remove</span>
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
                                            Click to browse student photo
                                        </p>
                                        <p className="text-[10px] text-slate-400">
                                            PNG, JPG or WEBP (preview first before uploading)
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Academic & Institutional Performance */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-200/80 dark:border-white/10">
                            <GraduationCap className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                                Academic Background & Scores
                            </h2>
                        </div>

                        <div className="space-y-3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Group <span className="text-rose-500">*</span>
                                    </label>
                                    <select
                                        value={formData.group}
                                        onChange={(e) => handleInputChange('group', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white cursor-pointer"
                                    >
                                        <option value="Science">Science</option>
                                        <option value="Humanities">Humanities</option>
                                        <option value="Business Studies">Business Studies</option>
                                    </select>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        School Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Nayabazar High School"
                                        value={formData.schoolName}
                                        onChange={(e) => handleInputChange('schoolName', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>
                            </div>

                            {/* SSC Records: Batch & GPA */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        SSC Batch
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. 2024"
                                        value={formData.sscBatch}
                                        onChange={(e) => handleInputChange('sscBatch', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        SSC GPA (Out of 5.00)
                                    </label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        max="5.00"
                                        placeholder="4.85"
                                        value={formData.sscGpa}
                                        onChange={(e) => handleInputChange('sscGpa', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>
                            </div>

                            {/* HSC Records: Batch & GPA */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        HSC Batch <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. 2026"
                                        value={formData.hscBatch}
                                        onChange={(e) => handleInputChange('hscBatch', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        HSC GPA
                                    </label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        max="5.00"
                                        placeholder="4.78"
                                        value={formData.hscGpa}
                                        onChange={(e) => handleInputChange('hscGpa', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>
                            </div>

                            {/* ICT Score & Status */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        ICT Mark (0 - 100)
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        max="100"
                                        placeholder="92"
                                        value={formData.ictMark}
                                        onChange={(e) => handleInputChange('ictMark', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                                        Enrollment Status
                                    </label>
                                    <select
                                        value={formData.status}
                                        onChange={(e) => handleInputChange('status', e.target.value)}
                                        className="w-full px-3 py-1.5 sm:py-2 rounded-xl text-xs bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#38BDF8] text-slate-900 dark:text-white cursor-pointer"
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>

                            <div className="p-3 rounded-xl border border-sky-500/20 bg-sky-500/5 space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
                                <div className="flex items-center gap-1.5 font-semibold text-[#0284C7] dark:text-[#38BDF8]">
                                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                                    <span>Directory Matching</span>
                                </div>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                                    Mapped to student entity fields: <code>id</code>, <code>classRoll</code>, <code>regNo</code>, <code>sscBatch</code>, <code>hscBatch</code>, and <code>ictMark</code>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Action Controls */}
                <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 text-center sm:text-left">
                        Fields marked with <span className="text-rose-500 font-bold">*</span> are mandatory for registry validation.
                    </span>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                            type="button"
                            onClick={handleReset}
                            disabled={isSubmitting}
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer disabled:opacity-50"
                        >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Reset</span>
                        </button>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-linear-to-r from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] dark:text-[#090D16] shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                    <span>Saving Record...</span>
                                </>
                            ) : (
                                <>
                                    <UserPlus className="w-3.5 h-3.5" />
                                    <span>Enroll Student</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}