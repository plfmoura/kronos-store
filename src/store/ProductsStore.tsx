import { create } from 'zustand';
import api_data from '../api/data.json';

export type ProductsItem = {
    id: number;
    image: string;
    name: string;
    price: number;
    stock: number;
};

type ProductsStore = {
    products: ProductsItem[];
    cart: ProductsItem[];
    addToCart: (id: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
};

export const useProductsStore = create<ProductsStore>((set) => ({
    products: api_data,
    setProducts: (products: ProductsItem[]) => set({ products }),
    cart: [],
    addToCart: (id) =>
        set((state) => {
            const product = state.products.find((p) => p.id === id);
            if (product) {
                return {
                    cart: [...state.cart, product],
                };
            }
            return {};
        }),
    removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
    clearCart: () => set({ cart: [] }),
}))