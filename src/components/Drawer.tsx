'use client';

import { Card } from "@/components/ui/card"

import { useAppStore } from '@/store/AppStore';
import Cart from './Cart';
import SignUp from "./auth/SingUp";
import SignIn from "./auth/SignIn";
import { useEffect } from "react";

export default function Drawer() {
    const { drawerOpen, closeDrawer, drawerContent, user, showCart } = useAppStore();

    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [drawerOpen]);

    return (
        <>
            <Card className={
                `fixed z-[51] top-0 right-0 h-full w-full sm:w-[70%] md:w-[60%] lg:w-[40%] xl:w-1/3 transform transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'
                }`
            } >
                {
                    drawerContent === 'cart' ? (
                        <Cart
                            onClose={() => closeDrawer()}
                        />
                    ) : drawerContent === 'signin' ? (
                        <SignIn
                            onClose={() => closeDrawer()}
                        />
                    ) : drawerContent === 'singup' ? (
                        <SignUp
                            onClose={() => closeDrawer()}
                        />
                    ) : null
                }
            </ Card>
            {drawerOpen && <DrawerOverlay />}
        </>
    )
};

const DrawerOverlay = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50" />
    )
};