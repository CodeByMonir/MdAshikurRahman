import LoginPage from "@/Components/Authentication/Login";

export const metadata = {
    title: 'Login',
    description: 'Login page for the application',
};

const page = () => {
    return (
        <div>
            <LoginPage />
        </div>
    );
};

export default page;