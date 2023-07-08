import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
  user: any;
};

type Action = {
  login: (user: any) => void;
  logout: () => void;
};

export const useAuthStore = create<State & Action>()(
  persist(
    (set) => ({
      user: null,

      login: (user: any) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useUser = () => useAuthStore((state) => state.user);
