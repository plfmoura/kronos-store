import { create } from 'zustand';
import api_data from '../api/data.json';

export type ProductsItem = {
    id: number;
    image: string;
    name: string;
    price: number;
    stock: number;
    quantity?: number; 
};

type ProductsStore = {
    products: ProductsItem[];
    cart: ProductsItem[];
    addToCart: (id: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    increaseQuantity: (id: number) => void; 
    decreaseQuantity: (id: number) => void; 
};

export const useProductsStore = create<ProductsStore>((set) => ({
    products: api_data,
    addToCart: (id) =>
        set((state) => {
            const product = state.products.find((p) => p.id === id);
            if (product) {
                return {
                    cart: [...state.cart, { ...product, quantity: 1 }],
                };
            }
            return state;
        }),
    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter((p) => p.id !== id),
        })),
    clearCart: () => set({ cart: [] }),
    cart: [],
    increaseQuantity: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
            ),
        })),
    decreaseQuantity: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id && item.quantity && item.quantity > 0
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ),
        })),
}));
