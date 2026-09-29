import DashboardSidebar from '@/Components/Dashboard/Sidebar/Sidebar';

export const layout = ({ children }) => {
    return (
        <main className = " flex min-h-screen h-full">
            <DashboardSidebar />
            < div className = 'flex-1 mx-3.5 my-10' > { children }</div >
        </main>
    );
};

export default layout;