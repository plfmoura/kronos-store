'use client';

import { useProductsStore } from "@/store/ProductsStore";
import ProductCard from "../products/ProductCard";

export default function ProductsHome() {
  const [products] = useProductsStore((state) => [state.products, state.cart, state.addToCart]);

  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {
          products.map((item) => (
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
