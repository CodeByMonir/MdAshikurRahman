import UnauthorizedPage from '@/Components/Authentication/UnAuthorized/Unauthorized';
import React from 'react';

export const metadata = {
    title: "403 Unauthorized",
    description : "Access denied.You do not have sufficient academic role clearance or administrative permissions to access this institutional resource."
}

const page = () => {
    return (
        <div>
            <UnauthorizedPage />
        </div>
    );
};

export default page;