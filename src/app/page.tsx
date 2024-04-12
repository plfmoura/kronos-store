'use client';

import Headline from "@/components/Headline";
import ProductCard from "@/components/products/ProductCard";
import { useProductsStore } from "@/store/ProductsStore";

export default function Home() {
  const [products] = useProductsStore((state) => [state.products, state.cart, state.addToCart]);

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <Headline />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
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
      </div>
    </main>
  );
}
