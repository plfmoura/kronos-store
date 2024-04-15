'use client';

import { useAppStore } from "@/store/AppStore";

export default function UserInfo() {
    const { user } = useAppStore();

    console.log(user);
    
    return (
        <div>

        </div>
    )
}
