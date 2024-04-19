import { create } from 'zustand';
import api_data from '../api/data.json';

export type ProductsItem = {
    id: number;
    image: string;
    name: string;
    price: number;
    stock: number;
    quantity?: number;
    total?: number; // Adicionando a propriedade 'total' opcional ao tipo ProductsItem para armazenar o preço total do item
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
                    cart: [...state.cart, { ...product, quantity: 1, total: product.price }], // Inicializando a quantidade como 1 e o total como o preço do produto
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
    increaseQuantity: (id) => {
        const stockData = api_data.filter((item) => item.id === id);
        const stock = stockData[0]?.stock || 0; 

        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id && item.quantity && item.quantity < stock
                    ? {
                          ...item,
                          quantity: (item.quantity || 0) + 1, 
                          total: (item.price || 0) * ((item.quantity || 0) + 1),
                      }
                    : item
            ),
        }));
    },

    decreaseQuantity: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id && item.quantity && item.quantity > 0
                    ? {
                          ...item,
                          quantity: item.quantity - 1,
                          total: (item.price || 0) * (item.quantity || 0),
                      }
                    : item
            ),
        })),
}));
