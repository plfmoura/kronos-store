'use client';

import { Card } from "@/components/ui/card"

import { useAppStore } from '@/store/AppStore';
import Cart from './Cart';

export default function Drawer() {
    const { drawerOpen, setDrawerOpen } = useAppStore();

    return (
        <Card className={
            `fixed top-0 right-0 h-full w-full sm:w-[70%] md:w-[60%] lg:w-[40%] xl:w-1/3 transform transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'
            }`
        } >
            <Cart 
                onClose={() => setDrawerOpen(false)}
            />
        </ Card>
    )
};