'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Award,
    Bell,
    ChevronLeft,
    ChevronRight,
    GraduationCap,
    Home,
    LayoutDashboard,
    LogOut,
    Mail,
    Menu,
    MessageSquare,
    Newspaper,
    Settings,
    Shield,
    User,
    Users,
    X,
} from 'lucide-react';

export default function DashboardSidebar() {
    const pathname = usePathname() || '/dashboard';
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const primaryNav = [
        { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
        { label: 'Academic Notices', href: '/dashboard/notices', icon: Bell, badge: '4' },
        { label: 'Student Reviews', href: '/dashboard/reviews', icon: MessageSquare, badge: 'New' },
        { label: 'Achievements', href: '/dashboard/achievements', icon: Award },
        { label: 'Batch Directory', href: '/dashboard/batches', icon: GraduationCap },
    ];

    const managementNav = [
        { label: 'Student Registry', href: '/dashboard/students', icon: Users },
        { label: 'Faculty & Staff', href: '/dashboard/faculty', icon: Shield },
        { label: 'Circular Publisher', href: '/dashboard/circulars', icon: Newspaper },
        { label: 'Inbox Inquiries', href: '/dashboard/messages', icon: Mail, badge: '12' },
    ];

    const bottomNav = [
        { label: 'System Settings', href: '/dashboard/settings', icon: Settings },
    ];

    const isActive = (href) => {
        if (href === '/dashboard') return pathname === '/dashboard';
        return pathname.startsWith(href);
    };

    const renderNavGroup = (title, items) => (
        <div className="space-y-1 w-full">
            {title && !collapsed && (
                <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {title}
                </p>
            )}
            <ul className="space-y-1 w-full">
                {items.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);

                    return (
                        <li key={item.href} className="w-full flex justify-center">
                            <Link
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                title={collapsed ? item.label : undefined}
                                className={`group flex items-center rounded-xl text-xs font-semibold transition-all duration-200 ${collapsed
                                        ? 'w-10 h-10 justify-center p-0'
                                        : 'w-full justify-between px-3 py-2'
                                    } ${active
                                        ? 'bg-sky-500/10 border border-[#0284C7]/30 dark:border-[#38BDF8]/30 text-[#0284C7] dark:text-[#38BDF8]'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-white/5 border border-transparent'
                                    }`}
                            >
                                <div className={`flex items-center gap-2.5 min-w-0 ${collapsed ? 'justify-center mx-auto' : ''}`}>
                                    <Icon
                                        className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${active
                                                ? 'text-[#0284C7] dark:text-[#38BDF8]'
                                                : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200'
                                            }`}
                                    />
                                    {!collapsed && (
                                        <span className="truncate leading-none">{item.label}</span>
                                    )}
                                </div>

                                {!collapsed && item.badge && (
                                    <span
                                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 font-mono ${active
                                                ? 'bg-[#0284C7] dark:bg-[#38BDF8] text-white dark:text-slate-950'
                                                : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                                            }`}
                                    >
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );

    const sidebarContent = (
        <div className={`flex flex-col h-full justify-between select-none ${collapsed ? 'p-2' : 'p-3.5'}`}>
            <style jsx>{`
                .sidebar-scroll::-webkit-scrollbar {
                    width: 4px;
                }
                .sidebar-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .sidebar-scroll::-webkit-scrollbar-thumb {
                    background: rgba(148, 163, 184, 0.2);
                    border-radius: 9999px;
                }
                .sidebar-scroll::-webkit-scrollbar-thumb:hover {
                    background: rgba(56, 189, 248, 0.4);
                }
            `}</style>

            {/* Header Brand */}
            <div className="space-y-4">
                <div className={`flex items-center ${collapsed ? 'flex-col gap-2 justify-center' : 'justify-between px-1'}`}>
                    <Link
                        href="/"
                        className={`flex items-center gap-2.5 group overflow-hidden ${collapsed ? 'justify-center mx-auto' : ''}`}
                    >
                        <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-[#0284C7] to-[#16A34A] dark:from-[#38BDF8] dark:to-[#4ADE80] flex items-center justify-center text-white dark:text-slate-950 font-black text-xs shadow-xs shrink-0 mx-auto">
                            AR
                        </div>
                        {!collapsed && (
                            <div className="overflow-hidden min-w-0">
                                <p className="text-[12px] sm:text-[14px] font-bold text-slate-900 dark:text-white leading-tight truncate">
                                    Engr. Ashikur
                                </p>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">
                                    ICT Faculty Portal
                                </p>
                            </div>
                        )}
                    </Link>

                    {/* Desktop Collapse Toggle */}
                    <button
                        type="button"
                        onClick={() => setCollapsed(!collapsed)}
                        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                        className={`hidden md:inline-flex p-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors cursor-pointer ${collapsed ? 'mx-auto' : ''
                            }`}
                    >
                        {collapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
                    </button>

                    {/* Mobile Close Button */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(false)}
                        className="md:hidden p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Institution Status Indicator */}
                {!collapsed && (
                    <div className="mx-1 px-3 py-2 rounded-xl border border-sky-500/20 bg-sky-500/5 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 min-w-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                            <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-300 truncate">
                                NDC Sheikh Russel Lab
                            </span>
                        </div>
                        <span className="text-[9px] font-mono font-bold text-[#0284C7] dark:text-[#38BDF8] shrink-0">
                            v2.4
                        </span>
                    </div>
                )}

                {/* Nav Groupings with Styled Scrollbar */}
                <div className="sidebar-scroll space-y-4 pt-1 overflow-y-auto max-h-[calc(100vh-270px)] pr-0.5">
                    {renderNavGroup('Academics', primaryNav)}
                    {renderNavGroup('Administration', managementNav)}
                    {renderNavGroup('Settings', bottomNav)}
                </div>
            </div>

            {/* User Profile & Footer Actions */}
            <div className="pt-3 border-t border-slate-200/80 dark:border-white/10 space-y-2">
                <div
                    className={`flex items-center rounded-xl bg-slate-50/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 ${collapsed ? 'w-10 h-10 p-0 justify-center mx-auto' : 'p-2 gap-2.5'
                        }`}
                >
                    <div className="w-7 h-7 rounded-full bg-[#0284C7]/20 border border-[#0284C7] dark:border-[#38BDF8] flex items-center justify-center text-[#0284C7] dark:text-[#38BDF8] font-bold text-xs shrink-0 mx-auto">
                        <User className="w-3.5 h-3.5" />
                    </div>
                    {!collapsed && (
                        <div className="min-w-0 flex-1">
                            <p className="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate leading-tight">
                                Md. Ashikur Rahman
                            </p>
                            <p className="text-[9px] text-slate-500 dark:text-slate-400 font-mono truncate">
                                ashiksirict@gmail.com
                            </p>
                        </div>
                    )}
                </div>

                {/* Action Row */}
                <div className={`flex items-center gap-1.5 ${collapsed ? 'flex-col justify-center' : 'justify-between'}`}>
                    <Link
                        href="/"
                        title="Back to Public Site"
                        className={`inline-flex items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 text-[10px] font-semibold text-slate-600 dark:text-slate-300 hover:border-[#0284C7] dark:hover:border-[#38BDF8] transition-colors ${collapsed ? 'w-10 h-10 p-0 mx-auto' : 'flex-1 py-1.5 px-2 gap-1.5'
                            }`}
                    >
                        <Home className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                        {!collapsed && <span>Public Home</span>}
                    </Link>

                    <button
                        type="button"
                        onClick={() => {
                            if (window.confirm('Log out from session?')) {
                                window.location.href = '/login';
                            }
                        }}
                        title="Sign Out"
                        className={`inline-flex items-center justify-center rounded-xl border border-rose-500/20 text-rose-500 hover:bg-rose-500/10 transition-colors cursor-pointer shrink-0 ${collapsed ? 'w-10 h-10 p-0 mx-auto' : 'p-2'
                            }`}
                    >
                        <LogOut className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile Top Navbar Trigger */}
            <div className="md:hidden fixed bottom-0 inset-x-0 z-999 h-12 px-3 border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#090D16]/80 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => setMobileOpen(true)}
                        className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"
                        aria-label="Open sidebar"
                    >
                        <Menu className="w-4 h-4" />
                    </button>
                    <span className="text-[12px] font-bold text-slate-900 dark:text-white">
                        Faculty Dashboard
                    </span>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#0284C7]/20 border border-[#0284C7] dark:border-[#38BDF8] flex items-center justify-center text-[#0284C7] dark:text-[#38BDF8] text-[10px] font-bold">
                    AR
                </div>
            </div>

            {/* Mobile Drawer Backdrop */}
            {mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    className="md:hidden fixed inset-0 z-[9998] bg-black/60 backdrop-blur-xs"
                />
            )}

            {/* Mobile Off-Canvas Drawer */}
            <aside
                className={`md:hidden mt-10 fixed inset-y-0 left-0 z-[9999] w-64 bg-white/95 dark:bg-[#090D16]/95 border-r border-slate-200 dark:border-white/10 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {sidebarContent}
            </aside>

            {/* Desktop Fixed/Collapsible Sidebar */}
            <aside
                className={`hidden md:block sticky top-0 h-screen shrink-0 border-r border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-[#090D16]/60 backdrop-blur-xl transition-all duration-300 z-30 ${collapsed ? 'w-[68px]' : 'w-64'
                    }`}
            >
                {sidebarContent}
            </aside>
        </>
    );
}