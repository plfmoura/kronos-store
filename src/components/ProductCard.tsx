import Image from "next/image";

type ProductCardProps = {
    id: number;
    image: string;
    name: string;
    price: number;
    stock: number;
    onPress: () => void;
};

export default function ProductCard({
    id,
    image,
    name,
    price,
    stock,
    onPress,
}: ProductCardProps) {
    return (
        <div
            className="p-4 border border-gray-200 rounded-md flex flex-col items-center gap-2"
        >
            <Image
                src={image}
                alt={name}
                width={300}
                height={300}
                className="w-full h-60 object-cover rounded-md"
            />
            <div className="w-full">
                <h2 className="text-lg font-bold">{name}</h2>
                <span>Preço: {price}</span>
                <p>Em estoque: {stock}</p>
            </div>
            <button
                onClick={onPress}
                className="w-full bg-gray-700 hover:bg-gray-900 transition-all text-white font-semibold px-4 py-2 rounded-md"
            >
                Adicionar ao carrinho
            </button>
        </div>
    );
};
