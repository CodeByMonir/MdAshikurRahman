import Register from "@/Components/Authentication/Reg";

export const metadata = {
    title: 'Registration',
    description: 'Registration page for the application',
};

const page = () => {
    return (
        <div>
            <Register />
        </div>
    );
};

export default page;