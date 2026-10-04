import DashboardSidebar from '@/Components/Dashboard/Sidebar/Sidebar';

export const Layout = ({ children }) => {
    return (
        <main className="flex h-dvh w-full overflow-hidden">
            <aside className="h-full shrink-0">
                <DashboardSidebar />
            </aside>

            {/* Keeps scroll behavior, but hides the visible scrollbar */}
            <div className="flex-1 h-full min-w-0 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="mx-3.5 my-10">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default Layout;