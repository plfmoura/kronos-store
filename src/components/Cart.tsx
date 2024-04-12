'use client';

import React from 'react'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckIcon, MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons"

import { useAppStore } from '@/store/AppStore';
import { ProductsItem, useProductsStore } from '@/store/ProductsStore';
import { Separator } from './ui/separator';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Cart({
    onClose,
}: {
    onClose: () => void;
}) {
    const { cart } = useProductsStore((state) => state);
    const { showSignIn, closeDrawer, user } = useAppStore();
    const router = useRouter();

    const handleProceedToCheckout = () => {
        if (user) {
            router.push('/checkout');
            closeDrawer();
        } else {
            closeDrawer();
            setTimeout(() => {
                showSignIn();
            }, 300);
        };
    };

    return (
        <CardContent>
            <CardHeader className='h-[10%] px-0 flex flex-row justify-between items-center'>
                <div>
                    <CardTitle>Shopping Cart</CardTitle>
                    <CardDescription>Your watches</CardDescription>
                </div>
                <Button
                    onClick={onClose}
                    size="icon"
                    variant="ghost"
                >
                    <span>Close</span>
                </Button>
            </CardHeader>
            {cart.length > 0 ? (
                <>
                    <CartProductsList
                        data={cart}
                    />
                    <CartProductsInfo
                        onCheckout={() => handleProceedToCheckout()}
                    />
                </>
            ) : (
                <div className="flex items-center justify-center mt-12 h-full">
                    <h2 className="text-lg font-semibold">Your cart is empty</h2>
                </div>
            )}

        </CardContent>
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

const CartProductsInfo = ({
    onCheckout,
}: {
    onCheckout: () => void;
}) => {
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
            <Button className="mt-4 w-full lg:w-auto" onClick={onCheckout}>Proceed to Checkout</Button>
        </div>
    )
};