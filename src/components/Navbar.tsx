'use client';

import { useAppStore } from "@/store/AppStore";
import { useProductsStore } from "@/store/ProductsStore";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link"

export default function Navbar() {
    const cart = useProductsStore((state) => state.cart);
    const cart_count = cart.length;
    const { showCart, user, setUser, showSignIn } = useAppStore();

    const handleLogout = () => {
        setUser(null);
    };

    const nav_content = [
        {
            title: 'Products',
            link: '/products'
        },
        {
            title: 'About Us',
            link: '/about'
        },
        {
            title: 'Contact',
            link: '#'
        },
        {
            title: !user ? 'Login' : 'Logout',
            link: '#',
            onClick: !user ? showSignIn : handleLogout
        },
    ];

    return (
        <nav className="flex h-14 w-full items-center px-4 md:px-6 dark:bg-gray-900">
            <Link className="mr-auto" href="/">
                <h1 className="text-4xl font-bold">Kronos Store</h1>
            </Link>
            <nav className="flex items-center space-x-4">
                {nav_content.map((item, index) => (
                    <Link
                        key={index}
                        className="font-medium text-sm transition-colors hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                        href={item.link}
                        onClick={item.onClick}
                    >
                        {item.title}
                    </Link>
                ))}
                <Link
                    className="font-medium text-sm transition-colors hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                    href="#"
                    onClick={showCart}
                >
                    <p className="flex gap-2 text-lg font-bold relative text-indigo-500"><ShoppingCartIcon />
                        {
                            cart_count > 0 &&
                            <span className="flex items-center justify-center text-xs text-gray-100 absolute bg-red-500 w-[19px] h-[19px] rounded-full top-[-5px] right-[-5px]">
                                {cart_count}
                            </span>
                        }
                    </p>
                </Link>
            </nav>
        </nav>
    )
}