'use client';

import React from 'react'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckIcon, MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons"

import { useAppStore } from '@/store/AppStore';
import { ProductsItem, useProductsStore } from '@/store/ProductsStore';
import { Separator } from './ui/separator';
import Image from 'next/image';

export default function Drawer() {
    const { drawerOpen, setDrawerOpen } = useAppStore();
    const { cart } = useProductsStore((state) => state);

    return (
        <Card className={
            `fixed top-0 right-0 h-full w-full sm:w-[70%] md:w-[60%] lg:w-[40%] xl:w-1/3 transform transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'
            }`
        } >
            <CardHeader className='h-[10%]'>
                <CardTitle>Shopping Cart</CardTitle>
                <CardDescription>Your watches</CardDescription>
                <Button
                    className="absolute top-2 right-2"
                    onClick={() => setDrawerOpen(false)}
                    size="icon"
                    variant="ghost"
                >
                    <span>Close</span>
                </Button>
            </CardHeader>
            <CardContent>
                {cart.length > 0 ? (
                    <>
                        <CartProductsList
                            data={cart}
                        />
                        <CartProductsInfo />
                    </>
                ) : (
                    <div className="flex items-center justify-center mt-12 h-full">
                        <h2 className="text-lg font-semibold">Your cart is empty</h2>
                    </div>
                )}

            </CardContent>
        </ Card>
    )
}

const CartProductsList = ({
    data,
}: {
    data: ProductsItem[];
}) => {
    const { removeFromCart } = useProductsStore((state) => state);

    return (
        <div className="grid gap-4 w-full max-h-[60vh] overflow-y-scroll pr-4 my-4">
            {data.map((item) => (
                <>
                    <div className="flex items-center gap-4" key={item.id}>
                        <div className="flex items-center gap-4">
                            <Image
                                alt={item.name}
                                className="rounded-lg aspect-square object-cover"
                                height={100}
                                src={item.image}
                                width={100}
                            />
                            <div className="grid gap-1.5">
                                <h2 className="font-semibold text-lg sm:text-xl">{item.name}</h2>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-0.5">
                                        <CheckIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                        <span className="text-gray-500 dark:text-gray-400">In Stock</span>
                                    </div>
                                    <Button size="icon" variant="outline" onClick={() => removeFromCart(item.id)}>
                                        <TrashIcon className="h-4 w-4" />
                                        <span className="sr-only">Remove</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="ml-auto grid gap-0.5 text-right">
                            <h3 className="font-semibold">${item.price}</h3>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" onClick={() => console.log('diminuir')}>
                                    <MinusIcon className="h-2 w-2" />
                                    <span className="sr-only">Decrease</span>
                                </Button>
                                <span className="text-sm font-medium">1</span>
                                <Button variant="outline" onClick={() => console.log('aumentar')}>
                                    <PlusIcon className="h-2 w-2" />
                                    <span className="sr-only">Increase</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Separator />
                </>
            ))}
        </div>
    )
};

const CartProductsInfo = () => {
    return (
        <div className='w-full h-full'>
            <div className="flex flex-col gap-1.5 ">
                <div className="flex items-center gap-4">
                    <div className="font-medium">Subtotal</div>
                    <div className="ml-auto font-semibold">$348.00</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="font-medium">Tax </div>
                    <div className="ml-auto font-semibold">$59.16</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="font-medium">Discount</div>
                    <div className="ml-auto font-semibold">-$20.00</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="font-semibold">Total</div>
                    <div className="ml-auto font-semibold">$387.16</div>
                </div>
            </div>
            <Button className="mt-4 w-full lg:w-auto">Proceed to Checkout</Button>
        </div>
    )
};