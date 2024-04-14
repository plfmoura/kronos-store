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
        <div className="relative group overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => router.push(`/products/${id}`)}
        >
            <div className="overflow-hidden border-border border-2 p-2">
                <Image
                    alt={name}
                    className="object-cover w-full h-60 group-hover:scale-150 group-hover:bg-slate-200 transition-transform duration-300 ease-in-out"
                    height={300}
                    src={image}
                    style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                    }}
                    width={400}
                />
            </div>
            <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-base md:text-lg lg:text-base xl:text-lg 2xl:text-base">
                    {name}
                </h3>
                <h4 className="font-semibold text-base md:text-lg lg:text-base xl:text-lg 2xl:text-base group-hover:text-indigo-500 transition-colors duration-300 ease-in-out">${price}</h4>
            </div>
        </div>
    );
};
