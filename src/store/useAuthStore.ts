import { create } from "zustand";

interface AuthState {
  token: string | null;
  user: any;
  role: string | null; // Add role to the state
  setToken: (token: string) => void;
  setUser: (user: any, role: string | null) => void;
  setRole: (role: string) => void; // Add setRole method
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  role: null, // Initialize role
  setToken: (token: string) => set({ token }),
  setUser: (user, role) => set({ user, role }),
  setRole: (role: string) => set({ role }), // Implement setRole
  clearUser: () => set({ user: null, role: null }), // Clear role on logout
}));
