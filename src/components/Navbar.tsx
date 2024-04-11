'use client';

import { useProductsStore } from "@/store/ProductsStore";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link"

export default function Navbar() {
    const cart = useProductsStore((state) => state.cart);
    const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <nav className="flex h-14 w-full items-center px-4 md:px-6 dark:bg-gray-900">
            <Link className="mr-auto" href="/">
                <h1 className="text-4xl font-bold">Kronos Store</h1>
                <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="flex items-center space-x-4">
                <Link
                    className="font-medium text-sm transition-colors hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                    href="/"
                >
                    Products
                </Link>
                <Link
                    className="font-medium text-sm transition-colors hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                    href="#"
                >
                    About Us
                </Link>
                <Link
                    className="font-medium text-sm transition-colors hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                    href="#"
                >
                    Contact
                </Link>
                <Link
                    className="font-medium text-sm transition-colors hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                    href="/cart"
                >
                    {
                        cartTotal === 0 ? <ShoppingCartIcon /> : (
                            <p className="flex gap-2 text-lg font-bold"><ShoppingCartIcon />
                                <span>R${cartTotal.toFixed(2).replace('.', ',')}</span>
                            </p>
                        )
                    }
                </Link>
            </nav>
        </nav>
    )
}