'use client';
/* eslint-disable react/no-unescaped-entities */

import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useProductsStore } from "@/store/ProductsStore"
import { StarIcon } from "@/components/icons/StarIcon"
import Image from "next/image"
import { useRouter } from "next/navigation";

export default function ProductInfo({
    id
}: {
    id: string
}) {
    const [products, cart, addToCart] = useProductsStore((state) => [state.products, state.cart, state.addToCart]);
    const selectedProduct = products.find((product) => product.id === Number(id));
    const router = useRouter();

    const handleAddToCart = (id: number) => {
        addToCart(id);

        // TO DO add toast message to confirm product added to cart before redirecting
        router.push("/products");
    };

    return (
        <>
            {
                selectedProduct && (
                    <>
                        <div className="grid md:grid-cols-2 items-start max-w-6xl gap-6 lg:gap-12 px-4 mx-auto">
                            <ProductDetails
                                name={selectedProduct.name}
                                price={selectedProduct.price}
                                rating={5}
                                onCart={() => {
                                    handleAddToCart(selectedProduct.id);
                                }}
                            />
                            <ProductGallery
                                image={selectedProduct.image}
                            />
                        </div>
                        <div className="grid max-w-6xl gap-6 lg:gap-12 px-4 mx-auto">
                            <ProductSpecifications />
                            <ProductReviews />
                            <ProductAddYourReview />
                        </div>
                    </>
                )
            }
        </>
    )
}

const ProductDetails = ({
    name,
    price,
    rating,
    onCart,
}: {
    name: string,
    price: number,
    rating: number,
    onCart: () => void,
}) => {
    return (
        <div className="grid gap-4 md:gap-8 items-start">
            <div className="flex md:hidden items-start">
                <div className="grid gap-4">
                    <h1 className="font-bold text-2xl sm:text-3xl">{name}</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-0.5">
                            <StarIcon className="w-5 h-5 fill-primary" />
                            <StarIcon className="w-5 h-5 fill-primary" />
                            <StarIcon className="w-5 h-5 fill-primary" />
                            <StarIcon className="w-5 h-5 fill-primary" />
                            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                        </div>
                    </div>
                </div>
                <div className="text-4xl font-bold ml-auto">
                    R${price.toFixed(2).replace('.', ',')}
                </div>
            </div>
            <div className="hidden md:flex items-start">
                <div className="grid gap-4">
                    <h1 className="font-bold text-3xl lg:text-4xl">{name}</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-0.5">
                            <StarIcon className="w-5 h-5 fill-primary" />
                            <StarIcon className="w-5 h-5 fill-primary" />
                            <StarIcon className="w-5 h-5 fill-primary" />
                            <StarIcon className="w-5 h-5 fill-primary" />
                            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                        </div>
                    </div>
                </div>
                <div className="text-5xl font-bold ml-auto">
                    R${price.toFixed(2).replace('.', ',')}
                </div>
            </div>
            <form className="grid gap-4 md:gap-10">
                <div className="grid gap-2">
                    <Label className="text-base" htmlFor="color">
                        Color
                    </Label>
                    <RadioGroup className="flex items-center gap-2" defaultValue="phantom-black" id="color">
                        <Label
                            className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                            htmlFor="color-phantom-black"
                        >
                            <RadioGroupItem id="color-phantom-black" value="phantom-black" />
                            Phantom Black
                        </Label>
                        <Label
                            className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                            htmlFor="color-phantom-white"
                        >
                            <RadioGroupItem id="color-phantom-white" value="phantom-white" />
                            Phantom White
                        </Label>
                        <Label
                            className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                            htmlFor="color-burgundy-red"
                        >
                            <RadioGroupItem id="color-burgundy-red" value="burgundy-red" />
                            Burgundy Red
                        </Label>
                    </RadioGroup>
                </div>
                <div className="grid gap-2">
                    <Label className="text-base" htmlFor="size">
                        Size
                    </Label>
                    <RadioGroup className="flex items-center gap-2" defaultValue="256gb" id="size">
                        <Label
                            className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                            htmlFor="size-128gb"
                        >
                            <RadioGroupItem id="size-128gb" value="128gb" />
                            128GB{"\n                            "}
                        </Label>
                        <Label
                            className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                            htmlFor="size-256gb"
                        >
                            <RadioGroupItem id="size-256gb" value="256gb" />
                            256GB{"\n                            "}
                        </Label>
                        <Label
                            className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                            htmlFor="size-512gb"
                        >
                            <RadioGroupItem id="size-512gb" value="512gb" />
                            512GB{"\n                            "}
                        </Label>
                    </RadioGroup>
                </div>
                <div className="grid gap-2">
                    <Label className="text-base" htmlFor="quantity">
                        Quantity
                    </Label>
                    <Select defaultValue="1">
                        <SelectTrigger className="w-24">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button onClick={onCart} type="button" size="lg">Add to cart</Button>
            </form>
        </div>
    )
};

