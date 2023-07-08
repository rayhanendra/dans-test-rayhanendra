import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  user: any;
};

type AuthActions = {
  actions: {
    login: (user: any) => void;
    logout: () => void;
  };
};

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      user: null,

      actions: {
        login: (user) => set({ user }),
        logout: () => set({ user: null }),
      },
    }),
    {
      name: 'authStore',
    },
  ),
);

export const useUser = () => useAuthStore((state) => state.user);

export const useAuthActions = () => useAuthStore((state) => state.actions);
