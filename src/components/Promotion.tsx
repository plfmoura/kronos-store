/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Promotion() {
    return (
        <div className="bg-white my-4">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
                    <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                        <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
                            Black November
                            <br />
                            70% OFF
                        </h2>

                        <p className="mb-8 max-w-md text-gray-400">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
                            laudantium in distinctio inventore explicabo non doloribus illo
                            nesciunt quas tempore? Eaque minus illo, deleniti odio impedit
                            quos aliquid hic aperiam?
                        </p>

                        <div className="mt-auto">
                            <a
                                href="#"
                                className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                        <img
                            src="/assets/men-watch.jpeg"
                            loading="lazy"
                            alt="Photo by Dom Hill"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