const ProductGallery = ({
    image
}: {
    image: string
}
) => {
    return (
        <div className="grid gap-4 md:gap-8 items-start">
            <div className="grid gap-4 md:gap-8">
                <Image
                    alt="Product Image"
                    className="h-full overflow-hidden object-cover rounded-lg border border-gray-200 w-full dark:border-gray-800"
                    height={400}
                    src={image}
                    width={600}
                />
            </div>
        </div>
    )
};

const ProductSpecifications = () => {
    return (
        <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Technical Specifications</h2>
            <div className="grid gap-2 text-sm leading-none md:grid-cols-2">
                <dl className="grid grid-cols-2">
                    <dt>Processor</dt>
                    <dd>Exynos 2200</dd>
                    <dt>RAM</dt>
                    <dd>12GB</dd>
                    <dt>Storage</dt>
                    <dd>256GB / 512GB</dd>
                    <dt>Display</dt>
                    <dd>6.8-inch Dynamic AMOLED 2X</dd>
                    <dt>Battery</dt>
                    <dd>5,000mAh</dd>
                </dl>
                <dl className="grid grid-cols-2">
                    <dt>Rear Camera</dt>
                    <dd>
                        108MP Wide
                        <br />
                        12MP Ultra-Wide
                        <br />
                        10MP Telephoto
                    </dd>
                    <dt>Front Camera</dt>
                    <dd>40MP</dd>
                    <dt>Operating System</dt>
                    <dd>One UI 5.1 (Android 12)</dd>
                    <dt>5G Connectivity</dt>
                    <dd>Sub-6 / mmWave</dd>
                    <dt>Security</dt>
                    <dd>Ultrasonic under-display fingerprint sensor</dd>
                </dl>
            </div>
        </div>
    )
}

const ProductReviews = () => {
    return (
        <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Customer Reviews</h2>
            <div className="flex items-start gap-4">
                <div className="grid gap-1">
                    <h3 className="text-base font-semibold">Excellent device</h3>
                    <div className="flex items-center gap-0.5">
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted">Posted 2 days ago by JohnDoe</p>
                </div>
                <div className="grid gap-4 text-sm leading-loose">
                    <p>
                        I've been using the Galaxy S22 Ultra for a few weeks now, and I'm incredibly impressed with the
                        performance and features of this device. The camera quality is outstanding, allowing me to capture
                        stunning photos and videos in any lighting conditions.
                    </p>
                    <p>
                        The battery life is excellent, easily lasting me through a full day of heavy usage. The display is
                        gorgeous, delivering vibrant colors and sharp details for an immersive viewing experience.
                    </p>
                    <p>
                        The device feels premium and well-built, and I appreciate the additional features such as the S Pen
                        support and the enhanced multitasking capabilities. Overall, I highly recommend the Galaxy S22 Ultra to
                        anyone looking for a top-of-the-line smartphone with powerful performance and advanced features.
                    </p>
                </div>
            </div>
            <Separator />
            <div className="flex items-start gap-4">
                <div className="grid gap-1">
                    <h3 className="text-base font-semibold">Disappointing experience</h3>
                    <div className="flex items-center gap-0.5">
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted">Posted 1 day ago by JaneSmith</p>
                </div>
                <div className="grid gap-4 text-sm leading-loose">
                    <p>
                        I was really looking forward to using the Galaxy S22 Ultra, but unfortunately, my experience with the
                        device has been quite disappointing. I've encountered several issues with the performance and software,
                        including frequent lag and stuttering when using the device.
                    </p>
                    <p>
                        The camera quality is the only aspect of the device that I find impressive, as it can capture
                        high-quality images. However, the battery life is not as long as I expected, and I often find myself
                        needing to recharge the device multiple times throughout the day.
                    </p>
                    <p>
                        I've also had issues with the fingerprint sensor, which seems to be unreliable and often fails to
                        recognize my fingerprint. Overall, I'm quite disappointed with my experience with the Galaxy S22 Ultra,
                        and I'm considering returning the device.
                    </p>
                </div>
            </div>
            <Separator />
        </div>
    )
};

const ProductAddYourReview = () => {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Write a Review</h3>
                <div className="grid gap-2">
                    <Label className="text-sm" htmlFor="review-title">
                        Review Title
                    </Label>
                    <Input id="review-title" required />
                </div>
                <div className="grid gap-2">
                    <Label className="text-sm" htmlFor="review">
                        Your Review
                    </Label>
                    <Textarea className="min-h-[100px]" id="review" required />
                </div>
                <div className="grid gap-2">
                    <Label className="text-sm" htmlFor="name">
                        Your Name
                    </Label>
                    <Input id="name" required />
                </div>
                <Button>Submit Review</Button>
            </div>
            <div className="flex flex-col gap-10">
                <h3 className="text-lg font-semibold">Rate the Product</h3>
                <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
            </div>
        </div>
    )
};