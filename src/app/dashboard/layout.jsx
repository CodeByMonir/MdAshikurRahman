"use client";

import DashboardSidebar from '@/Components/Dashboard/Sidebar/Sidebar';
import { Loader2 } from 'lucide-react';
import { authClient } from '../lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const Layout = ({ children }) => {

    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    useEffect(() => {
        if (!isPending && !session?.user) {
            router.replace('/unauthorized');
        }
    }, [session, isPending, router]);

    if (isPending) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-2 bg-slate-900 text-white">
                <Loader2 className="w-8 h-8 animate-spin text-[#38BDF8]" />
                <p className="text-xs text-slate-400 font-medium">Validating credentials...</p>
            </div>
        );
    }

    if (!session?.user) {
        return null;
    }

    return (
        <main className="flex h-dvh w-full overflow-hidden">
            <aside className="h-full shrink-0">
                <DashboardSidebar />
            </aside>

            {/* Keeps scroll behavior, but hides the visible scrollbar */}
            <div className="flex-1 h-full min-w-0 overflow-y-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="mx-3.5 my-10">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default Layout;