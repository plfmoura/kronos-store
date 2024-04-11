import { create } from 'zustand';

const api_data = [
    { id: 1, image: '/assets/clock1.webp', name: 'Omega Seamaster', price: 1000, stock: 15 },
    { id: 2, image: '/assets/clock2.webp', name: 'Rolex Submariner', price: 2000, stock: 18 },
    { id: 3, image: '/assets/clock3.webp', name: 'Tag Heuer Carrera', price: 3000, stock: 12 },
    { id: 4, image: '/assets/clock4.webp', name: 'Breitling Navitimer', price: 4000, stock: 20 },
    { id: 5, image: '/assets/clock2.webp', name: 'Hublot Big Bang', price: 5000, stock: 17 },
    { id: 6, image: '/assets/clock3.webp', name: 'Patek Philippe Nautilus', price: 6000, stock: 14 },
    { id: 7, image: '/assets/clock3.webp', name: 'Audemars Piguet Royal Oak', price: 7000, stock: 16 },
    { id: 8, image: '/assets/clock1.webp', name: 'IWC Portugieser', price: 8000, stock: 13 },
    { id: 9, image: '/assets/clock4.webp', name: 'Panerai Luminor', price: 9000, stock: 19 },
    { id: 10, image: '/assets/clock3.webp', name: 'Cartier Tank', price: 10000, stock: 11 },
];

type ProductsItem = {
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