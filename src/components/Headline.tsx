'use client';

import { useProductsStore } from "@/store/ProductsStore"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Headline() {
    const products = useProductsStore((state) => state.products);
    const item = products[9];

    const router = useRouter();

    return (
        <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
            {item && (
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
                        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                            <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                                Discover Time Like Never Before with {item.name}
                            </p>

                            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                                Unleash Style and Precision with the <span className="text-indigo-500">{item.name}</span>
                            </h1>

                            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                                Explore the essence of timekeeping with our exquisite {item.name} collection.
                                Captivate attention with every tick.
                            </p>

                            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                                <button
                                    onClick={() => router.push(`/products/${item.id}`)}
                                    className="bg-gray-700 hover:bg-gray-900 transition-all text-white font-semibold px-8 py-2 rounded-md"
                                >
                                    Shop Now
                                </button>

                                <button
                                    className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                                >
                                    Speak to an Expert
                                </button>
                            </div>

                        </div>
                        <div className="h-4/5 sm:h-96 overflow-hidden rounded-lg shadow-lg lg:h-auto lg:w-full xl:w-5/12">
                            <Image
                                src={item.image}
                                loading="lazy"
                                width={500}
                                height={500}
                                alt="Photo by Fakurian Design"
                                className="h-full w-full sm:object-contain lg:object-cover object-center"
                            />
                        </div>
                    </section>
                </div>
            )}
        </div>

    )
}
