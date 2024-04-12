'use client';

import { useProductsStore } from '@/store/ProductsStore';
import React from 'react'
import ProductCard from './ProductCard';

export default function ProductsShortcut({
    quantity,
}: {
    quantity?: number,
}) {
    const [products] = useProductsStore((state) => [state.products, state.cart, state.addToCart]);
    const showProducts = quantity ? products.slice(0, quantity) : products;

    return (
        <section className="flex items-center justify-center gap-2 overflow-x-scroll w-full">
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
