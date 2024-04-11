import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex h-14 w-full items-center px-4 md:px-6 dark:bg-gray-900">
            <Link className="mr-auto" href="/">
                <h1 className="text-4xl font-bold font-mono">Imicta Clock Store</h1>
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
            </nav>
        </nav>
    )
}