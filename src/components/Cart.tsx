import React from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon, MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { useAppStore } from '@/store/AppStore';
import { ProductsItem, useProductsStore } from '@/store/ProductsStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import api_data from '../api/data.json'; // Importe os dados da API

export default function Cart({ onClose }: { onClose: () => void; }) {
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
        }
    };

    return (
        <CardContent>
            <CardHeader className='h-[10%] px-0 flex flex-row justify-between items-center'>
                <div>
                    <CardTitle>Shopping Cart</CardTitle>
                    <CardDescription>Your watches</CardDescription>
                </div>
                <Button onClick={onClose} size="icon" variant="ghost">
                    <span>Close</span>
                </Button>
            </CardHeader>
            {cart.length > 0 ? (
                <>
                    <CartProductsList data={cart} />
                    <CartProductsInfo cartItems={cart} onCheckout={handleProceedToCheckout} />
                </>
            ) : (
                <div className="flex items-center justify-center mt-12 h-full">
                    <h2 className="text-lg font-semibold">Your cart is empty</h2>
                </div>
            )}
        </CardContent>
    );
}

const CartProductsList = ({ data }: { data: ProductsItem[]; }) => {
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useProductsStore();

    return (
        <div className="grid gap-4 w-full max-h-[60vh] overflow-y-scroll pr-4 my-4">
            {data.map((item) => (
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
                                    {item.stock > 0 ? (
                                        <CheckIcon className="h-4 w-4 text-green-500" />
                                    ) : (
                                        <MinusIcon className="h-4 w-4 text-red-500" />
                                    )}
                                    <span className={item.stock > 0 ? "text-green-500" : "text-red-500"}>
                                        {item.stock > 0 ? "In Stock" : "Out of Stock"}
                                    </span>
                                </div>
                                <Button
                                    size="icon"
                                    variant="outline"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <TrashIcon className="h-4 w-4" />
                                    <span className="sr-only">Remove</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto grid gap-0.5 text-right">
                        <h3 className="font-semibold">${item.price}</h3>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                onClick={() => decreaseQuantity(item.id)}
                                disabled={item.quantity === 1}
                            >
                                <MinusIcon className="h-2 w-2" />
                                <span className="sr-only">Decrease</span>
                            </Button>
                            <span className="text-sm font-medium">{item.quantity || 1}</span>
                            <Button
                                variant="outline"
                                onClick={() => increaseQuantity(item.id)}
                                disabled={item.stock === 0}
                            >
                                <PlusIcon className="h-2 w-2" />
                                <span className="sr-only">Increase</span>
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const CartProductsInfo = ({ cartItems, onCheckout }: { cartItems: ProductsItem[]; onCheckout: () => void; }) => {
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
    const taxRate = 0.1;
    const tax = subtotal * taxRate;
    const discount = 20;

    const total = subtotal + tax - discount;

    return (
        <div className='w-full h-full'>
            <div className="flex flex-col gap-1.5 ">
                <div className="flex items-center gap-4">
                    <div className="font-medium">Subtotal</div>
                    <div className="ml-auto font-semibold">${subtotal.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="font-medium">Tax </div>
                    <div className="ml-auto font-semibold">${tax.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="font-medium">Discount</div>
                    <div className="ml-auto font-semibold">-${discount.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="font-semibold">Total</div>
                    <div className="ml-auto font-semibold">${total.toFixed(2)}</div>
                </div>
            </div>
            <Button className="mt-4 w-full lg:w-auto" onClick={onCheckout}>Proceed to Checkout</Button>
        </div>
    );
};