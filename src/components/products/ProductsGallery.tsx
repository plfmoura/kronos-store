'use client';

import ProductCard from "@/components/products/ProductCard";
import { useProductsStore } from "@/store/ProductsStore";

export default function ProductsGallery({
    quantity,
}:{
    quantity?: number
}) {
    const [products] = useProductsStore((state) => [state.products, state.cart, state.addToCart]);
    const showProducts = quantity ? products.slice(0, quantity) : products;

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:p-6">
            {
                showProducts.map((item) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        stock={item.stock}
                    />
                ))
            }

        </section>
    )
}