// components/Navbar.jsx
"use client";

import { useAuth } from "@/Context/AuthContext";


export default function TestPage() {
    const { user, loading, error, refreshSession } = useAuth();

    if (loading) return <p>Loading...</p>;

    if (error) {
        return (
            <div>
                <p>সেশন লোড হতে সমস্যা হয়েছে: {error.message}</p>
                <button onClick={refreshSession}>Try Again</button>
            </div>
        );
    }

    if (!user) return <p>লগইন করা নেই</p>;

    return (
        <div>
            <p>স্বাগতম, {user.name}!</p>
            <p>Email: {user.email}</p>
        </div>
    );
}