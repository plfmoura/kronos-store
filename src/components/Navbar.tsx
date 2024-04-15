'use client';

import { supabase } from "@/lib/supabase";
import { useAppStore } from "@/store/AppStore";
import { useProductsStore } from "@/store/ProductsStore";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link"
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Menubar } from "@radix-ui/react-menubar";
import { MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "./ui/menubar";
import { ExitIcon } from "@radix-ui/react-icons";

export default function Navbar() {
    const cart = useProductsStore((state) => state.cart);
    const cart_count = cart.length;
    const { showCart, user, setUser, showSignIn } = useAppStore();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            let { error } = await supabase.auth.signOut();
            if (error) console.log(error);
            setUser(null);
            router.refresh();
        } catch (error) {
            console.log(error);
        }
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
    ];

    return (
        <nav className="flex h-14 w-full items-center justify-between px-4 md:px-6 dark:bg-gray-900">
            <Link className="mr-auto" href="/">
                <h1 className="text-4xl font-bold">Kronos Store</h1>
            </Link>
            <nav className="flex items-center space-x-4">
                {nav_content.map((item, index) => (
                    <Link
                        key={index}
                        className="font-medium text-md transition-colors hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                        href={item.link}
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
                {!user ?
                    <Button
                        className="text-md bg-gray-700 hover:bg-gray-900 transition-all text-white font-semibold"
                        onClick={showSignIn}
                    >
                        Login
                    </Button>
                    :
                    <ProfileMenu
                        onLogout={handleLogout}
                    />
                }
            </nav>
        </nav>
    )
}

const ProfileMenu = ({
    onLogout,
}: {
    onLogout?: () => void;
}) => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </MenubarTrigger>
                <MenubarContent  className="mr-6">
                    <Link href="/profile">
                        <MenubarItem>Profile</MenubarItem>
                    </Link>
                    <Link href="/">
                        <MenubarItem>Purchases</MenubarItem>
                    </Link>
                    <MenubarSeparator />
                    <MenubarItem onClick={onLogout}>Logout <ExitIcon className="ml-auto" /></MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>



    );
}