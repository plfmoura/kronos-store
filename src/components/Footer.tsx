import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
            <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
                    <div className="col-span-full lg:col-span-2">
                        <div className="mb-4 lg:-mt-2">
                            <Link className="mr-auto" href="/">
                                <h1 className="text-4xl font-bold">Kronos Store</h1>
                            </Link>
                        </div>

                        <p className="mb-6 text-gray-500 sm:pr-8">
                            Time for elegance and precision. Discover the best in imported watches.
                            Follow us to stay in sync with style. © Kronos Store 2024

                        </p>

                        <div className="flex gap-4">
                            <button
                                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                            >
                                <svg
                                    className="h-5 w-5"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </button>

                            <button
                                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                            >
                                <svg
                                    className="h-5 w-5"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </button>

                            <button
                                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                            >
                                <svg
                                    className="h-5 w-5"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#6f6d6d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp</title> <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </g></svg>

                                </svg>
                            </button>
                            <button
                                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                            >
                                <svg
                                    className="h-5 w-5"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="" stroke-linejoin="round" stroke-width="22" d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"></path></g></svg>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                            Products
                        </div>

                        <nav className="flex flex-col gap-4">
                            <div>
                                <button className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                    Summary
                                </button>
                            </div>

                            <div>
                                <button className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                    Solutions
                                </button>
                            </div>

                            <div>
                                <button className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                    Pricing
                                </button>
                            </div>

                            <div>
                                <button className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                    Customers
                                </button>
                            </div>
                        </nav>
                    </div>

                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                            Company
                        </div>

                        <nav className="flex flex-col gap-4">
                            <Link href="/about">
                                <button className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                    About
                                </button>
                            </Link>

                            <div>
                                <button className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                    Investors
                                </button>
                            </div>

                            <div>
                                <button className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                    Vacancies
                                </button>
                            </div>

                        </nav>
                    </div>

                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                            Support
                        </div>

                        <nav className="flex flex-col gap-4">
                            <div>
                                <button className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                    Contact
                                </button>
                            </div>
                            <div>
                                <button className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                    FAQ
                                </button>
                            </div>
                            <div>
                                <button className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                    Technical support
                                </button>
                            </div>
                            <div>
                                <button className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                    Feedback
                                </button>
                            </div>
                        </nav>
                    </div>

                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                            Documentation
                        </div>

                        <nav className="flex flex-col gap-4">
                            <div>
                                <button className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                    Terms of use
                                </button>
                            </div>

                            <div>
                                <button className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                    Privacy Policy
                                </button>
                            </div>

                            <div>
                                <button className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                    Cookies policy
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="border-t py-8 text-center text-sm text-gray-400">
                    © 2023 - Kronos Store, Inc. All rights reserved.
                </div>
            </footer>
        </div>
    )
};
