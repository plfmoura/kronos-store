'use client';

import ProductCard from "@/components/ProductCard";
import { useProductsStore } from "@/store/ProductsStore";

export default function Home() {
  const [products, cart, addToCart] = useProductsStore((state) => [state.products, state.cart, state.addToCart]);

  const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div>
        {
          cartTotal === 0 ? <p className="flex gap-2 text-lg font-bold">Carrinho vazio</p> : (
            <p className="flex gap-2 text-lg font-bold">Total do Carrinho:
              <span>R${cartTotal.toFixed(2).replace('.', ',')}</span>
            </p>
          )
        }
      </div>
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
              onPress={() => addToCart(item.id)}
            />
          ))
        }
      </div>
    </main>
  );
}
