import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ProductCardProps = {
    id: number;
    image: string;
    name: string;
    price: number;
    stock: number;
};

export default function ProductCard({
    id,
    image,
    name,
    price,
    stock,
}: ProductCardProps) {
    const router = useRouter();

    return (
        <div className="relative group overflow-hidden rounded-lg cursor-pointer"
            onClick={() => router.push(`/products/${id}`)}
        >
            <Image
                alt={name}
                className="object-cover w-full h-60 border-border border-2 p-2"
                height={300}
                src={image}
                style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                }}
                width={400}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-base md:text-lg lg:text-base xl:text-lg 2xl:text-base">
                    {name}
                </h3>
                <h4 className="font-semibold text-base md:text-lg lg:text-base xl:text-lg 2xl:text-base">${price}</h4>
            </div>
        </div>
    );
};
