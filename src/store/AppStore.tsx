import { Session, User, WeakPassword } from '@supabase/supabase-js';
import { create } from 'zustand';

type UserProps = {
    user: User | null;
    session: Session | null;
    weakPassword?: WeakPassword | undefined | null;
};

type AppStore = {
    drawerOpen: boolean;
    drawerContent: 'cart' | 'signin' | 'signup' | 'recovery';
    closeDrawer: () => void;
    showSignIn: () => void;
    showSignUp: () => void;
    showCart: () => void;
    showRecovery: () => void;

    // user temporary resources 
    user: UserProps | null;
    setUser: (user: UserProps | null) => void;
    removeUser: () => void;
};

export const useAppStore = create<AppStore>((set) => ({
    drawerOpen: false,
    drawerContent: 'cart',
    closeDrawer: () => set({ drawerOpen: false }),
    showSignIn: () => set({ drawerContent: 'signin', drawerOpen: true }),
    showSignUp: () => set({ drawerContent: 'signup', drawerOpen: true }),
    showCart: () => set({ drawerContent: 'cart', drawerOpen: true }),
    showRecovery: () => set({ drawerContent: 'recovery', drawerOpen: true }),

    // user temporary resources 
    // user: {
    //     id: '1',
    //     email: '123@gmail.com',
    //     name: 'John Doe',
    //     role: 'user',
    // },
    user: null,
    setUser: (user) => set({ user }),
    removeUser: () => set({ user: null }),
}))