import { create } from 'zustand';

type AppStore = {
    drawerOpen: boolean;
    setDrawerOpen: (drawerOpen: boolean) => void;
};

export const useAppStore = create<AppStore>((set) => ({
    drawerOpen: false,
    setDrawerOpen: (drawerOpen) => set({ drawerOpen }),
}))