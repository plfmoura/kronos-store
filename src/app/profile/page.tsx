'use client';

import UpdatePassword from "@/components/auth/UpdatePassword";
import UserInfo from "@/components/profile/UserInfo";

export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center p-10">
            <UserInfo />
            <UpdatePassword />
        </main>
    )
}
