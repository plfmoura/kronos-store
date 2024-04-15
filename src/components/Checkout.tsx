'use client';

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useProductsStore } from "@/store/ProductsStore"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store/AppStore";

export default function Checkout() {
    const router = useRouter();
    const { user, showSignIn } = useAppStore();
    const { cart } = useProductsStore();
    const cart_total = cart.reduce((acc, item) => acc + item.price, 0);

    useEffect(() => {
        if(cart.length === 0) {
            return router.back();
        }
        
        document.title = "Checkout - Kronos Store"

        return () => {
            document.title = "Kronos Store"
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmitPayment = () => {
        console.log("Payment submitted");
        if(!user) {
            showSignIn();
        }
    };
    
    return (
        <Card className="w-full max-w-4xl p-6 grid gap-6">
            <CardHeader className="border-b">
                <div className="flex flex-col gap-1">
                    <CardTitle>Order #3102</CardTitle>
                    <CardDescription>Enter your payment information.</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="address">Shipping address</Label>
                    <Textarea className="min-h-[80px]" id="address" placeholder="Enter your shipping address" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="address">Billing address</Label>
                    <Textarea className="min-h-[80px]" id="address" placeholder="Enter your billing address" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="number">Card number</Label>
                    <Input id="number" placeholder="Enter your card number" type="number" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="month">Expires</Label>
                        <Select>
                            <SelectTrigger aria-label="Month" id="month">
                                <SelectValue placeholder="Month" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">January</SelectItem>
                                <SelectItem value="2">February</SelectItem>
                                <SelectItem value="3">March</SelectItem>
                                <SelectItem value="4">April</SelectItem>
                                <SelectItem value="5">May</SelectItem>
                                <SelectItem value="6">June</SelectItem>
                                <SelectItem value="7">July</SelectItem>
                                <SelectItem value="8">August</SelectItem>
                                <SelectItem value="9">September</SelectItem>
                                <SelectItem value="10">October</SelectItem>
                                <SelectItem value="11">November</SelectItem>
                                <SelectItem value="12">December</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="year">Year</Label>
                        <Select>
                            <SelectTrigger aria-label="Year" id="year">
                                <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="2023">2023</SelectItem>
                                <SelectItem value="2024">2024</SelectItem>
                                <SelectItem value="2025">2025</SelectItem>
                                <SelectItem value="2026">2026</SelectItem>
                                <SelectItem value="2027">2027</SelectItem>
                                <SelectItem value="2028">2028</SelectItem>
                                <SelectItem value="2029">2029</SelectItem>
                                <SelectItem value="2030">2030</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="CVC" />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex items-center gap-4">
                <div className="flex flex-col">
                    <div className="font-semibold">Total amount</div>
                    <div className="text-3xl font-extrabold">${cart_total.toFixed(2)}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Includes all taxes and fees</div>
                </div>
                <Button size="lg" onClick={handleSubmitPayment}>Pay now</Button>
            </CardFooter>
        </Card>
    )
}