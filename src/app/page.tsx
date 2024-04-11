'use client';

import Headline from "@/components/Headline";
import ProductCard from "@/components/ProductCard";
import Promotion from "@/components/Promotion";
import { useProductsStore } from "@/store/ProductsStore";

export default function Home() {
  const [products, cart, addToCart] = useProductsStore((state) => [state.products, state.cart, state.addToCart]);

  const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);

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
      <Promotion />
    </main>
  );
}
