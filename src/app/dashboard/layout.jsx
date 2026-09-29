import DashboardSidebar from '@/Components/Dashboard/Sidebar/Sidebar';

export const layout = ({ children }) => {
    return (
        <main className = " flex min-h-screen h-full">
            < div className = 'flex-1' > { children }</div >
            <DashboardSidebar />
        </main>
    );
};

export default layout;